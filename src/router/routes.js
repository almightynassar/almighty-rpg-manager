
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'index', component: () => import('pages/Index.vue') },
      { path: 'cosmology/:id', name: 'cosmology', component: () => import('pages/Cosmology.vue') },
      { path: 'ecology/:id', name: 'ecology', component: () => import('pages/Ecology.vue') },
      { path: 'faq', name: 'faq', component: () => import('pages/Faq.vue') },
      { path: 'gear', name: 'gear', component: () => import('pages/Economy/Gear.vue') },
      { path: 'generators', name: 'generators', component: () => import('pages/Generators.vue') },
      { path: 'healing', name: 'healing', component: () => import('pages/Economy/Healing.vue') },
      { path: 'hex', name: 'hex', component: () => import('pages/Hex.vue') },
      { path: 'hirelings', name: 'hirelings', component: () => import('pages/Economy/Hirelings.vue') },
      { path: 'history', name: 'history', component: () => import('pages/History.vue') },
      { path: 'languages', name: 'languages', component: () => import('pages/Languages.vue') },
      { path: 'lifestyle', name: 'lifestyle', component: () => import('pages/Economy/Lifestyle.vue') },
      { path: 'maps', name: 'maps', component: () => import('pages/Maps.vue') },
      { path: 'monsters/:id', names: 'monsters', component: () => import('pages/Monsters.vue') },
      { path: 'nations/:id', name: 'nations', component: () => import('pages/Nations.vue') },
      { path: 'notes', name: 'notes', component: () => import('pages/Campaign/Notes.vue') },
      { path: 'people', name: 'people', component: () => import('pages/Campaign/People.vue') },
      { path: 'races/:id', name: 'races', component: () => import('pages/Races.vue') },
      { path: 'reference', name: 'reference', component: () => import('pages/ReferenceList.vue') },
      { path: 'resources', name: 'resources', component: () => import('pages/Resources.vue') },
      { path: 'sessions', name: 'sessions', component: () => import('pages/Campaign/Sessions.vue') }
    ]
  }
]

// Always leave this as last one
routes.push({
  path: '*',
  component: () => import('pages/Error404.vue')
})

export default routes
