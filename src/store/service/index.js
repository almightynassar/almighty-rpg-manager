import ServiceTypes from 'src/assets/data/services/types'
import { LocalStorage } from 'quasar'

const state = {
  type: ServiceTypes
}

const getters = {
  getType: (state) => (name) => {
    return state.type.find(obj => {
      return obj.name === name
    })
  }
}

const actions = {
  initialise: (context) => {
    if (LocalStorage.has('serviceType')) {
      context.commit('updateType', LocalStorage.getItem('serviceType'))
    }
  },
  updateType: (context, type) => {
    context.commit('updateType', type)
    LocalStorage.set('serviceType', type)
  }
}

const mutations = {
  updateType: (state, type) => {
    state.defaultCoinage = type
  }
}

export default {
  namespaced: true,
  getters,
  mutations,
  actions,
  state
}
