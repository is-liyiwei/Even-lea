import{i as l,p as e,f as n,r as u,o as a,c as o,j as r,t,w as d,l as p}from"./vendor.f8985853.js";function s(l){return new Promise((e=>setTimeout(e,l)))}const i={name:"urlPagination",components:{},setup(e,n){let u=l("https://avsox.monster/cn/popular/page/"),a=l(""),o=l(1880),r=l(10);return{url0:u,url1:a,openNum:r,page:o,open:()=>{return l=this,e=null,n=function*(){for(let l=0;l<r.value;l++){yield s(100);let l=u.value+o.value+a.value;window.open(l),o.value--}},new Promise(((u,a)=>{var o=l=>{try{t(n.next(l))}catch(e){a(e)}},r=l=>{try{t(n.throw(l))}catch(e){a(e)}},t=l=>l.done?u(l.value):Promise.resolve(l.value).then(o,r);t((n=n.apply(l,e)).next())}));var l,e,n}}}},m=d();e("data-v-43af7b8d");const c={id:"urlPagination"},v=r("br",null,null,-1),b=r("br",null,null,-1),f=r("br",null,null,-1),h=r("br",null,null,-1),V=r("br",null,null,-1),w=r("br",null,null,-1),y=p("open"),g=r("br",null,null,-1),P=r("br",null,null,-1);n();const x=m(((l,e,n,d,p,s)=>{const i=u("el-input"),x=u("el-button");return a(),o("div",c,[r(i,{modelValue:d.url0,"onUpdate:modelValue":e[1]||(e[1]=l=>d.url0=l),placeholder:"头部"},null,8,["modelValue"]),v,b,r(i,{modelValue:d.url1,"onUpdate:modelValue":e[2]||(e[2]=l=>d.url1=l),placeholder:"尾部"},null,8,["modelValue"]),f,h,r(i,{modelValue:d.openNum,"onUpdate:modelValue":e[3]||(e[3]=l=>d.openNum=l),placeholder:"尾部"},null,8,["modelValue"]),V,w,r(x,{onClick:d.open,type:"primary"},{default:m((()=>[y])),_:1},8,["onClick"]),g,P,r("div",null,"当前缓存："+t(d.page),1)])}));i.render=x,i.__scopeId="data-v-43af7b8d";export default i;
