export default [
  {
    name: 'Acid Vial',
    type: 'Alchemy',
    cost: 2500,
    weight: 0.25,
    effects: [
      'As an action, you can splash the contents on a creature within 1.5m of you or throw the vial up to 6m.',
      'In either case, make a ranged attack against the target, treating the acid as an improvised weapon.',
      'On a hit, the target takes 2d6 acid damage.'
    ],
    description: 'A glass vial filled with a corrosive acid.'
  },
  {
    name: 'Antitoxin',
    type: 'Alchemy',
    cost: 5000,
    weight: 0.25,
    effects: ['When consumed, gain advantage on saving throws against poison for 1 hour'],
    description: 'Helps combat the effects of various poisons'
  },
  {
    name: 'Component Pouch',
    type: 'Alchemy',
    cost: 2500,
    weight: 0.01,
    effects: ['Has compartments to hold all the material components and other special items you need to make potions, except for those components that have a specific cost'],
    description: 'A small, watertight leather belt pouch'
  },
  {
    name: 'Healing Potion',
    type: 'Alchemy',
    cost: 5000,
    weight: 0.25,
    effects: ['When consumed, regain 2d4+2 HP'],
    description: 'A vial of glimmering red liquid. There are various recipes, but they all have the same effect.'
  },
  {
    name: 'Philter of Love',
    type: 'Alchemy',
    cost: 9000,
    weight: 0.25,
    effects: [
      'When consumed, the next time you see a creature within 10 minutes after drinking this philter you become charmed by that creature for 1 hour.'
    ],
    description: 'This potion is a rose-hued, effervescent liquid contains one easy-to-miss bubble shaped like a heart.'
  },
  {
    name: 'Potion of Greater Healing',
    type: 'Alchemy',
    cost: 15000,
    weight: 0.25,
    effects: ['When consumed, regain 4d4+4 HP'],
    description: 'A vial of glimmering red liquid. There are various recipes, but they all have the same effect.'
  },
  {
    name: 'Stimulation Potion',
    type: 'Alchemy',
    cost: 10000,
    weight: 0.25,
    effects: ['When consumed, for the next 8 hours you cannot be magically put to sleep, and you can remain awake during a rest and still gain the benefits'],
    description: 'A bitter, dark brown brew that has no effect on creatures that do not require sleep'
  },
  {
    name: 'Vial (empty)',
    type: 'Alchemy',
    cost: 100,
    weight: 0.01,
    description: 'An empty glass vial'
  }
]
