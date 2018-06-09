import Vue from 'vue'
import App from './App.vue'

// 모듈 임포트

// axios
import axios from 'axios'
// vue-session
import VueSession from 'vue-session'
//import { VueEditor } from 'vue2-editor'

// 라우터
import router from './router'

Vue.config.productionTip = false;

// axios 사용
Vue.prototype.$http = axios;
Vue.use(VueSession);

// Vue 객체 정의
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
