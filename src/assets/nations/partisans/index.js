import Markdown from './partisans.md'
import Flag from './partisans.png'

export default {
  id: 'partisans',
  name: 'The Partisans',
  short: 'Partisans',
  type: 'Meritocratic Militocracy',
  capital: 'dessingrove',
  title: 'Governor-General',
  description: 'Frontier nation that is flooded with war refugees',
  // In km^2
  area: 92900,
  // In %
  usage: {
    arable: 12,
    wilderness: 87
  },
  // Population Total
  population: 718000,
  // Ruins & towns
  ruins: 122,
  towns: 20,
  // Distribution (in %)
  distribution: {
    avians: 15,
    dwarves: 0,
    forged: 10,
    goblins: 5,
    humans: 5,
    lacerti: 0,
    lefantians: 30,
    locanth: 0,
    merfolk: 0,
    minotaurs: 0,
    orcs: 3,
    shifters: 10,
    snvert: 0,
    teztecs: 20
  },
  markdown: Markdown,
  flag: Flag
}
