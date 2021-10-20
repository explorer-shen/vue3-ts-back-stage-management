<template>
  <div class="Login">
    <div class="login-content">
      <h2 class="title">后台管理系统</h2>
      <div class="login-tabs">
        <el-tabs type="border-card" stretch>
          <el-tab-pane>
            <template #label>
              <span><i class="el-icon-user-solid"></i> 账号登录</span>
            </template>
            <login-account ref="refAccount" />
          </el-tab-pane>
          <el-tab-pane>
            <template #label>
              <span><i class="el-icon-phone"></i> 手机登录</span>
            </template>
            <login-phone />
          </el-tab-pane>
        </el-tabs>
      </div>
      <div class="login-control">
        <el-checkbox v-model="isKeep">记住密码</el-checkbox>
        <el-link type="primary">忘记密码</el-link>
      </div>
      <div>
        <el-button type="primary" class="login-button" @click="clickLogin">登录</el-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import LoginAccount from './cpns/login-account.vue'
import LoginPhone from './cpns/login-phone.vue'

export default defineComponent({
  name: '',
  components: { LoginAccount, LoginPhone },
  setup() {
    const isKeep = ref(false)
    const refAccount = ref<InstanceType<typeof LoginAccount>>()
    const clickLogin = () => {
      refAccount.value?.accountLogin(isKeep.value)
    }
    return {
      isKeep,
      refAccount,
      clickLogin
    }
  }
})
</script>

<style lang="less" scoped>
.Login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background: url('../../assets/img/login-bg.svg');

  .title {
    text-align: center;
    font-size: 30px;
  }
  .login-content {
    margin-top: -10%;
    width: 350px;
  }
  .login-control {
    color: blue;
    display: flex;
    justify-content: space-between;
  }
  .login-button {
    width: 100%;
  }
}
</style>
