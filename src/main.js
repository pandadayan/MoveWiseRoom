import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import directives from './directives'
import { createPinia } from 'pinia'
import { Toast } from 'vant'
import 'vant/es/toast/style'
import 'lib-flexible/flexible.js'
// 引入全局样式
import '@/assets/scss/index.scss'

// console.log(('环境变量=>', import.meta.env))
const app = createApp(App)
const pinia = createPinia()
app.use(directives)
app.use(Toast)
app.use(pinia)
app.use(router)
app.mount('#app')
