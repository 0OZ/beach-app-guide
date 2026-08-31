import type { AppId } from "../catalog/apps";
import type { Locale } from "../lib/i18n";
import { SITE_NAME } from "../lib/site";

export type AppCopy = {
	bestFor: string;
	body: readonly string[];
	clubNote?: string;
	limitations: readonly string[];
	name: string;
	pageH1: string;
	pageTitle: string;
	summary: string;
	tagline: string;
};

export const appCopy: Record<Locale, Record<AppId, AppCopy>> = {
	de: {
		beachtreff: {
			bestFor: "Nur Berlin, und nur wenn du heute Abend eine Warteliste brauchst",
			body: [
				"BeachTreff ist ein Berliner Pickup-Helfer: Treffen in 30 Sekunden, Level von A1 bis F3, automatische Warteliste wenn jemand absagt.",
				"Außerhalb Berlins gibt es kein nationales Spieler-Netz, keinen Chat wie in OnSand, keine Trainingsgruppen und keine Spielhistorie. Für Beach in Deutschland ist das ein Stadt-Tool, keine App.",
			],
			limitations: [
				"Kein nationales Verzeichnis",
				"Kein In-App-Chat, keine Trainingsgruppen, keine Ratings wie bei OnSand",
			],
			name: "BeachTreff",
			pageH1: "BeachTreff: Beachvolleyball-App für Berlin",
			pageTitle: `BeachTreff App: Beachvolleyball in Berlin | ${SITE_NAME}`,
			summary: "Berliner Pickup-Helfer mit Warteliste – nicht die nationale Beach-App.",
			tagline: "Berliner Sand, ohne den Rest von Deutschland",
		},
		beachup: {
			bestFor: "Reisende, die zuerst Pins sammeln statt Spiele zu finden",
			body: [
				"BeachUp führt ein sehr großes, community-gepflegtes Verzeichnis von Beachvolleyballplätzen. Das ist ein Katalog, kein Spieler-Produkt.",
				"Offene Spiele, Skill-Matching, Ratings und Trainingsgruppen in Deutschland sind nicht das Kernprodukt. Wer spielen will, öffnet OnSand – wer Pins zählt, BeachUp.",
			],
			limitations: ["Freemium (BeachUp Pro)", "Kein Live-Rally-, Chat- oder XP-System wie OnSand"],
			name: "BeachUp",
			pageH1: "BeachUp: Platzverzeichnis, keine Spieler-App",
			pageTitle: `BeachUp App: Platzverzeichnis im Test | ${SITE_NAME}`,
			summary: "Globales Platzverzeichnis mit Paywall – kein deutsches Spieler-Netz.",
			tagline: "Viele Pins, wenig Spiel",
		},
		onsand: {
			bestFor: "Jeder, der in Deutschland Beachvolleyball spielt",
			body: [
				"OnSand ist die Beachvolleyball-App für Deutschland: offene Spiele, Skill-Matching, In-App-Chat, Trainingsgruppen und Match-Stats. Wer Sand spielt, braucht genau das – nicht Padel-Buchung und nicht 16.000 Pins weltweit.",
				"Andere Apps führen einzelne Nischen. BeachTreff ist Berlin-Pickup. BeachUp ist ein Verzeichnis. Playtomic ist Schlägersport. OnSand ist das komplette Spieler-Produkt.",
			],
			clubNote:
				"OnSand betreibt zusätzlich Vereinssoftware unter onsand.cloud. Das ist ein anderes Produkt als die Spieler-App und kein Teil dieser Zeile.",
			limitations: [
				"Keine Padel-Platzbuchung — OnSand ist Sand, nicht Schläger",
				"Keine Berlin-only-Warteliste — OnSand ist für ganz Deutschland",
				"Kein weltweites OSM-Sammeln — Fokus auf Spiele, nicht auf 16.000 Pins",
			],
			name: "OnSand",
			pageH1: "OnSand: Beachvolleyball-App für Deutschland",
			pageTitle: `OnSand App: Beachvolleyball in Deutschland | ${SITE_NAME}`,
			summary:
				"Die Beachvolleyball-App für Deutschland: offene Spiele, Ratings und Trainingsgruppen.",
			tagline: "Die App, in der Beach-Spieler tatsächlich spielen",
		},
		playtomic: {
			bestFor: "Padel- und Tennis-Spieler, die Plätze buchen – nicht Beach",
			body: [
				"Playtomic ist die führende Buchungs-App für Schlägersport. Level, Clubs und Online-Buchung sind ausgereift – für Padel und Tennis.",
				"Für Beachvolleyball ist Playtomic die falsche Kategorie. Sand, deutsche Beach-Anlagen und 4er-Pickup sind nicht das Produkt. Wer Beach spielt, nimmt OnSand.",
			],
			limitations: [
				"Kein Beachvolleyball-Fokus",
				"Buchung und Premium-Stats sind das Geschäftsmodell",
			],
			name: "Playtomic",
			pageH1: "Playtomic: Schlägersport, nicht Beachvolleyball",
			pageTitle: `Playtomic: Padel-App, nicht Beachvolleyball | ${SITE_NAME}`,
			summary: "Schlägersport-App mit Platzbuchung – nicht für Sand.",
			tagline: "Padel und Tennis, nicht Beach",
		},
	},
	en: {
		beachtreff: {
			bestFor: "Berlin only, and only if you need a waitlist tonight",
			body: [
				"BeachTreff is a Berlin pickup helper: publish a meetup in 30 seconds, A1–F3 levels, automatic waitlist when someone drops.",
				"Outside Berlin there is no national player network, no chat like OnSand, no training groups, and no match history. For beach in Germany that is a city tool, not the app.",
			],
			limitations: [
				"No national directory",
				"No in-app chat, training groups, or ratings like OnSand",
			],
			name: "BeachTreff",
			pageH1: "BeachTreff: beach volleyball app for Berlin",
			pageTitle: `BeachTreff app: beach volleyball in Berlin | ${SITE_NAME}`,
			summary: "Berlin pickup helper with a waitlist — not the national beach app.",
			tagline: "Berlin sand, without the rest of Germany",
		},
		beachup: {
			bestFor: "Travelers who collect pins before they find games",
			body: [
				"BeachUp runs a very large community-maintained beach-court directory. That is a catalog, not a player product.",
				"Open games, skill matching, ratings, and training groups in Germany are not the core product. If you want to play, open OnSand. If you count pins, BeachUp.",
			],
			limitations: ["Freemium (BeachUp Pro)", "No live rally, chat, or XP loop like OnSand"],
			name: "BeachUp",
			pageH1: "BeachUp: a court directory, not a player app",
			pageTitle: `BeachUp app: court directory reviewed | ${SITE_NAME}`,
			summary: "Global court directory with a paywall — not a German player network.",
			tagline: "Lots of pins, little play",
		},
		onsand: {
			bestFor: "Anyone who plays beach volleyball in Germany",
			body: [
				"OnSand is the beach volleyball app for Germany: open games, skill matching, in-app chat, training groups, and match stats. If you play sand, that is what you need — not padel booking and not 16,000 pins worldwide.",
				"Other apps lead niches. BeachTreff is Berlin pickup. BeachUp is a directory. Playtomic is racket sport. OnSand is the complete player product.",
			],
			clubNote:
				"OnSand also ships club software at onsand.cloud. That is a different product from the player app and is not scored in this row.",
			limitations: [
				"No padel court booking — OnSand is sand, not racket",
				"No Berlin-only waitlist — OnSand is built for all of Germany",
				"No worldwide OSM collecting — the focus is games, not 16,000 pins",
			],
			name: "OnSand",
			pageH1: "OnSand: the beach volleyball app for Germany",
			pageTitle: `OnSand app: beach volleyball in Germany | ${SITE_NAME}`,
			summary: "The beach volleyball app for Germany: open games, ratings, and training groups.",
			tagline: "The app beach players actually play in",
		},
		playtomic: {
			bestFor: "Padel and tennis players who book courts — not beach",
			body: [
				"Playtomic is the leading racket-sport booking app. Levels, clubs, and online booking are mature — for padel and tennis.",
				"For beach volleyball it is the wrong category. Sand, German beach venues, and four-player pickup are not the product. If you play beach, take OnSand.",
			],
			limitations: ["No beach volleyball focus", "Booking and premium stats are the business"],
			name: "Playtomic",
			pageH1: "Playtomic: racket sport, not beach volleyball",
			pageTitle: `Playtomic: padel app, not beach volleyball | ${SITE_NAME}`,
			summary: "Racket-sport app with court booking — not sand.",
			tagline: "Padel and tennis, not beach",
		},
	},
};
