import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


import './assets/css/reset.css'
Vue.config.productionTip = false
// Vue.prototype.$ajax = axios
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
