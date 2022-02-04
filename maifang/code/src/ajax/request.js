import axios from 'axios'
import fixOpts from './utils/fixOpts'
import baseUrl from './baseUrl'
import { Toast } from 'vant'

const http = axios.create({
  baseURL: baseUrl,
  timeout: 120000
})

window.appLoadingCount = 0

// request拦截器
http.interceptors.request.use(
  config => {    // 预处理
    let fixConfig = fixOpts(config)
    let isBlobReq = config.url.indexOf('blob') != -1
    let _isMissLoading = config.url.indexOf('isMissLoading=true') != -1
    // 处理loading
    if (!JSON.parse(_isMissLoading)) {
      if (window.appLoadingCount == 0) {
        window.appShowLoading()
      }
      window.appLoadingCount++
    }
    // 返回axios的配置
    if (isBlobReq) {
      return config
    } else {
      return fixConfig
    }
  },
  error => {
    Promise.reject(error)
  }
)

// 忽略errorCode的接口url白名单，有些接口不返回errorCode导致报错的
const whileApi = ['blob']

function checkWhileList(url) {
  for (let index = 0; index < whileApi.length; index++) {
    const element = whileApi[index]
    if (url.indexOf(element) != -1) {
      return true
    }
  }
}

// respone拦截器
http.interceptors.response.use(
  response => {
    // 预处理
    let res = response.data
    let config = response.config
    let _isMissLoading = config.url.indexOf('isMissLoading=true') != -1
    // 处理loading
    if (!JSON.parse(_isMissLoading)) {
      window.appLoadingCount--
      if (window.appLoadingCount == 0) {
        window.appHideLoading()
      }
    }
    if (
      !checkWhileList(response.config.url) &&
      res &&
      res.errorCode != 0
    ) {
      console.log('response reject')
      console.log(response)
      window.appHideLoading()
      switch (res.errorCode * 1) {
        // case 401:
        //   break
        default:
          Toast({
            message: res.message,
            type: 'text'
          })
          break
      }
      return Promise.reject(res)
    } else {
      return res
    }
  },
  error => {
    console.warn('检查是否有参数为空值')
    window.httpLoadingCount--
    if (window.httpLoadingCount == 0) {
      window.appHideLoading()
    }
    Toast({
      message: '网络错误',
      type: 'text'
    })
    return Promise.reject(error)
  }
)

export default http
