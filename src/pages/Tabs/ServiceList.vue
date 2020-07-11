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
        <q-table
          title="Lifestyle"
          :data="lifestyles"
          :columns="lifestyleColumns"
          :pagination.sync="pagination"
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
            </q-tr>
          </template>

          <template v-slot:body="props">
            <q-tr :props="props">
              <q-td v-for="col in props.cols" :key="col.name" :props="props">
                <template v-if="col.name == 'min' || col.name == 'max'">
                    {{ col.value }} {{ coinage.symbol }}
                    <span class='float-right'>
                      <img v-if="coinage.id === 'bronze'" src='~assets/img/bronze.png' style='height: 1.5vw; max-width: 2vw' />
                      <img v-else-if="coinage.id === 'silver'" src='~assets/img/silver.png' style='height: 1.5vw; max-width: 2vw' />
                      <img v-else-if="coinage.id === 'gold'" src='~assets/img/gold.png' style='height: 1.5vw; max-width: 2vw' />
                    </span>
                </template>
                <template v-else>
                  {{ col.value }}
                </template>
              </q-td>
            </q-tr>
          </template>

        </q-table>
      </q-tab-panel>

      <q-tab-panel name="healing">
        <q-markup-table flat wrap-cells>
          <thead>
            <th>Service</th>
            <th>Cost</th>
            <th>Description</th>
          </thead>
          <tbody>
            <tr>
              <td>Minor nonmagical care</td>
              <td>30 CP per use of the Medicine skill</td>
              <td>Expert diagnosis, as well as treatment of minor ailments.</td>
            </tr>
            <tr>
              <td>Major nonmagical care</td>
              <td>100 CP</td>
              <td>Recovery that requires an overnight stay.</td>
            </tr>
            <tr>
              <td>Cure Wounds (magic-based)</td>
              <td>2500 CP per level</td>
              <td>A creature the hireling touches regains a number of hit points equal to 1d8 + your spellcasting ability modifier. This spell has no effect on undead or constructs. Increase healing to 1d8 for each level higher.</td>
            </tr>
            <tr>
              <td>Lesser Restoration (magic-based)</td>
              <td>5000 CP</td>
              <td>The hireling touch a creature and can end either one disease or one condition afflicting it. The condition can be blinded, deafened, paralyzed, or poisoned.</td>
            </tr>
            <tr>
              <td>Greater Restoration</td>
              <td>15000 CP</td>
              <td>The hireling imbues a creature they touch with positive energy to undo a debilitating effect. You can reduce the target's exhaustion level by one, or end one of the following effects on the target: One effect that charmed or petrified the target; One curse, including the target's attunement to a cursed magic item; Any reduction to one of the target's ability scores; One effect reducing the target's hit point maximum</td>
            </tr>
          </tbody>
        </q-markup-table>
      </q-tab-panel>
    </q-tab-panels>
  </div>
</template>

<script>
import Lifestyles from 'src/assets/data/Lifestyle'
export default {
  name: 'ServiceList',
  data: function () {
    return {
      lifestyles: Lifestyles,
      lifestyleColumns: [
        { name: 'name', required: true, label: 'Name', align: 'left', field: row => row.name, format: val => `${val}`, sortable: true },
        { name: 'min', required: true, label: 'Income', align: 'left', field: row => row.min, format: (val, row) => `${this.determineIncome(row)}`, sortable: true },
        { name: 'max', required: true, label: 'Expenses', align: 'left', field: row => row.max, format: (val, row) => `${this.determineExpenses(row)}`, sortable: true },
        { name: 'description', required: true, label: 'Description', align: 'left', field: row => row.description, format: val => `${val}`, sortable: false }
      ],
      tab: 'lifestyle',
      coinage: '',
      coinageOptions: [],
      pagination: {
        page: 1,
        rowsPerPage: 0
      }
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
  }
}
</script>
