function onlyMoney (numberValue) {
  numberValue = numberValue + ''
  if (!numberValue) {
    return ''
  }
  let fitst = numberValue.substr(0, 1)
  let two = numberValue.substr(1, 1)

  // 清除"数字"和"."以外的字符
  numberValue = numberValue.replace(/[^\d.]/g, '')
  // 验证第一个字符是数字
  numberValue = numberValue.replace(/^\./g, '')
  // 只保留第一个, 清除多余的
  numberValue = numberValue.replace(/\.{2,}/g, '.')
  numberValue = numberValue
    .replace('.', '$#$')
    .replace(/\./g, '')
    .replace('$#$', '.')
  // 只能输入两个小数
  numberValue = numberValue.replace(
    /^(\-)*(\d+)\.(\d\d).*$/,
    '$1$2.$3'
  )
  // 如果第一个是-，则是负数
  if (fitst == '-') {
    numberValue = numberValue * -1
  }
  // 如果第一个是0，则是格式化
  if (fitst == '0' && two != '.') {
    numberValue = numberValue * 1
  }
  if (numberValue === -0) {
    numberValue = 0
  }
  return numberValue
}

export default onlyMoney
