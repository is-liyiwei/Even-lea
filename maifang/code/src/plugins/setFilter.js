import parseTime from '@/utils/parseTime' // global filter
import filterMoney from '@/utils/filterMoney' // global filter

let setFilter = {}
setFilter.install = function(Vue, options) {
  Vue.filter('appFilterMoney', filterMoney)
  Vue.filter('appParseTime', parseTime)
  window.appFilterMoney = filterMoney
  window.appParseTime = parseTime
}

export default setFilter
