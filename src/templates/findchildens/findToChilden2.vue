<template>
  <div>
    <div class="find2">
      <van-tabs v-model="active" sticky animated swipeable title-active-color="blue" color="blue">
        <van-tab :title="'全部'" to="/find/find2/page1"></van-tab>
        <van-tab :title="'关注'" to="/find/find2/page2"></van-tab>
        <van-tab :title="'本校'" to="/find/find2/page3"></van-tab>
        <van-tab :title="'同城'" to="/find/find2/page4"></van-tab>
      </van-tabs>
    </div>
    <div class="find2-view">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: "findToChilden2",
  data() {
    return {
      active: 0,
    }
  },
  methods: {},
}
</script>

<style scoped>
.find2 {
  position: fixed;
  top: 44px;
  width: 100%;
  z-index: 888;
}

.find2-view {
  position: relative;
  top: 44px;
}
</style>