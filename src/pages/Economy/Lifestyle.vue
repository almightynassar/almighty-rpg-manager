<template>
  <div class="q-pa-md">
    <p>The following table shows a rough approximate of the income &amp; expenses to achieve a desired lifestyle. The expenses include lodging, food, and access to facilities.</p>
    <q-markup-table flat wrap-cells>
      <thead>
        <th>Name</th>
        <th>Daily Income</th>
        <th>Daily Expenses</th>
        <th>Yearly Salary</th>
        <th>Yearly Expenses</th>
      </thead>
      <tbody>
        <template v-for="lifestyle in lifestyles">
          <tr :key="lifestyle.name">
            <td>{{ lifestyle.name }}</td>
            <td>{{ determineIncome(lifestyle) }} {{ coinage.symbol }}</td>
            <td>{{ determineExpenses(lifestyle) }} {{ coinage.symbol }}</td>
            <td>{{ determineSalary(lifestyle) }} {{ coinage.symbol }}</td>
            <td>{{ determineYearExpenses(lifestyle) }} {{ coinage.symbol }}</td>
          </tr>
          <tr :key="lifestyle.name + 'description'">
            <td colspan="5">{{ lifestyle.description }}</td>
          </tr>
        </template>
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
    },
    determineSalary (row) {
      return (Math.ceil(((row.min + row.max) / 2) * 5 * 52) / this.coinage.convert).toLocaleString()
    },
    determineYearExpenses (row) {
      var min = Math.floor((row.min / this.coinage.convert) * 0.75)
      var max = Math.floor((row.max / this.coinage.convert) * 0.75)
      return (Math.ceil(((min + max) / 2) * 5 * 52) / this.coinage.convert).toLocaleString()
    }
  },
  created () {
    // Grab our default coinage array
    this.coinageOptions = this.$coinage.coins
    // Set our default coinage to what is set in our store
    this.coinage = this.$coinage.find(this.$store.state.settings.defaultCoinage)
  }
}
</script>
