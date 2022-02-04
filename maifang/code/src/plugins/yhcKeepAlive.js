export default {
  data() {
    return {}
  },
  methods: {
    appPushKeepAliveView(identifierName) {
      if (!identifierName) {
        throw Error('appPushKeepAliveView : 必须传identifierName')
      }
      this.$store.commit(`keepAlive/push`, identifierName)
    },
    appUnshiftKeepAliveView(identifierName) {
      if (!identifierName) {
        throw Error('appUnshiftKeepAliveView : 必须传identifierName')
      }
      this.$store.commit(`keepAlive/unshift`, identifierName)
    },
    appSetScrollItem(identifierName, el) {
      if (!identifierName) {
        throw Error('appSetScrollItem : 必须传identifierName')
      }
      if (!el) {
        throw Error('appSetScrollItem : 必须传el')
      }
      this.$store.commit(`keepAlive/setScrollItem`, {
        identifierName,
        el
      })
    },
    appPatchScrollItem(identifierName) {
      if (!identifierName) {
        throw Error('appPatchScrollItem : 必须传identifierName')
      }
      this.$store.commit(`keepAlive/patchScrollItem`, {
        identifierName
      })
    }
  }
}
