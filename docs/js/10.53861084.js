(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{f9ea:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-dialog",{model:{value:t.dialog,callback:function(a){t.dialog=a},expression:"dialog"}},[e("q-card",[e("q-card-section",[e("div",{staticClass:"text-h6"},[t._v("Settings")])]),e("q-card-section",{staticClass:"q-pt-none"},[e("q-select",{attrs:{options:t.coinageOptions,"option-label":"name",label:"Default Coinage","map-options":""},model:{value:t.coinage,callback:function(a){t.coinage=a},expression:"coinage"}}),e("q-toggle",{attrs:{color:"black",label:"Dark Mode","left-label":""},model:{value:t.darkMode,callback:function(a){t.darkMode=a},expression:"darkMode"}})],1),e("q-card-actions",{staticClass:"bg-white text-teal",attrs:{align:"right"}},[e("q-btn",{attrs:{color:"primary",label:"Save",icon:"save"},on:{click:t.saving}}),e("q-btn",{attrs:{flat:"",label:"Close"},on:{click:function(a){return t.$emit("input",!1)}}})],1)],1)],1)},o=[],n={name:"Settings",props:["value"],data:function(){return{dialog:this.value,coinage:"",coinageOptions:[],darkMode:!1}},watch:{darkMode(t){this.$store.dispatch("settings/updateDarkMode",t)},dialog(t){this.$emit("input",t)},value(t){this.dialog=t}},methods:{saving(){this.$store.dispatch("settings/updateDefaultCoinage",this.coinage.id),this.dialog=!1}},created(){this.coinage=this.$coinage.find(this.$store.state.settings.defaultCoinage),this.coinageOptions=this.$coinage.coins,this.darkMode=this.$store.state.settings.darkMode}},s=n,l=e("2877"),c=e("24e8"),d=e("f09f"),r=e("a370"),g=e("ddd8"),u=e("9564"),p=e("4b7e"),h=e("9c40"),b=e("eebe"),f=e.n(b),k=Object(l["a"])(s,i,o,!1,null,null,null);a["default"]=k.exports;f()(k,"components",{QDialog:c["a"],QCard:d["a"],QCardSection:r["a"],QSelect:g["a"],QToggle:u["a"],QCardActions:p["a"],QBtn:h["a"]})}}]);