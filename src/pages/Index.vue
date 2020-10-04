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
      <q-tab name="home" icon="home" label="Home" />
      <q-tab name="settings" icon="settings" label="Settings &amp; Tools" />
    </q-tabs>

    <q-separator />

    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="home">
        <intro></intro>
      </q-tab-panel>
      <q-tab-panel name="settings">
        <settings></settings>
      </q-tab-panel>
    </q-tab-panels>
  </div>
</template>

<script>
import Intro from './Tabs/Intro'
import Settings from './Settings'

export default {
  name: 'PageIndex',
  components: {
    Intro,
    Settings
  },
  data: function () {
    return {
      tab: 'home'
    }
  }
}
</script>
