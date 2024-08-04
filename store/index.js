import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
	state() {
		return {
			isFaqPopupOpen: false,
			isOverlayOpen: false,
			homePagesData: null,
			profilePagesData: null,
			articlesBlocksData: null,
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
		setArticlesBlocksData(state, data) {
			state.articlesBlocksData = data
		},
	},
	actions: {
		async fetchHomePagesData({ commit }) {
			try {
				const response = await axios.get('https://gordienko.doctor/api/home-pages/all')
				commit('setHomePagesData', response.data)
			} catch (error) {
				console.error('Ошибка: ', error)
			}
		},
		async fetchProfilePagesData({ commit }) {
			try {
				const response = await axios.get('https://gordienko.doctor/api/profile-pages/all')
				commit('setProfilePagesData', response.data)
			} catch (error) {
				console.error('Ошибка: ', error)
			}
		},
		async fetchArticlesBlocksData({ commit }) {
			try {
				const response = await axios.get('https://gordienko.doctor/api/article/all')
				commit('setArticlesBlocksData', response.data)
			} catch (error) {
				console.error('Ошибка: ', error)
			}
		},
	},
})
