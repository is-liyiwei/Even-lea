import Vue from 'vue'
import YhcSvgIcon from '@/components/YhcSvgIcon'// svg组件

// register globally
Vue.component('YhcSvgIcon', YhcSvgIcon)

const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('./svg', false, /\.svg$/)
requireAll(req)
