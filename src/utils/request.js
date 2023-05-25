import axios from 'axios'
import { baseURL } from '@/config'
import { useRouter } from 'vue-router'
import { showFailToast } from 'vant'
const router = useRouter()
const TOKEN_INVALID = 'Token认证失败，请重新登录'
const NETWORK_ERROR = '网络异常，请稍后重试'
const service = axios.create({
  baseURL,
  withCredentials: true,
  headers: {
    'X-Requested-With': 'XMLHttpRequest'
  }
//   timeout: 20000 // 超时时间
})

/**
 * @description: 请求拦截器
 */
service.interceptors.request.use(
  (req) => {
    if (req.headers && !req.headers.Authorization) {
      req.headers.Authorization = sessionStorage.getItem(
        'access_token'
      )
    }
    return req
  },
  (error) => Promise.reject(error)
)

/**
 * @description: 响应拦截器
 */
service.interceptors.response.use(
  (res) => {
    const { code, data, msg } = res.data
    if (code === 0) {
      return data
    } else if (code === 401) {
      showFailToast(TOKEN_INVALID)
      setTimeout(() => {
        router.push('/login')
      }, 1500)
      return Promise.reject(TOKEN_INVALID)
    } else {
      showFailToast(msg || NETWORK_ERROR)
      return Promise.reject(msg || NETWORK_ERROR)
    }
  }
  /* (error) => {
    handleHttpError(error)
    // eslint-disable-next-line prefer-promise-reject-errors
    return Promise.reject(null)
  } */
)

/**
 * 请求核心函数
 * @param {*} options 请求配置
 */
function request (options) {
  options.method = options.method || 'get'
  if (options.method.toLowerCase() === 'get') {
    options.params = options.data
  }
  return service(options)
}

['get', 'post', 'put', 'delete', 'patch'].forEach((item) => {
  request[item] = (url, data, options) => {
    return request({
      url,
      data,
      method: item,
      ...options
    })
  }
})

export default request
