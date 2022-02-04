<template>
  <div class="app-container" id="preload"></div>
</template>

<script>
import xToken from '@/storages/xToken'
// import module from './module'
let identifierName = `preload`
export default {
  name: identifierName,
  components: {},
  data() {
    return {}
  },
  props: {},
  computed: {
    userInfo() {
      return this.$store.state.index.userInfo
    }
  },
  watch: {},
  methods: {
    init() {
      this.$store.commit(`index/setStoreData`, {
        key: `userInfo`,
        commitInfo: '这是一段描述，方便记录开发用的',
        // 必须，这个是页面的唯一标识，方便vuex的debug
        identifierName,
        data: {
          name: 123
        }
      })
    }
  },
  beforeCreate() {},
  created() {
    // 入口地址
    // http://192.168.0.113:8080/#/preload?xToken=6&redirectPageName=index&isNewWebview=false
    // http://192.168.0.113:8080/#/preload?xToken=7&redirectPageName=index&isNewWebview=false
    // http://192.168.0.113:8080/#/preload?xToken=8&redirectPageName=index&isNewWebview=false

    // 一些处理
    xToken.set(this.$route.query.xToken || '6')
    this.init()
  },
  mounted() {}
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
#preload {
}
</style>
