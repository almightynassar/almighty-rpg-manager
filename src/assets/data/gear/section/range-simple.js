export default [
  {
    name: 'Light Crossbow',
    type: 'Ranged - Simple',
    cost: 2500,
    weight: 2.5,
    properties: ['Loading', 'Two-Handed'],
    damage: '1d8 piercing',
    effects: ['When fired, has a range of 24m/96m (16/64 squares).'],
    requirements: ['Crossbow Bolt ammunition'],
    description: 'A crossbow'
  },
  {
    name: 'Shortbow',
    type: 'Ranged - Simple',
    cost: 2500,
    weight: 1,
    properties: ['Two-Handed'],
    damage: '1d6 piercing',
    effects: ['When fired, has a range of 24m/96m (16/64 squares).'],
    requirements: ['Arrows ammunition'],
    description: 'A bow that requires training to pull, but quick reflexes to adjust aim on the fly'
  }
]
