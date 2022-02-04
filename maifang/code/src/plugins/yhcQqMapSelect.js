export default {
  data() {
    return {
      appQqMapParams: {
        key: '',
        referer: 'yhc',
        coord: ''
      },
      appQqMapIframeSrc: '',
      appQqMapIframeStatus: false
    }
  },
  methods: {
    appQqMapOpen(identifierName, eventName, key = '', coord = '') {
      if (!identifierName || !eventName) {
        throw Error(
          'appQqMapOpen : 必须传identifierName和eventName名字'
        )
      }
      if (!key) {
        throw Error('appQqMapOpen : 必须传key')
      }
      const appComponent = this.$root.$children['0']
      appComponent.appQqMapParams.key = key
      appComponent.appQqMapParams.coord = coord
      appComponent.appQqMapIframeSrc = `https://apis.map.qq.com/tools/locpicker?search=1&type=1&key=${appComponent.appQqMapParams.key}&referer=${appComponent.appQqMapParams.referer}&coord=${appComponent.appQqMapParams.coord}`
      this.appSetEmitterIdentifierName(identifierName, eventName)
      window.addEventListener(
        'message',
        event => {
          // 接收位置信息，用户选择确认位置点后选点组件会触发该事件，回传用户的位置信息
          var loc = event.data
          if (loc && loc.module === 'locationPicker') {
            this.$nextTick(() => {
              appComponent.appBroadcast(
                window.vm_identifierName,
                window.vm_eventName,
                JSON.stringify(loc)
              )
              appComponent.appQqMapIframeStatus = false
            })
          }
        },
        false
      )
      this.$nextTick(() => {
        appComponent.appQqMapIframeStatus = true
      })
    }
  }
}
