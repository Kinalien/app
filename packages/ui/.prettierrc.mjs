/** @type {import("prettier").Config} */
export default {
	plugins: ["prettier-plugin-tailwindcss", "prettier-plugin-astro"],
	overrides: [
		{
			files: "*.astro",
			options: {
				parser: "astro",
			},
		},
	],
	tailwindStylesheet: "../config/theme.css",
	tailwindFunctions: ["clsx", "tv", "tw", "css"],
};
