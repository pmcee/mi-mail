import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'

// 根据前端的跨域方式做调整-接口代理方式
axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000;
// 接口错误拦截
axios.interceptor.response.use(function(response) {
  let res = response.data;
  if (res.status == 0) { // 成功
    return res.data;
  } else if(res.status == 10) { // 未登录
    window.location.href = '/#/login';
  } else {
    alert(res.msg);
  }
});

Vue.use(VueAxios, axios);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
