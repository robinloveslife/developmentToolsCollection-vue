(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-087ae496"],{"466d":function(t,e,r){"use strict";var a=r("d784"),n=r("825a"),c=r("50c4"),l=r("1d80"),i=r("8aa5"),o=r("14c3");a("match",1,(function(t,e,r){return[function(e){var r=l(this),a=void 0==e?void 0:e[t];return void 0!==a?a.call(e,r):new RegExp(e)[t](String(r))},function(t){var a=r(e,t,this);if(a.done)return a.value;var l=n(t),s=String(this);if(!l.global)return o(l,s);var f=l.unicode;l.lastIndex=0;var u,p=[],g=0;while(null!==(u=o(l,s))){var d=String(u[0]);p[g]=d,""===d&&(l.lastIndex=i(s,c(l.lastIndex),f)),g++}return 0===g?null:p}]}))},"4ac8":function(t,e,r){},"62fd":function(t,e,r){"use strict";var a=r("4ac8"),n=r.n(a);n.a},b390:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"app-container"},[r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:10}},[r("div",{staticClass:"grid-content bg-purple"},[r("el-input",{attrs:{type:"textarea",rows:40,placeholder:"请输入"},model:{value:t.textareaLeft,callback:function(e){t.textareaLeft=e},expression:"textareaLeft"}})],1)]),r("el-col",{attrs:{span:2}},[r("div",{staticClass:"grid-content bg-purple"},[r("el-button",{staticStyle:{"text-align":"center","margin-left":"25px","margin-top":"150px"},on:{click:t.translate}},[t._v("转换")])],1)]),r("el-col",{attrs:{span:10}},[r("div",{staticClass:"grid-content bg-purple"},[r("el-input",{attrs:{type:"textarea",rows:40},model:{value:t.textareaRight,callback:function(e){t.textareaRight=e},expression:"textareaRight"}})],1)])],1)],1)},n=[],c=(r("ac1f"),r("466d"),r("5319"),r("1276"),r("1157")),l=r.n(c),i={data:function(){return{textareaLeft:"",textareaRight:""}},methods:{translate:function(){this.textareaRight=this.formatJson(this.textareaLeft)},formatJson:function(t,e){var r=null,a="",n=0,c="    ";return e=e||{},e.newlineAfterColonIfBeforeBraceOrBracket=!0===e.newlineAfterColonIfBeforeBraceOrBracket,e.spaceAfterColon=!1!==e.spaceAfterColon,"string"!==typeof t&&(t=JSON.stringify(t)),t=JSON.parse(t),t=JSON.stringify(t),r=/([\{\}])/g,t=t.replace(r,"\r\n$1\r\n"),r=/([\[\]])/g,t=t.replace(r,"\r\n$1\r\n"),r=/(\,)/g,t=t.replace(r,"$1\r\n"),r=/(\r\n\r\n)/g,t=t.replace(r,"\r\n"),r=/\r\n\,/g,t=t.replace(r,","),e.newlineAfterColonIfBeforeBraceOrBracket||(r=/\:\r\n\{/g,t=t.replace(r,":{"),r=/\:\r\n\[/g,t=t.replace(r,":[")),e.spaceAfterColon&&(r=/\:/g,t=t.replace(r,": ")),l.a.each(t.split("\r\n"),(function(t,e){var r=0,l=0,i="";for(e.match(/\{$/)||e.match(/\[$/)?l=1:e.match(/\}/)||e.match(/\]/)?0!==n&&(n-=1):l=0,r=0;r<n;r++)i+=c;a+=i+e+"\r\n",n+=l})),a}}},o=i,s=(r("62fd"),r("2877")),f=Object(s["a"])(o,a,n,!1,null,"42157566",null);e["default"]=f.exports}}]);