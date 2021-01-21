import Markdown from 'src/assets/md/races/shifters.md'

export default {
  id: 'shifters',
  singular: 'Shifter',
  adjective: 'Shifter',
  plural: 'Shifters',
  name: 'Shifters',
  short: 'Hybrid Humanoids',
  traits: [
    { id: 'movement+9', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'size+medium', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'language+choice', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'asi+2', quantity: 1, overwriteName: true, name: 'Ability Score Increase', overwriteDescription: true, description: 'Increase ability scores as outlined in the list below', extra: null },
    { id: 'asi+1choice', quantity: 1, overwriteName: true, name: 'ASI Choice', overwriteDescription: true, description: 'Increase one Ability Score of your choice (other than the one listed for your hybrid choice) by 1', extra: null },
    { id: 'natural+1d8', quantity: 1, overwriteName: true, name: 'Natural Weapon (1d8 + STR)', overwriteDescription: true, description: 'You have natural features that you can use to make an attack such as claws, teeth, a tail or a trunk. You are proficient in this attack.', extra: null },
    { id: 'skill+choice', quantity: 1, overwriteName: true, name: 'Skill Choice', overwriteDescription: true, description: 'You are proficient in one skill of your choice', extra: null },
    { id: 'armour+12', quantity: 1, overwriteName: true, name: 'Tough Skin', overwriteDescription: false, description: '', extra: null },
    { id: 'tool+choice', quantity: 1, overwriteName: true, name: 'Tool Diversity', overwriteDescription: false, description: '', extra: null }
  ],
  ranges: {
    age: { min: 15, max: 80 },
    height: { min: 1.3, max: 1.8 },
    weight: { min: 40, max: 80 },
    names: 'french'
  },
  markdown: Markdown
}
