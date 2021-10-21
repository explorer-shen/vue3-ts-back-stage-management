<template>
  <div class=""><PieEcharts :pieData="pieData" /></div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'

import PieEcharts from '@/components/echarts/src/pie-echarts.vue'

export default defineComponent({
  name: '',
  components: { PieEcharts },
  setup() {
    const store = useStore()
    store.dispatch('analysis/getDashBoardDataAction')

    const pieData = computed(() => {
      return store.state.analysis.categoryGoodsCount.map((item: any) => {
        return { value: item.goodsCount, name: item.name }
      })
    })
    return {
      pieData
    }
  }
})
</script>

<style lang="less" scoped></style>
