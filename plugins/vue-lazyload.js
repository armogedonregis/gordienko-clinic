import { defineNuxtPlugin } from '#app'
import VueLazyload from 'vue-lazyload'

export default defineNuxtPlugin(nuxtApp => {
	nuxtApp.vueApp.use(VueLazyload, {
		preLoad: 1.3,
		error: 'dist/error.png',
		loading: 'dist/loading.gif',
		attempt: 1,
	})
})
