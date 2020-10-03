<template>
  <div class="q-pa-md">
    <q-tabs
      v-model="tab"
      dense
      class="text-grey"
      active-color="primary"
      indicator-color="primary"
      align="justify"
      narrow-indicator
    >
      <q-tab name="histories" icon="game-icon:newspaper" label="History" />
      <q-tab name="cosmology" icon="game-icon:portal" label="Cosmology" />
      <q-tab name="ecology" icon="game-icon:tree-branch" label="Ecology" />
      <q-tab name="nations" icon="game-icon:tattered-banner" label="Nations" />
      <q-tab name="map" icon="game-icon:treasure-map" label="Maps" />

    </q-tabs>

    <q-separator />

    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="histories">
        <histories />
      </q-tab-panel>

      <q-tab-panel name="cosmology">
        <cosmology />
      </q-tab-panel>

      <q-tab-panel name="ecology">
        <ecology />
      </q-tab-panel>

      <q-tab-panel name="nations">
        <nations />
      </q-tab-panel>

      <q-tab-panel name="map">
        <world-map />
      </q-tab-panel>
    </q-tab-panels>
  </div>
</template>

<script>
import Cosmology from './Tabs/Cosmology'
import Ecology from './Tabs/Ecology'
import Histories from './Tabs/Histories'
import Nations from './Tabs/Nations'
import WorldMap from './Tabs/Map'

export default {
  name: 'WorldSetting',
  components: {
    Cosmology,
    Ecology,
    Histories,
    Nations,
    WorldMap
  },
  data: function () {
    return {
      tab: 'histories'
    }
  },
  mounted () {
    var param = this.$route.query.world
    if (param !== undefined && param !== null) {
      this.tab = param
    }
  }
}
</script>
