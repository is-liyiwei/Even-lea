<template>
  <div id="test">
    test
    <div>{{ $t(['1']) }}</div>

    <img src="@/assets/logo.png" alt="" />
    <img src="/logo.png" alt="" />
  </div>
</template>

<script>
import envConfig from '@/config'

let identifierName = 'test'

// 这个变量很特殊，有3个环境变量，一般用到2个，就是生产和开发
// 对应env.production和env.development两个文件，环境不同数据就会不同
console.log(JSON.stringify(envConfig, null, 2))

export default {
  name: identifierName,
  components: {},
  data() {
    return {}
  },
  computed: {},
  methods: {},
  beforeCreate() {},
  created() {},
  mounted() {
    this.appSetLang('zh')
    console.log(this.$t(['1']))
    setTimeout(() => {
      this.appSetLang('jap')
      console.log(this.$t(['1']))
      setTimeout(() => {
        this.appSetLang('en')
        console.log(this.$t(['1']))
      }, 3000)
    }, 3000)
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
#test {
}
</style>
