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
            v-for="cosmology in cosmologies"
            :key="cosmology.id"
            :name="cosmology.id"
            :label="cosmology.name"
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
          <q-tab-panel v-for="cosmology in cosmologies" :key="cosmology.id" :name="cosmology.id">
            <q-markdown :src="cosmology.markdown" no-heading-anchor-links></q-markdown>
          </q-tab-panel>
        </q-tab-panels>
      </template>
    </q-splitter>
  </div>
</template>

<script >
import Cosmologies from 'src/assets/data/setting/Cosmology'

export default {
  name: 'Cosmologies',
  data: function () {
    return {
      cosmologies: Cosmologies,
      splitterModel: 20,
      tab: 'deities'
    }
  },
  mounted () {
    var param = this.$route.query.cosmology
    if (param !== undefined && param !== null) {
      this.tab = param
    }
  }
}
</script>
