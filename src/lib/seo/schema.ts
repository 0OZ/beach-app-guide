import { APP_IDS, type AppId, getApp } from "../../catalog/apps";
import type { PairSlug } from "../../catalog/pairs";
import { appCopy } from "../../content/apps";
import { hubFaqs, vsFaqs } from "../../content/faqs";
import type { Locale } from "../i18n";
import { pageUrl } from "../paths";
import { SITE_NAME, SITE_URL } from "../site";

export type JsonLd = Record<string, unknown>;

export type Breadcrumb = {
	name: string;
	path: string;
};

export const hubFaqJsonLd = (locale: Locale): JsonLd => ({
	"@context": "https://schema.org",
	"@type": "FAQPage",
	mainEntity: hubFaqs[locale].map((item) => ({
		"@type": "Question",
		acceptedAnswer: {
			"@type": "Answer",
			text: item.answer,
		},
		name: item.question,
	})),
});

export const profileSoftwareJsonLd = (id: AppId, locale: Locale): JsonLd => {
	const app = getApp(id);
	const copy = appCopy[locale][id];
	const schema: JsonLd = {
		"@context": "https://schema.org",
		"@type": "SoftwareApplication",
		applicationCategory: "SportsApplication",
		description: copy.summary,
		name: copy.name,
		operatingSystem: "iOS, Android",
		url: app.siteUrl,
	};
	if (app.price === "free") {
		schema.offers = {
			"@type": "Offer",
			price: "0",
			priceCurrency: "EUR",
		};
	}
	return schema;
};

export const hubItemListJsonLd = (locale: Locale): JsonLd => ({
	"@context": "https://schema.org",
	"@type": "ItemList",
	itemListElement: APP_IDS.map((id, index) => ({
		"@type": "ListItem",
		name: appCopy[locale][id].name,
		position: index + 1,
		url: pageUrl(locale, `/apps/${id}`),
	})),
	name: locale === "de" ? "Beste Beachvolleyball-Apps 2026" : "Best beach volleyball apps 2026",
});

export const websiteJsonLd = (locale: Locale): JsonLd => ({
	"@context": "https://schema.org",
	"@type": "WebSite",
	inLanguage: locale,
	name: SITE_NAME,
	publisher: {
		"@type": "Organization",
		email: "hello@onsand.app",
		legalName: "evest.io UG (haftungsbeschränkt)",
		name: SITE_NAME,
		url: SITE_URL,
	},
	url: SITE_URL,
});

export const breadcrumbJsonLd = (locale: Locale, crumbs: readonly Breadcrumb[]): JsonLd => ({
	"@context": "https://schema.org",
	"@type": "BreadcrumbList",
	itemListElement: crumbs.map((crumb, index) => ({
		"@type": "ListItem",
		item: pageUrl(locale, crumb.path),
		name: crumb.name,
		position: index + 1,
	})),
});

export const vsFaqJsonLd = (slug: PairSlug, locale: Locale): JsonLd => ({
	"@context": "https://schema.org",
	"@type": "FAQPage",
	mainEntity: vsFaqs[slug][locale].map((item) => ({
		"@type": "Question",
		acceptedAnswer: {
			"@type": "Answer",
			text: item.answer,
		},
		name: item.question,
	})),
});
