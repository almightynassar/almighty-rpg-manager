<template>
  <div style="border: 1px grey solid;">
    <q-img v-if="type === 'federation'" src="~assets/img/nations/federation.png" basic class="fit" />
    <q-img v-else-if="type === 'hentergrey'" src="~assets/img/nations/hentergrey.png" basic class="fit" />
    <q-img v-else-if="type === 'illuminaati'" src="~assets/img/nations/illuminaati.png" basic class="fit" />
    <q-img v-else-if="type === 'myrmiddon'" src="~assets/img/nations/myrmiddon.png" basic class="fit" />
    <q-img v-else-if="type === 'ocearus'" src="~assets/img/nations/ocearus.png" basic class="fit" />
    <q-img v-else-if="type === 'partisans'" src="~assets/img/nations/partisans.png" basic class="fit" />
    <q-img v-else-if="type === 'shatteredisles'" src="~assets/img/nations/shatteredisles.png" basic class="fit" />
    <q-img v-else-if="type === 'snvert'" src="~assets/img/nations/snvert.png" basic class="fit" />
    <q-img v-else-if="type === 'tau'" src="~assets/img/nations/tau.png" basic class="fit" />
    <q-img v-else-if="type === 'trellisanthe'" src="~assets/img/nations/trellisanthe.png" basic class="fit" />
    <q-img v-else src="~assets/img/not-found.jpg" class="fit" />
  </div>
</template>

<script>
export default {
  name: 'FlagImage',
  props: ['type']
}
</script>
