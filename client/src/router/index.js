import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/form',
    name: 'Form',
    component: () => import(/* webpackChunkName: "about" */ '../views/Form.vue')
  },
  {
    path: "/:catchAll(.*)",
    name: "Home",
    component: Home,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
