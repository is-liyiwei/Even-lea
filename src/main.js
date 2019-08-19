// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

import 'lib-flexible/flexible';

import '@/common/css/reset.css';
import '@/common/css/base.css';

// import 'vant/lib/index.css';
// import Vant from 'vant';
// Vue.use(Vant);

// 组件按需引入
import Collapse from 'vant/lib/collapse';
import CollapseItem from 'vant/lib/collapse-item';
import 'vant/lib/style/base.less';
import 'vant/lib/collapse-item/index.less';

Vue.use(Collapse);
Vue.use(CollapseItem);

import imgDialogPlugin from '@/plugins/imgDialog';
import notice from '@/plugins/notice';

import VueParticles from 'vue-particles';

Vue.use(VueParticles);
Vue.use(imgDialogPlugin);
Vue.use(notice);

Vue.config.productionTip = true; // 线上改为true
Vue.config.debug = false; // 开启debug模式

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
