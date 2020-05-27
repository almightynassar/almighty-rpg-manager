export default {
  id: 'minotaurs',
  singular: 'Minotaur',
  adjective: 'Minotaurian',
  plural: 'Minotaurs',
  name: 'Minotaurs (Yak people)',
  traits: [
    { id: 'movement+9', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'size+medium', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'asi+3', quantity: 1, overwriteName: true, name: 'Ability Score Increase', overwriteDescription: true, description: 'Increase your Strength Score by 2, and your Wisdom Score by 1', extra: null },
    { id: 'bull-rush', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'strike+unarmed1d6', quantity: 1, overwriteName: true, name: 'Horns', overwriteDescription: false, description: '', extra: 'The damage type is Piercing' },
    { id: 'powerful-build', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'skill+choice', quantity: 2, overwriteName: true, name: 'Pastoral Healers', overwriteDescription: true, description: 'You are proficient in two skills of your choice from the following: Animal Handling, Athletics, Medicine, Nature, or Survival', extra: null }
  ],
  ranges: {
    age: { min: 12, max: 50 },
    height: { min: 1.7, max: 2.2 },
    weight: { min: 90, max: 160 },
    names: { female: 'spanishFemale', male: 'spanishMale' }
  },
  fluff: [
    { title: 'Pastoral Herders', description: 'The Minotaurs tend to the tundra and plains of continent of Tauria, leading their herds from pasture to pasture. They have also learned a great deal about the healing properties of different plants and substances, as they strive to get the most out of their land.' },
    { title: 'Humble Giants', description: 'One of the largest races on Terrea, alongside the Lefantians, the Minotaurians are generally peaceable. They also are largely vegetarian by choice, choosing to use their herds for milk and wool.' }
  ]
}
