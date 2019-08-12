<template>
  <div class="project">
    <div class="container">
      <span class="tip">WHAT I DO</span>
      <h1 class="title">{{title}}</h1>
      <span class="border"></span>
      <ul>
        <li v-for="(v, k) in projectList" :key="k">
          <div class="title">{{v.title}}</div>
          <img :src="v.previewImg" />
          <div
            v-if="v.qrCodeKey"
            @mouseenter="openImgDialog($event, v.qrCodeKey)"
            @mouseleave="closeImgDialog($event)"
            class="link"
            @click="openPage($event, v.link, v.qrCodeKey)"
          >点击查看/扫码</div>
          <div v-else class="link" @click="openPage($event, v.link, v.qrCodeKey)">点击查看/扫码</div>
        </li>
        <div class="clearfix"></div>
      </ul>
    </div>
  </div>
</template>

<script>
let imgList = {};

for (let index = 0; index <= 6; index++) {
  imgList["demo" + index] = require(`../common/images/demo/demo-${index}.png`);
}

let projectList = [
  {
    title: "官网",
    previewImg: imgList.demo1,
    link: "https://www.softbuilder.cn",
    qrCodeKey: "softbuilder",
    hidden: false
  },
  {
    title: "公司内部UI组件库",
    previewImg: imgList.demo2,
    link: "https://is-liyiwei.github.io/is-liyiwei.github.im-vuer.io/#/",
    qrCodeKey: "",
    hidden: false
  },
  {
    title: "代码生成工具",
    previewImg: imgList.demo0,
    link: "https://github.com/is-liyiwei/codeGenerator",
    qrCodeKey: "",
    hidden: false
  },
  {
    title: "高盛约车app乘客端",
    previewImg: imgList.demo3,
    link: "",
    qrCodeKey: "",
    hidden: true
  },
  {
    title: "高盛约车app司机端",
    previewImg: imgList.demo4,
    link: "",
    qrCodeKey: "",
    hidden: true
  },
  {
    title: "社保小程序",
    previewImg: imgList.demo5,
    link: "",
    qrCodeKey: "softbuilderWxApp_shebao",
    hidden: false
  },
  {
    title: "官网小程序",
    previewImg: imgList.demo6,
    link: "",
    qrCodeKey: "softbuilderWxApp_home",
    hidden: false
  }
];
export default {
  name: "project",
  data() {
    return {
      title: "我的项目",
      projectList
    };
  },
  methods: {
    openPage(event, url, qrCodeKey) {
      if (url) {
        window.open(url);
      } else {
        if (qrCodeKey) {
          this.$NoticeJsHandle("请扫码查看", "info");
        } else {
          this.$NoticeJsHandle();
        }
      }
    },
    openImgDialog(event, qrCodeKey) {
      if (qrCodeKey) {
        window.openImgDialog(event.target, qrCodeKey);
      }
    },
    closeImgDialog(event) {
      window.closeImgDialog(event.target);
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
  color: #2f2c06;
  font-size: 36px;
  font-weight: bold;
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
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  padding: 30px 20px 0;
  box-sizing: border-box;
}
ul li {
  width: calc(100% / 4 - 80px);
  text-align: center;
  margin: 0 40px;
  margin-bottom: 50px;
  font-size: 22px;
}
ul li img {
  width: 100%;
  height: 800px;
  display: block;
  border: 1px solid #cccccc;
  padding: 10px;
  box-sizing: border-box;
}
ul li .link {
  width: 100%;
  margin-top: 10px;
  cursor: pointer;
  color: #03a9f4;
  font-size: 26px;
  letter-spacing: 6px;
  position: relative;
  display: inline-block;
}

ul li .title {
  width: 100%;
  margin-bottom: 10px;
  color: #03a9f4;
  letter-spacing: 6px;
  font-size: 32px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 1280px) {
  ul {
    width: 100%;
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    padding: 30px 20px 0;
    box-sizing: border-box;
  }
  ul li {
    width: calc(100% / 4 - 40px);
    text-align: center;
    margin: 0 20px;
    margin-bottom: 20px;
    font-size: 22px;
  }

  ul li img {
    width: 100%;
    height: 280px;
    display: block;
    border: 1px solid #cccccc;
    padding: 10px;
  }
  ul li .link {
    margin-top: 10px;
    cursor: pointer;
    color: #03a9f4;
    font-size: 14px;
    letter-spacing: 6px;
    position: relative;
    display: inline-block;
  }

  ul li .title {
    margin-bottom: 2px;
    color: #03a9f4;
    letter-spacing: 6px;
    font-size: 16px;
    position: relative;
    height: 50px;
  }

}
</style>
