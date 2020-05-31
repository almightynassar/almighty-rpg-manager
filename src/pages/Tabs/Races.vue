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
            v-for="race in races"
            :key="race.id"
            :name="race.id"
            :label="race.name"
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
          <q-tab-panel v-for="race in races" :key="race.id" :name="race.id">
            <div class="text-h4 q-mb-md text-primary">{{ race.name }}</div>
            <q-markup-table flat dense wrap-cells>
              <thead>
                <th></th>
                <th></th>
              </thead>
              <tbody>
                <tr>
                  <td style="width: 20%"><strong class="text-primary">Singular: </strong></td>
                  <td>{{ race.singular }}</td>
                </tr>
                <tr>
                  <td style="width: 20%"><strong class="text-primary">Plural: </strong></td>
                  <td>{{ race.plural }}</td>
                </tr>
                <tr>
                  <td style="width: 20%"><strong class="text-primary">Adjective: </strong></td>
                  <td>{{ race.adjective}}</td>
                </tr>
                <tr>
                  <td style="width: 20%"><strong class="text-primary">Age: </strong></td>
                  <td>{{ race.ranges.age.min }} - {{ race.ranges.age.max }} </td>
                </tr>
                <tr>
                  <td style="width: 20%"><strong class="text-primary">Height: </strong></td>
                  <td>{{ race.ranges.height.min }}m - {{ race.ranges.height.max }}m</td>
                </tr>
                <tr>
                  <td style="width: 20%"><strong class="text-primary">Weight: </strong></td>
                  <td>{{ race.ranges.weight.min }}kg - {{ race.ranges.weight.max }}kg</td>
                </tr>
              </tbody>
            </q-markup-table>
            <br />
            <q-separator />
            <div class="text-h6 q-mb-md text-primary"><u>Traits</u></div>
            <p><em>All races are assumed to know the Common language by default.</em></p>
            <q-markup-table flat dense wrap-cells>
              <thead>
                <th></th>
                <th></th>
              </thead>
              <tbody>
                <tr v-for="trait in race.traits" :key="trait.id">
                  <td class="text-primary" style="width: 20%"><strong>{{ getTraitName(trait) }}</strong></td>
                  <td>{{ getTraitDescription(trait) }}<span v-if="trait.extra"><br />{{ trait.extra }}</span></td>
                </tr>
              </tbody>
            </q-markup-table>
            <q-separator />
            <div class="text-h6 q-mb-md text-primary"><u>Information</u></div>
            <div v-for="(f,i) in race.fluff" :key="'fluff-'+i">
              <p class="text-primary"><strong>{{ f.title }}</strong></p>
              <p>{{ f.description }}</p>
            </div>
            <br />
            <q-separator />
            <div class="text-h6 q-mb-md text-primary"><u>Example Names</u></div>
            <p><strong>Female:</strong></p>
            <p><span v-for="(n,i) in namesFemale" :key="'male-'+i">{{ n | capitalize }}<span v-if="(i < (namesFemale.length - 1))">, </span></span></p>
            <p><strong>Male:</strong></p>
            <p><span v-for="(n,i) in namesMale" :key="'male-'+i">{{ n | capitalize }}<span v-if="(i < (namesFemale.length - 1))">, </span></span></p>
            <q-separator />
            <p><small><em>This race has a power of {{ getTraitScore(race.traits) }}. Please note that power does not take into account synergy or flexibity.</em></small></p>
          </q-tab-panel>
        </q-tab-panels>
      </template>
    </q-splitter>
  </div>
</template>

<script >
import Races from 'src/assets/data/Races'
import Traits from 'src/assets/data/RaceTraits'
import Names from 'src/assets/data/Names'
import Markov from 'src/js/markov'

export default {
  name: 'Races',
  data: function () {
    return {
      markov: new Markov(),
      namesFemale: [],
      namesMale: [],
      races: Races,
      selectedFemale: 'frenchFemale',
      selectedMale: 'frenchMale',
      sets: Names,
      splitterModel: 20,
      tab: 'humans',
      traits: Traits
    }
  },
  methods: {
    findTrait (id) {
      return this.traits.find(t => t.id === id)
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
      this.markov.addNameArray(this.selectedRace.ranges.names.female, this.sets[this.selectedRace.ranges.names.female])
      this.markov.addNameArray(this.selectedRace.ranges.names.male, this.sets[this.selectedRace.ranges.names.male])
      this.namesFemale = this.markov.generateList(this.selectedRace.ranges.names.female, 10)
      this.namesMale = this.markov.generateList(this.selectedRace.ranges.names.male, 10)
      this.namesFemale.sort()
      this.namesMale.sort()
    }
  },
  computed: {
    selectedRace () {
      var id = this.tab
      return this.races.find(t => t.id === id)
    }
  },
  watch: {
    tab (newS, oldS) {
      this.generate()
    }
  },
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  },
  mounted () {
    this.generate()
  }
}
</script>
