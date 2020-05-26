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
      <q-tab name="races" icon="group" label="Races" />
      <q-tab name="languages" icon="text_fields" label="Languages" />
    </q-tabs>

    <q-separator />

    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="races">
        <races />
      </q-tab-panel>

      <q-tab-panel name="languages">
        <languages />
      </q-tab-panel>
    </q-tab-panels>
  </div>
</template>

<script>
import Languages from './Tabs/Languages'
import Races from './Tabs/Races'

export default {
  name: 'Character',
  components: {
    Languages,
    Races
  },
  data: function () {
    return {
      tab: 'races'
    }
  }
}
</script>
