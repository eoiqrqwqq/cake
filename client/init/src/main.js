import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import iconfont from '../public/iconfont/iconfont.css'
axios.defaults.baseURL = "http://127.0.0.1:7001/"
//允许浏览器请求时携带cookie
axios.defaults.withCredentials = true
Vue.use(ElementUI)
Vue.prototype.$axios = axios

new Vue({
	router,
	render: h => h(App),
}).$mount('#app')
