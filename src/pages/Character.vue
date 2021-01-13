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
      <q-tab name="languages" icon="game-icon:talk" label="Languages" />
    </q-tabs>

    <q-separator />

    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="languages">
        <languages />
      </q-tab-panel>
    </q-tab-panels>
  </div>
</template>

<script>
import Languages from './Tabs/Languages'

export default {
  name: 'Character',
  components: {
    Languages
  },
  data: function () {
    return {
      tab: 'languages'
    }
  }
}
</script>
