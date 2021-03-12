export default [
  {
    name: 'Blowgun',
    type: 'Ranged - Martial',
    cost: 1000,
    weight: 0.5,
    properties: ['Loading'],
    damage: '1 piercing',
    effects: ['When fired, has a range of 7.5m/30m (5/20 squares).'],
    requirements: ['Needle ammunition'],
    description: 'A simple pipe to blow needles from'
  },
  {
    name: 'Hand Crossbow',
    type: 'Ranged - Martial',
    cost: 7500,
    weight: 1.5,
    properties: ['Light', 'Loading'],
    damage: '1d6 piercing',
    effects: ['When fired, has a range of 9m/36m (6/24 squares).'],
    requirements: ['Crossbow Bolt ammunition'],
    description: 'A small crossbow that can be weilded one-handed'
  },
  {
    name: 'Heavy Crossbow',
    type: 'Ranged - Martial',
    cost: 5000,
    weight: 9,
    properties: ['Heavy', 'Loading', 'Two-Handed'],
    damage: '1d10 piercing',
    effects: ['When fired, has a range of 9m/36m (6/24 squares).'],
    requirements: ['Crossbow Bolt ammunition'],
    description: 'A large, heavy crossbow that is built to damage opponents'
  },
  {
    name: 'Longbow',
    type: 'Ranged - Martial',
    cost: 5000,
    weight: 1,
    properties: ['Heavy', 'Two-Handed'],
    damage: '1d8 piercing',
    effects: ['When fired, has a range of 45m/180m (30/120 squares).'],
    requirements: ['Arrows ammunition'],
    description: 'A large warbow that requires strength and training to pull, but quick reflexes to adjust aim on the fly'
  }
]
