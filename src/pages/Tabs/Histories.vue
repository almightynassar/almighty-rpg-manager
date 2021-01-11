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
            v-for="history in histories"
            :key="history.id"
            :name="history.id"
            :label="history.name"
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
          <q-tab-panel v-for="history in histories" :key="history.id" :name="history.id">
            <q-markdown :src="history.markdown" no-heading-anchor-links></q-markdown>
          </q-tab-panel>
        </q-tab-panels>
      </template>
    </q-splitter>
  </div>
</template>

<script >
import Histories from 'src/assets/data/setting/History'

export default {
  name: 'Histories',
  data: function () {
    return {
      histories: Histories,
      splitterModel: 20,
      tab: 'realms'
    }
  },
  mounted () {
    var param = this.$route.query.history
    if (param !== undefined && param !== null) {
      this.tab = param
    }
  }
}
</script>
