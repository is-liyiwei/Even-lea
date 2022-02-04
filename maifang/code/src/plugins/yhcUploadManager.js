import pictureCorrect from '@/utils/pictureCorrect'
import getFileType from '@/utils/getFileType'

export default {
  data() {
    return {
      appUploadManagerAccept: 'audio/*,video/*,image/*',
      appUploadManagerMultiple: false,
      appUploadManagerFileInfo: []
    }
  },
  methods: {
    appUploadManagerWebFileToVantFile(e) {
      let fileList = []
      for (let index = 0; index < e.length; index++) {
        const element = e[index]
        fileList.push({
          file: element,
          message: '',
          status: ''
        })
      }
      return fileList
    },
    appUploadManagerGetFileInfo() {
      return this.$root.$children['0'].appUploadManagerFileInfo
    },
    appUploadManagerSetAccept(accept = 'audio/*,video/*,image/*') {
      this.$root.$children['0'].appUploadManagerAccept = accept
    },
    appUploadManagerSetMultiple(status = false) {
      this.$root.$children['0'].appUploadManagerMultiple = status
    },
    appUploadManagerSetFileInfo(fileList) {
      if (!Array.isArray(fileList)) {
        fileList = [...fileList]
      }
      let arr = []
      for (let index = 0; index < fileList.length; index++) {
        const file = fileList[index]
        arr.push({
          name: file.name,
          size: file.size,
          lastModifiedTimestamp: file.lastModified,
          type: getFileType(file.name)
        })
      }
      this.$root.$children[
        '0'
      ].appUploadManagerFileInfo = Object.freeze(arr)
    },
    async appUploadManagerSend(
      fileList,
      isUseChainEXIFPlugin = true
    ) {
      return new Promise(async (resolve, reject) => {
        if (!Array.isArray(fileList)) {
          fileList = [fileList]
        }
        let result = []
        for (let index = 0; index < fileList.length; index++) {
          let item = fileList[index]
          let type = getFileType(item.file.name)
          let urlMap = {
            Image: 'blob',
            Video: 'blob/video',
            Audio: 'blob',
          }
          let url = urlMap[type]

          if (isUseChainEXIFPlugin && type === 'Image') {
            let res = await pictureCorrect(item.file, {
              qlty: 0.8,
              size: 1000,
              isCompress: true,
              isCorrectOrientation: true
            })
            item = res[0]
          }

          await this.YhcAjax.uploadFile(item.file, url).then(res => {
            let detail = window.appToVantMediaModel(res)
            result.push(detail)
          })
        }
        resolve(result)
      })
    },
    appUploadManagerHandle(identifierName, eventName) {
      this.appSetEmitterIdentifierName(identifierName, eventName)
      this.$nextTick(() => {
        document.getElementById('appUploadManagerDom').click()
      })
    },
    async appUploadManagerChange(e) {
      let fileList = this.appUploadManagerWebFileToVantFile(
        e.target.files
      )
      this.appUploadManagerSetFileInfo(fileList)
      this.appBroadcast(
        window.vm_identifierName,
        window.vm_eventName,
        [fileList]
      )
    }
  }
}
