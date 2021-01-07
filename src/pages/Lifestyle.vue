<template>
  <div class="q-pa-md">
    <p>The following table shows a rough approximate of the income &amp; expenses to achieve a desired lifestyle. The expenses include lodging, food, and access to facilities.</p>
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
        <th>Income</th>
        <th>Expenses</th>
        <th>Description</th>
      </thead>
      <tbody>
        <tr v-for="lifestyle in lifestyles" :key="lifestyle.name">
          <td>{{ lifestyle.name }}</td>
          <td>{{ determineIncome(lifestyle) }} {{ coinage.symbol }}
                <span class='float-right'>
                  <img v-if="coinage.id === 'bronze'" src='~assets/img/bronze.png' style='height: 1.5vw; max-width: 2vw' />
                  <img v-else-if="coinage.id === 'silver'" src='~assets/img/silver.png' style='height: 1.5vw; max-width: 2vw' />
                  <img v-else-if="coinage.id === 'gold'" src='~assets/img/gold.png' style='height: 1.5vw; max-width: 2vw' />
                </span>
          </td>
          <td>{{ determineExpenses(lifestyle) }} {{ coinage.symbol }}
                <span class='float-right'>
                  <img v-if="coinage.id === 'bronze'" src='~assets/img/bronze.png' style='height: 1.5vw; max-width: 2vw' />
                  <img v-else-if="coinage.id === 'silver'" src='~assets/img/silver.png' style='height: 1.5vw; max-width: 2vw' />
                  <img v-else-if="coinage.id === 'gold'" src='~assets/img/gold.png' style='height: 1.5vw; max-width: 2vw' />
                </span>
          </td>
          <td>{{ lifestyle.description }}</td>
        </tr>
      </tbody>
    </q-markup-table>
  </div>
</template>

<script>
import Lifestyles from 'src/assets/data/Lifestyle'
export default {
  name: 'Lifestyle',
  data: function () {
    return {
      lifestyles: Lifestyles,
      coinage: '',
      coinageOptions: []
    }
  },
  methods: {
    determineIncome (row) {
      var min = row.min / this.coinage.convert
      var max = row.max / this.coinage.convert
      return min + ' - ' + max
    },
    determineExpenses (row) {
      var min = Math.floor((row.min / this.coinage.convert) * 0.75)
      var max = Math.floor((row.max / this.coinage.convert) * 0.75)
      return min + ' - ' + max
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
