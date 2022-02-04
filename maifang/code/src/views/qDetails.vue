<template>
  <!-- <div class="app-component" id="qDetails"> -->
  <div class="app-container" id="qDetails" v-html="result"></div>
</template>

<script>
// import module from './module'
import PaginationModel from '@/ajax/YhcAjax/PaginationModel'
import { encrypt, decrypt } from '@/cryptoJS'

import allTabData from '@/utils-project/allTabData'

// import fixBackPageList from '@/commonMethod/fixBackPageList'
// import xToken from '@/storages/xToken'
// import userInfoStorage from '@/storages/userInfoStorage'

// import createScrollDomHeight from '@/utils/createScrollDomHeight'

let identifierName = 'qDetails'
let apiName = 'InfoSpec'
// Js部分尽量采用ES6语法，webpack babel插件会转义兼容
export default {
  name: identifierName,
  mixins: [],
  data() {
    return {
      result: '',
      title: '',
      tabIndex: '',

      pageList: [],
      pageModel: {},
      queryModel: {
        keyName: ''
      },
      pagePagination: new PaginationModel(),

      trueStyle: {
        height: 0
      },

      itemId: null,
      pageType: null

      // 为了解决数据没回来显示undefined的问题
      // isRenderPage: false
    }
  },
  async created() {
    // // 传id进来，说明这是个编辑状态的页面，没有id传进来，说明这是个添加的页面
    this.title = this.$route.query.title
    this.tabIndex = this.$route.query.tabIndex

    let currTab = allTabData[`tab${this.tabIndex}`]

    for (let index = 0; index < currTab.length; index++) {
      const v = currTab[index]
      if (v.title === this.title) {
        this.result = v.html
        break
      }
    }

    // // 这个不一定用到，某些特定情况下会有一个type判断页面的逻辑
    // // 注意这个query.type是一个字符串，传过来只能是54个字母组合，默认是unknown
    // this.pageType = this.$route.query.type
    //   ? decrypt(this.$route.query.type)
    //       .replace(/[^a-zA-Z]/g, '')
    //   : 'unknown'

    // if (this.itemId) {
    //   this.getItem(this.itemId)
    // } else {
    // }

    // this.appPushKeepAliveView(identifierName)
    // this.pageInit('created')
  },
  async activated() {
    // this.appPatchScrollItem(identifierName)
    // this.getSelectList()
    // let { type, item } =
    //   this.appPageBackGetParams('projectItem') || {}
    // if (type && item) {
    // let flagName0 = item.status == this.queryModel.search0
    // let flagName1 =
    // this.appParseTime(item.date, '{y}') == this.yearPickerVal ||
    // this.yearPickerVal == '全部'
    // if (flagName0) {}
    // if (flagName1) {
    //   listFix(item)
    //   this.fixBackPageList(type, item)
    // }
    // this.appPageBackDeleteParams('projectItem')
  },
  async mounted() {
    // this.appTabBarSetActiveIndex(0)
    // this.$nextTick(() => {
    //   let options = [
    //     {
    //       target: '#nav',
    //       parent: this.$el
    //     },
    //     {
    //       target: '#app-fix-tab-bar'
    //     }
    //   ]
    // let allHeight = createScrollDomHeight(options)
    // this.trueStyle = {
    //   height: 'calc(100vh - {allHeight}px - {this.appCreateRemUnit(
    //     '40px'
    //   )})',
    //   overflowY: 'scroll'
    // }
    //   this.trueStyle = {
    //     height: 'calc(100vh - {allHeight}px - 40px)',
    //     overflowY: 'scroll'
    //   }
    // })
  },
  async updated() {},
  async beforeDestroy() {},
  // beforeRouteLeave(to, form, next) {
  //   console.log('beforeRouteLeave')
  //   if (this.pageList.length != 0) {
  //     let el = this.$el.querySelector('#pagination-box')
  //     this.appSetScrollItem(identifierName, el)
  //   }
  //   next()
  // },
  methods: {
    pageInit(mode) {
      this.getList()
    },
    // fixBackPageList,
    getQueryString() {
      return Object.assign({}, this.pagePagination, {
        name: this.queryModel.search0,
        key1: this.queryModel.search1,
        key2: this.queryModel.search2,
        key3: this.queryModel.search3,
        key4: this.queryModel.search4,
        key5: this.queryModel.search5,
        status: this.queryModel.searchMenu
      })
    },
    getItem(id) {
      this.YhcAjax['get' + apiName](
        {},
        {
          id
        }
      ).then(res => {
        // let fixArray = ['loanAmount', 'monthlyPaymentAmount']
        // this.appFixMoney(res, fixArray, 'fen2yuan')
        this.pageModel = res
      })
    },
    getList(isMissLoading = false) {
      let query = this.getQueryString()
      query.isMissLoading = isMissLoading
      this.YhcAjax['get' + apiName + 'List']({}, query).then(res => {
        this.pageList = res.list
        this.pagePagination.totalNum = res.count
      })
    },
    // async getList(isMissLoading = false) {
    //   if (this.pagePagination.whetherFetch()) {
    //     return
    //   }
    //   this.pagePagination.updateFetching(true)
    //   let query = this.getQueryString()
    //   query.isMissLoading = isMissLoading
    //   this.YhcAjax.getProjectList({}, query).then(res => {
    //     if (res.list.length == 0) {
    //       this.pagePagination.updateLast(true)
    //     } else {
    //       res.list.map(v => {
    //         listFix(v)
    //       })
    //       this.pageList = [...this.pageList, ...res.list]
    //     }
    //     this.pagePagination.updatePage()
    //     this.pagePagination.updateFetching(false)
    //     this.isRenderPage = true
    //   })
    // },
    delItem(item) {
      const id = item.id
      this.YhcAjax['delete' + apiName](
        {},
        {
          id
        }
      ).then(res => {
        this.getList()
      })
    },
    editItem(model) {
      // let fixArray = ['loanAmount', 'monthlyPaymentAmount']
      // this.appFixMoney(this.pageModel, fixArray, 'yuan2fen')
      console.log(JSON.stringify(this.pageModel, null, 2))
      return
      if (this.itemId) {
        this.YhcAjax['put' + apiName](this.pageModel).then(res => {
          console.log(res)
          this.appBackPage()
        })
      } else {
        this.YhcAjax['post' + apiName](this.pageModel).then(res => {
          console.log(res)
          this.appBackPage()
        })
      }
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
#qDetails {
  font-size: 16px;
  line-height: 26px;
  padding: 0 32px;

  img {
    width: 100%;
  }

  figure {
    margin: 0 !important;
  }

  @media screen and (max-width: 1000px) {
    padding: 0 16px;
  }
}
</style>
