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
            v-for="deity in deities"
            :key="deity.id"
            :name="deity.id"
            :label="deity.name"
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
          <q-tab-panel v-for="deity in deities" :key="deity.id" :name="deity.id">
            <div class="text-h4 q-mb-md text-primary">{{ deity.name }}</div>
            <div v-for="(p,i) in deity.paragraphs" :key="'p-' + i">
              <p>{{ p }}</p>
            </div>
            <div v-if="deity.domains">
              <ul>
                <li v-for="(d,i) in deity.domains" :key="'d-' + i">{{ d }}</li>
              </ul>
            </div>
          </q-tab-panel>
        </q-tab-panels>
      </template>
    </q-splitter>
  </div>
</template>

<script >
import Deities from 'src/assets/data/setting/Deities'

export default {
  name: 'Deities',
  data: function () {
    return {
      deities: Deities,
      splitterModel: 20,
      tab: 'intro'
    }
  }
}
</script>
