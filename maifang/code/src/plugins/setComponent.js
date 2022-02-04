// import YhcButton from '@/components/YhcButton'
import YhcAvatarEdit from '@/components/YhcAvatarEdit/index.vue'

let setComponent = {}

setComponent.install = function (Vue, options) {
  // 要定义的一些组件，写在下面，记住用Yhcxxxxxxx命名
  Vue.component('YhcAvatarEdit', YhcAvatarEdit)
  // Vue.component('YhcButton', YhcButton)
}

export default setComponent
