import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["@/assets/css/main.css"],
  modules: ["@nuxt/icon"],
  icon: {
    mode: "css",
    cssLayer: "base",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
