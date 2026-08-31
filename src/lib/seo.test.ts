import { describe, expect, test } from "bun:test";
import { APP_IDS } from "../catalog/apps";
import { COMPARISON_PAIRS } from "../catalog/pairs";
import { locales } from "./i18n";
import { robotsTxt } from "./seo/robots";
import { hubFaqJsonLd, profileSoftwareJsonLd, vsFaqJsonLd } from "./seo/schema";
import { sitemapEntries } from "./seo/sitemap";
import { SITE_URL } from "./site";

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
	});

	test("vs pages emit FAQPage schema", () => {
		expect(vsFaqJsonLd("onsand-vs-beachup", "en")["@type"]).toBe("FAQPage");
	});
});
