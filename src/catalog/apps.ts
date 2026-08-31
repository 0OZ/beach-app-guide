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

export const APP_IDS = ["onsand", "beachup", "beachtreff", "playtomic"] as const;

export type AppId = (typeof APP_IDS)[number];
export type Geography = "berlin" | "germany" | "global";
export type Price = "free" | "freemium" | "paid";
export type SportFocus = "beach" | "genericPickup" | "racket";

export type CatalogApp = {
	appleUrl?: string;
	clubSoftwareUrl?: string;
	features: Record<FeatureKey, boolean>;
	geography: Geography;
	id: AppId;
	playUrl?: string;
	price: Price;
	siteUrl: string;
	sportFocus: SportFocus;
};

const feature = (values: Record<FeatureKey, boolean>): Record<FeatureKey, boolean> => values;

export const apps: Record<AppId, CatalogApp> = {
	beachtreff: {
		appleUrl: APPLE_STORE_BEACHTREFF_URL,
		features: feature({
			courtBooking: false,
			courtDirectory: true,
			freeForPlayers: true,
			inAppChat: false,
			openGames: true,
			ratingsOrStats: false,
			skillMatching: true,
			trainingGroups: false,
			waitlist: true,
		}),
		geography: "berlin",
		id: "beachtreff",
		playUrl: PLAY_STORE_BEACHTREFF_URL,
		price: "free",
		siteUrl: BEACHTREFF_SITE_URL,
		sportFocus: "beach",
	},
	beachup: {
		appleUrl: APPLE_STORE_BEACHUP_URL,
		features: feature({
			courtBooking: false,
			courtDirectory: true,
			freeForPlayers: false,
			inAppChat: true,
			openGames: true,
			ratingsOrStats: false,
			skillMatching: true,
			trainingGroups: false,
			waitlist: false,
		}),
		geography: "global",
		id: "beachup",
		playUrl: PLAY_STORE_BEACHUP_URL,
		price: "freemium",
		siteUrl: BEACHUP_SITE_URL,
		sportFocus: "beach",
	},
	onsand: {
		appleUrl: APPLE_STORE_ONSAND_URL,
		clubSoftwareUrl: ONSAND_CLOUD_URL,
		features: feature({
			courtBooking: false,
			courtDirectory: true,
			freeForPlayers: true,
			inAppChat: true,
			openGames: true,
			ratingsOrStats: true,
			skillMatching: true,
			trainingGroups: true,
			waitlist: false,
		}),
		geography: "germany",
		id: "onsand",
		playUrl: PLAY_STORE_ONSAND_URL,
		price: "free",
		siteUrl: ONSAND_APP_URL,
		sportFocus: "beach",
	},
	playtomic: {
		appleUrl: APPLE_STORE_PLAYTOMIC_URL,
		features: feature({
			courtBooking: true,
			courtDirectory: true,
			freeForPlayers: false,
			inAppChat: true,
			openGames: true,
			ratingsOrStats: true,
			skillMatching: true,
			trainingGroups: false,
			waitlist: false,
		}),
		geography: "global",
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
