import jwt_decode from 'jwt-decode'
import AuthApi from '../api/auth.api.js'

/*
  USAGE

  # STATE
  store.auth.item
  
  # MUTATIONS
  store.commit('method')
  
  # ACTIONS
  store.dispatch('auth/method')
  
  # GETTERS
  store.getters['auth/method']

*/

const authModule = {
  namespaced: true,
  state: {
    loading: false,
    loggedUser: {},
    emailSaved: '',
  },
  mutations: {
    setLoading(state, payload) {
      state.loading = payload
    },
    setLoggedUser(state, payload) {
      if (payload && payload.token) {
        payload.auth = jwt_decode(payload.token)
      }
      state.loggedUser = payload
    },
    setEmailSaved(state, payload) {
      state.emailSaved = payload
    },
  },
  actions: {
    async setLoggedUser(state, { username, password }) {
      try {
        state.commit('setLoading', true)
        const user = await AuthApi.login(username, password)
        state.commit('setLoggedUser', user)
        window.localStorage.setItem('loggedUser', JSON.stringify(user))
        state.commit('setLoading', false)
      } catch (err) {
        state.commit('setLoggedUser', null)
        state.commit('setLoading', false)
        return Promise.reject(err)
      }
    },
    async loadLoggedUser(state) {
      const userJson = window.localStorage.getItem('loggedUser')
      if (!userJson) {
        state.commit('setLoggedUser', null)
        return
      }
      state.commit('setLoggedUser', JSON.parse(userJson))
    },
    async clearLoggedUser(state) {
      window.localStorage.removeItem('loggedUser')
      state.commit('setLoggedUser', null)
    },
    async setEmailSaved(state, email) {
      window.localStorage.setItem('emailSaved', email)
      state.commit('setEmailSaved', email)
    },
    async loadEmailSaved(state) {
      const email = window.localStorage.getItem('emailSaved') || ''
      state.commit('setEmailSaved', email)
    },
  },
  getters: {
    getLoading: (state) => state.loading,
    getLoggedUser: (state) => state.loggedUser,
    getEmailSaved: (state) => state.emailSaved,
  },
}

export default {
  authModule,
}
