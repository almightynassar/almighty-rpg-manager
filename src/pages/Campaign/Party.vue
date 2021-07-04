<template>
  <div class="q-pa-md">
    <div v-if="member">
        <div>
          <div class="row q-mb-sm">
            <q-btn color="primary" icon="arrow_back_ios" label="Back" @click="goBack" />
          </div>
        </div>
        <div class="row q-col-gutter-sm">
            <div class="col-xs-12 col-sm-6 col-lg-3">
                <q-card>
                    <q-img v-if="member.image" :src="member.image" basic class="fit" />
                    <q-card-section>
                        <strong class="text-primary">{{ member.name }}</strong>
                        <p>Level {{ member.level }} {{ member.gender }} {{ findRace(member.race).singular }} {{member.class}}</p>
                        <q-markup-table flat dense wrap-cells>
                            <thead>
                                <th></th>
                                <th></th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong class="text-primary">Max Health: </strong></td>
                                    <td>{{ maxHealth(member.health, member.attributes['con']) }}</td>
                                </tr>
                                <tr>
                                    <td><strong class="text-primary">Proficiency: </strong></td>
                                    <td>{{ member.proficiency }}</td>
                                </tr>
                                <tr>
                                    <td><strong class="text-primary">Speed: </strong></td>
                                    <td>{{ member.speed }} spaces / {{ speedInM(member.speed) }} m / {{speedInFt(member.speed)}} ft</td>
                                </tr>
                                <tr>
                                    <td><strong class="text-primary">Carrying Capacity: </strong></td>
                                    <td>{{(member.attributes['str'] * 5) * 0.5}} kg / {{member.attributes['str'] * 5}} lbs</td>
                                </tr>
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
                                <th>Armour</th>
                                <th>AC</th>
                            </thead>
                            <tbody>
                                <tr>
                                  <td>Base</td>
                                  <td>{{ ac(member.attributes) }}</td>
                                </tr>
                                <tr v-for="(values,armour) in member.ac" :key="armour">
                                    <td>{{ values.name }}</td>
                                    <td>{{ ac(member.attributes,values) }}</td>
                                </tr>
                            </tbody>
                        </q-markup-table>
                    </q-card-section>
                </q-card>
            </div>

            <div class="col-xs-12 col-sm-6 col-lg-4 padding">
                <q-markup-table flat dense wrap-cells>
                    <thead>
                        <th>Ability</th>
                        <th>Score</th>
                        <th>Mod</th>
                        <th>Throw</th>
                    </thead>
                    <tbody>
                        <tr v-for="(score,attribute) in member.attributes" :key="attribute">
                            <td class="text-capitalize">{{ attribute }}</td>
                            <td>{{ score }}</td>
                            <td>{{ modifier(score) }}</td>
                            <td>{{ savingThrow(member, attribute, score) }}</td>
                        </tr>
                    </tbody>
                </q-markup-table>
                <br />
                 <q-separator />
                <br />
                <q-markup-table flat dense wrap-cells>
                    <thead>
                        <th>Skill</th>
                        <th>Attribute</th>
                        <th>Bonus</th>
                    </thead>
                    <tbody>
                        <tr v-for="(attribute,skill) in skills" :key="skill">
                          <td class="text-capitalize">{{ skill }}</td>
                          <td class="text-capitalize">{{ attribute }}</td>
                          <td>{{ skillBonus(skill,attribute,member)}}</td>
                        </tr>
                    </tbody>
                </q-markup-table>
            </div>

            <div class="col-xs-12 col-lg-5 padding">
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
            <q-item-label>Level {{ member.level }} {{ member.gender }} {{ findRace(member.race).singular }} {{member.class}}</q-item-label>
          </q-item-section>
          <q-item-section :class="$q.screen.gt.sm ? '' : 'hidden'">
            <q-markup-table flat dense wrap-cells>
                <thead>
                    <th></th>
                    <th></th>
                </thead>
                <tbody>
                    <tr>
                        <td><strong class="text-primary">Max Health: </strong></td>
                        <td>{{ maxHealth(member.health, member.attributes['con']) }}</td>
                    </tr>
                    <tr>
                        <td><strong class="text-primary">Passive Perception: </strong></td>
                        <td>{{ 10 + skillBonus('perception', 'dex', member) }}</td>
                    </tr>
                    <tr>
                        <td><strong class="text-primary">Speed: </strong></td>
                        <td>{{ member.speed }} spaces / {{ speedInM(member.speed) }} m / {{speedInFt(member.speed)}} ft</td>
                    </tr>
                </tbody>
            </q-markup-table>
          </q-item-section>
          <q-item-section :class="$q.screen.gt.sm ? '' : 'hidden'">
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
                        <td>{{ values.name }}</td>
                        <td>{{ ac(member.attributes,values) }}</td>
                    </tr>
                </tbody>
            </q-markup-table>
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
      member: null
    }
  },
  computed: {
    party () {
      return Object.keys(this.$encyclopedia.party).map((key) => {
        const temp = this.$encyclopedia.party[key]
        temp.id = key
        return temp
      })
    },
    skills () {
      return this.$encyclopedia.helpers.skills
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
    },
    maxHealth (health, con) {
      const conMod = this.modifier(con)
      return (health.dice + conMod) + (((health.dice / 2) + 0.5) * (health.hitdice - 1)) + (conMod * (health.hitdice - 1))
    },
    speedInM (speed) {
      return speed * 1.5
    },
    speedInFt (speed) {
      return speed * 5
    },
    savingThrow (member, name, score) {
      return this.modifier(score) + (member.throws.includes(name) ? member.proficiency : 0)
    },
    skillBonus (skill, attribute, member) {
      return this.modifier(member.attributes[attribute]) + (member.skills.includes(skill) ? member.proficiency : 0)
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
