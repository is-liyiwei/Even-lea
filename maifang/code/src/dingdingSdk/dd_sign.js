
const Hashes = require('jshashes')

function getEpochNow() {
  return parseInt(Date.now() / 1000)
}

function getNonceStr(len = 6) {
  let stri = 0
  let nonceStr = ''
  const STR = '0123456789abcdefghijklmnopqrstuvwxyz'
  while (stri < len) {
    nonceStr += STR[parseInt(Math.random() * 36)]
    ++stri
  }
  return `${nonceStr}`
}

const signOption = {
  jsapi_ticket: '',
  nonceStr: '',
  timeStamp: ''
}

function getSign({
  jsapi_ticket,
  nonceStr,
  timeStamp
} = signOption) {
  const {
    origin,
    pathname,
    search
  } = window.location
  const _url = `${origin}${pathname}${search}`
  const signStr = 'jsapi_ticket=' + jsapi_ticket + '&noncestr=' + nonceStr + '&timestamp=' + timeStamp +
    '&url=' + _url
  const sign = new Hashes.SHA1().hex(signStr)
  return sign
}

export default function getSignOptions(jsapi_ticket) {
  const timeStamp = getEpochNow()
  let nonceStr = getNonceStr(6)
  nonceStr += timeStamp
  const sign = getSign({
    jsapi_ticket,
    nonceStr,
    timeStamp
  })
  const signOptions = {
    signature: sign,
    nonceStr,
    timestamp: parseInt(timeStamp)
  }
  return signOptions
}
