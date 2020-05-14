import GearProperty from 'src/assets/data/gear/property'
import GearTypes from 'src/assets/data/gear/types'
import Gear from 'src/assets/data/gear/list'
import { LocalStorage } from 'quasar'

const state = {
  gear: Gear,
  property: GearProperty,
  type: GearTypes
}

const getters = {
  getGearByName: (state) => (name) => {
    return state.gear.find(obj => {
      return obj.name === name
    })
  }
}

const actions = {
  initialise: (context) => {
    if (LocalStorage.has('gear')) {
      context.commit('updateGear', LocalStorage.getItem('gear'))
    }
  },
  updateGear: (context, gear) => {
    context.commit('updateGear', gear)
    LocalStorage.set('gear', gear)
  }
}

const mutations = {
  updateGear: (state, gear) => {
    state.defaultCoinage = gear
  }
}

export default {
  namespaced: true,
  getters,
  mutations,
  actions,
  state
}
