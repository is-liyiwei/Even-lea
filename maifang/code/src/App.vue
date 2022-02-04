<template>
  <div style="height: 100%">
    <van-nav-bar
      v-if="appNavBarShowStatus"
      :title="appNavBarTitle"
      :left-text="appNavBarLeftText"
      :right-text="appNavBarRightText"
      id="app-fix-nav-bar"
      :left-arrow="appNavBarLeftArrowStatus"
      @click-left="appNavBarClickLeft"
      @click-right="appNavBarClickRight"
    />
    <div
      v-if="appNavBarShowStatus"
      :style="{ height: appNavBarBlockHeight + 'px' }"
      id="app-fix-nav-bar-fill-block"
    ></div>

    <keep-alive :include="keepAliveIncludeList">
      <router-view></router-view>
    </keep-alive>

    <van-tabbar
      v-if="appTabBarShowStatus"
      v-model="appTabBarActive"
      :active-color="appTabBarActiveColor"
      id="app-fix-tab-bar"
      @change="appTabBarChange"
    >
      <template v-if="appTabBarType == 'normal'">
        <van-tabbar-item v-for="(v, k) in appTabBarList" :key="k" :icon="v.icon">{{ v.name }}</van-tabbar-item>
      </template>

      <template v-else>
        <van-tabbar-item v-for="(v, k) in appTabBarList" :key="k">
          <span>{{ v.name }}</span>
          <img slot="icon" :src="appTabBarActive == k ? v.active : v.normal" />
        </van-tabbar-item>
      </template>
    </van-tabbar>
    <div
      v-if="appTabBarShowStatus"
      :style="{ height: appTabBarBlockHeight + 'px' }"
      id="app-fix-tab-bar-fill-block"
    ></div>

    <van-popup
      :close-on-click-overlay="appPickerAreaSelectCloseOverlay"
      @close="appPickerAreaSelectCancel('pupop')"
      v-model="appPickerAreaSelectPopupStatus"
      position="bottom"
    >
      <van-area
        :cancel-button-text="appPickerAreaSelectCancelText"
        :item-height="appItemHeightByPicker"
        :area-list="appPickerAreaList"
        @confirm="appPickerAreaSelectDone"
        @cancel="appPickerAreaSelectCancel('picker')"
      />
    </van-popup>

    <van-popup
      :close-on-click-overlay="appPickerSelectCloseOverlay"
      @close="appPickerSelectCancel('pupop')"
      v-model="appPickerSelectPopupStatus"
      position="bottom"
    >
      <van-picker
        :cancel-button-text="appPickerSelectCancelText"
        :item-height="appItemHeightByPicker"
        :columns="appPickerSelectColumns"
        show-toolbar
        @confirm="appPickerSelectDone"
        @cancel="appPickerSelectCancel('picker')"
      />
    </van-popup>

    <van-popup
      :close-on-click-overlay="appPickerDateTimeSelectCloseOverlay"
      @close="appPickerDateTimeSelectCancel('pupop')"
      v-model="appPickerDateTimeSelectPopupStatus"
      position="bottom"
    >
      <van-datetime-picker
        :cancel-button-text="appPickerDateTimeSelectCancelText"
        :item-height="appItemHeightByPicker"
        v-model="appPickerDateTimeSelectConfig.currentDate"
        :type="appPickerDateTimeSelectConfig.type"
        :min-date="appPickerDateTimeSelectConfig.minDate"
        :max-date="appPickerDateTimeSelectConfig.maxDate"
        :min-hour="appPickerDateTimeSelectConfig.minHour"
        :max-hour="appPickerDateTimeSelectConfig.maxHour"
        :min-minute="appPickerDateTimeSelectConfig.minMinute"
        :max-minute="appPickerDateTimeSelectConfig.maxMinute"
        :formatter="appPickerDateTimeSelectConfig.formatter"
        @confirm="appPickerDateTimeSelectDone"
        @cancel="appPickerDateTimeSelectCancel('picker')"
      />
    </van-popup>

    <van-action-sheet
      v-model="appActionSheetStatus"
      :actions="appActionSheetActions"
      :cancel-text="appActionSheetCancelText"
      :description="appActionSheetDescription"
      :close-on-click-overlay="appActionSheetCloseOnClickOverlay"
      @select="appActionSheetDone"
      @cancel="appActionSheetCancel"
      @close="appActionSheetClose"
    />

    <van-popup v-model="appAvatarDialogShow" :close-on-click-overlay="false">
      <YhcAvatarEdit
        :finalWidth="appAvatarEditParams.finalWidth"
        :finalHeight="appAvatarEditParams.finalHeight"
        :containerClass="appAvatarEditParams.containerClass"
        :src="appAvatarImgSrc"
        ref="yhcAvatarComponent"
      ></YhcAvatarEdit>
      <van-button type="info" style="margin: 20px auto; display: block; width: 50%" @click="appAvatarDialogConfirm"
        >确定</van-button
      >
    </van-popup>

    <iframe v-if="appQqMapIframeStatus" :src="appQqMapIframeSrc" id="appQqMapPage" frameborder="0"></iframe>

    <input
      id="appUploadManagerDom"
      type="file"
      :multiple="appUploadManagerMultiple"
      :accept="appUploadManagerAccept"
      @change="appUploadManagerChange"
    />

    <!-- <Debug></Debug> -->
  </div>
