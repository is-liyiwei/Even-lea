<template>
  <div id="app">
    <router-view />
    <span class="top-btn" @click="scrollToTop" v-show="topBtn"></span>
    <div id="img-preview-box" class="img-box">
      <img src="http://img15.3lian.com/2016/h1/75/d/214.jpg" alt="">
      <div class="msg">扫码查看移动端</div>
    </div>
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

.reset-alink {
	text-decoration:none;
	outline: none;
	color: #44c7f4;
}

.img-box {
  position: fixed;
  transition: opacity 300ms;
  width: 300px;
  height: 300px;
  background-color: #FFF;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  opacity: 0;
  /* overflow: hidden; */
}

.img-box:before {
  content: '';
  position: absolute;
  bottom: -20px;
  width: 0;
  height: 0;
  border: 10px solid;
  border-color: #FFF transparent transparent;
}

.img-box img {
  width: 100%;
  flex: 13;
}

.img-box .msg {
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  font-size: 18px;
}
</style>
