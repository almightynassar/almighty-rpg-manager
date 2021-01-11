<template>
  <div class="q-pa-md">
    <q-markdown :src="markdown" no-heading-anchor-links></q-markdown>
  </div>
</template>

<script >
import Intro from 'src/assets/md/intro.md'

export default {
  name: 'Home',
  data: function () {
    return {
      markdown: Intro
    }
  }
}
</script>
