// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  telemetry: false,
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt',],
  pinia: {
    autoImports: [
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
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
