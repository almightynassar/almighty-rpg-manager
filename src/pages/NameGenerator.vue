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
      <q-markup-table flat dense wrap-cells>
        <thead>
          <th class="text-primary"><strong>Generated Names</strong></th>
          <th class="text-primary"><strong>Real Names</strong></th>
        </thead>
        <tbody>
          <tr>
            <td>
              <p v-for="(n,i) in names" :key="i">{{ n | capitalize}}</p>
            </td>
            <td>
              <p v-for="(n,i) in realNames" :key="i">{{ n | capitalize}}</p>
            </td>
          </tr>
        </tbody>
      </q-markup-table>
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
