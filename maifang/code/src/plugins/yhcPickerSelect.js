// let MagicVar = `appPickerSelect`

let _cancelType = 'cancel'

export default {
  data() {
    return {
      appPickerSelectColumns: [],
      appPickerSelectPopupStatus: false,
      appPickerSelectCloseOverlay: true,
      appPickerSelectCancelText: '取消'
    }
  },
  methods: {
    appPickerSelectOpen(identifierName, eventName, dataList = []) {
      if (!identifierName || !eventName) {
        throw Error(
          'appPickerSelectOpen : 必须传identifierName和eventName名字'
        )
      }
      this.appSetEmitterIdentifierName(identifierName, eventName)
      this.$root.$children['0'].appPickerSelectColumns = dataList
      this.appPickerSelectSetPopupStatus(true)
      _cancelType = 'cancel'
    },
    appPickerSelectSetPopupStatus(status) {
      this.$root.$children['0'].appPickerSelectPopupStatus = status
    },
    appPickerSelectCancel(type) {
      // 这是因为触发了picker的取消后pupop会再触发一次
      // 所以picker状态下不处理其他
      if (type === 'picker') {
        this.appPickerSelectSetPopupStatus(false)
      }
      if (type === 'pupop') {
        this.appPickerSelectSetPopupStatus(false)

        let activeEventComponent = this.appGetActiveEventComponent()

        if (activeEventComponent) {
          activeEventComponent.$off(window.vm_eventName)
          if (
            typeof activeEventComponent.appPickerSelectCancelHandle ==
            'function'
          ) {
            activeEventComponent.appPickerSelectCancelHandle(
              _cancelType,
              window.vm_identifierName,
              window.vm_eventName
            )
          }
        }
      }
    },
    appPickerSelectDone(value, index) {
      this.appBroadcast(
        window.vm_identifierName,
        window.vm_eventName,
        JSON.stringify({
          value,
          index
        })
      )
      _cancelType = 'done'
      this.appPickerSelectSetPopupStatus(false)
    }
  }
}
