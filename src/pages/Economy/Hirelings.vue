<template>
  <div class="q-pa-md">
    <ul>
      <li>Costs are the <em>minimum</em> cost of <strong>the labour only</strong>. You must cover all additional costs (such as material, protection, etc).</li>
      <li>A working day is considered to be 8 hours (8am until 6pm, with regular breaks in between).</li>
      <li>5 out of 7 days are designated for work. Add 50% to the cost if you want the hireling to work on their days off.</li>
    </ul>
    <q-separator />
    <q-select
      v-model="mastery"
      :options="masteryLevels"
      label="Mastery"
      emit-value
      map-options
      dense
      options-dense
      class="q-pb-md"
    />
    <q-select
      v-model="rate"
      :options="['Daily', 'Hourly']"
      label="Rate"
      map-options
      dense
      options-dense
      class="q-pb-md"
    />
    <q-select
      v-model="coinage"
      :options="coinageOptions"
      option-label="name"
      label="Coinage"
      map-options
      dense
      options-dense
    />
    <q-input dense debounce="300" v-model="filter" placeholder="Search">
      <template v-slot:append>
        <q-icon name="search" />
      </template>
    </q-input>
    <div class="q-pa-md">
      <p v-if="mastery === 'apprentice'"><strong>Apprentices</strong> have a basic proficiency. They generally require supervision.</p>
      <p v-else-if="mastery === 'journeyman'"><strong>Journeymen</strong> have a high degree of proficiency, and can generally complete most tasks. But they generally lack the mastery to pull off highly complex work.</p>
      <p v-else><strong>Masters</strong> have an intimate level of knowledge in their field, and are able to innovate. They are able to create masterwork items.</p>
    </div>

    <q-list bordered separator>
      <q-item v-for="s in filteredSearch" :key="s.id">
        <q-item-section>
          <q-item-label><span class="text-weight-medium">{{ s.name }}</span> ({{ s.type }})</q-item-label>
          <q-item-label><small>{{ s.description }}</small></q-item-label>
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ determineClass(s.cost).name}}</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-item-label>{{ determineCost(s.cost / coinage.convert) }} {{ coinage.symbol }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
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
    },
    filteredSearch () {
      let temp = this.service
      if (this.filter) {
        temp = this.service.filter(e => (e.name.toLowerCase().search(this.filter.toLowerCase()) > -1) || (e.type.toLowerCase().search(this.filter.toLowerCase()) > -1))
      }
      return temp
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
      return this.lifestyles.find(obj => {
        return (obj.min <= adjusted && adjusted < obj.max) || (obj.name === 'Aristocratic' && adjusted >= obj.max)
      })
    },
    determineCost (income) {
      var cost = (this.rate === 'Daily' ? income : income / 8) * this.determineMastery().multiplier
      return (+(Math.round(cost + 'e+2') + 'e-2')).toLocaleString()
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
    this.coinage = this.$coinage.find(this.$store.state.settings.defaultCoinage)

    // Grab our default coinage array
    this.coinageOptions = this.$coinage.coins
  }
}
</script>
