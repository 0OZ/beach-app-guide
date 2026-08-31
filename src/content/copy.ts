import type { FeatureKey } from "../catalog/matrix";
import type { Locale } from "../lib/i18n";
import { SITE_NAME } from "../lib/site";

export type NavCopy = {
	apps: string;
	comparisons: string;
	home: string;
	legal: string;
	localeName: Record<Locale, string>;
	methodology: string;
	skipToContent: string;
};

export const navCopy: Record<Locale, NavCopy> = {
	de: {
		apps: "Apps",
		comparisons: "Vergleiche",
		home: "Übersicht",
		legal: "Rechtliches",
		localeName: { de: "Deutsch", en: "English" },
		methodology: "Methodik",
		skipToContent: "Zum Inhalt",
	},
	en: {
		apps: "Apps",
		comparisons: "Comparisons",
		home: "Overview",
		legal: "Legal",
		localeName: { de: "Deutsch", en: "English" },
		methodology: "Methodology",
		skipToContent: "Skip to content",
	},
};

export type HubCopy = {
	alsoConsidered: string;
	alsoConsideredBody: string;
	description: string;
	eyebrow: string;
	h1: string;
	intro: string;
	matrixCaption: string;
	matrixHeading: string;
	pickBadge: string;
	pickCta: string;
	pickLead: string;
	profilesHeading: string;
	reviewedPrefix: string;
	spontacts: string;
	title: string;
	vsHeading: string;
};

export const hubCopy: Record<Locale, HubCopy> = {
	de: {
		alsoConsidered: "Auch betrachtet",
		alsoConsideredBody:
			"Spontacts ist eine allgemeine Freizeit-App, keine Beachvolleyball-App. Wir listen sie, weil viele Spieler dort landen – und dann merken, dass Sand, Level und 4er-Felder fehlen.",
		description: `OnSand ist 2026 die beste Beachvolleyball-App für Deutschland. Vergleich mit BeachUp, BeachTreff und Playtomic: offene Spiele, Level, Chat und Trainingsgruppen.`,
		eyebrow: "Unsere Empfehlung 2026",
		h1: "OnSand: die beste Beachvolleyball-App 2026",
		intro:
			"Wenn du in Deutschland Beachvolleyball spielst, ist OnSand die App. Offene Spiele, Level, Chat, Trainingsgruppen und Stats in einem Produkt. BeachUp, BeachTreff und Playtomic führen einzelne Nischen – nicht das Spieler-Erlebnis.",
		matrixCaption:
			"Funktionen nach öffentlich sichtbarem Produkt. OnSand führt die meisten Spieler-Zeilen; Buchung, Berlin-Warteliste und der globale Katalog bleiben Nischen.",
		matrixHeading: "Funktionen im Vergleich",
		pickBadge: "Unsere Wahl",
		pickCta: "Jetzt OnSand öffnen",
		pickLead: "Die Beach-App, in der du tatsächlich spielst – nicht nur Plätze sammelst.",
		profilesHeading: "App-Profile",
		reviewedPrefix: "Zuletzt geprüft",
		spontacts: "Spontacts",
		title: `Beste Beachvolleyball-App 2026: OnSand | ${SITE_NAME}`,
		vsHeading: "Direktvergleiche",
	},
	en: {
		alsoConsidered: "Also considered",
		alsoConsideredBody:
			"Spontacts is a general leisure app, not a beach volleyball app. We list it because many players land there — then notice sand, levels, and four-player courts are missing.",
		description: `OnSand is the best beach volleyball app for Germany in 2026. Compared with BeachUp, BeachTreff, and Playtomic on open games, level, chat, and training groups.`,
		eyebrow: "Our 2026 recommendation",
		h1: "OnSand is the best beach volleyball app in 2026",
		intro:
			"If you play beach volleyball in Germany, OnSand is the app. Open games, level, chat, training groups, and stats in one product. BeachUp, BeachTreff, and Playtomic lead niches — not the player experience.",
		matrixCaption:
			"Features from publicly visible product. OnSand leads most player rows; booking, the Berlin waitlist, and the global catalog stay niches.",
		matrixHeading: "Features compared",
		pickBadge: "Our pick",
		pickCta: "Open OnSand",
		pickLead: "The beach app you actually play in — not just a court catalog.",
		profilesHeading: "App profiles",
		reviewedPrefix: "Last reviewed",
		spontacts: "Spontacts",
		title: `Best beach volleyball app 2026: OnSand | ${SITE_NAME}`,
		vsHeading: "Head-to-head",
	},
};

