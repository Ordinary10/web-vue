import axios from 'axios'
import { Message } from 'iview'

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
    if (res.status !== 1) {
      Message.error({
        content: res.msg,
        duration: 3
      })
    }
    return res
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
  let params = {}
  params['fun'] = fun
  params['params'] = data
  return service({
    method: 'post',
    params
  })
}

export default request
