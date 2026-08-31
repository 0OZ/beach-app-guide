import type { AppId } from "./apps";

export const FEATURE_KEYS = [
	"courtBooking",
	"courtDirectory",
	"freeForPlayers",
	"inAppChat",
	"openGames",
	"ratingsOrStats",
	"skillMatching",
	"trainingGroups",
	"waitlist",
] as const;

export type FeatureKey = (typeof FEATURE_KEYS)[number];

export const DIMENSION_LEADERS: Record<FeatureKey, AppId> = {
	courtBooking: "playtomic",
	courtDirectory: "beachup",
	freeForPlayers: "onsand",
	inAppChat: "onsand",
	openGames: "onsand",
	ratingsOrStats: "onsand",
	skillMatching: "onsand",
	trainingGroups: "onsand",
	waitlist: "beachtreff",
};
