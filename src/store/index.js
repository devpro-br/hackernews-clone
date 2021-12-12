import Vue from 'vue'
import Vuex from 'vuex'
import AuthStore from './auth.store.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth: AuthStore.authModule,
  },
  state: {},
  mutations: {},
  actions: {},
  getters: {},
})
