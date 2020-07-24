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
      tab: 'coinage',
      tabs: [
        { id: 'coinage', name: 'Coinage' },
        { id: 'music', name: 'Music' },
        { id: 'names', name: 'Name Generator' }
      ]
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
  }
}
</script>

<style lang="sass" scoped>
.settings-card
  width: 100%
  max-width: 250px
</style>
