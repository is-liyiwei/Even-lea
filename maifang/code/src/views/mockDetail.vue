<template>
  <div class="app-container" id="mockDetail">
    <van-field v-model="pageModel.user.id" clearable label="用户id" placeholder="请输入用户id" />

    <!-- 虽然这里用指令限制了输入，但是用户仍然会使用其他方法输入非金额数据 -->
    <!-- 所以在真正的数据提交的时候还要用正则对数据进行校验 -->
    <van-field
      v-model="pageModel.points"
      v-app-is-money-data
      clearable
      type="number"
      label="金额"
      placeholder="请输入金额"
    />

    <van-field v-model="pageModel.points" center clearable label="其他UI形式" placeholder="请输入其他UI形式">
      <van-button slot="button" size="small" type="info">按钮</van-button>
    </van-field>

    <van-field v-model="pageModel.points" center clearable label="其他UI形式" placeholder="请输入其他UI形式">
      <van-button
        style="background-color: transparent; border-color: transparent; color: #ff0000"
        slot="button"
        size="small"
        type="primary"
        >按钮</van-button
      >
    </van-field>

    <van-field
      v-model="pageModel.pickerValue"
      label="picker演示"
      readonly
      right-icon="arrow"
      placeholder="picker演示"
      @click="pickerHandle"
    />

    <van-field
      v-model="pageModel.actionSheetValue"
      label="actionSheet演示"
      readonly
      right-icon="arrow"
      placeholder="actionSheet演示"
      @click="actionSheetHandle"
    />

    <van-field
      :value="pageModel.date | appParseTime"
      label="时间演示"
      readonly
      right-icon="arrow"
      placeholder="时间演示"
      @click="dateTimeHandle"
    />

    <van-field
      :value="`${pageModel.province}${pageModel.city}${pageModel.district}`"
      label="地址演示"
      right-icon="arrow"
      placeholder="请选择地址"
      @click="pickerAreaSelectHandle"
      readonly
    />

    <van-checkbox-group v-model="pageModel.checkboxResult">
      <van-cell-group>
        <van-cell
          v-for="(item, index) in ['a', 'b', 'c']"
          clickable
          :key="item"
          :title="`复选框 ${item}`"
          @click="$refs.checkboxes[index].toggle()"
        >
          <template #right-icon>
            <van-checkbox :name="item" ref="checkboxes" />
          </template>
        </van-cell>
      </van-cell-group>
    </van-checkbox-group>

    <van-field
      v-model="pageModel.detailAddress"
      label="多行文本"
      type="textarea"
      placeholder="请输入多行文本"
      rows="3"
      autosize
    />

    <van-cell center title="开关">
      <template #right-icon>
        <van-switch v-model="pageModel.checkedStatus" size="44" />
      </template>
    </van-cell>

    <van-radio-group v-model="pageModel.radioboxResult">
      <van-cell-group>
        <van-cell
          :key="index"
          v-for="(item, index) in ['1', '2', '3']"
          :title="'单选框' + (index + 1)"
          clickable
          @click="pageModel.radioboxResult = item"
        >
          <template #right-icon>
            <van-radio :name="item" />
          </template>
        </van-cell>
      </van-cell-group>
    </van-radio-group>

    <div class="app-upload-box-by-vant-reset">
      <div class="label">多个文件</div>
      <div class="cell-value">
        <van-uploader
          multiple
          result-type="file"
          @click-preview="tapUploaderItem"
          :after-read="onAfterReadUploader"
          @delete="deleteUploaderItem"
          :preview-full-image="false"
          :file-list="pageModel.fileList"
          name="fileList"
        />
      </div>
    </div>

    <div class="app-upload-box-by-vant-reset">
      <div class="label">单个文件</div>
      <!-- 加上这两个可以在上传之前做些判断 -->

      <!-- :before-read="onBeforeReadUploader" -->

      <!-- 
        onBeforeReadUploader(event) {
          // 注意event可能是obj也可能是arr(根据是否多选决定)
          console.log(event)
          return false
        }, 
      -->

      <div class="cell-value">
        <van-uploader
          result-type="file"
          @click-preview="tapUploaderItem"
          :after-read="onAfterReadUploader"
          name="fileJson"
          @delete="deleteUploaderItem"
          :max-count="1"
          :preview-full-image="false"
          :file-list="pageModel.fileJson.url ? [pageModel.fileJson] : []"
        />
      </div>
    </div>

    <van-button @click="uploadHandle" class="app-mgl-16" plain type="primary"> 直接触发上传 </van-button>

    <div class="app-pda-16">
      <van-button type="info" size="large" @click="confirmEdit">{{ itemId ? '保存' : '添加' }}</van-button>
    </div>
  </div>
