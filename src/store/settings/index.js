import { Dark, LocalStorage } from 'quasar'

const state = {
  darkMode: false,
  defaultCoinage: 'coin'
}

const getters = {}

const actions = {
  initialise: (context) => {
    if (LocalStorage.has('darkMode')) {
      context.commit('updateDarkMode', LocalStorage.getItem('darkMode'))
    }
    if (LocalStorage.has('defaultCoinage')) {
      context.commit('updateDefaultCoinage', LocalStorage.getItem('defaultCoinage'))
    }
  },
  updateDarkMode: (context, id) => {
    context.commit('updateDarkMode', id)
    LocalStorage.set('darkMode', id)
    Dark.set(id)
  },
  updateDefaultCoinage: (context, id) => {
    context.commit('updateDefaultCoinage', id)
    LocalStorage.set('defaultCoinage', id)
  }
}

const mutations = {
  updateDarkMode: (state, id) => {
    state.darkMode = id
  },
  updateDefaultCoinage: (state, id) => {
    state.defaultCoinage = id
  }
}

export default {
  namespaced: true,
  getters,
  mutations,
  actions,
  state
}
