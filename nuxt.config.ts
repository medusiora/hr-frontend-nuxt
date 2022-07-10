import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      titleTemplate: "%s - HR Frontend",
    },
  },
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    "@nuxtjs/tailwindcss",
  ],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          "postcss-nested": {},
          "postcss-hexrgba": {},
        },
      },
    },
  },
});
