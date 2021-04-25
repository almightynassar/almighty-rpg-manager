import Markdown from './background.md'
import Image from './lacerti.png'

export default {
  singular: 'Lacertus',
  adjective: 'Lacertan',
  plural: 'Lacerti',
  short: 'Lizardfolk',
  age: { min: 14, max: 60 },
  height: { min: 1.5, max: 2 },
  weight: { min: 55, max: 160 },
  names: 'germanic',
  traits: [
    { id: 'movement+9', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'swim+9', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'size+medium', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'language+1', quantity: 1, overwriteName: false, name: '', overwriteDescription: true, description: 'You speak Draconian, in addition to Common', extra: null },
    { id: 'asi+3', quantity: 1, overwriteName: true, name: 'Ability Score Increase', overwriteDescription: true, description: 'Increase your Strength Score by 2, and your Dexterity Score by 1 (If Lacinum, increase Charisma by 2 and Strength by 1).', extra: null },
    { id: 'strike+unarmed1d6', quantity: 1, overwriteName: true, name: 'Bite', overwriteDescription: false, description: '', extra: 'The damage type is Piercing' },
    { id: 'breath+15', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'hungry-jaws', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'armour+13', quantity: 1, overwriteName: true, name: 'Scaly Skin', overwriteDescription: false, description: '', extra: null },
    { id: 'extra-appendage', quantity: 1, overwriteName: true, name: 'Tail', overwriteDescription: false, description: '', extra: null }
  ],
  image: Image,
  markdown: Markdown
}
