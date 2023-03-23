import{m as r,n}from"./app.d6214888.js";var o=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"setting-item submit"},[t.configLoad>0?e("Loading"):e("Form",{ref:"formDatum",attrs:{model:t.formDatum,rules:t.ruleDatum,labelPosition:t.formLabelPosition,labelWidth:t.formLabelWidth},nativeOn:{submit:function(i){i.preventDefault()}}},[t.isLdap?e("Alert",{attrs:{type:"warning"}},[t._v(t._s(t.$L("LDAP \u7528\u6237\u7981\u6B62\u4FEE\u6539\u90AE\u7BB1\u5730\u5740")))]):t._e(),e("FormItem",{attrs:{label:t.$L("\u65B0\u90AE\u7BB1\u5730\u5740"),prop:"newEmail"}},[t.isRegVerify==1?e("Input",{class:t.count>0?"setting-send-input":"setting-input",attrs:{search:"","enter-button":t.$L(t.sendBtnText),disabled:t.isLdap,placeholder:t.$L("\u8F93\u5165\u65B0\u90AE\u7BB1\u5730\u5740")},on:{"on-search":t.sendEmailCode},model:{value:t.formDatum.newEmail,callback:function(i){t.$set(t.formDatum,"newEmail",i)},expression:"formDatum.newEmail"}}):e("Input",{staticClass:"setting-input",attrs:{disabled:t.isLdap,placeholder:t.$L("\u8F93\u5165\u65B0\u90AE\u7BB1\u5730\u5740")},model:{value:t.formDatum.newEmail,callback:function(i){t.$set(t.formDatum,"newEmail",i)},expression:"formDatum.newEmail"}})],1),t.isRegVerify==1?e("FormItem",{attrs:{label:t.$L("\u9A8C\u8BC1\u7801"),prop:"code"}},[e("Input",{attrs:{placeholder:t.$L("\u8F93\u5165\u90AE\u7BB1\u9A8C\u8BC1\u7801")},model:{value:t.formDatum.code,callback:function(i){t.$set(t.formDatum,"code",i)},expression:"formDatum.code"}})],1):t._e()],1),e("div",{staticClass:"setting-footer"},[e("Button",{attrs:{loading:t.loadIng>0,type:"primary",disabled:t.isLdap},on:{click:t.submitForm}},[t._v(t._s(t.$L("\u63D0\u4EA4")))]),e("Button",{staticStyle:{"margin-left":"8px"},attrs:{loading:t.loadIng>0},on:{click:t.resetForm}},[t._v(t._s(t.$L("\u91CD\u7F6E")))])],1)],1)},l=[];const m={data(){return{loadIng:0,configLoad:0,formDatum:{newEmail:"",code:""},ruleDatum:{newEmail:[{validator:(t,s,e)=>{s.trim()===""?e(new Error(this.$L("\u8BF7\u8F93\u5165\u65B0\u90AE\u7BB1\u5730\u5740\uFF01"))):$A.isEmail(s.trim())?e():e(new Error(this.$L("\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u90AE\u7BB1\u5730\u5740\uFF01")))},required:!0,trigger:"change"}]},count:0,isSendButtonShow:!0,isRegVerify:0,sendBtnText:this.$L("\u53D1\u9001\u9A8C\u8BC1\u7801")}},mounted(){this.getRegVerify()},computed:{...r(["formLabelPosition","formLabelWidth"]),isLdap(){return this.$store.state.userInfo.identity.includes("ldap")}},methods:{sendEmailCode(){this.$store.dispatch("call",{url:"users/email/send",data:{type:2,email:this.formDatum.newEmail},spinner:!0}).then(t=>{this.isSendButtonShow=!1,this.count=120,this.sendBtnText=this.count+" \u79D2";let s=setInterval(()=>{this.count--,this.sendBtnText=this.count+" \u79D2",this.count<=0&&(this.sendBtnText=this.$L("\u53D1\u9001\u9A8C\u8BC1\u7801"),clearInterval(s))},1e3)}).catch(({msg:t})=>{$A.messageError(t)})},submitForm(){this.$refs.formDatum.validate(t=>{t&&(this.loadIng++,this.$store.dispatch("call",{url:"users/email/edit",data:this.formDatum}).then(({data:s})=>{this.count=0,this.sendBtnText=this.$L("\u53D1\u9001\u9A8C\u8BC1\u7801"),$A.messageSuccess("\u4FEE\u6539\u6210\u529F"),this.$store.dispatch("saveUserInfo",s),this.$refs.formDatum.resetFields(),this.isSendButtonShow=!0}).catch(({msg:s})=>{$A.modalError(s)}).finally(s=>{this.loadIng--}))})},resetForm(){this.$refs.formDatum.resetFields()},getRegVerify(){this.configLoad++,this.$store.dispatch("call",{url:"system/setting/email"}).then(({data:t})=>{this.isRegVerify=t.reg_verify==="open"}).finally(t=>{this.configLoad--})}}},a={};var u=n(m,o,l,!1,d,null,null,null);function d(t){for(let s in a)this[s]=a[s]}var f=function(){return u.exports}();export{f as default};