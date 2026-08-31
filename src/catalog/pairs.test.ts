import { describe, expect, test } from "bun:test";
import { COMPARISON_PAIRS, getPair, pairSlug } from "./pairs";

describe("comparison pairs", () => {
	test("ships OnSand vs BeachUp and OnSand vs BeachTreff", () => {
		expect(COMPARISON_PAIRS.map((pair) => pair.slug)).toEqual([
			"onsand-vs-beachup",
			"onsand-vs-beachtreff",
		]);
	});

	test("builds a stable slug from ordered app ids", () => {
		expect(pairSlug("onsand", "beachup")).toBe("onsand-vs-beachup");
	});

	test("looks up a pair by slug", () => {
		expect(getPair("onsand-vs-beachtreff")).toEqual({
			left: "onsand",
			right: "beachtreff",
			slug: "onsand-vs-beachtreff",
		});
	});
});
