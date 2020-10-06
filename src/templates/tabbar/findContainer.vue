<template>
  <div class="find">
    <van-tabs
        v-model="activeName" :background="findBg"
        animated :title-active-color="titleActiveColor" :color="findColor"
        :line-height="lineHeight" :line-width="lineWidth" class="find-tab">
      <van-tab title="圈子" to="/find/find1"></van-tab>
      <van-tab title="动态" to="/find/find2"></van-tab>
      <van-tab title="达人" to="/find/find3"></van-tab>
    </van-tabs>
      <van-pull-refresh
          v-model="isLoading" @refresh="onRefresh" :pulling-text="pullText"
          :loosing-text="loosText" :loading-text="loadText" :success-text="successText">
        <router-view></router-view>
      </van-pull-refresh>
  </div>
</template>

<script>
export default {
  name: "findContainer",
  data() {
    return {
      activeName: 1,
      findBg: '#d5ece9', //  tab栏背景颜色
      titleActiveColor: 'white',  //被选中的tab颜色
      findColor: 'white', //被选中的tab下划线的颜色
      lineHeight: '4px',// 被选中的tab下划线的高
      lineWidth: '30px',// 被选中的tab下划线的宽

      isLoading: false, //下拉刷新成功
      pullText: '下拉有美女哦！',   //下拉提示
      loosText: '放开我！！',   //下拉释放刷新提示
      loadText: '准备好了吗！',  //刷新中
      successText: '已经是最新数据了！',
    };
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

.find {
  width: 100%;
  box-sizing: border-box;
  position: relative;
}

.find-tab {
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 999;
}

</style>