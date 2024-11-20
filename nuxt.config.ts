// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: [
    'bootstrap/dist/css/bootstrap.min.css'
  ],
  script: [
    {
      src: 'bootstrap/dist/js/bootstrap.bundle.min.js'
    }
  ],
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
})
