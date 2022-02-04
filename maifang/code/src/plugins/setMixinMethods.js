import emitter from '@/plugins/emitter'

import yhcPickerAreaSelect from '@/plugins/yhcPickerAreaSelect'
import yhcPickerSelect from '@/plugins/yhcPickerSelect'
import yhcPickerDateTimeSelect from '@/plugins/yhcPickerDateTimeSelect'
import yhcKeepAlive from '@/plugins/yhcKeepAlive'
import yhcRouter from '@/plugins/yhcRouter'
import yhcQqMapSelect from '@/plugins/yhcQqMapSelect'
import yhcAvatarEdit from '@/plugins/yhcAvatarEdit'
import yhcNavBar from '@/plugins/yhcNavBar'
import yhcTabBar from '@/plugins/yhcTabBar'
import yhcUploadManager from '@/plugins/yhcUploadManager'
import yhcActionSheet from '@/plugins/yhcActionSheet'

import appPlugin from '@/plugins/appPlugin'

let setMixinMethods = {}

setMixinMethods.install = function (Vue, options) {
  Vue.mixin({
    methods: {
      // 这里的数据不要动 - start
      ...appPlugin.methods,
      ...emitter.methods,
      ...yhcPickerAreaSelect.methods,
      ...yhcPickerSelect.methods,
      ...yhcPickerDateTimeSelect.methods,
      ...yhcKeepAlive.methods,
      ...yhcRouter.methods,
      ...yhcQqMapSelect.methods,
      ...yhcAvatarEdit.methods,
      ...yhcNavBar.methods,
      ...yhcTabBar.methods,
      ...yhcUploadManager.methods,
      ...yhcActionSheet.methods,
      appSetLang(type = 'zh') {
        // type = zh / en / jap
        this.$i18n.locale = type
      }
      // 这里的数据不要动 - end
    }
  })
}
export default setMixinMethods
