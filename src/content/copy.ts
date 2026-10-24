import type { FeatureEvidence } from "../catalog/apps";
import type { FeatureKey } from "../catalog/matrix";
import type { PairSlug } from "../catalog/pairs";
import type { Locale } from "../lib/i18n";
import { SITE_NAME } from "../lib/site";

export const navCopy = {
	de: {
		apps: "Apps",
		comparisons: "Vergleiche",
		home: "Übersicht",
		legal: "Rechtliches",
		localeName: { de: "Deutsch", en: "English" },
		methodology: "So vergleichen wir",
		skipToContent: "Zum Inhalt",
	},
	en: {
		apps: "Apps",
		comparisons: "Comparisons",
		home: "Overview",
		legal: "Legal",
		localeName: { de: "Deutsch", en: "English" },
		methodology: "How we compare",
		skipToContent: "Skip to content",
	},
} satisfies Record<
	Locale,
	{
		apps: string;
		comparisons: string;
		home: string;
		legal: string;
		localeName: Record<Locale, string>;
		methodology: string;
		skipToContent: string;
	}
>;

export const hubCopy = {
	de: {
		compareCta: "Funktionen vergleichen",
		description:
			"BeachTreff, BeachUp, OnSand und Playtomic: Funktionen, Kostenmodelle und Einsatzgebiete anhand offizieller Quellen vergleichen.",
		disclosure:
			"Transparenz: Dieser Guide wird vom OnSand-Betreiber herausgegeben. Er ist kein unabhängiger Produkttest.",
		eyebrow: "Der App-Guide für deinen nächsten Spieltag",
		h1: "Weniger suchen. Mehr Beachvolleyball.",
		intro:
			"Ein Spiel in deiner Stadt, ein Platz im Urlaub oder eine feste Gruppe: Finde heraus, welche App zu deinem Spiel passt.",
		matrixCaption:
			"Laut offiziellen Produktseiten und Store-Einträgen. Jede belegte Angabe verlinkt ihre Quelle.",
		matrixHeading: "Funktionen im Vergleich",
		matrixNote:
			"„Nicht belegt“ bedeutet nicht „nicht vorhanden“. Gruppen, Spielniveau und Buchung unterscheiden sich je nach App — Details stehen in den Profilen.",
		methodologyLink: "Quellen & Methodik",
		profileLink: "App kennenlernen",
		profilesHeading: "Vier Apps. Unterschiedliche Schwerpunkte.",
		profilesIntro:
			"Keine Rangliste. Entscheidend ist, was du suchst — und ob bei dir vor Ort gespielt wird.",
		reviewedPrefix: "Quellen geprüft am",
		title: `Beachvolleyball-Apps im Vergleich | ${SITE_NAME}`,
		vsHeading: "Zwei Apps genauer ansehen",
	},
	en: {
		compareCta: "Compare features",
		description:
			"Compare BeachTreff, BeachUp, OnSand and Playtomic: published features, pricing models and use cases, with official sources.",
		disclosure:
			"Transparency: This guide is published by the OnSand operator. It is not an independent product test.",
		eyebrow: "An app guide for your next game",
		h1: "Less searching. More beach volleyball.",
		intro:
			"A game in your city, a court on holiday, or a regular group: find out which app fits the way you play.",
		matrixCaption:
			"Based on official product pages and store listings. Each documented claim links to its source.",
		matrixHeading: "Features compared",
		matrixNote:
			"“Not verified” does not mean “unavailable”. Groups, skill levels and booking work differently across apps — see the profiles for context.",
		methodologyLink: "Sources & methodology",
		profileLink: "Explore app",
		profilesHeading: "Four apps. Different strengths.",
		profilesIntro:
			"Not a ranking. What matters is what you need — and whether people are playing near you.",
		reviewedPrefix: "Sources reviewed",
		title: `Beach volleyball apps compared | ${SITE_NAME}`,
		vsHeading: "Take a closer look at two apps",
	},
} satisfies Record<Locale, Record<string, string>>;

