import Markdown from 'src/assets/md/races/goblins.md'

export default {
  id: 'goblins',
  singular: 'Goblin',
  adjective: 'Goblinoid',
  plural: 'Goblins',
  name: 'Goblins',
  short: 'Short, cunning and green',
  traits: [
    { id: 'movement+9', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'size+small', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'language+1', quantity: 1, overwriteName: false, name: '', overwriteDescription: true, description: 'You speak Goblin, in addition to Common', extra: null },
    { id: 'asi+3', quantity: 1, overwriteName: true, name: 'Ability Score Increase', overwriteDescription: true, description: 'Increase your Dexterity Score by 2, and your Constitution Score by 1', extra: null },
    { id: 'nimble-escape', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'nimbleness', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'small-fury', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null }
  ],
  ranges: {
    age: { min: 8, max: 60 },
    height: { min: 0.8, max: 1.1 },
    weight: { min: 15, max: 20 },
    names: 'aztec'
  },
  markdown: Markdown
}
