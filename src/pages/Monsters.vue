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
                          <div v-for="name in names" :key="name.type">
                            <p><strong>{{name.type | capitalize}} names:</strong></p>
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
      names: []
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
      this.names = []
      for (var key in Names[this.monster.names]) {
        this.$markov.addNameArray(this.monster.names + '.' + key, Names[this.monster.names][key])
        const names = this.$markov.generateList(this.monster.names + '.' + key, 10)
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
