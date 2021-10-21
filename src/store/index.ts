import { createStore } from 'vuex'

import type { iRootState } from './type'
import { login } from './login/login'
import { analysis } from './main/analysis/analysis'

export const store = createStore<iRootState>({
  state() {
    return {
      name: 'syq'
    }
  },
  modules: {
    login,
    analysis
  }
})

export function setUpLocal() {
  store.dispatch('login/setUpLocalCacheAction')
}
