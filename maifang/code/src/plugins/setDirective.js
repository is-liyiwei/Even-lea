import reachBottom from '@/directives/reachBottom'
import isMoneyData from '@/directives/isMoneyData'

let setDirective = {}
setDirective.install = function (Vue, options) {
  Vue.directive('appReachBottom', reachBottom)
  Vue.directive('appIsMoneyData', isMoneyData)
}

export default setDirective
