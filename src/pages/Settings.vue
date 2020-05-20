<template>
  <div class="q-pa-md">
    <div class="q-pa-md row items-start q-gutter-md">
      <q-card class="settings-card" flat bordered>
        <q-card-section horizontal>
          <q-card-section>
            <p class="text-primary"><strong>Gear</strong></p>
            <q-select
              v-model="coinage"
              :options="coinageOptions"
              option-label="name"
              label="Default Coinage"
              map-options
            />
            <q-separator spaced />
            <q-btn color="primary" label="Save" icon="save" @click="saving" />
          </q-card-section>
        </q-card-section>
      </q-card>

      <q-card class="settings-card" flat bordered>
        <q-card-section horizontal>
          <q-card-section>
            <p class="text-primary"><strong>Fonts</strong></p>
            <q-input v-model="example" label="Example Text" />
            <q-input v-model="size" type="number" label="Font Size (px)" />
            <q-select
              v-model="selected"
              :options="fonts"
              option-value="id"
              option-label="name"
              label="Font"
              map-options
              emit-value
            />
            <q-separator spaced />
            <span :class="selected" :style="'font-size: ' + size + 'px'">{{ example }}</span>
          </q-card-section>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script >
import Fonts from 'src/assets/data/Fonts'

export default {
  name: 'Settings',
  data: function () {
    return {
      coinage: '',
      coinageOptions: [],
      example: 'This is an example text',
      fonts: Fonts,
      selected: 'barazhad',
      size: 14
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

<style lang="sass" scoped>
.settings-card
  width: 100%
  max-width: 250px
</style>
