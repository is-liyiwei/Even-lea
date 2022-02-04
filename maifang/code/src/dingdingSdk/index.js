import * as dd from 'dingtalk-jsapi'

import { getInfoJsapiticket } from '@/ajax/YhcAjax'

import getSignOptions from './dd_sign'

// 萤火虫
// const corpId = `ding2f77dd7e78b4b36435c2f4657eb6378f`
// const agentId = 925080169
// const appKey = `dingwzdn4gao7thmxvbj`
// const appSecret = `87LDz0QEU0HUeo6HydVbohL3dKkGOIin7Ia-p5qIv1iy5ep5QW1BQG-0PGu3N-ij`

// 蔬稻
const corpId = `ding2bb67b93ae244519`
const agentId = 1005337254
// const appKey = `dingywde4zfl4gmatag4`
// const appSecret = `R1_sjRAKT47W0o5sjpBuLTrYo6qcPxOP1pYFg6BZzDs9Xe-ZQskhKBr4ILXk_KVv`

// 40.125.212.112,40.125.212.151,40.125.209.110,40.125.204.5,120.238.66.66,27.45.156.94,112.93.72.133,120.238.66.66

export function isDdPlatform() {
  if (dd && dd.env && dd.env.platform == 'notInDingTalk') {
    return false
  } else {
    return true
  }
}

export function ddConfig() {
  return new Promise((resolve, reject) => {
    // dd.error(function(error) {
    //   /**
    //    {
    //       errorMessage:"错误信息",// errorMessage 信息会展示出钉钉服务端生成签名使用的参数，请和您生成签名的参数作对比，找出错误的参数
    //       errorCode: "错误码"
    //    }
    //   **/
    //   alert('dd error: ' + JSON.stringify(error))
    // })
    try {
      getInfoJsapiticket({}, {})
        .then(res => {
          let { timestamp, nonceStr, signature } = getSignOptions(
            res.ticket
          )
          dd.config({
            agentId, // 必填，微应用ID
            corpId, //必填，企业ID
            timeStamp: timestamp, // 必填，生成签名的时间戳
            nonceStr: nonceStr, // 必填，生成签名的随机串
            signature: signature, // 必填，签名
            type: 0,
            jsApiList: ['biz.contact.choose']
          })
          resolve()
        })
        .catch(error => {
          console.log(error)
          reject(error)
        })
    } catch (error) {
      console.log(error)
      alert('钉钉配置错误')
      reject(error)
    }
  })
}

export function ddRuntimePermissionRequestAuthCode() {
  return new Promise((resolve, reject) => {
    dd.runtime.permission.requestAuthCode({
      corpId,
      onSuccess: function(result) {
        resolve(result)
      },
      onFail: function(err) {
        alert('获取code错误')
        reject(err)
      }
    })
  })
}

// don't support Mobile
// https://ding-doc.dingtalk.com/doc#/dev/oawo7q/5888bb96
export function ddBizContactChoose(options = {}) {
  return new Promise((resolve, reject) => {
    dd.biz.contact.choose({
      multiple: true,
      // users: ['10001', '10002', ...], //默认选中的用户列表，员工userid；成功回调中应包含该信息
      corpId,
      max: options.max || 1000,
      disabledUsers: options.disabledUsers || [],
      onSuccess: function(result) {
        resolve(result)
      },
      onFail: function(err) {
        reject(err)
      }
    })
  })
}

export function ddDeviceNotificationAlert(options = {}) {
  return new Promise((resolve, reject) => {
    dd.device.notification.alert({
      message: options.message || '',
      title: options.title || '系统提示', //可传空
      buttonName: options.title || '确认',
      onSuccess: function() {
        resolve()
      },
      onFail: function(err) {
        reject(err)
      }
    })
  })
}

export function ddDeviceNotificationConfirm(options = {}) {
  return new Promise((resolve, reject) => {
    dd.device.notification.confirm({
      message: options.message || '',
      title: options.title || '系统提示',
      buttonLabels: options.buttonLabels || ['是', '否'],
      onSuccess: function(result) {
        resolve(result)
      },
      onFail: function(err) {
        reject(err)
      }
    })
  })
}

export function ddDeviceNotificationPrompt(options = {}) {
  return new Promise((resolve, reject) => {
    dd.device.notification.prompt({
      message: options.message || '',
      title: options.title || '系统提示',
      defaultText: options.defaultText || '默认提示',
      buttonLabels: options.buttonLabels || ['是', '否'],
      onSuccess: function(result) {
        resolve(result)
      },
      onFail: function(err) {
        reject(err)
      }
    })
  })
}

