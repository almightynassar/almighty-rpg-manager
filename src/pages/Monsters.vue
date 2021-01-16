<template>
  <div class="q-pa-md">
    <div v-if="monster">
        <div class="row q-col-gutter-sm">
            <div class="col col-xs-12 col-sm-9">
                <div class="text-h4 text-primary">{{ monster.name }}</div>
                <p><em>{{ monster.description }}</em></p>
                <q-markdown :src="monster.markdown" no-heading-anchor-links />
            </div>

            <div class="col col-xs-12 col-sm-3">
                <q-card>
                    <q-card-section>
                        <monster-image :type="monster.id" />
                        <q-markup-table flat dense wrap-cells>
                            <thead>
                                <th></th>
                                <th></th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="vertical-top"><strong class="text-primary">Sentient?: </strong></td>
                                    <td>{{ monster.sentient ? 'Yes' : 'No' }}</td>
                                </tr>
                            </tbody>
                        </q-markup-table>
                        <div class="q-mt-sm">
                            <p><strong>Female Names:</strong></p>
                            <p>
                                <span v-for="(n, i) in namesFemale" :key="'female-' + i">
                                    {{ n | capitalize}}<span v-if="i < namesFemale.length - 1">, </span>
                                </span>
                            </p>
                            <p><strong>Male Names:</strong></p>
                            <p>
                                <span v-for="(n, i) in namesMale" :key="'male-' + i">
                                    {{ n | capitalize}}<span v-if="i < namesFemale.length - 1">, </span>
                                </span>
                            </p>
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
        <q-banner inline-actions class="text-white bg-red">Monster could not be found</q-banner>
    </div>
  </div>
</template>

<script>
import Names from 'src/assets/data/Names'
import MonsterImage from 'src/components/MonsterImage'

export default {
  name: 'monsters',
  components: {
    MonsterImage
  },
  data: function () {
    return {
      monster: null,
      namesFemale: [],
      namesMale: []
    }
  },
  methods: {
    update (id) {
      this.monster = this.$monsters.monsters.find((obj) => {
        return obj.id === id
      })
      if (this.monster) {
        this.generate()
      }
    },
    generate () {
      this.$markov.addNameArray(this.monster.names.female, Names[this.monster.names.female])
      this.$markov.addNameArray(this.monster.names.male, Names[this.monster.names.male])
      this.namesFemale = this.$markov.generateList(this.monster.names.female, 10)
      this.namesMale = this.$markov.generateList(this.monster.names.male, 10)
      this.namesFemale.sort()
      this.namesMale.sort()
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
