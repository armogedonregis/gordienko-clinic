import { createStore } from 'vuex'

export default createStore({
	state() {
		return {
			isFaqPopupOpen: false,
		}
	},
	mutations: {
		openFaqPopup(state) {
			state.isFaqPopupOpen = true
			document.documentElement.style.overflow = 'hidden'
		},
		closeFaqPopup(state) {
			state.isFaqPopupOpen = false
			document.documentElement.style.overflow = 'visible'
		},
	},
})
