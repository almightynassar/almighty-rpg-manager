<template>
  <div class="q-pa-md">
    <q-markdown v-if="page === 'animals'" :src="markdown.animals" no-heading-anchor-links />
    <q-markdown v-else-if="page === 'plants'" :src="markdown.plants" no-heading-anchor-links />
    <q-markdown v-else-if="page === 'regions'" :src="markdown.regions" no-heading-anchor-links />
    <div v-else>
        <q-banner inline-actions class="text-white bg-red">Page could not be found</q-banner>
    </div>
  </div>
</template>

<script >
import Animals from 'src/assets/md/ecology/animals.md'
import Plants from 'src/assets/md/ecology/plants.md'
import Regions from 'src/assets/md/ecology/regions.md'

export default {
  name: 'Ecology',
  data: function () {
    return {
      markdown: {
        animals: Animals,
        plants: Plants,
        regions: Regions
      },
      page: 'animals'
    }
  },
  beforeRouteUpdate (to, from, next) {
    this.page = to.params.id
    next()
  },
  mounted () {
    this.page = this.$router.currentRoute.params.id
  }
}
</script>
