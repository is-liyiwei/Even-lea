import setStoreData from '../setStoreData'

const index = {
  namespaced: true,
  state: {
    userInfo: {},
    city: '广州',
    notificationList: []
  },
  mutations: {
    setStoreData
  },
  actions: {}
}

export default index
