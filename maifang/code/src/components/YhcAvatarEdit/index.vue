<template>
  <div>
    <vue-cropper
      :class="`cropper-normal ${containerClass}`"
      v-bind="options"
      :src="src"
      ref="vueCropper"
    ></vue-cropper>
  </div>
</template>

<script>
import VueCropper from './VueCropper.js'
export default {
  name: 'YhcAvatarEdit',
  props: {
    finalWidth: {
      type: Number,
      default: 500
    },
    finalHeight: {
      type: Number,
      default: 500
    },
    src: {
      type: String,
      default: ''
    },
    containerClass: {
      type: String,
      default: ''
    },
    options: {
      type: Object,
      default: () => {
        return {
          viewMode: 3,
          dragMode: 'move',
          initialAspectRatio: 1,
          autoCropArea: 1,
          restore: true,
          background: true,
          canMoveBox: true,
          guides: true,
          highlight: true,
          cropBoxMovable: true,
          // 设置不可拖动选区
          cropBoxResizable: false,
          toggleDragModeOnDblclick: true,
          responsive: true,
          modal: true,
          center: true,
          checkCrossOrigin: true
        }
      }
    }
  },
  watch: {
    src(newV, oldV) {
      if (newV !== oldV && newV) {
        this.$refs.vueCropper.replace(newV)
      }
    }
  },
  data() {
    return {}
  },
  components: {
    VueCropper
  },
  methods: {
    confirm(options = {}) {
      const croppedOptions = {
        width: this.finalWidth,
        height: this.finalHeight,
        ...options
      }
      try {
        const img = this.$refs.vueCropper
          .getCroppedCanvas(croppedOptions)
          .toDataURL()
        return Promise.resolve(img)
      } catch (error) {
        return Promise.reject(error)
      }
    }
  },
  mounted() {}
}
</script>

<style lang="scss" rel="stylesheet/scss">
@import './cropper.css';
.cropper-view-box,
.cropper-face {
  outline: none;
}
.cropper-modal {
  background-color: #000;
  opacity: 1;
}
.cropper-dashed {
  border: 0 solid #fff;
}
</style>
