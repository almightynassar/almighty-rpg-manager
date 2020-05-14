import Reference from 'src/assets/data/Reference'
import { LocalStorage } from 'quasar'

const state = {
  reference: Reference
}

const getters = {
  getReferenceByName: (state) => (name) => {
    return state.reference.find(obj => {
      return obj.name === name
    })
  }
}

const actions = {
  initialise: (context) => {
    if (LocalStorage.has('reference')) {
      context.commit('updateReference', LocalStorage.getItem('reference'))
    }
  },
  updateReference: (context, reference) => {
    context.commit('updateReference', reference)
    LocalStorage.set('reference', reference)
  }
}

const mutations = {
  updateReference: (state, reference) => {
    state.defaultCoinage = reference
  }
}

export default {
  namespaced: true,
  getters,
  mutations,
  actions,
  state
}
