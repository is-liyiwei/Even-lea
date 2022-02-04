export function checkPhone(value) {
  const isPhone = /^([0-9]{3,4}-)?[0-9]{7,8}$/
  if (isPhone.test(value)) {
    return true
  } else {
    return false
  }
}

export function checkMobPhone(value) {
  const isMob = /^(((13[0-9]{1})|(14[0-9]{1})|(17[0-9]{1})|(15[0-3]{1})|(15[4-9]{1})|(18[0-9]{1})|(199))+\d{8})$/
  if (isMob.test(value)) {
    return true
  } else {
    return false
  }
}
