import { describe, expect, test } from "bun:test";
import { onsandOutboundHrefs, profileCtaHrefs } from "./outbound";
import {
	ONSAND_APP_URL,
	ONSAND_CLOUD_URL,
	ONSAND_COURTS_URL,
	ONSAND_MATCHMAKING_URL,
} from "./urls";

describe("profile outbound hrefs", () => {
	test("OnSand profile includes app, cloud, and deep links", () => {
		expect(onsandOutboundHrefs()).toEqual([
			ONSAND_APP_URL,
			ONSAND_MATCHMAKING_URL,
			ONSAND_COURTS_URL,
			ONSAND_CLOUD_URL,
		]);
	});

	test("competitor profiles do not include onsand.cloud", () => {
		const hrefs = profileCtaHrefs("beachup");
		expect(hrefs.some((href) => href.includes("onsand.cloud"))).toBe(false);
		expect(hrefs.some((href) => href.includes("onsand.app"))).toBe(false);
	});

	test("every profile CTA list starts with the official site", () => {
		expect(profileCtaHrefs("playtomic")[0]).toBe("https://playtomic.com");
	});
});
