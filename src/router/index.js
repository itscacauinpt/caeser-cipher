import { createRouter, createWebHistory } from 'vue-router'
import EncodeView from '../views/EncodeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'encode',
      component: EncodeView
    },
    {
      path: '/decode',
      name: 'decode',
      component: () => import('../views/DecodeView.vue')
    }
  ]
})

export default router
