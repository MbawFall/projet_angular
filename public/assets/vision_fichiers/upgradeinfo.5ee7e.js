(window.webpackJsonp=window.webpackJsonp||[]).push([[255],{"LRn/":function(t,e,i){"use strict";i("sswH")},OAYW:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"upgrade-info-content"},[e("h4",{staticClass:"email-title"},[t._v(t._s(t.title))]),t._v(" "),e("span",{staticClass:"email-description"},[t._v(t._s(t.text))]),t._v(" "),e("div",{staticClass:"option-wrapper view-type"},t._l(t.options,(function(i){return e("div",{key:i.value,staticClass:"view-type-item",class:{disabled:t.currentQuota>=i.quota&&0!==i.quota}},[e("span",{staticClass:"option-title"},[t._v(t._s(i.title))]),t._v(" "),e("i-radio",{staticClass:"radio",attrs:{tabindex:"-1",label:i.text,value:i.value},model:{value:t.upgradeChoice,callback:function(e){t.upgradeChoice=e},expression:"upgradeChoice"}},[i.icon?e("i-icon",{class:[i.icon],attrs:{regular:"",icon:i.icon}}):e("span",{staticClass:"option-number"},[t._v(t._s(i.text||i.quota))]),t._v(" "),t.quotaLabel?e("span",{staticClass:"option-caption"},[t._v(" / "+t._s(t.quotaLabel)+" ")]):t._e()],1)],1)})),0),t._v(" "),e("div",{staticClass:"upgrade-info-upgrade-button"},[e("a",{on:{click:t.navigateToPackages}},[t._v("\n\t\t\t"+t._s(t.$t("upgrade"))+"\n\t\t")])])])};a._withStripped=!0;i("4mDm"),i("3bBZ");var s={props:{title:String,text:String,upgradeOptions:Array,currentQuota:Number,quotaLabel:String,eventName:String},data:function(){for(var t=0;t<this.upgradeOptions.length;t++){var e=this.upgradeOptions[t];"number"==typeof e?this.upgradeOptions[t]={quota:e}:"string"==typeof e&&(this.upgradeOptions[t]={text:e})}var i=[{text:this.upgradeOptions[0].text,icon:this.upgradeOptions[0].icon,value:"basic",title:"Basic",quota:this.upgradeOptions[0].quota},{text:this.upgradeOptions[1].text,icon:this.upgradeOptions[1].icon,value:"pro",title:"Pro",quota:this.upgradeOptions[1].quota},{text:this.upgradeOptions[2].text,icon:this.upgradeOptions[2].icon,value:"premium",title:"Premium",quota:this.upgradeOptions[2].quota}];for(var a of i)0===a.quota&&(a.icon="check");return{options:i,upgradeChoice:""}},methods:{navigateToPackages:function(){this.$eventTrigger.fireGoogleAnalyticsEvent("pricing_view"),this.$eventTrigger.fireGenericAnalyticEvent({category:"quota_limit",action:"open_packages",label:this.eventName||this.quotaLabel,value:this.currentQuota}),this.$root.setBackupFormStorage&&this.$root.setBackupFormStorage(),this.$nextTick(()=>{this.$router.push(this.upgradeChoice?{name:"BuyPackage",query:{package:this.upgradeChoice}}:{name:"Packages"})})}}},o=(i("LRn/"),i("KHd+")),n=Object(o.a)(s,a,[],!1,null,"9dc6c1c8",null);e.default=n.exports},Twt4:function(t,e,i){},sswH:function(t,e,i){var a=i("LboF"),s=i("Twt4");"string"==typeof(s=s.__esModule?s.default:s)&&(s=[[t.i,s,""]]);var o={insert:"head",singleton:!1};a(s,o);t.exports=s.locals||{}}}]);