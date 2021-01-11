<template>
  <div class="q-pa-md">
    <q-markdown :src="markdown" no-heading-anchor-links></q-markdown>
  </div>
</template>

<script >
import Notes from 'src/assets/md/campaign/notes.md'

export default {
  name: 'Notes',
  data: function () {
    return {
      markdown: Notes
    }
  }
}
</script>
