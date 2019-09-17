import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSignOutAlt, faCommentDots } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add([
  faSignOutAlt,
  faCommentDots
])
Vue.component('icon', FontAwesomeIcon)
