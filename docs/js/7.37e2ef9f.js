(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{"0ba8":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"q-pa-md"},[e.monster?a("div",[a("div",{staticClass:"row q-col-gutter-sm"},[a("div",{staticClass:"col col-xs-12 col-sm-9"},[a("div",{staticClass:"text-h4 text-primary"},[e._v(e._s(e.monster.name))]),a("p",[a("em",[e._v(e._s(e.monster.description))])]),a("q-markdown",{attrs:{src:e.monster.markdown,"no-heading-anchor-links":""}})],1),a("div",{staticClass:"col col-xs-12 col-sm-3"},[a("q-card",[a("q-card-section",[a("monster-image",{attrs:{type:e.monster.id}}),a("q-markup-table",{attrs:{flat:"",dense:"","wrap-cells":""}},[a("thead",[a("th"),a("th")]),a("tbody",[a("tr",[a("td",{staticClass:"vertical-top"},[a("strong",{staticClass:"text-primary"},[e._v("Sentient?: ")])]),a("td",[e._v(e._s(e.monster.sentient?"Yes":"No"))])])])]),a("div",{staticClass:"q-mt-sm"},[a("p",[a("strong",[e._v("Female Names:")])]),a("p",e._l(e.namesFemale,(function(t,s){return a("span",{key:"female-"+s},[e._v("\n                                  "+e._s(e._f("capitalize")(t))),s<e.namesFemale.length-1?a("span",[e._v(", ")]):e._e()])})),0),a("p",[a("strong",[e._v("Male Names:")])]),a("p",e._l(e.namesMale,(function(t,s){return a("span",{key:"male-"+s},[e._v("\n                                  "+e._s(e._f("capitalize")(t))),s<e.namesFemale.length-1?a("span",[e._v(", ")]):e._e()])})),0),a("q-btn",{staticClass:"text-center",attrs:{align:"around",dense:"",color:"primary",label:"Generate Names",icon:"cached","aria-label":"Generate"},on:{click:e.generate}})],1)],1)],1)],1)])]):a("div",[a("q-banner",{staticClass:"text-white bg-red",attrs:{"inline-actions":""}},[e._v("Monster could not be found")])],1)])},n=[],r=(a("fb6a"),a("4e82"),a("a9f8")),i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",["dragons"===e.type?s("q-img",{staticClass:"fit",attrs:{src:a("d40d"),basic:""}}):"vampires"===e.type?s("q-img",{staticClass:"fit",attrs:{src:a("8c69"),basic:""}}):s("q-img",{staticClass:"fit",attrs:{src:a("63cf")}}),e.src[e.type]?s("p",{staticClass:"text-center q-mb-none"},[s("small",[s("a",{attrs:{href:e.src[e.type]}},[e._v("Source Image")])])]):e._e()],1)},m=[],o={name:"MonsterImage",props:["type"],data:function(){return{src:{dragons:"https://www.deviantart.com/vampireprincess007/art/Storm-lords-161032162",vampires:"https://www.deviantart.com/infesth6/art/Blood-Seekers-855888966"}}}},l=o,c=a("2877"),d=a("068f"),p=a("eebe"),u=a.n(p),h=Object(c["a"])(l,i,m,!1,null,null,null),f=h.exports;u()(h,"components",{QImg:d["a"]});var v={name:"monsters",components:{MonsterImage:f},data:function(){return{monster:null,namesFemale:[],namesMale:[]}},methods:{update(e){this.monster=this.$monsters.monsters.find((t=>t.id===e)),this.monster&&this.generate()},generate(){this.$markov.addNameArray(this.monster.names.female,r["a"][this.monster.names.female]),this.$markov.addNameArray(this.monster.names.male,r["a"][this.monster.names.male]),this.namesFemale=this.$markov.generateList(this.monster.names.female,10),this.namesMale=this.$markov.generateList(this.monster.names.male,10),this.namesFemale.sort(),this.namesMale.sort()}},filters:{capitalize:function(e){return e?(e=e.toString(),e.charAt(0).toUpperCase()+e.slice(1)):""}},beforeRouteUpdate(e,t,a){this.update(e.params.id),a()},mounted(){this.update(this.$router.currentRoute.params.id)}},g=v,_=a("f09f"),b=a("a370"),w=a("2bb1"),C=a("9c40"),k=a("54e1"),y=Object(c["a"])(g,s,n,!1,null,null,null);t["default"]=y.exports;u()(y,"components",{QCard:_["a"],QCardSection:b["a"],QMarkupTable:w["a"],QBtn:C["a"],QBanner:k["a"]})},"8c69":function(e,t,a){e.exports=a.p+"img/vampires.8bb0add1.jpg"},d40d:function(e,t,a){e.exports=a.p+"img/dragons.bf44e13e.jpg"}}]);