import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.directive('anchor',{
  inserted:function (el) {
      el.onclick = function(){
          document.documentElement.scrollTop || document.body.scrollTop;
          document.documentElement.scrollTop = document.body.scrollTop = 0;
      };
  }
})

import './assets/css/reset.css'
import './assets/css/aliconfont.css'
Vue.config.productionTip = false
Vue.prototype.$ajax = axios
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
