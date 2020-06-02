export default {
  id: 'shifter-minotaurs',
  singular: 'Shifter',
  adjective: 'Shifter',
  plural: 'Shifters',
  name: 'Shifters (Minotaurs)',
  traits: [
    { id: 'movement+9', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'size+medium', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'language+choice', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'asi+2', quantity: 1, overwriteName: true, name: 'Ability Score Increase', overwriteDescription: true, description: 'Increase your Strength Score by 2', extra: null },
    { id: 'asi+1choice', quantity: 1, overwriteName: true, name: 'ASI Choice', overwriteDescription: true, description: 'Increase one Ability Score of your choice (other than Strength) by 1', extra: null },
    { id: 'strike+unarmed1d8', quantity: 1, overwriteName: true, name: 'Horns', overwriteDescription: false, description: '', extra: 'The damage type is Piercing' },
    { id: 'skill+choice', quantity: 1, overwriteName: true, name: 'Skill Choice', overwriteDescription: true, description: 'You are proficient in one skill of your choice (other than the ones listed in Pastoral Herders)', extra: null },
    { id: 'skill+limited', quantity: 2, overwriteName: true, name: 'Pastoral Healers', overwriteDescription: true, description: 'You are proficient in two skills of your choice from the following: Animal Handling, Athletics, Medicine, Nature, or Survival', extra: null }
  ],
  ranges: {
    age: { min: 15, max: 80 },
    height: { min: 1.3, max: 1.8 },
    weight: { min: 40, max: 80 },
    names: { female: 'frenchFemale', male: 'frenchMale' }
  },
  fluff: [
    { title: 'Hybrid', description: 'The offspring of a Human and a Minotaur.' }
  ]
}
