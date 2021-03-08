<template>
  <div class="q-pa-md">
    <q-markdown :src="markdown" no-heading-anchor-links></q-markdown>
  </div>
</template>

<script >
import Inventory from 'src/assets/md/campaign/inventory.md'

export default {
  name: 'Inventory',
  data: function () {
    return {
      markdown: Inventory
    }
  }
}
</script>
