<template>
  <div class="q-pa-md" v-viewer>
    <div class="image">
      <img src="~assets/img/World.jpg" />
      <p class="text-primary text-center"><strong>World Map</strong></p>
    </div>
  </div>
</template>

<script>
import Viewer from 'v-viewer'
import Vue from 'vue'
Vue.use(Viewer)

export default {
  name: 'Map'
}
</script>

<style scoped>
.image {
  width: calc(20% - 10px);
  margin: 5px;
  display: inline-block;
}
.image > img {
  width: 100%;
  cursor: pointer;
}
</style>
