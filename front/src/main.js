import Vue from 'vue'
import './plugins/vuetify'
import './plugins/vue-moment'

import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'

Vue.config.productionTip = false

Vue.http = Vue.prototype.$http = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
