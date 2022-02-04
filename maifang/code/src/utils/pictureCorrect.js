import EXIF from './exif.js'
var canvas = document.createElement('canvas')
var ctx = canvas.getContext('2d')

function dataURLtoFile(dataurl, filename = +new Date()) {
  var arr = dataurl.split(','),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n)
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }
  return new File([u8arr], filename, { type: mime })
}

function fixImageHandle(imgDom, options) {
  let Orientation = imgDom.Orientation
  // 如果方向角不为1，都需要进行旋转
  if (Orientation != 1) {
    switch (Orientation) {
      case 6:
        runEXIF(imgDom, 90, options)
        // console.log("Need compress and exif");
        break
      case 8:
        runEXIF(imgDom, 270, options)
        // console.log("Need compress and exif");
        break
      case 3:
        runEXIF(imgDom, 180, options)
        // console.log("Need compress and exif");
        break
    }
  } else {
    // 不做旋转，并且不压缩
    if (!options.isCompress) {
      // console.log("Don't need compress and don't need exif");
      return imgDom.src
    } else {
      // console.log("Need compress don't need exif(or Orientation == 1)");
      runEXIF(imgDom, 0, options)
    }
  }

  let ndata = canvas.toDataURL('image/jpeg', options.qlty)
  // console.log(ndata);
  canvas.width = canvas.height = 0
  return ndata
}

/**
 * @actionName runEXIF,功能：对图片旋转处理
 * @param imgDom, 用来矫正方向的图片对象
 * @param rotate, 旋转角度
 * @param options
 */
function runEXIF(imgDom, rotate, options) {
  let size = options.size
  let width = options.naturalWidth
  let height = options.naturalHeight
  // 这里的处理是因为只判断旋转不压缩，但是经过canvas判断旋转后图片都会损失一点
  // 这里使用最低的限度优化
  if (!options.isCompress) {
    setTimeout(() => {
      console.warn(
        "Actually does don't need compress but need exif run so will be compress handle"
      )
      console.warn('Try as far as possible keep native size')
    }, 100)
  } else {
    if (width > size || height > size) {
      let ratio = ~~((height / width) * 10) / 10
      if (width > height) {
        width = size
        height = size * ratio
      } else {
        height = size
        width = height / ratio
      }
    }
  }

  switch (rotate) {
    case 0:
      canvas.width = width
      canvas.height = height
      ctx.fillStyle = '#fff'
      ctx.fillRect(0, 0, width, height)
      ctx.drawImage(imgDom, 0, 0, width, height)
      break
    case 90:
      canvas.width = height
      canvas.height = width
      ctx.fillStyle = '#fff'
      ctx.fillRect(0, 0, height, width)
      ctx.translate(height / 2, width / 2)
      ctx.rotate((rotate * Math.PI) / 180)
      ctx.drawImage(imgDom, -width / 2, -height / 2, width, height)
      break
    case 180:
      canvas.width = width
      canvas.height = height
      ctx.fillStyle = '#fff'
      ctx.fillRect(0, 0, width, height)
      ctx.translate(width / 2, height / 2)
      ctx.rotate((rotate * Math.PI) / 180)
      ctx.drawImage(imgDom, -width / 2, -height / 2, width, height)
      break
    case 270:
      canvas.width = height
      canvas.height = width
      ctx.fillStyle = '#fff'
      ctx.fillRect(0, 0, height, width)
      ctx.translate(height / 2, width / 2)
      ctx.rotate((rotate * Math.PI) / 180)
      ctx.drawImage(imgDom, -width / 2, -height / 2, width, height)
      break
  }
}

/**
 * @actionName pictureCorrect,功能：压缩图片&&纠正图片方向&&返回base64图片数据
 * @param fileList - 传入函数的文件列表对象，fileList对象是来自用户在一个<input>元素上选择文件后返回的FileList对象
 * @param options
 * - @param qlty - 传入函数的图片压缩比率(品质)，可选范围0-1的数字类型的值，默认是0.8
 * - @param size - 传入函数的图片压缩后的最大图片宽度和高度，默认是1000，单位是px，可自由配置。 注意：最好不要超过1000，数字过大，容易导致canvas压缩失败。由于没做瓦片处理，所以有这个限制。1000*1000的图片在前端中，基本也够用了。
 * - @param isCompress - 是否开启压缩
 * - @param isCorrectOrientation - 是否纠正方向
 *
 */

function pictureCorrect(fileList, options = {}) {
  return new Promise((resolve, reject) => {
    let defaultOptions = {
      qlty: 0.8,
      size: 1280,
      isCompress: true,
      isCorrectOrientation: true
    }
    options = Object.assign({}, defaultOptions, options)
    if (!Array.isArray(fileList)) {
      fileList = [fileList]
    }
    try {
      let blobList = []

      for (let index = 0; index < fileList.length; index++) {
        const file = fileList[index]
        let reader = new FileReader()

        reader.onload = function() {
          let imgDom = new Image()
          imgDom.src = this.result
          imgDom.Orientation = 1
          imgDom.onload = function() {
            if (options.isCorrectOrientation) {
              // 这个callback是同步的
              EXIF.getData(imgDom, function() {
                imgDom.Orientation =
                  EXIF.getTag(this, 'Orientation') || 1
              })
            }
            options.naturalWidth = imgDom.naturalWidth
            options.naturalHeight = imgDom.naturalHeight
            blobList.push({
              file: dataURLtoFile(
                fixImageHandle(imgDom, options),
                file.name
              ),
              content: fixImageHandle(imgDom, options),
              message: '',
              status: ''
            })
            if (blobList.length === fileList.length) {
              resolve(blobList)
            }
            imgDom = null
          }
          // img.complete && exifCallback(options);
        }

        reader.readAsDataURL(file)
      }
    } catch (error) {
      // console.log(error);
      reject(error)
    }
  })
}

export default pictureCorrect