</template>

<script>
import PaginationModel from '@/ajax/YhcAjax/PaginationModel'
import { encrypt, decrypt } from '@/cryptoJS'

let identifierName = 'mockDetail'
// import module from './module'
export default {
  name: identifierName,
  components: {},
  mixins: [],
  data() {
    return {
      pageList: [],
      pageModel: {
        user: {
          id: '16'
        },
        points: null,
        fileList: [],
        fileJson: {},
        checkboxResult: ['a', 'b'],
        radioboxResult: '1',
        pickerValue: '',
        actionSheetValue: '',
        province: '',
        city: '',
        district: '',
        detailAddress:
          '请输入多行请输入多行请输入多行请输入多行请输入多行请输入多行请输入多行请输入多行请输入多行请输入多行',
        date: new Date(),
        checkedStatus: true
      },
      queryModel: {
        name: ''
      },

      itemId: null,
      pageType: null
    }
  },
  props: {},
  computed: {},
  watch: {},
  beforeRouteLeave(to, form, next) {
    this.appPickerSelectSetPopupStatus(false)
    this.appPickerDateTimeSelectSetPopupStatus(false)
    this.appPickerAreaSelectSetPopupStatus(false)
    this.appActionSheetSetStatus(false)
    next()
  },
  methods: {
    confirmEdit() {
      // 传给后端时候转成分为单位
      const fixArray = ['points']
      this.appFixMoney(this.pageModel, fixArray, 'yuan2fen')

      if (this.itemId) {
        this.YhcAjax.putPointsTest(this.pageModel).then(res => {
          this.appShowToast({
            message: '操作成功'
          })
          this.appBackPage()
        })
      } else {
        this.YhcAjax.postPointsTest(this.pageModel).then(res => {
          this.appShowToast({
            message: '操作成功'
          })
          this.appBackPage()
        })
      }
    },
    getItem(id) {
      this.YhcAjax.getPointsTest(null, {
        id
      }).then(res => {
        this.pageModel = res
        // 拿到金额时候要分转元为单位
        const fixArray = ['points']
        this.appFixMoney(this.pageModel, fixArray, 'fen2yuan')
        // res.list.map(v => this.appFixMoney(v, fixArray, 'fen2yuan'))
      })
    },
    tapUploaderItem(file, detail) {
      console.log(file)
      console.log(detail)
    },
    async onAfterReadUploader(fileList, detail) {
      if (!Array.isArray(fileList)) {
        fileList = [fileList]
      }
      let key = detail.name
      await this.appUploadManagerSend(fileList).then(res => {
        if (key === 'fileJson') {
          this.pageModel[key] = res[0]
        }
        if (key === 'fileList') {
          this.pageModel[key].push(...res)
        }
      })
    },
    deleteUploaderItem(file, detail) {
      let key = detail.name
      if (key === 'fileJson') {
        this.pageModel[key] = {}
      }
      if (key === 'fileList') {
        this.pageModel[key].splice(detail.index, 1)
      }
    },
    async uploadHandle() {
      // 注意这里经过处理，返回的文件fileList和vant的格式一样
      this.$once('uploadHandle', async fileList => {
        await this.appUploadManagerSend(fileList).then(res => {
          console.log(res)
        })
      })
      this.appUploadManagerHandle(identifierName, 'uploadHandle')
    },
    appPickerAreaSelectCancelHandle(cancelType, vm_identifierName, vm_eventName) {
      console.log('appPickerAreaSelectCancelHandle')
      console.log(cancelType)
      console.log(vm_identifierName)
      console.log(vm_eventName)
    },
    pickerAreaSelectHandle() {
      this.$once('pickerAreaSelect', jsonRes => {
        // 这里写业务代码
        let data = JSON.parse(jsonRes)
        console.log(data)
        this.pageModel.province = data[0].name
        this.pageModel.city = data[1].name
        this.pageModel.district = data[2].name
      })
      this.appPickerAreaSelectOpen(identifierName, 'pickerAreaSelect')
    },
    appPickerSelectCancelHandle(cancelType, vm_identifierName, vm_eventName) {
      console.log('appPickerSelectCancelHandle')
      console.log(cancelType)
      console.log(vm_identifierName)
      console.log(vm_eventName)
    },
    pickerHandle() {
      this.$once('myPickerDemo', jsonRes => {
        // 这里写业务代码
        let data = JSON.parse(jsonRes)
        console.log(data)
        this.pageModel.pickerValue = data.value.join(',')
      })
      // picker组件的数据，values数量代表列数量，默认数据不联动
      const dataList = [
        {
          values: ['1', '2', '3']
        },
        {
          values: ['4', '5', '6']
        }
      ]
      this.appPickerSelectOpen(identifierName, 'myPickerDemo', dataList)
    },
    actionSheetHandle() {
      this.$once('actionSheetKey', async item => {
        console.log(JSON.parse(item))
        let data = JSON.parse(item)
        this.pageModel.actionSheetValue = data.name
      })
      this.appActionSheetOpen(identifierName, 'actionSheetKey', [
        { name: '选项一' },
        { name: '选项二' },
        { name: '选项三' }
      ])
    },
    appPickerDateTimeSelectCancelHandle(cancelType, vm_identifierName, vm_eventName) {
      console.log('appPickerDateTimeSelectCancelHandle')
      console.log(cancelType)
      console.log(vm_identifierName)
      console.log(vm_eventName)
    },
    dateTimeHandle() {
      this.$once('dateTimePickerDemo', jsonRes => {
        // 这里写业务代码
        let data = JSON.parse(jsonRes)
        console.log(data)
        this.pageModel.date = data.value
      })

      // https://youzan.github.io/vant/1.x/#/zh-CN/datetime-picker
      // 这里的参数就是文档的参数，目前只有这些可用，没有值则使用文档的默认值
      this.appPickerDateTimeSelectSetConfig({
        type: 'date',
        minHour: 10,
        maxHour: 23,
        minMinute: 10,
        maxMinute: 59,
        minDate: +new Date(2018, 0, 1),
        maxDate: +new Date(2025, 11, 31),
        currentDate: +new Date()
        // formatter(type, value) {
        //   if (type === 'year') {
        //     return `${value}年`
        //   } else if (type === 'month') {
        //     return `${value}月`
        //   }
        //   return value
        // }
      })

      this.appPickerDateTimeSelectOpen(identifierName, 'dateTimePickerDemo')
    }
  },
  beforeCreate() {},
  created() {
    // 传id进来，说明这是个编辑状态的页面，没有id传进来，说明这是个添加的页面
    this.itemId = decrypt(this.$route.query.id)
    // 这个不一定用到，某些特定情况下会有一个type判断页面的逻辑
    // 注意这个query.type是一个字符串，传过来只能是54个字母组合，默认是unknown
    this.pageType = this.$route.query.type ? decrypt(this.$route.query.type).replace(/[^a-zA-Z]/g, '') : 'unknown'

    console.log(this.itemId)
    console.log(this.pageType)
    if (this.itemId) {
      this.getItem(this.itemId)
    } else {
    }
  },
  mounted() {}
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
#mockDetail {
}
</style>
