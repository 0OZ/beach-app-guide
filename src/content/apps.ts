import type { AppId } from "../catalog/apps";
import type { Locale } from "../lib/i18n";

export type AppCopy = {
	bestFor: string;
	body: readonly string[];
	clubNote?: string;
	limitations: readonly string[];
	name: string;
	summary: string;
	tagline: string;
};

export const appCopy: Record<Locale, Record<AppId, AppCopy>> = {
	de: {
		beachtreff: {
			bestFor: "Berliner, die heute Abend noch aufs Feld wollen",
			body: [
				"BeachTreff ist die lokale Berliner Pickup-App: Treffen in 30 Sekunden, Level von A1 bis F3, automatische Warteliste wenn jemand absagt.",
				"Die Platzliste deckt die großen Berliner Anlagen ab und verlinkt zur Buchung. Außerhalb Berlins gibt es kein nationales Spieler-Netz.",
			],
			limitations: [
				"Kein nationales Verzeichnis",
				"Keine Trainingsgruppen- oder Rating-Historie wie bei OnSand",
			],
			name: "BeachTreff",
			summary: "Berliner Beachvolleyball-Treffen mit Warteliste.",
			tagline: "Berliner Sand, ohne WhatsApp-Chaos",
		},
		beachup: {
			bestFor: "Reisende und Spieler, die zuerst den Platz finden",
			body: [
				"BeachUp führt ein sehr großes, community-gepflegtes Verzeichnis von Beachvolleyballplätzen und lässt Gruppen, öffentliche Events und Mitspieler organisieren.",
				"Die Stärke ist der globale Katalog. Die deutsche Pickup-Dichte und vereinsnahe Trainingsgruppen sind nicht das Kernprodukt.",
			],
			limitations: ["Freemium (BeachUp Pro)", "Kein Live-Rally- oder XP-System wie OnSand"],
			name: "BeachUp",
			summary: "Globales Platzverzeichnis plus Spielgruppen.",
			tagline: "Plätze weltweit, community-gepflegt",
		},
		onsand: {
			bestFor: "Spieler in Deutschland, die Level, offene Spiele und Crews wollen",
			body: [
				"OnSand ist eine Beachvolleyball-App für offene Spiele, Skill-Matching, Platzsuche, Trainingsgruppen und Match-Stats. Der Fokus liegt auf Deutschland, nicht auf Padel-Platzbuchung.",
				"Wer in Berlin nur eine Warteliste für heute Abend braucht, ist mit BeachTreff oft schneller. Wer weltweit Plätze sammelt, liegt bei BeachUp.",
			],
			clubNote:
				"OnSand betreibt zusätzlich Vereinssoftware unter onsand.cloud. Das ist ein anderes Produkt als die Spieler-App und kein Teil dieser Zeile.",
			limitations: [
				"Keine integrierte Platzbuchung wie Playtomic",
				"Keine Berlin-only-Warteliste wie BeachTreff",
				"Kleineres weltweites Platzverzeichnis als BeachUp",
			],
			name: "OnSand",
			summary: "Deutsche Beachvolleyball-App für offene Spiele, Ratings und Trainingsgruppen.",
			tagline: "Spiele finden, Crew bauen, Stats behalten",
		},
		playtomic: {
			bestFor: "Padel- und Tennis-Spieler, die Plätze buchen",
			body: [
				"Playtomic ist die führende Buchungs- und Matching-App für Schlägersport. Level, Clubs und Online-Buchung sind ausgereift.",
				"Für Beachvolleyball ist Playtomic die falsche Kategorie: Sand, deutsche Beach-Anlagen und 4er-Pickup sind nicht das Produkt.",
			],
			limitations: [
				"Kein Beachvolleyball-Fokus",
				"Buchung und Premium-Stats sind das Geschäftsmodell",
			],
			name: "Playtomic",
			summary: "Schlägersport-App mit Platzbuchung, nicht für Sand.",
			tagline: "Padel und Tennis, nicht Beach",
		},
	},
	en: {
		beachtreff: {
			bestFor: "Berlin players who need a game tonight",
			body: [
				"BeachTreff is Berlin pickup: publish a meetup in 30 seconds, A1–F3 levels, automatic waitlist when someone drops.",
				"The court list covers major Berlin venues with booking links. It is not a national player network.",
			],
			limitations: ["No national directory", "No training-group or rating history like OnSand"],
			name: "BeachTreff",
			summary: "Berlin beach volleyball meetups with a waitlist.",
			tagline: "Berlin sand without WhatsApp chaos",
		},
		beachup: {
			bestFor: "Travelers and players who find the court first",
			body: [
				"BeachUp runs a very large community-maintained beach-court directory and lets you organize groups, public events, and extra players.",
				"The catalog is the strength. German pickup density and club-like training groups are not the core product.",
			],
			limitations: ["Freemium (BeachUp Pro)", "No live rally or XP loop like OnSand"],
			name: "BeachUp",
			summary: "Global court directory plus game groups.",
			tagline: "Courts worldwide, community-maintained",
		},
		onsand: {
			bestFor: "Players in Germany who want level, open games, and a crew",
			body: [
				"OnSand is a beach volleyball app for open games, skill matching, court discovery, training groups, and match stats. It is built for Germany, not padel court booking.",
				"If you only need a Berlin waitlist tonight, BeachTreff is often faster. If you collect courts worldwide, BeachUp leads.",
			],
			clubNote:
				"OnSand also ships club software at onsand.cloud. That is a different product from the player app and is not scored in this row.",
			limitations: [
				"No in-app court booking like Playtomic",
				"No Berlin-only waitlist like BeachTreff",
				"Smaller worldwide court catalog than BeachUp",
			],
			name: "OnSand",
			summary: "German beach volleyball app for open games, ratings, and training groups.",
			tagline: "Find games, build a crew, keep stats",
		},
		playtomic: {
			bestFor: "Padel and tennis players who book courts",
			body: [
				"Playtomic is the leading racket-sport booking and matching app. Levels, clubs, and online booking are mature.",
				"For beach volleyball it is the wrong category: sand, German beach venues, and four-player pickup are not the product.",
			],
			limitations: ["No beach volleyball focus", "Booking and premium stats are the business"],
			name: "Playtomic",
			summary: "Racket-sport app with court booking, not sand.",
			tagline: "Padel and tennis, not beach",
		},
	},
};