export function ddDeviceNotificationToast(options = {}) {
  return new Promise((resolve, reject) => {
    dd.device.notification.toast({
      icon: options.icon || '',
      text: options.text || '系统提示',
      delay: options.delay || 0,
      // duration: 0,
      onSuccess: function(result) {
        resolve(result)
      },
      onFail: function(err) {
        reject(err)
      }
    })
  })
}

export function ddDeviceNotificationShowPreloader(options = {}) {
  return new Promise((resolve, reject) => {
    dd.device.notification.showPreloader({
      text: options.text || '加载中',
      showIcon: options.showIcon || true,
      onSuccess: function(result) {
        resolve(result)
      },
      onFail: function(err) {
        reject(err)
      }
    })
  })
}

export function ddDeviceNotificationHidePreloader(options = {}) {
  return new Promise((resolve, reject) => {
    dd.device.notification.hidePreloader({
      onSuccess: function(result) {
        resolve(result)
      },
      onFail: function(err) {
        reject(err)
      }
    })
  })
}

export function ddDeviceNotificationActionSheet(options = {}) {
  return new Promise((resolve, reject) => {
    dd.device.notification.actionSheet({
      title: options.title || '系统提示',
      cancelButton: options.cancelButton || '取消',
      otherButtons: options.otherButtons || ['是', '否'],
      onSuccess: function(result) {
        resolve(result)
      },
      onFail: function(err) {
        reject(err)
      }
    })
  })
}

export function ddBizUtilMultiselect(options = {}) {
  return new Promise((resolve, reject) => {
    dd.biz.util.multiSelect({
      options: options.options || [
        '选项1',
        '选项2',
        '选项3',
        '选项4'
      ],
      selectOption: options.selectOption || ['选项3'],
      onSuccess: function(result) {
        resolve(result)
      },
      onFail: function(err) {
        reject(err)
      }
    })
  })
}

export function ddBizUtilPreviewImage(options = {}) {
  return new Promise((resolve, reject) => {
    dd.biz.util.previewImage({
      urls: options.urls,
      current: options.current,
      onSuccess: function(result) {
        resolve(result)
      },
      onFail: function(err) {
        reject(err)
      }
    })
  })
}

// don't support pc
export function ddUiInputPlain(options = {}) {
  return new Promise((resolve, reject) => {
    dd.ui.input.plain({
      placeholder: options.placeholder || '说点什么吧',
      text: options.placeholder || '',
      onSuccess: function(result) {
        resolve(result)
      },
      onFail: function(err) {
        reject(err)
      }
    })
  })
}

// don't support pc
export function ddUiProgressBarSetColors(options = {}) {
  return new Promise((resolve, reject) => {
    dd.ui.progressBar.setColors({
      colors: options.colors || [],
      onSuccess: function(result) {
        resolve(result)
      },
      onFail: function(err) {
        reject(err)
      }
    })
  })
}

// support pc section
// https://ding-doc.dingtalk.com/doc#/dev/oawo7q/5888bb96
export function ddBizUtilOpen(options = {}) {
  return new Promise((resolve, reject) => {
    dd.biz.util.open({
      name: options.name || '',
      params: options.params || {},
      onSuccess: function(result) {
        resolve(result)
      },
      onFail: function(err) {
        reject(err)
      }
    })
  })
}

export function ddBizUtilOpenLink(options = {}) {
  return new Promise((resolve, reject) => {
    dd.biz.util.openLink({
      url: options.url || '',
      onSuccess: function(result) {
        resolve(result)
      },
      onFail: function(err) {
        reject(err)
      }
    })
  })
}

export function ddBizUtilOpenModal(options = {}) {
  return new Promise((resolve, reject) => {
    dd.biz.util.openModal({
      size: options.size || '',
      url: options.url || '',
      title: options.title || '',
      onSuccess: function(result) {
        resolve(result)
      },
      onFail: function(err) {
        reject(err)
      }
    })
  })
}

export function ddBizUtilOpenSlidePanel(options = {}) {
  return new Promise((resolve, reject) => {
    dd.biz.util.openSlidePanel({
      url: options.url || '',
      title: options.title || '',
      onSuccess: function(result) {
        resolve(result)
      },
      onFail: function(err) {
        reject(err)
      }
    })
  })
}

