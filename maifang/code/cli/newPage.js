const chalk = require('chalk')
const fs = require('fs')
const path = require('path')
const str1 = `请输入要生成的页面名称、会生成在 views/目录下\n`
const str2 = `多个页面名称用,隔开如home,goods、则会在views目录下生产home.vue和goods.vue\n`
console.log(chalk.yellow(str1))
console.log(chalk.yellow(str2))

let currPageList = []

const templateStr = `<template>
  <!-- <div class="app-component" id="{{identifierName}}"> -->
  <div class="app-container" id="{{identifierName}}">
    <h1>{{identifierName}}</h1>
  </div>
</template>

<script>
// import module from './module'
import PaginationModel from "@/ajax/YhcAjax/PaginationModel";
import { encrypt, decrypt } from '@/cryptoJS'

// import fixBackPageList from '@/commonMethod/fixBackPageList'
// import xToken from '@/storages/xToken'
// import userInfoStorage from '@/storages/userInfoStorage'

// import createScrollDomHeight from '@/utils/createScrollDomHeight'

let identifierName = '{{identifierName}}'
let apiName = 'InfoSpec'
// Js部分尽量采用ES6语法，webpack babel插件会转义兼容
export default {
  name: identifierName,
  mixins: [],
  data() {
    return {
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
      pageType: null,

      // 为了解决数据没回来显示undefined的问题
      // isRenderPage: false
    }
  },
  async created() {
    // // 传id进来，说明这是个编辑状态的页面，没有id传进来，说明这是个添加的页面
    // this.itemId = decrypt(this.$route.query.id)
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
      this.YhcAjax['get' + apiName]({}, {
        id
      }).then(res => {
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
      this.YhcAjax['delete' + apiName]({}, {
        id
      }).then(res => {
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

<style rel="stylesheet/scss" lang="scss" scoped>
#{{identifierName}} {

}
</style>
`

let createFileTruePath = (
  currFile__dirname = './',
  options = {
    filePath: './',
    fileName: +new Date(),
    mime: 'json'
  }
) => {
  let _path = path.resolve(
    currFile__dirname,
    `${options.filePath}${options.fileName}.${options.mime}`
  )

  return _path
}

let findSync = (
  dirPath,
  options = {
    hasDir: true,
    hasFile: true,
    deep: true
  }
) => {
  let result = []
  function finder(pa) {
    let files = fs.readdirSync(pa)
    files.forEach((val, index) => {
      let fPath = path.join(pa, val)
      let stats = fs.statSync(fPath)
      if (stats.isDirectory() && options.hasDir) {
        result.push(fPath)
        // 递归读取文件夹下文件
        options.deep && finder(fPath)
      }
      // 读取文件名
      if (stats.isFile() && options.hasFile) {
        result.push(fPath)
      }
    })
  }
  finder(dirPath)
  return result
}

const deleteLastStr = str => str.substring(0, str.length - 1)
const unique = arr => [...new Set(arr)]

function makeArr(arr) {
  let str = ``
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index]
    str += `\'${element}\',`
  }
  str = deleteLastStr(str)
  return str
}

function makeFile(pageList) {
  for (let i = 0; i < pageList.length; i++) {
    let str = templateStr
    str = str.replace(/{{identifierName}}/g, pageList[i])
    let filePath = createFileTruePath(__dirname, {
      filePath: `../src/views/`,
      fileName: pageList[i],
      mime: 'vue'
    })
    fs.writeFileSync(filePath, str)
  }
}

function makeRouter(allFile) {
  let routerTpl = `let pageList = [${makeArr(allFile)}]

export default pageList`

  let filePath = createFileTruePath(__dirname, {
    filePath: `../src/router/appRouter/`,
    fileName: 'pageList',
    mime: 'js'
  })
  fs.writeFileSync(filePath, routerTpl)
}

function takeFileName(fileList) {
  let res = []
  for (let index = 0; index < fileList.length; index++) {
    const element = fileList[index]
    const fileName = path.parse(element).name
    res.push(fileName)
  }
  return res
}

function getDirFileList(paramsPath, options) {
  paramsPath = path.resolve(__dirname, paramsPath)
  return findSync(paramsPath, options)
}

const checkArrItemInOrderArr = (arr1, arr2) => {
  const result = []
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i].toString() === arr2[j].toString()) {
        result.push(arr1[i])
      }
    }
  }
  return result
}

process.stdin.on('data', async chunk => {
  let input = String(chunk)
    .trim()
    .toString()

  input = input.replace(/，/gi, ',')

  if (!input) {
    console.log(chalk.red(`输入无效`))
    console.log(chalk.red(`生成文件失败`))
    process.stdin.emit('end')
    return
  }

  currPageList = input.split(',')

  let fileList = takeFileName(
    getDirFileList('../src/views/', {
      hasDir: false,
      hasFile: true,
      deep: false
    })
  )

  let res = checkArrItemInOrderArr(currPageList, fileList)

  if (res.length) {
    console.log(`\n`)
    for (let index = 0; index < res.length; index++) {
      const element = res[index]
      console.log(chalk.red(`重复定义${element}.vue文件`))
    }
    console.log(chalk.red(`生成文件失败`))
    process.stdin.emit('end')
  } else {
    makeRouter(unique([...currPageList, ...fileList]))
    makeFile(currPageList)
    console.log(`\n`)
    console.log(chalk.green(`生成文件成功`))
    console.log(chalk.green(`已自动生成路由文件`))
    process.stdin.emit('end')
  }
})
process.stdin.on('end', () => {
  console.log(`\n`)
  console.log(chalk.blueBright('任务结束'))
  process.exit()
})
