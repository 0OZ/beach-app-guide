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
		expect(await page.getByRole("heading", { level: 1 }).textContent()).toContain("OnSand");
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
