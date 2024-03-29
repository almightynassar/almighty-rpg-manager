import Markdown from './trellisanthe.md'
import Flag from './trellisanthe.png'

export default {
  id: 'trellisanthe',
  name: 'City State of Trellisanthe',
  short: 'Trellisanthe',
  type: 'Meritocratic Autocracy',
  capital: 'trellisanthe',
  title: 'Chancellor',
  description: 'Secretive nation hoarding Spectral secrets',
  // In km^2
  area: 137000,
  // In %
  usage: {
    arable: 24,
    wilderness: 75
  },
  // Population Total
  population: 5000,
  // Ruins & towns
  ruins: 21,
  towns: 1,
  // Distribution (in %)
  distribution: {
    avians: 8,
    dwarves: 8,
    goblins: 4,
    humans: 10,
    lefantians: 8,
    locanth: 8,
    merfolk: 10,
    minotaurs: 8,
    snvert: 8,
    teztecs: 10
  },
  markdown: Markdown,
  flag: Flag
}
