import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'



Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes:[
  {
    path: '/aroundcity',
    name: 'aroundcity',
    component: () => import('../views/aroundcity.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/home.vue')
  },
  {
    path: '/cake',
    name: 'cake',
    component: () => import('../views/cake.vue')
  },
  {
    path: '/bread',
    name: 'bread',
    component: () => import('../views/bread.vue')
  },
  {
    path: '/ice',
    name: 'ice',
    component: () => import('../views/ice.vue')
  },
  {
    path: '/coffice',
    name: 'coffice',
    component: () => import('../views/coffice.vue')
  },
  {
    path: '/business',
    name: 'business',
    component: () => import('../views/business.vue')
  },
]
})

export default router
