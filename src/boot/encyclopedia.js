import Traits from 'src/assets/data/Traits'

/**
 * Function to return the desired folder section
 *
 * @param filename The filename with nested directories
 * @param index The desired subdirectory (0 index refers to './')
 */
function splitter (filename, index = 1) {
  return filename.split('/')[index]
}

/**
 * Find the latest peoples for the encyclopedia
 */
let context = require.context('../assets/peoples/', true, /^\.\/(?!template).*\/index\.js$/, 'sync')
const peoples = {}
context.keys().forEach(module => {
  peoples[splitter(module)] = context(module).default
})

/**
 * Find the latest nations for the encyclopedia
 */
context = require.context('../assets/nations/', true, /^\.\/(?!template).*\/index\.js$/, 'sync')
const nations = {}
context.keys().forEach(module => {
  nations[splitter(module)] = context(module).default
})

/**
 * Find the latest monsters for the encyclopedia
 */
context = require.context('../assets/monsters/', true, /^\.\/(?!template).*\/index\.js$/, 'sync')
const monsters = {}
context.keys().forEach(module => {
  monsters[splitter(module)] = context(module).default
})

/**
 * Find the latest party members
 */
context = require.context('../assets/party/', true, /^\.\/(?!template).*\/index\.js$/, 'sync')
const party = {}
context.keys().forEach(module => {
  party[splitter(module)] = context(module).default
})

/**
 * Helper functions for calculations
 */
const helpers = {
  skills: {
    acrobatics: 'dex',
    animals: 'wis',
    arcana: 'int',
    athletics: 'str',
    deception: 'cha',
    history: 'int',
    insight: 'wis',
    intimidation: 'cha',
    investigation: 'int',
    medicine: 'wis',
    nature: 'int',
    perception: 'wis',
    performance: 'cha',
    persuasion: 'cha',
    religion: 'int',
    sleight: 'dex',
    stealth: 'dex',
    survival: 'wis'
  },
  modifier (score) {
    return Math.floor((score - 10) / 2)
  },
  ac (attributes, armour) {
    if (armour) {
      var base = armour.base ?? 10
      var extra = 0
      if (armour.con) {
        var c = this.modifier(attributes.con)
        extra += (armour.max) ? (c > armour.max ? armour.max : c) : c
      }
      if (armour.int) {
        var i = this.modifier(attributes.int)
        extra += (armour.max) ? (i > armour.max ? armour.max : i) : i
      }
      if (armour.wis) {
        var w = this.modifier(attributes.wis)
        extra += (armour.max) ? (w > armour.max ? armour.max : w) : w
      }
      if (armour.dex) {
        var d = this.modifier(attributes.dex)
        extra += (armour.max) ? (d > armour.max ? armour.max : d) : d
      }
      return base + extra
    }
    return 10 + this.modifier(attributes.dex)
  }
}

export default ({ Vue }) => {
  Vue.prototype.$encyclopedia = {
    helpers: helpers,
    monsters: monsters,
    nations: nations,
    party: party,
    peoples: peoples,
    traits: Traits
  }
}
