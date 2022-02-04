const idCard = require('./idcard')

/**
 * 简单验证身份证号是否正确
 *
 * @export
 * @param {*} cardNumber
 * @returns
 */
export function isIDCard(cardNumber) {
  return idCard.verify(cardNumber)
}
