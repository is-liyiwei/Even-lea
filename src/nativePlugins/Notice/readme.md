https://github.com/alihesari/notice.js
http://www.htmleaf.com/jQuery/Tooltips/201801204941.html

notice.js是一款纯js超酷消息提示框插件。notice.js为纯js编写，没有任何依赖文件。通过它可以在页面上制作出漂亮的toast消息通知框效果。该js消息提示框插件的特点还有：

支持4中情景类型：error， warning， info， success。
消息框可以显示在9个位置：topLeft, topCenter, middleLeft, middleRight, middleCenter, bottomLeft, bottomRight, bottomCenter。
消息框内容支持HTML元素。


初始化插件


notice.js消息提示框插件最基本的用法如下：

new NoticeJs({
  text: 'Notification message',
  position: 'topLeft',
}).show();

你也可以结合animate.css来为消息通知框添加炫酷的CSS3动画效果。

在页面中引入animate.css文件。

<link href="css/animate.css" rel="stylesheet" type="text/css">

然后在配置参数中设置animation参数：

new NoticeJs({
  text: 'Notification message',
  position: 'topLeft',
  animation: {
    open: 'animated bounceInRight',
    close: 'animated bounceOutLeft'
  }
}).show();

官方github没有详细介绍使用方法，醉了，但是看到源码有这几个json选项

export let Defaults = {
    title: '',
    text: '',
    type: 'success',
    position: 'topRight',
    newestOnTop: false,
    timeout: 30,
    progressBar: true,
    closeWith: ['button'],
    animation: null,
    modal: false,
    width: 320,
    scroll: {
        maxHeightContent: 300,
        showOnHover: true
    },
    rtl: false,
    callbacks: {
        beforeShow: [],
        onShow: [],
        afterShow: [],
        onClose: [],
        afterClose: [],
        onClick: [],
        onHover: [],
        onTemplate: []
    }
}