import { describe, expect, test } from "bun:test";
import {
	APPLE_STORE_ONSAND_URL,
	BEACHTREFF_SITE_URL,
	BEACHUP_SITE_URL,
	ONSAND_APP_URL,
	ONSAND_CLOUD_URL,
	ONSAND_COURTS_URL,
	ONSAND_MATCHMAKING_URL,
	PLAY_STORE_ONSAND_URL,
	PLAYTOMIC_SITE_URL,
} from "./urls";

describe("outbound URL constants", () => {
	test("pins OnSand player site", () => {
		expect(ONSAND_APP_URL).toBe("https://onsand.app");
	});

	test("pins OnSand club site", () => {
		expect(ONSAND_CLOUD_URL).toBe("https://onsand.cloud");
	});

	test("pins OnSand matchmaking and court deep links", () => {
		expect(ONSAND_MATCHMAKING_URL).toBe("https://onsand.app/de/matchmaking");
		expect(ONSAND_COURTS_URL).toBe("https://onsand.app/de/beachvolleyball");
	});

	test("pins OnSand store listings", () => {
		expect(PLAY_STORE_ONSAND_URL).toBe("https://play.google.com/store/apps/details?id=io.onsand");
		expect(APPLE_STORE_ONSAND_URL).toBe("https://apps.apple.com/app/id6760314291");
	});

	test("pins competitor official sites", () => {
		expect(BEACHUP_SITE_URL).toBe("https://www.beachup.app");
		expect(BEACHTREFF_SITE_URL).toBe("https://beachtreff.de");
		expect(PLAYTOMIC_SITE_URL).toBe("https://playtomic.com");
	});
});
