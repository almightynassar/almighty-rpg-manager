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
      <q-tab name="realms" icon="game-icon:portal" label="Realms" />
      <q-tab name="service" icon="game-icon:all-seeing-eye" label="Deities" />
    </q-tabs>

    <q-separator />

    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="realms">
        <realms />
      </q-tab-panel>

      <q-tab-panel name="service">
        <deities />
      </q-tab-panel>
    </q-tab-panels>
  </div>
</template>

<script>
import Realms from './Tabs/Realms'
import Deities from './Tabs/Deities'

export default {
  name: 'WorldSetting',
  components: {
    Realms,
    Deities
  },
  data: function () {
    return {
      tab: 'realms'
    }
  }
}
</script>
