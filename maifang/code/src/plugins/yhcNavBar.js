export default {
  data() {
    return {
      appNavBarShowStatus: false,
      appNavBarTitle: '标题',
      appNavBarLeftText: '返回',
      appNavBarRightText: '',
      appNavBarBlockHeight: 0,
      appNavBarLeftArrowStatus: true
    }
  },
  methods: {
    appNavBarSetTitle(str) {
      this.$root.$children['0'].appNavBarTitle = str
      document.title = str
    },
    appNavBarSetLeftText(str) {
      this.$root.$children['0'].appNavBarLeftText = str
    },
    appNavBarSetRightText(str) {
      this.$root.$children['0'].appNavBarRightText = str
    },
    appNavBarSetLeftArrowShow() {
      this.$root.$children['0'].appNavBarLeftArrowStatus = true
    },
    appNavBarSetLeftArrowHide() {
      this.$root.$children['0'].appNavBarLeftArrowStatus = false
    },
    appNavBarShow() {
      this.$root.$children['0'].appNavBarShowStatus = true
    },
    appNavBarHide() {
      this.$root.$children['0'].appNavBarShowStatus = false
    },
    appNavBarSetBlockHeight() {
      this.$root.$children[
        '0'
      ].appNavBarBlockHeight = document
        .querySelector('#app-fix-nav-bar')
        .getBoundingClientRect().height
    },
    appNavBarInit() {
      this.$root.$children['0'].appNavBarShowStatus = true
      this.$nextTick(() => {
        this.appNavBarSetBlockHeight()
      })
    },
    appNavBarClickRight(e) {
      this.$children.forEach(child => {
        var name = child.$options.name
        if (name == this.$route.name) {
          if (typeof child.appNavBarRightClick == 'function') {
            child.appNavBarRightClick()
          }
        }
      })
    },
    appNavBarClickLeft(e) {
      this.$children.forEach(child => {
        var name = child.$options.name
        if (name == this.$route.name) {
          if (typeof child.appNavBarLeftClick == 'function') {
            child.appNavBarLeftClick()
          } else {
            this.appBackPage()
          }
        }
      })
    }
  }
}
