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
  },
  {
    path: '/loads',
    name: 'loads',
    component: () => import('../views/loads/index.vue')
  },
  {
    path: '/add-load',
    name: 'add-load',
    component: () => import('../views/add-load/index.vue')
  },
  {
    path: '/view-load',
    name: 'view-load',
    component: () => import('../views/view-load/index.vue')
  },
  {
    path: '/fleet-data',
    name: 'fleet-data',
    redirect: 'fleet-data/brokers'
  },


  {
    path: '/fleet-data/brokers',
    name: 'brokers',
    component: () => import('../views/fleet-data/brokers/brokers.vue')
  },
  {
    path: '/fleet-data/brokers/history',
    name: 'brokers-history',
    component: () => import('../views/fleet-data/brokers/brokers-history.vue')
  },
  {
    path: '/fleet-data/brokers/detail',
    name: 'brokers-detail',
    component: () => import('../views/fleet-data/brokers/brokers-detail.vue')
  },
  {
    path: '/fleet-data/brokers/add',
    name: 'brokers-add',
    component: () => import('../views/fleet-data/brokers/brokers-add.vue')
  },



  {
    path: '/fleet-data/shippers',
    name: 'shippers',
    component: () => import('../views/fleet-data/shippers/shippers.vue')
  },
  {
    path: '/fleet-data/shippers/history',
    name: 'shippers-history',
    component: () => import('../views/fleet-data/shippers/shippers-history.vue')
  },
  {
    path: '/fleet-data/shippers/detail',
    name: 'shippers-detail',
    component: () => import('../views/fleet-data/shippers/shippers-detail.vue')
  },
  {
    path: '/fleet-data/shippers/add',
    name: 'shippers-add',
    component: () => import('../views/fleet-data/shippers/shippers-add.vue')
  },



  {
    path: '/fleet-data/drivers',
    name: 'drivers',
    component: () => import('../views/fleet-data/drivers/drivers.vue')
  },
  {
    path: '/fleet-data/drivers/history',
    name: 'drivers-history',
    component: () => import('../views/fleet-data/drivers/drivers-history.vue')
  },
  {
    path: '/fleet-data/drivers/logs',
    name: 'drivers-logs',
    component: () => import('../views/fleet-data/drivers/drivers-logs.vue')
  },
  {
    path: '/fleet-data/drivers/detail',
    name: 'drivers-detail',
    component: () => import('../views/fleet-data/drivers/drivers-detail.vue')
  },
  {
    path: '/fleet-data/drivers/add',
    name: 'drivers-add',
    component: () => import('../views/fleet-data/drivers/drivers-add.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
