import{_ as A,u as N,d as y,f as h,o as d,c as k,g as _,w as s,F as O,a as S,p as W,h as $,i as v,j as g,k as m,t as C,l as F,m as B}from"./index-bd79c9aa.js";import{m as M}from"./maiFangData-0c1bd85b.js";const X=function(){const l=window.navigator.platform,t=window.navigator.userAgent,e={ios:!1,android:!1,androidChrome:!1,desktop:!1,windowsPhone:!1,iphone:!1,iphoneX:!1,ipod:!1,ipad:!1,edge:!1,ie:!1,firefox:!1,macos:!1,windows:!1,cordova:!!(window.cordova||window.phonegap),phonegap:!!(window.cordova||window.phonegap)},w=window.screen.width,p=window.screen.height,f=t.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),a=t.match(/(Android);?[\s\/]+([\d.]+)?/),n=t.match(/(iPad).*OS\s([\d_]+)/),i=t.match(/(iPod)(.*OS\s([\d_]+))?/),o=!n&&t.match(/(iPhone\sOS|iOS)\s([\d_]+)/),r=o&&(w===375&&p===812||w===414&&p===896),b=t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0,D=t.indexOf("Edge/")>=0,I=t.indexOf("Gecko/")>=0&&t.indexOf("Firefox/")>=0,P=l==="MacIntel",V=l==="Win32";if(e.ie=b,e.edge=D,e.firefox=I,f&&(e.os="windows",e.osVersion=V[2],e.windowsPhone=!0),a&&!V&&(e.os="android",e.osVersion=a[2],e.android=!0,e.androidChrome=t.toLowerCase().indexOf("chrome")>=0),(n||o||i)&&(e.os="ios",e.ios=!0),o&&!i&&(e.osVersion=o[2].replace(/_/g,"."),e.iphone=!0,e.iphoneX=r),n&&(e.osVersion=n[2].replace(/_/g,"."),e.ipad=!0),i&&(e.osVersion=i[3]?i[3].replace(/_/g,"."):null,e.iphone=!0),e.ios&&e.osVersion&&t.indexOf("Version/")>=0&&e.osVersion.split(".")[0]==="10"&&(e.osVersion=t.toLowerCase().split("version/")[1].split(" ")[0]),e.webView=!!((o||n||i)&&(t.match(/.*AppleWebKit(?!.*Safari)/i)||window.navigator.standalone))||window.matchMedia&&window.matchMedia("(display-mode: standalone)").matches,e.webview=e.webView,e.standalone=e.webView,e.desktop=!(e.os||e.android||e.webView),e.desktop&&(e.macos=P,e.windows=V),e.os&&e.os==="ios"){const u=e.osVersion.split("."),x=document.querySelector('meta[name="viewport"]');e.minimalUi=!e.webView&&(i||o)&&(u[0]*1===7?u[1]*1>=1:u[0]*1>7)&&x&&x.getAttribute("content").indexOf("minimal-ui")>=0}return e.needsStatusbarOverlay=function(){return(e.webView||e.android&&e.cordova)&&window.innerWidth*window.innerHeight===window.screen.width*window.screen.height?!(e.iphoneX&&(window.orientation===90||window.orientation===-90)):!1},e.statusbar=e.needsStatusbarOverlay(),e.pixelRatio=window.devicePixelRatio||1,e}();let E="maiFangList";const R={name:E,components:{},setup(c,l){const t=N();let e=B(),w=y(0);const p=(f,a,n)=>{a.isOtherLink?X.desktop?window.open(a.url):e.proxy.$root.yhc$toastShow("\u8BE5\u6587\u7AE0\u53EA\u80FD\u5728\u7535\u8111\u7AEF\u6253\u5F00"):t.push({name:"maiFangDetail",query:{title:a.title,tabIndex:w.value}})};return{maiFangData:y(M),active:w,tap:p}}},L=c=>(W("data-v-05f97b66"),c=c(),$(),c),q={id:"maiFangList"},H=L(()=>v("br",null,null,-1)),T={class:"custom-title"},U=g("\u5916\u94FE"),j=L(()=>v("br",null,null,-1)),G={class:"custom-title"},K=g("\u5916\u94FE"),z=g("\u65E0\u5185\u5BB9 3"),J=g("\u65E0\u5185\u5BB9 4");function Q(c,l,t,e,w,p){const f=h("van-tag"),a=h("van-cell"),n=h("van-tab"),i=h("van-tabs");return d(),k("div",q,[_(i,{modelValue:e.active,"onUpdate:modelValue":l[0]||(l[0]=o=>e.active=o)},{default:s(()=>[_(n,{title:"\u6587\u7AE0",class:"tab-0"},{default:s(()=>[H,(d(!0),k(O,null,S(e.maiFangData.tab0,(o,r)=>(d(),m(a,{class:"page-cell",key:`${r}-tab-0`,"is-link":"",onClick:b=>e.tap("tab0",o,r)},{title:s(()=>[v("span",T,C(o.title),1),o.isOtherLink?(d(),m(f,{key:0,type:"danger"},{default:s(()=>[U]),_:1})):F("",!0)]),_:2},1032,["onClick"]))),128))]),_:1}),_(n,{title:"\u6848\u4F8B"},{default:s(()=>[j,(d(!0),k(O,null,S(e.maiFangData.tab1,(o,r)=>(d(),m(a,{class:"page-cell",key:`${r}-tab-0`,"is-link":"",onClick:b=>e.tap("tab1",o,r)},{title:s(()=>[v("span",G,C(o.title),1),o.isOtherLink?(d(),m(f,{key:0,type:"danger"},{default:s(()=>[K]),_:1})):F("",!0)]),_:2},1032,["onClick"]))),128))]),_:1}),_(n,{title:"\u65E0\u5185\u5BB9"},{default:s(()=>[z]),_:1}),_(n,{title:"\u65E0\u5185\u5BB9"},{default:s(()=>[J]),_:1})]),_:1},8,["modelValue"])])}var ee=A(R,[["render",Q],["__scopeId","data-v-05f97b66"]]);export{ee as default};
