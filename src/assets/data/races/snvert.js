import Markdown from 'src/assets/md/races/snvert.md'

export default {
  id: 'snvert',
  singular: 'Snvert',
  adjective: 'Snvert',
  plural: 'Snvert',
  name: 'Snvert',
  short: 'Ice Gnomes',
  traits: [
    { id: 'movement+7.5', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'size+small', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'language+1', quantity: 1, overwriteName: false, name: '', overwriteDescription: true, description: 'You speak Snvert, in addition to Common', extra: null },
    { id: 'asi+3', quantity: 1, overwriteName: true, name: 'Ability Score Increase', overwriteDescription: true, description: 'Increase your Intelligence Score by 2, and your Dexterity Score by 1', extra: null },
    { id: 'expertise', quantity: 1, overwriteName: true, name: 'Artificer Lore', overwriteDescription: true, description: 'Whenever you make an Intelligence (History) check related to magic items, alchemical objects, or technological devices, you can add twice your proficiency bonus, instead of any proficiency bonus you normally apply.', extra: null },
    { id: 'advantage+common', quantity: 2, overwriteName: true, name: 'Cunning', overwriteDescription: true, description: 'You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic.', extra: null },
    { id: 'darkvision+18', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'tool+choice', quantity: 1, overwriteName: false, name: '', overwriteDescription: true, description: 'You are proficient in a tool of your choice', extra: null }
  ],
  ranges: {
    age: { min: 40, max: 400 },
    height: { min: 0.8, max: 1.1 },
    weight: { min: 15, max: 20 },
    names: 'welsh'
  },
  markdown: Markdown
}
