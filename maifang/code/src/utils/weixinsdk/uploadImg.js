// 1. 选择图片
// 2. 上传图片
// 3. 调用服务器接口, 把图片从微信服务器下载到自己的服务器
// 4. 把获取到的微信服务器的图片地址
export class UploadImageByWXSDK {
  constructor(wx) {
    this.wx = wx
  }
  async chooseImage() {
    return new Promise((resovle, reject) => {
      this.wx.chooseImage({
        count: 9, // 最多可以选择的图片张数，默认9
        sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
        sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
        success: async (res) => {
          // success
          var localIds = res.localIds
          console.log(localIds, 'local')
          const serverIds = []
          for (let idIndex = 0; idIndex < localIds.length; idIndex++) {
            const element = localIds[idIndex]
            const serverId = await this.upload2WX(element)
            serverIds.push(serverId)
          }
          resovle(serverIds)
        },
        fail: function(err) {
          // fail
          reject(err)
        },
        complete: function() {
          // complete
        }
      })
    })
  }
  async upload2WX(localId) {
    return new Promise((resolve, reject) => {
      wx.uploadImage({
        localId: localId, // 需要上传的图片的本地ID，由chooseImage接口获得
        isShowProgressTips: 0, // 默认为1，显示进度提示
        success: function(res) {
          var serverId = res.serverId // 返回图片的服务器端ID
          resolve(serverId)
        }
      })
    })
  }
}
