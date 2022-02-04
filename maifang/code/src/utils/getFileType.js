function getFileType(fileName) {
  if (!fileName) return false
  var imgType = ['gif', 'jpeg', 'jpg', 'bmp', 'png']
  var videoType = [
    'avi',
    'wmv',
    'mkv',
    'mp4',
    'mov',
    'rm',
    '3gp',
    'flv',
    'mpg',
    'rmvb'
  ]
  var audioType = ['mp3', 'wav']
  var adobeType = ['pdf', 'psd']
  var officeType = [
    'doc',
    'dot',
    'docx',
    'dotx',
    'xls',
    'xlsx',
    'xlsb',
    'ppt',
    'pptx'
  ]

  if (
    RegExp('.(' + imgType.join('|') + ')$', 'i').test(
      fileName.toLowerCase()
    )
  ) {
    return 'Image'
  }

  if (
    RegExp('.(' + videoType.join('|') + ')$', 'i').test(
      fileName.toLowerCase()
    )
  ) {
    return 'Video'
  }

  if (
    RegExp('.(' + audioType.join('|') + ')$', 'i').test(
      fileName.toLowerCase()
    )
  ) {
    return 'Audio'
  }

  if (
    RegExp('.(' + adobeType.join('|') + ')$', 'i').test(
      fileName.toLowerCase()
    )
  ) {
    return 'Adobe'
  }

  if (
    RegExp('.(' + officeType.join('|') + ')$', 'i').test(
      fileName.toLowerCase()
    )
  ) {
    return 'Office'
  }

  return ''
}

export default getFileType
