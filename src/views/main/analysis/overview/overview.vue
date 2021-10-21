<template>
  <div class="overview">
    <SYQcard title="关于">
      <div>
        Vue3Admin 是基于 Vue3、Vuex、VueRouter、Vite、 ElementPlus 、TypeScript、Echart5
        等后台系统解决方案。
      </div>
    </SYQcard>
    <SYQcard title="技术栈">
      <SYQTextLink :textLinkArr="technologyStacks"></SYQTextLink>
      <SYQDescriptions
        title="生产环境依赖"
        :column="2"
        :tableDatas="dependencies"
      ></SYQDescriptions>
      <SYQDescriptions
        title="开发环境依赖"
        :column="2"
        :tableDatas="devDependencies"
      ></SYQDescriptions>
    </SYQcard>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import SYQcard from '@/base-ui/card/index'
import SYQTextLink from '@/base-ui/text-link/index'
import { technologyStacks } from './config'
import SYQDescriptions from '@/base-ui/descriptions/index'
import { dependencies, devDependencies } from './config'

export default defineComponent({
  name: '',
  components: { SYQcard, SYQTextLink, SYQDescriptions },
  setup() {
    return {
      technologyStacks,
      dependencies,
      devDependencies
    }
  }
})
</script>

<style lang="less" scoped></style>
