export default {
  id: 'shifter-lefantians',
  singular: 'Shifter',
  adjective: 'Shifter',
  plural: 'Shifters',
  name: 'Shifters (Lefantians)',
  traits: [
    { id: 'movement+9', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'size+medium', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'language+choice', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'asi+2', quantity: 1, overwriteName: true, name: 'Ability Score Increase', overwriteDescription: true, description: 'Increase your Constitution Score by 2', extra: null },
    { id: 'asi+1choice', quantity: 1, overwriteName: true, name: 'ASI Choice', overwriteDescription: true, description: 'Increase one Ability Score of your choice (other than Constitution) by 1', extra: null },
    { id: 'powerful-build', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'skill+choice', quantity: 2, overwriteName: true, name: 'Skill Choice', overwriteDescription: true, description: 'You are proficient in two skills of your choice', extra: null },
    { id: 'armour+12', quantity: 1, overwriteName: true, name: 'Thick Hide', overwriteDescription: false, description: '', extra: null },
    { id: 'extra-appendage', quantity: 1, overwriteName: true, name: 'Trunk', overwriteDescription: false, description: '', extra: 'You can use your trunk as a snorkel. ' }
  ],
  ranges: {
    age: { min: 20, max: 90 },
    height: { min: 1.7, max: 2.2 },
    weight: { min: 90, max: 140 },
    names: { female: 'frenchFemale', male: 'frenchMale' }
  },
  fluff: [
    { title: 'Hybrid', description: 'The offspring of a Human and a Lefantian.' }
  ]
}
