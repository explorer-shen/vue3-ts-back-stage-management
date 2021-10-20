<template>
  <div class="login-account">
    <el-form label-width="60px" :model="accountForm" ref="refForm" :rules="rules">
      <el-form-item label="账号" prop="name">
        <el-input v-model="accountForm.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="accountForm.password"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'

import { IAccount } from '../types'
import cache from '@/utils/LocalCache'
import { useStore } from 'vuex'

export default defineComponent({
  name: '',
  components: {},
  setup() {
    const store = useStore()
    const localName = cache.getCache('name') ?? ''
    const localPassword = cache.getCache('password') ?? ''
    const accountForm: IAccount = reactive({
      name: localName,
      password: localPassword
    })
    const refForm = ref()
    const rules = {
      name: [
        { required: true, message: '请输入账号', trigger: 'blur' },
        { pattern: /^[0-9a-z]{6,20}$/, message: '必须是6-20位数字或小写字母', trigger: 'blur' }
      ],
      password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { pattern: /^[0-9a-z]{6,20}$/, message: '必须是6-20位数字或小写字母', trigger: 'blur' }
      ]
    }
    const accountLogin = (iskeep: boolean) => {
      refForm.value.validate((valid: boolean) => {
        if (valid) {
          if (iskeep) {
            cache.setCache('name', accountForm.name)
            cache.setCache('password', accountForm.password)
          }
          store.dispatch('login/loginAccountAction', accountForm)
        }
      })
    }
    return {
      accountForm,
      rules,
      refForm,
      accountLogin
    }
  }
})
</script>

<style lang="less" scoped></style>
