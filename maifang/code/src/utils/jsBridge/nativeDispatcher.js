import Device from './device'

function getString(obj) {
  if (typeof obj === 'object') {
    obj.funcType = 'webCallNative'
    const _obj = JSON.stringify(obj)
    return _obj
  } else {
    return obj || {}
  }
}

const methods = [
  'makeCall',
  'getLocation',
  'openMap',
  'showPageNew',
  'finishPage',
  'getAppCache',
  'cleanAppCache',
  'chooseMedia',
  'logout',
  'share',
  'openNativePage'
]

const _nativeDispatcher = {}

methods.forEach(method => {
  _nativeDispatcher[method] = function(obj = {}) {
    try {
      const _obj = getString(obj)
      if (Device.ios) {
        console.log('ios')
        console.log('调用方法名字：' + method)
        console.log('调用方法参数：' + _obj)
        console.log('调用方法参数：' + JSON.stringify(_obj, null, 2))
        window.webkit.messageHandlers[method].postMessage(_obj)
      }
      if (Device.android) {
        console.log('android')
        console.log('调用方法名字：' + method)
        console.log('调用方法参数：' + _obj)
        console.log('调用方法参数：' + JSON.stringify(_obj, null, 2))
        window.messageHandlers[method](_obj)
      }
    } catch (error) {
      console.log('error')
      console.log(error)
    }
  }
})

export const nativeDispatcher = _nativeDispatcher
