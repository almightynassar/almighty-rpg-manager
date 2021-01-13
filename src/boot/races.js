import RaceTraits from 'src/assets/data/RaceTraits'
import Avians from 'src/assets/data/races/avians'
import Dwarves from 'src/assets/data/races/dwarves'
import Forged from 'src/assets/data/races/forged'
import Goblins from 'src/assets/data/races/goblins'
import Humans from 'src/assets/data/races/humans'
import Lacerti from 'src/assets/data/races/lacerti'
import Lefantians from 'src/assets/data/races/lefantians'
import Locanth from 'src/assets/data/races/locanth'
import Merfolk from 'src/assets/data/races/merfolk'
import Minotaurs from 'src/assets/data/races/minotaurs'
import Orcs from 'src/assets/data/races/orcs'
import Snvert from 'src/assets/data/races/snvert'
import Shifters from 'src/assets/data/races/shifters'
import Teztecs from 'src/assets/data/races/teztecs'

export default ({ Vue }) => {
  Vue.prototype.$races = {
    traits: RaceTraits,
    races: [
      Avians,
      Dwarves,
      Forged,
      Goblins,
      Humans,
      Lacerti,
      Lefantians,
      Locanth,
      Merfolk,
      Minotaurs,
      Orcs,
      Snvert,
      Shifters,
      Teztecs
    ]
  }
}
