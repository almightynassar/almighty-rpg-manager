
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'index', component: () => import('pages/Index.vue') },
      { path: 'campaign', name: 'campaign', component: () => import('pages/Campaign.vue') },
      { path: 'character', name: 'character', component: () => import('pages/Character.vue') },
      { path: 'gear', name: 'gear', component: () => import('pages/Gear.vue') },
      { path: 'healing', name: 'healing', component: () => import('pages/Healing.vue') },
      { path: 'hirelings', name: 'hirelings', component: () => import('pages/Hirelings.vue') },
      { path: 'lifestyle', name: 'lifestyle', component: () => import('pages/Lifestyle.vue') },
      { path: 'reference', name: 'reference', component: () => import('pages/ReferenceList.vue') },
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
