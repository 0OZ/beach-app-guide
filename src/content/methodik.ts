import type { Locale } from "../lib/i18n";
import { SITE_NAME } from "../lib/site";

export const methodikCopy: Record<
	Locale,
	{
		body: readonly string[];
		description: string;
		h1: string;
		title: string;
	}
> = {
	de: {
		body: [
			`${SITE_NAME} wird vom OnSand-Betreiber herausgegeben. Es besteht ein direkter wirtschaftlicher Interessenskonflikt: Dies ist kein unabhängig betriebener Vergleich. Die Darstellung soll nachvollziehbar informieren, nicht unabhängige Eigentümerschaft suggerieren.`,
			"Quellenstand: 24. Oktober 2026. Grundlage sind offizielle Produktseiten, App-Store-Beschreibungen und Versionshinweise. Das sind veröffentlichte Anbieterangaben, keine vergleichenden Praxistests. Ein dokumentiertes Merkmal belegt weder dessen Qualität noch die aktuelle Nutzung vor Ort.",
			"Apps werden alphabetisch gezeigt: BeachTreff, BeachUp, OnSand, Playtomic. Die Tabelle ordnet Funktionen ein und nennt Quellen je Merkmal. Es gibt keine Punktwertung, automatisch gewählten Gewinner oder Gesamtempfehlung. Spielerzahlen, lokale Aktivitätsdichte und Überlegenheit wurden nicht gemessen.",
			"Die Status unterscheiden dokumentierte Funktionen, externe Abläufe und nicht verifizierte Angaben. Dokumentiert heißt: Eine offizielle Quelle beschreibt die Funktion. Extern heißt etwa: Die Buchung findet bei der Anlage statt, nicht im Buchungsabschluss der App. Nicht verifiziert heißt: In den geprüften Quellen nicht ausreichend belegt, nicht nachweislich unmöglich oder nicht vorhanden.",
			"Die Zeile Gruppen / Trainingsangebote ist bewusst breit: BeachUp beschreibt Spielergruppen, OnSand Clubs und Trainingsgruppen, Playtomic Academy Kurse, Clinics und Privatstunden. Das sind unterschiedliche Organisationsformen, keine gleichwertig nachgewiesenen Systeme für selbst verwaltete wiederkehrende Trainingsgruppen. Bei BeachTreff sind solche Trainingsgruppen nicht verifiziert.",
			"BeachUp-Chat ist durch einen offiziellen Artikel vom August 2023 dokumentiert. Das belegt die damalige Veröffentlichung, nicht einen aktuellen Praxistest. BeachTreff-Session-Chat wird in aktuellen Versionshinweisen beschrieben. Playtomics Beachvolleyball-Verfügbarkeit bleibt unbestätigt; der dokumentierte Schwerpunkt auf Schlägersport schließt sie nicht grundsätzlich aus.",
			"Kostenloser Download oder kostenlose Basisnutzung sind von optionalen Abonnements wie BeachUp Pro und Playtomic Premium zu trennen. Platzgebühren und kostenpflichtige Trainingsangebote sind ebenfalls separate Kosten. Genaue Preise und Gratis-Limits wurden nicht verifiziert; aus kostenloser App-Nutzung folgt kein kostenloser Platz.",
			"Die offiziellen Websites beachtreff.de, beachup.app, onsand.app und playtomic.com sowie ihre verlinkten Store-Einträge bilden die Basis. Historische Artikel und Funktionsseiten ergänzen einzelne Merkmale; die Quellen je Tabellenzeile erlauben die Prüfung. Separate Vereinsverwaltungssoftware wie onsand.cloud ist nicht Gegenstand dieses Spieler-App-Vergleichs.",
		],
		description: `Quellen und Grenzen von ${SITE_NAME}: Anbieterangaben statt Praxistest, keine Rangliste, herausgegeben vom OnSand-Betreiber.`,
		h1: "Methodik und Offenlegung",
		title: `Methodik und Offenlegung | ${SITE_NAME}`,
	},
	en: {
		body: [
			`${SITE_NAME} is published by the OnSand operator. This creates a direct commercial conflict of interest: this is not an independently owned comparison. The aim is transparent information, not an impression of independent ownership.`,
			"Sources reviewed: 24 October 2026. We use official product pages, App Store descriptions, and release notes. These are published provider claims, not comparative hands-on tests. A documented feature establishes neither its quality nor current local usage.",
			"Apps appear alphabetically: BeachTreff, BeachUp, OnSand, Playtomic. The table classifies features and cites sources per feature. There are no quality scores, automatically selected winners, or overall recommendation. Player counts, local activity density, and superiority have not been measured.",
			"Statuses distinguish documented features, external processes, and unverified claims. Documented means an official source describes the feature. External means, for example, booking with a venue rather than completing checkout in the app. Unverified means insufficient evidence in the reviewed sources, not proof that a feature is impossible or absent.",
			"The groups / training offers row is deliberately broad: BeachUp describes player groups, OnSand clubs and training groups, and Playtomic Academy courses, clinics, and private lessons. These are different organisational models, not equivalent evidence of player-managed recurring training groups. Such training groups remain unverified for BeachTreff.",
			"BeachUp chat is documented in an official August 2023 article. This establishes a historical published claim, not a current hands-on result. Current release notes describe BeachTreff session chat. Playtomic beach volleyball availability remains unconfirmed; its documented racket-sport focus does not categorically rule it out.",
			"Free downloads or free basic use are separate from optional subscriptions such as BeachUp Pro and Playtomic Premium. Court fees and paid training offers are separate costs too. Exact prices and free limits have not been verified; a free app does not mean a free court.",
			"The official websites beachtreff.de, beachup.app, onsand.app, and playtomic.com and their linked store listings form the basis. Historical articles and feature pages support individual features; per-row sources allow readers to check them. Separate club administration software such as onsand.cloud is outside this player-app comparison.",
		],
		description: `Sources and limits of ${SITE_NAME}: provider claims rather than hands-on tests, no rankings, published by the OnSand operator.`,
		h1: "Methodology and disclosure",
		title: `Methodology and disclosure | ${SITE_NAME}`,
	},
};
