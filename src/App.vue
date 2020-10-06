<template>
  <div class="app-container">
    <!--  Header-->
    <!--  router-view-->
    <div class="app-content">
      <transition>
        <router-view></router-view>
      </transition>
    </div>

    <van-tabbar v-model="active" active-color="cyan" inactive-color="black" route>
      <van-tabbar-item replace to="/home/home1" icon="wap-home-o" dot>今选</van-tabbar-item>
      <van-tabbar-item replace to="/find/find2/page1" icon="apps-o">发现</van-tabbar-item>
      <van-tabbar-item replace to="/message" icon="chat-o" badge="2">消息</van-tabbar-item>
      <van-tabbar-item replace to="/user" icon="user-circle-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0, //tabbar默认选中第一个
    }
  }
}
</script>

<style scoped>
.v-enter {
  opacity: 0;
  transform: translateX(100%);
  position: absolute;
}

.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.2s;
}

.app-container {
  font-family: '楷体', serif;
  margin: 0;
  padding: 0;
  background: white;
  position: relative;
  top: 46px;
}


</style>