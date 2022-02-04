import { getInfoTicket } from '@/ajax/YhcAjax/index'
import getSignOptions from './wechat_sign'
// console.log(window.wx)
// console.log(wx)
// const wx = window.wx

function getConfigOptions(
  jsapi_ticket,
  APPID,
  jsApiList = [''],
  debug = false
) {
  const signOptions = getSignOptions(jsapi_ticket)
  return {
    debug,
    appId: APPID,
    jsApiList,
    ...signOptions
  }
}

function initWeChatSDK (APPID, isGetNewTicket = false) {
  if (!APPID) {
    throw Error('initWeChatSDK：no find appid')
  }
  getInfoTicket(
    {},
    {
      renew: isGetNewTicket
    }
  ).then(res => {
    wx.error(err => {
      console.log('wx sdk error')
      if (isGetNewTicket == true) {
        console.log('wx sdk retry but still error')
        return
      }
      initWeChatSDK(APPID, true)
    })
    const options = getConfigOptions(
      res.ticket,
      APPID,
      [
        // 'chooseImage',
        // 'uploadImage',
        // 'downloadImage',
        // 'previewImage',
        // 'openLocation',
        // 'addCard',
        // 'openCard',
        // 'getLocation',
        // 'scanQRCode'
      ],
      false
    )
    wx.config({ ...options })
    wx.ready(() => {
      console.log('wx sdk ready')
    })
  })
}

export default initWeChatSDK
