import { describe, expect, test } from "bun:test";
import { defaultLocale, isLocale, locales, xDefaultLocale } from "./i18n";
import { localizedAlternates, pagePath, pageUrl } from "./paths";
import { SITE_BASE, SITE_ORIGIN, SITE_URL } from "./site";

describe("i18n", () => {
	test("German is the default and x-default locale", () => {
		expect(locales).toEqual(["de", "en"]);
		expect(defaultLocale).toBe("de");
		expect(xDefaultLocale).toBe("de");
		expect(isLocale("de")).toBe(true);
		expect(isLocale("fr")).toBe(false);
	});
});

describe("GitHub Pages origin", () => {
	test("uses the public github.io project URL", () => {
		expect(SITE_ORIGIN).toBe("https://0oz.github.io");
		expect(SITE_BASE).toBe("/beach-app-guide");
		expect(SITE_URL).toBe("https://0oz.github.io/beach-app-guide");
	});
});

describe("paths", () => {
	test("builds locale-prefixed paths under the GitHub Pages base", () => {
		expect(pagePath("de", "/")).toBe("/beach-app-guide/de");
		expect(pagePath("en", "/apps/onsand")).toBe("/beach-app-guide/en/apps/onsand");
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
