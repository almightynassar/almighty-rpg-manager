(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[19],{"7d43":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"q-pa-md"},[a("q-tabs",{staticClass:"text-grey",attrs:{dense:"","active-color":"primary","indicator-color":"primary",align:"justify","narrow-indicator":""},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},e._l(e.tabs,(function(e){return a("q-tab",{key:e.id,staticStyle:{"justify-content":"initial"},attrs:{name:e.id,label:e.name,icon:e.icon}})})),1),a("q-separator"),a("q-tab-panels",{attrs:{animated:""},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[a("q-tab-panel",{key:"names",attrs:{name:"names"}},[a("name-generator")],1)],1)],1)},n=[],r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"q-pa-md"},[a("div",{staticClass:"q-gutter-sm row"},[a("q-select",{staticClass:"col-md-9 col-sm-5",attrs:{filled:"","use-input":"","input-debounce":"0",options:e.options,"option-label":"label",label:"Culture","map-options":"","emit-value":"","options-dense":""},on:{filter:e.searchFilter},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),a("q-btn",{staticClass:"col-md-2 col-sm-5",attrs:{color:"primary",label:"Generate",icon:"cached","aria-label":"Generate"},on:{click:e.generate}})],1),a("div",{staticClass:"q-pa-md row items-start"},[a("div",{staticClass:"col-md-6 col-sm-12 col-xs-12"},[a("h6",{staticClass:"text-primary"},[e._v("Generated "+e._s(e.convertName(e.selected))+" Names")]),e._l(e.names,(function(t,s){return a("p",{key:s},[e._v(e._s(e._f("capitalize")(t)))])}))],2),a("div",{staticClass:"col-md-6 col-sm-12 col-xs-12"},[a("h6",{staticClass:"text-primary"},[e._v("Real Names")]),e._l(e.realNames,(function(t,s){return a("p",{key:s},[e._v(e._s(e._f("capitalize")(t)))])}))],2)]),e._m(0)])},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"q-gutter-sm"},[a("p",[a("small",[a("em",[e._v("DISCLAIMER: Generated names are all gibberish, and are not actual names from the culture. This system only makes names that "),a("strong",[e._v("sound")]),e._v(" like they come from that culture.")])])])])}],l=(a("c975"),a("fb6a"),a("4e82"),a("5319"),a("a9f8")),o={name:"NameGenerator",data:function(){return{selected:"germanicFemale",names:[],options:[],realNames:[]}},methods:{convertName(e){return e=e.replace(/[A-Z]/g,(e=>` ${e.toLowerCase()}`)),e.charAt(0).toUpperCase()+e.slice(1)},makeSetName(e,t){return this.convertName(e)+" ("+t.length+" names)"},generate(){this.names=this.$markov.generateList(this.selected,10),this.realNames=this.$markov.getRandomList(this.selected,10),this.names.sort(),this.realNames.sort()},searchFilter(e,t){t(""!==e?()=>{const t=e.toLowerCase();this.options=this.setOptions.filter((e=>e.label.toLowerCase().indexOf(t)>-1))}:()=>{this.options=this.setOptions})}},computed:{setOptions(){var e=[];for(var t in l["a"]){var a=this.makeSetName(t,l["a"][t]);e.push({value:t,label:a})}return e}},watch:{selected(e,t){this.$markov.addNameArray(e,l["a"][e]),this.generate()}},filters:{capitalize:function(e){return e?(e=e.toString(),e.charAt(0).toUpperCase()+e.slice(1)):""}},mounted(){this.$markov.addNameArray("germanicFemale",l["a"].germanicFemale),this.generate(),this.options=this.setOptions}},c=o,m=a("2877"),d=a("ddd8"),u=a("9c40"),p=a("eebe"),b=a.n(p),h=Object(m["a"])(c,r,i,!1,null,null,null),v=h.exports;b()(h,"components",{QSelect:d["a"],QBtn:u["a"]});var f={name:"Generators",components:{NameGenerator:v},data:function(){return{splitterModel:20,tab:"names",tabs:[{id:"names",name:"Names",icon:"game-icon:family-tree"}]}}},_=f,g=a("429b"),y=a("7460"),C=a("eb85"),k=a("adad"),N=a("823b"),w=Object(m["a"])(_,s,n,!1,null,null,null);t["default"]=w.exports;b()(w,"components",{QTabs:g["a"],QTab:y["a"],QSeparator:C["a"],QTabPanels:k["a"],QTabPanel:N["a"]})}}]);