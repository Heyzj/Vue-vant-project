<template>
  <div class="home-body">
    <div class="app-top">
      <van-tabs v-model="activeName" title-active-color="white"
                :background="tabBg" line-width="25px"
                line-height="4px" :color="tabColor" swipeable>
        <van-tab name="page1" title="首页" to="/home/home1"></van-tab>
        <van-tab name="page2" title="我的大学" to="/home/home2"></van-tab>
      </van-tabs>
    </div>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh" success-text="刷新成功!">
      <router-view></router-view>
    </van-pull-refresh>
  </div>
</template>

<script>
import {Toast} from 'vant'
import Vue from 'vue'
import '../../../static/mui/css/mui.css'
import '../../../static/mui/css/icons-extra.css'

Vue.use(Toast)
export default {
  data: function () {
    return {
      activeName: 'page1', //设置tab默认选中第一个
      tabBg: '#24DAE5',  //设置tab中背景色
      tabColor: 'white', //设置tab中下划线的颜色
      isLoading: false //下拉刷新完成
    }
  },
  methods: {
    // 定义一个下拉刷新的回调
    onRefresh: function () {
      setTimeout(() => {
        this.isLoading = false
      }, 1000)
    }
  },
}
</script>
<style scoped>
.app-top {
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 999;
}

.home-body {
  position: relative;
  margin: 0;
  padding: 0;
}

</style>