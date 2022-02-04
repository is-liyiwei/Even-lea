// 根据环境引入不同配置 process.env.VUE_APP_ENV
// console.log(JSON.stringify(process.env.VUE_APP_ENV, null, 2))
// console.log(JSON.stringify(process.env.NODE_ENV, null, 2))
const environment = process.env.VUE_APP_ENV || 'production'
const config = require('./env.' + environment)
module.exports = config
