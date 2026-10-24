import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";
import { SITE_BASE, SITE_ORIGIN } from "./src/lib/site";

export default defineConfig({
	base: SITE_BASE,
	fonts: [
		{
			cssVariable: "--font-guide",
			name: "DM Sans",
			provider: fontProviders.google(),
			styles: ["normal"],
			subsets: ["latin"],
			weights: ["400 700"],
		},
	],
	output: "static",
	site: SITE_ORIGIN,
	vite: {
		plugins: [tailwindcss()],
	},
});
