import Markdown from './background.md'
import Image from './minotaurs.jpg'

export default {
  singular: 'Minotaur',
  adjective: 'Minotaurian',
  plural: 'Minotaurs',
  short: 'Bovine humanoids',
  age: { min: 12, max: 50 },
  height: { min: 1.7, max: 2.2 },
  weight: { min: 90, max: 160 },
  names: 'spanish',
  traits: [
    { id: 'movement+9', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'size+medium', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'language+choice', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'asi+3', quantity: 1, overwriteName: true, name: 'Ability Score Increase', overwriteDescription: true, description: 'Increase your Strength Score by 2, and your Wisdom Score by 1', extra: null },
    { id: 'bull-rush', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'strike+unarmed1d8', quantity: 1, overwriteName: true, name: 'Horns', overwriteDescription: false, description: '', extra: 'The damage type is Piercing' },
    { id: 'powerful-build', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'skill+limited', quantity: 2, overwriteName: true, name: 'Pastoral Healers', overwriteDescription: true, description: 'You are proficient in two skills of your choice from the following: Animal Handling, Athletics, Medicine, Nature, or Survival', extra: null }
  ],
  image: Image,
  markdown: Markdown
}
