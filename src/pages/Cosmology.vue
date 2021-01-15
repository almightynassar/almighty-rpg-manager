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
      />
    </q-tabs>

    <q-tab-panels
      v-model="tab"
      animated
      swipeable
      vertical
      transition-prev="jump-up"
      transition-next="jump-up"
    >
      <q-tab-panel v-for="t in tabs" :key="t.id" :name="t.id">
        <q-markdown :src="markdown[t.id]" no-heading-anchor-links></q-markdown>
      </q-tab-panel>
    </q-tab-panels>
  </div>
</template>

<script >
import Deities from 'src/assets/md/cosmology/deities.md'
import Magic from 'src/assets/md/cosmology/magic.md'
import Realms from 'src/assets/md/cosmology/realms.md'

export default {
  name: 'Cosmologies',
  data: function () {
    return {
      markdown: {
        deities: Deities,
        magic: Magic,
        realms: Realms
      },
      tabs: [
        {
          id: 'deities',
          name: 'Deities',
          icon: 'game-icon:angel-wings'
        },
        {
          id: 'magic',
          name: 'Magic',
          icon: 'game-icon:magic-swirl'
        },
        {
          id: 'realms',
          name: 'Realms',
          icon: 'game-icon:magic-portal'
        }
      ],
      tab: 'deities'
    }
  },
  beforeRouteUpdate (to, from, next) {
    this.tab = to.params.id
    next()
  },
  mounted () {
    this.tab = this.$router.currentRoute.params.id
  }
}
</script>
