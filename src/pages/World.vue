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
      <q-tab name="realms" icon="game-icon:portal" label="Realms" />
      <q-tab name="deities" icon="game-icon:all-seeing-eye" label="Deities" />
    </q-tabs>

    <q-separator />

    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="histories">
        <histories />
      </q-tab-panel>

      <q-tab-panel name="realms">
        <realms />
      </q-tab-panel>

      <q-tab-panel name="deities">
        <deities />
      </q-tab-panel>
    </q-tab-panels>
  </div>
</template>

<script>
import Histories from './Tabs/Histories'
import Realms from './Tabs/Realms'
import Deities from './Tabs/Deities'

export default {
  name: 'WorldSetting',
  components: {
    Histories,
    Realms,
    Deities
  },
  data: function () {
    return {
      tab: 'histories'
    }
  }
}
</script>
