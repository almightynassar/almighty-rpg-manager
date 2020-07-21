<template>
  <div class="q-pa-md">
    <q-tabs
      v-model="tab"
      dense
      class="text-grey"
      active-color="primary"
      indicator-color="primary"
      align="justify"
      narrow-indicator
    >
      <q-tab name="lifestyle" label="Lifestyle" />
      <q-tab name="healing" label="healing" />
    </q-tabs>

    <q-separator />

    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="lifestyle">
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
      </q-tab-panel>

      <q-tab-panel name="healing">
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
              <td>{{ heal.cost / coinage.convert }} {{ coinage.symbol }}
                    <span class='float-right'>
                      <img v-if="coinage.id === 'bronze'" src='~assets/img/bronze.png' style='height: 1.5vw; max-width: 2vw' />
                      <img v-else-if="coinage.id === 'silver'" src='~assets/img/silver.png' style='height: 1.5vw; max-width: 2vw' />
                      <img v-else-if="coinage.id === 'gold'" src='~assets/img/gold.png' style='height: 1.5vw; max-width: 2vw' />
                    </span>
              </td>
              <td>{{ heal.description }}</td>
            </tr>
          </tbody>
        </q-markup-table>
      </q-tab-panel>
    </q-tab-panels>
  </div>
</template>

<script>
import Healing from 'src/assets/data/Healing'
import Lifestyles from 'src/assets/data/Lifestyle'
export default {
  name: 'ServiceList',
  data: function () {
    return {
      healing: Healing,
      lifestyles: Lifestyles,
      tab: 'lifestyle',
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
  },
  mounted () {
    var param = this.$route.query.service
    if (param !== undefined && param !== null) {
      this.tab = param
    }
  }
}
</script>
