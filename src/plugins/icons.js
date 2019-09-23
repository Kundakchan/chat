import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faSignOutAlt,
  faCommentDots,
  faEnvelope,
  faLock,
  faUser,
  faComment,
  faScroll,
  faVideo,
  faUserFriends,
  faCamera
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add([
  faSignOutAlt,
  faCommentDots,
  faEnvelope,
  faLock,
  faUser,
  faComment,
  faScroll,
  faVideo,
  faUserFriends,
  faCamera
])
Vue.component('icon', FontAwesomeIcon)
