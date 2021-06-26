import Markdown from './bendris.md'
import Image from './bendris.png'

export default {
  name: 'Bendris Snvertson',
  race: 'snvert',
  gender: 'Male',
  class: 'Artificer',
  age: 85,
  height: 1,
  weight: 17,
  level: 7,
  proficiency: 3,
  attributes: {
    str: 11,
    dex: 15,
    con: 13,
    int: 18,
    wis: 14,
    cha: 12
  },
  throws: [
    'con',
    'int'
  ],
  skills: [
    'arcana',
    'athletics',
    'investigation',
    'perception',
    'stealth'
  ],
  speed: 5,
  health: {
    dice: 8,
    hitdice: 7
  },
  ac: {
    studded_leather: {
      base: 12,
      dex: true
    }
  },
  image: Image,
  markdown: Markdown
}
