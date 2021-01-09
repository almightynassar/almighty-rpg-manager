<template>
  <div class="q-pa-md">
    <q-markdown :src="markdown"></q-markdown>
  </div>
</template>

<script >
import People from 'src/assets/md/campaign/people.md'

export default {
  name: 'People',
  data: function () {
    return {
      markdown: People
    }
  }
}
</script>
