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
            v-for="ecology in ecologies"
            :key="ecology.id"
            :name="ecology.id"
            :label="ecology.name"
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
          <q-tab-panel v-for="ecology in ecologies" :key="ecology.id" :name="ecology.id">
            <q-markdown :src="ecology.markdown"></q-markdown>
          </q-tab-panel>
        </q-tab-panels>
      </template>
    </q-splitter>
  </div>
</template>

<script >
import Ecologies from 'src/assets/data/setting/Ecology'

export default {
  name: 'Ecologies',
  data: function () {
    return {
      ecologies: Ecologies,
      splitterModel: 20,
      tab: 'animals'
    }
  },
  mounted () {
    var param = this.$route.query.ecology
    if (param !== undefined && param !== null) {
      this.tab = param
    }
  }
}
</script>
