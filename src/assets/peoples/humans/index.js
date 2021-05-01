import Markdown from './background.md'
import Image from './humans.jpg'
import Token from './humans-token.jpg'

export default {
  singular: 'Human',
  adjective: 'Human',
  plural: 'Humans',
  short: 'The stock standard',
  age: { min: 20, max: 90 },
  height: { min: 1.4, max: 1.9 },
  weight: { min: 50, max: 125 },
  names: 'french',
  traits: [
    { id: 'movement+9', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'size+medium', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'language+choice', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'asi+1all', quantity: 1, overwriteName: true, name: 'Ability Score Increase', overwriteDescription: true, description: 'Increase all Ability Scores by 1', extra: null },
    { id: 'skill+choice', quantity: 1, overwriteName: true, name: 'Ingenuity', overwriteDescription: true, description: 'You are proficient in one skill of your choice', extra: null },
    { id: 'tenacity', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null }
  ],
  image: Image,
  token: Token,
  markdown: Markdown
}
