<template>
  <div class="header-info">
    <div class="header-icon">
      <i class="el-icon-bell hover-icon"></i>
      <i class="el-icon-chat-dot-round hover-icon"></i>
      <i class="el-icon-postcard hover-icon"></i>
    </div>
    <div>
      <el-avatar
        style="width: 30px; height: 30px"
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      ></el-avatar>
    </div>
    <div>
      <el-dropdown>
        <span class="el-dropdown-link">
          {{ userName }}<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item icon="el-icon-circle-close" @click="clickOut"
              >退出系统</el-dropdown-item
            >
            <el-dropdown-item icon="el-icon-info" divided>个人信息</el-dropdown-item>
            <el-dropdown-item icon="el-icon-unlock">修改密码</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

import cache from '@/utils/LocalCache'

export default defineComponent({
  name: '',
  components: {},
  setup() {
    const store = useStore()
    const userName = store.state.login.userInfo.name

    const router = useRouter()
    const clickOut = () => {
      cache.removeCache('token')
      router.push('/login')
    }

    return {
      userName,
      clickOut
    }
  }
})
</script>

<style lang="less" scoped>
.header-info {
  display: flex;
  align-items: center;
  .el-dropdown-link {
    cursor: pointer;
  }
  .header-icon {
    display: flex;
    width: 100px;
    justify-content: space-around;
    font-size: 25px;
    .hover-icon {
      &:hover {
        background: #aaaaaa;
      }
    }
  }
}
</style>
