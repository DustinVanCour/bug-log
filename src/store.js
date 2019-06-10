import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { stat } from 'fs';

var _api = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/dustintest/bugs'
})


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bugs: [],
    bug: {},
    notes: [],
    note: {}
  },
  mutations: {
    setBugs(state, data) {
      state.bugs = data
    },
    setBug(state, data) {
      state.bug = data
    },
    setNotes(state, data) {
      state.notes = data
    },
    setNote(state, data) {
      state.note = data
    }
  },
  actions: {
    // --- HOME ACTIONS ---
    async getBugs({ commit, dispatch }) {
      try {
        let res = await _api.get('')
        console.log(res.data)
        commit('setBugs', res.data.results)
      } catch (error) {
        console.error(error)
      }
    },

    createBug({ commit, dispatch }, payload) {
      _api.post('', payload)
        .then(resp => {
          dispatch('getBugs')
        })
        .catch(err => console.error(err))
    },

    async getBugById({ commit, dispatch }, id) {
      let res = await _api.get(id)
      commit('setBug', res.data.results)
    },

    // --- NOTES ACTIONS---
    async getNotes({ commit, state }, id) {
      try {
        let res = await _api.get(id + '/notes')
        console.log(res.data)
        commit('setNotes', res.data.results)
      } catch (error) {
        console.error(error)
      }
    },

    createNote({ commit, dispatch, state }, payload) {
      _api.post(state.bug._id + '/notes/', payload)
        .then(resp => {
          dispatch('getNotes', state.bug._id) // don't forget to pass the bug id here
        })
        .catch(err => console.error(err))
    },

    async getNoteById({ commit, dispatch, state }, id) {
      let res = await _api.get(state.bug._id + '/notes/' + id)
      commit('setNote', res.data.results)
    },

    async deleteNoteById({ commit, dispatch, state }, id) {
      _api.delete(state.bug._id + '/notes/' + id)
        .then(resp => {
          dispatch('getNotes', state.bug._id) // don't forget to pass the bug id here
        })
        .catch(err => console.error(err))
    },



    // let res = await _api.delete(state.bug._id + '/notes/' + id)
    // console.log("Delete Note", res),
    //   .then(resp => {
    //     dispatch('getNotes', state.bug._id) // don't forget to pass the bug id here
    //   })
    //   .catch(err => console.error(err))
    // Two options
    // 1. remove the note from notes in state with the id id
    //      this is entirely front end and involves a new mutation
    // 2. dispatch getNotes and pass the bug Id
  },
})
