import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import viteSvgSpriteWrapper from "vite-svg-sprite-wrapper";

// https://astro.build/config
export default defineConfig({
	srcDir: "docs",
	integrations: [
		starlight({
			title: "@nou/ui",
			social: {
				github: "https://github.com/LexSwed/",
			},
			sidebar: [
				{
					label: "Components",
					autogenerate: { directory: "components" },
				},
			],
			components: {
				MarkdownContent: "./docs/components/MarkdownContent.astro",
			},
		}),
	],
	vite: {
		plugins: [
			tailwindcss(),
			viteSvgSpriteWrapper({
				icons: "../config/icons/source/*.svg",
				outputDir: "../config/icons",
				generateType: true,
				typeOutputDir: "../ui/src/icon",
				sprite: {
					shape: {
						dimension: {
							// Width and height attributes on embedded shapes
							attributes: true,
						},
					},
				},
			}),
		],
	},
});
