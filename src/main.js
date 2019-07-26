// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import '@/common/css/reset.css'
import '@/common/css/base.css'

import imgDialogPlugin from '@/plugins/imgDialog'
import notice from '@/plugins/notice'

import VueParticles from 'vue-particles'

Vue.use(VueParticles)
Vue.use(imgDialogPlugin)
Vue.use(notice)


Vue.config.productionTip = false // 线上改为true
Vue.config.debug = false // 开启debug模式

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
