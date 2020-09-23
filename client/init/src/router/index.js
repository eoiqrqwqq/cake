import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'



Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [{
      path: '/aroundcity',
      name: 'aroundcity',
      component: () => import('../views/aroundcity.vue'),
      children: [{
          path: "/aroundbread",
          name: "aroundbread",
          component: () => import("@/views/aroundcity-views/aroundbread.vue")
        },
        {
          path: "/aroundcake",
          name: "aroundcake",
          component: () => import("@/views/aroundcity-views/aroundcake.vue")
        },
        {
          path: "/aroundcoffee",
          name: "aroundcoffee",
          component: () => import("@/views/aroundcity-views/aroundcoffee.vue")
        },
        {
          path: "/aroundnut",
          name: "aroundnut",
          component: () => import("@/views/aroundcity-views/aroundnut.vue")
        }
      ]
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
      component: () => import('../views/business.vue'),
    },
    {
      path: '/godingzhi',
      name: 'godingzhi',
      component: () => import('../views/godingzhi.vue'),
    },
    {
      path: '/bread1',
      name: 'bread1',
      component: () => import('../views/aroundcity-views/good-vue/bread1.vue')
    },
  ]
})

export default router