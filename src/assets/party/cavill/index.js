import Markdown from './cavill.md'
import Image from './cavill.jpeg'

export default {
  name: 'Cavill Henryson',
  race: 'dwarves',
  gender: 'Male',
  class: 'Cleric',
  age: 160,
  height: 1.4,
  weight: 90,
  level: 7,
  proficiency: 3,
  attributes: {
    str: 14,
    dex: 12,
    con: 16,
    int: 10,
    wis: 15,
    cha:8
  },
  throws: [
    'wis',
    'cha'
  ],
  skills: [
    'history',
    'insight',
    'investigation',
    'persuasion'
  ],
  speed: 5,
  health: {
    dice: 8,
    hitdice: 7
  },
  ac: {
    chain_mail: {
      name: 'Chain Mail',
      base: 16,
      dex: false
    }
  },
  image: Image,
  markdown: Markdown
}
