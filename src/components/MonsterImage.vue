<template>
  <div>
    <q-img v-if="type === 'dragons'" src="~assets/img/monsters/dragons.jpg" basic class="fit" />
    <q-img v-else-if="type === 'vampires'" src="~assets/img/monsters/vampires.jpg" basic class="fit" />
    <q-img v-else src="~assets/img/not-found.jpg" class="fit" />
    <p v-if="src[type]" class="text-center q-mb-none"><small><a :href="src[type]">Source Image</a></small></p>
  </div>
</template>

<script>
export default {
  name: 'MonsterImage',
  props: ['type'],
  data: function () {
    return {
      src: {
        dragons: 'https://www.deviantart.com/vampireprincess007/art/Storm-lords-161032162',
        vampires: 'https://www.deviantart.com/infesth6/art/Blood-Seekers-855888966'
      }
    }
  }
}
</script>