</template>
<script>
// import initWeChatSDK from '@/utils/weixinsdk/index.js'

import yhcPickerAreaSelect from '@/plugins/yhcPickerAreaSelect'
import yhcPickerSelect from '@/plugins/yhcPickerSelect'
import yhcPickerDateTimeSelect from '@/plugins/yhcPickerDateTimeSelect'
// import yhcKeepAlive from '@/plugins/yhcKeepAlive'
// import yhcRouter from '@/plugins/yhcRouter'
import yhcQqMapSelect from '@/plugins/yhcQqMapSelect'
import yhcAvatarEdit from '@/plugins/yhcAvatarEdit'
import yhcNavBar from '@/plugins/yhcNavBar'
import yhcTabBar from '@/plugins/yhcTabBar'
import yhcUploadManager from '@/plugins/yhcUploadManager'
import yhcActionSheet from '@/plugins/yhcActionSheet'

import appPlugin from '@/plugins/appPlugin'

import Debug from './Debug'

import xToken from '@/storages/xToken'
import userInfoStorage from '@/storages/userInfoStorage'

let identifierName = `app`

export default {
  name: identifierName,
  data() {
    return {
      ...appPlugin.data(),
      ...yhcPickerAreaSelect.data(),
      ...yhcPickerSelect.data(),
      ...yhcPickerDateTimeSelect.data(),
      ...yhcQqMapSelect.data(),
      ...yhcAvatarEdit.data(),
      ...yhcNavBar.data(),
      ...yhcTabBar.data(),
      ...yhcUploadManager.data(),
      ...yhcActionSheet.data()
    }
  },
  components: {
    Debug
  },
  computed: {
    keepAliveIncludeList() {
      return this.$store.state.keepAlive.keepAliveIncludeList
    }
  },
  methods: {
    // 微信登录
    async getCode(APPID) {
      function getQueryString(name, key = 'search') {
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
        var r = window.location[key].substr(1).match(reg)
        if (r != null) {
          return unescape(r[2])
        }
        return null
      }
      // 非静默授权，第一次有弹框
      // 截取路径中的code，如果没有就去微信授权，如果已经获取到了就直接传code给后台获取openId
      const code = getQueryString('code')
      let local = window.location.href
      if (code == null || code == '') {
        window.location.replace(
          'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' +
            APPID +
            '&redirect_uri=' +
            encodeURIComponent(local) +
            // '&response_type=code&scope=snsapi_userinfo&state=1#wechat_redirect'
            '&response_type=code&scope=snsapi_base&state=1#wechat_redirect'
        )
      } else {
        // 把code传给后台获取用户信息
        window.appWxPublicCode = code
        window.appShowLoading()
        await this.YhcAjax.postAccountsLogin({ code })
          .then(userInfo => {
            console.log('code : ', code)
            console.log('userInfo : ', userInfo)

            xToken.set(userInfo.id)
            userInfoStorage.set(userInfo)
            window.appHideLoading()
          })
          .catch(error => {
            // 如果后端返回110状态码，说明这个code无效了
            console.log(error)
            if (e.errorCode == 110) {
              // window.location.replace('https://clothfront.chinacloudsites.cn/web')
            }
          })
      }
    }
  },
  watch: {},
  mounted() {
    // src\plugins\data.js
    // 解决某些情况下，dpr获取不到值的问题，这里再次设置一次
    this.$nextTick(() => {
      let dpr = document.documentElement.getAttribute('data-dpr')
      this.appItemHeightByPicker = 44 * dpr
      this.appDpr = dpr
    })
    // initWeChatSDK(this.appWxPublicAppid)
  },
  async created() {
    if (this.appWxPublicRuntime) {
      if (!xToken.get()) {
        // await this.getCode(this.appWxPublicAppid)
      } else {
        // 如果有这个用户的id，则直接调用获取用户信息接口，请求完数据后执行业务逻辑即可
        // 一般来说xToken有值的话userInfo也会有值的，但是为了数据的更新还是请求一次接口
      }
    }
  }
}
</script>
