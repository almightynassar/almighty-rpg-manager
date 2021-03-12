export default [
  {
    name: 'Buckler',
    type: 'Shield',
    cost: 500,
    weight: 1,
    ac: '+1',
    description: 'A small metal or wooden shield heald in a fist grip. You can benefit from only one shield at a time'
  },
  {
    name: 'Shield',
    type: 'Shield',
    cost: 1000,
    weight: 3,
    ac: '+2',
    description: 'A wooden or metal shield that is carried in one hand. You can benefit from only one shield at a time'
  },
  {
    name: 'Tower Shield',
    type: 'Shield',
    cost: 3000,
    weight: 20,
    properties: ['Stealth Disadvantage'],
    ac: '+2',
    requirements: ['STR 15'],
    description: 'A massive shield that covers part of the user. You can spend an amount of movement equal to half your speed to gain half cover until the start of your next turn (bonuses apply)'
  }
]
