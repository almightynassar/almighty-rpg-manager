
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'gear-list', component: () => import('pages/GearList.vue') },
      { path: 'reference', component: () => import('pages/ReferenceList.vue') },
      { path: 'name-generator', component: () => import('pages/NameGenerator.vue') },
      { path: 'settings', component: () => import('pages/Settings.vue') }
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
