<template>
  <div class="q-pa-md">
    <div v-if="nation">
        <div>
          <div class="row q-mb-sm">
            <q-btn color="primary" icon="arrow_back_ios" label="Back" @click="goBack" />
          </div>
        </div>
        <div class="row q-col-gutter-sm">
            <div class="col-xs-12 col-lg-3">
                <q-card>
                    <q-img v-if="nation.flag" :src="nation.flag" basic class="fit" />
                    <q-card-section>
                        <q-markup-table flat dense wrap-cells>
                            <thead>
                                <th></th>
                                <th></th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="vertical-top"><strong class="text-primary">Government: </strong></td>
                                    <td>{{ nation.type }}</td>
                                </tr>
                                <tr>
                                    <td class="vertical-top"><strong class="text-primary">Ruler Title: </strong></td>
                                    <td>{{ nation.title }}</td>
                                </tr>
                                <tr>
                                    <td class="vertical-top"><strong class="text-primary">Capital: </strong></td>
                                    <td>{{ (findCity(nation.capital)).name }}</td>
                                </tr>
                                <tr>
                                    <td class="vertical-top"><strong class="text-primary">Area: </strong></td>
                                    <td>
                                        {{ numberWithCommas(nation.area) }} km²
                                        <div>{{ nation.usage.arable}}% arable</div>
                                        <div>{{ nation.usage.wilderness }}% wild</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="vertical-top"><strong class="text-primary">Population: </strong></td>
                                    <td>{{ numberWithCommas(nation.population) }}</td>
                                </tr>
                                <template v-for="(d,i) in nation.distribution">
                                <tr v-if="d > 0" :key="nation.id + '-' + i">
                                    <td class="vertical-top"><em class="text-primary">{{ (findRace(i)).plural }}: </em></td>
                                    <td>{{d}}% ({{ numberWithCommas(Math.round(nation.population * (d/100))) }})</td>
                                </tr>
                                </template>
                                <tr>
                                    <td class="vertical-top"><em class="text-primary">Others:</em></td>
                                    <td>{{ (getOtherPop(nation.population, nation.distribution)).percent }}% ( {{ numberWithCommas((getOtherPop(nation.population, nation.distribution)).value) }} )</td>
                                </tr>
                            </tbody>
                        </q-markup-table>
                    </q-card-section>
                </q-card>
            </div>

            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-9 padding">
                <div class="text-h4 text-primary">{{ nation.name }}</div>
                <p><em>{{ nation.description }}</em></p>
                <q-markdown :src="nation.markdown" no-heading-anchor-links />
                <q-separator />
                <div class="text-h6 q-mb-md text-primary"><u>Urban Areas</u></div>
                <ul>
                    <li>There are {{ filterCities(nation.id).length }} cities.</li>
                    <li>There are {{ nation.towns }} towns.</li>
                    <li>There are {{ nation.ruins }} ruins.</li>
                </ul>
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
            </div>
        </div>
    </div>
    <div v-else>
        <q-list bordered separator>
          <q-item clickable v-ripple v-for="nation in nations" :key="'item-' + nation.id" @click="update(nation.id)">
          <q-item-section avatar>
            <img v-if="nation.flag" :src="nation.flag" width="100em">
          </q-item-section>
          <q-item-section>
            <q-item-label><span class="text-weight-medium">{{ nation.name }}</span></q-item-label>
            <q-item-label>{{ nation.description }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Nations',
  data: function () {
    return {
      nation: null
    }
  },
  computed: {
    nations () {
      return Object.keys(this.$encyclopedia.nations).map((key) => {
        const temp = this.$encyclopedia.nations[key]
        temp.id = key
        return temp
      })
    }
  },
  methods: {
    goBack () {
      this.nation = null
    },
    update (id) {
      this.nation = this.$encyclopedia.nations[id]
    },
    findCity (id) {
      return this.$cities.find(t => t.id === id)
    },
    filterCities (id) {
      return this.$cities.filter(t => t.owner === id)
    },
    findRace (id) {
      return this.$encyclopedia.peoples[id]
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
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  },
  beforeRouteUpdate (to, from, next) {
    this.update(to.query.id)
    next()
  },
  mounted () {
    this.update(this.$router.currentRoute.query.id)
  }
}
</script>
