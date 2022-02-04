import { cloneDeep } from 'lodash'
import { encrypt } from '@/cryptoJS'

window.__pageBackParams__ = {}

function preHandle(id, type) {
  // 加密id
  if (id) {
    id = id + ''
    id = encrypt(id)
  }
  if (type) {
    type = encrypt(type + +new Date())
  }
  return {
    id,
    type
  }
}

export default {
  data() {
    return {}
  },
  methods: {
    appBackPage() {
      this.$router.back()
    },
    appToPage(pageName, id, type = 'add') {
      if (!pageName) {
        throw Error('appToPage : 必须传pageName')
      }

      let res = preHandle(id, type)

      this.$router.push({
        name: pageName,
        query: res
      })
    },
    appReplacePage(pageName, id, type = 'add') {
      if (!pageName) {
        throw Error('appReplacePage : 必须传pageName')
      }

      let res = preHandle(id, type)

      this.$router.replace({
        name: pageName,
        query: res
      })
    },
    appPageBackSetParams(key, q) {
      window.__pageBackParams__[key] = q
    },
    appPageBackGetParams(key) {
      return cloneDeep(window.__pageBackParams__[key])
    },
    appPageBackDeleteParams(key) {
      delete window.__pageBackParams__[key]
    }
  }
}
