
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'index', component: () => import('pages/Index.vue') },
      { path: 'character', name: 'character', component: () => import('pages/Character.vue') },
      { path: 'faq', name: 'faq', component: () => import('pages/Faq.vue') },
      { path: 'gear', name: 'gear', component: () => import('pages/Economy/Gear.vue') },
      { path: 'generators', name: 'generators', component: () => import('pages/Generators.vue') },
      { path: 'healing', name: 'healing', component: () => import('pages/Economy/Healing.vue') },
      { path: 'hirelings', name: 'hirelings', component: () => import('pages/Economy/Hirelings.vue') },
      { path: 'lifestyle', name: 'lifestyle', component: () => import('pages/Economy/Lifestyle.vue') },
      { path: 'notes', name: 'notes', component: () => import('pages/Campaign/Notes.vue') },
      { path: 'people', name: 'people', component: () => import('pages/Campaign/People.vue') },
      { path: 'races/:id', name: 'races', component: () => import('pages/Races.vue') },
      { path: 'reference', name: 'reference', component: () => import('pages/ReferenceList.vue') },
      { path: 'resources', name: 'resources', component: () => import('pages/Resources.vue') },
      { path: 'sessions', name: 'sessions', component: () => import('pages/Campaign/Sessions.vue') },
      { path: 'world', name: 'world', component: () => import('pages/World.vue') }
    ]
  }
]

// Always leave this as last one
routes.push({
  path: '*',
  component: () => import('pages/Error404.vue')
})

export default routes
