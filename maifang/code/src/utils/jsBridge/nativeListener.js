// import xToken from '@/storages/xToken'

let identifierName = 'nativeListener'

function parseData(res) {
  return JSON.parse(res)
}

function onGetLocation(appRes) {
  console.warn(`onGetLocation 收到来自app的数据`)
  console.log(parseData(appRes))
}

function onGetAppCache(appRes) {
  console.warn(`onGetAppCache 收到来自app的数据`)
  console.log(parseData(appRes))
}

function onCleanAppCache(appRes) {
  console.warn(`onCleanAppCache 收到来自app的数据`)
  console.log(parseData(appRes))
}

function onLangChange(appRes) {
  console.warn(`onLangChange 收到来自app的数据`)
  console.log(parseData(appRes))
}

function onOpenMap(appRes) {
  console.warn(`onOpenMap 收到来自app的数据`)
  console.log(parseData(appRes))
}

function onNotification(appRes) {
  console.warn(`onNotification 收到来自app的数据`)
  console.log(parseData(appRes))
}

function onChooseMedia(appRes) {
  console.warn(`onChooseMedia 收到来自app的数据`)
  console.log(parseData(appRes))
}

export default {
  onGetLocation,
  onGetAppCache,
  onCleanAppCache,
  onLangChange,
  onOpenMap,
  onNotification,
  onChooseMedia
}
