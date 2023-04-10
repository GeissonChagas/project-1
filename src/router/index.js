import { createRouter, createWebHashHistory } from 'vue-router'
import CadastroComponent from '../views/CadastroComponent.vue'

const routes = [
  {
    path: '/cadastro',
    component: CadastroComponent
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
