import Markdown from './background.md'
import Image from './dwarves.jpg'

export default {
  singular: 'Dwarf',
  adjective: 'Dwarven',
  plural: 'Dwarves',
  short: 'Short and Stocky humanoids',
  age: { min: 50, max: 350 },
  height: { min: 1.1, max: 1.4 },
  weight: { min: 60, max: 105 },
  names: 'scottish',
  traits: [
    { id: 'movement+7.5', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'size+medium', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'language+1', quantity: 1, overwriteName: false, name: '', overwriteDescription: true, description: 'You speak Dwarvish, in addition to Common', extra: null },
    { id: 'asi+3', quantity: 1, overwriteName: true, name: 'Ability Score Increase', overwriteDescription: true, description: 'Increase your Constitution Score by 2, and your Strength Score by 1', extra: null },
    { id: 'darkvision+18', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'tool+choice', quantity: 1, overwriteName: true, name: 'Industrialists', overwriteDescription: true, description: 'You are proficient in a tool of your choice', extra: null },
    { id: 'not-slowed-armour', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'resistance+common', quantity: 1, overwriteName: true, name: 'Poison Resistance', overwriteDescription: false, description: '', extra: null },
    { id: 'advantage+situational', quantity: 1, overwriteName: true, name: 'Poison Saving Throws', overwriteDescription: true, description: 'You have advantage on saving throws against Poison', extra: null },
    { id: 'toughness', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null }
  ],
  image: Image,
  markdown: Markdown
}
