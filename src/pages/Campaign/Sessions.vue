<template>
  <div class="q-pa-md">
    <q-markdown :src="markdown" no-heading-anchor-links></q-markdown>
  </div>
</template>

<script >
import Sessions from 'src/assets/md/campaign/sessions.md'

export default {
  name: 'Sessions',
  data: function () {
    return {
      markdown: Sessions
    }
  }
}
</script>
