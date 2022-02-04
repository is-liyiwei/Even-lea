import Vue from 'vue'
import Router from 'vue-router'
// import xToken from '@/storages/xToken'

// 业务路由文件
import appRouter from './appRouter'

Vue.use(Router)

let appRouterInstance = new Router({
  routes: [...appRouter],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

appRouterInstance.beforeEach((to, from, next) => {
  let whiteListPage = [
    'donotNeedLoginPageName',
    'login'
  ]
  let pageName = to.name

  if (whiteListPage.includes(pageName)) {
    next()
  } else {
    next()
    // if (!xToken.get()) {
    //   next({ name: 'login' })
    // } else {
    //   next()
    // }
  }
})

appRouterInstance.afterEach((to, from) => {
  let showTabbarPage = ['root', 'showTabbarPageName']
  let pageName = to.name
  let vm = appRouterInstance.app
  if (showTabbarPage.includes(pageName)) {
    vm.appTabBarShow && vm.appTabBarShow()
  } else {
    vm.appTabBarHide && vm.appTabBarHide()
  }
})

// 更新路由的新方案，貌似现在不需要用动态路由了
// // Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
// export function resetRouter() {
//   const newRouter = createRouter()
//   router.matcher = newRouter.matcher // reset router
// }

export default appRouterInstance
