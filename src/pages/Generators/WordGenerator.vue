<template>
  <div class="q-pa-md">
    <div class="q-pb-md row">
      <q-btn
        color="primary"
        label="Generate"
        icon="cached"
        aria-label="Generate"
        @click="generate"
        class="col-md-2 col-sm-5"
      />
    </div>
    <p class="text-h6 text-primary">Taverns</p>
    <div class="q-pa-md" v-for="(word,i) in words" :key="i">
      <div>{{ word | capitalize}}</div>
    </div>
  </div>
</template>

<script >
export default {
  name: 'WordGenerator',
  data: function () {
    return {
      words: []
    }
  },
  methods: {
    generate () {
      this.words = this.$generator.list('tavern', 10)
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
