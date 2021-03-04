<template>
  <div class="q-pa-md">
    <div v-if="race">
        <div class="row q-col-gutter-sm">
            <div class="col col-xs-12 col-sm-9">
                <div class="text-h4 text-primary">{{ race.name }}</div>
                <p><em>{{ race.short }}</em></p>

                <div v-for="trait in race.traits" :key="trait.id">
                    <div class="text-h6">{{ getTraitName(trait) }}</div>
                    <p>{{ getTraitDescription(trait)}}<span v-if="trait.extra"><br />{{ trait.extra }}</span></p>
                </div>
                <p><small><em>All races are assumed to know the Common language by default.</em></small></p>

                <p><small><em>This race has a power of {{ getTraitScore(race.traits) }}. Please note that power does not take into account synergy or flexibity.</em></small></p>

                <q-separator />

                <q-markdown :src="race.markdown" no-heading-anchor-links />
            </div>

            <div class="col col-xs-12 col-sm-3">
                <q-card>
                    <race-image :type="race.id" />

                    <q-card-section>
                        <q-markup-table flat dense wrap-cells>
                            <thead>
                                <th></th>
                                <th></th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong class="text-primary">Singular: </strong></td>
                                    <td>{{ race.singular }}</td>
                                </tr>
                                <tr>
                                    <td><strong class="text-primary">Plural: </strong></td>
                                    <td>{{ race.plural }}</td>
                                </tr>
                                <tr>
                                    <td><strong class="text-primary">Adjective: </strong></td>
                                    <td>{{ race.adjective }}</td>
                                </tr>
                                <tr>
                                    <td><strong class="text-primary">Age: </strong></td>
                                    <td>{{ race.ranges.age.min }} - {{ race.ranges.age.max }}</td>
                                </tr>
                                <tr>
                                    <td><strong class="text-primary">Height: </strong></td>
                                    <td>{{ race.ranges.height.min }}m - {{ race.ranges.height.max }}m</td>
                                </tr>
                                <tr>
                                    <td><strong class="text-primary">Weight: </strong></td>
                                    <td>{{ race.ranges.weight.min }}kg - {{ race.ranges.weight.max }}kg</td>
                                </tr>
                            </tbody>
                        </q-markup-table>
                        <div class="q-mt-sm">
                          <div v-for="name in names" :key="name.type">
                            <p><strong>{{name.type | capitalize}} Names:</strong></p>
                            <p>
                                <span v-for="(n, i) in name.names" :key="name.type + '-' + i">
                                    {{ n | capitalize}}<span v-if="i < name.names.length - 1">, </span>
                                </span>
                            </p>
                          </div>
                          <q-btn
                              align="around"
                              dense
                              color="primary"
                              label="Generate Names"
                              icon="cached"
                              aria-label="Generate"
                              @click="generate"
                              class="text-center"
                          />
                        </div>
                    </q-card-section>
                </q-card>
            </div>
        </div>
    </div>
    <div v-else>
        <q-banner inline-actions class="text-white bg-red">Race could not be found</q-banner>
    </div>
  </div>
</template>

<script>
import Names from 'src/assets/data/Names'

export default {
  name: 'Races',
  components: {
    RaceImage: () => import('src/components/RaceImage.vue')
  },
  data: function () {
    return {
      names: [],
      race: null
    }
  },
  methods: {
    update (id) {
      this.race = this.$races.races.find((obj) => {
        return obj.id === id
      })
      if (this.race) {
        this.generate()
      }
    },
    findTrait (id) {
      return this.$races.traits.find((t) => t.id === id)
    },
    getTraitName (trait) {
      return trait.overwriteName ? trait.name : this.findTrait(trait.id).name
    },
    getTraitDescription (trait) {
      return trait.overwriteDescription ? trait.description : this.findTrait(trait.id).description
    },
    getTraitScore (traits) {
      var total = 0
      for (var i in traits) {
        total += this.findTrait(traits[i].id).score * traits[i].quantity
      }
      return total
    },
    generate () {
      this.names = []
      for (var key in Names[this.race.ranges.names]) {
        this.$markov.addNameArray(this.race.ranges.names + '+' + key, Names[this.race.ranges.names][key])
        const names = this.$markov.generateList(this.race.ranges.names + '+' + key, 10)
        names.sort()
        this.names.push({
          type: key,
          names: names
        })
      }
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
    this.update(to.params.id)
    next()
  },
  mounted () {
    this.update(this.$router.currentRoute.params.id)
  }
}
</script>
