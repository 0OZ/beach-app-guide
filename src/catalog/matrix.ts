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
