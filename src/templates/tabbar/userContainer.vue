<template>
  <div>
    <div class="userlogin">
      <van-nav-bar title="登录">
      </van-nav-bar>
    </div>
    <div class="user">
      <van-form @submit="onSubmit">
        <van-field
            v-model="username"
            name="用户名"
            label="用户名"
            placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
            v-model="password"
            type="password"
            name="密码"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit">
            提交
          </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
import {Toast} from 'vant'

export default {
  name: "userContainer",
  data() {
    return {
      username: '',
      password: '',

    }
  },
  methods: {
    onSubmit(values) {
      if (this.username === 'root' && this.password === '123') {
        Toast.success('登录成功');
      } else {
        Toast.fail('登录失败！！');
      }
    },
  }
}
</script>

<style scoped>
.userlogin {
  position: fixed;
  top: 0;
  width: 100%;
}

.user {
  width: 100%;
  height: 100%;
  position: relative;
  top: 50%;
}
</style>