<template>
  <div class="nav-header">
    <div class="nav-left">
      <div class="fold-icon">
        <i :class="isfold ? 'el-icon-s-fold' : 'el-icon-s-unfold'" @click="clickFold"></i>
      </div>
      <Breadcrumb :currentUrl="currentUrl" />
    </div>
    <nav-header />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

import Breadcrumb from '@/base-ui/breadcrumb/index'
import NavHeader from './header-info.vue'
import { mapPathToBreadcrumb } from '@/utils/mapMenuToRouter'
import { useIsfoldIcon } from '../hooks/index'
export default defineComponent({
  name: '',
  components: { Breadcrumb, NavHeader },
  setup(props, ctx) {
    //折叠菜单
    const { isfold, clickFold } = useIsfoldIcon(ctx.emit)

    //获取面包屑路径
    const currentUrl = computed(() => {
      const url = useRoute().path
      const menus = useStore().state.login.menu
      const breadcrumb = mapPathToBreadcrumb(url, menus)
      return breadcrumb
    })

    return {
      isfold,
      clickFold,
      currentUrl
    }
  }
})
</script>

<style lang="less" scoped>
.fold-icon {
  font-size: 30px;
}
.nav-header {
  display: flex;
  justify-content: space-between;
  .nav-left {
    display: flex;
    align-items: center;
  }
}
</style>
