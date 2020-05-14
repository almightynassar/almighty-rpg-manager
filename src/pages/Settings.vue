<template>
  <div class="q-pa-md">
    <q-select
        v-model="coinage"
        :options="coinageOptions"
        option-label="name"
        label="Default Coinage"
        map-options
        options-dense
    />
    <q-separator spaced />
    <q-btn color="primary" label="Save" icon="save" @click="saving" />
  </div>
</template>

<script >
export default {
  name: 'Settings',
  data: function () {
    return {
      coinage: '',
      coinageOptions: []
    }
  },
  methods: {
    saving () {
      this.$store.dispatch('coinage/updateDefaultCoinage', this.coinage.id)
    }
  },
  created () {
    // Set our default coinage to what is set in our store
    this.coinage = this.$store.getters['coinage/getCoinageByID'](this.$store.state.coinage.defaultCoinage)

    // Grab our default coinage array
    this.coinageOptions = this.$store.state.coinage.coinage
  }
}
</script>
