<template>
  <div class="q-pa-md">
    <q-splitter v-model="splitterModel">
      <template v-slot:before>
        <q-tabs
          v-model="tab"
          align="left"
          vertical
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
        >
          <q-tab
            v-for="t in tabs"
            :key="t.id"
            :name="t.id"
            :label="t.name"
            style="justify-content:initial"
          />
        </q-tabs>
      </template>

      <template v-slot:after>
        <q-tab-panels
          v-model="tab"
          animated
          swipeable
          vertical
          transition-prev="jump-up"
          transition-next="jump-up"
        >
          <q-tab-panel key="about" name="about">
            <p>You are using version {{ version }}. You can see the available version at the <a href="https://github.com/almightynassar/almighty-rpg-manager/releases">releases page</a></p>
          </q-tab-panel>

          <q-tab-panel key="coinage" name="coinage">
            <q-select
              v-model="coinage"
              :options="coinageOptions"
              option-label="name"
              label="Default Coinage"
              map-options
            />
            <q-separator spaced />
            <q-btn color="primary" label="Save" icon="save" @click="saving" />
          </q-tab-panel>

          <q-tab-panel key="names" name="names">
            <name-generator></name-generator>
          </q-tab-panel>

          <q-tab-panel key="music" name="music">
            <music-tab></music-tab>
          </q-tab-panel>
        </q-tab-panels>
      </template>
    </q-splitter>
  </div>
</template>

<script >
import { version } from '../../package.json'
import NameGenerator from './NameGenerator'
import MusicTab from './Tabs/Music'

export default {
  name: 'Settings',
  components: {
    MusicTab,
    NameGenerator
  },
  data: function () {
    return {
      coinage: '',
      coinageOptions: [],
      splitterModel: 20,
      tab: 'about',
      tabs: [
        { id: 'about', name: 'About' },
        { id: 'coinage', name: 'Coinage' },
        { id: 'music', name: 'Music' },
        { id: 'names', name: 'Name Generator' }
      ],
      version: 'v' + version
    }
  },
  methods: {
    saving () {
      this.$store.dispatch('coinage/updateDefaultCoinage', this.coinage.id)
    }
  },
  created () {
    // Set our default coinage to what is set in our store
    this.coinage = this.$store.getters['coinage/getCoinageByID'](this.$store.state.coinage.defaultCoinage)

    // Grab our default coinage array
    this.coinageOptions = this.$store.state.coinage.coinage
  },
  mounted () {
    this.$axios.get('https://api.github.com/repos/almightynassar/almighty-rpg-manager/releases/latest')
      .then((response) => {
        this.tag = response.data.tag_name
      })
      .finally(() => {
        if (this.tag) {
          if (this.tag !== this.version) {
            this.$q.notify({
              position: 'top',
              timeout: 20000,
              color: 'negative',
              caption: 'Your version is ' + this.version + ', while the latest version is ' + this.tag + '. Please check the "About & Resources" tab for a link to the releases page.',
              icon: 'report_problem',
              message: 'Warning: Version does not match'
            })
          }
        } else {
          this.$q.notify({
            position: 'top',
            timeout: 20000,
            color: 'negative',
            caption: 'Could not get the latest version number; Is your internet on?',
            icon: 'report_problem',
            message: 'Error: Version Number'
          })
        }
      })
  }
}
</script>

<style lang="sass" scoped>
.settings-card
  width: 100%
  max-width: 250px
</style>
