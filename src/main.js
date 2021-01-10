import Vue from 'vue'
import store from './store'
import ElementUI from 'element-ui';
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css';

import App from './App.vue'
import router from './router'

axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://47.102.219.253:8080/qmstore/'
Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
