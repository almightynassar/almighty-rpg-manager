export default ({ Vue }) => {
  Vue.prototype.$coinage = {
    coins: [
      {
        id: 'coin',
        name: 'Coin Pieces',
        symbol: 'cp',
        description: 'A simple coin made of copper and nickel. The most common coinage.',
        convert: 1,
        weight: 0.01
      },
      {
        id: 'gauld',
        name: 'Gaulds',
        symbol: 'G',
        description: 'Ancient coinage used by the Gauld. Made from gold.',
        convert: 25,
        weight: 0.01
      }
    ],
    find: function (id) {
      return this.coins.find(c => c.id === id)
    }
  }
}
