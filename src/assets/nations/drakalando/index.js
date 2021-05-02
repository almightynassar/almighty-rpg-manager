import Markdown from './drakalando.md'
import Flag from './drakalando.png'

export default {
  id: 'drakalando',
  name: 'Supremancy of Drakalando',
  short: 'Drakalando',
  type: 'Loose Gerontocracy',
  capital: 'citadel',
  title: 'The Ancient',
  description: 'A land run by Dragons',
  // In km^2
  area: 125000,
  // In %
  usage: {
    arable: 26,
    wilderness: 74
  },
  // Population Total
  population: 2000,
  // Ruins & towns
  ruins: 94,
  towns: 0,
  // Distribution (in %)
  distribution: {
    humans: 35,
    goblins: 15,
    merfolk: 15,
    orcs: 25
  },
  markdown: Markdown,
  flag: Flag
}
