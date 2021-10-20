<template>
  <div class="breadcrumb">
    <el-breadcrumb>
      <template v-for="item in currentUrl" :key="item.name">
        <el-breadcrumb-item>{{ item.name }}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

import { breadcrumb } from '../type/index'

export default defineComponent({
  name: '',
  components: {},
  props: {
    currentUrl: {
      type: Array as PropType<breadcrumb[]>,
      default: () => []
    }
  }
})
</script>

<style lang="less" scoped>
.breadcrumb {
  margin-left: 30px;
}
</style>
