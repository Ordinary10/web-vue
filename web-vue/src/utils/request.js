import store from '../store'
import axios from 'axios'
import qs from 'qs'
import { Message } from 'iview'
const loginData = JSON.parse(window.sessionStorage.getItem('loginData')) || ''
// 创建axios实例
const service = axios.create({
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
    'Accept': '*/*'
  },
  baseURL: 'http://test.c.zdxrchina.com/index/index', // api的base_url
  timeout: 15000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(config => {
  return config
}, error => {
  console.log(error)
  return Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => {
    /* res.status不为1直接错误提示 */
    const res = response.data
    if (res.status === 1) {
      return res
    } else if (res.status === -998) {
      Message.error({
        content: res.msg,
        duration: 3
      })
      store.commit('LOGIN_OUT').then(() => {
        location.reload()// 为了重新实例化vue-router对象 避免bug
      })
    }
  },
  error => {
    console.log('err' + error)// for debug
    Message.error({
      content: error.message,
      duration: 3
    })
    return Promise.reject(error)
  }
)

function request (fun, data) {
  console.log(window.sessionStorage.getItem('loginData'))
  let params = {}
  params['fun'] = fun
  params['params'] = data
  params['token'] = loginData.token || ''
  return service({
    'method': 'post',
    'data': qs.stringify(params)
  })
}

export default request
