import index from '@/views/index.vue'
import pageList from './pageList'

// 业务路由文件数据
const appRouter = []

appRouter.push({
  path: '/',
  // name: 'root',
  component: index
})

for (let i = 0; i < pageList.length; i++) {
  let item = pageList[i]
  appRouter.push({
    path: `/${item}`,
    name: `${item}`,
    component: () => import(`@/views/${item}`)
  })
}

export default appRouter
