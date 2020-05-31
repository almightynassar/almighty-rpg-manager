export default {
  id: 'humans',
  singular: 'Human',
  adjective: 'Human',
  plural: 'Humans',
  name: 'Humans',
  traits: [
    { id: 'movement+9', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'size+medium', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'language+choice', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'asi+1all', quantity: 1, overwriteName: true, name: 'Ability Score Increase', overwriteDescription: true, description: 'Increase all Ability Scores by 1', extra: null },
    { id: 'skill+choice', quantity: 1, overwriteName: true, name: 'Ingenuity', overwriteDescription: true, description: 'You are proficient in one skill of your choice', extra: null },
    { id: 'tenacity', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null }
  ],
  ranges: {
    age: { min: 20, max: 90 },
    height: { min: 1.4, max: 1.9 },
    weight: { min: 50, max: 125 },
    names: { female: 'frenchFemale', male: 'frenchMale' }
  },
  fluff: [
    { title: 'The First People', description: 'After the Sundering, the Gods created Humans in the image of the defeated Gauld. Humans were made to be physically smaller and less focused, but they are still the cunning problem solvers that the Gauld were.' },
    { title: 'Diversity and Flexibility', description: 'Humans are diverse in all senses of the word, with a penchant for migration and conquest. There is no typical human, but they are by far the most ambitious and adaptable of the races.' }
  ]
}
