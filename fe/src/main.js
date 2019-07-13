import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

import 'chart.js'
import 'hchs-vue-charts'
import Chartkick from 'chartkick'
import VueChartkick from 'vue-chartkick'
import VueSession from 'vue-session'

Vue.prototype.$http = axios

Vue.use(window.VueCharts)
Vue.use(VueChartkick, { Chartkick })
Vue.use(VueSession)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
