import Markdown from 'src/assets/md/nations/tau.md'

export default {
  id: 'tau',
  name: 'Tau Serenity',
  short: 'Tau',
  type: 'Representative Democracy',
  capital: 'deadrum',
  title: 'Prime Minister',
  description: 'Democracy of Minotaurs',
  // In km^2
  area: 169000,
  // In %
  usage: {
    arable: 24,
    wilderness: 75
  },
  // Population Total
  population: 5000000,
  // Ruins & towns
  ruins: 251,
  towns: 57,
  // Distribution (in %)
  distribution: {
    avians: 0,
    dwarves: 0,
    forged: 0,
    goblins: 0,
    humans: 10,
    lacerti: 0,
    lefantians: 0,
    locanth: 0,
    merfolk: 0,
    minotaurs: 60,
    orcs: 0,
    shifters: 25,
    snvert: 0,
    teztecs: 0
  },
  markdown: Markdown
}
