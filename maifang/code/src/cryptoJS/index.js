import CryptoJS from 'crypto-js'
/**
 * 加密
 */
export const encrypt = word => {
  if (!word) {
    return null
  }
  var key = `yhc-app`
  var srcs = CryptoJS.enc.Utf8.parse(word)
  var encrypted = CryptoJS.AES.encrypt(srcs, key)
  // 浏览器其实会默认执行一次encodeURIComponent，这里也事先处理吧
  return encodeURIComponent(encrypted.toString())
}
/**
 * 解密
 */
export const decrypt = word => {
  if (!word) {
    return null
  }
  // 这里做一次解码，因为参数在url打开的时候会被编码一次的
  word = decodeURIComponent(word)
  var key = `yhc-app`
  var decrypt = CryptoJS.AES.decrypt(word, key)
  return CryptoJS.enc.Utf8.stringify(decrypt).toString()
}
