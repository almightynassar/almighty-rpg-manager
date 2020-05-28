<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Almighty RPG Manager
        </q-toolbar-title>

        <div><img src="~assets/img/icon.png" style="height: 2.5vw; max-width: 4vw" /></div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-secondary"
    >
      <q-list>
        <q-item-label
          header
          class="text-primary"
        >
          Menu
        </q-item-label>
        <Menu
          v-for="link in menu"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import Menu from 'components/Menu'

export default {
  name: 'MainLayout',

  components: {
    Menu
  },

  data () {
    return {
      leftDrawerOpen: false,
      menu: [
        {
          title: 'Home',
          caption: 'The main dashboard',
          icon: 'home',
          link: '/'
        },
        {
          title: 'Shopping',
          caption: 'View equipment & services',
          icon: 'game-icon:price-tag',
          link: '/shopping'
        },
        {
          title: 'Character',
          caption: 'Character information like races and languages',
          icon: 'accessibility',
          link: '/character'
        },
        {
          title: 'Generators',
          caption: 'Generate things like names',
          icon: 'game-icon:magic-swirl',
          link: '/name-generator'
        },
        {
          title: 'World',
          caption: 'Information about the setting of Terrea',
          icon: 'game-icon:world',
          link: '/world'
        },
        {
          title: 'Rules Reference',
          caption: 'View rules',
          icon: 'game-icon:secret-book',
          link: '/reference'
        },
        {
          title: 'Settings',
          caption: 'Change various settings in the app',
          icon: 'settings',
          link: '/settings'
        }
      ]
    }
  }
}
</script>
