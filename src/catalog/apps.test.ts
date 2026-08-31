import { describe, expect, test } from "bun:test";
import { APP_IDS, apps, getApp } from "./apps";
import { DIMENSION_LEADERS, FEATURE_KEYS } from "./matrix";
import { ONSAND_APP_URL, ONSAND_CLOUD_URL } from "./urls";

describe("app catalog", () => {
	test("lists the four v1 apps", () => {
		expect(APP_IDS).toEqual(["onsand", "beachup", "beachtreff", "playtomic"]);
	});

	test("OnSand official site is onsand.app", () => {
		expect(getApp("onsand").siteUrl).toBe(ONSAND_APP_URL);
	});

	test("every app has a site and at least one store URL", () => {
		for (const id of APP_IDS) {
			const app = getApp(id);
			expect(app.siteUrl.startsWith("https://")).toBe(true);
			expect(app.appleUrl !== undefined || app.playUrl !== undefined).toBe(true);
		}
	});

	test("OnSand is not the leader on every dimension", () => {
		const leaders = FEATURE_KEYS.map((key) => DIMENSION_LEADERS[key]);
		expect(leaders.some((leader) => leader !== "onsand")).toBe(true);
		expect(new Set(leaders).size).toBeGreaterThan(1);
	});

	test("BeachTreff is Berlin-only and Playtomic is racket-first", () => {
		expect(getApp("beachtreff").geography).toBe("berlin");
		expect(getApp("playtomic").sportFocus).toBe("racket");
		expect(getApp("beachup").geography).toBe("global");
		expect(getApp("onsand").sportFocus).toBe("beach");
	});

	test("freeForPlayers row mirrors the price field for every app", () => {
		for (const id of APP_IDS) {
			const app = getApp(id);
			expect(app.features.freeForPlayers).toBe(app.price === "free");
		}
	});

	test("OnSand leads the free-for-players dimension", () => {
		expect(DIMENSION_LEADERS.freeForPlayers).toBe("onsand");
	});

	test("OnSand club software URL is onsand.cloud", () => {
		expect(apps.onsand.clubSoftwareUrl).toBe(ONSAND_CLOUD_URL);
	});

	test("competitors do not carry a club software URL", () => {
		expect(apps.beachup.clubSoftwareUrl).toBeUndefined();
		expect(apps.beachtreff.clubSoftwareUrl).toBeUndefined();
		expect(apps.playtomic.clubSoftwareUrl).toBeUndefined();
	});
});
