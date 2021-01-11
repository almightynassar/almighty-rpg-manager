<template>
  <div class="q-pa-md">
    <p>You can hire NPCs for a wide range of tasks. The costs presented here is the <em>minimum</em> cost of <strong>the labour only</strong>. Any additional material costs involved from the service will be paid by you. A working day is considered to be 8 hours (8am until 6pm, with regular breaks in between).</p>
    <p>You can select the mastery level which will adjust the hirelings cost accordingly.</p>
    <ul>
      <li><strong>Apprentice</strong> - Someone who has basic proficiency and is working towards a deeper understanding. Generally requires some supervision.</li>
      <li><strong>Journeyman</strong> - Someone with a high degree of proficiency, and can generally make most items. They generally lack the mastery to pull off highly complex work.</li>
      <li><strong>Master</strong> - This level implies the ability to innovate, and will use their tools and knowledge in creative ways. They are able to create masterwork items.</li>
    </ul>
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
        <q-input dense debounce="300" v-model="filter" placeholder="Search">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
        <span style="width: 1em;"></span>
        <q-select
          v-model="mastery"
          :options="masteryLevels"
          label="Mastery"
          emit-value
          map-options
          dense
          options-dense
        />
        &nbsp;
        <q-select
          v-model="rate"
          :options="['Daily', 'Hourly']"
          label="Rate"
          map-options
          dense
          options-dense
        />
        &nbsp;
        <q-select
          v-model="coinage"
          :options="coinageOptions"
          option-label="name"
          label="Coinage"
          map-options
          dense
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
      },
      mastery: 'journeyman',
      masteryLevels: [
        { value: 'apprentice', label: 'Apprentice', multiplier: 0.5 },
        { value: 'journeyman', label: 'Journeyman', multiplier: 1 },
        { value: 'master', label: 'Master', multiplier: 2 }
      ]
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
    determineMastery () {
      return this.masteryLevels.find(obj => {
        return obj.value === this.mastery
      })
    },
    determineClass (income) {
      var adjusted = income * this.determineMastery().multiplier
      var local = this.lifestyles.find(obj => {
        return (obj.min <= adjusted && adjusted < obj.max) || (obj.name === 'Aristocratic' && adjusted >= obj.max)
      })
      return local
    },
    determineCost (income) {
      var cost = (this.rate === 'Daily' ? income : income / 8) * this.determineMastery().multiplier
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
    this.coinage = this.$coinage.find(this.$store.state.coinage.defaultCoinage)

    // Grab our default coinage array
    this.coinageOptions = this.$coinage.coins
  }
}
</script>
