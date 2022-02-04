const keepAlive = {
  namespaced: true,
  state: {
    // 缓存的视图
    keepAliveIncludeList: [],
    domScrollMap: {}
  },
  mutations: {
    push(state, params) {
      state.keepAliveIncludeList.push(params)
    },
    unshift(state, params) {
      state.keepAliveIncludeList = state.keepAliveIncludeList.filter(
        v => {
          return v != params
        }
      )
    },
    setScrollItem(state, params) {
      let { identifierName, el } = params
      let scrollTop = el.scrollTop
      let scrollLeft = el.scrollLeft
      if (!state.domScrollMap[identifierName]) {
        state.domScrollMap[identifierName] = [
          {
            el,
            scrollTop,
            scrollLeft
          }
        ]
      } else {
        state.domScrollMap[identifierName].push({
          el,
          scrollTop,
          scrollLeft
        })
      }
    },
    patchScrollItem(state, params) {
      let { identifierName } = params
      let domList = state.domScrollMap[identifierName]
      for (let index = 0; index < domList.length; index++) {
        let { el, scrollTop, scrollLeft } = domList[index]
        el.scrollTop = scrollTop
        el.scrollLeft = scrollLeft
      }
      state.domScrollMap[identifierName] = []
    }
  }
}

export default keepAlive
