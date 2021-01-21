<template>
  <div class="q-pa-md">
    <div class="q-pb-md row">
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
    <div class="text-h4">{{convertName(selected)}}</div>
    <div class="q-pa-md" v-for="name in names" :key="name.type">
      <p class="text-h5 text-primary">Type: {{name.type | capitalize}}</p>
      <p class="text-h6">Generated</p>
      <p>
        <span v-for="(n,i) in name.names" :key="i">
          {{ n | capitalize}}
          <span v-if="i < name.names.length - 1">, </span>
        </span>
      </p>
      <p class="text-h6">Real</p>
      <p>
        <span v-for="(n,i) in name.real" :key="i">
          {{ n | capitalize}}
          <span v-if="i < name.real.length - 1">, </span>
        </span>
      </p>
    </div>
    <div class="q-gutter-sm">
      <p><small><em>DISCLAIMER: Generated names are all gibberish, and are not actual names from the culture. This system only makes names that <strong>sound</strong> like they come from that culture.</em></small></p>
    </div>
  </div>
</template>

<script >
import Names from 'src/assets/data/Names'

export default {
  name: 'NameGenerator',
  data: function () {
    return {
      selected: 'germanic',
      names: [],
      options: [],
      realNames: []
    }
  },
  methods: {
    convertName (name) {
      name = name.replace(/[A-Z]/g, letter => ` ${letter.toLowerCase()}`)
      return name.charAt(0).toUpperCase() + name.slice(1)
    },
    makeSetName (name, set) {
      return this.convertName(name)
    },
    generate () {
      this.names = []
      // Loop through the options
      for (var key in Names[this.selected]) {
        this.$markov.addNameArray(this.selected + '.' + key, Names[this.selected][key])
        const names = this.$markov.generateList(this.selected + '.' + key, 10)
        const real = this.$markov.getRandomList(this.selected + '.' + key, 10)
        names.sort()
        real.sort()
        this.names.push({
          type: key,
          names: names,
          real: real
        })
      }
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
      for (var key in Names) {
        var setName = this.makeSetName(key, Names[key])
        options.push({ value: key, label: setName })
      }
      return options
    }
  },
  watch: {
    selected (newS, oldS) {
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
    this.options = this.setOptions
  }
}
</script>
