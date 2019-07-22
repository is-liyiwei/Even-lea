<template>
  <div id="app">
    <router-view />
    <span class="top-btn" @click="scrollToTop" v-show="topBtn"></span>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      topBtn: false
    };
  },
  mounted() {
    setTimeout(() => {
      // this.scrollToTop();
      // 添加滚动事件
      window.addEventListener("scroll", this.scroll);
    }, 20);
  },
  methods: {
    scrollToTop() {
      window.timer = setInterval(function() {
        //获取滚动条的滚动高度
        var osTop = document.documentElement.scrollTop || document.body.scrollTop;
        //用于设置速度差，产生缓动的效果
        var speed = Math.floor(-osTop / 6);
        document.documentElement.scrollTop = document.body.scrollTop = osTop + speed;

        if (osTop <= 0) {
          clearInterval(window.timer);
        }
      }, 20);
      // document.documentElement.scrollTop = 0
    },
    scroll() {
      this.topBtn =
        document.documentElement.scrollTop >
        document.documentElement.clientHeight
          ? true
          : false;
    }
  }
};
</script>

<style>
#app {
  width: 100%;
  height: auto;
}
#app .top-btn {
  width: 30px;
  height: 54px;
  position: fixed;
  bottom: 15%;
  right: 6%;
  content: "";
  background: url("./common/images/top.png") no-repeat;
  background-position: 0 0;
  background-size: 100%;
  cursor: pointer;
}
#app .top-btn:hover {
  background-position: 0 100%;
}
</style>
