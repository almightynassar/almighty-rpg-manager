
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'character', component: () => import('pages/Character.vue') },
      { path: 'reference', component: () => import('pages/ReferenceList.vue') },
      { path: 'name-generator', component: () => import('pages/NameGenerator.vue') },
      { path: 'settings', component: () => import('pages/Settings.vue') },
      { path: 'shopping', component: () => import('pages/Shopping.vue') },
      { path: 'world', component: () => import('pages/World.vue') }
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
