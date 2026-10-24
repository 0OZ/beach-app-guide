import { describe, expect, test } from "bun:test";
import { APP_IDS } from "../catalog/apps";
import { COMPARISON_PAIRS } from "../catalog/pairs";
import { appCopy } from "../content/apps";
import { hubCopy, pairCopy } from "../content/copy";
import { LEGAL_SLUGS, legalCopy } from "../content/legal";
import { methodikCopy } from "../content/methodik";
import { locales } from "./i18n";
import { robotsTxt } from "./seo/robots";
import {
	breadcrumbJsonLd,
	hubFaqJsonLd,
	hubItemListJsonLd,
	profileSoftwareJsonLd,
	vsFaqJsonLd,
	websiteJsonLd,
} from "./seo/schema";
import { sitemapEntries, sitemapXml } from "./seo/sitemap";
import { REVIEWED_AT, SITE_NAME, SITE_URL } from "./site";

describe("sitemap", () => {
	test("lists hub, methodik, legal, every app, and both pairs per locale", () => {
		const urls = sitemapEntries().map((entry) => entry.url);
		for (const locale of locales) {
			expect(urls).toContain(`${SITE_URL}/${locale}`);
			expect(urls).toContain(`${SITE_URL}/${locale}/methodik`);
			expect(urls).toContain(`${SITE_URL}/${locale}/legal/impressum`);
			expect(urls).toContain(`${SITE_URL}/${locale}/legal/datenschutz`);
			for (const id of APP_IDS) {
				expect(urls).toContain(`${SITE_URL}/${locale}/apps/${id}`);
			}
			for (const pair of COMPARISON_PAIRS) {
				expect(urls).toContain(`${SITE_URL}/${locale}/vergleich/${pair.slug}`);
			}
		}
		expect(urls).not.toContain(`${SITE_URL}/`);
	});

	test("hub entries include reciprocal hreflang alternates", () => {
		const hub = sitemapEntries().find((entry) => entry.url === `${SITE_URL}/de`);
		expect(hub?.alternates).toEqual({
			de: `${SITE_URL}/de`,
			en: `${SITE_URL}/en`,
			"x-default": `${SITE_URL}/de`,
		});
	});

	test("every URL carries a lastmod date", () => {
		const entries = sitemapEntries();
		expect(entries.length).toBeGreaterThan(0);
		expect(entries.every((entry) => entry.lastmod === REVIEWED_AT)).toBe(true);
		expect(sitemapXml()).toContain(`<lastmod>${REVIEWED_AT}</lastmod>`);
	});
});

describe("robots", () => {
	test("allows crawlers and points at the sitemap", () => {
		expect(robotsTxt()).toContain("Allow: /");
		expect(robotsTxt()).toContain(`Sitemap: ${SITE_URL}/sitemap.xml`);
	});
});

describe("json-ld", () => {
	test("hub FAQ uses FAQPage", () => {
		expect(hubFaqJsonLd("de")["@type"]).toBe("FAQPage");
	});

	test("OnSand profile schema is SoftwareApplication pointing at onsand.app", () => {
		const schema = profileSoftwareJsonLd("onsand", "de");
		expect(schema["@type"]).toBe("SoftwareApplication");
		expect(schema.url).toBe("https://onsand.app");
		expect(schema.description).toBe(appCopy.de.onsand.summary);
	});

	test("hub ItemList points at first-party profile URLs", () => {
		const schema = hubItemListJsonLd("de");
		const items = schema.itemListElement as readonly { url: string }[];
		expect(items.map((item) => item.url)).toEqual(APP_IDS.map((id) => `${SITE_URL}/de/apps/${id}`));
		expect(items.every((item) => item.url.startsWith(`${SITE_URL}/`))).toBe(true);
	});

	test("hub includes WebSite schema for this origin", () => {
		const schema = websiteJsonLd("de");
		expect(schema["@type"]).toBe("WebSite");
		expect(schema.url).toBe(SITE_URL);
		expect(schema.name).toBe(SITE_NAME);
	});

	test("breadcrumbs list Home then the current page", () => {
		const schema = breadcrumbJsonLd("de", [
			{ name: "Übersicht", path: "/" },
			{ name: "OnSand", path: "/apps/onsand" },
		]);
		const items = schema.itemListElement as readonly { item: string; position: number }[];
		expect(schema["@type"]).toBe("BreadcrumbList");
		expect(items[0]?.item).toBe(`${SITE_URL}/de`);
		expect(items[1]?.item).toBe(`${SITE_URL}/de/apps/onsand`);
		expect(items[1]?.position).toBe(2);
	});

	test("vs pages emit FAQPage schema", () => {
		expect(vsFaqJsonLd("onsand-vs-beachup", "en")["@type"]).toBe("FAQPage");
	});
});

describe("document titles", () => {
	const moneyTitles = (): string[] => {
		const titles: string[] = [];
		for (const locale of locales) {
			titles.push(hubCopy[locale].title);
			titles.push(methodikCopy[locale].title);
			for (const id of APP_IDS) {
				titles.push(appCopy[locale][id].pageTitle);
			}
			for (const pair of COMPARISON_PAIRS) {
				titles.push(pairCopy[locale][pair.slug].title);
			}
			for (const slug of LEGAL_SLUGS) {
				titles.push(`${legalCopy[locale][slug].title} | ${SITE_NAME}`);
			}
		}
		return titles;
	};

	test("every locale page has a unique title", () => {
		const titles = moneyTitles();
		expect(new Set(titles).size).toBe(titles.length);
	});

	test("German hub and OnSand profile target distinct Beachvolleyball intents", () => {
		expect(hubCopy.de.title).toContain("Beachvolleyball-Apps im Vergleich");
		expect(appCopy.de.onsand.pageTitle).toContain("OnSand");
		expect(appCopy.de.onsand.pageTitle).toContain("Beachvolleyball");
		expect(hubCopy.de.title).not.toBe(appCopy.de.onsand.pageTitle);
	});
});
