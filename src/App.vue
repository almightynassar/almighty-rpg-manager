<template>
  <div id="q-app" class="bg-secondary">
    <router-view />
  </div>
</template>

<script >
export default {
  name: 'App',
  created () {
    // Adding support for
    // <q-icon name="game-icon:...." />
    this.$q.iconMapFn = (iconName) => {
      // iconName is the content of QIcon "name" prop
      if (iconName.startsWith('game-icon:') === true) {
        // we strip the "app:" part
        const name = iconName.substring(10)

        return {
          cls: 'game-icon game-icon-' + name
        }
      }
    }
  }
}
</script>
