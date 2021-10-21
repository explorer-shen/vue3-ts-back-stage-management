import SYQRequest from '../../index'

enum AnalysisAPI {
  amountList = '/goods/amount/list',
  categoryGoodsCount = '/goods/category/count',
  categoryGoodsSale = '/goods/category/sale',
  categoryGoodsFavor = '/goods/category/favor',
  goodsSaleTop10 = '/goods/sale/top10',
  goodsAddressSale = '/goods/address/sale'
}

export function getAmountList() {
  return SYQRequest.request({
    url: AnalysisAPI.amountList,
    method: 'get'
  })
}

export function getCategoryGoodsCount() {
  return SYQRequest.request({
    url: AnalysisAPI.categoryGoodsCount,
    method: 'get'
  })
}

export function getCategoryGoodsSale() {
  return SYQRequest.request({
    url: AnalysisAPI.categoryGoodsSale,
    method: 'get'
  })
}

export function getCategoryGoodsFavor() {
  return SYQRequest.request({
    url: AnalysisAPI.categoryGoodsFavor,
    method: 'get'
  })
}

export function getGoodsSaleTop10() {
  return SYQRequest.request({
    url: AnalysisAPI.goodsSaleTop10,
    method: 'get'
  })
}

export function getGoodsAddressSale() {
  return SYQRequest.request({
    url: AnalysisAPI.goodsAddressSale,
    method: 'get'
  })
}
