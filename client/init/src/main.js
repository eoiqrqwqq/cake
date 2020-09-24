import Vue from 'vue'
import App from './App.vue'
<<<<<<< HEAD
// import $ from 'jquery'
=======
>>>>>>> 7d100fdda81a0eebea475904b000e942c7b49c65
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import iconfont from './assets/iconfont/iconfont.css'
axios.defaults.baseURL = "http://127.0.0.1:7001/"
//允许浏览器请求时携带cookie
axios.defaults.withCredentials = true
Vue.use(ElementUI)
Vue.prototype.$axios = axios

// function myxx () {
// 	console.log(66661111)
// 	var x=200
// 	// console.log(this)
// 	Vue.prototype.$x=x
// }
// Vue.use(myxx)
Vue.use(ElementUI);

<<<<<<< HEAD
import goodmodule from "./components/wang-component/goodmodule.vue"
import goodmasg from "./components/wang-component/goodmasg.vue"
Vue.component("goodmasg",goodmasg)
Vue.component("goodmodule",goodmodule)
=======
>>>>>>> 7d100fdda81a0eebea475904b000e942c7b49c65

new Vue({
	router,
	render: h => h(App),
}).$mount('#app')
