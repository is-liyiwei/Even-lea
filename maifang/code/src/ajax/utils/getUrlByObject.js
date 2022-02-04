function getUrlByObject(o, prefix = '', urls = []) {
  if (o instanceof Array) {
    o.forEach((e, i) => {
      if (e instanceof Array || e instanceof Object) {
        urls = urls.concat(getUrlByObject(e, prefix))
      } else {
        if (e.toString()) {
          urls.push(prefix + '=' + e)
        }
      }
    })
  } else if (o instanceof Object) {
    for (const p in o) {
      const value = o[p]
      if (value instanceof Array || value instanceof Object) {
        urls = urls.concat(
          getUrlByObject(value, prefix ? prefix + '.' + p : p)
        )
      } else {
        if (value.toString()) {
          urls.push((prefix ? prefix + '.' + p : p) + '=' + value)
        }
      }
    }
  }
  return urls
}

export default getUrlByObject
