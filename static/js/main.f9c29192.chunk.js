(this["webpackJsonpsho0126hiro.github.io"]=this["webpackJsonpsho0126hiro.github.io"]||[]).push([[0],{23:function(e,t,a){e.exports=a(39)},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t){new function(){var e=this.dels=[],t={attribute:"data-delighter",classNames:["delighter","started","ended"],start:.9,end:.9,autoInit:!0};function a(){document.addEventListener("scroll",l);for(var a=document.querySelectorAll("["+t.attribute+"]"),n=0;n<a.length;n++){var s=a[n],c=s.getAttribute(t.attribute,2).split(";"),r={};r.start=t.start,r.end=t.end;for(var o=0;o<c.length;o++){var m=c[o].split(":"),i=m[0],h=isNaN(1*m[1])?m[1]:1*m[1];i&&(r[i]=void 0===h||h)}r.el=s,r.id=e.length,e.push(r),s.classList.add(t.classNames[0]),r.debug&&(s.style.outline="solid red 4px")}l()}function l(){for(var a=window.innerHeight,l=0;l<e.length;l++){var n=e[l],s=n.el.getBoundingClientRect(),c=s.top/a,r=s.bottom/a;n.debug&&(c>=0&&c<=1&&(n.startLine||(n.startLine=document.createElement("div"),document.body.appendChild(n.startLine),n.startLine.style="position:fixed;height:0;width:100%;border-bottom:dotted red 2px;top:"+100*n.start+"vh")),(r<n.end||c>1)&&n.startLine&&(n.startLine.parentNode.removeChild(n.startLine),delete n.startLine)),c<n.start&&!n.started?(n.started=!0,n.el.classList.add(t.classNames[1])):c>n.start&&n.started&&(n.started=!1,n.el.classList.remove(t.classNames[1])),r<n.end&&!n.ended?(n.ended=!0,n.el.classList.add(t.classNames[2])):r>n.end&&n.ended&&(n.ended=!1,n.el.classList.remove(t.classNames[2]))}}document.addEventListener("DOMContentLoaded",(function(){t.autoInit&&a()})),this.init=a,this.config=function(e){for(var a in e)t[a]=e[a]}}},39:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),s=a(15),c=a.n(s),r=(a(28),a(29),a(30),a(31),a(1)),o=a(2),m=a(16),i=a.n(m),h=a(22),d=function(){var e,t=[],a=Object(h.a)(b);try{for(a.s();!(e=a.n()).done;){var l=e.value;t.push(n.a.createElement("p",null,l.message,n.a.createElement("span",{className:"text-xs pl-5"},l.timestamp)))}}catch(s){a.e(s)}finally{a.f()}return n.a.createElement("div",{className:"my-4"},n.a.createElement("label",{className:"text-xl ml-4"},"information"),n.a.createElement("div",{className:"mx-8"},t))},b=[{message:"\u73fe\u5728\u958b\u767a\u4e2d\u3067\u3059\u3002\u30e2\u30d0\u30a4\u30eb\u5bfe\u5fdc\u306e\u30ec\u30a4\u30a2\u30a6\u30c8\u3092\u66f8\u3044\u3066\u3044\u307e\u3059\u3002",timestamp:"2020/05/20"}],u="absolute text-white text-4xl font-bold",p="w-full object-cover object-top h-48 opacity-75 overflow-hidden",E="bg-blue-800 my-2 relative overflow-hidden",x=["","about","works","research","links","contact"],g=function(){var e,t=Object(o.g)(),a=i.a.parse(t.search);return a.redirect?(e=a.redirect,console.log(e),-1==x.indexOf(e)?n.a.createElement(o.a,{to:"/"}):n.a.createElement(o.a,{to:e})):n.a.createElement("div",{className:"home"},n.a.createElement("div",{className:"relative bg-yellow-800"},n.a.createElement("img",{src:"/img/home.JPG",className:"w-full object-cover h-64 object-top opacity-75"}),n.a.createElement("h1",{className:"absolute text-white text-5xl font-bold"},"portfolio")),n.a.createElement(d,null),n.a.createElement("div",{className:"content"},n.a.createElement("p",{className:"text-xl ml-3"},"Contents"),n.a.createElement("div",{className:E,"data-delighter":!0},n.a.createElement(r.b,{to:"/about"},n.a.createElement("img",{src:"/img/about.JPG",className:p}),n.a.createElement("h2",{className:u},"About"))),n.a.createElement("div",{className:E,"data-delighter":!0},n.a.createElement(r.b,{to:"/works"},n.a.createElement("img",{src:"/img/skytree.JPG",className:p}),n.a.createElement("h2",{className:u},"Works"))),n.a.createElement("div",{className:E,"data-delighter":!0},n.a.createElement(r.b,{to:"/research"},n.a.createElement("img",{src:"/img/lianchi_tan.JPG",className:p}),n.a.createElement("h2",{className:u},"Research"))),n.a.createElement("div",{className:E,"data-delighter":!0},n.a.createElement(r.b,{to:"/links"},n.a.createElement("img",{src:"/img/links.JPG",className:"w-full object-cover h-48 opacity-75 overflow-hidden"}),n.a.createElement("h2",{className:u},"Links"))),n.a.createElement("div",{className:E,"data-delighter":!0},n.a.createElement(r.b,{to:"/contact"},n.a.createElement("img",{src:"/img/contact.JPG",className:"w-full object-cover h-48 opacity-75 overflow-hidden"}),n.a.createElement("h2",{className:u},"Contact"))),n.a.createElement("p",null,"footer")))},N=a(8),f=a(9),v=a(11),k=a(10),y=a(19),w=a.n(y),S=function(e){var t=e.item,a=[];return t.tags.forEach((function(e,t){a.push(n.a.createElement("span",{key:t,className:"inline-block bg-gray-200 rounded-full px-2 py-1 text-xs font-semibold text-gray-700 m-1"},e))})),n.a.createElement("div",{className:"m-5 max-w-sm rounded-lg overflow-hidden shadow-lg \n        ".concat(e.effect?"effect":"no-effect")},n.a.createElement("img",{className:"w-full ".concat(t.imgPath?"":"hidden"),src:t.imgPath,alt:"works img"}),n.a.createElement("div",{className:"px-6 py-3"},n.a.createElement("div",{className:""},n.a.createElement("h2",{className:" font-bold text-xl mb-2"},t.title),n.a.createElement("h3",{className:"text-ms mb-2"},t.subtitle),n.a.createElement("p",{className:"text-gray-700 text-xs"},t.discription),n.a.createElement("a",{href:t.blogUrl,className:"text-xs ".concat(t.blogUrl?"":"hidden")},"\u8a73\u7d30\u30d6\u30ed\u30b0")),n.a.createElement("div",{className:"pt-2"},a)))},L=function(e){Object(v.a)(a,e);var t=Object(k.a)(a);function a(){var e;return Object(N.a)(this,a),(e=t.call(this)).toggleLatest=function(){e.setState({latest:!e.state.latest,effect:!0}),setTimeout((function(){e.setState({effect:!1})}),400)},e.state={latest:!0,effect:!1},e}return Object(f.a)(a,[{key:"render",value:function(){var e=this,t=[],a=j;return(a=a.sort((function(t,a){var l=w()(a.timestamp,"YYYY/MM"),n=w()(t.timestamp,"YYYY/MM");return e.state.latest?l-n:n-l}))).forEach((function(a,l){t.push(n.a.createElement(S,{key:l,item:a,effect:e.state.effect}))})),n.a.createElement("div",{className:"works"},n.a.createElement("div",{className:"text-right py-3 mx-5"},n.a.createElement("label",{className:"text-sm mx-3 pr-10"},"\u65e5\u4ed8\u9806"),n.a.createElement("div",{className:"inline allow-wrapper relative",onClick:this.toggleLatest},n.a.createElement("p",{className:"allow ".concat(this.state.latest?"up":"")}))),n.a.createElement("div",{className:"flex flex-wrap"},t))}}]),a}(n.a.Component),j=[{term:"2020.05",timestamp:"2020/05",title:"sho0126hiro.github.io",subtitle:"\u500b\u4eba\u30db\u30fc\u30e0\u30da\u30fc\u30b8",discription:"\u5c31\u6d3b\u7528\u306b\u81ea\u5206\u306eHP\u3092\u4f5c\u6210\u3057\u307e\u3057\u305f\u3002React, TailswindCSS\u3092\u4f7f\u3063\u3066\u3044\u307e\u3059\u3002\u958b\u767a\u671f\u9593\u306f5\u65e5\u7a0b\u5ea6\u3002\u521d\u3081\u3066\u30e2\u30d0\u30a4\u30eb\u30d5\u30a1\u30fc\u30b9\u30c8\u3092\u610f\u8b58\u3057\u3066\u5b9f\u88c5\u3057\u307e\u3057\u305f\u3002",tags:["ReactJS"],blogUrl:null,imgPath:null},{term:"2020.05",timestamp:"2020/04",title:"DiaryShare(\u4eee)",subtitle:"\u65e5\u8a18\u5171\u6709\u30a2\u30d7\u30ea\uff08\u958b\u767a\u4e2d\uff09",discription:"SNS\u3068\u30d6\u30ed\u30b0\u306e\u4e2d\u9593\u306b\u4f4d\u7f6e\u3057\u3001\u7279\u5b9a\u306e\u76f8\u624b\u306b\u3060\u3051\u65e5\u8a18\u3092\u5171\u6709\u3067\u304d\u308b\u3088\u3046\u306a\u30a2\u30d7\u30ea\u3092\u500b\u4eba\u3067\u958b\u767a\u3057\u3066\u3044\u307e\u3059\u3002\u73fe\u5728\u306f\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u3092Kotlin\u3067\u958b\u767a\u4e2d\u3067\u3059\u3002",tags:["Kotlin","SpringBoot","ReactJS"],blogUrl:null,imgPath:null},{term:"2018.10 - 2019.03",timestamp:"2018/10",title:"SHIWORI",subtitle:"\u672c\u306e\u3057\u304a\u308a\u3092IoT\u306b",discription:"HackU 2018(Yahoo! Japan)\u3067\u30c1\u30fc\u30e0(4\u4eba)\u3067\u53d6\u308a\u7d44\u3093\u3060\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3002\u8aad\u66f8\u91cf\u306e\u7ba1\u7406\u3092\u3057\u3001\u30b9\u30de\u30db\u30a2\u30d7\u30ea\u3067\u30c7\u30fc\u30bf\u3092\u53ef\u8996\u5316\u3057\u3066\u8868\u793a\u3059\u308b\u30a2\u30d7\u30ea\u3092\u958b\u767a\u3057\u307e\u3057\u305f\u3002\u66f8\u7c4d\u691c\u7d22\u3001\u672c\u306e\u30ec\u30d3\u30e5\u30fc\u306a\u3069\u306e\u6a5f\u80fd\u3082\u5b9f\u88c5\u3057\u307e\u3057\u305f\u3002\u81ea\u5206\u306fReactNative, Redux\u3092\u7528\u3044\u305f\u30a2\u30d7\u30ea\u306e\u958b\u767a\u3092\u62c5\u5f53\u3057\u307e\u3057\u305f\u3002",tags:["ReactNative","Node.js"],blogUrl:"https://sho0126hiro.hatenablog.com/entry/2019/03/12/141824",imgPath:"/img/shiwori.jpg"},{term:"2019.10 - 2020.03",timestamp:"2019/10",title:"KOYOMI",subtitle:"\u30b9\u30de\u30fc\u30c8\u306a\u58c1\u639b\u3051\u30ab\u30ec\u30f3\u30c0\u30fc",discription:"HackU2019(Yahoo! Japan)\u3067\u30c1\u30fc\u30e0(4\u4eba)\u3067\u53d6\u308a\u7d44\u3093\u3060\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3002\u58c1\u639b\u3051\u30ab\u30ec\u30f3\u30c0\u30fc\u3068\u30b9\u30de\u30db\u306e\u30ab\u30ec\u30f3\u30c0\u30fc\u3092\u540c\u6642\u306b\u7ba1\u7406\u3057\u305f\u3044\uff01\u3068\u3044\u3046\u6c17\u6301\u3061\u304b\u3089\u3001\u58c1\u639b\u3051\u30ab\u30ec\u30f3\u30c0\u30fc\u3092IoT\u306b\u3057\u307e\u3057\u305f\u3002Web\u30a2\u30d7\u30ea\u5316\u3059\u308b\u3053\u3068\u3067\u3069\u3093\u306a\u7aef\u672b\u3067\u3082\u4f7f\u3048\u308b\u69d8\u306b\u3057\u3001\u5bb6\u65cf\u9593\u3067\u306e\u5171\u6709\u30e1\u30e2\u6a5f\u80fd\u3084\u30ab\u30ec\u30f3\u30c0\u30fc\u4e0a\u306e\u4ed8\u52a0\u60c5\u5831\u306a\u3069\u3001IoT\u30ab\u30ec\u30f3\u30c0\u30fc\u306a\u3089\u3067\u306f\u306e\u6a5f\u80fd\u3092\u5b9f\u88c5\u3057\u307e\u3057\u305f\u3002",tags:["ReactJS","Kotlin","SpringBoot"],blogUrl:null,imgPath:"./img/koyomi.jpg"},{term:"2019.09 - 2019.10",timestamp:"2019/09",title:"\u6587\u5316\u796d HP 2019",subtitle:"\u6700\u65b0\u60c5\u5831\u3092\u3044\u3061\u65e9\u304f\u304a\u5c4a\u3051",discription:"\u30c1\u30fc\u30e0\uff085\u540d\u7a0b\u5ea6\uff09\u3067\u53d6\u308a\u7d44\u3093\u3060\u30021\u5e74\u76ee\u306e\u53cd\u7701\u3092\u751f\u304b\u3057\u3001\u6a21\u64ec\u5e97\u9577\u3084\u90e8\u9577\u304b\u3089\u76f4\u63a5\u6700\u65b0\u60c5\u5831\u3092\u5165\u529b\u3057\u3066\u3082\u3089\u3046\u3053\u3068\u3067\u3001\u5546\u54c1\u306e\u5024\u4e0b\u304c\u308a\u3084\u30a4\u30d9\u30f3\u30c8\u306e\u5909\u66f4\u306a\u3069\u306e\u60c5\u5831\u3092\u3044\u3061\u65e9\u304f\u5c4a\u3051\u308b\u52d5\u7684HP\u3092\u5b9f\u73fe\u3057\u307e\u3057\u305f\u3002\u81ea\u5206\u306f\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30ea\u30fc\u30c0\u30fc\u3068\u3057\u3066\u3001\u5168\u4f53\u306e\u8a08\u753b\u3084\u30b9\u30b1\u30b8\u30e5\u30fc\u30ea\u30f3\u30b0\u306a\u3069\u3092\u884c\u3046\u307b\u304b\u3001\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u958b\u767a\u3092\u884c\u3044\u307e\u3057\u305f\u3002",tags:["ReactNative","Node.js"],blogUrl:null,imgPath:"/img/kfes2019.jpg"},{term:"2019.09 - 2019.10",timestamp:"2018/09",title:"\u6587\u5316\u796d HP 2018 / LINE@",subtitle:"\u5f53\u6821\u521d\u3081\u3066\u306e\u6587\u5316\u796dHP / LINE@",discription:"\u6587\u5316\u796d\u3067HP\u3092\u4f5c\u6210\u3059\u308b\u306e\u306f\u5f53\u6821\u306b\u304a\u3044\u3066\u521d\u3081\u3066\u3060\u3063\u305f\u3002\u65b0\u3057\u3044\u6587\u5316\u796d\u5b9f\u884c\u90e8\u9580\u306e\u7acb\u3061\u4e0a\u3052\u306b\u643a\u308f\u308a\u3001\u6587\u5316\u796dHP\u306e\u4f5c\u6210\u306b\u53d6\u308a\u7d44\u3093\u3060\u3002\u7279\u306b\u3001\u76f4\u611f\u7684\u306b\u9077\u79fb\u3059\u308b\u30de\u30c3\u30d7\u6a5f\u80fd\u3092HP\u4e0a\u304a\u3088\u3073LINE\uff20\u306b\u5b9f\u88c5\u3057\u307e\u3057\u305f\u3002",tags:["HTML/CSS","Node.js"],blogUrl:"https://sho0126hiro.hatenablog.com/entry/2018/11/06/233849",imgPath:"/img/kfes2018.png"},{term:"2017.10 - 2018.03",timestamp:"2017/10",title:"2017\u5e74\u5ea6\u30de\u30a4\u30b9\u30bf\u30fc\u4f5c\u54c1",subtitle:"\u76f4\u611f\u7684\u306a\u624b\u306e\u52d5\u4f5c\u3067\u52d5\u304f\u30e9\u30b8\u30b3\u30f3",discription:"\u521d\u3081\u3066\u306e\u30c1\u30fc\u30e0\u30d7\u30ed\u30b8\u30a7\u30af\u30c8(4\u540d)\u3002HackU 2017(Yahoo! Japan)\u3067\u306e\u4f5c\u54c1\u3067\u3059\u3002LeapMotion\u3092\u7528\u3044\u3066\u8a8d\u8b58\u3057\u305f\u624b\u306e\u89d2\u5ea6\u3084\u30dd\u30fc\u30ba\u306a\u3069\u3092\u5229\u7528\u3057\u3066\u3001\u624b\u3092\u5012\u3057\u305f\u65b9\u5411\u306b\u9032\u3080\u3068\u3044\u3063\u305f\u3001\u76f4\u611f\u7684\u306a\u52d5\u4f5c\u3067\u52d5\u304f\u30e9\u30b8\u30b3\u30f3\u3092\u5b9f\u88c5\u3057\u307e\u3057\u305f\u3002",tags:["Python"],blogUrl:null,imgPath:"/img/meister2017.jpg"},{term:"2019.06",timestamp:"2019/06",title:"WebcamBot",subtitle:"Web\u30ab\u30e1\u30e9\u304c\u5199\u771f\u3092\u3068\u3063\u3066\u901a\u77e5",discription:"RaspberryPi\u306b\u63a5\u7d9a\u3057\u305fWeb\u30ab\u30e1\u30e9\u304c\u5b9a\u671f\u7684or\u304a\u9858\u3044\u3057\u305f\u3068\u304d\u306b\u5199\u771f\u3092\u64ae\u3063\u3066\u3001Slack\u3084LINE\u30b0\u30eb\u30fc\u30d7\u306b\u6295\u7a3f\u3059\u308bBOT\u3092\u958b\u767a\u3057\u307e\u3057\u305f\u3002",tags:["Python"],blogUrl:"https://sho0126hiro.hatenablog.com/entry/2019/06/16/183000",imgPath:"/img/webcambot.jpg"}],P="flex-1 text-right pr-5 font-semibold text-xs",C="flex-1 text-right pr-5 text-xs",O="block mx-8 text-xs font-bold",H=function(){return n.a.createElement("div",{className:"about"},n.a.createElement("h1",{className:"text-4xl text-center py-4 bg-gray-200"},"About"),n.a.createElement("div",{className:"profile py-2"},n.a.createElement("label",{className:"text-2xl pl-5"},"Sho Hirose"),n.a.createElement("p",{className:"px-5 text-xs"},"National Institute of Technology, Tokyo Collage"),n.a.createElement("p",{className:"px-5 text-xs"},"Advanced Cource of Mechanical and Computer Science"),n.a.createElement("img",{src:"/img/profile.JPG",className:"w-3/6 h-3/6 mx-auto p-5"}),n.a.createElement("div",{className:"flex flex-col"},n.a.createElement("div",{className:"flex flex-auto"},n.a.createElement("label",{className:P},"\u540d\u524d"),n.a.createElement("p",{className:"content text-xs font-normal"},"\u5ee3\u702c \u7fd4")),n.a.createElement("div",{className:"flex flex-auto"},n.a.createElement("label",{className:P},"\u51fa\u8eab\u5730"),n.a.createElement("p",{className:"content text-xs font-normal"},"\u718a\u672c\u770c \u718a\u672c\u5e02")),n.a.createElement("div",{className:"flex flex-auto"},n.a.createElement("label",{className:P},"\u6240\u5c5e"),n.a.createElement("p",{className:"content text-xs font-normal"},"\u56fd\u7acb\u6771\u4eac\u5de5\u696d\u9ad8\u7b49\u5c02\u9580\u5b66\u6821",n.a.createElement("br",null),"\u6a5f\u68b0\u60c5\u5831\u30b7\u30b9\u30c6\u30e0\u5de5\u5b66\u5c02\u653b")),n.a.createElement("div",{className:"flex flex-auto"},n.a.createElement("label",{className:P},"\u9023\u7d61\u5148"),n.a.createElement("p",{className:"content text-xs font-normal"},"sho0126hiro@gmail.com",n.a.createElement("br",null),"s20613@tokyo.kosen-ac.jp")))),n.a.createElement("div",{className:"history py-2"},n.a.createElement("label",{className:"text-xl pl-5"},"History"),n.a.createElement("div",{className:"flex flex-col my-2"},n.a.createElement("div",{className:"flex-auto flex"},n.a.createElement("label",{className:C},"2015.04"),n.a.createElement("p",{className:"content font-light text-xs"},"\u718a\u672c\u9ad8\u7b49\u5c02\u9580\u5b66\u6821 \u718a\u672c\u30ad\u30e3\u30f3\u30d1\u30b9 ",n.a.createElement("br",null),"\u4eba\u9593\u60c5\u5831\u30b7\u30b9\u30c6\u30e0\u5de5\u5b66\u79d1 \u5165\u5b66")),n.a.createElement("div",{className:"flex-auto flex"},n.a.createElement("label",{className:C},"2016.04"),n.a.createElement("p",{className:"content font-light text-xs"},"\u56fd\u7acb\u6771\u4eac\u5de5\u696d\u9ad8\u7b49\u5c02\u9580\u5b66\u6821 ",n.a.createElement("br",null),"\u60c5\u5831\u5de5\u5b66\u79d1 \u8ee2\u5165\u5b66")),n.a.createElement("div",{className:"flex-auto flex"},n.a.createElement("label",{className:C},"2020.03"),n.a.createElement("p",{className:"content font-light text-xs"},"\u56fd\u7acb\u6771\u4eac\u5de5\u696d\u9ad8\u7b49\u5c02\u9580\u5b66\u6821 ",n.a.createElement("br",null),"\u60c5\u5831\u5de5\u5b66\u79d1 \u5352\u696d")),n.a.createElement("div",{className:"flex-auto flex"},n.a.createElement("label",{className:C},"2020.04"),n.a.createElement("p",{className:"content font-light text-xs"},"\u56fd\u7acb\u6771\u4eac\u5de5\u696d\u9ad8\u7b49\u5c02\u9580\u5b66\u6821 ",n.a.createElement("br",null),"\u6a5f\u68b0\u60c5\u5831\u30b7\u30b9\u30c6\u30e0\u5de5\u5b66\u5c02\u653b \u5728\u5b66\u4e2d (1\u5e74)")))),n.a.createElement("div",{className:"history py-2"},n.a.createElement("label",{className:"text-xl pl-5 my-3"},"Skills"),n.a.createElement("div",{className:"mx-8 text-sm"},n.a.createElement("p",null,"C, Java, Python, Kotlin, HTML, CSS, JavaScript, Nodejs, TypeScript, PHP, Springboot, ReactJS, Laravel, ReactNative, MySQL, Docker, ",n.a.createElement("br",null),"Machine Learning, Reinforcement Learning, Deep Reinforcement Learning"))),n.a.createElement("div",{className:"history py-2"},n.a.createElement("label",{className:"text-xl pl-5 my-3"},"Links / SNS"),n.a.createElement("div",null,n.a.createElement("label",{className:O},"Home"),n.a.createElement(r.b,{className:"block mx-8 text-xs",to:"/"},"sho0126hiro.github.io"),n.a.createElement("label",{className:O},"Github"),n.a.createElement("a",{href:"https://github.com/sho0126hiro",target:"_blank",className:"block mx-8 text-xs"},"sho0126hiro"),n.a.createElement("label",{className:O},"Twitter"),n.a.createElement("a",{href:"https://twitter.com/sho0126hiro",target:"_blank",className:"block mx-8 text-xs"},"@sho0126hiro"),n.a.createElement("label",{className:O},"Facebook"),n.a.createElement("a",{href:"https://www.facebook.com/sho.hirose.142",target:"_blank",className:"block mx-8 text-xs"},"sho.hirose.142"),n.a.createElement("label",{className:O},"Hatena Blog"),n.a.createElement("a",{href:"https://sho0126hiro.hatenablog.com/",target:"_blank",className:"block mx-8 text-xs"},"Sho\u306e\u30b7\u30b9\u30c6\u30e0\u958b\u767a\u5fd8\u5099\u9332"))))},I="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4",M=function(e){Object(v.a)(a,e);var t=Object(k.a)(a);function a(e){var l;return Object(N.a)(this,a),(l=t.call(this,e)).toggleIsOpened=function(){l.setState({isOpened:!l.state.isOpened})},l.close=function(){l.setState({isOpened:!1})},l.state={isOpened:!1},l}return Object(f.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"fixed top-0 left-0 z-10 w-full"},n.a.createElement("div",{className:"flex items-center justify-between flex-wrap bg-teal-500 p-3"},n.a.createElement(r.b,{className:"inner-block",to:"/"},n.a.createElement("div",{className:"flex items-center flex-shrink-0 text-white mr-6"},n.a.createElement("svg",{className:"fill-current h-8 w-8 mr-2",width:"54",height:"54",viewBox:"0 0 54 54",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{d:"M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"})),n.a.createElement("span",{className:"font-semibold text-xl tracking-tight"},"sho0126hiro"))),n.a.createElement("div",{className:"block lg:h-0"},n.a.createElement("a",{className:"mr-3 menu-trigger lg:hidden ".concat(this.state.isOpened?"active":""),onClick:this.toggleIsOpened},n.a.createElement("span",null),n.a.createElement("span",null),n.a.createElement("span",null))),n.a.createElement("div",{className:"w-full block flex-grow lg:flex lg:items-center lg:w-auto\n\t\t\t\t\t".concat(this.state.isOpened?"navbar-open":"navbar-close")},n.a.createElement("div",{className:"text-sm lg:flex-grow"},n.a.createElement(r.b,{to:"/",className:"".concat(I),onClick:this.close},"Home"),n.a.createElement(r.b,{to:"/about",className:"".concat(I),onClick:this.close},"About"),n.a.createElement(r.b,{to:"/works",className:"".concat(I),onClick:this.close},"Works"),n.a.createElement(r.b,{to:"/research",className:"".concat(I),onClick:this.close},"Research"),n.a.createElement(r.b,{to:"/links",className:"".concat(I),onClick:this.close},"Links"),n.a.createElement(r.b,{to:"/contact",className:"".concat(I),onClick:this.close},"Contact")))))}}]),a}(n.a.Component),J=function(){return n.a.createElement("div",{className:"contact"},n.a.createElement("h1",{className:"text-4xl text-center py-8 bg-gray-200"},"Contact"),n.a.createElement("div",{className:"text-center my-3"},n.a.createElement("input",{type:"text",placeholder:"Your Name",className:"border-4 pr-24 pl-2 py-3 m-3"}),n.a.createElement("input",{type:"text",placeholder:"e-mail address",className:"border-4  pr-24 pl-2 py-3 m-3"}),n.a.createElement("textarea",{type:"text",placeholder:"Inquery Contents",className:"border-4 pr-24 pl-2 py-3 m-3 h-64"})),n.a.createElement("div",{className:"text-center"},n.a.createElement("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"},"Submit")))},T=function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"history py-2"},n.a.createElement("label",{className:"text-xl pl-5 my-3"},"Links / SNS"),n.a.createElement("div",null,n.a.createElement("label",{className:"block mx-8 text-ms"},"Home"),n.a.createElement(r.b,{className:"block mx-8 text-xs",to:"/"},"sho0126hiro.github.io"),n.a.createElement("label",{className:"block mx-8 text-ms"},"Github"),n.a.createElement("a",{href:"https://github.com/sho0126hiro",target:"_blank",className:"block mx-8 text-xs"},"sho0126hiro"),n.a.createElement("label",{className:"block mx-8 text-ms"},"Twitter"),n.a.createElement("a",{href:"https://twitter.com/sho0126hiro",target:"_blank",className:"block mx-8 text-xs"},"@sho0126hiro"),n.a.createElement("label",{className:"block mx-8 text-ms"},"Facebook"),n.a.createElement("a",{href:"https://www.facebook.com/sho.hirose.142",target:"_blank",className:"block mx-8 text-xs"},"sho.hirose.142"),n.a.createElement("label",{className:"block mx-8 text-ms"},"Hatena Blog"),n.a.createElement("a",{href:"https://sho0126hiro.hatenablog.com/",target:"_blank",className:"block mx-8 text-xs"},"Sho\u306e\u30b7\u30b9\u30c6\u30e0\u958b\u767a\u5fd8\u5099\u9332"))))},R=function(){return n.a.createElement("div",{className:"m-5"},n.a.createElement("h2",{className:"text-xl font-bold my-2"},"\u7814\u7a76\u30c6\u30fc\u30de"),n.a.createElement("p",{className:"text-sm m-2"},"\u6a5f\u68b0\u5b66\u7fd2\uff08\u5f37\u5316\u5b66\u7fd2\u3001\u6df1\u5c64\u5f37\u5316\u5b66\u7fd2\uff09\u3092\u6d3b\u7528\u3057\u305f\u5fdc\u7528\u7814\u7a76\uff08\u4ecb\u8b77\u4e88\u9632\u30b7\u30b9\u30c6\u30e0\uff09"),n.a.createElement("h2",{className:"text-xl my-2 font-bold"},"\u7814\u7a76\u696d\u7e3e"),n.a.createElement("div",null,n.a.createElement("h3",null,"\u56fd\u969b\u4f1a\u8b70\u767a\u8868"),n.a.createElement("ul",{className:"pl-4"},n.a.createElement("li",{className:"list-decimal text-xs m-2"},"Daisuke Kitakoshi, Sho Hirose, Akihiro Yamashita, Kentarou Suzuki, Masato Suzuki: Development of an Intelligent Dialogue Agent for Older Adults -Evaluation of Functions to Control Spontaneous Talk and Coordinate Speech Content-, Proc. 2019 Conference on Technologies and Applications of Artificial Intelligence (TAAI2019), Kaohsiung, Taiwan, 2019 (Accepted). [",n.a.createElement("a",{className:"font-bold underline",href:"https://ieeexplore.ieee.org/document/8959870"},"link"),"]")),n.a.createElement("h3",null,"\u56fd\u5185\u5b66\u4f1a\u767a\u8868"),n.a.createElement("ul",{className:"pl-4 list-decimal"},n.a.createElement("li",{className:"text-xs m-2"},"\u5ee3\u702c\u7fd4, \u5317\u8d8a\u5927\u8f14, \u9234\u6728\u5065\u592a\u90ce, \u5c71\u4e0b\u6643\u5f18, \u9234\u6728\u96c5\u4eba : \u77e5\u7684\u5bfe\u8a71\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u306b\u304a\u3051\u308b\u767a\u8a71\u5185\u5bb9\u8abf\u6574\u6a5f\u69cb\u306e\u7279\u6027\u8a55\u4fa1 \u2015\u5305\u62ec\u7684\u4ecb\u8b77\u4e88\u9632\u30b7\u30b9\u30c6\u30e0\u306e\u958b\u767a\u306b\u5411\u3051\u3066\u2015, 2020\u5e74\u96fb\u5b50\u60c5\u5831\u901a\u4fe1\u5b66\u4f1a\u7dcf\u5408\u5927\u4f1a, \u6771\u5e83\u5cf6, Mar. 2020."),n.a.createElement("li",{className:"text-xs m-2"},"\u9234\u6728\u5065\u592a\u90ce, \u5ee3\u702c\u7fd4, \u5742\u672c\u7d2b\u97f3, \u5317\u8d8a\u5927\u8f14, \u5c71\u4e0b\u6643\u5f18, \u9234\u6728\u96c5\u4eba : \u77e5\u7684\u5bfe\u8a71\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u3068\u8a8d\u77e5\u8a13\u7df4\u30b7\u30b9\u30c6\u30e0\u306b\u3088\u308b\u5305\u62ec\u7684\u306a\u9ad8\u9f62\u8005\u652f\u63f4\u60c5\u5831\u74b0\u5883\u306e\u69cb\u7bc9\u3078\u5411\u3051\u3066\u3000\u2015\u5370\u8c61\u8a55\u4fa1\u306e\u7d50\u679c\u306b\u95a2\u3059\u308b\u8003\u5bdf\u2015, 2020\u5e74\u96fb\u5b50\u60c5\u5831\u901a\u4fe1\u5b66\u4f1a\u7dcf\u5408\u5927\u4f1a, \u6771\u5e83\u5cf6, Mar. 2020."),n.a.createElement("li",{className:"text-xs m-2"},"\u5ee3\u702c\u7fd4, \u5317\u8d8a\u5927\u8f14, \u9234\u6728\u5065\u592a\u90ce, \u5c71\u4e0b\u6643\u5f18, \u9234\u6728\u96c5\u4eba : \u5305\u62ec\u7684\u4ecb\u8b77\u4e88\u9632\u30b7\u30b9\u30c6\u30e0\u306e\u57fa\u672c\u7684\u7279\u6027\u8a55\u4fa1\u306b\u95a2\u3059\u308b\u7814\u7a76 \u2015\u77e5\u7684\u5bfe\u8a71\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u3068\u8a8d\u77e5\u8a13\u7df4\u30b7\u30b9\u30c6\u30e0\u306e\u4f75\u7528\u52b9\u679c\u2015, \u7b2c47\u56de\u77e5\u80fd\u30b7\u30b9\u30c6\u30e0\u30b7\u30f3\u30dd\u30b8\u30a6\u30e0, \u540d\u53e4\u5c4b, Mar. 2020."))))},A=function(e){Object(v.a)(a,e);var t=Object(k.a)(a);function a(){return Object(N.a)(this,a),t.apply(this,arguments)}return Object(f.a)(a,[{key:"componentDidUpdate",value:function(e){this.props.location.pathname!==e.location.pathname&&window.scrollTo(0,0)}},{key:"render",value:function(){return null}}]),a}(n.a.Component),U=Object(o.h)(A),Y=function(){return n.a.createElement(r.a,{basename:""},n.a.createElement(o.d,null,n.a.createElement("div",null,n.a.createElement(U,null),n.a.createElement(M,null),n.a.createElement("div",{className:"pt-14"}),n.a.createElement(o.b,{exact:!0,path:"/",component:g}),n.a.createElement(o.b,{path:"/about",component:H}),n.a.createElement(o.b,{path:"/works",component:L}),n.a.createElement(o.b,{path:"/research",component:R}),n.a.createElement(o.b,{path:"/links",component:T}),n.a.createElement(o.b,{path:"/contact",component:J}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(Y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.f9c29192.chunk.js.map