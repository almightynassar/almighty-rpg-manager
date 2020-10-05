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
            v-for="home in home"
            :key="home.id"
            :name="home.id"
            :label="home.name"
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
          <q-tab-panel v-for="home in home" :key="home.id" :name="home.id">
            <q-markdown :src="home.markdown"></q-markdown>
          </q-tab-panel>
        </q-tab-panels>
      </template>
    </q-splitter>
  </div>
</template>

<script >
import Home from 'src/assets/data/Home'

export default {
  name: 'Home',
  data: function () {
    return {
      home: Home,
      splitterModel: 20,
      tab: 'intro'
    }
  },
  mounted () {
    var param = this.$route.query.home
    if (param !== undefined && param !== null) {
      this.tab = param
    }
  }
}
</script>
