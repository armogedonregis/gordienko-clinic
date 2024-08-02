import { createStore } from 'vuex'

export default createStore({
	state() {
		return {
			isFaqPopupOpen: false,
			isOverlayOpen: false,
			homePagesData: null,
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
		setHomePagesData(state, data) {
			state.homePagesData = data
		},
	},
	actions: {
		async fetchHomePagesData({ commit }) {
			try {
				const response = await fetch('http://79.174.83.185:5000/api/home-pages/all')
				const data = await response.json()
				commit('setHomePagesData', data)
			} catch (error) {
				console.error('Ошибка: ', error)
			}
		},
	},
})
