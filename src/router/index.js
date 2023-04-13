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
  },
  {
    path: '/redefinir-senha',
    name:'redefinir-senha',
    component: () => import('../views/RedefinirSenha.vue')
  },
  {
    path: '/app',
    name:'app',
    component: () => import('../views/AppPrincipal.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
