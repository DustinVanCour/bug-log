import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

var _api = axios.create({
  baseURL: 'http://bcw-sandbox.herokuapp.com/api/dustintest'
})


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bugs: [],
    bug: {}
  },
  mutations: {
    setBugs(state, data) {
      state.bugs = data
    },
    setBug(state, data) {
      state.bug = data
    }
  },
  actions: {
    async getBugs({ commit, dispatch }) {
      try {
        let res = await _api.get('bugs')
        console.log(res.data)
        commit('setBugs', res.data.results)
      } catch (error) {
        console.error(error)
      }
    },
    createBug({ commit, dispatch }, payload) {
      _api.post('bugs', payload)
        .then(resp => {
          dispatch('getBugs')
        })
        .catch(err => console.error(err))
    },
    async getBugById({ commit, dispatch }, id) {
      let res = await _api.get('bugs/' + id)
      commit('setBug', res.data.results)
    },
  }
})
