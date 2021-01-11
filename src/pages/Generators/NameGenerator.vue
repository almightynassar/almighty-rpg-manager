<template>
  <div class="q-pa-md">
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
    <div class="q-pa-md row items-start">
      <div class="col-md-6 col-sm-12 col-xs-12">
        <h6 class="text-primary">Generated {{convertName(selected)}} Names</h6>
        <p v-for="(n,i) in names" :key="i">{{ n | capitalize}}</p>
      </div>
      <div class="col-md-6 col-sm-12 col-xs-12">
        <h6 class="text-primary">Real Names</h6>
        <p v-for="(n,i) in realNames" :key="i">{{ n | capitalize}}</p>
      </div>
    </div>
    <div class="q-gutter-sm">
      <p><small><em>DISCLAIMER: Generated names are all gibberish, and are not actual names from the culture. This system only makes names that <strong>sound</strong> like they come from that culture.</em></small></p>
    </div>
  </div>
</template>

<script >
import Names from 'src/assets/data/Names'
import Markov from 'src/js/markov'

export default {
  name: 'NamesList',
  data: function () {
    return {
      sets: Names,
      selected: 'germanicFemale',
      names: [],
      options: [],
      realNames: [],
      markov: new Markov()
    }
  },
  methods: {
    convertName (name) {
      name = name.replace(/[A-Z]/g, letter => ` ${letter.toLowerCase()}`)
      return name.charAt(0).toUpperCase() + name.slice(1)
    },
    makeSetName (name, set) {
      return this.convertName(name) + ' (' + set.length + ' names)'
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
    this.markov.addNameArray('germanicFemale', this.sets.germanicFemale)
    this.generate()
    this.options = this.setOptions
  }
}
</script>
