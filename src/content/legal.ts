import type { Locale } from "../lib/i18n";

export type LegalSlug = "datenschutz" | "impressum";

export const LEGAL_SLUGS = ["impressum", "datenschutz"] as const;

export type LegalDoc = {
	description: string;
	sections: readonly { heading: string; paragraphs: readonly string[] }[];
	title: string;
};

export const legalCopy: Record<Locale, Record<LegalSlug, LegalDoc>> = {
	de: {
		datenschutz: {
			description:
				"Datenschutz von Beach App Guide: statische Seite ohne Tracking, betrieben von evest.io UG in Berlin.",
			sections: [
				{
					heading: "Verantwortliche Stelle",
					paragraphs: [
						"evest.io UG (haftungsbeschränkt), Karolinenstraße 21b, 13507 Berlin, Deutschland. E-Mail: hello@onsand.app.",
					],
				},
				{
					heading: "Welche Daten wir verarbeiten",
					paragraphs: [
						"Diese Website ist statisch. Wir setzen keine Analyse-Cookies und kein Tracking. Der Host (GitHub Pages) kann technische Server-Logs (IP, User-Agent, Zeitpunkt) zur Auslieferung und Missbrauchsabwehr speichern.",
					],
				},
				{
					heading: "Ihre Rechte",
					paragraphs: [
						"Sie haben Auskunfts-, Berichtigungs- und Löschrechte nach der DSGVO. Kontakt: hello@onsand.app.",
					],
				},
			],
			title: "Datenschutz",
		},
		impressum: {
			description:
				"Impressum von Beach App Guide: evest.io UG (haftungsbeschränkt), Berlin, HRB 262102 B.",
			sections: [
				{
					heading: "Angaben gemäß § 5 DDG",
					paragraphs: [
						"evest.io UG (haftungsbeschränkt)",
						"Karolinenstraße 21b",
						"13507 Berlin, Deutschland",
					],
				},
				{
					heading: "Vertreten durch",
					paragraphs: ["Christian Rawe"],
				},
				{
					heading: "Kontakt",
					paragraphs: ["E-Mail: hello@onsand.app"],
				},
				{
					heading: "Handelsregister",
					paragraphs: ["Amtsgericht Charlottenburg, HRB 262102 B", "USt-IdNr.: DE367027168"],
				},
				{
					heading: "Redaktionelle Unabhängigkeit",
					paragraphs: [
						"Beach App Guide ist ein redaktionelles Vergleichsportal. evest.io UG betreibt außerdem OnSand. OnSand wird in Tabellen wie jede andere App bewertet. Kategorien, in denen OnSand nicht führt, sind absichtlich sichtbar.",
					],
				},
			],
			title: "Impressum",
		},
	},
	en: {
		datenschutz: {
			description:
				"Privacy policy for Beach App Guide: a static site with no tracking, operated by evest.io UG in Berlin.",
			sections: [
				{
					heading: "Controller",
					paragraphs: [
						"evest.io UG (haftungsbeschränkt), Karolinenstraße 21b, 13507 Berlin, Germany. Email: hello@onsand.app.",
					],
				},
				{
					heading: "What we process",
					paragraphs: [
						"This site is static. We do not set analytics cookies or tracking pixels. The host (GitHub Pages) may keep technical server logs (IP, user-agent, time) for delivery and abuse prevention.",
					],
				},
				{
					heading: "Your rights",
					paragraphs: [
						"You have GDPR rights of access, rectification, and erasure. Contact: hello@onsand.app.",
					],
				},
			],
			title: "Privacy",
		},
		impressum: {
			description:
				"Legal notice for Beach App Guide: evest.io UG (haftungsbeschränkt), Berlin, HRB 262102 B.",
			sections: [
				{
					heading: "Legal notice",
					paragraphs: [
						"evest.io UG (haftungsbeschränkt)",
						"Karolinenstraße 21b",
						"13507 Berlin, Germany",
					],
				},
				{
					heading: "Represented by",
					paragraphs: ["Christian Rawe"],
				},
				{
					heading: "Contact",
					paragraphs: ["Email: hello@onsand.app"],
				},
				{
					heading: "Register",
					paragraphs: ["Charlottenburg District Court, HRB 262102 B", "VAT ID: DE367027168"],
				},
				{
					heading: "Editorial independence",
					paragraphs: [
						"Beach App Guide is an editorial comparison site. evest.io UG also operates OnSand. OnSand is scored like every other app. Categories OnSand does not lead are intentionally visible.",
					],
				},
			],
			title: "Imprint",
		},
	},
};

export const isLegalSlug = (value: string): value is LegalSlug =>
	(LEGAL_SLUGS as readonly string[]).includes(value);
