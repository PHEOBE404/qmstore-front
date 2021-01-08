import Vue from 'vue'
import store from './store'
import ElementUI from 'element-ui';
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css';

import App from './App.vue'
import router from './router'

axios.defaults.withCredentials = true
Vue.config.productionTip = false
Vue.use(ElementUI, axios);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
