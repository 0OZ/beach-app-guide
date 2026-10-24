import type { Locale } from "../lib/i18n";

export type FaqItem = {
	answer: string;
	question: string;
};

export const hubFaqs: Record<Locale, readonly FaqItem[]> = {
	de: [
		{
			answer:
				"Das hängt von Ort und Vorhaben ab: BeachTreff fokussiert Berliner Treffen, BeachUp internationale Plätze und Spielergruppen, OnSand Spiele und Trainingsgruppen in Deutschland, Playtomic Schlägersport und Anlagenbuchung. Prüfe das konkrete Angebot vor Ort; wir haben keine Aktivitätsdichte gemessen und vergeben keinen Gesamtsieg.",
			question: "Welche App passt zu meiner Spielrunde?",
		},
		{
			answer:
				"BeachTreff beschreibt kostenlose Treffen und Community, OnSand kostenlose Spielernutzung. BeachUp bietet einen kostenlosen Einstieg und optional Pro, Playtomic kostenlose Basisfunktionen und optional Premium. Genaue Preise und Gratis-Limits sind nicht verifiziert. Platzgebühren und kostenpflichtige Trainingsangebote sind davon getrennt zu prüfen.",
			question: "Sind die Apps kostenlos?",
		},
		{
			answer:
				"Diese Seite wird vom OnSand-Betreiber herausgegeben und ist kein unabhängig betriebener Vergleich. Grundlage sind offizielle Websites und App-Store-Angaben, geprüft am 24. Oktober 2026, keine vergleichenden Praxistests. Historische Artikel sind als solche einzuordnen; die Methodik und Quellen je Funktion erläutern die Grenzen.",
			question: "Wer veröffentlicht den Vergleich und worauf beruht er?",
		},
	],
	en: [
		{
			answer:
				"It depends on location and purpose: BeachTreff focuses on Berlin sessions, BeachUp on international courts and player groups, OnSand on games and training groups in Germany, and Playtomic on racket sports and venue booking. Check actual local availability; we have not measured activity density and do not name an overall winner.",
			question: "Which app fits my playing group?",
		},
		{
			answer:
				"BeachTreff describes free sessions and community use, and OnSand free player use. BeachUp has a free entry offering and optional Pro; Playtomic has free core features and optional Premium. Exact prices and free limits are unverified. Check court fees and paid training offers separately.",
			question: "Are the apps free?",
		},
		{
			answer:
				"This guide is published by the OnSand operator, not an independently owned comparison site. It uses official websites and App Store claims reviewed on 24 October 2026, not comparative hands-on tests. Historical articles need to be read as historical claims; the methodology and per-feature sources explain the limits.",
			question: "Who publishes this comparison and what is it based on?",
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
					"BeachTreff dokumentiert Berlin-fokussierte offene Treffen, A1–F3-Filter, automatische Warteliste und Session-Chat. OnSand bewirbt Spiele in Deutschland, Chat, Warteliste, Ratings und Trainingsgruppen. Welche App vor Ort passende Runden bietet, ist nicht gemessen; daraus folgt keine pauschale Empfehlung.",
				question: "OnSand oder BeachTreff für Berlin?",
			},
			{
				answer:
					"BeachTreff beschreibt das Erstellen und Teilnehmen an Treffen sowie die Community als kostenlos, OnSand die Spielernutzung. Platzgebühren sind separat zu prüfen. BeachTreff verlinkt zur Buchung bei Anlagen; OnSand verweist ebenfalls auf die direkte Buchung beim Veranstaltungsort.",
				question: "Was ist kostenlos und wie werden Plätze gebucht?",
			},
		],
		en: [
			{
				answer:
					"BeachTreff documents Berlin-focused open sessions, A1–F3 filters, an automatic waitlist, and session chat. OnSand advertises games in Germany, chat, a waitlist, ratings, and training groups. We have not measured which app has suitable local sessions, so this is not a blanket recommendation.",
				question: "OnSand or BeachTreff for Berlin?",
			},
			{
				answer:
					"BeachTreff describes creating and joining sessions and community use as free; OnSand describes player use as free. Check court fees separately. BeachTreff links to venue booking; OnSand also directs users to book with the venue.",
				question: "What is free and how are courts booked?",
			},
		],
	},
	"onsand-vs-beachup": {
		de: [
			{
				answer:
					"Beide bewerben offene Spiele. BeachUp beschreibt ein internationales Platzverzeichnis, Level-Präferenzen und Spielergruppen; ein Artikel von 2023 dokumentiert Chat. OnSand beschreibt Spiele in Deutschland, Chat, Ratings und Trainingsgruppen. BeachUp-Gruppen sind nicht als eigene wiederkehrende Trainingsorganisation verifiziert. Lokale Aktivität wurde bei keiner App gemessen.",
				question: "Wie unterscheiden sich OnSand und BeachUp?",
			},
			{
				answer:
					"BeachUp bietet einen kostenlosen Download und ein Basisangebot sowie optional Pro; genaue Gratis-Limits sind nicht verifiziert. OnSand bewirbt kostenlose Spielernutzung. Platzgebühren und mögliche Trainingskosten sind separat zu prüfen. Herausgeber dieses Vergleichs ist der OnSand-Betreiber.",
				question: "Welche App ist kostenlos?",
			},
		],
		en: [
			{
				answer:
					"Both advertise open games. BeachUp describes an international court directory, level preferences, and player groups; a 2023 article documents chat. OnSand describes games in Germany, chat, ratings, and training groups. BeachUp groups have not been verified as dedicated recurring training management. Local activity has not been measured for either app.",
				question: "How do OnSand and BeachUp differ?",
			},
			{
				answer:
					"BeachUp offers a free download and basic offering plus optional Pro; exact free limits are unverified. OnSand advertises free player use. Check court fees and any training costs separately. This comparison is published by the OnSand operator.",
				question: "Which app is free?",
			},
		],
	},
};
