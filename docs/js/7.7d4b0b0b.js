(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{"713b":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-layout",{attrs:{view:"lHh Lpr lFf"}},[a("q-header",{attrs:{elevated:""}},[a("q-toolbar",[a("q-btn",{attrs:{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu"},on:{click:function(t){e.leftDrawerOpen=!e.leftDrawerOpen}}}),a("q-toolbar-title",[e._v("\n        Almighty RPG Manager\n      ")]),a("div",[a("img",{staticStyle:{height:"2.5vw","max-width":"4vw"},attrs:{src:n("f0fc")}})])],1)],1),a("q-drawer",{attrs:{"show-if-above":"",bordered:"","content-class":"bg-secondary"},model:{value:e.leftDrawerOpen,callback:function(t){e.leftDrawerOpen=t},expression:"leftDrawerOpen"}},[a("q-list",[a("q-item-label",{staticClass:"text-primary",attrs:{header:""}},[e._v("\n        Menu\n      ")]),e._l(e.menu,(function(t){return a("Menu",e._b({key:t.title},"Menu",t,!1))}))],2)],1),a("q-page-container",[a("router-view")],1)],1)},i=[],r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-item",{staticClass:"text-primary",attrs:{clickable:e.isClickable(e.link)},on:{click:function(t){return e.goTo(e.link)}}},[e.icon?n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:e.icon}})],1):e._e(),n("q-item-section",[n("q-item-label",[e._v(e._s(e.title))]),n("q-item-label",{attrs:{caption:""}},[e._v("\n      "+e._s(e.caption)+"\n    ")])],1)],1)},o=[],l={name:"Menu",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}},methods:{goTo:function(e){this.$router.push(e)},isClickable:function(e){return this.$route.path!==e}}},c=l,s=n("2877"),u=n("66e5"),p=n("4074"),m=n("0016"),f=n("0170"),g=n("eebe"),b=n.n(g),d=Object(s["a"])(c,r,o,!1,null,null,null),h=d.exports;b()(d,"components",{QItem:u["a"],QItemSection:p["a"],QIcon:m["a"],QItemLabel:f["a"]});var w={name:"MainLayout",components:{Menu:h},data:function(){return{leftDrawerOpen:!1,menu:[{title:"Home",caption:"The main dashboard",icon:"home",link:"/"},{title:"Shopping",caption:"View equipment & services",icon:"game-icon:price-tag",link:"/shopping"},{title:"Character",caption:"Character information like races and languages",icon:"accessibility",link:"/character"},{title:"Generators",caption:"Generate things like names",icon:"game-icon:magic-swirl",link:"/name-generator"},{title:"World",caption:"Information about the setting of Terrea",icon:"game-icon:world",link:"/world"},{title:"Rules Reference",caption:"View rules",icon:"game-icon:secret-book",link:"/reference"},{title:"Settings",caption:"Change various settings in the app",icon:"settings",link:"/settings"}]}}},k=w,v=n("4d5a"),q=n("e359"),y=n("65c6"),Q=n("9c40"),_=n("6ac5"),C=n("9404"),M=n("1c1c"),O=n("09e3"),S=Object(s["a"])(k,a,i,!1,null,null,null);t["default"]=S.exports;b()(S,"components",{QLayout:v["a"],QHeader:q["a"],QToolbar:y["a"],QBtn:Q["a"],QToolbarTitle:_["a"],QDrawer:C["a"],QList:M["a"],QItemLabel:f["a"],QPageContainer:O["a"]})},f0fc:function(e,t,n){e.exports=n.p+"img/icon.1329b3ad.png"}}]);