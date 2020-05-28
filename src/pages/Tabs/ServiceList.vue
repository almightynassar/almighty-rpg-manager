<template>
  <div class="q-pa-md">
    <p>You can hire NPCs for a wide range of tasks. The costs presented here is the <em>minimum</em> cost of <strong>the labour only</strong> for the service rendered. Any additional material costs involved from the service will be paid by you. A working day is considered to be 8 hours (8am until 6pm, with regular breaks in between).</p>
    <p>For any service not listed, any unskilled labour will cost 20 CP / day (or 2.5 CP / hour, rounded up) while trained professionals can demand at least 100 CP / day (or 12.5 CP / hour, rounded up)</p>
    <p>The class table provided should give a better understanding of the lifestyle of each service provider (if an adventurer wishes to life at the class describes, they will pay the listed income as a cost).</p>
    <q-markup-table flat wrap-cells>
      <thead>
        <th>Class</th>
        <th>Income / day</th>
        <th>Description</th>
      </thead>
      <tbody>
        <tr>
          <td>Squalid</td>
          <td>10 CP</td>
          <td>People in this class have shelter from the elements, but live in a desperate and stressful environment. They often find themselves going hungry.</td>
        </tr>
        <tr>
          <td>Poor</td>
          <td>20 CP</td>
          <td>This class has access to simple lodgings and food, and do without some comforts.</td>
        </tr>
        <tr>
          <td>Middle class</td>
          <td>100 CP</td>
          <td>People in this class have access to decent accomodation and food, can maintain expensive equipment, and still save enough for a modest retirement.</td>
        </tr>
        <tr>
          <td>Upper Middle class</td>
          <td>200 CP</td>
          <td>This class bridges the average citizen and the weathly. They have enough disposable income to spend on and maintain a few luxuries.</td>
        </tr>
        <tr>
          <td>Wealthy</td>
          <td>400 CP</td>
          <td>This class has enough wealth that they can hire servants to do chores for them, and begin to purchase power in other forms.</td>
        </tr>
        <tr>
          <td>Aristocratic</td>
          <td>1000 CP (min.)</td>
          <td>This class generally do not experience hardship of any kind, and generally consists of the most powerful people in society.</td>
        </tr>
      </tbody>
    </q-markup-table>
    <br />
    <q-separator />
    <q-table
      title="Service List"
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
  name: 'ServiceList',
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
