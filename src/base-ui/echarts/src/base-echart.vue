<template>
  <div class="base-echart">
    <div class="echarts" ref="echartsRef" :style="{ width: width, height: height }"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watchEffect } from 'vue'

import { useEcharts } from '../hooks/Echarts'

export default defineComponent({
  name: '',
  components: {},
  props: {
    options: {
      type: Object,
      default: () => ({})
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '350px'
    }
  },
  setup(props) {
    const echartsRef = ref<HTMLElement>()
    console.log(echartsRef.value, 'html')
    onMounted(() => {
      const setOptions = useEcharts(echartsRef.value!)
      setOptions(props.options)
      watchEffect(() => {
        setOptions(props.options)
      })
    })

    return {
      echartsRef
    }
  }
})
</script>

<style lang="less" scoped></style>
