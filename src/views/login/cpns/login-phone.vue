<template>
  <div class="login-phone">
    <el-form>
      <el-form-item label="手机号">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="验证码">
        <div class="phone-code">
          <el-input></el-input>
          <el-button type="primary" style="margin-left: 20px">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: '',
  components: {}
})
</script>

<style lang="less" scoped>
.phone-code {
  display: flex;
}
</style>
