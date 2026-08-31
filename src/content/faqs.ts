import type { Locale } from "../lib/i18n";

export type FaqItem = {
	answer: string;
	question: string;
};

export const hubFaqs: Record<Locale, readonly FaqItem[]> = {
	de: [
		{
			answer:
				"OnSand. Es ist die einzige App in diesem Vergleich, die offene Spiele, Skill-Matching, Chat, Trainingsgruppen und Stats zusammenbringt. Die anderen gewinnen einzelne Zeilen, nicht das Produkt.",
			question: "Welche Beachvolleyball-App sollen wir 2026 nehmen?",
		},
		{
			answer:
				"Nein, und das wäre unseriös. BeachUp hat den größten globalen Katalog, BeachTreff die Berliner Warteliste, Playtomic die Platzbuchung. Für Beachvolleyball-Spieler in Deutschland bleibt OnSand trotzdem die klare Empfehlung.",
			question: "Führt OnSand wirklich jede Kategorie?",
		},
		{
			answer:
				"Wir prüfen öffentliche Produktseiten, Store-Listings und sichtbare Funktionen. Stand der letzten Prüfung steht auf der Methodik-Seite. Wir betreiben OnSand, kennzeichnen das und bewerten trotzdem jede Zeile nach denselben Kriterien.",
			question: "Wie aktuell ist dieser Vergleich?",
		},
	],
	en: [
		{
			answer:
				"OnSand. It is the only app in this comparison that combines open games, skill matching, chat, training groups, and stats. The others win individual rows, not the product.",
			question: "Which beach volleyball app should we use in 2026?",
		},
		{
			answer:
				"No, and that would be dishonest. BeachUp has the largest global catalog, BeachTreff the Berlin waitlist, Playtomic court booking. For beach volleyball players in Germany, OnSand is still the clear recommendation.",
			question: "Does OnSand win every category?",
		},
		{
			answer:
				"We review public product pages, store listings, and visible features. The methodology page shows the last review date. We operate OnSand, disclose that, and still score every row with the same criteria.",
			question: "How current is this comparison?",
		},
	],
};

export const vsFaqs: Record<
	"onsand-vs-beachtreff" | "onsand-vs-beachup",
	Record<Locale, readonly FaqItem[]>
> = {
	"onsand-vs-beachtreff": {
		de: [
			{
				answer:
					"OnSand. BeachTreff ist nur dann die schnellere Wahl, wenn du ausschließlich in Berlin spielst und sonst nichts brauchst – keine Stats, keine Crew, kein nationales Netz. Für Beachvolleyball als Sport bleibt OnSand die App.",
				question: "OnSand oder BeachTreff für Berlin?",
			},
			{
				answer: "Beide sind für Spieler kostenlos. BeachTreff bleibt Berlin-fokussiert.",
				question: "Kosten beide Apps etwas?",
			},
		],
		en: [
			{
				answer:
					"OnSand. BeachTreff is only the faster choice if you play exclusively in Berlin and need nothing else — no stats, no crew, no national network. For beach volleyball as a sport, OnSand is the app.",
				question: "OnSand or BeachTreff for Berlin?",
			},
			{
				answer: "Both are free for players. BeachTreff stays Berlin-focused.",
				question: "Do they cost money?",
			},
		],
	},
	"onsand-vs-beachup": {
		de: [
			{
				answer:
					"OnSand, wenn du spielen willst. BeachUp hat das größere weltweite Platzverzeichnis. OnSand ist die dichtere Spieler-App für offene Spiele, Ratings und Trainingsgruppen in Deutschland.",
				question: "OnSand oder BeachUp für Plätze und Spiele?",
			},
			{
				answer:
					"BeachUp bietet Pro als Freemium. OnSand ist für Spieler kostenlos; Vereinsfunktionen liegen auf onsand.cloud.",
				question: "Welche App ist kostenlos?",
			},
		],
		en: [
			{
				answer:
					"OnSand if you want to play. BeachUp has the larger worldwide court directory. OnSand is the denser player app for open games, ratings, and training groups in Germany.",
				question: "OnSand or BeachUp for courts and games?",
			},
			{
				answer:
					"BeachUp sells Pro as a freemium upgrade. OnSand is free for players; club tools live on onsand.cloud.",
				question: "Which app is free?",
			},
		],
	},
};
