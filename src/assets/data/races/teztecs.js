export default {
  id: 'teztecs',
  singular: 'Teztec',
  adjective: 'Teztec',
  plural: 'Teztecs',
  name: 'Teztecs (Tortoise race)',
  traits: [
    { id: 'movement+9', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'size+medium', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'language+1', quantity: 1, overwriteName: false, name: '', overwriteDescription: true, description: 'You speak Aquan, in addition to Common', extra: null },
    { id: 'asi+3', quantity: 1, overwriteName: true, name: 'Ability Score Increase', overwriteDescription: true, description: 'Increase your Wisdom Score by 2, and your Constitution Score by 1', extra: null },
    { id: 'strike+unarmed1d4', quantity: 1, overwriteName: true, name: 'Claws', overwriteDescription: false, description: '', extra: 'The damage type is Slashing' },
    { id: 'breath+60', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'armour+17', quantity: 1, overwriteName: true, name: 'Shell', overwriteDescription: false, description: '', extra: null },
    { id: 'shell-defence', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'skill', quantity: 1, overwriteName: true, name: 'Survival Instinct', overwriteDescription: true, description: 'You are proficient in the Survival skill', extra: 'Teztecs have finely honed survival instincts.' }
  ],
  ranges: {
    age: { min: 25, max: 200 },
    height: { min: 1.3, max: 1.8 },
    weight: { min: 60, max: 135 },
    names: { female: 'nativeAmericanFemale', male: 'nativeAmericanMale' }
  },
  fluff: [
    { title: 'Jungle Wardens', description: 'A core part of Teztec culture is living alongside and nuturing nature. Their home among the vast and dense Tezonian jungles, and are fierce protectors of their natural home.' },
    { title: 'Eco-friendly Builders', description: 'The Teztec pride themselves on being able to integrate nature with social and living spaces, and it can be hard to distinguish where a Teztec city ends and the wild jungle begins.' },
    { title: 'Masters of Nature', description: 'While the primordial and spectral magics of the Gauld are highly sought after, the Teztecs have discovered that they could harness the power of aether in all living things.' }
  ]
}
