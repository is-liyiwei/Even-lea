// import 'animate.css';
// 这里把源码的一些方法拿出来，源码56.8kb大小，这里才3kb大小，GitHub上面网速
// 太差了，尽可能的优化
import './mock_animate.css';
import '@/nativePlugins/Notice';
import '@/nativePlugins/Notice/index.css';

export default {
  install(Vue) {
    Vue.prototype.$NoticeJsHandle = function(
      text = '暂无地址',
      type = 'error'
    ) {
      // 一直没搞懂有时候不能用es6的引入
      new window.NoticeJs({
        text: text,
        position: 'topRight',
        type,
        animation: {
          open: 'animated bounceInRight',
          close: 'animated zoomOut'
        }
      }).show();
    };
  }
};
