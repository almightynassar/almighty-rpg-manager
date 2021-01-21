import Markdown from 'src/assets/md/races/orcs.md'

export default {
  id: 'orcs',
  singular: 'Orc',
  adjective: 'Orcish',
  plural: 'Orcs',
  name: 'Orcs',
  short: 'Tusked humanoids',
  traits: [
    { id: 'movement+9', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'size+medium', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'language+1', quantity: 1, overwriteName: false, name: '', overwriteDescription: true, description: 'You speak Orcish, in addition to Common', extra: null },
    { id: 'asi+3', quantity: 1, overwriteName: true, name: 'Ability Score Increase', overwriteDescription: true, description: 'Increase your Strength Score by 2, and your Constitution Score by 1', extra: null },
    { id: 'aggressive', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'darkvision+18', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'relentless-endurance', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'savage-attacks', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null }
  ],
  ranges: {
    age: { min: 12, max: 50 },
    height: { min: 1.6, max: 2 },
    weight: { min: 80, max: 150 },
    names: 'scandinavian'
  },
  markdown: Markdown
}
