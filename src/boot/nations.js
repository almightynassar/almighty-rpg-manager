const nations = []
const cities = []

require.context('src/assets/data/nations', true, /\.js$/)
  .keys()
  .filter(page => page.split('/').length >= 2)
  .map(page => page.slice(2).slice(0, -3))
  .forEach(file => {
    import('src/assets/data/nations/' + file)
      .then((module) => {
        nations.push(module.default)
      })
  })

require.context('src/assets/data/cities', true, /\.js$/)
  .keys()
  .filter(page => page.split('/').length >= 2)
  .map(page => page.slice(2).slice(0, -3))
  .forEach(file => {
    import('src/assets/data/cities/' + file)
      .then((module) => {
        cities.push(module.default)
      })
  })

export default ({ Vue }) => {
  Vue.prototype.$nations = {
    cities: cities,
    nations: nations
  }
}
