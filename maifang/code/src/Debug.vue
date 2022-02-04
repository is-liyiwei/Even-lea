<template>
  <div id="Debug">
    <van-dialog
      title="调试模式，非开发人员请关闭"
      v-model="hzDebugStatus"
      show-cancel-button
      :before-close="beforeClose"
      cancel-button-text="关闭"
      close-on-click-overlay
    >
      <br />
      <van-field
        @input="debugInputMethod('debugHost')"
        v-model="debugHost"
        label="测试Host"
      />
      <van-field
        @input="debugInputMethod('debugPort')"
        v-model="debugPort"
        label="测试Port"
      />
      <van-field
        @input="debugInputMethod('debugHref')"
        v-model="debugHref"
        label="测试Href"
      />
      <van-button
        style="margin: 0.4rem;"
        type="danger"
        @click="debugDialogNeverShow"
        >永久关闭</van-button
      >
    </van-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hzDebugStatus: !JSON.parse(window.localStorage.hzDebugStatus),
      debugHost: window.localStorage.debugHost || '192.168.2.117',
      debugPort: window.localStorage.debugPort || '8080',
      debugHref: window.localStorage.debugHref || 'ul'
    }
  },
  computed: {},
  beforeCreate() {
    if (!window.localStorage.hzDebugStatus) {
      window.localStorage.hzDebugStatus = false
    }
  },
  watch: {},
  methods: {
    beforeClose(action, done) {
      let href = `http://${this.debugHost}:${this.debugPort}/#/${this.debugHref}`
      if (action === 'confirm') {
        window.location.href = href
      }
      done()
    },
    debugInputMethod(type) {
      window.localStorage[type] = this[type]
    },
    debugDialogNeverShow() {
      window.localStorage.hzDebugStatus = true
      this.hzDebugStatus = false
      let el = document.getElementById('__vconsole')
      el.parentNode && el.parentNode.removeChild(el)
    }
  },
  mounted() {
    if (this.hzDebugStatus) {
      var domScript = document.createElement('script')
      domScript.src =
        'https://cdn.bootcss.com/vConsole/3.3.4/vconsole.min.js'
      domScript.onload = domScript.onreadystatechange = function() {
        if (
          !this.readyState ||
          'loaded' === this.readyState ||
          'complete' === this.readyState
        ) {
          window.VConsole && new window.VConsole()
          this.onload = this.onreadystatechange = null
          this.parentNode.removeChild(this)
        }
      }
      document.getElementsByTagName('head')[0].appendChild(domScript)
    }
  }
}
</script>
