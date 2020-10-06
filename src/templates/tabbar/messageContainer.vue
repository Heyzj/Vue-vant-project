<template>
  <div>
    <div class="message">
      <van-nav-bar title="新消息">
        <template #right>
          <van-icon name="volume" size="16"/>
        </template>
      </van-nav-bar>
    </div>
    <van-pull-refresh
        v-model="isLoading" @refresh="onRefresh" :pulling-text="pullText"
        :loosing-text="loosText" :loading-text="loadText" :success-text="successText">
      <div class="noticelist">
        <van-list>
          <van-notice-bar
              left-icon="volume-o"
              text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。"/>
          <van-divider/>
        </van-list>
        <van-list>
          <van-notice-bar
              left-icon="volume-o"
              text="通过 text 属性设置通知栏的内容，通过 left-icon 属性设置通知栏左侧的图标。"/>
          <van-divider/>
        </van-list>
      </div>
    </van-pull-refresh>
  </div>
</template>

<script>
export default {
  name: "messageContainer",
  data() {
    return {
      isLoading: false, //下拉刷新成功
      pullText: '下拉有美女哦！',   //下拉提示
      loosText: '放开我！！',   //下拉释放刷新提示
      loadText: '准备好了吗！',  //刷新中
      successText: '已经是最新数据了！',
    }
  },
  methods: {
    onRefresh() {
      // 下拉刷新
      setTimeout(() => {
        this.isLoading = false
      }, 1000)
    }
  }
}
</script>

<style scoped>
.message {
  position: fixed;
  top: 0;
  width: 100%;
}

.noticelist {
  width: 100%;
  min-height: 700px;
}
</style>