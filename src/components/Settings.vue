<template>
    <q-dialog v-model="dialog">
      <q-card>
        <q-card-section>
          <div class="text-h6">Settings</div>
        </q-card-section>
        <q-card-section class="q-pt-none">
          <q-select
            v-model="coinage"
            :options="coinageOptions"
            option-label="name"
            label="Default Coinage"
            map-options
          />
          <q-toggle v-model="darkMode" color="black" label="Dark Mode" left-label />
        </q-card-section>
        <q-card-actions align="right" class="bg-white text-teal">
          <q-btn color="primary" label="Save" icon="save" @click="saving" />
          <q-btn flat label="Close" @click="$emit('input', false)" />
        </q-card-actions>
      </q-card>
    </q-dialog>
</template>

<script>
export default {
  name: 'Settings',
  props: [
    'value'
  ],
  data: function () {
    return {
      dialog: this.value,
      coinage: '',
      coinageOptions: [],
      darkMode: false
    }
  },
  watch: {
    darkMode (newValue) {
      this.$store.dispatch('settings/updateDarkMode', newValue)
    },
    dialog (newValue) {
      this.$emit('input', newValue)
    },
    value (newValue) {
      this.dialog = newValue
    }
  },
  methods: {
    saving () {
      this.$store.dispatch('settings/updateDefaultCoinage', this.coinage.id)
      this.dialog = false
    }
  },
  created () {
    // Grab our values
    this.coinage = this.$coinage.find(this.$store.state.settings.defaultCoinage)
    this.coinageOptions = this.$coinage.coins
    this.darkMode = this.$store.state.settings.darkMode
  }
}
</script>
