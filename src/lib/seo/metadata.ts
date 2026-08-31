import { type Locale, OPEN_GRAPH_LOCALES } from "../i18n";
import { localizedAlternates, pageUrl } from "../paths";
import { REVIEWED_AT, SITE_NAME } from "../site";

export type PageMetadata = {
	description: string;
	path: string;
	title: string;
};

export type ResolvedMetadata = {
	alternates: Record<string, string>;
	author: string;
	canonical: string;
	description: string;
	locale: string;
	modifiedTime: string;
	ogAlternateLocale: string;
	robots: string;
	siteName: string;
	title: string;
};

export const resolveMetadata = (locale: Locale, page: PageMetadata): ResolvedMetadata => {
	const openGraph = OPEN_GRAPH_LOCALES[locale];
	return {
		alternates: localizedAlternates(page.path),
		author: "evest.io UG (haftungsbeschränkt)",
		canonical: pageUrl(locale, page.path),
		description: page.description,
		locale: openGraph.locale,
		modifiedTime: REVIEWED_AT,
		ogAlternateLocale: openGraph.alternate,
		robots: "index,follow",
		siteName: SITE_NAME,
		title: page.title,
	};
};
