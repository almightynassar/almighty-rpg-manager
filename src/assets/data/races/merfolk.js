import Markdown from 'src/assets/md/races/merfolk.md'

export default {
  id: 'merfolk',
  singular: 'Merman',
  adjective: 'Mermish',
  plural: 'Merfolk',
  name: 'Merfolk',
  short: 'Humanoids of the sea',
  traits: [
    { id: 'movement+9', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'swim+9', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'size+medium', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'language+1', quantity: 1, overwriteName: false, name: '', overwriteDescription: true, description: 'You speak Aquan, in addition to Common', extra: null },
    { id: 'language+choice', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'asi+3', quantity: 1, overwriteName: true, name: 'Ability Score Increase', overwriteDescription: true, description: 'Increase your Constitution, Intelligence, and Charisma Scores by 1', extra: null },
    { id: 'amphibious', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'expertise', quantity: 1, overwriteName: true, name: 'Art of the Deal', overwriteDescription: true, description: 'Whenever you make an Wisdom (Insight) check related to determining what a character wants or needs from a trade, you can add twice your proficiency bonus, instead of any proficiency bonus you normally apply.', extra: null },
    { id: 'advantage+common', quantity: 1, overwriteName: true, name: 'Mental Discipline', overwriteDescription: true, description: 'You have advantage on saving throws against being charmed or frightened.', extra: null },
    { id: 'skill+limited', quantity: 2, overwriteName: true, name: 'Traders', overwriteDescription: true, description: 'You are proficient in two skills from the following: Deception, Perception, Persuasion, Slight of Hand', extra: null }
  ],
  ranges: {
    age: { min: 20, max: 90 },
    height: { min: 1.3, max: 1.8 },
    weight: { min: 40, max: 110 },
    names: 'japanese'
  },
  markdown: Markdown
}
