import { readFile, writeFile } from "node:fs/promises";
import theme from "./theme.json" with { type: "json" };

function toKebabCase(str) {
	return str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}

async function generateThemeCss() {
	const baseCssPath = "./base.css";
	const themeCssPath = "./theme.css";
	const baseCss = await readFile(baseCssPath, { encoding: "utf-8" });

	let updatedCss = baseCss;

	for (const [key, value] of Object.entries(theme.schemes.light)) {
		const kebabKey = toKebabCase(key);
		const regex = new RegExp(`var\\(--m3-light-${kebabKey}\\)`, "g");
		updatedCss = updatedCss.replace(regex, value);
	}

	for (const [key, value] of Object.entries(theme.schemes.dark)) {
		const kebabKey = toKebabCase(key);
		const regex = new RegExp(`var\\(--m3-dark-${kebabKey}\\)`, "g");
		updatedCss = updatedCss.replace(regex, value);
	}

	await writeFile(themeCssPath, updatedCss, { encoding: "utf-8" });
}

generateThemeCss().catch(console.error);
