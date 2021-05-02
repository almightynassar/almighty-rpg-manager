import Markdown from './snvert.md'
import Flag from './snvert-flag.png'

export default {
  id: 'snvert',
  name: 'Technocracy of Snvert',
  short: 'Snvert',
  type: 'Technocratic Meritocracy',
  capital: 'snvert',
  title: 'Prime Snvert',
  description: 'Technological nation of Ice Gnomes',
  // In km^2
  area: 313000,
  // In %
  usage: {
    arable: 23,
    wilderness: 76
  },
  // Population Total
  population: 3600000,
  // Ruins & towns
  ruins: 286,
  towns: 20,
  // Distribution (in %)
  distribution: {
    avians: 0,
    dwarves: 0,
    forged: 0,
    goblins: 5,
    humans: 0,
    lacerti: 0,
    lefantians: 0,
    locanth: 2.5,
    merfolk: 3,
    minotaurs: 0,
    orcs: 2.5,
    snvert: 85,
    teztecs: 0
  },
  markdown: Markdown,
  flag: Flag
}
