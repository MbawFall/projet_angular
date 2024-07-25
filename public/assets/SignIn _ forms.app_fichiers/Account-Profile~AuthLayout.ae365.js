(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{E074:function(e,r,s){"use strict";s.r(r);var t=function(){var e=this,r=e._self._c;return r("i-form",{ref:"form"},[e.hasServerSideError&&!e.success?r("i-alert",{attrs:{type:"error"}},e._l(e.error.errors,(function(s,t){return r("span",{key:t},[e._v("\n\t\t\t"+e._s(e.serverSideErrorLocalization(s))),r("br")])})),0):e._e(),e._v(" "),e.success?r("i-alert",{attrs:{type:"success"}},[e._v("\n\t\t"+e._s(e.$t("accountSettings.profile.passwordChanged"))+"\n\t")]):e._e(),e._v(" "),e.$root.user.info.hasPassword?r("i-text",{attrs:{type:"password",placeholder:e.$t("accountSettings.profile.currentPassword"),rules:e.validationRoles.passwordRoles,"on-keyup":e.keyupEvent,autocomplete:"off",name:"password",required:""},on:{keyup:function(r){return!r.type.indexOf("key")&&e._k(r.keyCode,"enter",13,r.key,"Enter")?null:e.onSubmit.apply(null,arguments)}},model:{value:e.password,callback:function(r){e.password=r},expression:"password"}}):e._e(),e._v(" "),r("div",{staticClass:"profile-flexible-input"},[r("i-text",{attrs:{type:"password",placeholder:e.$t("accountSettings.profile.newPassword"),rules:e.validationRoles.newPasswordRoles,"on-keyup":e.keyupEvent,autocomplete:"new-password",name:"new-password",required:""},on:{keyup:function(r){return!r.type.indexOf("key")&&e._k(r.keyCode,"enter",13,r.key,"Enter")?null:e.onSubmit.apply(null,arguments)}},model:{value:e.newPassword,callback:function(r){e.newPassword=r},expression:"newPassword"}}),e._v(" "),r("i-text",{attrs:{type:"password",placeholder:e.$t("accountSettings.profile.confirmPassword"),rules:e.validationRoles.confirmPasswordRoles(e.newPassword),"on-keyup":e.keyupEvent,autocomplete:"new-password",name:"confirm-new-password",required:""},on:{keyup:function(r){return!r.type.indexOf("key")&&e._k(r.keyCode,"enter",13,r.key,"Enter")?null:e.onSubmit.apply(null,arguments)}},model:{value:e.confirmPassword,callback:function(r){e.confirmPassword=r},expression:"confirmPassword"}})],1)],1)};t._withStripped=!0;var o,i=s("yXPU"),a=s.n(i),n=s("0d3v"),l=s("4da+"),u=s("ttAG"),c=s("luLf"),d={name:"ChangePassword",props:{saveAllState:Boolean},data:function(){return{success:!1,hasServerSideError:!1,errorMessage:"",password:"",newPassword:"",confirmPassword:"",validationRoles:Object(l.a)()}},watch:{saveAllState:function(){this.$root.user.info.hasPassword&&""!==this.password||""!==this.newPassword?(this.success=!1,this.onSubmit()):this.$refs.form.reset()}},mounted:function(){this.$emit("setTitle","Change your password")},methods:{keyupEvent:function(){this.hasServerSideError&&(this.hasServerSideError=!1,this.validationRoles=Object(l.a)(),this.$refs.form.validate())},onSubmit:(o=a()((function*(){if(this.validationRoles=Object(l.a)(),this.$refs.form.validate()){var e=yield n.a.changePassword({password:this.password,newPassword:this.newPassword});if(e.success)this.$auth.setToken(e),this.$root.setUser(()=>{this.hasServerSideError=!1,this.success=!0,this.$refs.form.reset()},!0);else{var r=this;r.success=!1,r.hasServerSideError=!0,r.error=e.errors,e.errors.fieldErrors.forEach(e=>{r.validationRoles[e.fieldName+"Roles"].push(()=>Object(c.a)("auth."+e.error.errorCode))}),r.$refs.form.validate()}}})),function(){return o.apply(this,arguments)}),serverSideErrorLocalization:function(e){return u.default.serverSideErrorLocalization("auth",e)}}},h=s("KHd+"),f=Object(h.a)(d,t,[],!1,null,null,null);r.default=f.exports},OPTg:function(e,r,s){"use strict";s("t3+S")},TLYe:function(e,r,s){},"XO+f":function(e,r,s){"use strict";s.r(r);var t=function(){var e=this,r=e._self._c;return r("div",[e.showProgress?r("div",{staticClass:"loader center"},[r("i-preloader")],1):e._e(),e._v(" "),e.showErrors?[r("i-alert",{attrs:{type:"error"}},e._l(e.error.errors,(function(s,t){return r("span",{key:t},[e._v("\n\t\t\t\t"+e._s(s.errorMessage)),r("br")])})),0),e._v(" "),e.hideChangeEmailLinks?e._e():r("div",[r("i18n",{attrs:{path:"auth.youCanChangeEmailAddress"}},[r("router-link",{staticClass:"text-btn",attrs:{place:"action",to:e.changeEmail}},[e._v(e._s(e.$t("accountSettings.email.here")))])],1)],1)]:e._e(),e._v(" "),e.showSuccessMessage?[r("i-alert",{attrs:{type:"success"}},[e._v("\n\t\t\t"+e._s(e.$t("auth.anotherEmailSent",{email:e.$root.user.info.email}))),r("br"),e._v("\n\t\t\t"+e._s(e.$t("auth.checkYourSpamFolder"))+"\n\t\t")]),e._v(" "),e.hideChangeEmailLinks?e._e():r("div",[r("i18n",{attrs:{path:"auth.youCanChangeEmailAddress"}},[r("router-link",{staticClass:"text-btn",attrs:{place:"action",to:e.changeEmail}},[e._v(e._s(e.$t("accountSettings.email.here")))])],1)],1)]:e._e(),e._v(" "),e.showAlreadyConfirmedMessage?[r("i-alert",{attrs:{type:"success"}},[e._v("\n\t\t\t"+e._s(e.$t("auth.emailAlreadyConfirmed",{email:e.$root.user.info.email}))+"\n\t\t")])]:e._e()],2)};t._withStripped=!0;var o,i=s("yXPU"),a=s.n(i),n=s("0d3v"),l={name:"ReSendEmailConfirmMail",props:{hideChangeEmailLinks:Boolean},data:function(){return{showProgress:!0,showErrors:!1,showSuccessMessage:!1,showAlreadyConfirmedMessage:!1,error:{},signInRoute:{name:"SignIn",query:{redirect:this.$route.query.redirect}},changeEmail:{name:"ChangeEmail",query:{redirect:this.$route.query.redirect}}}},mounted:(o=a()((function*(){if(this.$emit("setTitle",this.$t("auth.resendConfirmationMail")),this.$root.user.info.isEmailConfirmed)this.showProgress=!1,this.showErrors=!1,this.showSuccessMessage=!1,this.showAlreadyConfirmedMessage=!0;else{var e=yield n.a.resendEmailConfirmMail();if(this.showProgress=!1,this.showAlreadyConfirmedMessage=!1,this.showErrors=!e.success,this.showSuccessMessage=e.success,!e.success)if(e.errors)this.error=e.errors;else{var r=" ".concat(this.$root.$t("notification.traceCode"),": REMC0001");this.error.errors=[{errorMessage:this.$root.$t("notification.anErrorOccurred",{moreDetail:r})}]}}})),function(){return o.apply(this,arguments)})},u=s("KHd+"),c=Object(u.a)(l,t,[],!1,null,null,null);r.default=c.exports},rZxc:function(e,r,s){"use strict";s.r(r);var t=function(){var e=this,r=e._self._c;return r("i-form",{ref:"form"},[e.hasServerSideError&&!e.success?r("i-alert",{attrs:{type:"error"}},e._l(e.error.errors,(function(s,t){return r("span",{key:t},[s.errorCode?[e._v("\n\t\t\t\t"+e._s(e.errorEnums("auth."+s.errorCode))+"\n\t\t\t")]:s.errorMessage?[e._v("\n\t\t\t\t"+e._s(s.errorMessage)+"\n\t\t\t")]:e._e(),e._v(" "),r("br")],2)})),0):e._e(),e._v(" "),e.success?r("i-alert",{attrs:{type:"success"}},[r("span",{domProps:{innerHTML:e._s(e.$t("accountSettings.profile.yourEmailWasChangedTo",{email:e.$root.user.info.email}))}})]):e._e(),e._v(" "),r("div",{class:{"not-profile":"profile"!==e.layout}},[e.showCurrentEmail?r("i-text",{attrs:{placeholder:e.$t("auth.currentEmailAddress"),name:"email",readonly:"",disabled:""},model:{value:e.$root.user.info.email,callback:function(r){e.$set(e.$root.user.info,"email",r)},expression:"$root.user.info.email"}}):e._e(),e._v(" "),e.closedSaveArea?e._e():r("div",{staticClass:"profile-flexible-input"},[r("i-text",{attrs:{placeholder:e.$t("accountSettings.profile.newEmailAddress"),rules:e.validationRoles.emailRoles,"on-keyup":e.keyupEvent,name:"new-email",required:""},on:{keyup:function(r){return!r.type.indexOf("key")&&e._k(r.keyCode,"enter",13,r.key,"Enter")?null:e.onSubmit.apply(null,arguments)}},model:{value:e.newEmail,callback:function(r){e.newEmail=r},expression:"newEmail"}}),e._v(" "),r("i-text",{attrs:{placeholder:e.$t("accountSettings.profile.confirmNewEmailAddress"),rules:e.validationRoles.confirmEmailRoles(e.newEmail),"on-keyup":e.keyupEvent,name:"confirm-new-email",required:""},on:{keyup:function(r){return!r.type.indexOf("key")&&e._k(r.keyCode,"enter",13,r.key,"Enter")?null:e.onSubmit.apply(null,arguments)}},model:{value:e.confirmEmail,callback:function(r){e.confirmEmail=r},expression:"confirmEmail"}}),e._v(" "),"profile"!==e.layout?r("div",{staticClass:"navigation-button"},[r("i-button",{on:{click:e.onSubmit}},[e._v(e._s(e.$t("auth.changeEmailAdress")))])],1):e._e()],1)],1),e._v(" "),e.showProgress?r("i-preloader"):e._e()],1)};t._withStripped=!0;var o,i=s("yXPU"),a=s.n(i),n=s("0d3v"),l=s("4da+"),u=s("luLf"),c={name:"ChangeEmail",props:{layout:String,saveAllState:Boolean},data:function(){return{showProgress:!1,hasServerSideError:!1,errorEnums:u.a,error:{},success:!1,valid:!0,validationRoles:Object(l.a)(),newEmail:"",confirmEmail:"",showCurrentEmail:!0,closedSaveArea:!1}},watch:{saveAllState:function(){""!==this.newEmail&&this.onSubmit()}},mounted:function(){this.closedSaveArea=!1,this.$emit("setTitle",this.$t("auth.changeEmailAdress")),this.showCurrentEmail="profile"!==this.layout},methods:{keyupEvent:function(){this.hasServerSideError&&(this.hasServerSideError=!1,this.validationRoles=Object(l.a)(),this.valid=this.$refs.form.validate())},onSubmit:(o=a()((function*(){if(this.validationRoles=Object(l.a)(),this.valid=this.$refs.form.validate(),this.valid){this.showProgress=!0;var e=yield n.a.changeEmail({newEmail:this.newEmail});if(this.showProgress=!1,e.success)this.$auth.setToken(e),this.$root.setUser(()=>{this.hasServerSideError=!1,this.success=!0,this.$refs.form.reset(),this.closedSaveArea=!0},!0);else if(this.success=!1,this.hasServerSideError=!0,e.errors)this.error=e.errors;else{var r=" ".concat(this.$root.$t("notification.traceCode"),": CNGE0001");this.error.errors=[{errorMessage:this.$root.$t("notification.anErrorOccurred",{moreDetail:r})}]}}})),function(){return o.apply(this,arguments)})}},d=(s("OPTg"),s("KHd+")),h=Object(d.a)(c,t,[],!1,null,"a0b19fc8",null);r.default=h.exports},"t3+S":function(e,r,s){var t=s("LboF"),o=s("TLYe");"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};t(o,i);e.exports=o.locals||{}}}]);