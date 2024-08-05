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
			blogPagesData: null,
			questionPagesData: null,
			resultsPagesData: null,
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
		setBlogPagesData(state, data) {
			state.blogPagesData = data
		},
		setQuestionPagesData(state, data) {
			state.questionPagesData = data
		},
		setResultsPagesData(state, data) {
			state.resultsPagesData = data
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
		async fetchBlogPagesData({ commit }) {
			try {
				const response = await axios.get('https://gordienko.doctor/api/blog/all')
				commit('setBlogPagesData', response.data)
			} catch (error) {
				console.error('Ошибка: ', error)
			}
		},
		async fetchQuestionPagesData({ commit }) {
			try {
				const response = await axios.get('https://gordienko.doctor/api/faq/all')
				commit('setQuestionPagesData', response.data)
			} catch (error) {
				console.error('Ошибка: ', error)
			}
		},
		async fetchResultsPagesData({ commit }) {
			try {
				const response = await axios.get('https://gordienko.doctor/api/result/all')
				commit('setResultsPagesData', response.data)
			} catch (error) {
				console.error('Ошибка: ', error)
			}
		},
	},
})
