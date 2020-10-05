<template>
  <div class="q-pa-md">
    <q-splitter v-model="splitterModel">
      <template v-slot:before>
        <q-tabs
          v-model="tab"
          align="left"
          vertical
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
        >
          <q-tab
            v-for="nations in nations"
            :key="nations.id"
            :name="nations.id"
            :label="nations.short"
            style="justify-content:initial"
          />
        </q-tabs>
      </template>

      <template v-slot:after>
        <q-tab-panels
          v-model="tab"
          animated
          swipeable
          vertical
          transition-prev="jump-up"
          transition-next="jump-up"
        >
          <q-tab-panel v-for="nation in nations" :key="nation.id" :name="nation.id">
            <div class="text-h4 q-mb-md text-primary">{{ nation.short }}</div>
            <q-markup-table flat dense wrap-cells>
              <thead>
                <th></th>
                <th></th>
              </thead>
              <tbody>
                <tr>
                  <td style="width: 20%"><strong class="text-primary">Full: </strong></td>
                  <td>{{ nation.name }}</td>
                </tr>
                <tr>
                  <td style="width: 20%"><strong class="text-primary">Government: </strong></td>
                  <td>{{ nation.type }}</td>
                </tr>
                <tr>
                  <td style="width: 20%"><strong class="text-primary">Capital: </strong></td>
                  <td>{{ (findCity(nation.capital)).name }}</td>
                </tr>
                <tr>
                  <td style="width: 20%"><strong class="text-primary">Ruler Title: </strong></td>
                  <td>{{ nation.title }} </td>
                </tr>
                <tr>
                  <td style="width: 20%"><strong class="text-primary">Area: </strong></td>
                  <td>{{ numberWithCommas(nation.area) }} square km ({{ nation.usage.arable}}% arable, {{ nation.usage.wilderness }}% wilderness)</td>
                </tr>
                <tr>
                  <td style="width: 20%"><strong class="text-primary">Population: </strong></td>
                  <td>{{ numberWithCommas(nation.population) }}</td>
                </tr>
                <tr>
                  <td style="width: 20%"><strong class="text-primary">Breakdown: </strong></td>
                  <td>
                    <span v-for="(d,i) in nation.distribution" :key="nation.id + '-' + i">
                      <p v-if="d > 0" ><strong class="text-primary">{{ (findRace(i)).name }}:</strong> {{d}}% ( {{ numberWithCommas(Math.round(nation.population * (d/100))) }} )</p>
                    </span>
                    <p><strong class="text-primary">Others: </strong> {{ (getOtherPop(nation.population, nation.distribution)).percent }}% ( {{ numberWithCommas((getOtherPop(nation.population, nation.distribution)).value) }} )</p>
                  </td>
                </tr>
                <tr>
                  <td style="width: 20%"><strong class="text-primary">Towns: </strong></td>
                  <td>{{ nation.towns }}</td>
                </tr>
                <tr>
                  <td style="width: 20%"><strong class="text-primary">Ruins: </strong></td>
                  <td>{{ nation.ruins }}</td>
                </tr>
              </tbody>
            </q-markup-table>
            <br />
            <q-separator />
            <div class="text-h6 q-mb-md text-primary"><u>Information</u></div>
            <div v-for="(f,i) in nation.fluff" :key="'fluff-'+i">
              <p class="text-primary"><strong>{{ f.title }}</strong></p>
              <p>{{ f.description }}</p>
            </div>
            <br />
            <q-separator />
            <br />
            <q-separator />
            <div class="text-h6 q-mb-md text-primary"><u>Cities</u></div>
            <q-list bordered class="rounded-borders">
              <q-expansion-item
                v-for="(c,i) in filterCities(nation.id)"
                :key="'cities-'+i"
                expand-separator
                :label="c.name"
                :caption="'Population: ' + numberWithCommas(c.population)"
              >
                <q-card>
                  <q-card-section>
                    <div v-for="(f,i) in c.fluff" :key="'fluff-'+i">
                      <p class="text-primary"><strong>{{ f.title }}</strong></p>
                      <p>{{ f.description }}</p>
                    </div>
                  </q-card-section>
                </q-card>
              </q-expansion-item>
            </q-list>
          </q-tab-panel>
        </q-tab-panels>
      </template>
    </q-splitter>
  </div>
</template>

<script >
import Races from 'src/assets/data/Races'
import Nations from 'src/assets/data/Nations'
import Cities from 'src/assets/data/Cities'

export default {
  name: 'Nations',
  data: function () {
    return {
      races: Races,
      nations: Nations,
      splitterModel: 20,
      tab: 'hentergrey',
      cities: Cities
    }
  },
  methods: {
    findCity (id) {
      return this.cities.find(t => t.id === id)
    },
    filterCities (id) {
      return this.cities.filter(t => t.owner === id)
    },
    findRace (id) {
      return this.races.find(t => t.id === id)
    },
    getOtherPop (pop, distribution) {
      let majority = 0
      let value = 0
      for (var d in distribution) {
        majority += Math.round((distribution[d] / 100) * pop)
      }
      value = pop - majority
      return {
        percent: (value / pop) * 100,
        value: value
      }
    },
    numberWithCommas (x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }
  },
  mounted () {
    var param = this.$route.query.nation
    if (param !== undefined && param !== null) {
      this.tab = param
    }
  }
}
</script>
