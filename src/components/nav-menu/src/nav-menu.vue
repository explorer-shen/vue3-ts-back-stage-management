<template>
  <div class="nav-menu">
    <div class="top">
      <img class="top-img" src="~@/assets/img/logo.svg" alt="" />
      <span class="top-title">SYQ</span>
    </div>
    <el-menu :collapse="isCollapse" class="el-menu">
      <template v-for="menu in menus" :key="menu.id">
        <template v-if="menu.children && menu.children.length">
          <el-sub-menu :index="menu.id + ''">
            <template #title>
              <i :class="menu.icon"></i>
              <span>{{ menu.name }}</span>
            </template>
            <template v-for="item in menu.children" :key="item.id">
              <el-menu-item @click="clickItem(item)">{{ item.name }}</el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <template v-else>
          <el-menu-item :index="menu.id + ''" @click="clickItem(menu)">
            <i v-if="menu.icon" :class="menu.icon"></i>
            <span>{{ menu.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import router from '@/router'
import { defineComponent, PropType } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: '',
  components: {},
  props: {
    isCollapse: {
      type: Boolean as PropType<boolean>,
      default: false
    }
  },
  setup() {
    const store = useStore()
    const menus = store.state.login.menu
    function clickItem(item: any) {
      router.push(item.url)
    }
    return {
      menus,
      clickItem
    }
  }
})
</script>

<style lang="less" scoped>
.nav-menu {
  height: 100%;
  background: #001529;
  :deep .el-menu {
    --el-menu-hover-background-color: wheat !important;
    --el-menu-hover-text-color: wheat !important;
    --el-menu-text-color: white !important;
  }
}
.el-menu {
  height: 100%;
  background: #001529;

  :deep .el-sub-menu__title {
    color: white !important;
  }
  :deep .el-menu-item {
    background: #001529;
  }
  :deep .is-active {
    color: white !important;
    &:hover {
      background: wheat;
    }
  }
}

.top {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 50px;
  .top-title {
    color: white;
  }
  .top-img {
    width: 40px;
    height: 40px;
  }
}
</style>
