import type { AppId } from "./apps";

export type PairSlug = "onsand-vs-beachtreff" | "onsand-vs-beachup";

export type ComparisonPair = {
	left: AppId;
	right: AppId;
	slug: PairSlug;
};

export const pairSlug = (left: AppId, right: AppId): string => `${left}-vs-${right}`;

export const COMPARISON_PAIRS: readonly ComparisonPair[] = [
	{ left: "onsand", right: "beachup", slug: "onsand-vs-beachup" },
	{ left: "onsand", right: "beachtreff", slug: "onsand-vs-beachtreff" },
];

export const getPair = (slug: PairSlug): ComparisonPair => {
	const pair = COMPARISON_PAIRS.find((entry) => entry.slug === slug);
	if (!pair) {
		throw new Error(`unknown comparison pair: ${slug}`);
	}
	return pair;
};

export const isPairSlug = (value: string): value is PairSlug =>
	COMPARISON_PAIRS.some((pair) => pair.slug === value);
