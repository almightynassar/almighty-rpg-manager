<template>
  <q-layout view="lHh Lpr lFf">
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

        <q-toolbar-title shrink class="text-weight-bold">
          Almighty RPG Manager
        </q-toolbar-title>

        <q-space />

        <q-btn-dropdown flat round dense>
          <template v-slot:label>
            <img src="~assets/img/icon.png" style="height: 2em; max-width: 4em" />
          </template>
          <q-list>
            <q-item clickable to="/">
              <q-item-section>Home</q-item-section>
            </q-item>
            <q-item clickable to="/resources">
              <q-item-section>Resources</q-item-section>
            </q-item>
            <q-item clickable to="/generators">
              <q-item-section>Generators</q-item-section>
            </q-item>
            <q-item clickable @click="settings = true">
              <q-item-section>Settings</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable @click="dialog = true">
              <q-item-section>About</q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      elevated
      content-class="bg-dark"
    >
      <q-scroll-area class="fit">
        <q-list
          dark
          separator
          padding
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
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <q-page padding class="row justify-center">
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-8">
          <router-view />
        </div>
      </q-page>
    </q-page-container>

    <q-dialog v-model="dialog">
      <q-card>
        <q-card-section>
          <div class="text-h6">About</div>
        </q-card-section>
        <q-card-section class="q-pt-none">
          <about />
        </q-card-section>
        <q-card-actions align="right" class="bg-white text-teal">
          <q-btn flat label="Close" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <settings v-model="settings" />
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',
  components: {
    About: () => import('src/components/About.vue'),
    ItemLink: () => import('src/components/ItemLink.vue'),
    Settings: () => import('src/components/Settings.vue')
  },
  data () {
    return {
      leftDrawerOpen: false,
      dialog: false,
      settings: false,
      menu: [
        {
          title: 'Campaign',
          icon: 'game-icon:wax-tablet',
          submenu: [
            {
              title: 'Party',
              icon: 'game-icon:backup',
              link: '/party'
            },
            {
              title: 'Contacts',
              icon: 'game-icon:discussion',
              link: '/people'
            },
            {
              title: 'Sessions',
              icon: 'game-icon:gamepad',
              link: '/sessions'
            },
            {
              title: 'Notes',
              icon: 'game-icon:stabbed-note',
              link: '/notes'
            },
            {
              title: 'Inventory',
              icon: 'game-icon:backpack',
              link: '/inventory'
            }
          ]
        },
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
            },
            {
              title: 'Tech',
              icon: 'game-icon:processor',
              link: '/tech'
            }
          ]
        },
        {
          title: 'Monsters',
          icon: 'game-icon:fangs',
          link: '/monsters'
        },
        {
          title: 'Nations',
          icon: 'game-icon:tattered-banner',
          link: '/nations'
        },
        {
          title: 'Peoples',
          icon: 'game-icon:elf-ear',
          link: '/races'
        },
        {
          title: 'World',
          icon: 'game-icon:world',
          submenu: [
            {
              title: 'Animals',
              icon: 'game-icon:lion',
              link: '/ecology/animals'
            },
            {
              title: 'Botany',
              icon: 'game-icon:pear',
              link: '/ecology/plants'
            },
            {
              title: 'Cosmology',
              icon: 'game-icon:portal',
              link: '/cosmology/deities'
            },
            {
              title: 'Geography',
              icon: 'game-icon:island',
              link: '/ecology/regions'
            },
            {
              title: 'History',
              icon: 'game-icon:newspaper',
              link: '/history'
            },
            {
              title: 'Languages',
              icon: 'game-icon:talk',
              link: '/languages'
            },
            {
              title: 'Maps',
              icon: 'game-icon:treasure-map',
              link: 'maps'
            }
          ]
        },
        {
          title: 'Rules Reference',
          icon: 'game-icon:secret-book',
          link: '/reference'
        },
        {
          title: 'FAQ',
          icon: 'help',
          link: '/faq'
        }
      ]
    }
  }
}
</script>
