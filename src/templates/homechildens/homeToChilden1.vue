<template>
  <div>
    <div class="my-swipe">
      <!--      Swipe轮播图-->
      <van-swipe :autoplay="3000" loop touchable indicator-color="white" class="swipe">
        <van-swipe-item v-for="(item,index) in images" :key="index">
          <a href="#">
            <img v-lazy="'/images/'+item" class="swipe-img" alt="no"/>
          </a>
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="my-gird">
      <!--  Gird6宫格-->
      <van-grid :column-num="3" :border="false">
        <van-grid-item icon="like-o" text="喜欢" class="my-icon1"></van-grid-item>
        <van-grid-item icon="star" text="收藏" class="my-icon2"></van-grid-item>
        <van-grid-item icon="gift-o" text="惊喜" dot class="my-icon3"></van-grid-item>
        <van-grid-item icon="balance-o" text="收入" class="my-icon4"></van-grid-item>
        <van-grid-item icon="hot-o" text="热话题" badge="5" class="my-icon5"></van-grid-item>
        <van-grid-item icon="scan" text="扫码" class="my-icon6"></van-grid-item>
      </van-grid>
    </div>
    <div class="my-telant">
      <h3 class="van-hairline--bottom">达人动态</h3>
    </div>
    <div class="my-from">
      <!--      内容动态面板-->
      <div class="mui-card" v-for="(item,index) in fromList" :key="index">
        <!--页眉，放置标题-->
        <div class="mui-card-header">{{ item.title |subWord(item.title) }}</div>
        <!--内容区-->
        <div class="mui-card-content">&emsp;&emsp;{{ item.body }}</div>
        <!--页脚，放置补充信息或支持的操作-->
        <div class="mui-card-footer"><span class="mui-badge mui-badge-primary">{{ item.id }}</span></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "homeToChilden1",
  data() {
    return {
      images: [], //存储轮播图图片
      fromList: [],  //存储 card中得数据
    }
  },
  created: function () {
    this.getSwipeList();
    this.getFromList();
  },
  methods: {
    // 使用 vue - resource 获取 api 中的轮播图
    getSwipeList: function () {
      this.$http.get('../../images').then(res => {
        if (res.status === 200) {
          this.images = res.body
        } else {
          Toast({
            position: 'top',
            message: '数据加载出错了！',
            icon: 'fail'
          })
        }
      })
    },
    //使用 vue-resource 调用API 接口数据
    getFromList: function () {
      this.$http.get('http://jsonplaceholder.typicode.com/posts').then(res => {
        // console.log(res)
        if (res.status === 200) {
          this.fromList = res.body
        } else {
          Toast({
            position: 'top',
            message: '没有获取到论坛信息！',
            icon: 'fail'
          })
        }
      })
    },
  },
  //定义card中内容过滤器
  filters: {
    subWord: (data) => {
      return data.substring(0, 30) + '...'
    }
  },
}
</script>

<style scoped>
.swipe {
  width: 90%;
  margin-left: 20px;
  margin-top: 5px;
  border-radius: 15px;
  box-shadow: 5px 5px #d7e2cb;
}

.my-swipe {
  width: 100%;
  height: auto;
  margin-top: 5px;
}

.van-swipe-item {
  margin: 0;
  padding: 0;
  width: auto;
  height: 176px;
  text-align: center;
  border-radius: 15px;
}

.swipe-img {
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 15px;
}

.my-gird {
  width: 90%;
  margin-left: 21px;
  margin-top: 20px;
  border-radius: 15px;
}

.mui-card {
  border-radius: 15px;
}

.mui-card-content {
  color: #8a6de9;
}


.my-icon1 {
  color: red;
}

.my-icon2 {
  color: orange;
}

.my-icon3 {
  color: yellow;
}

.my-icon4 {
  color: green;
}

.my-icon5 {
  color: cyan;
}

.my-icon6 {
  color: purple;
}

.mui-card-header {
  margin-left: 0;
  font-weight: bold;
}

.my-telant {
  width: 90%;
  line-height: 30px;
  margin-left: 20px;
  text-align: center;
  font-family: '楷体', serif;
}

.my-from {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}

.mui-card {
  width: 45%;
}
</style>