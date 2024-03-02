// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  runtimeConfig: {
    public: {
      API_ENDPOINT: process.env.API_ENDPOINT,
      PROJECT_ID: process.env.PROJECT_ID,
      DATABASE_ID: process.env.DATABASE_ID,
      COLLECTION_USER_ID: process.env.COLLECTION_USER_ID,
      APPWRITE_API_KEY: process.env.APPWRITE_API_KEY,
    },
  },
});
