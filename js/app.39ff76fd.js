(function(e){function t(t){for(var a,r,c=t[0],s=t[1],u=t[2],l=0,f=[];l<c.length;l++)r=c[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&f.push(o[r][0]),o[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);d&&d(t);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,r=1;r<n.length;r++){var c=n[r];0!==o[c]&&(a=!1)}a&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},r={app:0},o={app:0},i=[];function c(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-4ba2924b":"f46ca0bf","chunk-60291050":"7729f1c4","chunk-96198a80":"a447f34d","chunk-f9f620c6":"a0b5fc05"}[e]+".js"}function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-4ba2924b":1,"chunk-60291050":1,"chunk-96198a80":1,"chunk-f9f620c6":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-4ba2924b":"4aa014b5","chunk-60291050":"b45bebdf","chunk-96198a80":"4aa014b5","chunk-f9f620c6":"367e08e8"}[e]+".css",o=s.p+a,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===o))return t()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){u=f[c],l=u.getAttribute("data-href");if(l===a||l===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var a=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete r[e],d.parentNode.removeChild(d),n(i)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){r[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(e);var f=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",f.name="ChunkLoadError",f.type=a,f.request=r,n[1](f)}o[e]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/tb-vue1/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},4487:function(e,t,n){e.exports=n.p+"img/tom-brooks-logo-wide.616f476c.jpg"},"52ab":function(e,t,n){"use strict";n("ec2f")},"5c0b":function(e,t,n){"use strict";n("9c0c")},6268:function(e,t,n){"use strict";n("9fe4")},7961:function(e,t,n){e.exports=n.p+"img/map2.034a08cc.png"},"8c7e":function(e,t,n){"use strict";n("ec42")},"9c0c":function(e,t,n){},"9fe4":function(e,t,n){},a711:function(e,t,n){e.exports=n.p+"img/Drill.0b12ad20.jpg"},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header"),n("ResponsiveNavigation",{attrs:{background:"#fff","link-color":"#777",hoverBackground:"#ddd"}}),n("div",{staticClass:"outlet"},[e._m(0),n("router-view")],1)],1)},o=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"header-image"},[a("img",{attrs:{alt:"Tom Brooks Engineering",height:"120",width:"240",src:n("4487")}})])}],i=n("d4ec"),c=n("262e"),s=n("2caf"),u=n("9ab4"),l=n("60a3"),f=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},d=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"contactBar"},[a("div",{staticClass:"phone"},[a("i",{staticClass:"fa fa-phone",attrs:{"aria-hidden":"true"}}),a("a",{staticClass:"contactIcon",attrs:{href:"tel:+353879554650"}},[e._v("087 955 4650")])]),a("div",{staticClass:"mail"},[a("i",{staticClass:"fa fa-envelope",attrs:{"aria-hidden":"true"}}),a("a",{staticClass:"contactIcon",attrs:{href:"mailto:tombrooksengineering@gmail.com"}},[e._v("tombrooksengineering@gmail.com")])]),a("button",{staticClass:"mapButton",attrs:{onclick:"window.location.href = 'https://maps.app.goo.gl/\n  YeKn7usWHGaX4GuF6';"}},[a("img",{staticClass:"mapImage",attrs:{height:"20px",width:"20px",src:n("7961")}})])])}],p=function(e){Object(c["a"])(n,e);var t=Object(s["a"])(n);function n(){return Object(i["a"])(this,n),t.apply(this,arguments)}return n}(l["b"]);p=Object(u["a"])([l["a"]],p);var h=p,v=h,g=(n("8c7e"),n("2877")),b=Object(g["a"])(v,f,d,!1,null,"8227013e",null),m=b.exports,k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{style:{background:e.background||"#333"}},[n("ul",{ref:"nav",style:{background:e.background||"#333"}},[n("button",{staticClass:"fa fa-bars image-logo",attrs:{"aria-label":"Open Menu"},on:{click:e.toggleNav}}),e._l(e.navLinks,(function(t,a){return n("li",{key:a,on:{mouseenter:function(t){t.currentTarget.style.background=e.hoverBackground||"#999"},mouseleave:function(t){t.currentTarget.style.background=e.background||"#333"}}},[n("router-link",{style:{color:e.linkColor||"#DDD"},attrs:{to:t.path}},[e._v(" "+e._s(t.text)+" "),n("i",{class:t.icon})])],1)})),n("p",[e._v("Previous Work")]),e._l(e.workLinks,(function(t,a){return n("li",{key:a+100,on:{mouseenter:function(t){t.currentTarget.style.background=e.hoverBackground||"#999"},mouseleave:function(t){t.currentTarget.style.background=e.background||"#333"}}},[n("router-link",{style:{color:e.linkColor||"#DDD"},attrs:{to:t.path}},[e._v(" "+e._s(t.text)+" "),n("i",{class:t.icon})])],1)}))],2)])},y=[],C={props:["background","linkColor","hoverBackground","imagePath"],methods:{toggleNav:function(){var e=this.$refs.nav.classList;e.contains("active")?e.remove("active"):e.add("active")}},data:function(){return{navLinks:[{text:"What we do",path:"/",icon:"ion-ios-home"},{text:"Services",path:"/services",icon:"ion-ios-albums"},{text:"Contact",path:"/contact",icon:"ion-ios-call"}],workLinks:[{text:"Trailer Repair",path:"/trailers",icon:"ion-ios-bus"},{text:"Railings and Gates",path:"/gates",icon:"ion-ios-business"}]}}},_=C,w=(n("52ab"),Object(g["a"])(_,k,y,!1,null,"9e4fdd34",null)),O=w.exports,j=function(e){Object(c["a"])(n,e);var t=Object(s["a"])(n);function n(){return Object(i["a"])(this,n),t.apply(this,arguments)}return n}(l["b"]);j=Object(u["a"])([Object(l["a"])({components:{Header:m,ResponsiveNavigation:O}})],j);var x=j,E=x,T=(n("5c0b"),Object(g["a"])(E,r,o,!1,null,null,null)),P=T.exports,S=(n("d3b7"),n("8c4f")),B=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},D=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("div",{staticClass:"imageContainer"},[a("img",{staticClass:"rounded",attrs:{src:n("a711"),width:"100%"}})]),a("div",{staticClass:"indentedContent"},[a("h1",{staticClass:"h1"},[e._v("What we do")]),a("p",[e._v(" We are a leading Specialist Engineering Metal Fabrication company located outside Ennis in Co. Clare. "),a("a",{staticClass:"googleMapsAnchor",attrs:{href:"https://maps.app.goo.gl/YeKn7usWHGaX4GuF6"}},[e._v(" Click to View on Google Maps")]),a("br"),e._v(" We specialise in safety hand railings, decorative gates and truck/van/ car body repairs. We also provide a general wedding service."),a("br")]),a("p",[e._v(' Take a look at "Our Work" page to see a small sample of our prior work. Tom is a fully CAD certified ')]),a("div",{staticClass:"divider"})]),a("div",{staticClass:"indentedContent"},[a("h1",{staticClass:"h1"},[e._v("How can we help you?")]),a("p",[e._v(" We work closely with new and existing customers to deliver workable solutions to produce great results. Contact us today for a free quotation. ")]),a("div",{staticClass:"divider"}),a("p")])])}],L=function(e){Object(c["a"])(n,e);var t=Object(s["a"])(n);function n(){return Object(i["a"])(this,n),t.apply(this,arguments)}return n}(l["b"]);L=Object(u["a"])([Object(l["a"])({components:{}})],L);var W=L,N=W,$=(n("6268"),Object(g["a"])(N,B,D,!1,null,"7a251313",null)),A=$.exports;a["a"].use(S["a"]);var M=[{path:"/",name:"Home",component:A},{path:"/services",name:"Services",component:function(){return n.e("chunk-f9f620c6").then(n.bind(null,"f23e"))}},{path:"/contact",name:"Contact",component:function(){return n.e("chunk-60291050").then(n.bind(null,"b8fa"))}},{path:"/trailers",name:"Trailers",component:function(){return n.e("chunk-96198a80").then(n.bind(null,"208f"))}},{path:"/gates",name:"Gates",component:function(){return n.e("chunk-4ba2924b").then(n.bind(null,"8b81"))}}],G=new S["a"]({mode:"history",base:"/tb-vue1/",routes:M}),H=G,F=n("9917");a["a"].config.productionTip=!1,a["a"].component("lightbox",F["a"]),new a["a"]({router:H,render:function(e){return e(P)}}).$mount("#app")},ec2f:function(e,t,n){},ec42:function(e,t,n){}});
//# sourceMappingURL=app.39ff76fd.js.map