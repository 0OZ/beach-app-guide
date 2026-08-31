import { describe, expect, test } from "bun:test";
import { mkdir, mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { collectArchitectureDiagnostics } from "./scan";

const FIXTURE_PREFIX = "beach-app-guide-architecture-";

const writeFixture = async (files: readonly { contents: string; path: string }[]) => {
	const root = await mkdtemp(join(tmpdir(), FIXTURE_PREFIX));
	await mkdir(join(root, "src"), { recursive: true });
	await Promise.all(
		files.map(async (file) => {
			const target = join(root, file.path);
			await mkdir(join(target, ".."), { recursive: true });
			await writeFile(target, file.contents);
		}),
	);
	return root;
};

describe("architecture guard", () => {
	test("reports production TSX under src", async () => {
		const root = await writeFixture([
			{ contents: "export const Widget = () => null;\n", path: "src/widget.tsx" },
		]);
		const diagnostics = await collectArchitectureDiagnostics(root);
		await rm(root, { force: true, recursive: true });
		expect(diagnostics).toContain("src/widget.tsx: production TSX is not allowed in v1");
	});

	test("reports Electric Shore lime hex", async () => {
		const root = await writeFixture([{ contents: "color: #d1fc00;\n", path: "src/styles.css" }]);
		const diagnostics = await collectArchitectureDiagnostics(root);
		await rm(root, { force: true, recursive: true });
		expect(diagnostics).toContain("src/styles.css: forbidden Electric Shore hex #d1fc00");
	});

	test("reports Electric Shore stage hex", async () => {
		const root = await writeFixture([
			{ contents: "background: #0e0e0e;\n", path: "src/styles.css" },
		]);
		const diagnostics = await collectArchitectureDiagnostics(root);
		await rm(root, { force: true, recursive: true });
		expect(diagnostics).toContain("src/styles.css: forbidden Electric Shore hex #0e0e0e");
	});

	test("reports OnSand marketing fonts in astro.config", async () => {
		const root = await writeFixture([
			{ contents: 'fonts: [{ name: "Unbounded" }]\n', path: "astro.config.ts" },
		]);
		const diagnostics = await collectArchitectureDiagnostics(root);
		await rm(root, { force: true, recursive: true });
		expect(diagnostics).toContain("astro.config.ts: forbidden OnSand font Unbounded");
	});

	test("reports Next.js imports", async () => {
		const root = await writeFixture([
			{ contents: 'import "next/image";\n', path: "src/server.ts" },
		]);
		const diagnostics = await collectArchitectureDiagnostics(root);
		await rm(root, { force: true, recursive: true });
		expect(diagnostics).toContain("src/server.ts: forbidden Next.js import");
	});

	test("the real project tree has no architecture diagnostics", async () => {
		expect(await collectArchitectureDiagnostics()).toEqual([]);
	});
});
