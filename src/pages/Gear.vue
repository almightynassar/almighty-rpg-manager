<template>
  <div class="q-pa-md">
    <q-table
      title="Equipment List"
      :data="gear"
      :columns="columns"
      :pagination.sync="pagination"
      :filter="filter"
      row-key="name"
      flat
      grid
      hide-header
    >

      <template v-slot:top-right>
        <q-input dense debounce="300" v-model="filter" placeholder="Search">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
        <span style="width: 1em;"></span>
        <q-select
          v-model="coinage"
          :options="coinageOptions"
          option-label="name"
          label="Coinage"
          map-options
          options-dense
          dense
        />
      </template>

      <template v-slot:item="props">
        <div class="q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3">
          <q-card>
            <q-card-section @click="showItemDialog(props.row)">
              <div class="text-overline">
                <strong>{{ props.row.name }}</strong>
                <span class="float-right">
                  <q-icon font-size="2em" color="primary" :name="getTypeIcon(props.row.type)" />
                  <q-tooltip anchor="bottom right" self="bottom right">{{ getTypeDescription(props.row.type) }}</q-tooltip>
                </span>
              </div>
              <div>
                <small>
                  <span>{{ roundToTwo(props.row.cost / coinage.convert) }} {{ coinage.symbol }}, {{ props.row.weight }} kg</span>
                  <span class="float-right">{{ props.row.type }}</span>
                </small>
              </div>
            </q-card-section>
            <q-separator />
          </q-card>
        </div>
      </template>
    </q-table>
    <q-dialog v-model="dialog">
      <q-card>
        <q-card-section v-if="item">
          <div class="text-left text-primary table-row-wrap">{{ item.description }}</div>
          <br />
            <div v-if="item.hasOwnProperty('effects')" class="text-left table-row-wrap">
              <p><strong>Effects</strong></p>
              <p v-for="(e,i) in item.effects" :key="item.name + i">{{e}}</p>
              <br />
            </div>
            <div v-if="item.hasOwnProperty('ac')" class="text-left table-row-wrap">
              <span><strong>AC:</strong></span>
              <span>{{ item.ac }}</span>
            </div>
            <div v-if="item.hasOwnProperty('damage')" class="text-left table-row-wrap">
              <span><strong>Damage:</strong></span>
              <span>{{ item.damage }}</span>
              <br />
            </div>
            <div v-if="item.hasOwnProperty('requirements')" class="text-left table-row-wrap">
              <span><strong>Requirements:</strong></span>
              <q-chip dense color="red" text-color="white" v-for="r in item.requirements" :key="item.name + r">
                {{ r }}
              </q-chip>
              <br />
            </div>
            <div v-if="item.hasOwnProperty('properties')" class="text-left table-row-wrap">
              <q-chip dense v-for="p in item.properties" :key="item.name + p">
                {{ p }}
                <q-tooltip anchor="bottom left" self="bottom left">{{ getPropertyDescription(p) }}</q-tooltip>
              </q-chip>
              <br />
            </div>
        </q-card-section>

        <q-separator />

        <q-card-actions align="right">
          <q-btn v-close-popup flat color="primary" label="Close" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import Gear from 'src/assets/data/gear/list'
export default {
  name: 'GearList',
  data: function () {
    return {
      columns: [
        { name: 'name', required: true, label: 'Name', align: 'left', field: row => row.name, format: val => `${val}`, sortable: true },
        { name: 'type', required: true, label: 'Type', align: 'left', field: row => row.type, format: val => `${val}`, sortable: true }
      ],
      property: [],
      type: [],
      gear: Gear,
      coinage: '',
      coinageOptions: [],
      filter: '',
      pagination: {
        page: 1,
        rowsPerPage: 28,
        sortBy: 'name'
      },
      dialog: false,
      item: null
    }
  },
  methods: {
    getTypeIcon (type) {
      var local = this.type.find(obj => {
        return obj.name === type
      })
      return ('icon' in local) ? local.icon : 'help_outline'
    },
    getTypeDescription (type) {
      var local = this.type.find(obj => {
        return obj.name === type
      })
      return ('description' in local) ? local.description : ''
    },
    getPropertyDescription (property) {
      var local = this.property.find(obj => {
        return obj.name === property
      })
      return ('description' in local) ? local.description : ''
    },
    roundToTwo (num) {
      return +(Math.round(num + 'e+2') + 'e-2')
    },
    showItemDialog (item) {
      this.item = item
      this.dialog = true
    }
  },
  computed: {
    pagesNumber () {
      return Math.ceil(this.gear.length / this.pagination.rowsPerPage)
    }
  },
  created () {
    // Set our default coinage to what is set in our store
    this.coinage = this.$store.getters['coinage/getCoinageByID'](this.$store.state.coinage.defaultCoinage)

    // Grab our default coinage array
    this.coinageOptions = this.$store.state.coinage.coinage

    // Grab our gear lists
    this.type = this.$store.state.gear.type
    this.property = this.$store.state.gear.property
  }
}
</script>