export const featureLabels: Record<Locale, Record<FeatureKey, string>> = {
	de: {
		courtBooking: "Platzbuchung",
		courtDirectory: "Plätze finden",
		freeForPlayers: "Kostenloser Einstieg",
		inAppChat: "Chat",
		openGames: "Offene Spiele",
		ratingsOrStats: "Ergebnisbasierte Ratings / Stats",
		skillMatching: "Spielniveau berücksichtigen",
		trainingGroups: "Gruppen / Trainingsangebote",
		waitlist: "Automatisches Nachrücken",
	},
	en: {
		courtBooking: "Court booking",
		courtDirectory: "Find courts",
		freeForPlayers: "Free to get started",
		inAppChat: "Chat",
		openGames: "Open games",
		ratingsOrStats: "Results-based ratings / stats",
		skillMatching: "Play by skill level",
		trainingGroups: "Groups / coaching",
		waitlist: "Automatic waitlist promotion",
	},
};

export const evidenceLabels: Record<Locale, Record<FeatureEvidence["status"], string>> = {
	de: { documented: "Belegt", external: "Beim Anbieter", unverified: "Nicht belegt" },
	en: { documented: "Documented", external: "Via venue", unverified: "Not verified" },
};

export type PairCopy = {
	description: string;
	h1: string;
	intro: string;
	title: string;
	verdict: string;
};
export const pairCopy: Record<Locale, Record<PairSlug, PairCopy>> = {
	de: {
		"onsand-vs-beachtreff": {
			description:
				"OnSand und BeachTreff: Spielsuche, Chat, Wartelisten und regionale Schwerpunkte anhand offizieller Quellen vergleichen.",
			h1: "OnSand oder BeachTreff?",
			intro:
				"Beide Apps unterstützen offene Beachvolleyball-Spiele, Chat und automatisches Nachrücken. BeachTreff konzentriert sich auf Berlin; OnSand bewirbt ein deutschlandweites Angebot und zusätzliche Ratings und Trainingsgruppen.",
			title: `OnSand vs BeachTreff: Funktionen & Kosten | ${SITE_NAME}`,
			verdict:
				"Für Berliner Spielrunden lohnt sich ein Blick auf BeachTreff. Wenn du Ratings und Trainingsgruppen suchst, prüfe OnSand. Bei beiden zählt die tatsächliche Aktivität an deinem Standort — die haben wir nicht gemessen.",
		},
		"onsand-vs-beachup": {
			description:
				"OnSand und BeachUp: internationale Platzsuche, offene Spiele, Chat und Kostenmodelle mit Quellen vergleichen.",
			h1: "OnSand oder BeachUp?",
			intro:
				"Beide Apps werben mit offenen Spielen, Gruppen und Chat. BeachUp bietet ein internationales Platzverzeichnis mit optionalem Pro-Abo; OnSand richtet sich an Beachvolleyball-Spieler in Deutschland und bewirbt Ratings und Stats.",
			title: `OnSand vs BeachUp: Funktionen & Kosten | ${SITE_NAME}`,
			verdict:
				"Für die Platzsuche auf Reisen ist BeachUps internationales Verzeichnis einen Blick wert. Für Ratings und Trainingsgruppen in Deutschland prüfe OnSand. Ein Funktionsvergleich sagt nicht, welche App in deiner Stadt mehr Mitspieler hat.",
		},
	},
	en: {
		"onsand-vs-beachtreff": {
			description:
				"Compare OnSand and BeachTreff on games, chat, waitlists and geographic focus using official sources.",
			h1: "OnSand or BeachTreff?",
			intro:
				"Both apps advertise open beach volleyball games, chat and automatic waitlist promotion. BeachTreff focuses on Berlin; OnSand advertises a Germany-wide offering with ratings and training groups.",
			title: `OnSand vs BeachTreff: features & pricing | ${SITE_NAME}`,
			verdict:
				"For Berlin pickup games, take a look at BeachTreff. If you want ratings and training groups, check OnSand. For either app, local activity matters — and we have not measured it.",
		},
		"onsand-vs-beachup": {
			description:
				"Compare OnSand and BeachUp on international court discovery, games, chat and pricing models, with sources.",
			h1: "OnSand or BeachUp?",
			intro:
				"Both apps advertise open games, groups and chat. BeachUp offers an international court directory with optional Pro; OnSand focuses on beach volleyball in Germany and advertises ratings and stats.",
			title: `OnSand vs BeachUp: features & pricing | ${SITE_NAME}`,
			verdict:
				"For finding courts on your travels, consider BeachUp’s international directory. For ratings and training groups in Germany, check OnSand. A feature comparison cannot tell you which app has more active players near you.",
		},
	},
};
