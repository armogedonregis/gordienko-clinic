// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width,initial-scale=1.0, maximum-scale=1',
        }
      ]
    },
  },
  target: 'static',
  devtools: { enabled: false },
  build: {
    transpile: ['vuetify'],
  },
  plugins: [
    '~/plugins/vuetify.js',
    '~/plugins/vue-lazyload.js',
    '~/plugins/vue-observe-visibility.js'
  ],
  css: [
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css',
  ]
})
