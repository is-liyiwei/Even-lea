import throttle from '@/utils/throttle'

let reachBottom = {
  bind(el, binding, vnode, oldVnode) {
    el.addEventListener(
      'scroll',
      throttle(
        () => {
          if (
            el.scrollHeight - el.scrollTop <=
            el.clientHeight + 150
          ) {
            binding.value('bottom')
          } else if (el.scrollTop == 0) {
            binding.value('top')
          } else {
            binding.value('scroll')
          }
        },
        50,
        100
      )
    )
  }
}

export default reachBottom
