import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import axios from 'axios'
axios.defaults.baseURL="http://192.168.3.188:7001/"
//允许浏览器请求时携带cookie
axios.defaults.withCredentials=true

Vue.prototype.$axios=axios

// function myxx () {
// 	console.log(66661111)
// 	var x=200
// 	// console.log(this)
// 	Vue.prototype.$x=x
// }
// Vue.use(myxx)
Vue.use(ElementUI);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
