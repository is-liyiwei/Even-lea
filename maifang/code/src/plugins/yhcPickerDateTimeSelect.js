const currentYear = new Date().getFullYear()

let _cancelType = `cancel`

export default {
  data() {
    return {
      appPickerDateTimeSelectPopupStatus: false,
      appPickerDateTimeSelectCloseOverlay: true,
      appPickerDateTimeSelectCancelText: '取消',
      appPickerDateTimeSelectConfig: {
        type: 'datetime',
        minHour: 0,
        maxHour: 23,
        minMinute: 0,
        maxMinute: 59,
        minDate: +new Date(currentYear - 10, 0, 1),
        maxDate: +new Date(currentYear + 10, 11, 31),
        currentDate: +new Date(),
        formatter(type, value) {
          return value
        }
      }
    }
  },
  methods: {
    appPickerDateTimeSelectOpen(identifierName, eventName) {
      if (!identifierName || !eventName) {
        throw Error(
          'appPickerSelectOpen : 必须传identifierName和eventName名字'
        )
      }
      this.appSetEmitterIdentifierName(identifierName, eventName)
      // 这里应该是vant没处理好，按理说不管传date还是timestamp
      // 内部都应该转换成vant自己想要的格式，但是这里timestamp时候会报错，只好手动处理了
      let config = this.$root.$children['0']
        .appPickerDateTimeSelectConfig
      config.minDate = new Date(config.minDate)
      config.maxDate = new Date(config.maxDate)
      config.currentDate = new Date(config.currentDate)

      this.appPickerDateTimeSelectSetPopupStatus(true)
      _cancelType = 'cancel'
    },
    appPickerDateTimeSelectSetPopupStatus(status) {
      this.$root.$children[
        '0'
      ].appPickerDateTimeSelectPopupStatus = status
    },
    appPickerDateTimeSelectCancel(type = 'picker') {
      if (type === 'picker') {
        this.appPickerDateTimeSelectSetPopupStatus(false)
      }
      if (type === 'pupop') {
        this.appPickerDateTimeSelectSetPopupStatus(false)

        let activeEventComponent = this.appGetActiveEventComponent()

        if (activeEventComponent) {
          activeEventComponent.$off(window.vm_eventName)
          if (
            typeof activeEventComponent.appPickerDateTimeSelectCancelHandle ==
            'function'
          ) {
            activeEventComponent.appPickerDateTimeSelectCancelHandle(
              _cancelType,
              window.vm_identifierName,
              window.vm_eventName
            )
          }
        }
      }
    },
    appPickerDateTimeSelectSetConfig(json) {
      let config = this.$root.$children['0']
        .appPickerDateTimeSelectConfig
      this.$root.$children[
        '0'
      ].appPickerDateTimeSelectConfig = Object.assign(
        {},
        config,
        json
      )
    },
    appPickerDateTimeSelectDone(value) {
      this.appBroadcast(
        window.vm_identifierName,
        window.vm_eventName,
        JSON.stringify({
          value: +new Date(value)
        })
      )
      _cancelType = 'done'
      this.appPickerDateTimeSelectSetPopupStatus(false)
    }
  }
}
