/**
 * 环境配置
*/

let baseURL = 'http://192.168.1.110:8091/sl-wise-gateway' // 生产环境
// let baseURL = 'http://192.168.1.152:8091/sl-wise-gateway' // 生产环境
let staticUrl = 'http://192.168.1.110/wiseroom_static_resources' // 静态资源

if (process.env.NODE_ENV !== 'development') {
  baseURL = window.gurl.baseURL
  staticUrl = window.gurl.staticUrl
}
export { baseURL, staticUrl }
