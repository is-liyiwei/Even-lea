import {
  cloneDeep,
  get,
  isNumber,
  toNumber,
  isArray,
  set
} from 'lodash'
import * as transformMoney from './transformMoney'

// function isNumberRegular(value) {
//   return /^[0-9]+([.]{1}[0-9]+){0,1}$/.test(value)
// }

function fixMoney(
  jsonModel,
  arrayPrpos,
  fName,
  isInt = false,
  deepClone = false
) {
  let f = transformMoney[fName]
  let o = deepClone ? cloneDeep(jsonModel) : jsonModel
  for (let i = 0; i < arrayPrpos.length; i++) {
    const k = arrayPrpos[i]
    let v = get(o, k, 0)
    v = toNumber(v)

    // if (isNumberRegular(v)) v = v * 1
    if (!isNumber(v) && !isArray(v)) v = 0

    isArray(v)
      ? set(
          o,
          k,
          v.map(item => {
            return f(+item, isInt)
          })
        )
      : set(o, k, f(+v, isInt))
  }
  return o
}

/*

let moneyModel = {
	money: 0.01,
	cash: {
		cashMoney: 199,
		backMoney: null
	},
	otherMoney: 200,
	arrMoney: [400, 500]
}

// 极端情况下的数据
// moneyModel = {
// 	money: 'null',
// 	cash: null,
// 	otherMoney: NaN,
// 	arrMoney: ['null', NaN]
// }
// 这些数据都返回0

let fixArray = ['money', 'cash.cashMoney', 'cash.backMoney', 'otherMoney', 'arrMoney']

let newMoneyModel = fixMoney(moneyModel, fixArray, 'yuan2fen')
// let newMoneyModel = fixMoney(moneyModel, fixArray, 'fen2yuan')

*/

export default fixMoney
