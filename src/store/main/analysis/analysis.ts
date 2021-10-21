import { Module } from 'vuex'

import { iRootState } from '@/store/type'
import { Ianalysis } from './type'
import {
  getAmountList,
  getCategoryGoodsCount,
  getCategoryGoodsSale,
  getCategoryGoodsFavor,
  getGoodsSaleTop10,
  getGoodsAddressSale
} from '@/service/main/analysis/analysis'

export const analysis: Module<Ianalysis, iRootState> = {
  namespaced: true,
  state() {
    return {
      topPanelDatas: [],
      categoryGoodsCount: [],
      categoryGoodsSale: [],
      categoryGoodsFavor: [],
      goodsSaleTop10: [],
      goodsAddressSale: []
    }
  },
  mutations: {
    changetopPanelDatas(state, data) {
      state.topPanelDatas = data
    },
    changecategoryGoodsCount(state, data) {
      state.categoryGoodsCount = data
    },
    changecategoryGoodsSale(state, data) {
      state.categoryGoodsSale = data
    },
    changecategoryGoodsFavor(state, data) {
      state.categoryGoodsFavor = data
    },
    changegoodsSaleTop10(state, data) {
      state.goodsSaleTop10 = data
    },
    changegoodsAddressSale(state, data) {
      state.goodsAddressSale = data
    }
  },
  actions: {
    async getDashBoardDataAction({ commit }) {
      const resultTopPanelDatas = await getAmountList()
      commit('changetopPanelDatas', resultTopPanelDatas)

      const goodsCount = await getCategoryGoodsCount()
      console.log(goodsCount)
      commit('changecategoryGoodsCount', goodsCount.data.data)

      const goodsSale = await getCategoryGoodsSale()
      commit('changecategoryGoodsSale', goodsSale)

      const goodsFavor = await getCategoryGoodsFavor()
      commit('changecategoryGoodsFavor', goodsFavor)

      const saleTop10 = await getGoodsSaleTop10()
      commit('changegoodsSaleTop10', saleTop10)

      const addressSasle = await getGoodsAddressSale()
      commit('changegoodsAddressSale', addressSasle)
    }
  }
}
