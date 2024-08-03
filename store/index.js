import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
	state() {
		return {
			isFaqPopupOpen: false,
			isOverlayOpen: false,
			homePagesData: null,
			profilePagesData: null,
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
		setProfilePagesData(state, data) {
			state.profilePagesData = data
		},
	},
	actions: {
		async fetchHomePagesData({ commit }) {
			try {
				const response = await axios.get('http://176.9.146.233:5151/api/home-pages/all')
				commit('setHomePagesData', response.data)
			} catch (error) {
				console.error('Ошибка: ', error)
			}
		},
		async fetchProfilePagesData({ commit }) {
			try {
				const response = await axios.get('http://176.9.146.233:5151/api/profile-pages/all')
				commit('setProfilePagesData', response.data)
			} catch (error) {
				console.error('Ошибка: ', error)
			}
		},
	},
})
