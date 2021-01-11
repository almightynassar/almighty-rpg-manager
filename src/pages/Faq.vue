<template>
  <div class="q-pa-md">
    <q-markdown :src="markdown" no-heading-anchor-links></q-markdown>
  </div>
</template>

<script>
import Faq from 'src/assets/md/faq.md'

export default {
  name: 'FAQ',
  data: function () {
    return {
      markdown: Faq
    }
  }
}
</script>
