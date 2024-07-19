import { createStore } from 'vuex'

export default createStore({
	state() {
		return {
			isFaqPopupOpen: false,
			isOverlayOpen: false,
		}
	},
	mutations: {
		openFaqPopup(state) {
			state.isFaqPopupOpen = true
			state.isOverlayOpen = true
			document.documentElement.style.overflow = 'hidden'
		},
		closeFaqPopup(state) {
			state.isFaqPopupOpen = false
			state.isOverlayOpen = false
			document.documentElement.style.overflow = 'visible'
		},
	},
})
