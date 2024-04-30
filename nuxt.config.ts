export default defineNuxtConfig({
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@nuxt/ui"],
  runtimeConfig: {
    keyTest: "",
    public: {
      keyTest: "",
    },
  },
});
