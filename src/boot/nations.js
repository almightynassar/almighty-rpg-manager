// Nations
import Federation from 'src/assets/data/nations/federation'
import Hentergrey from 'src/assets/data/nations/hentergrey'
import IllumiNaati from 'src/assets/data/nations/illuminaati'
import Myrmiddon from 'src/assets/data/nations/myrmiddon'
import OcearusNation from 'src/assets/data/nations/ocearus'
import Partisans from 'src/assets/data/nations/partisans'
import ShatteredIsles from 'src/assets/data/nations/shatteredisles'
import SnvertNation from 'src/assets/data/nations/snvert'
import Tau from 'src/assets/data/nations/tau'
import TrellisantheNation from 'src/assets/data/nations/trellisanthe'

// Cities
import AlKhaleera from 'src/assets/data/cities/al-khaleera'
import Amphirus from 'src/assets/data/cities/amphirus'
import Angarth from 'src/assets/data/cities/angarth'
import Arkaxus from 'src/assets/data/cities/arkaxus'
import Berylnn from 'src/assets/data/cities/berylnn'
import Caelan from 'src/assets/data/cities/caelan'
import Deadrum from 'src/assets/data/cities/deadrum'
import Deaton from 'src/assets/data/cities/deaton'
import Dessingrove from 'src/assets/data/cities/dessingrove'
import Hirst from 'src/assets/data/cities/hirst'
import FreeMason from 'src/assets/data/cities/freemason'
import Kaytoo from 'src/assets/data/cities/kaytoo'
import Kelerak from 'src/assets/data/cities/kelerak'
import Permand from 'src/assets/data/cities/permand'
import Phalanxis from 'src/assets/data/cities/phalanxis'
import OcearusCity from 'src/assets/data/cities/ocearus'
import Sacium from 'src/assets/data/cities/sacium'
import SnvertCity from 'src/assets/data/cities/snvert'
import Torvia from 'src/assets/data/cities/torvia'
import TradeTown from 'src/assets/data/cities/tradetown'
import TrellisantheCity from 'src/assets/data/cities/trellisanthe'
import Walla from 'src/assets/data/cities/walla'

export default ({ Vue }) => {
  Vue.prototype.$nations = {
    cities: [
      AlKhaleera,
      Amphirus,
      Angarth,
      Arkaxus,
      Berylnn,
      Caelan,
      Deadrum,
      Deaton,
      Dessingrove,
      Hirst,
      FreeMason,
      Kaytoo,
      Kelerak,
      OcearusCity,
      Permand,
      Phalanxis,
      Sacium,
      SnvertCity,
      Torvia,
      TradeTown,
      TrellisantheCity,
      Walla
    ],
    nations: [
      Federation,
      Hentergrey,
      IllumiNaati,
      Myrmiddon,
      OcearusNation,
      Partisans,
      ShatteredIsles,
      SnvertNation,
      Tau,
      TrellisantheNation
    ]
  }
}
