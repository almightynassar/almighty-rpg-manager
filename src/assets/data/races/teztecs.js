import Markdown from 'src/assets/md/races/teztecs.md'

export default {
  id: 'teztecs',
  singular: 'Teztec',
  adjective: 'Teztec',
  plural: 'Teztecs',
  name: 'Teztecs',
  short: 'Tortoise race',
  traits: [
    { id: 'movement+9', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'size+medium', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'language+1', quantity: 1, overwriteName: false, name: '', overwriteDescription: true, description: 'You speak Aquan, in addition to Common', extra: null },
    { id: 'asi+3', quantity: 1, overwriteName: true, name: 'Ability Score Increase', overwriteDescription: true, description: 'Increase your Wisdom Score by 2, and your Constitution Score by 1', extra: null },
    { id: 'strike+unarmed1d4', quantity: 1, overwriteName: true, name: 'Claws', overwriteDescription: false, description: '', extra: 'The damage type is Slashing' },
    { id: 'breath+60', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'armour+17', quantity: 1, overwriteName: true, name: 'Shell', overwriteDescription: false, description: '', extra: null },
    { id: 'shell-defence', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'skill', quantity: 1, overwriteName: true, name: 'Survival Instinct', overwriteDescription: true, description: 'You are proficient in the Survival skill', extra: 'Teztecs have finely honed survival instincts.' }
  ],
  ranges: {
    age: { min: 25, max: 200 },
    height: { min: 1.3, max: 1.8 },
    weight: { min: 60, max: 135 },
    names: { female: 'nativeAmericanFemale', male: 'nativeAmericanMale' }
  },
  markdown: Markdown
}
