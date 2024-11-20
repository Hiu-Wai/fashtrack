// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  googleFonts: {
    families: {
      'GFS+Didot': true,
      'montserrat' : true
    }
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/google-fonts'],
  css: [
    'bootstrap/dist/css/bootstrap.min.css'
  ],
  head: {
    script: [
      {
        src: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js",
        type: "text/javascript",
      },
    ],
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
})