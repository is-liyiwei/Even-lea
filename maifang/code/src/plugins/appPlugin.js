// console.log(window.devicePixelRatio)
// console.log(document.documentElement.getAttribute('data-dpr'))
function replacePxUnit(str) {
  return parseFloat(str.trim().replace(/px/g, '')) * 1
}

export default {
  data() {
    return {
      appItemHeightByPicker: 44,
      appDpr: 2
    }
  },
  methods: {
    appGetPickerItemHeight() {
      return this.$root.$children['0'].appItemHeightByPicker
    },
    appGetDpr() {
      return this.$root.$children['0'].appDpr
    },
    appCreateRemUnit(number) {
      number = replacePxUnit(number + '')
      // / 75是项目是以手淘的适配方案为基准的
      return number / 75 + 'rem'
    },
    appCreatePxUnit(number) {
      number = replacePxUnit(number + '')
      // / 2是项目是以iphone 6的dpr为基准的
      return number / 2 * this.$root.$children['0'].appDpr + 'px'
    }
  }
}
