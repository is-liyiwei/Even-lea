export default {
  data() {
    return {
      appTabBarShowStatus: false,
      appTabBarActive: 0,
      appTabBarActiveColor: '',
      appTabBarList: [],
      appTabBarBlockHeight: 0,
      appTabBarType: 'normal'
    }
  },
  methods: {
    appTabBarChange(index) {
      let item = this.$root.$children['0'].appTabBarList[index]
      item.pageName && this.appToPage(item.pageName)
    },
    appTabBarSetActiveColor(color) {
      this.$root.$children['0'].appTabBarActiveColor = color
    },
    appTabBarSetActiveIndex(index) {
      this.$root.$children['0'].appTabBarActive = index
    },
    appTabBarShow() {
      this.$root.$children['0'].appTabBarShowStatus = true
    },
    appTabBarHide() {
      this.$root.$children['0'].appTabBarShowStatus = false
    },
    appTabBarSetBlockHeight() {
      this.appTabBarBlockHeight = document
        .querySelector('#app-fix-tab-bar')
        .getBoundingClientRect().height
    },
    appTabBarSetType(type = 'normal') {
      this.$root.$children['0'].appTabBarType = type
    },
    appTabBarInit(list) {
      this.$root.$children['0'].appTabBarList = list
      this.appTabBarShow()
      this.$nextTick(() => {
        this.appTabBarSetBlockHeight()
      })
    }
  }
}
