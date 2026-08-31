import { describe, expect, test } from "bun:test";
import { defaultLocale, isLocale, locales, xDefaultLocale } from "./i18n";
import { localizedAlternates, pagePath, pageUrl } from "./paths";
import { SITE_URL } from "./site";

describe("i18n", () => {
	test("German is the default and x-default locale", () => {
		expect(locales).toEqual(["de", "en"]);
		expect(defaultLocale).toBe("de");
		expect(xDefaultLocale).toBe("de");
		expect(isLocale("de")).toBe(true);
		expect(isLocale("fr")).toBe(false);
	});
});

describe("paths", () => {
	test("builds locale-prefixed paths", () => {
		expect(pagePath("de", "/")).toBe("/de");
		expect(pagePath("en", "/apps/onsand")).toBe("/en/apps/onsand");
	});

	test("builds absolute page URLs from the site origin", () => {
		expect(pageUrl("de", "/vergleich/onsand-vs-beachup")).toBe(
			`${SITE_URL}/de/vergleich/onsand-vs-beachup`,
		);
	});

	test("emits reciprocal hreflang map including x-default", () => {
		expect(localizedAlternates("/apps/onsand")).toEqual({
			de: `${SITE_URL}/de/apps/onsand`,
			en: `${SITE_URL}/en/apps/onsand`,
			"x-default": `${SITE_URL}/de/apps/onsand`,
		});
	});
});
