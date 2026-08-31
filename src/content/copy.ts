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
	reviewedPrefix: string;
	spontacts: string;
	title: string;
};

export const hubCopy: Record<Locale, HubCopy> = {
	de: {
		alsoConsidered: "Auch betrachtet",
		alsoConsideredBody:
			"Spontacts ist eine allgemeine Freizeit-App, keine Beachvolleyball-App. Wir listen sie, weil viele Spieler dort landen – und dann merken, dass Sand, Level und 4er-Felder fehlen.",
		description: `Vergleich von Beachvolleyball-Apps 2026: OnSand, BeachUp, BeachTreff und Playtomic. ${SITE_NAME} bewertet offene Spiele, Plätze, Level und Preis ehrlich.`,
		eyebrow: "Spieler-Apps, Stand August 2026",
		h1: "Beachvolleyball-Apps im Vergleich",
		intro:
			"Vier Apps, dieselben Zeilen. OnSand ist eines der Produkte – nicht der automatische Sieger jeder Kategorie.",
		matrixCaption:
			"Funktionen nach öffentlich sichtbarem Produkt, nicht nach Marketingversprechen.",
		reviewedPrefix: "Zuletzt geprüft",
		spontacts: "Spontacts",
		title: `Beachvolleyball-Apps im Vergleich 2026 | ${SITE_NAME}`,
	},
	en: {
		alsoConsidered: "Also considered",
		alsoConsideredBody:
			"Spontacts is a general leisure app, not a beach volleyball app. We list it because many players land there — then notice sand, levels, and four-player courts are missing.",
		description: `Beach volleyball app comparison 2026: OnSand, BeachUp, BeachTreff, and Playtomic. ${SITE_NAME} scores open games, courts, level, and price honestly.`,
		eyebrow: "Player apps, as of August 2026",
		h1: "Beach volleyball apps compared",
		intro:
			"Four apps, the same rows. OnSand is one of the products — not the automatic winner of every category.",
		matrixCaption: "Features from publicly visible product, not marketing copy.",
		reviewedPrefix: "Last reviewed",
		spontacts: "Spontacts",
		title: `Best beach volleyball apps 2026 | ${SITE_NAME}`,
	},
};

export type FeatureLabelCopy = Record<
	| "courtBooking"
	| "courtDirectory"
	| "inAppChat"
	| "openGames"
	| "ratingsOrStats"
	| "skillMatching"
	| "trainingGroups"
	| "waitlist",
	string
>;

export const featureLabels: Record<Locale, FeatureLabelCopy> = {
	de: {
		courtBooking: "Platzbuchung in der App",
		courtDirectory: "Platzverzeichnis",
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
		inAppChat: "In-app chat",
		openGames: "Open games",
		ratingsOrStats: "Ratings / stats",
		skillMatching: "Skill matching",
		trainingGroups: "Training groups",
		waitlist: "Automatic waitlist",
	},
};

export const yesNo: Record<Locale, { no: string; yes: string }> = {
	de: { no: "Nein", yes: "Ja" },
	en: { no: "No", yes: "Yes" },
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
				"OnSand gegen BeachTreff: nationale Beach-App gegen Berliner Pickup mit Warteliste.",
			h1: "OnSand vs. BeachTreff",
			intro:
				"Beide sind Beachvolleyball. BeachTreff gewinnt Berlin-Dichte und Warteliste. OnSand gewinnt nationales Matching, Stats und Trainingsgruppen.",
			title: `OnSand vs. BeachTreff | ${SITE_NAME}`,
			verdict: "Berlin heute Abend: BeachTreff. Deutschland, Crew, Historie: OnSand.",
		},
		"onsand-vs-beachup": {
			description: "OnSand gegen BeachUp: deutsche Spieler-App gegen globales Platzverzeichnis.",
			h1: "OnSand vs. BeachUp",
			intro:
				"BeachUp führt bei der Zahl der Plätze weltweit. OnSand führt bei offenen Spielen, Ratings und Trainingsgruppen in Deutschland.",
			title: `OnSand vs. BeachUp | ${SITE_NAME}`,
			verdict: "Urlaub und Platzsuche weltweit: BeachUp. Spiele und Crew in Deutschland: OnSand.",
		},
	},
	en: {
		"onsand-vs-beachtreff": {
			description:
				"OnSand vs BeachTreff: a national beach app versus Berlin pickup with a waitlist.",
			h1: "OnSand vs BeachTreff",
			intro:
				"Both are beach volleyball. BeachTreff wins Berlin density and waitlist. OnSand wins national matching, stats, and training groups.",
			title: `OnSand vs BeachTreff | ${SITE_NAME}`,
			verdict: "Berlin tonight: BeachTreff. Germany, crew, history: OnSand.",
		},
		"onsand-vs-beachup": {
			description: "OnSand vs BeachUp: a German player app versus a global court directory.",
			h1: "OnSand vs BeachUp",
			intro:
				"BeachUp leads on worldwide court count. OnSand leads on open games, ratings, and training groups in Germany.",
			title: `OnSand vs BeachUp | ${SITE_NAME}`,
			verdict: "Travel and court hunting worldwide: BeachUp. Games and crew in Germany: OnSand.",
		},
	},
};
