<template>
  <div class="q-pa-md">
    <div class="q-gutter-sm">
      <p>Select a culture group (and gender, if available) from the list below and then click on 'Generate' to generate a list of randomly generated names that follows cultural naming conventions.</p>
      <p>The number in the brackets shows the total number of source names that the system has been trained on for that culture. More names means more variety, but can also lead to more gibberish names.</p>
      <p><small><em>DISCLAIMER: These names are all gibberish, and are not actual names from the culture. This system only makes names that <strong>sound</strong> like they come from that culture.</em></small></p>
    </div>
    <div class="q-gutter-sm row">
      <q-select
        filled
        use-input
        input-debounce="0"
        v-model="selected"
        :options="options"
        option-label="label"
        label="Culture"
        map-options
        emit-value
        options-dense
        class="col-md-9 col-sm-5"
        @filter="searchFilter"
      />

      <q-btn
        color="primary"
        label="Generate"
        icon="cached"
        aria-label="Generate"
        @click="generate"
        class="col-md-2 col-sm-5"
      />
    </div>
    <div class="q-pa-md row items-start q-gutter-md">
      <q-card flat bordered>
        <q-card-section horizontal>
          <q-card-section>
            <p class="text-primary"><strong>Generated Names</strong></p>
            <p v-for="(n,i) in names" :key="i">{{ n | capitalize}}</p>
          </q-card-section>

          <q-separator vertical />

          <q-card-section>
            <p class="text-primary"><strong>Real Names</strong></p>
            <p v-for="(n,i) in realNames" :key="i">{{ n | capitalize}}</p>
          </q-card-section>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script >
import Akkadian from 'src/assets/data/names/akkadian'
import AztecFemale from 'src/assets/data/names/aztec-female'
import AztecMale from 'src/assets/data/names/aztec-male'
import ChineseFemale from 'src/assets/data/names/chinese-female'
import ChineseMale from 'src/assets/data/names/chinese-male'
import DutchFemale from 'src/assets/data/names/dutch-female'
import DutchMale from 'src/assets/data/names/dutch-male'
import FrenchFemale from 'src/assets/data/names/french-female'
import FrenchMale from 'src/assets/data/names/french-male'
import GermanicFemale from 'src/assets/data/names/germanic-female'
import GermanicMale from 'src/assets/data/names/germanic-male'
import HinduFemale from 'src/assets/data/names/hindu-female'
import HinduMale from 'src/assets/data/names/hindu-male'
import HungarianFemale from 'src/assets/data/names/hungarian-female'
import HungarianMale from 'src/assets/data/names/hungarian-male'
import IrishFemale from 'src/assets/data/names/irish-female'
import IrishMale from 'src/assets/data/names/irish-male'
import ItalianFemale from 'src/assets/data/names/italian-female'
import ItalianMale from 'src/assets/data/names/italian-male'
import JapaneseFemale from 'src/assets/data/names/japanese-female'
import JapaneseMale from 'src/assets/data/names/japanese-male'
import NativeAmericanFemale from 'src/assets/data/names/native-american-female'
import NativeAmericanMale from 'src/assets/data/names/native-american-male'
import ScandinavianFemale from 'src/assets/data/names/scandinavian-female'
import ScandinavianMale from 'src/assets/data/names/scandinavian-male'
import ScottishFemale from 'src/assets/data/names/scottish-female'
import ScottishMale from 'src/assets/data/names/scottish-male'
import SpanishFemale from 'src/assets/data/names/spanish-female'
import SpanishMale from 'src/assets/data/names/spanish-male'
import SwedishFemale from 'src/assets/data/names/swedish-female'
import SwedishMale from 'src/assets/data/names/swedish-male'
import WelshFemale from 'src/assets/data/names/welsh-female'
import WelshMale from 'src/assets/data/names/welsh-male'
import Markov from 'src/js/markov'

export default {
  name: 'NamesList',
  data: function () {
    return {
      sets: {
        akkadian: Akkadian,
        aztecFemale: AztecFemale,
        aztecMale: AztecMale,
        chineseFemale: ChineseFemale,
        chineseMale: ChineseMale,
        dutchFemale: DutchFemale,
        dutchMale: DutchMale,
        frenchFemale: FrenchFemale,
        frenchMale: FrenchMale,
        germanicFemale: GermanicFemale,
        germanicMale: GermanicMale,
        hinduFemale: HinduFemale,
        hinduMale: HinduMale,
        hungarianFemale: HungarianFemale,
        hungarianMale: HungarianMale,
        irishFemale: IrishFemale,
        irishMale: IrishMale,
        italianFemale: ItalianFemale,
        italianMale: ItalianMale,
        japaneseFemale: JapaneseFemale,
        japaneseMale: JapaneseMale,
        nativeAmericanFemale: NativeAmericanFemale,
        nativeAmericanMale: NativeAmericanMale,
        scandinavianFemale: ScandinavianFemale,
        scandinavianMale: ScandinavianMale,
        scottishFemale: ScottishFemale,
        scottishMale: ScottishMale,
        spanishFemale: SpanishFemale,
        spanishMale: SpanishMale,
        swedishFemale: SwedishFemale,
        swedishMale: SwedishMale,
        welshFemale: WelshFemale,
        welshMale: WelshMale
      },
      selected: 'germanicFemale',
      names: [],
      options: [],
      realNames: [],
      markov: new Markov()
    }
  },
  methods: {
    makeSetName (name, set) {
      name = name.replace(/[A-Z]/g, letter => ` ${letter.toLowerCase()}`)
      return name.charAt(0).toUpperCase() + name.slice(1) + ' (' + set.length + ')'
    },
    generate () {
      this.names = this.markov.generateList(this.selected, 10)
      this.realNames = this.markov.getRandomList(this.selected, 10)
      this.names.sort()
      this.realNames.sort()
    },
    searchFilter (val, update) {
      if (val === '') {
        update(() => {
          this.options = this.setOptions
        })
        return
      }

      update(() => {
        const needle = val.toLowerCase()
        this.options = this.setOptions.filter(v => v.label.toLowerCase().indexOf(needle) > -1)
      })
    }
  },
  computed: {
    setOptions () {
      var options = []
      for (var key in this.sets) {
        var setName = this.makeSetName(key, this.sets[key])
        options.push({ value: key, label: setName })
      }
      return options
    }
  },
  watch: {
    selected (newS, oldS) {
      this.markov.addNameArray(newS, this.sets[newS])
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
    this.markov.addNameArray('germanicFemale', this.sets.germanicFemale)
    this.generate()
    this.options = this.setOptions
  }
}
</script>
