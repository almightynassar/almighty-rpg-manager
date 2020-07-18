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
      <q-tab name="gear" icon="game-icon:battle-gear" label="Gear" />
      <q-tab name="hirelings" icon="game-icon:guards" label="Hirelings" />
      <q-tab name="service" icon="game-icon:anvil-impact" label="Services" />
    </q-tabs>

    <q-separator />

    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="gear">
        <gear-list />
      </q-tab-panel>

      <q-tab-panel name="hirelings">
        <hirelings />
      </q-tab-panel>

      <q-tab-panel name="service">
        <service-list />
      </q-tab-panel>
    </q-tab-panels>
  </div>
</template>

<script>
import GearList from './Tabs/GearList'
import Hirelings from './Tabs/Hirelings'
import ServiceList from './Tabs/ServiceList'

export default {
  name: 'Shopping',
  components: {
    GearList,
    Hirelings,
    ServiceList
  },
  data: function () {
    return {
      tab: 'gear'
    }
  },
  mounted () {
    var param = this.$route.query.shopping
    if (param !== undefined && param !== null) {
      this.tab = param
    }
  }
}
</script>
