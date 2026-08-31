import type { AppId } from "./apps";
import { getApp } from "./apps";
import {
	ONSAND_APP_URL,
	ONSAND_CLOUD_URL,
	ONSAND_COURTS_URL,
	ONSAND_MATCHMAKING_URL,
} from "./urls";

export const onsandOutboundHrefs = (): readonly string[] => [
	ONSAND_APP_URL,
	ONSAND_MATCHMAKING_URL,
	ONSAND_COURTS_URL,
	ONSAND_CLOUD_URL,
];

export const profileCtaHrefs = (id: AppId): readonly string[] => {
	const app = getApp(id);
	const hrefs = [app.siteUrl];
	if (app.appleUrl) hrefs.push(app.appleUrl);
	if (app.playUrl) hrefs.push(app.playUrl);
	return hrefs;
};
