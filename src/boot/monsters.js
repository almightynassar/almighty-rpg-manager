import Dragons from 'src/assets/md/monsters/dragons.md'
import Vampires from 'src/assets/md/monsters/vampires.md'

export default ({ Vue }) => {
  Vue.prototype.$monsters = {
    monsters: [
      {
        id: 'dragons',
        name: 'Dragons',
        description: 'Large, immortal flying lizards',
        sentient: true,
        names: 'akkadian',
        markdown: Dragons
      },
      {
        id: 'vampires',
        name: 'Vampires',
        description: 'Blood-sucking, stealthy assassins',
        sentient: true,
        names: 'latin',
        markdown: Vampires
      }
    ]
  }
}
