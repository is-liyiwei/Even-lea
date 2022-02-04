// 兼容 IE
// https://github.com/zloirock/core-js/blob/master/docs/2019-03-19-core-js-3-babel-and-a-look-into-the-future.md#babelpolyfill
// import 'core-js/stable'
// import 'regenerator-runtime/runtime'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 全局引入按需引入UI库 vant
import './vant.js'

// 移动端适配
import 'lib-flexible/flexible.js'

import 'normalize.css'

import './scss/index.scss'

import '@/icons'

import appPlugin from './pluginCommon'
// import jsBridgePlugin from '@/utils/jsBridge';

// https://github.com/kazupon/vue-i18n
import VueI18n from 'vue-i18n'
import messages from '@/i18n/instance.js'

// 有赞支持英语
// import { Locale } from 'vant';
// import enUS from 'vant/lib/locale/lang/en-US';
// setTimeout(() => {
//   Locale.use('en-US', enUS);
// }, 3000)

import * as YhcAjax from '@/ajax/YhcAjax/index'
Vue.prototype.YhcAjax = YhcAjax

Vue.use(appPlugin)
// Vue.use(jsBridgePlugin)
Vue.use(VueI18n)

Vue.config.productionTip = false

const i18n = new VueI18n({
  locale: 'zh', // 语言标识
  messages
})

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App)
})
