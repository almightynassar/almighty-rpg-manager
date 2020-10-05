<template>
  <div class="q-pa-md">
    <q-splitter v-model="splitterModel">
      <template v-slot:before>
        <q-tabs
          v-model="tab"
          align="left"
          vertical
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
        >
          <q-tab
            v-for="t in tabs"
            :key="t.id"
            :name="t.id"
            :label="t.name"
            style="justify-content:initial"
          />
        </q-tabs>
      </template>

      <template v-slot:after>
        <q-tab-panels
          v-model="tab"
          animated
          swipeable
          vertical
          transition-prev="jump-up"
          transition-next="jump-up"
        >
          <q-tab-panel key="people" name="people">
            <q-markdown :src="markdown.people"></q-markdown>
          </q-tab-panel>
          <q-tab-panel key="session" name="session">
            <q-markdown :src="markdown.sessions"></q-markdown>
          </q-tab-panel>
        </q-tab-panels>
      </template>
    </q-splitter>
  </div>
</template>

<script >
import People from 'src/assets/md/campaign/people.md'
import Sessions from 'src/assets/md/campaign/sessions.md'

export default {
  name: 'Sampaign',
  data: function () {
    return {
      splitterModel: 20,
      tab: 'people',
      tabs: [
        { id: 'people', name: 'Dramatis Personae' },
        { id: 'session', name: 'Sessions' }
      ],
      markdown: {
        people: People,
        sessions: Sessions
      }
    }
  }
}
</script>
