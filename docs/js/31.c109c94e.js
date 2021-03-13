(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[31],{"24fb":function(t,a,i){"use strict";i.r(a);var n=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"q-pa-md"},[t.nation?i("div",[i("div",{staticClass:"row q-col-gutter-sm"},[i("div",{staticClass:"col col-xs-12 col-sm-9"},[i("div",{staticClass:"text-h4 text-primary"},[t._v(t._s(t.nation.name))]),i("p",[i("em",[t._v(t._s(t.nation.description))])]),i("q-markdown",{attrs:{src:t.nation.markdown,"no-heading-anchor-links":""}}),i("q-separator"),t._m(0),i("ul",[i("li",[t._v("There are "+t._s(t.filterCities(t.nation.id).length)+" cities.")]),i("li",[t._v("There are "+t._s(t.nation.towns)+" towns.")]),i("li",[t._v("There are "+t._s(t.nation.ruins)+" ruins.")])]),i("q-list",{staticClass:"rounded-borders",attrs:{bordered:""}},t._l(t.filterCities(t.nation.id),(function(a,n){return i("q-expansion-item",{key:"cities-"+n,attrs:{"expand-separator":"",label:a.name,caption:"Population: "+t.numberWithCommas(a.population)}},[i("q-card",[i("q-card-section",t._l(a.fluff,(function(a,n){return i("div",{key:"fluff-"+n},[i("p",{staticClass:"text-primary"},[i("strong",[t._v(t._s(a.title))])]),i("p",[t._v(t._s(a.description))])])})),0)],1)],1)})),1)],1),i("div",{staticClass:"col col-xs-12 col-sm-3"},[i("q-card",[i("q-card-section",[i("flag-image",{attrs:{type:t.nation.id}}),i("q-markup-table",{attrs:{flat:"",dense:"","wrap-cells":""}},[i("thead",[i("th"),i("th")]),i("tbody",[i("tr",[i("td",{staticClass:"vertical-top"},[i("strong",{staticClass:"text-primary"},[t._v("Government: ")])]),i("td",[t._v(t._s(t.nation.type))])]),i("tr",[i("td",{staticClass:"vertical-top"},[i("strong",{staticClass:"text-primary"},[t._v("Ruler Title: ")])]),i("td",[t._v(t._s(t.nation.title))])]),i("tr",[i("td",{staticClass:"vertical-top"},[i("strong",{staticClass:"text-primary"},[t._v("Capital: ")])]),i("td",[t._v(t._s(t.findCity(t.nation.capital).name))])]),i("tr",[i("td",{staticClass:"vertical-top"},[i("strong",{staticClass:"text-primary"},[t._v("Area: ")])]),i("td",[t._v("\n                                      "+t._s(t.numberWithCommas(t.nation.area))+" km²\n                                      "),i("div",[t._v(t._s(t.nation.usage.arable)+"% arable")]),i("div",[t._v(t._s(t.nation.usage.wilderness)+"% wild")])])]),i("tr",[i("td",{staticClass:"vertical-top"},[i("strong",{staticClass:"text-primary"},[t._v("Population: ")])]),i("td",[t._v(t._s(t.numberWithCommas(t.nation.population)))])]),t._l(t.nation.distribution,(function(a,n){return[a>0?i("tr",{key:t.nation.id+"-"+n},[i("td",{staticClass:"vertical-top"},[i("em",{staticClass:"text-primary"},[t._v(t._s(t.findRace(n).name)+": ")])]),i("td",[t._v(t._s(a)+"% ("+t._s(t.numberWithCommas(Math.round(t.nation.population*(a/100))))+")")])]):t._e()]})),i("tr",[i("td",{staticClass:"vertical-top"},[i("em",{staticClass:"text-primary"},[t._v("Others:")])]),i("td",[t._v(t._s(t.getOtherPop(t.nation.population,t.nation.distribution).percent)+"% ( "+t._s(t.numberWithCommas(t.getOtherPop(t.nation.population,t.nation.distribution).value))+" )")])])],2)])],1)],1)],1)])]):i("div",[i("q-banner",{staticClass:"text-white bg-red",attrs:{"inline-actions":""}},[t._v("Nation could not be found")])],1)])},e=[function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"text-h6 q-mb-md text-primary"},[i("u",[t._v("Urban Areas")])])}],s=(i("e6cf"),i("ddb0"),i("5319"),{name:"Nations",components:{FlagImage:()=>Promise.all([i.e(0),i.e(1),i.e(4)]).then(i.bind(null,"8610"))},data:function(){return{nation:null}},methods:{update(t){this.nation=this.$nations.nations.find((a=>a.id===t))},findCity(t){return this.$nations.cities.find((a=>a.id===t))},filterCities(t){return this.$nations.cities.filter((a=>a.owner===t))},findRace(t){return this.$races.races.find((a=>a.id===t))},getOtherPop(t,a){let i=0,n=0;for(var e in a)i+=Math.round(a[e]/100*t);return n=t-i,{percent:n/t*100,value:n}},numberWithCommas(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}},filters:{capitalize:function(t){return t?(t=t.toString(),t.charAt(0).toUpperCase()+t.slice(1)):""}},beforeRouteUpdate(t,a,i){this.update(t.params.id),i()},mounted(){this.update(this.$router.currentRoute.params.id)}}),r=s,o=i("2877"),l=i("eb85"),c=i("1c1c"),d=i("3b73"),p=i("f09f"),u=i("a370"),m=i("2bb1"),_=i("54e1"),v=i("eebe"),f=i.n(v),h=Object(o["a"])(r,n,e,!1,null,null,null);a["default"]=h.exports;f()(h,"components",{QSeparator:l["a"],QList:c["a"],QExpansionItem:d["a"],QCard:p["a"],QCardSection:u["a"],QMarkupTable:m["a"],QBanner:_["a"]})}}]);