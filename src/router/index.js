import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/overview',
    name: 'overview',
    component: () => import('../views/overview/index.vue')
  },
  {
    path: '/map',
    name: 'map',
    component: () => import('../views/map/index.vue')
  },
  {
    path: '/scheduling',
    name: 'scheduling',
    component: () => import('../views/scheduling/index.vue')
  },
  {
    path: '/financials',
    name: 'financials',
    component: () => import('../views/financials/index.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
