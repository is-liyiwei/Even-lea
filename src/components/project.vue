<template>
  <div class="project">
    <div class="container">
      <span class="tip">WHAT I DO</span>
      <h1 class="title">{{title}}</h1>
      <span class="border"></span>
      <ul>
        <li>
          <div class="title">官网</div>
          <img src="../common/images/demo-1.png" alt="项目1" />
          <div class="link" @click="openPage('https://www.softbuilder.cn/')">点击前往</div>
        </li>
        <li>
          <div class="title">公司内部UI组件库</div>
          <img src="../common/images/demo-2.png" alt="项目1" />
          <div class="link" @click="openPage('https://is-liyiwei.github.io/is-liyiwei.github.im-vuer.io/#/')">点击前往</div>
        </li>
        <li>
          <div class="title">代码生成工具</div>
          <img src="../common/images/web1.jpg" alt="项目3" />
          <div class="link" @click="openPage('https://github.com/is-liyiwei/codeGenerator')">点击前往</div>
        </li>
        <li>
          <div class="title">约车app</div>
          <img src="../common/images/web1.jpg" alt="项目4" />
          <div class="link" style="opacity: 0;">点击前往</div>
        </li>
        <div class="clearfix"></div>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "project",
  data() {
    return {
      title: "我的项目"
    };
  },
  methods: {
    openPage (url) {
      window.open(url)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.project {
  height: auto;
  width: 100%;
  margin: 0 auto;
  background-color: #fff;
  text-align: center;
}
.container {
  height: auto;
  max-width: 1200px;
  margin: 0 auto;
  padding: 4% 0;
}
.tip {
  display: inline-block;
  position: relative;
  padding: 6px 20px;
  margin: 0 auto 10px;
  font-size: 20px;
  background: #03a9f4;
  color: #fff;
}
.tip:after {
  position: absolute;
  width: 0;
  height: 0;
  left: 42%;
  bottom: -10px;
  content: "";
  border-style: solid;
  border-width: 10px 10px 0 10px;
  border-color: #03a9f4 transparent;
}
.title {
  padding: 6px 0 10px;
  font-family: "Overlock", cursive;
  color: #2f2c06;
  font-size: 36px;
}
.border {
  display: block;
  width: 20%;
  height: 1px;
  position: relative;
  margin: 0 auto 30px;
  background: #8c8989;
}
.border:after {
  position: absolute;
  top: 0;
  left: 30%;
  content: " ";
  width: 40%;
  height: 5px;
  margin-top: -2px;
  background: #03a9f4;
}

ul {
  width: 100%;
  padding: 4% 0;
}
ul li {
  float: left;
  width: 20%;
  margin-right: 5%;
  height: 80%;
  box-sizing: border-box;
  transition: transform 0.25s ease;
}
ul li img {
  width: 100%;
  height: 420px;
  display: block;
  border: 1px solid #cccccc;
  padding: 10px;
}
ul li .link {
  margin-top: 10px;
  cursor: pointer;
  color: #03a9f4;
  font-size: 18px;
  letter-spacing: 6px;
  position: relative;
  left: 5%;
}

ul li .title {
  margin-bottom: 10px;
  color: #03a9f4;
  letter-spacing: 6px;
  font-size: 18px;
  position: relative;
  left: 5%;
}
/* ul li:hover {
  z-index: 100;
  -webkit-transform: scale(1.1);
  transform: scale(1.2);
  box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
} */
</style>
