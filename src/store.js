import Vue from 'vue'
import Vuex from 'vuex'

import init from '@/store/init'
import common from '@/store/common'
import user from '@/store/user'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    init,
    common,
    user
  }
})
