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
 * Find the latest nationss for the encyclopedia
 */
context = require.context('../assets/nations/', true, /^\.\/(?!template).*\/index\.js$/, 'sync')
const nations = {}
context.keys().forEach(module => {
  nations[splitter(module)] = context(module).default
})

export default ({ Vue }) => {
  Vue.prototype.$encyclopedia = {
    nations: nations,
    peoples: peoples,
    traits: Traits
  }
}
