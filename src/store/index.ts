import { createStore } from 'vuex'

import type { iRootState } from './type'
import { login } from './login/login'

export const store = createStore<iRootState>({
  state() {
    return {
      name: 'syq'
    }
  },
  modules: {
    login
  }
})

export function setUpLocal() {
  store.dispatch('login/setUpLocalCacheAction')
}
