import Vue from 'vue'
import Vuex from 'vuex'

// import nimInstance from './chat/modules/nimInstance'

import index from './modules/index'
import keepAlive from './modules/keepAlive'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    // nimInstance,
    index,
    keepAlive
  }
})

export default store
