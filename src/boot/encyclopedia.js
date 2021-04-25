import Traits from 'src/assets/data/Traits'

const context = require.context('../assets/peoples/', true, /^\.\/(?!template).*\/index\.js$/, 'sync')

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
const peoples = {}
context.keys().forEach(module => {
  peoples[splitter(module)] = context(module).default
})

export default ({ Vue }) => {
  Vue.prototype.$encyclopedia = {
    peoples: peoples,
    traits: Traits
  }
}
