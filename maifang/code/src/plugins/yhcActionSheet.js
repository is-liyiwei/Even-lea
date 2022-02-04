export default {
  data() {
    return {
      appActionSheetActions: [],
      appActionSheetStatus: false,
      appActionSheetCloseOnClickOverlay: true,
      appActionSheetDescription: '',
      appActionSheetCancelText: '取消'
    }
  },
  methods: {
    appActionSheetOpen(identifierName, eventName, dataList = []) {
      if (!identifierName || !eventName) {
        throw Error(
          'appActionSheetOpen : 必须传identifierName和eventName名字'
        )
      }
      this.appSetEmitterIdentifierName(identifierName, eventName)
      this.$root.$children['0'].appActionSheetActions = dataList
      this.appActionSheetSetStatus(true)
    },
    appActionSheetSetCancelText(text) {
      this.$root.$children['0'].appActionSheetCancelText = text
    },
    appActionSheetSetDescription(text) {
      this.$root.$children['0'].appActionSheetDescription = text
    },
    appActionSheetSetStatus(status) {
      this.$root.$children['0'].appActionSheetStatus = status
    },
    appActionSheetClose() {
      let activeEventComponent = this.appGetActiveEventComponent()
      activeEventComponent.$off(window.vm_eventName)
    },
    appActionSheetCancel() {
      this.appActionSheetSetStatus(false)
    },
    appActionSheetDone(item) {
      this.appBroadcast(
        window.vm_identifierName,
        window.vm_eventName,
        JSON.stringify(item)
      )
      this.appActionSheetSetStatus(false)
    }
  }
}
