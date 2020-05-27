export default {
  id: 'hobgoblins',
  singular: 'Hobgoblin',
  adjective: 'Goblinoid',
  plural: 'Hobgoblins',
  name: 'Hobgoblins',
  traits: [
    { id: 'movement+9', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'size+medium', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'language+1', quantity: 1, overwriteName: false, name: '', overwriteDescription: true, description: 'You speak Goblin, in addition to Common', extra: null },
    { id: 'asi+3', quantity: 1, overwriteName: true, name: 'Ability Score Increase', overwriteDescription: true, description: 'Increase your Charisma Score by 2, and your Constitution Score by 1', extra: null },
    { id: 'skill+choice', quantity: 1, overwriteName: true, name: 'Intermediary', overwriteDescription: true, description: 'You are proficient in a skill of your choice from the following: Deception, Intimidation, Performance, or Persuasion', extra: null },
    { id: 'skill', quantity: 1, overwriteName: true, name: 'Orchish Physique', overwriteDescription: true, description: 'You are proficient in the Athletics skill.', extra: null },
    { id: 'stone-endurance', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null }
  ],
  ranges: {
    age: { min: 10, max: 60 },
    height: { min: 1.4, max: 1.8 },
    weight: { min: 50, max: 110 },
    names: { female: 'aztecFemale', male: 'aztecMale' }
  },
  fluff: [
    { title: 'Offspring of Goblins and Orcs', description: 'Hobgoblins are the result of interbreeding between the Goblins and the Orcs. They are often seen as an intermediary race, binding the two together. However, Hobgoblins generally live among goblins since they generally do not have the Strength to rise up in Orc tribes.' }
  ]
}
