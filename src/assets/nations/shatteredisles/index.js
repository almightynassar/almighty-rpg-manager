import Markdown from './shatteredisles.md'
import Flag from './shatteredisles.png'

export default {
  id: 'shatteredisles',
  name: 'The Shattered Isles',
  short: 'The Isles',
  type: 'Anarchy',
  capital: 'angarth',
  title: 'Supreme Leader',
  description: 'Loose grouping of various Orc & Goblin tribes',
  // In km^2
  area: 135000,
  // In %
  usage: {
    arable: 27,
    wilderness: 72
  },
  // Population Total
  population: 2000000,
  // Ruins & towns
  ruins: 102,
  towns: 59,
  // Distribution (in %)
  distribution: {
    avians: 0,
    dwarves: 0,
    forged: 0,
    goblins: 45,
    humans: 10,
    lacerti: 0,
    lefantians: 0,
    locanth: 0,
    merfolk: 0,
    minotaurs: 0,
    orcs: 45,
    snvert: 0,
    teztecs: 0
  },
  markdown: Markdown,
  flag: Flag
}
