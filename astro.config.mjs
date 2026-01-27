import { defineConfig } from "astro/config";
import { webcore } from "webcoreui/integration";

//import node from "@astrojs/node";
import purgecss from "astro-purgecss";

// https://astro.build/config
export default defineConfig({
  // output: "server",
  output: "static",
  //site: "",
  integrations: [webcore(), purgecss()],
  //adapter: node({ mode: "standalone" }),
  build: {
    // запрещаем встраивать стили в html
    // https://docs.astro.build/en/guides/styling/#bundle-control
    inlineStylesheets: "never",
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "src/_variables.scss" as *;`,
        },
      },
    },
  },
});
