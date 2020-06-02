export default {
  id: 'shifter-locanth',
  singular: 'Shifter',
  adjective: 'Shifter',
  plural: 'Shifters',
  name: 'Shifters (Locanth)',
  traits: [
    { id: 'movement+9', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'swim+9', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'size+medium', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'language+choice', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'asi+2', quantity: 1, overwriteName: true, name: 'Ability Score Increase', overwriteDescription: true, description: 'Increase your Wisdom Score by 2', extra: null },
    { id: 'asi+1choice', quantity: 1, overwriteName: true, name: 'ASI Choice', overwriteDescription: true, description: 'Increase one Ability Score of your choice (other than Wisdom) by 1', extra: null },
    { id: 'amphibious', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'skill+choice', quantity: 2, overwriteName: true, name: 'Skill Choice', overwriteDescription: true, description: 'You are proficient in two skills of your choice', extra: null },
    { id: 'armour+12', quantity: 1, overwriteName: true, name: 'Thick Scales', overwriteDescription: false, description: '', extra: null }

  ],
  ranges: {
    age: { min: 15, max: 80 },
    height: { min: 1.4, max: 1.9 },
    weight: { min: 50, max: 140 },
    names: { female: 'frenchFemale', male: 'frenchMale' }
  },
  fluff: [
    { title: 'Hybrid', description: 'The offspring of a Human and a Locanth.' }
  ]
}
