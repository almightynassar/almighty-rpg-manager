<template>
  <div class="q-pa-md">
    <p>The following table shows a rough approximate of the income &amp; expenses to achieve a desired lifestyle. The expenses include lodging, food, and access to facilities.</p>

    <q-list bordered separator>
      <q-item v-for="lifestyle in lifestyles" :key="lifestyle.name">
        <q-item-section>
          <q-item-label><span class="text-weight-medium">{{ lifestyle.name }}</span></q-item-label>
          <q-item-label><small>{{ lifestyle.description }}</small></q-item-label>
        </q-item-section>
        <q-item-section>
          <q-item-label><strong>Daily</strong></q-item-label>
          <q-item-label><u>Income:</u> {{ determineIncome(lifestyle) }} {{ coinage.symbol }}</q-item-label>
          <q-item-label><u>Expenses:</u> {{ determineExpenses(lifestyle) }} {{ coinage.symbol }}</q-item-label>
        </q-item-section>
        <q-item-section>
          <q-item-label><strong>Yearly</strong></q-item-label>
          <q-item-label><u>Income:</u> {{ determineSalary(lifestyle) }} {{ coinage.symbol }}</q-item-label>
          <q-item-label><u>Expenses:</u> {{ determineYearExpenses(lifestyle) }} {{ coinage.symbol }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
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
      return min.toLocaleString() + ' - ' + max.toLocaleString()
    },
    determineExpenses (row) {
      var min = Math.floor((row.min / this.coinage.convert) * 0.75)
      var max = Math.floor((row.max / this.coinage.convert) * 0.75)
      return min.toLocaleString() + ' - ' + max.toLocaleString()
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
