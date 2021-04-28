import GearProperty from 'src/assets/data/gear/property'
import GearTypes from 'src/assets/data/gear/types'
import { LocalStorage } from 'quasar'

const state = {
  property: GearProperty,
  type: GearTypes
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
    if (LocalStorage.has('gearType')) {
      context.commit('updateType', LocalStorage.getItem('gearType'))
    }
  },
  updateType: (context, type) => {
    context.commit('updateType', type)
    LocalStorage.set('gearType', type)
  }
}

const mutations = {
  updateType: (state, type) => {
    state.type = type
  }
}

export default {
  namespaced: true,
  getters,
  mutations,
  actions,
  state
}
