import { RouteRecordRaw } from 'vue-router'
import type { breadcrumb } from '../components/nav-header/type/type'

export function mapMenuToRoter(menus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []

  //拿到所有的本地路由
  const localroutes: RouteRecordRaw[] = []
  const routerFile = require.context('../router/main', true, /\.ts/)
  routerFile.keys().forEach((key) => {
    if (key.indexOf('.main.ts') !== -1) return
    else {
      const route = require('../router/main' + key.split('.')[1])
      localroutes.push(route.default)
    }
  })
  //开始map筛选出当前用户有的路由
  const startMap = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = localroutes.find((localroute) => localroute.path === menu.url)

        if (route) {
          routes.push(route)
        }
      } else startMap(menu.children ?? [])
    }
  }
  startMap(menus)

  return routes
}

export function mapPathToBreadcrumb(url: string, menus: any[]) {
  const breadcrumb: breadcrumb[] = []

  for (const menu of menus) {
    if (menu.type === 1) {
      const currentMenu = mapPathToBreadcrumb(url, menu.children)
      if (currentMenu.length !== 0) {
        breadcrumb.push({ path: menu.url, name: menu.name })
        breadcrumb.push({ path: currentMenu.url, name: currentMenu.name })
      }
    } else {
      if (url === menu.url && menu.type === 2) {
        return menu
      }
    }
  }
  console.log(breadcrumb, 'breadcrum')

  return breadcrumb
}
