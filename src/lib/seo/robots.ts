import { SITE_URL } from "../site";

export const robotsTxt = (): string =>
	["User-agent: *", "Allow: /", `Sitemap: ${SITE_URL}/sitemap.xml`, ""].join("\n");
