import { get } from 'lodash'

function validationData(jsonModel, arrayPrpos) {
  return new Promise(async (resolve, reject) => {
    let _msg = undefined
    for (let i = 0; i < arrayPrpos.length; i++) {
      const key = arrayPrpos[i].key
      const regex = arrayPrpos[i].regex
      const method = arrayPrpos[i].method
      const message = arrayPrpos[i].message
      let v = get(jsonModel, key)
      if (v === 0) {
        v = v + ''
      }

      if (toString.call(regex) == '[object RegExp]') {
        _msg = regex.test(v) ? undefined : message
      } else if (method) {
        let validatorRes = await import(`validator/es/lib/${method}`)
        _msg = validatorRes.default(v) ? undefined : message
      } else {
        _msg = v ? undefined : message
      }

      if (_msg) {
        resolve(_msg)
      }
    }
    resolve(undefined)
  })
}

// 使用文档
// 优先级是regex这个key，这个是一个正则表达式
// 次优先级是method，这个可用于validator.js的所有功能(https://github.com/validatorjs/validator.js)
// 如果没有regex和method这个key，方法则会判断数据是不是为空(null, false, undefined)
// 如果不通过就会返回对应的message

// let pageModel = {
//   user: {
//     name: ''
//   },
//   points: 0,
//   province: '',
//   city: '',
//   district: '',
//   detailAddress: ''
// }

// let validationArray = [
//   {
//     key: 'city',
//     message: 'must be has data'
//   },
//   {
//     key: 'points',
//     message: 'data must be is number',
//     // regex: new RegExp(/^[0-9]+([.]{1}[0-9]+){0,1}$/, 'g')
//     regex: /^[0-9]+([.]{1}[0-9]+){0,1}$/g
//   },
//   {
//     key: 'user.name',
//     message: 'data length must be greater than 4 smaller than 8',
//     regex: new RegExp(/^(.|\n){4,8}$/, 'g')
//   },
//   {
//     key: 'district',
//     message: 'no is email',
//     method: 'isEmail'
//   }
// ]

// validationData(pageModel, validationArray).then(message => {
//   console.log(message)
// })

export default validationData
