function getQueryString(name, str) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
  var r = str.substr(1).match(reg)
  if (r != null) {
    return unescape(r[2])
  }
  return null
}

export default getQueryString
