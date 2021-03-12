let gear = []

require.context('src/assets/data/gear/section', true, /\.js$/)
  .keys()
  .filter(page => page.split('/').length >= 2)
  .map(page => page.slice(2).slice(0, -3))
  .forEach(file => {
    import('src/assets/data/gear/section/' + file)
      .then((module) => {
        gear = gear.concat(module.default)
      })
  })

export default ({ Vue }) => {
  Vue.prototype.$gear = {
    list: gear
  }
}
