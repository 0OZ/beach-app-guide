import type { AppId } from "../catalog/apps";
import type { Locale } from "../lib/i18n";
import { SITE_NAME } from "../lib/site";

export type AppCopy = {
	bestFor: string;
	body: readonly string[];
	caveat: string;
	clubNote?: string;
	fit: string;
	limitations: readonly string[];
	name: string;
	pageH1: string;
	pageTitle: string;
	pricing: string;
	summary: string;
	tagline: string;
};

export const appCopy: Record<Locale, Record<AppId, AppCopy>> = {
	de: {
		beachtreff: {
			bestFor: "Für Spielrunden in Berlin mit Level-Filtern und automatischer Warteliste.",
			body: [
				"BeachTreff beschreibt offene Beachvolleyball-Treffen mit Berlin-Fokus, Level-Filtern von A1 bis F3 und einer automatischen Warteliste.",
				"Aktuelle Versionshinweise nennen einen Session-Chat. Buchungslinks führen zu den Anlagen; ein eigener Buchungsabschluss in der App ist damit nicht belegt.",
			],
			caveat: "Lokale Aktivität nicht gemessen; Angaben der Anbieter, kein Praxistest.",
			fit: "Berliner Spielrunden",
			limitations: [
				"Der dokumentierte Schwerpunkt liegt auf Berlin; die Aktivität an anderen Orten wurde nicht geprüft.",
				"Eigene wiederkehrende Trainingsgruppen sowie Ratings und Statistiken sind in den geprüften Quellen nicht belegt.",
			],
			name: "BeachTreff",
			pageH1: "BeachTreff: Beachvolleyball-Treffen in Berlin",
			pageTitle: `BeachTreff: Spiele und Warteliste in Berlin | ${SITE_NAME}`,
			pricing:
				"Treffen erstellen, teilnehmen und Community laut Website kostenlos; mögliche Platzgebühren separat bei der Anlage prüfen.",
			summary:
				"Berlin-fokussierte Beachvolleyball-App mit offenen Treffen, Level-Filtern, Warteliste und Session-Chat laut Anbieter.",
			tagline: "Offene Treffen mit Berlin-Fokus",
		},
		beachup: {
			bestFor: "Für die internationale Platzsuche sowie offene Spiele und Spielergruppen.",
			body: [
				"BeachUp bewirbt ein internationales Beachvolleyball-Platzverzeichnis, offene Spiele, Spielergruppen und Level-Präferenzen.",
				"Ein offizieller Artikel von August 2023 beschreibt Chat; ein weiterer erläutert Spielstärke-Kriterien. Das sind veröffentlichte Anbieterangaben, keine aktuell selbst getesteten Funktionen.",
			],
			caveat:
				"Lokale Aktivität und heutiger Chat-Umfang nicht selbst getestet; Chat-Quelle von 2023.",
			fit: "Internationale Plätze und Gruppen",
			limitations: [
				"Spielergruppen sind dokumentiert, aber nicht als eigenständige wiederkehrende Trainingsorganisation verifiziert.",
				"Ratings und Statistiken, automatische Warteliste und ein Buchungsabschluss in der App sind nicht belegt; genaue Gratis-Limits bleiben offen.",
			],
			name: "BeachUp",
			pageH1: "BeachUp: Plätze, Spiele und Spielergruppen",
			pageTitle: `BeachUp: Plätze, Spiele und Gruppen | ${SITE_NAME}`,
			pricing:
				"Kostenloser Download und Basisangebot; optional BeachUp Pro. Genaue Gratis-Limits und mögliche Platzgebühren separat prüfen.",
			summary:
				"BeachUp bewirbt internationale Beachvolleyball-Plätze, offene Spiele, Spielergruppen und Level-Präferenzen.",
			tagline: "Internationale Platzsuche und Spielorganisation",
		},
		onsand: {
			bestFor:
				"Für offene Spiele in Deutschland sowie Clubs, Trainingsgruppen und Spielstatistiken.",
			body: [
				"OnSand bewirbt deutschlandweit offene Beachvolleyball-Spiele, Chat, Ratings und Statistiken sowie Clubs und Trainingsgruppen. Eine Warteliste ist auf der offiziellen Funktionsseite dokumentiert.",
				"Die Platzseite beschreibt die Suche nach Anlagen und die direkte Buchung bei der jeweiligen Anlage, nicht einen Buchungsabschluss innerhalb von OnSand.",
			],
			caveat:
				"Diese Seite wird vom OnSand-Betreiber herausgegeben; lokale Aktivität und Überlegenheit sind nicht gemessen.",
			clubNote:
				"Der Herausgeber betreibt OnSand. Die zusätzliche Vereinssoftware unter onsand.cloud ist ein separates Produkt und wird hier nicht bewertet.",
			fit: "Spiele und Trainingsgruppen in Deutschland",
			limitations: [
				"Deutschlandweiter Produktfokus belegt keine gleichmäßige Spielerdichte oder verfügbaren Spiele an jedem Ort.",
				"Plätze werden direkt bei der Anlage gebucht; die Anbieterangaben sind kein vergleichender Praxistest.",
			],
			name: "OnSand",
			pageH1: "OnSand: Beachvolleyball-Spiele und Trainingsgruppen",
			pageTitle: `OnSand: Beachvolleyball in Deutschland | ${SITE_NAME}`,
			pricing:
				"Spielernutzung laut Anbieter kostenlos; Platzgebühren und gegebenenfalls kostenpflichtige Trainingsangebote separat prüfen.",
			summary:
				"OnSand bewirbt Spiele in Deutschland, Chat, Warteliste, Ratings und Statistiken sowie Clubs und Trainingsgruppen.",
			tagline: "Spiele und Gruppen mit Deutschland-Fokus",
		},
		playtomic: {
			bestFor: "Für die Buchung teilnehmender Anlagen und offene Spiele im Schlägersport.",
			body: [
				"Playtomic bewirbt Padel, Tennis und Pickleball mit Platzbuchung in der App, offenen Spielen, Chat, Levels und kostenlosen Basisstatistiken.",
				"Die Academy beschreibt wiederkehrende Kurse, Clinics und Privatstunden. Das sind Trainingsangebote, nicht automatisch von Spielern selbst verwaltete Trainingsgruppen.",
			],
			caveat:
				"Beachvolleyball-Verfügbarkeit und lokale Aktivität nicht verifiziert; kein Praxistest.",
			fit: "Schlägersport und Anlagenbuchung",
			limitations: [
				"Der dokumentierte Schwerpunkt liegt auf Schlägersport; Beachvolleyball-Angebote wurden weder bestätigt noch ausgeschlossen.",
				"Kurse und Buchungen hängen von teilnehmenden Anlagen ab; Academy-Angebote sind nicht gleichbedeutend mit Spieler-Trainingsgruppen.",
			],
			name: "Playtomic",
			pageH1: "Playtomic: Schlägersport, Buchung und Trainingsangebote",
			pageTitle: `Playtomic: Buchung und offene Spiele | ${SITE_NAME}`,
			pricing:
				"Kostenlose Basisfunktionen inklusive Basisstatistiken; optional Premium. Platzbuchungen und Trainingsangebote können zusätzlich kosten.",
			summary:
				"Playtomic bewirbt Schlägersport mit integrierter Anlagenbuchung, offenen Spielen, Chat, Levels und Trainingsangeboten.",
			tagline: "Anlagenbuchung und offene Spiele im Schlägersport",
		},
	},
	en: {
		beachtreff: {
			bestFor: "For Berlin sessions with level filters and an automatic waitlist.",
			body: [
				"BeachTreff describes open beach volleyball sessions focused on Berlin, A1–F3 level filters, and an automatic waitlist.",
				"Current release notes describe session chat. Booking links lead to venues; this does not establish checkout within the app.",
			],
			caveat: "Local activity not measured; publisher claims, not hands-on results.",
			fit: "Berlin playing sessions",
			limitations: [
				"The documented focus is Berlin; activity in other locations has not been checked.",
				"Dedicated recurring training groups, ratings, and statistics are not established by the reviewed sources.",
			],
			name: "BeachTreff",
			pageH1: "BeachTreff: beach volleyball sessions in Berlin",
			pageTitle: `BeachTreff: Berlin games and waitlist | ${SITE_NAME}`,
			pricing:
				"Creating sessions, joining, and community use are free according to the website; check any court fees separately with the venue.",
			summary:
				"Berlin-focused beach volleyball app advertising open sessions, level filters, a waitlist, and session chat.",
			tagline: "Open sessions focused on Berlin",
		},
		beachup: {
			bestFor: "For finding courts internationally, open games, and player groups.",
			body: [
				"BeachUp advertises an international beach volleyball court directory, open games, player groups, and level preferences.",
				"An official August 2023 article describes chat; another explains skill criteria. These are published claims, not features we have recently tested ourselves.",
			],
			caveat: "Local activity and current chat scope not tested; the chat source dates from 2023.",
			fit: "International courts and groups",
			limitations: [
				"Player groups are documented, but dedicated recurring training management has not been verified.",
				"Ratings and statistics, an automatic waitlist, and in-app booking checkout are unverified; exact free limits remain unclear.",
			],
			name: "BeachUp",
			pageH1: "BeachUp: courts, games, and player groups",
			pageTitle: `BeachUp: courts, games, and groups | ${SITE_NAME}`,
			pricing:
				"Free download and basic offering; optional BeachUp Pro. Check exact free limits and any court fees separately.",
			summary:
				"BeachUp advertises international beach volleyball courts, open games, player groups, and level preferences.",
			tagline: "International court discovery and game organisation",
		},
		onsand: {
			bestFor: "For open games in Germany, clubs, training groups, and game statistics.",
			body: [
				"OnSand advertises open beach volleyball games across Germany, chat, ratings and statistics, clubs, and training groups. Its official feature page documents a waitlist.",
				"The courts page describes finding venues and booking directly with them, rather than completing a booking within OnSand.",
			],
			caveat:
				"This guide is published by the OnSand operator; local activity and superiority have not been measured.",
			clubNote:
				"The publisher operates OnSand. The additional club software at onsand.cloud is a separate product and is not evaluated here.",
			fit: "Games and training groups in Germany",
			limitations: [
				"A Germany-wide product focus does not establish equal player density or available games in every location.",
				"Courts are booked directly with venues; publisher claims are not comparative hands-on results.",
			],
			name: "OnSand",
			pageH1: "OnSand: beach volleyball games and training groups",
			pageTitle: `OnSand: beach volleyball in Germany | ${SITE_NAME}`,
			pricing:
				"Player use is free according to the provider; check court fees and any paid training offers separately.",
			summary:
				"OnSand advertises games in Germany, chat, a waitlist, ratings and statistics, clubs, and training groups.",
			tagline: "Games and groups focused on Germany",
		},
		playtomic: {
			bestFor: "For booking participating venues and joining open racket-sport games.",
			body: [
				"Playtomic advertises padel, tennis, and pickleball with in-app court booking, open games, chat, levels, and free basic statistics.",
				"Its Academy describes recurring courses, clinics, and private lessons. These are training offers, not necessarily player-managed training groups.",
			],
			caveat: "Beach volleyball availability and local activity unverified; not hands-on tested.",
			fit: "Racket sports and venue booking",
			limitations: [
				"Its documented focus is racket sports; beach volleyball availability has neither been confirmed nor ruled out.",
				"Courses and bookings depend on participating venues; Academy offers are not equivalent to player-managed training groups.",
			],
			name: "Playtomic",
			pageH1: "Playtomic: racket sports, booking, and training offers",
			pageTitle: `Playtomic: booking and open games | ${SITE_NAME}`,
			pricing:
				"Free core features including basic statistics; optional Premium. Court bookings and training offers may cost extra.",
			summary:
				"Playtomic advertises racket sports with integrated venue booking, open games, chat, levels, and training offers.",
			tagline: "Venue booking and open games for racket sports",
		},
	},
};
