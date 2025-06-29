// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/icon',
    '@nuxt/image',
    'nuxt-headlessui',
    ['@nuxtjs/google-fonts', {
        families: {
          'Golos Text': {
            wght:'400..900',
          },
        }
    }],,
  ],
  
  typescript: {
    typeCheck: true
  },

  icon: {
    customCollections: [
      {
        prefix: 'belberry',
        dir: './assets/icons'
      },
    ],
  },


})
