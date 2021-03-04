import RaceTraits from 'src/assets/data/RaceTraits'
const races = []
require.context('src/assets/data/races', true, /\.js$/)
  .keys()
  .filter(page => page.split('/').length >= 2)
  .map(page => page.slice(2).slice(0, -3))
  .forEach(file => {
    import('src/assets/data/races/' + file)
      .then((module) => {
        races.push(module.default)
      })
  })
export default ({ Vue }) => {
  Vue.prototype.$races = {
    traits: RaceTraits,
    races: races
  }
}
