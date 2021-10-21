<template>
  <div class="text-link">
    <template v-for="item in textLinkArr" :key="item.title">
      <div class="text-item">
        <span class="title">{{ item.title }}</span>
        <el-link class="desp" type="primary">{{ item.desp }}</el-link>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { ItextLink } from '../type/textLink'

export default defineComponent({
  name: '',
  components: {},
  props: {
    textLinkArr: {
      type: Array as PropType<ItextLink[]>,
      default: () => []
    }
  }
})
</script>

<style lang="less" scoped>
.text-item {
  margin-bottom: 5px;
  margin-left: 15px;
  &:deep(.el-link--inner) {
    margin-left: 15px;
  }
  .title {
    position: relative;
  }
  .title::after {
    content: ':';
    font-size: 17px;
  }
  .title::before {
    content: '';
    width: 5px;
    height: 5px;
    background: black;
    position: absolute;
    top: 40%;
    left: -15px;
  }
}
</style>
