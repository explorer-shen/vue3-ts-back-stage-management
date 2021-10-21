<template>
  <div class="descriptions">
    <el-descriptions :title="title" :column="column" border>
      <template v-for="(itemData, index) in tableDatas" :key="index">
        <el-descriptions-item>
          <template #label>{{ itemData.name }} </template>
          <el-tag size="small">{{ itemData.description }}</el-tag>
        </el-descriptions-item>
      </template>
    </el-descriptions>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

import type { ITableDatas } from '../type'

export default defineComponent({
  name: '',
  components: {},
  props: {
    title: {
      type: String,
      default: ''
    },
    column: {
      type: Number,
      default: 3
    },
    tableDatas: {
      type: Array as PropType<ITableDatas[]>,
      default: () => []
    }
  }
})
</script>

<style lang="less" scoped>
.descriptions {
  margin-top: 30px;
}
</style>
