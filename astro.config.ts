import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";
import { SITE_BASE, SITE_ORIGIN } from "./src/lib/site";

export default defineConfig({
	base: SITE_BASE,
	fonts: [
		{
			cssVariable: "--font-bricolage",
			name: "Bricolage Grotesque",
			provider: fontProviders.google(),
			styles: ["normal"],
			subsets: ["latin"],
			weights: ["500 800"],
		},
		{
			cssVariable: "--font-source-serif",
			name: "Source Serif 4",
			provider: fontProviders.google(),
			styles: ["italic", "normal"],
			subsets: ["latin"],
			weights: ["400 700"],
		},
		{
			cssVariable: "--font-plex-mono",
			name: "IBM Plex Mono",
			provider: fontProviders.google(),
			styles: ["normal"],
			subsets: ["latin"],
			weights: ["400 600"],
		},
	],
	output: "static",
	site: SITE_ORIGIN,
	vite: {
		plugins: [tailwindcss()],
	},
});
