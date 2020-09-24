import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [{
    path: '/aroundcity',
    name: 'aroundcity',
	redirect:"/aroundcity/aroundbread",
    component: () => import('../views/aroundcity.vue'),
<<<<<<< HEAD
	children:[
		{
			path:"/aroundcity/aroundbread",
			name:"aroundbread",
			component: () => import("@/views/aroundcity-views/aroundbread.vue")
		},
		{
			path:"/aroundcity/aroundcake",
			name:"aroundcake",
			component: () => import("@/views/aroundcity-views/aroundcake.vue")
		},
		{
			path:"/aroundcity/aroundcoffee",
			name:"aroundcoffee",
			component: () => import("@/views/aroundcity-views/aroundcoffee.vue")
		},
		{
			path:"/aroundcity/aroundnut",
			name:"aroundnut",
			component: () => import("@/views/aroundcity-views/aroundnut.vue")
		},
	]
=======
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
>>>>>>> 7d100fdda81a0eebea475904b000e942c7b49c65
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/home.vue')
  },
  {
    path: '/1',
    name: '1',
    component: () => import("@/views/home/1.vue")
  },
  {
    path: '/2',
    name: '2',
    component: () => import("@/views/home/2.vue")
  },
  {
    path: '/3',
    name: '3',
    component: () => import("@/views/home/3.vue")
  },
  {
    path: '/4',
    name: '4',
    component: () => import("@/views/home/4.vue")
  },
  {
    path: '/5',
    name: '5',
    component: () => import("@/views/home/5.vue")
  },
  {
    path: '/newproduct',
    name: 'newproduct',
    component: () => import("@/views/home/newproductqu.vue")
  },
  {
    path: '/birthday',
    name: 'birthday',
    component: () => import("@/views/home/birthdayqu.vue")
  },
  {
    path: '/children',
    name: 'children',
    component: () => import("@/views/home/childrenqu.vue")
  },
  {
    path: '/meeting',
    name: 'meeting',
    component: () => import("@/views/home/meetingqu.vue")
  },
  {
    path: '/dodgegate',
    name: 'dodgegate',
    component: () => import("@/views/home/dodgegatequ.vue")
  },
  {
    path: '/wintertime',
    name: 'wintertime',
    component: () => import("@/views/home/wintertime.vue")
  },
  {
    path: '/autumntime',
    name: 'autumntime',
    component: () => import("@/views/home/autumntime.vue")
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
  {
    path: '/bread1',
    name: 'bread1',
    component: () => import('../views/aroundcity-views/good-vue/bread1.vue')
  },
  {
<<<<<<< HEAD
    path: '/cake1',
    name: 'cake1',
    component: () => import('../views/aroundcity-views/good-vue/cake1.vue')
  },
  {
    path: '/cake2',
    name: 'cake2',
    component: () => import('../views/aroundcity-views/good-vue/cake2.vue')
  },
  {
    path: '/coffee1',
    name: 'coffee1',
    component: () => import('../views/aroundcity-views/good-vue/coffee1.vue')
  },
  {
    path: '/coffee2',
    name: 'coffee2',
    component: () => import('../views/aroundcity-views/good-vue/coffee2.vue')
  },
  {
    path: '/coffee3',
    name: 'coffee3',
    component: () => import('../views/aroundcity-views/good-vue/coffee3.vue')
  },
  {
    path: '/coffee4',
    name: 'coffee4',
    component: () => import('../views/aroundcity-views/good-vue/coffee4.vue')
  },
  {
    path: '/coffee5',
    name: 'coffee5',
    component: () => import('../views/aroundcity-views/good-vue/coffee5.vue')
  },
  {
    path: '/coffee6',
    name: 'coffee6',
    component: () => import('../views/aroundcity-views/good-vue/coffee6.vue')
  },
  {
    path: '/nut1',
    name: 'nut1',
    component: () => import('../views/aroundcity-views/good-vue/nut1.vue')
  },
  {
    path: '/nut2',
    name: 'nut2',
    component: () => import('../views/aroundcity-views/good-vue/nut2.vue')
  },
]
=======
    path: '/login',
    name: 'Login',
    component: () => import("@/views/login/login.vue")
  },
  {
    path: '/register',
    name: 'Register',
    // component: ()=>
    component: () => import("@/views/login/register.vue")
  },
  {
    path: '/resetpwd',
    name: 'Resetpwd',
    component: () => import("@/views/login/resetpwd.vue"),
  },
  {
    path: '/userinfo',
    name: 'Userinfo',
    component: () => import("@/views/login/userinfo/userinfo.vue"),
  },
  {
    path: '/editinfo',
    name: 'editinfo',
    component: () => import("@/views/login/userinfo/editinfo.vue"),
  },
  {
    path: '/useraddress',
    name: 'useraddress',
    component: () => import("@/views/login/userinfo/useraddress.vue"),
  },
  ],
>>>>>>> 7d100fdda81a0eebea475904b000e942c7b49c65
})

export default router