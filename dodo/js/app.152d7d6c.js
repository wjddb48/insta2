(function(e){function t(t){for(var a,r,o=t[0],l=t[1],c=t[2],u=0,m=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&m.push(i[r][0]),i[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);p&&p(t);while(m.length)m.shift()();return n.push.apply(n,c||[]),s()}function s(){for(var e,t=0;t<n.length;t++){for(var s=n[t],a=!0,o=1;o<s.length;o++){var l=s[o];0!==i[l]&&(a=!1)}a&&(n.splice(t--,1),e=r(r.s=s[0]))}return e}var a={},i={app:0},n=[];function r(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=e,r.c=a,r.d=function(e,t,s){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(s,a,function(t){return e[t]}.bind(null,a));return s},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/portfolio/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var p=l;n.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"13c7":function(e,t,s){},"14d4":function(e,t,s){e.exports=s.p+"img/vue_gram_logo_cp.6eb5553c.png"},2886:function(e,t,s){},"2eb7":function(e,t,s){"use strict";var a=s("13c7"),i=s.n(a);i.a},"32a8":function(e,t,s){"use strict";var a=s("2886"),i=s.n(a);i.a},"34d0":function(e,t,s){},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"app-phone"},[a("div",{staticClass:"phone-Header"},[a("img",{attrs:{src:s("14d4"),alt:"logo"}}),2===e.step||3===e.step?a("a",{staticClass:"cancel-cta",on:{click:e.goToHome}},[e._v("Cancel")]):e._e(),2===e.step?a("a",{staticClass:"next-cta",on:{click:function(t){e.step++}}},[e._v("Next")]):e._e(),3===e.step?a("a",{staticClass:"next-cta",on:{click:e.sharePost}},[e._v("share")]):e._e()]),a("phone-body",{attrs:{step:e.step,posts:e.posts,filters:e.filters,image:e.image,selectedFilter:e.selectedFilter},model:{value:e.caption,callback:function(t){e.caption=t},expression:"caption"}}),a("div",{staticClass:"phone-Footer"},[a("div",{staticClass:"home-cta",on:{click:e.goToHome}},[a("i",{staticClass:"fas fa-home"})]),a("div",{staticClass:"update_cta"},[a("input",{staticClass:"inputfile",attrs:{type:"file",name:"file",id:"file",disabled:1!==e.step},on:{change:e.uploadImage}}),e._m(0)])])],1)])},n=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("label",{attrs:{for:"file",id:"file"}},[s("i",{staticClass:"fas fa-plus-square"})])}],r=(s("4de4"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"phone-body"},[1===e.step?s("div",{directives:[{name:"dragscroll",rawName:"v-dragscroll.y",modifiers:{y:!0}}],staticClass:"feed"},e._l(e.posts,(function(e,t){return s("vuegram-post",{key:t,attrs:{post:e}})})),1):e._e(),2===e.step?s("div",[s("div",{staticClass:"selected-image",class:e.selectedFilter,style:{backgroundImage:"url("+e.image+")"}}),s("div",{directives:[{name:"dragscroll",rawName:"v-dragscroll.x",modifiers:{x:!0}}],staticClass:"filter-container"},e._l(e.filters,(function(t,a){return s("filter-type",{key:a,attrs:{filter:t,image:e.image}})})),1)]):e._e(),3===e.step?s("div",[s("div",{staticClass:"selected-image",class:e.selectedFilter,style:{backgroundImage:"url("+e.image+")"}}),s("div",{staticClass:"caption-container"},[s("textarea",{staticClass:"caption-input",attrs:{placeholder:"white a caption",type:"text"},domProps:{value:e.value},on:{input:function(t){return e.$emit("input",t.target.value)}}})])]):e._e()])}),o=[],l=(s("a9e3"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"vuegram-post"},[s("div",{staticClass:"header level"},[s("div",{staticClass:"level-left"},[s("figure",{staticClass:"image is-32x32"},[s("img",{attrs:{src:e.post.userImage}})]),s("span",{staticClass:"username"},[e._v(e._s(e.post.username))])])]),s("div",{staticClass:"image-container",class:e.post.filter,style:{backgroundImage:"url("+e.post.postImage+")"},on:{dblclick:e.like}}),s("div",{staticClass:"content"},[s("div",{staticClass:"heart"},[s("i",{staticClass:"fas fa-heart",class:{fas:this.post.hasBeenLiked},on:{click:e.like}})]),s("p",{staticClass:"likes"},[e._v(" "+e._s(e.post.likes)+" ")]),s("p",{staticClass:"caption"},[s("span",[e._v(e._s(e.post.username))]),e._v(" "+e._s(e.post.caption)+" ")])])])}),c=[],p={name:"VuegramPost",props:{post:Object},methods:{like:function(){this.post.hasBeenLiked?this.post.likes--:this.post.likes++,this.post.hasBeenLiked=!this.post.hasBeenLiked}}},u=p,m=(s("a2a1"),s("2877")),d=Object(m["a"])(u,l,c,!1,null,null,null),f=d.exports,g=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"filter-type"},[s("p",[e._v(e._s(e.filter.name))]),s("div",{staticClass:"img",class:e.filter.name,style:{backgroundImage:"url("+e.image+")"},on:{click:e.selectFilter}})])},h=[],v=(s("b0c0"),new a["a"]),_=v,b={name:"filterType",props:{filter:Object,image:String},methods:{selectFilter:function(){_.$emit("filter-selected",{filter:this.filter.name})}}},y=b,k=(s("bf76"),Object(m["a"])(y,g,h,!1,null,null,null)),w=k.exports,C={name:"PhoneBody",props:{step:Number,posts:Array,selectedFilter:String,image:String,filters:Array,value:String},components:{"vuegram-post":f,"filter-type":w}},j=C,x=(s("2eb7"),Object(m["a"])(j,r,o,!1,null,null,null)),O=x.exports,I=[{username:"me3",userImage:"http://wjddb48.dothome.co.kr/img/p2.jpg",postImage:"http://wjddb48.dothome.co.kr/img/p3.jpg",likes:20,hasBeenLiked:!1,caption:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",filter:"perpetua"},{username:"me2",userImage:"http://wjddb48.dothome.co.kr/img/p2.jpg",postImage:"http://wjddb48.dothome.co.kr/img/p4.jpg",likes:49,hasBeenLiked:!1,caption:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",filter:"clarendon"},{username:"puppers",userImage:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/pug_personal.jpg",postImage:"http://wjddb48.dothome.co.kr/img/pe.jpg",likes:36,hasBeenLiked:!1,caption:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",filter:"lofi"}],F=[{name:"normal"},{name:"gingham"},{name:"clarendon"},{name:"noon"},{name:"lark"},{name:"reys"},{name:"juno"},{name:"slumber"},{name:"aden"},{name:"perpetua"},{name:"mayfair"},{name:"rise"},{name:"husdson"},{name:"valencia"},{name:"xpro2"},{name:"willow"},{name:"lofi"},{name:"inkwell"},{name:"nastawille"}],P={name:"App",data:function(){return{step:1,posts:I,filters:F,image:"",selectedFilter:"",caption:""}},created:function(){var e=this;_.$on("filter-selected",(function(t){e.selectedFilter=t.filter}))},methods:{goToHome:function(){this.image="",this.selectedFilter="",this.caption="",this.step=1},sharePost:function(){var e={username:"정유정",userImage:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/me_3.jpg",postImage:this.image,likes:0,caption:this.caption,filter:this.selectedFilter};this.posts.unshift(e),this.goToHome()},uploadImage:function(e){var t=this,s=e.target.files;if(s.length){var a=new FileReader;a.readAsDataURL(s[0]),a.onload=function(e){t.image=e.target.result,t.step=2},document.querySelector("#file").value=""}}},components:{"phone-body":O}},L=P,S=(s("32a8"),Object(m["a"])(L,i,n,!1,null,null,null)),$=S.exports,B=s("617c"),T=s.n(B);a["a"].use(T.a),a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e($)}}).$mount("#app")},5923:function(e,t,s){},a2a1:function(e,t,s){"use strict";var a=s("5923"),i=s.n(a);i.a},bf76:function(e,t,s){"use strict";var a=s("34d0"),i=s.n(a);i.a}});
//# sourceMappingURL=app.152d7d6c.js.map