import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'

import './plugins/icons'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  created () {
    this.$store.dispatch('INIT')
  },
  render: h => h(App)
}).$mount('#app')
