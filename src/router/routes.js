
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'formacoes',  component: () =>  import('pages/Formacoes.vue')},   
      { path: 'atividades', component: () => import('pages/Atividades.vue')},
      { path: 'usuario', component: () => import('pages/Usuarios.vue')}
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
