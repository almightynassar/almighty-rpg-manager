<template>
  <div class="q-pa-md">
    <q-table
      title="Gear"
      :data="gear"
      :columns="columns"
      :pagination.sync="pagination"
      :filter="filter"
      row-key="name"
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
          <q-td v-for="col in props.cols" :key="col.name" :props="props"
          >
            <template v-if="col.name == 'cost'">
                {{ roundToTwo(col.value / coinage.convert) }} {{ coinage.symbol }} <img :src="'/statics/icons/' + coinage.id + '.png'" style="height: 1.5vw; max-width: 2vw" />
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

<script >
export default {
  name: 'GearList',
  data: function () {
    return {
      columns: [
        { name: 'name', required: true, label: 'Name', align: 'left', field: row => row.name, format: val => `${val}`, sortable: true },
        { name: 'type', required: true, label: 'Type', align: 'left', field: row => row.type, format: val => `${val}`, sortable: true },
        { name: 'weight', required: true, label: 'Weight', align: 'center', field: row => row.weight, format: val => `${val} kg`, sortable: false },
        { name: 'cost', required: true, label: 'Cost', align: 'right', field: row => row.cost, format: val => `${val}`, sortable: true }
      ],
      property: [],
      type: [],
      gear: [],
      coinage: '',
      coinageOptions: [],
      filter: '',
      pagination: {
        rowsPerPage: 25
      }
    }
  },
  methods: {
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

    // Grab our gear lists
    this.gear = this.$store.state.gear.gear
    this.type = this.$store.state.gear.type
    this.property = this.$store.state.gear.property
  }
}
</script>
