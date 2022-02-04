<template>
  <div class="app-container" id="mockList">
    <div class="title-msg app-fz-16 app-pda-8 app-fwb">
      滚动底部v-appReachBottom指令和分页model的使用，元素必须有overflow-y:
      scroll
    </div>
    <div v-appReachBottom="reachBottomHandle" class="pagination-box">
      <div
        v-for="(v, k) in pageList"
        :key="k"
        class="item app-pda-16"
      >
        <div class="app-pdb-8">数据id： {{ v.id }}</div>
        <div class="app-pdb-8">
          question： {{ v.question }}
        </div>
        <!-- 因为这里是静态显示金额，所以直接用vue的过滤器 -->
        <div class="app-pdb-8">
          余额： {{ v.date | appFilterMoney }}
        </div>
        <!-- 格式化时间用vue的过滤器，该方法也可用window.appParseTime -->
        <div class="app-pdb-8">
          注册时间： {{ v.date | appParseTime }}
        </div>
        <van-button type="info" @click="appToPage('mockDetail', v.id, 'edit')"
          >详情</van-button
        >
        <van-button type="danger" @click="deleteItem(v.id, k)"
          >删除</van-button
        >
      </div>
    </div>

    <div class="app-pdr-32 app-pdl-32 app-mgt-32">
      <van-button
        type="info"
        size="large"
        @click="appToPage('mockDetail')"
        >添加</van-button
      >
    </div>
  </div>
</template>

<script>
import PaginationModel from '@/ajax/YhcAjax/PaginationModel'
let identifierName = 'mockList'
// import module from './module'
export default {
  name: identifierName,
  components: {},
  mixins: [],
  data() {
    return {
      pageList: [],
      pageModel: {},
      queryModel: {
        name: ''
      },
      pagePagination: new PaginationModel()
    }
  },
  props: {},
  computed: {},
  watch: {},
  methods: {
    deleteItem(id, index) {
      this.$dialog
        .confirm({
          title: '提示',
          message: '此操作将永久删除该数据, 是否继续?'
        })
        .then(() => {
          this.YhcAjax.xxx(null, {
            id
          }).then(res => {
            if (res.errorCode == 0) {
              this.pageList.splice(index, 1)
              this.appShowToast({
                message: '操作成功'
              })
            }
          })
        })
        .catch(() => {
          // on cancel
        })
    },
    getList() {
      // 检查是否可以通过请求
      if (this.pagePagination.whetherFetch()) {
        return
      }
      // 请求的query
      let query = Object.assign(
        {},
        this.queryModel,
        this.pagePagination
      )
      // 设置请求状态
      this.pagePagination.updateFetching(true)
      // 请求接口
      this.YhcAjax.getFaqList(null, query).then(res => {
        if (res.list.length == 0) {
          // 设置数据已经为空，之后不再进入请求
          this.pagePagination.updateLast(true)
        } else {
          // 这里写业务代码
          this.pageList = [...this.pageList, ...res.list]
        }
        // 更新分页
        this.pagePagination.updatePage()
        // 设置请求完毕
        this.pagePagination.updateFetching(false)
      })
    },
    reachBottomHandle(type) {
      if (type == 'bottom') {
        this.getList()
      }
    }
  },
  beforeCreate() {},
  created() {
    this.getList()
  },
  mounted() {}
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
#mockList {
  .title-msg {
    border-left: 4px solid #4fc08d;
  }
  .pagination-box {
    -webkit-overflow-scrolling: touch;
    height: 70vh;
    overflow-y: scroll;
    > .item {
      background-color: #fff;
      border-top: 1px solid #ccc;
    }
  }
}
</style>