// export function ddDeviceNotificationModal(options = {}) {
//   return new Promise((resolve, reject) => {
//     dd.device.notification.modal({
//       image:
//         'http://gw.alicdn.com/tps/i2/TB1SlYwGFXXXXXrXVXX9vKJ2XXX-2880-1560.jpg_200x200.jpg',
//       banner: [
//         'http://gw.alicdn.com/tps/i2/TB1SlYwGFXXXXXrXVXX9vKJ2XXX-2880-1560.jpg_200x200.jpg'
//       ],
//       title: '2.4版本更新',
//       content: '1.功能更新2.功能更新;',
//       buttonLabels: ['了解更多', '知道了'],
//       onSuccess: function(result) {
//         resolve(result)
//       },
//       onFail: function(err) {
//         reject(err)
//       }
//     })
//   })
// }

// don't support pc
export function ddDeviceNotificationVibrate(options = {}) {
  return new Promise((resolve, reject) => {
    dd.device.notification.vibrate({
      duration: options.duration || 300,
      onSuccess: function(result) {
        resolve(result)
      },
      onFail: function(err) {
        reject(err)
      }
    })
  })
}

// don't support pc
export function ddBizNavigationClose(options = {}) {
  return new Promise((resolve, reject) => {
    dd.biz.navigation.close({
      onSuccess: function(result) {
        resolve(result)
      },
      onFail: function(err) {
        reject(err)
      }
    })
  })
}

// don't support Mobile
export function ddBizNavigationQuit(options = {}) {
  return new Promise((resolve, reject) => {
    dd.biz.navigation.quit({
      message: options.message || '',
      onSuccess: function(result) {
        resolve(result)
      },
      onFail: function() {
        reject()
      }
    })
  })
}

// don't support pc
export function ddBizNavigationGoBack(options = {}) {
  return new Promise((resolve, reject) => {
    dd.biz.navigation.goBack({
      onSuccess: function(result) {
        resolve(result)
      },
      onFail: function(err) {
        reject(err)
      }
    })
  })
}

export function ddBizNavigationSetTitle(options = {}) {
  return new Promise((resolve, reject) => {
    dd.biz.navigation.setTitle({
      title: options.title || '',
      onSuccess: function(result) {
        resolve(result)
      },
      onFail: function(err) {
        reject(err)
      }
    })
  })
}

// don't support pc
export function ddBizNavigationSetIcon(options = {}) {
  return new Promise((resolve, reject) => {
    dd.biz.navigation.setIcon({
      showIcon: options.showIcon || true,
      iconIndex: options.iconIndex || 1,
      onSuccess: function(result) {
        resolve(result)
      },
      onFail: function(err) {
        reject(err)
      }
    })
  })
}

// don't support Android
// 这个需要看文档，限制条件比较多
export function ddBizNavigationSetLeft(options = {}) {
  return new Promise((resolve, reject) => {
    dd.biz.navigation.setLeft({
      control: options.control || true,
      text: options.text || '',
      onSuccess: function(result) {
        resolve(result)
      },
      onFail: function(err) {
        reject(err)
      }
    })
  })
}

// don't support pc
export function ddBizUtilScan(options = {}) {
  return new Promise((resolve, reject) => {
    dd.biz.util.scan({
      type: 'all', // type 为 all、qrCode、barCode，默认是all。
      onSuccess: function(result) {
        resolve(result)
      },
      onFail: function(err) {
        reject(err)
      }
    })
  })
}

// just support ios
export function ddUiWebViewBounceEnable() {
  dd.ui.webViewBounce.enable()
}

// just support ios
export function ddUiWebViewBounceDisable() {
  dd.ui.webViewBounce.disable()
}

/*
 下面三个方法钉钉有点问题的，只会监听一次所以要这样用
  created里面this.lisentPull()

  pullHandle() {
    setTimeout(() => {
      ddUiPullToRefreshStop()
      ddUiPullToRefreshDisable()
      this.lisentPull()
    }, 3000)
  },
  lisentPull() {
    ddUiPullToRefreshEnable().then(() => {
      console.log('ddUiPullToRefreshEnable')
      this.pullHandle()
    })
  },

 */
// don't support pc
export function ddUiPullToRefreshEnable(options = {}) {
  return new Promise((resolve, reject) => {
    dd.ui.pullToRefresh.enable({
      onSuccess: function(res) {
        resolve(res)
      },
      onFail: function(err) {
        reject(err)
      }
    })
  })
}

// don't support pc
export function ddUiPullToRefreshStop(options = {}) {
  return new Promise((resolve, reject) => {
    dd.ui.pullToRefresh.stop()
    resolve()
  })
}

// don't support pc
export function ddUiPullToRefreshDisable(options = {}) {
  return new Promise((resolve, reject) => {
    dd.ui.pullToRefresh.disable()
    resolve()
  })
}

