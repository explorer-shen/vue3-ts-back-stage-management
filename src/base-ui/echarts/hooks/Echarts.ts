import * as echarts from 'echarts'

import china from '../data/china.json'

echarts.registerMap('china', china)
export function useEcharts(domEl: HTMLElement, theme = 'light') {
  const echartsInstance = echarts.init(domEl, theme, { renderer: 'svg' })

  const setOptions = (options: any) => {
    echartsInstance.setOption(options)
  }

  window.addEventListener('resize', () => {
    echartsInstance.resize()
  })
  return setOptions
}
