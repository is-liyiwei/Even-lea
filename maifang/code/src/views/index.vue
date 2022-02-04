<template>
  <div class="app-container" id="index">
    <van-cell
      @click="appToPage(v.name)"
      :key="k"
      v-for="(v, k) in routerList"
      :title="v.name"
      is-link
    />
    <!-- :value="v.meta && v.meta.developer" -->
  </div>
</template>

<script>
import xToken from '@/storages/xToken'

let identifierName = 'index'
// import module from './module'
export default {
  name: identifierName,
  components: {},
  mixins: [],
  data() {
    return {
      routerList: []
    }
  },
  props: {},
  computed: {},
  watch: {},
  methods: {
    makePageEntrance() {
      let routerList = []
      let whiteList = ['index', 'root']
      for (
        let index = 0;
        index < this.$router.options.routes.length;
        index++
      ) {
        const element = this.$router.options.routes[index]
        if (!whiteList.includes(element.name) && element.name) {
          routerList.push(element)
        }
        this.routerList = routerList
      }
    }
  },
  beforeCreate() {},
  created() {},
  mounted() {
    this.makePageEntrance()
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
#index {
}
</style>
