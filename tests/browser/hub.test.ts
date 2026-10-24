import { afterAll, beforeAll, describe, expect, test } from "bun:test";
import { type Browser, chromium, type Page } from "playwright";

const BASE_URL = process.env.BEACH_APP_GUIDE_BASE_URL ?? "http://localhost:4377/beach-app-guide";

let browser: Browser;

const jsonLdTypes = async (page: Page) => {
	const scripts = await page.locator("script[type='application/ld+json']").allTextContents();
	return scripts.map((script) => {
		const parsed: unknown = JSON.parse(script);
		if (
			typeof parsed !== "object" ||
			parsed === null ||
			!("@type" in parsed) ||
			typeof parsed["@type"] !== "string"
		) {
			throw new Error("JSON-LD script must contain a string @type");
		}
		return parsed["@type"];
	});
};

beforeAll(async () => {
	browser = await chromium.launch();
});

afterAll(async () => {
	await browser.close();
});

describe("hub in the browser", () => {
	test("entry URL reaches the German hub with H1, canonical, JSON-LD, and a visible table", async () => {
		const page = await browser.newPage();
		await page.goto(`${BASE_URL}/`, { waitUntil: "networkidle" });
		expect(new URL(page.url()).pathname).toMatch(/\/beach-app-guide\/de\/?$/);
		expect(await page.getByRole("heading", { level: 1 }).textContent()).not.toContain("OnSand");
		expect(await page.getByRole("heading", { level: 1 }).textContent()).toContain(
			"Beachvolleyball",
		);
		const canonical = await page.locator("link[rel='canonical']").getAttribute("href");
		expect(canonical).toContain("/de");
		expect(await jsonLdTypes(page)).toContain("ItemList");
		expect(await jsonLdTypes(page)).toContain("FAQPage");
		expect(await page.locator("table").isVisible()).toBe(true);
		await page.close();
	});
});

describe("guide navigation", () => {
	test("readers can compare, choose a profile, and switch language without losing it", async () => {
		const page = await browser.newPage();
		await page.goto(`${BASE_URL}/de`, { waitUntil: "networkidle" });
		await page.getByRole("link", { exact: true, name: "Funktionen vergleichen" }).click();
		expect(new URL(page.url()).hash).toBe("#features");
		await page.locator("main a[href$='/apps/beachup']").first().click();
		expect(await page.getByRole("heading", { level: 1 }).textContent()).toContain("BeachUp");
		await page.locator("header").getByRole("link", { name: "English" }).click();
		expect(new URL(page.url()).pathname).toMatch(/\/en\/apps\/beachup\/?$/);
		expect(await page.locator("html").getAttribute("lang")).toBe("en");
		expect(await page.getByRole("link", { name: "Official website" }).isVisible()).toBe(true);
		await page.close();
	});
});

describe("source-backed comparison", () => {
	test("unknowns are not negative claims and documented features link their source", async () => {
		const page = await browser.newPage();
		await page.goto(`${BASE_URL}/de`, { waitUntil: "networkidle" });
		const columns = await page.locator("thead th").allTextContents();
		const waitlist = page
			.getByRole("row")
			.filter({ has: page.getByRole("rowheader", { name: "Automatisches Nachrücken" }) });
		expect(
			await waitlist
				.locator("td")
				.nth(columns.indexOf("BeachUp") - 1)
				.textContent(),
		).toBe("Nicht belegt");
		expect(
			await waitlist
				.locator("td")
				.nth(columns.indexOf("OnSand") - 1)
				.getByRole("link")
				.getAttribute("href"),
		).toBe("https://onsand.app/de/features/find-match");
		expect(
			await page.getByRole("link", { name: "BeachTreff, Chat:" }).getAttribute("href"),
		).toContain("apps.apple.com");
		await page.close();
	});
});

describe("theme tokens", () => {
	test.each(["light", "dark"] as const)(
		"%s scheme uses the same semantic ink for headings and body",
		async (colorScheme) => {
			const page = await browser.newPage({ colorScheme });
			await page.goto(`${BASE_URL}/de`, { waitUntil: "networkidle" });
			const colors = await page.getByRole("heading", { level: 1 }).evaluate((heading) => ({
				body: getComputedStyle(document.documentElement).color,
				heading: getComputedStyle(heading).color,
			}));
			expect(colors.heading).toBe(colors.body);
			await page.close();
		},
	);
});

describe("mobile accessibility", () => {
	test("comparison source links remain reachable after horizontal scrolling at 200% text", async () => {
		const page = await browser.newPage({ viewport: { height: 812, width: 375 } });
		await page.goto(`${BASE_URL}/en`, { waitUntil: "networkidle" });
		await page.addStyleTag({ content: "html { font-size: 200%; }" });
		const booking = page
			.getByRole("row")
			.filter({ has: page.getByRole("rowheader", { name: "Court booking" }) });
		const source = booking.getByRole("link", { name: "Playtomic" });
		await source.scrollIntoViewIfNeeded();
		await source.click({ timeout: 2000, trial: true });
		await page.close();
	});

	test.each(["de", "en", "de/apps/onsand", "en/apps/beachup"])(
		"%s reflows at 200%% text size",
		async (path) => {
			const page = await browser.newPage({ viewport: { height: 812, width: 375 } });
			await page.goto(`${BASE_URL}/${path}`, { waitUntil: "networkidle" });
			await page.addStyleTag({ content: "html { font-size: 200%; }" });
			const width = await page.evaluate(() => document.documentElement.scrollWidth);
			expect(width).toBeLessThanOrEqual(375);
			await page.close();
		},
	);

	test("header links have comfortable touch targets", async () => {
		const page = await browser.newPage({ viewport: { height: 812, width: 375 } });
		await page.goto(`${BASE_URL}/de`, { waitUntil: "networkidle" });
		const targets = await page.locator("header a").evaluateAll((links) =>
			links.map((link) => {
				const { width, height } = link.getBoundingClientRect();
				return { height, label: link.textContent?.trim(), width };
			}),
		);
		for (const target of targets) {
			expect(target.width, target.label).toBeGreaterThanOrEqual(44);
			expect(target.height, target.label).toBeGreaterThanOrEqual(44);
		}
		await page.close();
	});
});

describe("vs page in the browser", () => {
	test("OnSand vs BeachTreff table is visible and has FAQ JSON-LD", async () => {
		const page = await browser.newPage();
		await page.goto(`${BASE_URL}/de/vergleich/onsand-vs-beachtreff`, {
			waitUntil: "networkidle",
		});
		expect(await page.getByRole("heading", { level: 1 }).textContent()).toContain("BeachTreff");
		expect(await jsonLdTypes(page)).toContain("FAQPage");
		expect(await page.locator("table").isVisible()).toBe(true);
		await page.close();
	});
});
