import { describe, expect, test } from "bun:test";
import { APP_IDS, apps, getApp } from "./apps";
import { FEATURE_KEYS } from "./matrix";
import { ONSAND_APP_URL, ONSAND_CLOUD_URL } from "./urls";

describe("app catalog", () => {
	test("lists the four v1 apps", () => {
		expect(APP_IDS).toEqual(["beachtreff", "beachup", "onsand", "playtomic"]);
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

	test("every documented or external feature has a traceable HTTPS source", () => {
		for (const id of APP_IDS) {
			for (const key of FEATURE_KEYS) {
				const evidence = getApp(id).features[key];
				if (evidence.status !== "unverified") {
					expect(new URL(evidence.source).protocol).toBe("https:");
				}
			}
		}
	});

	test("catalog distinguishes geographic focus from sport focus", () => {
		expect(getApp("beachtreff").geography).toBe("berlin");
		expect(getApp("playtomic").sportFocus).toBe("racket");
		expect(getApp("beachup").geography).toBe("global");
		expect(getApp("onsand").sportFocus).toBe("beach");
	});

	test("a free entry tier does not imply every feature is free", () => {
		for (const id of ["beachup", "playtomic"] as const) {
			expect(getApp(id).price).toBe("freemium");
			expect(getApp(id).features.freeForPlayers.status).toBe("documented");
		}
	});

	test("external booking is distinct from native checkout and unknown features", () => {
		expect(getApp("onsand").features.courtBooking.status).toBe("external");
		expect(getApp("playtomic").features.courtBooking.status).toBe("documented");
		expect(getApp("beachup").features.courtBooking.status).toBe("unverified");
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
