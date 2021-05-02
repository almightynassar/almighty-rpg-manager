import Markdown from './federation.md'
import Flag from './federation.png'

export default {
  id: 'federation',
  name: 'Federation of Guilds',
  short: 'Federation',
  type: 'Familial Confederacy',
  capital: 'tradetown',
  title: 'Prime Chieftain',
  description: 'Mercentile federation of dwarven clans',
  // In km^2
  area: 223000,
  // In %
  usage: {
    arable: 42,
    wilderness: 57
  },
  // Population Total
  population: 5200000,
  // Ruins & towns
  ruins: 176,
  towns: 21,
  // Distribution (in %)
  distribution: {
    dwarves: 80,
    locanth: 5,
    merfolk: 2.5
  },
  markdown: Markdown,
  flag: Flag
}
