import { defaultLocale, type Locale, locales, xDefaultLocale } from "./i18n";
import { SITE_BASE, SITE_URL } from "./site";

export const localePath = (locale: Locale, path: string): string => {
	if (path === "/") return `/${locale}`;
	const normalized = path.startsWith("/") ? path : `/${path}`;
	return `/${locale}${normalized}`;
};

export const pagePath = (locale: Locale, path: string): string =>
	`${SITE_BASE}${localePath(locale, path)}`;

export const defaultHomeHref = pagePath(defaultLocale, "/");

export const pageUrl = (locale: Locale, path: string): string =>
	`${SITE_URL}${localePath(locale, path)}`;

export const localizedAlternates = (path: string): Record<string, string> => {
	const languages: Record<string, string> = {
		"x-default": pageUrl(xDefaultLocale, path),
	};
	for (const locale of locales) {
		languages[locale] = pageUrl(locale, path);
	}
	return languages;
};
