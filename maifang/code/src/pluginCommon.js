import setDirective from '@/plugins/setDirective'
import setFilter from '@/plugins/setFilter'
import setVuePrototypeMethods from '@/plugins/setVuePrototypeMethods'
import setMixinMethods from '@/plugins/setMixinMethods'
import setComponent from '@/plugins/setComponent'

let plugin = {}

plugin.install = function (Vue, options) {
  Vue.use(setDirective)
  Vue.use(setFilter)
  Vue.use(setVuePrototypeMethods)
  Vue.use(setMixinMethods)
  Vue.use(setComponent)
}

export default plugin
