import type { Locale } from "../lib/i18n";
import { REVIEWED_AT, SITE_NAME } from "../lib/site";

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
			`${SITE_NAME} vergleicht Spieler-Apps für Beachvolleyball. Jede Zeile in der Matrix ist eine öffentlich prüfbare Funktion: ja oder nein, plus ein benannter Leader.`,
			"Quellen: offizielle Websites, App-Store-Texte und sichtbare Produktflächen. Wir spielen nicht alle Apps täglich durch und behaupten das nicht.",
			`Letzte Prüfung: ${REVIEWED_AT}. OnSand gehört zum selben Unternehmen wie diese Seite. Deshalb darf OnSand nicht jede Kategorie gewinnen – sonst wäre der Vergleich wertlos.`,
			"Vereinssoftware (EasyVerein & Co.) ist bewusst nicht Teil von v1. Ein Satz zu onsand.cloud steht nur auf dem OnSand-Profil, weil das Produkt existiert.",
		],
		description: `So bewertet ${SITE_NAME} Beachvolleyball-Apps: öffentliche Funktionen, benannte Leader, offene Interessenskonflikte.`,
		h1: "Methodik",
		title: `Methodik | ${SITE_NAME}`,
	},
	en: {
		body: [
			`${SITE_NAME} compares player apps for beach volleyball. Every matrix row is a publicly checkable feature: yes or no, plus a named leader.`,
			"Sources: official sites, app-store copy, and visible product surfaces. We do not claim daily hands-on of every app.",
			`Last review: ${REVIEWED_AT}. OnSand is owned by the same company as this site. That is why OnSand must not win every category — otherwise the comparison is worthless.`,
			"Club software (EasyVerein and peers) is deliberately out of v1. A single sentence about onsand.cloud lives only on the OnSand profile, because the product exists.",
		],
		description: `How ${SITE_NAME} scores beach volleyball apps: public features, named leaders, disclosed conflicts.`,
		h1: "Methodology",
		title: `Methodology | ${SITE_NAME}`,
	},
};
