<template>
  <div class="q-pa-md">
    <div v-if="member">
        <div>
          <div class="row q-mb-sm">
            <q-btn color="primary" icon="arrow_back_ios" label="Back" @click="goBack" />
          </div>
        </div>
        <div class="row q-col-gutter-sm">
            <div class="col-xs-12 col-lg-3">
                <q-card>
                    <q-img v-if="member.image" :src="member.image" basic class="fit" />
                    <q-card-section>
                        <q-markup-table flat dense wrap-cells>
                            <thead>
                                <th></th>
                                <th></th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong class="text-primary">Age: </strong></td>
                                    <td>{{ member.age }}</td>
                                </tr>
                                <tr>
                                    <td><strong class="text-primary">Height: </strong></td>
                                    <td>{{ member.height }}m</td>
                                </tr>
                                <tr>
                                    <td><strong class="text-primary">Weight: </strong></td>
                                    <td>{{ member.weight }}kg</td>
                                </tr>
                            </tbody>
                        </q-markup-table>
                        <br />
                        <q-separator />
                        <br />
                        <q-markup-table flat dense wrap-cells>
                            <thead>
                                <th>Ability</th>
                                <th>Score</th>
                                <th>Mod</th>
                            </thead>
                            <tbody>
                                <tr v-for="(score,attribute) in member.attributes" :key="attribute">
                                    <td>{{ attribute }}</td>
                                    <td>{{ score }}</td>
                                    <td>{{ modifier(score) }}</td>
                                </tr>
                            </tbody>
                        </q-markup-table>
                        <br />
                        <q-separator />
                        <br />
                        <q-markup-table flat dense wrap-cells>
                            <thead>
                                <th>Armour</th>
                                <th>AC</th>
                            </thead>
                            <tbody>
                                <tr>
                                  <td>Base</td>
                                  <td>{{ ac(member.attributes) }}</td>
                                </tr>
                                <tr v-for="(values,armour) in member.ac" :key="armour">
                                    <td>{{ armour }}</td>
                                    <td>{{ ac(member.attributes,values) }}</td>
                                </tr>
                            </tbody>
                        </q-markup-table>
                    </q-card-section>
                </q-card>
            </div>

            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-9 padding">
                <div class="text-h4 text-primary">{{ member.name }}</div>
                <q-markdown :src="member.markdown" no-heading-anchor-links />
            </div>
        </div>
    </div>
    <div v-else>
        <q-list bordered separator>
          <q-item clickable v-ripple v-for="member in party" :key="'item-' + member.id" @click="update(member.id)">
          <q-item-section avatar>
            <img v-if="member.image" :src="member.image" width="100em">
          </q-item-section>
          <q-item-section>
            <q-item-label><span class="text-weight-medium">{{ member.name }}</span></q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Party',
  data: function () {
    return {
      member: null,
      blah: this.$encyclopedia
    }
  },
  computed: {
    party () {
      return Object.keys(this.$encyclopedia.party).map((key) => {
        const temp = this.$encyclopedia.party[key]
        temp.id = key
        return temp
      })
    }
  },
  methods: {
    goBack () {
      this.member = null
    },
    update (id) {
      this.member = this.$encyclopedia.party[id]
    },
    findRace (id) {
      return this.$encyclopedia.peoples[id]
    },
    modifier (score) {
      return this.$encyclopedia.helpers.modifier(score)
    },
    ac (attributes, armour) {
      return this.$encyclopedia.helpers.ac(attributes, armour)
    }
  },
  beforeRouteUpdate (to, from, next) {
    this.update(to.query.id)
    next()
  },
  mounted () {
    this.update(this.$router.currentRoute.query.id)
  }
}
</script>
