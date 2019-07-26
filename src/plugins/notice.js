import 'animate.css'
import '@/nativePlugins/Notice'
import '@/nativePlugins/Notice/index.css'

export default {
  install(Vue) {
    Vue.prototype.$NoticeJsHandle = function (text = '暂无地址', type = 'error') {
      // 一直没搞懂有时候不能用es6的引入
      new window.NoticeJs({
        text: text,
        position: 'topRight',
        type,
        animation: {
          open: 'animated bounceInRight',
          close: 'animated zoomOut'
        }
      }).show()
    }
  }
}