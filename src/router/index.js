import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'login-component',
    component: () => import('../views/LoginComponent.vue')
  },
  {
    path: '/cadastro',
    name:'cadastro-component',
    component: () => import('../views/CadastroComponent.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
