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
  devtools: { enabled: true }
})
