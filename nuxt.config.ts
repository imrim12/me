// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@pinia/nuxt", "@vueuse/nuxt", "nuxt-windicss"],
  plugins: ["~/plugins/tippy.ts"],
  css: ["~/assets/style.scss"],
});
