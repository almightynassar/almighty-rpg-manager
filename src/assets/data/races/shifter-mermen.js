export default {
  id: 'shifter-mermen',
  singular: 'Shifter',
  adjective: 'Shifter',
  plural: 'Shifters',
  name: 'Shifters (Mermen)',
  traits: [
    { id: 'movement+9', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'swim+9', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'size+medium', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'language+choice', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'asi+2', quantity: 1, overwriteName: true, name: 'Ability Score Increase', overwriteDescription: true, description: 'Increase your Charisma and Intelligence Score by 1', extra: null },
    { id: 'asi+1choice', quantity: 1, overwriteName: true, name: 'ASI Choice', overwriteDescription: true, description: 'Increase one Ability Score of your choice by 1', extra: null },
    { id: 'amphibious', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'skill+choice', quantity: 1, overwriteName: true, name: 'Skill Choice', overwriteDescription: true, description: 'You are proficient in one skill of your choice (other than listed in Traders)', extra: null },
    { id: 'skill+limited', quantity: 2, overwriteName: true, name: 'Traders', overwriteDescription: true, description: 'You are proficient in two skills from the following: Deception, Perception, Persuasion, Slight of Hand', extra: null }
  ],
  ranges: {
    age: { min: 15, max: 80 },
    height: { min: 1.3, max: 1.8 },
    weight: { min: 40, max: 80 },
    names: { female: 'frenchFemale', male: 'frenchMale' }
  },
  fluff: [
    { title: 'Hybrid', description: 'The offspring of a Human and a Merman.' }
  ]
}
