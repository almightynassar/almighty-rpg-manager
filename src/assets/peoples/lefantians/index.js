import Markdown from './background.md'
import Image from './lefantians.jpg'

export default {
  singular: 'Lefantian',
  adjective: 'Lefantian',
  plural: 'Lefantians',
  short: 'Elephantfolk',
  age: { min: 17, max: 80 },
  height: { min: 2, max: 2.5 },
  weight: { min: 130, max: 170 },
  names: 'dutch',
  traits: [
    { id: 'movement+9', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'size+medium', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'language+choice', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'asi+3', quantity: 1, overwriteName: true, name: 'Ability Score Increase', overwriteDescription: true, description: 'Increase your Constitution Score by 2, and your Wisdom Score by 1', extra: null },
    { id: 'expertise', quantity: 1, overwriteName: true, name: 'Keen Smell', overwriteDescription: true, description: 'Thanks to your sensitive trunk, you have advantage on Wisdom (Perception), Wisdom (Survival), and Intelligence (Investigation) checks that involve smell.', extra: null },
    { id: 'powerful-build', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'advantage+common', quantity: 1, overwriteName: true, name: 'Serenity', overwriteDescription: true, description: 'You have advantage on saving throws against being charmed or frightened.', extra: null },
    { id: 'skill+choice', quantity: 1, overwriteName: true, name: 'Skill Choice', overwriteDescription: true, description: 'You are proficient in one skill of your choice', extra: null },
    { id: 'armour+12', quantity: 1, overwriteName: true, name: 'Thick Hide', overwriteDescription: false, description: '', extra: null },
    { id: 'extra-appendage', quantity: 1, overwriteName: true, name: 'Trunk', overwriteDescription: false, description: '', extra: 'You can use your trunk as a snorkel. ' }
  ],
  image: Image,
  markdown: Markdown
}
