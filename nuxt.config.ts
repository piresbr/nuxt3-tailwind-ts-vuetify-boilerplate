// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  telemetry: false,
  modules: ['@nuxtjs/tailwindcss'],
  css: ["vuetify/lib/styles/main.sass"],
  runtimeConfig: {
    public: {
      apiBase: '/api'
    }
  },
  build: {
    transpile: ["vuetify"],
  },
})
