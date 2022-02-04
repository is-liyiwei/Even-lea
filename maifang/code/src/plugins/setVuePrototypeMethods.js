import { Toast, Notify } from 'vant'
import { isArray } from 'lodash'

import fixMoney from '@/utils/fixMoney'
import parseTime from '@/utils/parseTime'
import validationData from '@/utils/validationData'

// import { isDdPlatform } from '@/dingdingSdk'

import Device from '@/utils/jsBridge/device'

window.appToastInstance = null
window.appLoadingInstance = null

let setVuePrototypeMethods = {}
setVuePrototypeMethods.install = function (Vue, options) {
  // 设置toast为loading默认值
  Toast.setDefaultOptions({
    type: 'loading'
  })

  // 是否为公众号环境，是否开启获取微信登录
  Vue.prototype.appWxPublicRuntime = window.appWxPublicRuntime = false
  // appWxPublicRuntime为true时候必须要配置appWxPublicAppid
  Vue.prototype.appWxPublicAppid = window.appWxPublicAppid = ''
  // 是否为本地开发环境
  Vue.prototype.appIsDev = window.appIsDev = window.location.origin.indexOf('192.') == -1
  // 设备系统信息
  Vue.prototype.appSysInfo = window.appSysInfo = {
    isIos: Device.ios,
    isAndroid: Device.android,
    isDesktop: Device.desktop,
    // ios / android / windows
    os: Device.os,
    // x.x.x
    osVersion: Device.osVersion
  }

  // 是否为钉钉环境
  // Vue.prototype.appIsDdPlatform = window.appIsDdPlatform = isDdPlatform()

  // 把自己的mediaModel格式变成vant的格式
  // {
  //   // 这个key是vant专用的
  //   url: url,
  //   frameUrl: url,
  //   mediaUrl: url,
  //   type: 'Image',
  //   isImage: true
  // }
  Vue.prototype.appToVantMediaModel = window.appToVantMediaModel = function (arr) {
    if (!isArray(arr)) {
      arr.url = arr.frameUrl
      arr.isImage = true
    } else {
      for (let index = 0; index < arr.length; index++) {
        const element = arr[index]
        element.url = element.frameUrl
        element.isImage = true
      }
    }
    return arr
  }

  Vue.prototype.appImageFileToBase64 = window.appImageFileToBase64 = function (file) {
    window.appShowLoading()
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = event => {
        window.appHideLoading()
        resolve(event.target.result)
      }
      reader.readAsDataURL(file)
    })
  }

  // 需要引入微信sdk
  Vue.prototype.appWechatScan = window.appWechatScan = function (config) {
    return new Promise((resolve, reject) => {
      wx.scanQRCode({
        needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
        scanType: ['qrCode', 'barCode'], // 可以指定扫二维码还是一维码，默认二者都有
        success: function (res) {
          resolve(res)
        },
        complete: function () {},
        error: function (res) {
          reject(res)
        }
      })
    })
  }

  Vue.prototype.appWechatPay = window.appWechatPay = function (config) {
    return new Promise((resolve, reject) => {
      if (!window.appWxPublicAppid) {
        throw Error('appWxPublicAppid : 必须设置了appWxPublicAppid')
      }
      let wxConfig = {
        appId: window.appWxPublicAppid,
        timeStamp: config.timeStamp,
        nonceStr: config.nonce,
        package: `prepay_id=${config.prepayId}`,
        signType: config.signType,
        paySign: config.paySign
      }
      // console.log(JSON.stringify(wxConfig, null, 2))
      WeixinJSBridge.invoke('getBrandWCPayRequest', wxConfig, function (res) {
        if (res.err_msg == 'get_brand_wcpay_request:ok') {
          resolve(res)
        }
        if (res.err_msg == 'get_brand_wcpay_request:cancel') {
          window.appShowToast({
            message: '支付失败'
          })
        }
        if (res.err_msg == 'get_brand_wcpay_request:fail') {
          window.appShowToast({
            message: '支付失败'
          })
        }
      })
    })
  }

  Vue.prototype.appShowToast = window.appShowToast = function (methodOptions = {}) {
    let code = Object.assign(
      {
        message: '加载中...',
        duration: 3000,
        background: '#1989fa',
        position: 'middle',
        type: 'text'
      },
      methodOptions
    )

    window.appToastInstance = Toast(code)
  }

  Vue.prototype.appHideToast = window.appHideToast = function (methodOptions) {
    window.appToastInstance && window.appToastInstance.clear()
  }

  Vue.prototype.appShowLoading = window.appShowLoading = function (methodOptions = {}) {
    let code = Object.assign(
      {
        message: '加载中',
        duration: 0,
        background: '#1989fa',
        position: 'middle',
        overlay: true
      },
      methodOptions
    )

    window.appLoadingInstance = Toast(code)
  }

  Vue.prototype.appHideLoading = window.appHideLoading = function (methodOptions) {
    window.appLoadingInstance && window.appLoadingInstance.clear()
  }

  Vue.prototype.appShowNotify = window.appShowNotify = function (methodOptions = {}) {
    let code = Object.assign(
      {
        message: '系统消息',
        duration: 3000,
        background: '#1989fa'
      },
      methodOptions
    )
    Notify(code)
  }

  Vue.prototype.appHideNotify = window.appHideNotify = function (methodOptions) {}

  Vue.prototype.appLog = window.appLog = console.log.bind(console)

  Vue.prototype.appFixMoney = window.appFixMoney = fixMoney

  Vue.prototype.appValidationData = window.appValidationData = validationData

  Vue.prototype.appFixDateBoundary = window.appFixDateBoundary = function (date, type = 'start') {
    if (!date) {
      throw Error('appFixDateBoundary : 必须传date')
    } else {
      return type == 'start' ? new Date(date).setHours(0, 0, 0, 0) : new Date(date).setHours(0, 0, 0, 0) + 86400000 - 1
    }
  }

  // 根据时间戳返回年月日
  Vue.prototype.appGetDateYMDHMS = window.appGetDateYMDHMS = function (timestramp) {
    let ddd = parseTime(timestramp, '{y}-{m}-{d}-{h}-{i}-{s}')
    let a = ddd.split('-')
    return {
      year: a[0],
      month: a[1],
      day: a[2],
      hour: a[3],
      minute: a[4],
      second: a[5]
    }
  }

  // flex布局常用的补位
  Vue.prototype.appListPlaceholder = window.appListPlaceholder = function (len, column) {
    let newLen = 0

    if (!len) {
      newLen = len
    } else {
      if (len > column) {
        if (len % column) {
          newLen = column - (len % column)
        } else {
          newLen = len % column
        }
      } else {
        newLen = column - len
      }
    }
    return newLen
  }
}

export default setVuePrototypeMethods
