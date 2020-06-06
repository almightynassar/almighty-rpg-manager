<template>
  <div class="q-pa-md">
    <p>You can hire NPCs for a wide range of tasks. The costs presented here is the <em>minimum</em> cost of <strong>the labour only</strong> for the service rendered. Any additional material costs involved from the service will be paid by you. A working day is considered to be 8 hours (8am until 6pm, with regular breaks in between).</p>
    <p>For any service not listed, any unskilled labour will cost 20 CP / day (or 2.5 CP / hour, rounded up) while trained professionals can demand at least 100 CP / day (or 12.5 CP / hour, rounded up)</p>
    <br />
    <q-separator />
    <q-table
      title="Hirelings"
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
          <q-th auto-width />
        </q-tr>
      </template>

      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td v-for="col in props.cols" :key="col.name" :props="props">
            <template v-if="col.name == 'cost' || col.name == 'hourly'">
                {{ roundToTwo(col.value / coinage.convert) }} {{ coinage.symbol }}
                <img v-if="coinage.id === 'bronze'" src='~assets/img/bronze.png' style='height: 1.5vw; max-width: 2vw' />
                <img v-else-if="coinage.id === 'silver'" src='~assets/img/silver.png' style='height: 1.5vw; max-width: 2vw' />
                <img v-else-if="coinage.id === 'gold'" src='~assets/img/gold.png' style='height: 1.5vw; max-width: 2vw' />
            </template>
            <template v-else-if="col.name == 'type'">
              {{ col.value }}
              <q-tooltip anchor="bottom left" self="bottom left">{{ getTypeDescription(col.value) }}</q-tooltip>
            </template>
            <template v-else>
              {{ col.value }}
            </template>
          </q-td>
          <q-td auto-width>
            <q-btn size="sm" round dense @click="props.expand = !props.expand" :icon="props.expand ? 'keyboard_arrow_down' : 'keyboard_arrow_right'" />
          </q-td>
        </q-tr>

        <q-tr v-show="props.expand" :props="props">
          <q-td colspan="100%">
            <div class="text-left text-primary table-row-wrap">{{ props.row.description }}</div>
          </q-td>
        </q-tr>
      </template>

    </q-table>
  </div>
</template>

<script>
import Service from 'src/assets/data/services/list'
export default {
  name: 'Hirelings',
  data: function () {
    return {
      columns: [
        { name: 'name', required: true, label: 'Name', align: 'left', field: row => row.name, format: val => `${val}`, sortable: true },
        { name: 'type', required: true, label: 'Type', align: 'left', field: row => row.type, format: val => `${val}`, sortable: true },
        { name: 'cost', required: true, label: 'Min. Cost / Day', align: 'right', field: row => row.cost, format: val => `${val}`, sortable: true },
        { name: 'hourly', required: true, label: 'Hourly Rate', align: 'right', field: row => row.cost, format: val => `${this.determineHourly(val)}`, sortable: true },
        { name: 'class', required: true, label: 'Class', align: 'right', field: row => row.cost, format: val => `${this.determineClass(val)}`, sortable: true }
      ],
      type: [],
      service: Service,
      coinage: '',
      coinageOptions: [],
      filter: '',
      pagination: {
        page: 1,
        rowsPerPage: 0
      }
    }
  },
  methods: {
    determineClass (income) {
      if (income >= 1000) {
        return 'Aristocratic'
      } else if (income >= 400) {
        return 'Wealthy'
      } else if (income >= 200) {
        return 'Upper Middle Class'
      } else if (income >= 100) {
        return 'Middle Class'
      } else if (income >= 60) {
        return 'Working Class'
      } else if (income >= 20) {
        return 'Poor'
      }
      return 'Squalid'
    },
    determineHourly (income) {
      return income / 8
    },
    getTypeDescription (type) {
      var local = this.type.find(obj => {
        return obj.name === type
      })
      return ('description' in local) ? local.description : ''
    },
    roundToTwo (num) {
      return +(Math.round(num + 'e+2') + 'e-2')
    }
  },
  created () {
    // Set our default coinage to what is set in our store
    this.coinage = this.$store.getters['coinage/getCoinageByID'](this.$store.state.coinage.defaultCoinage)

    // Grab our default coinage array
    this.coinageOptions = this.$store.state.coinage.coinage

    // Grab our service lists
    this.type = this.$store.state.service.type
  }
}
</script>
