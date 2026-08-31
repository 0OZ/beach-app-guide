import { readdir, readFile, stat } from "node:fs/promises";
import { extname, join, relative, sep } from "node:path";
import { fileURLToPath } from "node:url";

const PROJECT_ROOT = fileURLToPath(new URL("../../", import.meta.url));
const SOURCE_DIRECTORY = "src";
const ASTRO_CONFIG_FILE = "astro.config.ts";
const GENERATED_DIRECTORY_NAMES = new Set([".astro", "dist", "node_modules"]);
const TEST_FILE_SUFFIXES = [".spec.ts", ".test.ts"] as const;
const TEXT_FILE_EXTENSIONS = new Set([".astro", ".css", ".js", ".json", ".mjs", ".mts", ".ts"]);

const ELECTRIC_SHORE_HEX = ["#d1fc00", "#0e0e0e"] as const;
const ONSAND_FONT_NAMES = ["Unbounded", "Outfit", "Lexend", "Plus Jakarta"] as const;

const isMissingPathError = (error: unknown): boolean =>
	error instanceof Error && "code" in error && error.code === "ENOENT";

const pathExists = async (path: string): Promise<boolean> => {
	try {
		await stat(path);
		return true;
	} catch (error) {
		if (isMissingPathError(error)) return false;
		throw error;
	}
};

const relativeToProject = (projectRoot: string, path: string): string =>
	relative(projectRoot, path).split(sep).join("/");

const collectSourceFiles = async (directory: string): Promise<string[]> => {
	if (!(await pathExists(directory))) return [];
	const entries = await readdir(directory, { withFileTypes: true });
	const childFiles = await Promise.all(
		entries.map(async (entry) => {
			const path = join(directory, entry.name);
			if (entry.isDirectory()) {
				return GENERATED_DIRECTORY_NAMES.has(entry.name) ? [] : collectSourceFiles(path);
			}
			return [path];
		}),
	);
	return childFiles.flat();
};

const hasTestSuffix = (path: string): boolean =>
	TEST_FILE_SUFFIXES.some((suffix) => path.endsWith(suffix));

export const collectArchitectureDiagnostics = async (
	projectRoot = PROJECT_ROOT,
): Promise<string[]> => {
	const sourceRoot = join(projectRoot, SOURCE_DIRECTORY);
	const sourceFiles = await collectSourceFiles(sourceRoot);
	const scannedFiles = sourceFiles.filter((path) => TEXT_FILE_EXTENSIONS.has(extname(path)));
	const astroConfigPath = join(projectRoot, ASTRO_CONFIG_FILE);
	const configFiles = (await pathExists(astroConfigPath)) ? [astroConfigPath] : [];
	const filesToScan = [...scannedFiles, ...configFiles];

	const diagnostics: string[] = [];

	for (const path of sourceFiles) {
		if (extname(path) === ".tsx" && !hasTestSuffix(path)) {
			diagnostics.push(
				`${relativeToProject(projectRoot, path)}: production TSX is not allowed in v1`,
			);
		}
	}

	for (const path of filesToScan) {
		const content = await readFile(path, "utf8");
		const relativePath = relativeToProject(projectRoot, path);
		if (/\b(?:from|import)\s*(?:\(\s*)?["']next(?:\/[^"']*)?["']/u.test(content)) {
			diagnostics.push(`${relativePath}: forbidden Next.js import`);
		}
		for (const hex of ELECTRIC_SHORE_HEX) {
			if (content.toLowerCase().includes(hex)) {
				diagnostics.push(`${relativePath}: forbidden Electric Shore hex ${hex}`);
			}
		}
		for (const font of ONSAND_FONT_NAMES) {
			if (content.includes(font)) {
				diagnostics.push(`${relativePath}: forbidden OnSand font ${font}`);
			}
		}
	}

	return diagnostics.sort((left, right) => left.localeCompare(right));
};
