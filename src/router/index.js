import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/main',
      name: 'Main',
      component: () => import('@/pages/main/index')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/pages/login/index')
    },
    {
      path: '*',
      redirect: '/main'
    }
  ]
})
