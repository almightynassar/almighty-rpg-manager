<template>
  <div class="q-pa-md">
    <q-list bordered separator>
      <q-item v-for="heal in healing" :key="heal.name">
        <q-item-section>
          <q-item-label><span class="text-weight-medium">{{ heal.name }}</span></q-item-label>
          <q-item-label><small>{{ heal.description }}</small></q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-item-label>{{ heal.cost / coinage.convert }} {{ coinage.symbol }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script>
import Healing from 'src/assets/data/Healing'
export default {
  name: 'Healing',
  data: function () {
    return {
      healing: Healing,
      coinage: ''
    }
  },
  created () {
    // Set our default coinage to what is set in our store
    this.coinage = this.$coinage.find(this.$store.state.settings.defaultCoinage)
  }
}
</script>
