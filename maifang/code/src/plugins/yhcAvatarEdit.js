export default {
  data() {
    return {
      appAvatarDialogShow: false,
      appAvatarImgSrc: '',
      appAvatarEditParams: {
        finalWidth: 700,
        finalHeight: 420,
        containerClass: 'app-avatar-container-landscape'
      }
    }
  },
  methods: {
    // landscape / vertical / square
    appAvatarDialogOpen(
      identifierName,
      eventName,
      imgSrc,
      imgSize = 'landscape'
    ) {
      switch (imgSize) {
        case 'landscape':
          this.$root.$children['0'].appAvatarEditParams = {
            finalWidth: 700,
            finalHeight: 420,
            containerClass: 'app-avatar-container-landscape'
          }
          break
        case 'vertical':
          this.$root.$children['0'].appAvatarEditParams = {
            finalWidth: 600,
            finalHeight: 800,
            containerClass: 'app-avatar-container-vertical'
          }
          break
        case 'square':
          this.$root.$children['0'].appAvatarEditParams = {
            finalWidth: 600,
            finalHeight: 600,
            containerClass: 'app-avatar-container-square'
          }
          break
        default:
          break
      }
      this.appSetEmitterIdentifierName(identifierName, eventName)
      this.$root.$children['0'].appAvatarImgSrc = imgSrc
      this.$root.$children['0'].appAvatarDialogShow = true
    },
    appAvatarDialogConfirm() {
      this.$root.$children['0'].$refs.yhcAvatarComponent
        .confirm()
        .then(res => {
          this.$root.$children['0'].appAvatarDialogShow = false
          this.appBroadcast(
            window.vm_identifierName,
            window.vm_eventName,
            JSON.stringify(res)
          )
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
