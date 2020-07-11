<template>
  <div class="q-pa-md">
    <p>You can hire NPCs for a wide range of tasks. The costs presented here is the <em>minimum</em> cost of <strong>the labour only</strong> for the service rendered. Any additional material costs involved from the service will be paid by you. A working day is considered to be 8 hours (8am until 6pm, with regular breaks in between).</p>
    <p>For any service not listed, any unskilled labour will cost 20 CP / day (or 2.5 CP / hour, rounded up) while trained professionals can demand at least 100 CP / day (or 12.5 CP / hour, rounded up)</p>
    <br />
    <q-separator />
    <q-table
      title="Professionals"
      :data="service"
      :columns="columns"
      :pagination.sync="pagination"
      :filter="filter"
      row-key="name"
      flat
    >
      <template v-slot:top-right>
        <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
        <q-select
          v-model="rate"
          :options="['Daily', 'Hourly']"
          option-label="name"
          label="Rate"
          map-options
          options-dense
        />
        &nbsp;
        <q-select
          v-model="coinage"
          :options="coinageOptions"
          option-label="name"
          label="Coinage"
          map-options
          options-dense
        />
      </template>

      <template v-slot:header="props">
        <q-tr :props="props">
          <q-th
            v-for="col in props.cols"
            :key="col.name"
            :props="props"
          >
            {{ col.label }}
          </q-th>
        </q-tr>
      </template>

      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td v-for="col in props.cols" :key="col.name" :props="props">
            <template v-if="col.name == 'cost'">
                {{ determineCost(col.value / coinage.convert) }} {{ coinage.symbol }}
                <span class='float-right'>
                  <img v-if="coinage.id === 'bronze'" src='~assets/img/bronze.png' style='height: 1.5vw; max-width: 2vw' />
                  <img v-else-if="coinage.id === 'silver'" src='~assets/img/silver.png' style='height: 1.5vw; max-width: 2vw' />
                  <img v-else-if="coinage.id === 'gold'" src='~assets/img/gold.png' style='height: 1.5vw; max-width: 2vw' />
                </span>
            </template>
            <template v-else-if="col.name == 'type'">
              {{ col.value }}
              <q-tooltip anchor="bottom left" self="bottom left">{{ getTypeDescription(col.value) }}</q-tooltip>
            </template>
            <template v-else>
              {{ col.value }}
            </template>
          </q-td>
        </q-tr>
      </template>

    </q-table>
  </div>
</template>

<script>
import Lifestyles from 'src/assets/data/Lifestyle'
import Service from 'src/assets/data/services/list'
import Types from 'src/assets/data/services/types'
export default {
  name: 'Hirelings',
  data: function () {
    return {
      lifestyles: Lifestyles,
      types: Types,
      service: Service,
      coinage: '',
      coinageOptions: [],
      filter: '',
      rate: 'Daily',
      pagination: {
        page: 1,
        rowsPerPage: 0
      }
    }
  },
  computed: {
    columns () {
      return [
        { name: 'name', required: true, label: 'Name', align: 'left', field: row => row.name, format: val => `${val}`, sortable: true },
        { name: 'type', required: true, label: 'Type', align: 'left', field: row => row.type, format: val => `${val}`, sortable: true },
        { name: 'supportValue', required: true, label: 'Support Value', align: 'left', field: row => row.supportValue, format: val => `${val}`, sortable: true },
        { name: 'cost', required: true, label: this.rate + ' Rate', align: 'left', field: row => row.cost, format: val => `${val}`, sortable: true, sort: (a, b) => parseInt(a) - parseInt(b) },
        { name: 'class', required: true, label: 'Class', align: 'left', field: row => row.cost, format: val => `${this.determineClass(val).name}`, sortable: true },
        { name: 'description', required: true, label: 'Description', align: 'left', field: row => row.description, format: val => `${val}`, sortable: false }
      ]
    }
  },
  methods: {
    determineClass (income) {
      var local = this.lifestyles.find(obj => {
        return (obj.min <= income && income < obj.max) || (obj.name === 'Aristocratic' && income >= obj.max)
      })
      return local
    },
    determineCost (income) {
      var cost = this.rate === 'Daily' ? income : income / 8
      return +(Math.round(cost + 'e+2') + 'e-2')
    },
    getTypeDescription (type) {
      var local = this.types.find(obj => {
        return obj.name === type
      })
      return ('description' in local) ? local.description : ''
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
