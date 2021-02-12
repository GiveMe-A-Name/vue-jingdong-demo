import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '@/views/Login'
import AppHome from '@/views/HomePages/AppHome.vue'
import HomePage from '@/views/HomePages/Home'

//  component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter(to, from, next) {
      const isLogin = localStorage.isLogin
      isLogin ? next({ name: 'HomePage' }) : next()
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "register" */ '@/views/Register')
  },
  {
    path: '/shopinfo/:_id',
    name: 'ShopInfo',
    component: () => import(/* webpackChunkName: "shopInfo" */ '@/views/ShopInfo'),
    props: (route) => ({ _id: route.params._id })
  },
  {
    path: '/',
    name: 'AppHome',
    component: AppHome,
    children: [
      {
        path: '',
        name: 'HomePage',
        component: HomePage
      },
      {
        path: 'shoppingcar',
        name: 'ShoppingCar',
        component: () => import(/* webpackChunkName: "shoppingCar" */ '@/views/HomePages/ShoppingCar')
      },
      {
        path: 'order',
        name: 'OrderPage',
        component: () => import(/* webpackChunkName: "orderPage" */ '@/views/HomePages/OrderPage')
      },
      {
        path: 'mypage',
        name: 'MyPage',
        component: () => import(/* webpackChunkName: "myPage" */ '@/views/HomePages/MyPage')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

/*
router.beforeEach((to, from, next) => {
  const isLogin = localStorage.isLogin
  if (isLogin || to.name === 'Login' || to.name === 'Register') {
    next()
  } else {
    next({ name: 'Login' })
  }
})
*/
export default router
