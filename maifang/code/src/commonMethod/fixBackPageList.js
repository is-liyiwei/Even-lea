function fixBackPageList(
  type,
  item,
  listKey = 'pageList',
) {
  let idx = this[listKey].findIndex(v => v.id == item.id)
  if (idx != -1 && type == 'del') {
    this[listKey].splice(idx, 1)
  }
  if (idx != -1 && type == 'put') {
    this[listKey].splice(idx, 1, item)
  }
  if (idx == -1 && type == 'post') {
    this[listKey].unshift(item)
  }
}

export default fixBackPageList
