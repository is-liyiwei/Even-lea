import onlyMoney from '@/utils/onlyMoney'

let isMoneyData = {
  bind (el, binding, vnode, oldVnode) {
    let inputDom = el.tagName === 'INPUT' ? el : el.querySelector('input')
    if (inputDom) {
      inputDom.addEventListener('input', () => {
        inputDom.value = onlyMoney(inputDom.value)
      }, true)
    } else {
      throw Error('no find input dom')
    }
  },
  // unbind (el) {
  //   let inputDom = el.tagName === 'INPUT' ? el : el.querySelector('input')
  //   if (inputDom) {
  //     console.log('removeEventListener');
  //     inputDom.removeEventListener('input', () => {
  //       inputDom.value = onlyMoney(inputDom.value)
  //     })
  //   } else {
  //     throw Error('no find input dom')
  //   }
  // }
}

export default isMoneyData

