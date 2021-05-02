import Markdown from './hentergrey.md'
import Flag from './hentergrey.png'

export default {
  id: 'hentergrey',
  name: 'Hentergrey Empire',
  short: 'Hentergrey',
  type: 'Feudalist Monarchy',
  capital: 'hirst',
  title: 'Emperor',
  description: 'Imperial conquerors and colonisers',
  // In km^2
  area: 1772400,
  // In %
  usage: {
    arable: 46,
    wilderness: 53
  },
  // Population Total
  population: 55000000,
  // Ruins & towns
  ruins: 592,
  towns: 80,
  // Distribution (in %)
  distribution: {
    avians: 12.5,
    dwarves: 0,
    forged: 0,
    goblins: 0,
    humans: 32.5,
    lacerti: 0,
    lefantians: 22.5,
    locanth: 0,
    merfolk: 0,
    minotaurs: 0,
    orcs: 0,
    shifters: 5,
    snvert: 0,
    teztecs: 12.5
  },
  markdown: Markdown,
  flag: Flag
}
