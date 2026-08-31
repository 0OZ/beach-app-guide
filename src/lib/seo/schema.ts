import { APP_IDS, type AppId, getApp } from "../../catalog/apps";
import type { PairSlug } from "../../catalog/pairs";
import { appCopy } from "../../content/apps";
import { hubFaqs, vsFaqs } from "../../content/faqs";
import type { Locale } from "../i18n";

export type JsonLd = Record<string, unknown>;

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
	return {
		"@context": "https://schema.org",
		"@type": "SoftwareApplication",
		applicationCategory: "SportsApplication",
		name: copy.name,
		operatingSystem: "iOS, Android",
		url: app.siteUrl,
	};
};

export const hubItemListJsonLd = (locale: Locale): JsonLd => ({
	"@context": "https://schema.org",
	"@type": "ItemList",
	itemListElement: APP_IDS.map((id, index) => ({
		"@type": "ListItem",
		name: appCopy[locale][id].name,
		position: index + 1,
		url: getApp(id).siteUrl,
	})),
	name: locale === "de" ? "Beachvolleyball-Apps" : "Beach volleyball apps",
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
