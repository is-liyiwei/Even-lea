(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2c2433da"],{"0a97":function(t,e,a){},"0d90":function(t,e,a){"use strict";var i=a("7e70"),n=a("71fe"),o=a("4839"),s=a("37d2"),c=a("07d2"),p=a("df65"),r=a("e01f"),u=a("42ce"),h=a("2574"),l=h("splice"),d=n.TypeError,f=Math.max,g=Math.min,v=9007199254740991,m="Maximum allowed length exceeded";i({target:"Array",proto:!0,forced:!l},{splice:function(t,e){var a,i,n,h,l,b,k=p(this),y=c(k),_=o(t,y),w=arguments.length;if(0===w?a=i=0:1===w?(a=0,i=y-_):(a=w-2,i=g(f(s(e),0),y-_)),y+a-i>v)throw d(m);for(n=r(k,i),h=0;h<i;h++)l=_+h,l in k&&u(n,h,k[l]);if(n.length=i,a<i){for(h=_;h<y-i;h++)l=h+i,b=h+a,l in k?k[b]=k[l]:delete k[b];for(h=y;h>y-i+a;h--)delete k[h-1]}else if(a>i)for(h=y-i;h>_;h--)l=h+i-1,b=h+a-1,l in k?k[b]=k[l]:delete k[b];for(h=0;h<a;h++)k[h+_]=arguments[h+2];return k.length=y-i+a,n}})},4809:function(t,e,a){"use strict";var i=a("d4ba"),n=a("cb6f"),o=(a("e456"),function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(i["a"])(this,t),this.reset(e)}return Object(n["a"])(t,[{key:"updatePage",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.page+=t}},{key:"updateLast",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.last=t}},{key:"updateFetching",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.fetching=t}},{key:"updateEpochFrom",value:function(t){this.epochFrom=t||0}},{key:"updateEpochTo",value:function(t){this.epochTo=t||1e14}},{key:"whetherFetch",value:function(){return this.fetching||this.last}},{key:"reset",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.page=t.page||1,this.take=t.take||10,this.epochFrom=t.epochFrom||0,this.epochTo=t.epochTo||1e14,this.last=t.last||!1,this.fetching=t.fetching||!1,this.list=t.list||[],this.totalNum=t.totalNum||0,this.up=t.up||!0}}]),t}());e["a"]=o},"7a35":function(t,e,a){"use strict";a("0a97")},f22a:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container",attrs:{id:"mockList"}},[a("div",{staticClass:"title-msg app-fz-16 app-pda-8 app-fwb"},[t._v(" 滚动底部v-appReachBottom指令和分页model的使用，元素必须有overflow-y: scroll ")]),a("div",{directives:[{name:"appReachBottom",rawName:"v-appReachBottom",value:t.reachBottomHandle,expression:"reachBottomHandle"}],staticClass:"pagination-box"},t._l(t.pageList,(function(e,i){return a("div",{key:i,staticClass:"item app-pda-16"},[a("div",{staticClass:"app-pdb-8"},[t._v("数据id： "+t._s(e.id))]),a("div",{staticClass:"app-pdb-8"},[t._v(" question： "+t._s(e.question)+" ")]),a("div",{staticClass:"app-pdb-8"},[t._v(" 余额： "+t._s(t._f("appFilterMoney")(e.date))+" ")]),a("div",{staticClass:"app-pdb-8"},[t._v(" 注册时间： "+t._s(t._f("appParseTime")(e.date))+" ")]),a("van-button",{attrs:{type:"info"},on:{click:function(a){return t.appToPage("mockDetail",e.id,"edit")}}},[t._v("详情")]),a("van-button",{attrs:{type:"danger"},on:{click:function(a){return t.deleteItem(e.id,i)}}},[t._v("删除")])],1)})),0),a("div",{staticClass:"app-pdr-32 app-pdl-32 app-mgt-32"},[a("van-button",{attrs:{type:"info",size:"large"},on:{click:function(e){return t.appToPage("mockDetail")}}},[t._v("添加")])],1)])},n=[],o=a("6c65"),s=(a("0d90"),a("1313"),a("4809")),c="mockList",p={name:c,components:{},mixins:[],data:function(){return{pageList:[],pageModel:{},queryModel:{name:""},pagePagination:new s["a"]}},props:{},computed:{},watch:{},methods:{deleteItem:function(t,e){var a=this;this.$dialog.confirm({title:"提示",message:"此操作将永久删除该数据, 是否继续?"}).then((function(){a.YhcAjax.xxx(null,{id:t}).then((function(t){0==t.errorCode&&(a.pageList.splice(e,1),a.appShowToast({message:"操作成功"}))}))})).catch((function(){}))},getList:function(){var t=this;if(!this.pagePagination.whetherFetch()){var e=Object.assign({},this.queryModel,this.pagePagination);this.pagePagination.updateFetching(!0),this.YhcAjax.getFaqList(null,e).then((function(e){0==e.list.length?t.pagePagination.updateLast(!0):t.pageList=[].concat(Object(o["a"])(t.pageList),Object(o["a"])(e.list)),t.pagePagination.updatePage(),t.pagePagination.updateFetching(!1)}))}},reachBottomHandle:function(t){"bottom"==t&&this.getList()}},beforeCreate:function(){},created:function(){this.getList()},mounted:function(){}},r=p,u=(a("7a35"),a("cba8")),h=Object(u["a"])(r,i,n,!1,null,"4fc954fa",null);e["default"]=h.exports}}]);