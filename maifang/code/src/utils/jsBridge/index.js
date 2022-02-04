import nativeListener from './nativeListener'
import { nativeDispatcher } from './nativeDispatcher'

let jsBridgePlugin = {}

jsBridgePlugin.install = function(Vue, options) {
  window.messageHandlerJS = nativeListener
  // Vue.prototype._nativeDispatcher = {}
  window._nativeDispatcher = Vue.prototype._nativeDispatcher = nativeDispatcher
}

export default jsBridgePlugin
