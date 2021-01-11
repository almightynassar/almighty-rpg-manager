<template>
  <div class="q-pa-md">
    <q-markdown :src="markdown" no-heading-anchor-links></q-markdown>
  </div>
</template>

<script>
import Resources from 'src/assets/md/resources.md'

export default {
  name: 'Resources',
  data: function () {
    return {
      markdown: Resources
    }
  }
}
</script>
