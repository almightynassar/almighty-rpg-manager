export default [
  {
    name: 'Abacus',
    type: 'General',
    cost: 200,
    weight: 1,
    description: 'A calculating tool using beads'
  },
  {
    name: 'Backpack',
    type: 'General',
    cost: 200,
    weight: 1,
    description: 'A backpack holds roughly 15 kg of gear that can fit inside'
  },
  {
    name: 'Barrel',
    type: 'General',
    cost: 200,
    weight: 8,
    description: 'A wooden barrel that holds 150 litres of liquid'
  },
  {
    name: 'Bedroll',
    type: 'General',
    cost: 100,
    weight: 3.5,
    description: 'A simple bedroll made out of fabric and stuffing'
  },
  {
    name: 'Bell',
    type: 'General',
    cost: 100,
    weight: 0.01,
    description: 'A small metal bell'
  },
  {
    name: 'Blanket',
    type: 'General',
    cost: 50,
    weight: 1.5,
    description: 'A warm sheet of fabric, used for bedding'
  },
  {
    name: 'Bomb',
    type: 'General',
    cost: 15000,
    weight: 1.5,
    effects: ['As an action, a character can light this bomb and throw it at a point up to 18m away. Each creature within 1.5m of that point must succeed on a DC 12 DEX saving throw or take 3d6 fire damage.'],
    requirements: ['Max. 4'],
    description: 'An explosive concoction that is contained in metal. Can only safely carry 4 at a time.'
  },
  {
    name: 'Bucket',
    type: 'General',
    cost: 5,
    weight: 1.5,
    description: 'A wooden bucket that holds 10 litres of liquid'
  },
  {
    name: 'Hammer',
    type: 'General',
    cost: 100,
    weight: 1.5,
    description: 'A tool used from hammering'
  },
  {
    name: 'Healing Kit',
    type: 'General',
    cost: 500,
    weight: 1.5,
    effects: ['As an action, you can expend one use of the kit to stabilize a creature that has 0 hit points, without needing to make a Wisdom (Medicine) check.'],
    description: 'This kit is a leather pouch containing bandages, salves, and splints. The kit has ten uses.'
  },
  {
    name: 'Ink',
    type: 'General',
    cost: 400,
    weight: 0.01,
    description: 'The listed price is for black ink. Double the cost for coloured inks.'
  },
  {
    name: 'Parchment',
    type: 'General',
    cost: 20,
    weight: 0.01,
    description: 'A prepared piece of hide fro writing on'
  },
  {
    name: 'Paper',
    type: 'General',
    cost: 40,
    weight: 0.01,
    description: 'A white sheet of paper made from cloth fibres'
  },
  {
    name: 'Pen',
    type: 'General',
    cost: 10,
    weight: 0.01,
    description: 'A wooden stick with a special tip on one end. The tip draws ink in when dipped in a vial and leaves an ink trail when drawn across a surface.'
  },
  {
    name: 'Pole',
    type: 'General',
    cost: 5,
    weight: 3.5,
    effects: [''],
    description: 'A 3m wooden pole, useful for a variety of things'
  },
  {
    name: 'Lock - Advanced',
    type: 'General',
    cost: 4000,
    weight: 0.5,
    effects: ['Can be unlocked without a key by using theives tools and successfully passing a DC 20 check'],
    description: 'A key is provided with the lock. Provides better security than a normal lock'
  },
  {
    name: 'Lock',
    type: 'General',
    cost: 1000,
    weight: 0.5,
    effects: ['Can be unlocked without a key by using theives tools and successfully passing a DC 15 check'],
    description: 'A key is provided with the lock'
  },
  {
    name: 'Sack',
    type: 'General',
    cost: 1,
    weight: 0.25,
    description: 'A fabric sack that holds roughly 20kg of gear'
  },
  {
    name: 'Sledgehammer',
    type: 'General',
    cost: 200,
    weight: 5,
    description: 'A large hammer'
  },
  {
    name: 'Torch',
    type: 'General',
    cost: 1,
    weight: 0.5,
    description: 'A torch burns for 1 hour, providing bright light in a 6m (4 square) radius and dim light for an additional 6m. If an attack with a torch hits, deal 1 fire damage'
  },
  {
    name: 'Waterskin',
    type: 'General',
    cost: 20,
    weight: 2.5,
    description: 'A liquid container made from waterproof fabric'
  },
  {
    name: 'Whetstone',
    type: 'General',
    cost: 1,
    weight: 0.01,
    description: 'A whetstone is a stone used to sharpen weapons and blades'
  }
]
