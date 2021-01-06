
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'index', component: () => import('pages/Index.vue') },
      { path: 'character', name: 'character', component: () => import('pages/Character.vue') },
      { path: 'reference', name: 'reference', component: () => import('pages/ReferenceList.vue') },
      { path: 'shopping', name: 'shopping', component: () => import('pages/Shopping.vue') },
      { path: 'gear', name: 'gear', component: () => import('pages/Tabs/GearList.vue') },
      { path: 'hirelings', name: 'hirelings', component: () => import('pages/Tabs/Hirelings.vue') },
      { path: 'services', name: 'services', component: () => import('pages/Tabs/ServiceList.vue') },
      { path: 'world', name: 'world', component: () => import('pages/World.vue') },
      { path: 'campaign', name: 'campaign', component: () => import('pages/Campaign.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
