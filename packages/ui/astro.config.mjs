import solidJs from "@astrojs/solid-js";
import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import viteSvgSpriteWrapper from "vite-svg-sprite-wrapper";

// https://astro.build/config
export default defineConfig({
	srcDir: "docs",
	integrations: [
		starlight({
			title: "@alien/ui",
			social: [
				{ icon: "github", label: "GitHub", href: "https://github.com/LexSwed/" },
				{ icon: "discord", label: "Discord", href: "https://astro.build/chat" },
			],
			sidebar: [
				{
					label: "Components",
					autogenerate: { directory: "components" },
				},
				{ label: "Colors", link: "/colors/" },
			],
			customCss: ["./docs/global.css"],
		}),
		solidJs(),
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
