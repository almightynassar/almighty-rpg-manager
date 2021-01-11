<template>
  <div class="q-pa-md">
    <q-select
      v-model="coinage"
      :options="coinageOptions"
      option-label="name"
      label="Coinage"
      map-options
      options-dense
    />
    <br />
    <q-markup-table flat wrap-cells>
      <thead>
        <th>Name</th>
        <th>Cost</th>
        <th>Description</th>
      </thead>
      <tbody>
        <tr v-for="heal in healing" :key="heal.name">
          <td>{{ heal.name }}</td>
          <td>{{ heal.cost / coinage.convert }} {{ coinage.symbol }}</td>
          <td>{{ heal.description }}</td>
        </tr>
      </tbody>
    </q-markup-table>
  </div>
</template>

<script>
import Healing from 'src/assets/data/Healing'
export default {
  name: 'Healing',
  data: function () {
    return {
      healing: Healing,
      coinage: '',
      coinageOptions: []
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
