export default [
  {
    name: 'Club',
    type: 'Melee - Simple',
    cost: 10,
    weight: 1,
    properties: ['Light'],
    damage: '1d4 bludgeoning',
    description: 'A solid piece of material that is easy to handle'
  },
  {
    name: 'Dagger',
    type: 'Melee - Simple',
    cost: 200,
    weight: 0.5,
    properties: ['Finesse', 'Light', 'Thrown'],
    damage: '1d4 piercing',
    effects: ['When thrown, has a range of 6m/18m (4/12 squares).'],
    description: 'A small blade that is easily concealed'
  },
  {
    name: 'Handaxe',
    type: 'Melee - Simple',
    cost: 500,
    weight: 1,
    properties: ['Light', 'Thrown'],
    damage: '1d6 slashing',
    effects: ['When thrown, has a range of 6m/18m (4/12 squares).'],
    description: 'A small axe that can be thrown'
  },
  {
    name: 'Javelin',
    type: 'Melee - Simple',
    cost: 50,
    weight: 1,
    properties: ['Thrown'],
    damage: '1d6 piercing',
    effects: ['When thrown, has a range of 9m/36m (6/25 squares).'],
    description: 'A sharpened stick designed to be thrown'
  },
  {
    name: 'Spear',
    type: 'Melee - Simple',
    cost: 100,
    weight: 1.5,
    properties: ['Thrown', 'Versatile'],
    damage: '1d6 piercing (1d8)',
    effects: ['When thrown, has a range of 6m/18m (4/12 squares).'],
    description: 'A wooden long shaft with a pointed metal tip'
  }
]
