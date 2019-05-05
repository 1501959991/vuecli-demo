import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './stores'
import axios from 'axios'

Vue.prototype.axios = axios;  // 全局注册原型属性
Vue.config.productionTip = false;

// 定义一个 全局过滤
Vue.filter('glFilter',(url,tag)=>{ // url 为要过滤的 参数 第一个参数为要过滤的 参数
   return url.replace(/w\.h/,tag)
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