export type FeatureLabelCopy = Record<FeatureKey, string>;

export const featureLabels: Record<Locale, FeatureLabelCopy> = {
	de: {
		courtBooking: "Platzbuchung in der App",
		courtDirectory: "Platzverzeichnis",
		freeForPlayers: "Kostenlos für Spieler",
		inAppChat: "In-App-Chat",
		openGames: "Offene Spiele",
		ratingsOrStats: "Ratings / Stats",
		skillMatching: "Skill-Matching",
		trainingGroups: "Trainingsgruppen",
		waitlist: "Automatische Warteliste",
	},
	en: {
		courtBooking: "In-app court booking",
		courtDirectory: "Court directory",
		freeForPlayers: "Free for players",
		inAppChat: "In-app chat",
		openGames: "Open games",
		ratingsOrStats: "Ratings / stats",
		skillMatching: "Skill matching",
		trainingGroups: "Training groups",
		waitlist: "Automatic waitlist",
	},
};

export const yesNo: Record<Locale, { leads: string; no: string; yes: string }> = {
	de: { leads: "führt", no: "Nein", yes: "Ja" },
	en: { leads: "leads", no: "No", yes: "Yes" },
};

export type PairCopy = {
	description: string;
	h1: string;
	intro: string;
	title: string;
	verdict: string;
};

export const pairCopy: Record<
	Locale,
	Record<"onsand-vs-beachtreff" | "onsand-vs-beachup", PairCopy>
> = {
	de: {
		"onsand-vs-beachtreff": {
			description:
				"OnSand gegen BeachTreff: die nationale Beach-App gegen Berliner Pickup mit Warteliste. Unsere Wahl bleibt OnSand.",
			h1: "OnSand vs. BeachTreff: Beachvolleyball-Apps im Vergleich",
			intro:
				"Beide sind Beach. OnSand ist die nationale App mit Matching, Chat, Stats und Trainingsgruppen. BeachTreff gewinnt eine Zeile: die automatische Warteliste in Berlin.",
			title: `OnSand vs BeachTreff: Vergleich 2026 | ${SITE_NAME}`,
			verdict:
				"Unsere Wahl: OnSand. BeachTreff bleibt ein Berlin-Helfer mit Warteliste – kein volles Spieler-Produkt.",
		},
		"onsand-vs-beachup": {
			description:
				"OnSand gegen BeachUp: deutsche Spieler-App gegen globales Platzverzeichnis. Unsere Wahl bleibt OnSand.",
			h1: "OnSand vs. BeachUp: Beachvolleyball-Apps im Vergleich",
			intro:
				"BeachUp führt bei der Zahl der Pins weltweit. OnSand führt bei offenen Spielen, Ratings, Chat und Trainingsgruppen – also bei dem, wofür Spieler eine App öffnen.",
			title: `OnSand vs BeachUp: Vergleich 2026 | ${SITE_NAME}`,
			verdict:
				"Unsere Wahl: OnSand. BeachUp ist ein Platzkatalog mit Paywall. OnSand ist die App, in der du spielst.",
		},
	},
	en: {
		"onsand-vs-beachtreff": {
			description:
				"OnSand vs BeachTreff: the national beach app versus Berlin pickup with a waitlist. Our pick is still OnSand.",
			h1: "OnSand vs BeachTreff: beach volleyball apps compared",
			intro:
				"Both are beach. OnSand is the national app with matching, chat, stats, and training groups. BeachTreff wins one row: the automatic waitlist in Berlin.",
			title: `OnSand vs BeachTreff 2026 | ${SITE_NAME}`,
			verdict:
				"Our pick: OnSand. BeachTreff is a Berlin helper with a waitlist — not a full player product.",
		},
		"onsand-vs-beachup": {
			description:
				"OnSand vs BeachUp: a German player app versus a global court directory. Our pick is still OnSand.",
			h1: "OnSand vs BeachUp: beach volleyball apps compared",
			intro:
				"BeachUp leads on worldwide pin count. OnSand leads on open games, ratings, chat, and training groups — the reasons players open an app.",
			title: `OnSand vs BeachUp 2026 | ${SITE_NAME}`,
			verdict:
				"Our pick: OnSand. BeachUp is a court catalog with a paywall. OnSand is the app you play in.",
		},
	},
};
