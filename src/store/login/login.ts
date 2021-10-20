import type { Module } from 'vuex'
import { iRootState } from '../type'
import { iLoginState } from './type'
import { accountLoginRequest, getUserById, getUserMenus } from '@/service/login/login'
import cache from '@/utils/LocalCache'
import { mapMenuToRoter } from '@/utils/mapMenuToRouter'
import router from '@/router'

export const login: Module<iLoginState, iRootState> = {
  namespaced: true,
  state() {
    return {
      name: '',
      token: '',
      id: NaN,
      userInfo: {},
      menu: []
    }
  },
  mutations: {
    changeName(state, name) {
      state.name = name
    },
    changeToken(state, token) {
      state.token = token
    },
    changeid(state, id: number) {
      state.id = id
    },
    changeuserInfo(state, userInfo) {
      state.userInfo = userInfo
    },
    changemenu(state, menu: any[]) {
      state.menu = menu
      const routes = mapMenuToRoter(menu)
      routes.forEach((route) => {
        router.addRoute('main', route)
      })
    }
  },
  actions: {
    async loginAccountAction({ commit }, account: { name: string; password: string }) {
      //开始调登录接口
      //先拿toke和id
      const Result = await accountLoginRequest(account)
      const { id, name, token } = Result.data.data
      commit('changeid', id)
      commit('changeName', name)
      commit('changeToken', token)
      cache.setCache('token', token)
      //拿userInfo
      const userData = await getUserById(id)
      console.log(userData, 'userData')
      commit('changeuserInfo', userData.data.data.role)
      cache.setCache('useInfo', userData.data.data.role)

      //拿当前用户的菜单
      const menuData = await getUserMenus(id)
      commit('changemenu', menuData.data.data)
      cache.setCache('menu', menuData.data.data)
      //跳转
      router.push('/main')
    },

    setUpLocalCacheAction({ commit }) {
      const token = cache.getCache('token')
      if (token) {
        commit('changeToken', token)
      }
      const useInfo = cache.getCache('useInfo')
      if (useInfo) {
        commit('changeuserInfo', useInfo)
      }
      const menu = cache.getCache('menu')
      if (menu) commit('changemenu', menu)
    }
  }
}
