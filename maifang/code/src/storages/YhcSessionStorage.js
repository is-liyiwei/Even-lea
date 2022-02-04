class YhcSessionStorage {
  constructor(name) {
    this.name = name
  }
  static instance(name) {
    this.i = this.i || new this(name)
    return this.i
  }
  get() {
    const _cache = sessionStorage.getItem(this.name)
    return JSON.parse(_cache)
  }
  set(i) {
    i = JSON.stringify(i)
    return sessionStorage.setItem(this.name, i)
  }

  remove() {
    return sessionStorage.removeItem(this.name)
  }
}

export default YhcSessionStorage
