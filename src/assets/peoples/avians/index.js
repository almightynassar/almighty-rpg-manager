import Markdown from './background.md'
import Image from './avians.png'
import Token from './avians-token.jpg'

export default {
  singular: 'Avian',
  adjective: 'Avian',
  plural: 'Avians',
  short: 'Flightless Birdfolk',
  age: { min: 12, max: 60 },
  height: { min: 1.3, max: 1.7 },
  weight: { min: 25, max: 65 },
  names: 'italian',
  traits: [
    { id: 'movement+9', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'size+medium', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'language+1', quantity: 1, overwriteName: false, name: '', overwriteDescription: true, description: 'You speak Auran, in addition to Common', extra: null },
    { id: 'asi+3', quantity: 1, overwriteName: true, name: 'Ability Score Increase', overwriteDescription: true, description: 'Increase your Dexterity Score by 2, and your Wisdom Score by 1', extra: null },
    { id: 'ambusher', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'enhanced-agility', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'mimicry', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'skill+limited', quantity: 1, overwriteName: true, name: 'Skilled ambusher', overwriteDescription: true, description: 'You can choose one of the following skills: acrobatics, deception, persuasion, stealth', extra: null }
  ],
  image: Image,
  token: Token,
  markdown: Markdown
}
