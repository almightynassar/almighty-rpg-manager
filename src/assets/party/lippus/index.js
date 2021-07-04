import Markdown from './lippus.md'
import Image from './lippus.jpg'

export default {
  name: 'Lippus Heints Godoosebert',
  race: 'lefantians',
  gender: 'Male',
  class: 'Ranger',
  age: 30,
  height: 2,
  weight: 150,
  level: 6,
  proficiency: 3,
  attributes: {
    str: 8,
    dex: 15,
    con: 13,
    int: 12,
    wis: 14,
    cha: 10
  },
  throws: [
    'str',
    'dex'
  ],
  skills: [
    'acrobatics',
    'perception',
    'stealth'
  ],
  speed: 6,
  health: {
    dice: 10,
    hitdice: 6
  },
  ac: {
  },
  image: Image,
  markdown: Markdown
}
