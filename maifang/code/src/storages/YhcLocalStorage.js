class YhcLocalStorage {
  constructor(name) {
    this.name = name
  }
  static instance(name) {
    this.i = this.i || new this(name)
    return this.i
  }
  get() {
    const _cache = localStorage.getItem(this.name)
    return JSON.parse(_cache)
  }
  set(i) {
    i = JSON.stringify(i)
    return localStorage.setItem(this.name, i)
  }
  remove() {
    return localStorage.removeItem(this.name)
  }
}

export default YhcLocalStorage
