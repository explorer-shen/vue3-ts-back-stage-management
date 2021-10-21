<template>
  <div class="main">
    <el-container class="page">
      <el-aside :width="isCollapse ? '50px' : '200px'" class="aside"
        ><nav-menu :isCollapse="isCollapse"
      /></el-aside>
      <el-container>
        <el-header class="header"><Header @changeisfold="changeisfold" /></el-header>
        <el-main class="content"><router-view /></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import navMenu from '@/components/nav-menu'
import Header from '@/components/nav-header'

export default defineComponent({
  name: '',
  components: { navMenu, Header },
  setup() {
    const isCollapse = ref(false)
    const changeisfold = (value: boolean) => {
      isCollapse.value = value
    }
    return {
      isCollapse,
      changeisfold
    }
  }
})
</script>

<style lang="less" scoped>
.main {
  height: 100%;
  width: 100%;
  .header {
    height: 45px;
  }
  .page {
    width: 100%;
    height: 100%;
    .content {
      background: #f0f2f5;
    }
  }
  .aside {
    height: 100%;
    overflow: hidden;
    overflow-y: auto;
    transition: width 0.3s linear;
    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
