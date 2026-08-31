import { describe, expect, test } from "bun:test";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import {
	ONSAND_APP_URL,
	ONSAND_CLOUD_URL,
	ONSAND_COURTS_URL,
	ONSAND_MATCHMAKING_URL,
} from "../../src/catalog/urls";

const distFile = (...parts: string[]) => join(import.meta.dir, "../../dist", ...parts);

const read = (...parts: string[]) => readFileSync(distFile(...parts), "utf8");

describe("built OnSand profile HTML", () => {
	test("German profile exists", () => {
		expect(existsSync(distFile("de/apps/onsand/index.html"))).toBe(true);
	});

	test("contains dofollow OnSand app, deep links, and cloud hrefs", () => {
		const html = read("de/apps/onsand/index.html");
		expect(html).toContain(`href="${ONSAND_APP_URL}"`);
		expect(html).toContain(`href="${ONSAND_MATCHMAKING_URL}"`);
		expect(html).toContain(`href="${ONSAND_COURTS_URL}"`);
		expect(html).toContain(`href="${ONSAND_CLOUD_URL}"`);
		expect(html).not.toContain('rel="nofollow"');
	});
});

describe("built hub HTML", () => {
	test("renders an indexable comparison table", () => {
		const html = read("de/index.html");
		expect(html).toContain("<table");
		expect(html).toContain("<caption");
		expect(html).toContain("application/ld+json");
		expect(html).toContain('hreflang="en"');
		expect(html).toContain('hreflang="x-default"');
	});

	test("internal links use the GitHub Pages base path", () => {
		const html = read("de/index.html");
		expect(html).toContain('href="/beach-app-guide/de/methodik"');
		expect(html).toContain('href="https://0oz.github.io/beach-app-guide/de"');
		expect(html).not.toContain('href="/de/methodik"');
	});
});

describe("built vs HTML", () => {
	test("OnSand vs BeachUp includes a table and FAQ JSON-LD", () => {
		const html = read("de/vergleich/onsand-vs-beachup/index.html");
		expect(html).toContain("<table");
		expect(html).toContain("FAQPage");
	});
});