// don't support pc
export function ddDeviceBaseGetPhoneInfo(options = {}) {
  return new Promise((resolve, reject) => {
    dd.device.base.getPhoneInfo({
      onSuccess: function(result) {
        resolve(result)
      },
      onFail: function(err) {
        reject(err)
      }
    })
  })
}

// don't support pc
export function ddBizUtilShare(options = {}) {
  return new Promise((resolve, reject) => {
    dd.biz.util.share({
      type: options.type || 0,
      url: options.url || '',
      title: options.title || '',
      content: options.content || '',
      image: options.image || '',
      onSuccess: function(result) {
        resolve(result)
      },
      onFail: function(err) {
        reject(err)
      }
    })
  })
}

// don't support pc
export function ddBizClipboardDataSetData(options = {}) {
  return new Promise((resolve, reject) => {
    dd.biz.clipboardData.setData({
      text: options.text || '',
      onSuccess: function(result) {
        resolve(result)
      },
      onFail: function(err) {
        reject(err)
      }
    })
  })
}

// just support android
export function ddDeviceScreenResetView(options = {}) {
  return new Promise((resolve, reject) => {
    dd.device.screen.resetView({
      onSuccess: function(result) {
        resolve(result)
      },
      onFail: function(err) {
        reject(err)
      }
    })
  })
}

// just support android
export function ddDeviceScreenRotateView(options = {}) {
  return new Promise((resolve, reject) => {
    dd.device.screen.rotateView({
      showStatusBar: true, // 否显示statusbar
      clockwise: true, // 是否顺时针方向
      onSuccess: function(result) {
        resolve(result)
      },
      onFail: function(err) {
        reject(err)
      }
    })
  })
}

export function ddBizContactComplexPicker(options = {}) {
  return new Promise((resolve, reject) => {
    dd.biz.contact.complexPicker({
      title: options.title || '',
      corpId: options.corpId || corpId,
      multiple: options.multiple || true,
      limitTips: options.limitTips || '超出了',
      maxUsers: options.maxUsers || 1000,
      pickedUsers: options.pickedUsers || [],
      pickedDepartments: options.pickedDepartments || [],
      disabledUsers: options.disabledUsers || [],
      disabledDepartments: options.disabledDepartments || [],
      requiredUsers: options.requiredUsers || [],
      requiredDepartments: options.requiredDepartments || [],
      appId: options.appId || agentId,
      // permissionType: "xxx",
      responseUserOnly: options.responseUserOnly || true,
      startWithDepartmentId: options.startWithDepartmentId || 0,
      onSuccess: function(result) {
        resolve(result)
      },
      onFail: function(err) {
        reject(err)
      }
    })
  })
}

export function ddBizUtilUploadAttachment(spaceId, options = {}) {
  console.log(spaceId)
  return new Promise((resolve, reject) => {
    let image = Object.assign(
      { multiple: false, compress: false, max: 1, spaceId: spaceId },
      options.image || {}
    )

    let space = Object.assign(
      { corpId: corpId, spaceId: spaceId, isCopy: 1, max: 1 },
      options.space || {}
    )

    let file = Object.assign(
      { spaceId: spaceId, max: 1 },
      options.file || {}
    )

    let types = options.types || ['file']

    dd.biz.util.uploadAttachment({
      image: image,
      space: space,
      file: file,
      types: types,
      onSuccess: function(result) {
        resolve(result)
      },
      onFail: function(err) {
        reject(err)
      }
    })
  })
}

export function ddBizCspaceSaveFile(options = {}) {
  return new Promise((resolve, reject) => {
    dd.biz.cspace.saveFile({
      corpId: options.corpId,
      // 文件在第三方服务器地址， 也可为通过服务端接口上传文件得到的media_id，详见参数说明
      url: options.url,
      name: options.name,
      onSuccess: function(result) {
        resolve(result)
      },
      onFail: function(err) {
        reject(err)
      }
    })
  })
}

export function ddBizCspacePreview(options = {}) {
  return new Promise((resolve, reject) => {
    dd.biz.cspace.preview({
      corpId: options.corpId,
      spaceId: options.spaceId,
      fileId: options.fileId,
      fileName: options.fileName,
      fileSize: options.fileSize,
      fileType: options.fileType,
      onSuccess: function() {
        resolve()
      },
      onFail: function(err) {
        reject(err)
      }
    })
  })
}

export function ddBizCspaceChooseSpaceDir(options = {}) {
  return new Promise((resolve, reject) => {
    dd.biz.cspace.chooseSpaceDir({
      corpId: options.corpId,
      onSuccess: function(result) {
        resolve(result)
      },
      onFail: function(err) {
        reject(err)
      }
    })
  })
}
