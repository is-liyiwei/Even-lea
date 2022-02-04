<template>
  <div id="ctrlDone" class="app-fx-fcc app-fx-direct-c">
    <YhcSvgIcon class="icon-size app-mgt-48" :icon="iconType" />
    <div class="app-fz-24 app-fwb app-mgt-40">{{ title }}</div>
    <div class="app-fz-16 app-mgt-48 app-mgb-24 app-fzc-808080">
      {{ sTitle }}
    </div>
    <van-button type="primary">{{ btnTxt }}</van-button>
    <div class="page-footer">
      {{ footerTxt }}
    </div>
  </div>
</template>

<script>
// import {
//   ddBizNavigationQuit,
//   ddBizNavigationClose
// } from '@/dingdingSdk'

let identifierName = 'ctrlDone'

export default {
  name: identifierName,
  data() {
    return {
      iconType: '',
      title: '',
      sTitle: '',
      btnTxt: '',
      footerTxt: ''
    }
  },
  computed: {},
  methods: {},
  created() {
    console.log('created')
    let { iconType, title, sTitle, btnTxt, footerTxt } = this.$route.query
    this.iconType = iconType || 'success'
    this.title = title || '操作成功'
    this.sTitle = sTitle || 'sTitle'
    this.btnTxt = btnTxt || '关闭页面'
    this.footerTxt = footerTxt || 'footerTxt'
  },
  async activated() {
    console.log('activated')
  },
  mounted() {}
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
#ctrlDone {
  .icon-size {
    width: 100px;
    height: 100px;
  }
  .page-footer {
    position: fixed;
    width: 80%;
    bottom: 20px;
    text-align: center;
    color: #c1c1c1;
  }
}
</style>
