<template>
  <q-layout view="hHh Lpr lFf">
    <q-header
      bordered
      elevated
    >
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

        <q-btn flat round dense to="/">
          <img src="~assets/img/icon.png" style="height: 2em; max-width: 4em" />
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      overlay
      elevated
      content-class="bg-dark"
    >
      <q-list
        dark
        separator
      >
        <template v-for="item in menu">
          <item-link
            v-if="item.link"
            :key="item.title"
            v-bind="item"
          />
          <q-expansion-item
            v-else
            clickable
            :icon="item.icon"
            :label="item.title"
            :key="item.title"
          >
            <q-list
              class="bg-grey-9"
            >
              <item-link v-for="sub in item.submenu" :key="sub.title" v-bind="sub" />
            </q-list>
          </q-expansion-item>
        </template>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import ItemLink from 'src/components/ItemLink.vue'

export default {
  name: 'MainLayout',
  components: {
    ItemLink
  },
  data () {
    return {
      leftDrawerOpen: false,
      menu: [
        {
          title: 'Economy',
          icon: 'game-icon:price-tag',
          submenu: [
            {
              title: 'Lifestyle',
              icon: 'game-icon:park-bench',
              link: '/lifestyle'
            },
            {
              title: 'Gear',
              icon: 'game-icon:battle-gear',
              link: '/gear'
            },
            {
              title: 'Healing',
              icon: 'game-icon:healing',
              link: '/healing'
            },
            {
              title: 'Hirelings',
              icon: 'game-icon:guards',
              link: '/hirelings'
            }
          ]
        },
        {
          title: 'Character',
          icon: 'accessibility',
          link: '/character'
        },
        {
          title: 'Campaign',
          icon: 'game-icon:wax-tablet',
          link: '/campaign'
        },
        {
          title: 'World',
          icon: 'game-icon:world',
          link: '/world'
        },
        {
          title: 'Rules Reference',
          icon: 'game-icon:secret-book',
          link: '/reference'
        }
      ]
    }
  }
}
</script>
