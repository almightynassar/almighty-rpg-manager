import { LocalStorage } from 'quasar'

const state = {
  defaultCoinage: 'coin'
}

const getters = {}

const actions = {
  initialise: (context) => {
    if (LocalStorage.has('defaultCoinage')) {
      context.commit('updateDefaultCoinage', LocalStorage.getItem('defaultCoinage'))
    }
  },
  updateDefaultCoinage: (context, id) => {
    context.commit('updateDefaultCoinage', id)
    LocalStorage.set('defaultCoinage', id)
  }
}

const mutations = {
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
