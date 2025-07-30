// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/index.css"],
  modules: [
    "@nuxt/image",
    "@nuxt/ui",
    [
      "@storyblok/nuxt",
      {
        accessToken: process.env.STORYBLOK_DELIVERY_API_TOKEN,
        apiOptions: {
          region: "en",
        },
      },
    ],
  ],
  image: {
    storyblok: {
      baseURL: "https://a.storyblok.com",
    },
  },
});
