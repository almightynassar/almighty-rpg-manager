import Markdown from './geliah.md'
import Image from './geliah.png'

export default {
  name: 'Geliah Sivvith',
  race: 'humans',
  gender: 'Male',
  class: 'Specter',
  age: 30,
  height: 1.65,
  weight: 70,
  level: 7,
  proficiency: 3,
  attributes: {
    str: 16,
    dex: 14,
    con: 16,
    int: 18,
    wis: 14,
    cha: 11
  },
  throws: [
    'wis',
    'int'
  ],
  skills: [
    'arcana',
    'athletics',
    'intimidation',
    'perception'
  ],
  speed: 6,
  health: {
    dice: 8,
    hitdice: 7
  },
  ac: {
    immortal_durability: {
      name: 'Immortal Durability',
      base: 10,
      dex: true,
      con: true
    }
  },
  image: Image,
  markdown: Markdown
}
