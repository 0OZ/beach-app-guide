import type { Locale } from "../lib/i18n";

export type FaqItem = {
	answer: string;
	question: string;
};

export const hubFaqs: Record<Locale, readonly FaqItem[]> = {
	de: [
		{
			answer:
				"Eine Beachvolleyball-App sollte offene Spiele, ein Platzverzeichnis und ein nachvollziehbares Level zeigen. Allgemeine Sport-Apps wie Playtomic sind stark bei Platzbuchung, aber nicht auf Sand spezialisiert.",
			question: "Woran erkenne ich eine gute Beachvolleyball-App?",
		},
		{
			answer:
				"Nein. OnSand gewinnt bei Skill-Matching, Trainingsgruppen und Spielhistorie in Deutschland. BeachUp führt bei der globalen Platzanzahl, BeachTreff bei Berliner Wartelisten, Playtomic bei der Platzbuchung.",
			question: "Ist OnSand in jeder Kategorie die beste App?",
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
				"A beach volleyball app should show open games, a court directory, and a readable skill level. Generic sports apps like Playtomic are strong at court booking, but they are not built around sand.",
			question: "What makes a good beach volleyball app?",
		},
		{
			answer:
				"No. OnSand leads on skill matching, training groups, and match history in Germany. BeachUp leads on global court count, BeachTreff on Berlin waitlists, Playtomic on court booking.",
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
					"Wenn du nur in Berlin spielst und eine automatische Warteliste willst, ist BeachTreff oft der schnellere Weg aufs Feld. OnSand ist die bessere Wahl, wenn du über Berlin hinaus Spiele, Stats und Trainingsgruppen brauchst.",
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
					"If you only play in Berlin and want an automatic waitlist, BeachTreff is often the fastest way onto a court. OnSand is the better fit if you need games, stats, and training groups beyond Berlin.",
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
					"BeachUp hat das größere weltweite Platzverzeichnis. OnSand ist die dichtere Spieler-App für offene Spiele, Ratings und Trainingsgruppen in Deutschland.",
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
					"BeachUp has the larger worldwide court directory. OnSand is the denser player app for open games, ratings, and training groups in Germany.",
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
