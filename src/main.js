// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import request from './utils/request'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import common from './utils/common'
// 全局样式表
import './assets/index.scss'
// 全局过滤器
import filters from './utils/global_filter'
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
// 原型上注册请求方法
Vue.prototype.$axios = request
// 原型上注册全局方法对象
Vue.prototype.$common = common
Vue.use(iView)
Vue.config.productionTip = false
/* eslint-disable no-new */
router.beforeEach((to, from, next) => {
  if (!store.state.UserToken) {
    if (
      to.matched.length > 0 &&
      !to.matched.some(record => record.meta.requiresAuth)
    ) {
      next()
    } else {
      next({ path: '/login' })
    }
  } else {
    if (!store.state.permission.permissionList) {
      store.dispatch('permission/FETCH_PERMISSION').then(() => {
        next({ path: to.path })
      })
    } else {
      if (to.path !== '/login') {
        next()
      } else {
        next(from.fullPath)
      }
    }
  }
})

router.afterEach((to, from, next) => {
  var routerList = to.matched
  store.commit('setCrumbList', routerList)
  store.commit('permission/SET_CURRENT_MENU', to.name)
})
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
