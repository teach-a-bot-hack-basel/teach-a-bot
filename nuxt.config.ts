import { defineNuxtConfig } from "nuxt/config"

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  autoImports: {
    global: false,
    dirs: [],
  },
  components: {
    global: false,
    dirs: [],
  },
  telemetry: false,
  modules: ["@nuxtjs/tailwindcss"],
  experimental: {
    reactivityTransform: true,
  },
})
