class PaginationModel {
  constructor(options = {}) {
    this.reset(options)
  }
  updatePage(num = 1) {
    this.page += num
  }
  updateLast(status = false) {
    this.last = status
  }
  updateFetching(status = false) {
    this.fetching = status
  }
  updateEpochFrom(epochFrom) {
    this.epochFrom = !epochFrom ? 0 : epochFrom
  }
  updateEpochTo(epochTo) {
    this.epochTo = !epochTo ? 100000000000000 : epochTo
  }
  whetherFetch() {
    return this.fetching || this.last
  }
  reset(options = {}) {
    this.page = options.page || 1
    this.take = options.take || 10
    this.epochFrom = options.epochFrom || 0
    this.epochTo = options.epochTo || 100000000000000
    this.last = options.last || false
    this.fetching = options.fetching || false
    this.list = options.list || []
    this.totalNum = options.totalNum || 0
    this.up = options.up || true
  }
}

export default PaginationModel
