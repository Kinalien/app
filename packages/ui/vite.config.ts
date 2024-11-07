import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import viteSvgSpriteWrapper from "vite-svg-sprite-wrapper";

export default defineConfig({
  plugins: [
    solid(),
    viteSvgSpriteWrapper({
      icons: "../config/icons/source/*.svg",
      outputDir: "../config/icons",
      generateType: true,
      typeOutputDir: "./src/icon",
      sprite: {
        shape: {
          dimension: {
            attributes: true, // Width and height attributes on embedded shapes
          },
        },
      },
    }),
  ],
});
