<template>
  <div>
    <q-img v-if="type === 'avians'" src="~assets/img/races/avians.png" basic class="fit" />
    <q-img v-else-if="type === 'dwarves'" src="~assets/img/races/dwarves.jpg" basic class="fit" />
    <q-img v-else-if="type === 'forged'" src="~assets/img/races/forged.jpg" basic class="fit" />
    <q-img v-else-if="type === 'goblins'" src="~assets/img/races/goblins.png" basic class="fit" />
    <q-img v-else-if="type === 'humans'" src="~assets/img/races/humans.jpg" basic class="fit" />
    <q-img v-else-if="type === 'lacerti'" src="~assets/img/races/lacerti.png" basic class="fit" />
    <q-img v-else-if="type === 'lefantians'" src="~assets/img/races/lefantians.jpg" basic class="fit" />
    <q-img v-else-if="type === 'locanth'" src="~assets/img/races/locanth.jpg" basic class="fit" />
    <q-img v-else-if="type === 'merfolk'" src="~assets/img/races/merfolk.jpg" basic class="fit" />
    <q-img v-else-if="type === 'minotaurs'" src="~assets/img/races/minotaurs.jpg" basic class="fit" />
    <q-img v-else-if="type === 'orcs'" src="~assets/img/races/orcs.jpg" basic class="fit" />
    <q-img v-else-if="type === 'shifters'" src="~assets/img/races/shifters.jpg" basic class="fit" />
    <q-img v-else-if="type === 'snvert'" src="~assets/img/races/snvert.jpg" basic class="fit" />
    <q-img v-else-if="type === 'teztecs'" src="~assets/img/races/teztecs.jpg" basic class="fit" />
    <q-img v-else src="~assets/img/not-found.jpg" class="fit" />
    <p v-if="src[type]" class="text-center q-mb-none"><small><a :href="src[type]">Source Image</a></small></p>
  </div>
</template>

<script>
export default {
  name: 'RaceImage',
  props: ['type'],
  data: function () {
    return {
      src: {
        avians: 'https://www.deviantart.com/emmits/art/COMMISSION-Kenku-819829383',
        dwarves: 'https://www.deviantart.com/bryansyme/art/Dwarf-Fighter-of-Grisal-663716188',
        forged: 'https://www.deviantart.com/jeffchendesigns/art/Robot-Ninja-632175946',
        goblins: 'https://www.deviantart.com/astri-lohne/art/Goblin-Rogue-711501351',
        humans: 'https://www.deviantart.com/artdeepmind/art/Cleric-827271517',
        lacerti: 'https://www.deviantart.com/natsu-ken/art/SCVI-Lizardman-770147522',
        lefantians: 'https://www.deviantart.com/enterry/art/Peacebringer-800242014',
        locanth: 'https://www.deviantart.com/irbisty/art/Messenger-Dream-746422699',
        merfolk: 'https://www.deviantart.com/tira-owl/art/Merfolk-788615773',
        minotaurs: 'https://www.deviantart.com/pablofernandezartwrk/art/Minotaur-546743269',
        orcs: 'https://www.deviantart.com/bryansyme/art/Vengeance-2sm-852212672',
        shifters: 'https://www.deviantart.com/bryansyme/art/Poison-wtich-and-familiar-720890459',
        snvert: 'https://www.deviantart.com/bryansyme/art/Droki-559430915',
        teztecs: 'http://thecreaturechronicle.tumblr.com/'
      }
    }
  }
}
</script>
