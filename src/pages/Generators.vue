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
      <q-tab
        v-for="t in tabs"
        :key="t.id"
        :name="t.id"
        :label="t.name"
        :icon="t.icon"
        style="justify-content:initial"
      />
    </q-tabs>

    <q-separator />

    <q-tab-panels v-model="tab" animated>
      <q-tab-panel key="names" name="names">
        <name-generator></name-generator>
      </q-tab-panel>
      <q-tab-panel key="words" name="words">
        <word-generator></word-generator>
      </q-tab-panel>
    </q-tab-panels>
  </div>
</template>

<script >
import NameGenerator from 'src/pages/Generators/NameGenerator.vue'
import WordGenerator from 'src/pages/Generators/WordGenerator.vue'

export default {
  name: 'Generators',
  components: {
    NameGenerator,
    WordGenerator
  },
  data: function () {
    return {
      splitterModel: 20,
      tab: 'names',
      tabs: [
        { id: 'names', name: 'Names', icon: 'game-icon:family-tree' },
        { id: 'words', name: 'Words', icon: 'game-icon:rolling-dices' }
      ]
    }
  }
}
</script>
