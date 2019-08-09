function IsPC() {
  var userAgentInfo = navigator.userAgent;
  var Agents = [
    "Android",
    "iPhone",
    "SymbianOS",
    "Windows Phone",
    "iPad",
    "iPod"
  ];
  var flag = true;
  for (var v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = false;
      break;
    }
  }
  return flag;
}

export default {
  install(Vue) {
    window.__isPc = IsPC();

    // html和css在App.vue里面
    window.qCode = {
      // 萤火虫官网 - web移动端
      softbuilder:
        "data:image/png;base64,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",
      softbuilderWxApp_home: require("../common/images/qrCode/home.png"),
      softbuilderWxApp_shebao: require("../common/images/qrCode/shebao.png"),
      softbuilderWxApp_kaisitingsi: require("../common/images/qrCode/kaisitingsi.png")
    };

    window.openImgDialog = function(targetDom, srcKey) {
      if (!window.__isPc) {
        console.log("不是pc端");
        return;
      }
      let targetDomRect = targetDom.getBoundingClientRect();
      let imgPreviewBox = document.getElementById("img-preview-box");
      let imageDom = imgPreviewBox.querySelector("img");
      imageDom.src = window.qCode[srcKey];
      imgPreviewBox.style.top = targetDomRect.top - 250 + "px";
      imgPreviewBox.style.left = targetDomRect.left - 50 + "px";
      imgPreviewBox.style.display = "flex";
      imgPreviewBox.style.zIndex = 999;
      setTimeout(() => {
        imgPreviewBox.style.opacity = 1;
      }, 20);
    };

    window.closeImgDialog = function(targetDom) {
      if (!window.__isPc) {
        console.log("不是pc端");
        return;
      }
      let imgPreviewBox = document.getElementById("img-preview-box");
      imgPreviewBox.style.opacity = 0;
      setTimeout(() => {
        imgPreviewBox.style.display = "none";
      }, 300);
    };
  }
};
