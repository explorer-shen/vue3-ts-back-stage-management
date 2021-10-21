<template>
  <div class="pie-echarts">
    <base-charts :options="options"></base-charts>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

import BaseCharts from '@/base-ui/echarts'

export default defineComponent({
  name: '',
  components: { BaseCharts },
  props: {
    pieData: {
      type: Array,
      default: () => []
    }
  },
  setup(props) {
    console.log(props.pieData, 'pieData')
    const options = computed(() => {
      return {
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'horizontal',
          left: 'left'
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '50%',
            bottom: '-10%',
            data: props.pieData,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }
    })
    return {
      options
    }
  }
})
</script>

<style lang="less" scoped></style>
