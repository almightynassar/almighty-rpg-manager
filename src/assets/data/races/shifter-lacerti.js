export default {
  id: 'shifter-lacerti',
  singular: 'Shifter',
  adjective: 'Shifter',
  plural: 'Shifters',
  name: 'Shifters (Lacerti)',
  traits: [
    { id: 'movement+9', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'swim+9', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'size+medium', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'language+choice', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'asi+2', quantity: 1, overwriteName: true, name: 'Ability Score Increase', overwriteDescription: true, description: 'Increase your Strength and Dexterity Score by 1', extra: null },
    { id: 'asi+1choice', quantity: 1, overwriteName: true, name: 'ASI Choice', overwriteDescription: true, description: 'Increase one Ability Score of your by 1', extra: null },
    { id: 'strike+unarmed1d6', quantity: 1, overwriteName: true, name: 'Bite', overwriteDescription: false, description: '', extra: 'The damage type is Piercing' },
    { id: 'armour+12', quantity: 1, overwriteName: true, name: 'Scaly Skin', overwriteDescription: false, description: '', extra: null },
    { id: 'skill+choice', quantity: 1, overwriteName: true, name: 'Skill Choice', overwriteDescription: true, description: 'You are proficient in one skill of your choice', extra: null },
    { id: 'extra-appendage', quantity: 1, overwriteName: true, name: 'Tail', overwriteDescription: false, description: '', extra: null }
  ],
  ranges: {
    age: { min: 15, max: 80 },
    height: { min: 1.4, max: 1.9 },
    weight: { min: 50, max: 140 },
    names: { female: 'frenchFemale', male: 'frenchMale' }
  },
  fluff: [
    { title: 'Hybrid', description: 'The offspring of a Human and a Lacertus.' }
  ]
}
