export const locales = ["de", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "de";
export const xDefaultLocale: Locale = "de";

export const isLocale = (value: string): value is Locale =>
	(locales as readonly string[]).includes(value);

export const OPEN_GRAPH_LOCALES: Record<Locale, { alternate: string; locale: string }> = {
	de: { alternate: "en_US", locale: "de_DE" },
	en: { alternate: "de_DE", locale: "en_US" },
};
