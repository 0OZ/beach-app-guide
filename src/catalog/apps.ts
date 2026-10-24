import type { FeatureKey } from "./matrix";
import {
	APPLE_STORE_BEACHTREFF_URL,
	APPLE_STORE_BEACHUP_URL,
	APPLE_STORE_ONSAND_URL,
	APPLE_STORE_PLAYTOMIC_URL,
	BEACHTREFF_SITE_URL,
	BEACHUP_SITE_URL,
	ONSAND_APP_URL,
	ONSAND_CLOUD_URL,
	PLAY_STORE_BEACHTREFF_URL,
	PLAY_STORE_BEACHUP_URL,
	PLAY_STORE_ONSAND_URL,
	PLAY_STORE_PLAYTOMIC_URL,
	PLAYTOMIC_SITE_URL,
} from "./urls";

// Alphabetical, not ranked.
export const APP_IDS = ["beachtreff", "beachup", "onsand", "playtomic"] as const;
export type AppId = (typeof APP_IDS)[number];
export type Geography = "berlin" | "germany" | "global";
export type Price = "free" | "freemium";
export type SportFocus = "beach" | "racket";
export type FeatureEvidence =
	| { source: string; status: "documented" | "external" }
	| { status: "unverified" };

export type CatalogApp = {
	appleUrl: string;
	clubSoftwareUrl?: string;
	features: Record<FeatureKey, FeatureEvidence>;
	geography: Geography;
	icon: string;
	id: AppId;
	playUrl: string;
	price: Price;
	siteUrl: string;
	sportFocus: SportFocus;
};

export const apps: Record<AppId, CatalogApp> = {
	beachtreff: {
		appleUrl: APPLE_STORE_BEACHTREFF_URL,
		features: {
			courtBooking: { source: BEACHTREFF_SITE_URL, status: "external" },
			courtDirectory: { source: APPLE_STORE_BEACHTREFF_URL, status: "documented" },
			freeForPlayers: { source: BEACHTREFF_SITE_URL, status: "documented" },
			inAppChat: { source: APPLE_STORE_BEACHTREFF_URL, status: "documented" },
			openGames: { source: APPLE_STORE_BEACHTREFF_URL, status: "documented" },
			ratingsOrStats: { status: "unverified" },
			skillMatching: { source: APPLE_STORE_BEACHTREFF_URL, status: "documented" },
			trainingGroups: { status: "unverified" },
			waitlist: { source: BEACHTREFF_SITE_URL, status: "documented" },
		},
		geography: "berlin",
		icon: "beachtreff.jpg",
		id: "beachtreff",
		playUrl: PLAY_STORE_BEACHTREFF_URL,
		price: "free",
		siteUrl: BEACHTREFF_SITE_URL,
		sportFocus: "beach",
	},
	beachup: {
		appleUrl: APPLE_STORE_BEACHUP_URL,
		features: {
			courtBooking: { status: "unverified" },
			courtDirectory: { source: APPLE_STORE_BEACHUP_URL, status: "documented" },
			freeForPlayers: { source: APPLE_STORE_BEACHUP_URL, status: "documented" },
			inAppChat: {
				source: "https://www.beachup.app/en/news/2023-08-updates/",
				status: "documented",
			},
			openGames: { source: APPLE_STORE_BEACHUP_URL, status: "documented" },
			ratingsOrStats: { status: "unverified" },
			skillMatching: {
				source: "https://www.beachup.app/en/news/may-update-is-here/",
				status: "documented",
			},
			trainingGroups: { source: BEACHUP_SITE_URL, status: "documented" },
			waitlist: { status: "unverified" },
		},
		geography: "global",
		icon: "beachup.jpg",
		id: "beachup",
		playUrl: PLAY_STORE_BEACHUP_URL,
		price: "freemium",
		siteUrl: BEACHUP_SITE_URL,
		sportFocus: "beach",
	},
	onsand: {
		appleUrl: APPLE_STORE_ONSAND_URL,
		clubSoftwareUrl: ONSAND_CLOUD_URL,
		features: {
			courtBooking: { source: "https://onsand.app/de/courts", status: "external" },
			courtDirectory: { source: ONSAND_APP_URL, status: "documented" },
			freeForPlayers: { source: ONSAND_APP_URL, status: "documented" },
			inAppChat: { source: APPLE_STORE_ONSAND_URL, status: "documented" },
			openGames: { source: APPLE_STORE_ONSAND_URL, status: "documented" },
			ratingsOrStats: { source: APPLE_STORE_ONSAND_URL, status: "documented" },
			skillMatching: { source: APPLE_STORE_ONSAND_URL, status: "documented" },
			trainingGroups: { source: APPLE_STORE_ONSAND_URL, status: "documented" },
			waitlist: { source: "https://onsand.app/de/features/find-match", status: "documented" },
		},
		geography: "germany",
		icon: "onsand.jpg",
		id: "onsand",
		playUrl: PLAY_STORE_ONSAND_URL,
		price: "free",
		siteUrl: ONSAND_APP_URL,
		sportFocus: "beach",
	},
	playtomic: {
		appleUrl: APPLE_STORE_PLAYTOMIC_URL,
		features: {
			courtBooking: { source: APPLE_STORE_PLAYTOMIC_URL, status: "documented" },
			courtDirectory: { source: PLAYTOMIC_SITE_URL, status: "documented" },
			freeForPlayers: { source: APPLE_STORE_PLAYTOMIC_URL, status: "documented" },
			inAppChat: { source: APPLE_STORE_PLAYTOMIC_URL, status: "documented" },
			openGames: { source: APPLE_STORE_PLAYTOMIC_URL, status: "documented" },
			ratingsOrStats: { source: APPLE_STORE_PLAYTOMIC_URL, status: "documented" },
			skillMatching: { source: APPLE_STORE_PLAYTOMIC_URL, status: "documented" },
			trainingGroups: { source: "https://playtomic.com/academy", status: "documented" },
			waitlist: { status: "unverified" },
		},
		geography: "global",
		icon: "playtomic.jpg",
		id: "playtomic",
		playUrl: PLAY_STORE_PLAYTOMIC_URL,
		price: "freemium",
		siteUrl: PLAYTOMIC_SITE_URL,
		sportFocus: "racket",
	},
};

export const getApp = (id: AppId): CatalogApp => apps[id];
export const isAppId = (value: string): value is AppId =>
	(APP_IDS as readonly string[]).includes(value);
