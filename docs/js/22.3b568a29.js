(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[22],{"131b":function(e,a,n){"use strict";n.r(a);var t=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"q-pa-md"},[n("q-input",{attrs:{type:"number",label:"Example Text font size (px)"},model:{value:e.size,callback:function(a){e.size=a},expression:"size"}}),n("q-input",{attrs:{label:"Example Text"},model:{value:e.example,callback:function(a){e.example=a},expression:"example"}}),n("q-table",{attrs:{title:"Languages",data:e.languages,columns:e.columns,pagination:e.pagination,filter:e.filter,"row-key":"id",flat:""},on:{"update:pagination":function(a){e.pagination=a}},scopedSlots:e._u([{key:"top-right",fn:function(){return[n("q-input",{attrs:{dense:"",debounce:"300",placeholder:"Search"},scopedSlots:e._u([{key:"append",fn:function(){return[n("q-icon",{attrs:{name:"search"}})]},proxy:!0}]),model:{value:e.filter,callback:function(a){e.filter=a},expression:"filter"}})]},proxy:!0},{key:"header",fn:function(a){return[n("q-tr",{attrs:{props:a}},[e._l(a.cols,(function(t){return n("q-th",{key:t.name,attrs:{props:a}},[e._v("\n          "+e._s(t.label)+"\n        ")])})),n("q-th",{attrs:{"auto-width":""}})],2)]}},{key:"body",fn:function(a){return[n("q-tr",{attrs:{props:a}},e._l(a.cols,(function(t){return n("q-td",{key:t.name,attrs:{props:a}},["example"===t.name?n("span",{class:t.value,style:"font-size: "+e.size+"px"},[e._v(e._s(e.example))]):n("span",[e._v(e._s(t.value))])])})),1)]}}])})],1)},i=[],r=(n("e01a"),[{id:"aquan",name:"Aquan",rarity:"Common",script:"qijomi",description:"A language designed for folk that spend most of their time immersed in water. This is the default language of Mermen, Locanth, Teztecs and other rare water-based species"},{id:"auran",name:"Auran",rarity:"Common",script:"gargish",description:"A language designed for folk that spend most of their time in the air. This is the default language of Avians and other rare air-based species"},{id:"common",name:"Common",rarity:"Common",script:"middleearth",description:"The language of humans, and it is also the default trade language"},{id:"draconic",name:"Draconic",rarity:"Common",script:"iokharic",description:"The language of Dragons, and adopted by the Lacerti and Lacinum"},{id:"dwarvish",name:"Dwarvish",rarity:"Common",script:"elderfuthark",description:"The language of dwarves, designed to be easily engraved into metal"},{id:"gauldish",name:"Gauldish",rarity:"Rare",script:"davek",description:"An ancient language spoken by the ancient Gauld and Primordials. It is largely forgotten, kept alive only through texts and dedicated academic orders"},{id:"goblin",name:"Goblin",rarity:"Common",script:"barazhad",description:"The language of goblins, designed to be carved into objects"},{id:"ignan",name:"Ignan",rarity:"Uncommon",script:"rellanic",description:"A language designed for folk that live with or among fire. Largely kept alive by some intelligent monsters, academics, and Shadowrealm cultists"},{id:"orcish",name:"Orcish",rarity:"Common",script:"klingon",description:"The language of orcs, designed to invoke feelings of awe and fear"},{id:"snvertish",name:"Snvertish",rarity:"Common",script:"hylianTP",description:"The language of snvert, designed to be engraved into their machines"},{id:"terran",name:"Terran",rarity:"Uncommon",script:"hylian64",description:"A language designed for creatures of the earth. Spoken by Giants, academics, and rare earth-based creatures"}]),o={name:"LanguageList",data:function(){return{columns:[{name:"name",required:!0,label:"Name",align:"left",field:e=>e.name,format:e=>`${e}`,sortable:!0},{name:"rarity",required:!0,label:"Rarity",align:"left",field:e=>e.rarity,format:e=>`${e}`,sortable:!0},{name:"description",required:!0,label:"Description",align:"left",field:e=>e.description,format:e=>`${e}`,sortable:!0},{name:"example",required:!0,label:"Example",align:"left",field:e=>e.script,format:e=>`${e}`,sortable:!1}],example:"This is example text",languages:r,filter:"",pagination:{rowsPerPage:25},size:14}}},s=o,l=n("2877"),d=n("27f9"),c=n("eaac"),m=n("0016"),p=n("bd08"),u=n("357e"),g=n("db86"),f=n("eebe"),h=n.n(f),b=Object(l["a"])(s,t,i,!1,null,null,null);a["default"]=b.exports;h()(b,"components",{QInput:d["a"],QTable:c["a"],QIcon:m["a"],QTr:p["a"],QTh:u["a"],QTd:g["a"]})}}]);