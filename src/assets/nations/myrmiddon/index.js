import Markdown from './myrmiddon.md'
import Flag from './myrmiddon.png'

export default {
  id: 'myrmiddon',
  name: 'Republic of Myrmiddon',
  short: 'Myrmiddon',
  type: 'Capitalist Republic',
  capital: 'amphirus',
  title: 'Grand Doge',
  description: 'Free nation of traders and merchants',
  // In km^2
  area: 76000,
  // In %
  usage: {
    arable: 64,
    wilderness: 35
  },
  // Population Total
  population: 3000000,
  // Ruins & towns
  ruins: 85,
  towns: 36,
  // Distribution (in %)
  distribution: {
    avians: 0,
    dwarves: 2.5,
    forged: 0,
    goblins: 0,
    humans: 2.5,
    lacerti: 0,
    lefantians: 0,
    locanth: 5,
    merfolk: 70,
    minotaurs: 0,
    orcs: 0,
    shifters: 10,
    snvert: 0,
    teztecs: 0
  },
  markdown: Markdown,
  flag: Flag
}
