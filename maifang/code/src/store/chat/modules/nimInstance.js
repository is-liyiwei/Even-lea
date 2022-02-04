// import MD5 from '@/utils/md5'
import {
  onRoamingMsgs,
  onOfflineMsgs,
  onMsg
} from './msgsEventListeners'

import {
  onSysMsg,
  onSendCustomSysMsgDone,
  onOfflineCustomSysMsgs
} from './sysMsgsEventListeners'

import { onLoginPortsChange } from './loginEventListeners'

import { Toast, Dialog } from 'vant'
import store from '@/store'

let nimInstance_toast = null

const nimInstance = {
  state: {
    nim: null
  },
  mutations: {},
  actions: {
    initNimSdk({ state, commit, dispatch }, params) {
      if (window.nim) {
        window.nim.disconnect()
      }
      // console.log(params)
      // nimInstance_toast = this._vm.$toast({
      //   type: 'loading',
      //   message: '正在初始化',
      //   mask: true,
      //   duration: 0
      // })
      window.nim = state.nim = window.SDK.NIM.getInstance({
        debug: false,
        appKey: params.appKey,
        account: params.account,
        token: params.token,
        transports: ['websocket'],
        db: false,
        onconnect: function onConnect(event) {
          // alert('nim sdk 已经连接')
          if (nimInstance_toast != null) {
            nimInstance_toast.clear()
            nimInstance_toast = null
          }
        },
        onerror: function onError(event) {
          // alert('网络连接状态异常，正在重新建立连接')
        },
        onwillreconnect: function onWillReconnect(obj) {
          // console.log(obj)
          nimInstance_toast = Toast({
            type: 'loading',
            message: '网络断开，正在重新连接',
            mask: true,
            duration: 0
          })
          // 此时说明 `SDK` 已经断开连接, 请开发者在界面上提示用户连接已断开, 而且正在重新建立连接
        },
        ondisconnect: function onDisconnect(error) {
          // console.log(error)
          switch (error.code) {
            case 302:
              console.log(error.code)
              console.log(
                '账号或者密码错误, 请跳转到登录页面并提示错误'
              )
              // 账号或者密码错误, 请跳转到登录页面并提示错误
              break
            case 'logout':
              // 主动登出
              break
            case 'kicked':
              // 被踢, 请提示错误后跳转到登录页面
              let map = {
                PC: '电脑版',
                Web: '网页版',
                Android: '手机版',
                iOS: '手机版',
                WindowsPhone: '手机版'
              }
              let str = error.from
              let errorMsg = `你的帐号被${map[str] ||
                '其他端'}踢出下线，请确定帐号信息安全!`
              Dialog.alert({
                title: '系统提示',
                message: errorMsg
              }).then(() => {
                window._nativeDispatcher.logout()
              })
              break
            default:
              break
          }
        },
        // 消息监听事件
        onroamingmsgs: onRoamingMsgs,
        onofflinemsgs: onOfflineMsgs,
        onmsg: onMsg,
        // 系统通知
        onsysmsg: onSysMsg,
        // 系统自定义消息
        oncustomsysmsg: onSendCustomSysMsgDone,
        onofflinecustomsysmsgs: onOfflineCustomSysMsgs,
        // 多端登录
        onloginportschange: onLoginPortsChange
      })
    },
    logoutNimSdk({ state, commit, dispatch }, params) {
      state.nim.disconnect()
    }
  }
}

export default nimInstance
