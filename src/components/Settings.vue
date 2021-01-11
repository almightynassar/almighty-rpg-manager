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
      coinageOptions: []
    }
  },
  watch: {
    dialog (newValue) {
      this.$emit('input', newValue)
    },
    value (newValue) {
      this.dialog = newValue
    }
  },
  methods: {
    saving () {
      this.$store.dispatch('coinage/updateDefaultCoinage', this.coinage.id)
      this.dialog = false
    }
  },
  created () {
    // Set our default coinage to what is set in our store
    this.coinage = this.$coinage.find(this.$store.state.coinage.defaultCoinage)

    // Grab our default coinage array
    this.coinageOptions = this.$coinage.coins
  }
}
</script>
