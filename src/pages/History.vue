<template>
  <div class="q-pa-md">
    <q-timeline color="primary">
      <q-timeline-entry heading body="Terrea History" />

      <div class="q-mb-md">
        <p>Time in Terrea is organised based around the Sundering event, when the Gauld retreated into the Shadowrealm. This divides the timeline into two distinct parts:</p>

        <ul>
          <li><strong>B.S:</strong> Stands for "Before Sundering"</li>
          <li><strong>A.S:</strong> Stands for "After Sundering"</li>
        </ul>
      </div>

      <q-timeline-entry
        v-for="h in history"
        :key="h.id"
        :title="h.name"
        :subtitle="h.date"
      >
        <q-markdown :src="h.markdown" no-heading-anchor-links />
      </q-timeline-entry>
    </q-timeline>
  </div>
</template>

<script >
import History from 'src/assets/data/setting/History'

export default {
  name: 'History',
  data: function () {
    return {
      history: History
    }
  }
}
</script>
