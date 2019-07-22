<template>
  <div class="experience">
    <div class="container">
      <span class="tip">WHERE I DID</span>
      <h1 class="title">{{title}}</h1>
      <span class="border"></span>
      <ul class="content">
        <li v-for="(v, k) in list" :key="k">
          <div class="content_left tx_right">
            <span :class="v.className"></span>
            <h4>{{v.time}}</h4>
          </div>
          <div class="content_right tx_left">
            <h4>{{v.companyName}}</h4>
            <p class="info-message" v-for="(vv) in v.projectInfo" :key="vv" v-html="vv"></p>
          </div>
          <div class="clearfix"></div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
let styleString = {
	fw: `font-weight: bold;`,
	color333: `color:#333;`
}
export default {
  name: "experience",
  data() {
    return {
			icon1: require("../common/images/company.png"),
			icon2: require("../common/images/project.png"),
      title: "工作与项目",
      list: [
        {
          time: "2015/2 - 2016/3",
          companyName: "阳江市新秀广告公司 (普工)",
          projectInfo: [
            `<span style="${styleString.fw}${styleString.color333}">工作内容：</span>`,
            `1、主要工作内容：生产广告招牌字，门店门头招牌等，体力活较多，技术含量不高`
          ],
          className: "s1",
        },
        {
          time: "2016/7 - 2018/5",
          companyName: "广州幻速科技有限公司 (web前端开发)",
          projectInfo: [
            `<span style="${styleString.fw}${styleString.color333}">工作内容：</span>`,
            `1、负责Web产品的前端表现层与后端交互的设计和开发，保证页面浏览的兼容性和流畅浏览`,
            `2、负责公司项目网页开发及维护、优化`,
            `3、根据产品设计，利用HTML5和CSS3等相关技术开发手机、平板电脑等多平台上的前端应用`,
            `4、负责微信小程序页面制作开发及维护`
          ],
          className: "s1",
        },
        {
          time: "2018/7 - 至今",
          companyName: "广州市萤火虫软件开发有限公司 (web前端开发)",
          projectInfo: [
            `<span style="${styleString.fw}${styleString.color333}">工作内容：</span>`,
            `1、对系统框架相关技术和业务进行开发，并解决系统开发、运行中出现的各种问题；`,
            `2、负责Web产品的前端表现层与后端交互的设计和开发，保证页面浏览的兼容性和流畅浏览`,
            `3、负责公司项目网页开发及维护、优化`,
            `4、根据产品设计，利用HTML5和CSS3等相关技术开发手机、平板电脑等多平台上的前端应用`,
            `5、负责微信小程序/微信公众号页面制作开发及维护`,
            `6、负责公司技术部框架的搭建使用`,
            `7、负责公司技术开发的一些工具类搭建，提高团队开发效率`
          ],
          className: "s1",
        },
        {
          time: "2018/7 - 至今",
          companyName: "公司官网 - PC端/移动端/小程序/后台系统",
          projectInfo: [
            `<span style="${styleString.fw}${styleString.color333}">项目描述：</span>`,
            `1、在线接入内部业务人员以及软件开发报价`,
            `2、客户可根据不同功能需求对软件开发做价格预估`,
            `3、一套代码，兼容pc端移动端响应式布局`,
            `4、采用合理的项目架构设计，使得小程序的view层可服用web端代码`,
            `<span style="${styleString.fw}${styleString.color333}">责任描述：</span>`,
            `1、根据产品设计，利用html5 + css3 + js开发的web前端页面`,
            `2、使用jQuery配合手写css响应式布局，兼容移动端，一套代码多端运行`,
            `3、负责相关产品的需求以及前端程序的实现，提供合理的前端架构；`,
            `4、负责前端表现层与后端交互的设计和开发，保证页面浏览的兼容性和流畅浏览`,
            `5、与产品、后台开发人员保持良好沟通，理解各方需求，转变为具体的开发工作；`,
            `6、使用git进行项目代码版本控制`
          ],
          className: "s2",
        },
        {
          time: "2018/7 - 至今",
          companyName: "图片文字代码自动生成工具",
          projectInfo: [
            `<span style="${styleString.fw}${styleString.color333}">项目描述：</span>`,
            `1、采用node.js + vue.js开发的工具项目，目的是能够避免重复的编写代码工作`,
            `2、使用工具生成开发需要编写得代码，配合web页面并且使用ctrl + c和ctrl + v操作，提高开发效率`,
            `3、<a class="reset-alink" href="https://github.com/is-liyiwei/codeGenerator">github地址：https://github.com/is-liyiwei/codeGenerator</a>`,
            `<span style="${styleString.fw}${styleString.color333}">责任描述：</span>`,
            `1、采用vue.js框架开发`,
            `2、负责基本架构的设计和搭建`,
            `3、配合同事提出得需求，不断维护更新，修复bug，添加新功能`,
            `4、图片处理以及本地服务器采用node.js + express.js搭建`
          ],
          className: "s2",
        },
        {
          time: "2018/7 - 至今",
          companyName: "公司内部UI组件库开发",
          projectInfo: [
            `<span style="${styleString.fw}${styleString.color333}">项目描述：</span>`,
            `1、一个公司内部开发使用的UI组件库，封装了一些常用的开发页面和组件`,
            `2、公司项目的一些开发模板，多个项目可复用代码，提高团队开发效率`,
            `github地址：https://github.com/is-liyiwei/im-vuer`,
            `实例demo地址：https://is-liyiwei.github.io/is-liyiwei.github.im-vuer.io/#/`,
            `使用文档：https://is-liyiwei.github.io/im-vuer/#/`,
            `<span style="${styleString.fw}${styleString.color333}">责任描述：</span>`,
            `1、采用vue.js框架开发`,
            `2、负责基本架构的设计和搭建`,
            `3、维护更新，修复bug，添加新功能`
          ],
          className: "s2",
        },
        {
          time: "2018/7 - 至今",
          companyName: "高盛网约app - app/web混合开发",
          projectInfo: [
            `<span style="${styleString.fw}${styleString.color333}">项目描述：</span>`,
            `1、采用vue框架 + vant + scss + webpack + ES6开发的混合型app项目`,
            `2、项目分成乘客端/司机端，乘客可根据地图地位在线叫车，司机端根据最近订单接单`,
            `3、软件内部使用，地图定位，路径规划，路线报价，实时上传位置信息，确保订单流程`,
						`4、接入云信sdk，使得乘客与司机可在线聊天，也可一键拨打司机电话和报警电话`,
						`乘客端安装包`,
            `Android下载链接：11`,
						`iOS下载链接：https://www.pgyer.com/5POf`,
						`司机端安装包`,
						`Android下载链接：11`,
            `iOS下载链接：https://www.pgyer.com/z11q`,
            `另有后台管理系统，可以查看订单数据，因内部使用，这里不多介绍`,
            `<span style="${styleString.fw}${styleString.color333}">责任描述：</span>`,
            `1、负责采用vue框架 + vant + scss + webpack + ES6开发app项目`,
            `2、内部采用webview方式加载web端页面，与开发人员通过WKWebView对接两端数据`,
            `3、与后端开发人员对接api接口，同时对接腾讯地图sdk，云信sdk`,
            `4、使用git进行项目代码版本控制`
          ],
          className: "s2",
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.experience {
  height: auto;
  width: 100%;
  margin: 0 auto;
  background-color: #fff;
  text-align: center;
}
.container {
  height: auto;
  /* max-width: 1200px; */
  max-width: 1866px;
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

ul.content {
  padding-top: 20px;
}
ul.content li {
  font-size: 20px;
  color: #999;
  position: relative;
}
.content_left {
  width: 50%;
  float: left;
  padding: 25px 6% 0 0;
}
.content_left h4 {
  display: inline-block;
  position: relative;
  padding: 10px 40px;
  font-size: 20px;
  color: #fff;
  background-color: #1b242f;
}
/* 绝对定位居中，如果在没有固定高度宽度的盒子里，不要使用百分比定位，使用px，rem，居中用50%+margin负值 */
.content_left h4:before {
  width: 0;
  height: 0;
  position: absolute;
  top: 50%;
  margin-top: -6px;
  right: -10px;
  content: "";
  border-style: solid;
  border-width: 6px 0 6px 10px;
  border-color: transparent transparent transparent #1b242f;
}
.content_right {
  width: 50%;
  float: left;
  padding: 20px 0 10px 6%;
}
.content_right h4 {
  display: inline-block;
  padding: 10px 50px;
  margin-bottom: 6px;
  font-size: 20px;
  border: 1px solid #d4d4d4;
  color: #1b242f;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.175);
}
.content_right p {
  line-height: 20px;
  font-size: 14px;
}
/*小图标*/
ul.content li span {
  position: absolute;
  top: 30px;
  right: -19px;
  z-index: 10;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: url("../common/images/company.png") no-repeat center;
  background-size: 50%;
}
ul.content li .s1 {
  background-color: #44c7f4;
}
ul.content li .s2 {
  background-color: #eb5424;
}

.tx_left {
  position: relative;
  text-align: left;
  box-sizing: border-box;
  border-left: 1px solid #999;
}
.tx_right {
  position: relative;
  text-align: right;
  box-sizing: border-box;
}

.info-message {
	margin-bottom: 6px;
	color: #333;
}

</style>
