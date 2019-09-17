import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import firebase from 'firebase/app'
import confFirebase from '@/config/firebase'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'

import './plugins/icons'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  create () {
    firebase.initializeApp(confFirebase)
  },
  render: h => h(App)
}).$mount('#app')
