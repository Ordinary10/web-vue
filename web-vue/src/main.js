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
import './styles/index.scss'
Vue.use(iView)
// 原型上注册请求方法
Vue.prototype.$axios = request
// 原型上注册全局方法
Vue.prototype.$common = common
// 原型上绑定base_url,用于某些页面的静态资源访问
Vue.prototype.API_PATH = 'http://test.c.zdxrchina.com/index/index'

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
