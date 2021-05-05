<template>
  <div class="q-pa-md">
    <div v-if="monster">
        <div>
          <div class="row q-mb-sm">
            <q-btn color="primary" icon="arrow_back_ios" label="Back" @click="goBack" />
          </div>
        </div>
        <div class="row q-col-gutter-sm">
            <div class="col col-xs-12 col-sm-9">
                <div class="text-h4 text-primary">{{ monster.name }}</div>
                <p><em>{{ monster.description }}</em></p>
                <q-markdown :src="monster.markdown" no-heading-anchor-links />
            </div>

            <div class="col col-xs-12 col-sm-3">
                <q-card>
                    <q-card-section>
                        <q-img :src="monster.image" basic class="fit" />
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
        <q-list bordered separator>
          <q-item clickable v-ripple v-for="monster in monsters" :key="'item-' + monster.id" @click="update(monster.id)">
          <q-item-section avatar>
            <img v-if="monster.image" :src="monster.image" width="100em">
          </q-item-section>
          <q-item-section>
            <q-item-label><span class="text-weight-medium">{{ monster.name }}</span></q-item-label>
            <q-item-label>{{ monster.description }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </div>
</template>

<script>
import Names from 'src/assets/data/Names'

export default {
  name: 'monsters',
  data: function () {
    return {
      monster: null,
      names: []
    }
  },
  computed: {
    monsters () {
      return Object.keys(this.$encyclopedia.monsters).map((key) => {
        const temp = this.$encyclopedia.monsters[key]
        temp.id = key
        return temp
      })
    }
  },
  methods: {
    goBack () {
      this.monster = null
    },
    update (id) {
      this.monster = this.$encyclopedia.monsters[id]
      if (this.monster.names) {
        this.generate()
      }
    },
    generate () {
      this.names = []
      if (this.monster.names) {
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
    if (this.$router.currentRoute.query.id) {
      this.update(this.$router.currentRoute.query.id)
    }
  }
}
</script>
