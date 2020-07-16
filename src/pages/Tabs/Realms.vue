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
            v-for="realm in realms"
            :key="realm.id"
            :name="realm.id"
            :label="realm.name"
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
          <q-tab-panel v-for="realm in realms" :key="realm.id" :name="realm.id">
            <div class="text-h4 q-mb-md text-primary">{{ realm.name }}</div>
            <div v-for="(p,i) in realm.paragraphs" :key="'p-' + i">
              <p>{{ p }}</p>
            </div>
          </q-tab-panel>
        </q-tab-panels>
      </template>
    </q-splitter>
  </div>
</template>

<script >
import Realms from 'src/assets/data/setting/Realms'

export default {
  name: 'Realms',
  data: function () {
    return {
      realms: Realms,
      splitterModel: 20,
      tab: 'intro'
    }
  },
  mounted () {
    var param = this.$route.query.realm
    if (param !== undefined && param !== null) {
      this.tab = param
    }
  }
}
</script>
