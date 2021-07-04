import Markdown from './raorik.md'
import Image from './raorik.png'

export default {
  name: 'Raorik',
  race: 'forged',
  gender: 'Male',
  class: 'Monk',
  age: 470,
  height: 2,
  weight: 130,
  level: 7,
  proficiency: 3,
  attributes: {
    str: 12,
    dex: 15,
    con: 13,
    int: 14,
    wis: 14,
    cha: 11
  },
  throws: [
    'str',
    'dex'
  ],
  skills: [
    'arcana',
    'insight',
    'investigation'
  ],
  speed: 9,
  health: {
    dice: 8,
    hitdice: 7
  },
  ac: {
    monk_unarmoured: {
      name: 'Monk (Unarmoured)',
      base: 10,
      dex: true,
      int: true,
      max: 0
    }
  },
  image: Image,
  markdown: Markdown
}
