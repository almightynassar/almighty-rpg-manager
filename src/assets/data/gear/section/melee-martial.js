export default [
  {
    name: 'Battleaxe',
    type: 'Melee - Martial',
    cost: 1000,
    weight: 2,
    properties: ['Versatile'],
    damage: '1d8 (1d10) slashing',
    description: 'An axe designed for war'
  },
  {
    name: 'Double-Bladed Scimitar',
    type: 'Melee - Martial',
    cost: 10000,
    weight: 3,
    properties: ['Two-Handed'],
    damage: '2d4 slashing',
    effects: ['If you attack with a double-bladed scimitar as part of the Attack action on your turn, you can use a bonus action immediately after to make a melee attack with it. This attack deals 1d4 slashing damage on a hit, instead of 2d4.'],
    description: 'A curved sword with two edges'
  },
  {
    name: 'Glaive',
    type: 'Melee - Martial',
    cost: 2000,
    weight: 3,
    properties: ['Heavy', 'Reach', 'Two-Handed'],
    damage: '1d10 slashing',
    description: 'A spear with a heavy blade at the tip'
  },
  {
    name: 'Halberd',
    type: 'Melee - Martial',
    cost: 2000,
    weight: 3,
    properties: ['Heavy', 'Reach', 'Two-Handed'],
    damage: '1d10 slashing',
    description: 'A spear with a heavy blade at the tip'
  },
  {
    name: 'Longsword',
    type: 'Melee - Martial',
    cost: 1500,
    weight: 1.5,
    properties: ['Versatile'],
    damage: '1d8 (1d10) slashing',
    description: 'An sword designed for war'
  },
  {
    name: 'Rapier',
    type: 'Melee - Martial',
    cost: 2500,
    weight: 1,
    properties: ['Finesse'],
    damage: '1d8 (1d10) piercing',
    description: 'An sword designed to get the first hit on an opponent'
  },
  {
    name: 'Scimitar',
    type: 'Melee - Martial',
    cost: 2500,
    weight: 1.5,
    properties: ['Light', 'Finesse'],
    damage: '1d6 slashing',
    description: 'An curved sword designed for war'
  },
  {
    name: 'Shortsword',
    type: 'Melee - Martial',
    cost: 1000,
    weight: 1,
    properties: ['Light', 'Finesse'],
    damage: '1d6 piercing',
    description: 'A metal blade attached to a standard hilt.'
  }
]
