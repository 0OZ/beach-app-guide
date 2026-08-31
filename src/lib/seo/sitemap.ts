import { APP_IDS } from "../../catalog/apps";
import { COMPARISON_PAIRS } from "../../catalog/pairs";
import { LEGAL_SLUGS } from "../../content/legal";
import { locales } from "../i18n";
import { localizedAlternates, pageUrl } from "../paths";

export type SitemapEntry = {
	alternates: Record<string, string>;
	path: string;
	url: string;
};

const STATIC_PATHS = ["/", "/methodik"] as const;

export const sitemapEntries = (): SitemapEntry[] => {
	const paths: string[] = [...STATIC_PATHS];
	for (const slug of LEGAL_SLUGS) {
		paths.push(`/legal/${slug}`);
	}
	for (const id of APP_IDS) {
		paths.push(`/apps/${id}`);
	}
	for (const pair of COMPARISON_PAIRS) {
		paths.push(`/vergleich/${pair.slug}`);
	}

	const entries: SitemapEntry[] = [];
	for (const locale of locales) {
		for (const path of paths) {
			entries.push({
				alternates: localizedAlternates(path),
				path,
				url: pageUrl(locale, path),
			});
		}
	}
	return entries;
};

const escapeXml = (value: string): string =>
	value
		.replaceAll("&", "&amp;")
		.replaceAll('"', "&quot;")
		.replaceAll("'", "&apos;")
		.replaceAll("<", "&lt;")
		.replaceAll(">", "&gt;");

export const sitemapXml = (): string => {
	const body = sitemapEntries()
		.map((entry) => {
			const links = Object.entries(entry.alternates)
				.map(
					([language, href]) =>
						`<xhtml:link rel="alternate" hreflang="${escapeXml(language)}" href="${escapeXml(href)}" />`,
				)
				.join("");
			return `<url><loc>${escapeXml(entry.url)}</loc>${links}</url>`;
		})
		.join("");
	return `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${body}</urlset>`;
};
