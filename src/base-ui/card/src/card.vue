<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>{{ title }}</span>
      </div>
    </template>
    <div class="info">
      <slot />
    </div>
  </el-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: '',
  components: {},
  props: {
    title: {
      type: String,
      default: ''
    }
  }
})
</script>

<style lang="less" scoped>
.box-card {
  margin-bottom: 20px;
  .card-header {
    font-weight: bold;
    font-size: 18px;
  }
}
</style>
