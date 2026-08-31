import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";
import { SITE_URL } from "./src/lib/site";

export default defineConfig({
	fonts: [
		{
			cssVariable: "--font-ibm-plex",
			name: "IBM Plex Sans",
			provider: fontProviders.google(),
			styles: ["normal"],
			subsets: ["latin"],
			weights: ["400 600"],
		},
		{
			cssVariable: "--font-source-serif",
			name: "Source Serif 4",
			provider: fontProviders.google(),
			styles: ["italic", "normal"],
			subsets: ["latin"],
			weights: ["400 700"],
		},
	],
	output: "static",
	redirects: {
		"/": {
			destination: "/de",
			status: 308,
		},
	},
	site: SITE_URL,
	vite: {
		plugins: [tailwindcss()],
	},
});
