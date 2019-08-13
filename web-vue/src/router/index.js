import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/pages/common/layout/index'
import Home from '@/pages/common/home/index'
import NotFound from '@/pages/common/errorPage/404'
import Forbidden from '@/pages/common/errorPage/403'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/pages/common/login/index')
      // component: Layout
    }
  ]
})

export const DynamicRoutes = [
  {
    path: '',
    component: Layout,
    name: 'container',
    redirect: 'home',
    meta: {
      requiresAuth: true,
      name: '首页'
    },
    children: [
      {
        path: 'home',
        component: Home,
        name: 'home',
        meta: {
          name: '首页',
          icon: 'icon-home'
        }
      }
    ]
  },
  {
    path: '/403',
    component: Forbidden
  },
  {
    path: '*',
    component: NotFound
  }
]
