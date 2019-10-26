import Vue from 'vue'
import Vuex from 'vuex'
import left from './left'
import center from './center'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    left,
    center
  }
})
