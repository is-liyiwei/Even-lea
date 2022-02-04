import Vue from 'vue'

import appPickerAreaList from '@/utils/area'

Vue.prototype.appPickerAreaList = appPickerAreaList

let _cancelType = 'cancel'

export default {
  data() {
    return {
      appPickerAreaSelectPopupStatus: false,
      appPickerAreaSelectCloseOverlay: true,
      appPickerAreaSelectCancelText: '取消'
    }
  },
  methods: {
    appPickerAreaSelectOpen(identifierName, eventName) {
      if (!identifierName || !eventName) {
        throw Error(
          'appPickerAreaSelectOpen : 必须传identifierName和eventName名字'
        )
      }
      this.appSetEmitterIdentifierName(identifierName, eventName)
      this.appPickerAreaSelectSetPopupStatus(true)
      _cancelType = 'cancel'
    },
    appPickerAreaSelectSetPopupStatus(status) {
      this.$root.$children[
        '0'
      ].appPickerAreaSelectPopupStatus = status
    },
    appPickerAreaSelectCancel(type = 'picker') {
      if (type === 'picker') {
        this.appPickerAreaSelectSetPopupStatus(false)
      }

      if (type === 'pupop') {
        this.appPickerAreaSelectSetPopupStatus(false)

        let activeEventComponent = this.appGetActiveEventComponent()

        if (activeEventComponent) {
          activeEventComponent.$off(window.vm_eventName)
          if (
            typeof activeEventComponent.appPickerAreaSelectCancelHandle ==
            'function'
          ) {
            activeEventComponent.appPickerAreaSelectCancelHandle(
              _cancelType,
              window.vm_identifierName,
              window.vm_eventName
            )
          }
        }
      }
    },
    appPickerAreaSelectDone(e) {
      this.appBroadcast(
        window.vm_identifierName,
        window.vm_eventName,
        JSON.stringify(e)
      )
      _cancelType = 'done'
      this.appPickerAreaSelectSetPopupStatus(false)
    }
  }
}
