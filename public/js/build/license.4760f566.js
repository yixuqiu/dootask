import{m as n,n as r}from"./app.f638dae9.js";var l=function(){var a,t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"setting-item submit"},[o("Form",{ref:"formData",attrs:{model:t.formData,labelPosition:t.formLabelPosition,labelWidth:t.formLabelWidth},nativeOn:{submit:function(s){s.preventDefault()}}},[o("FormItem",{attrs:{label:"License",prop:"license"}},[o("Input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:5},placeholder:t.$L("\u8BF7\u8F93\u5165License...")},model:{value:t.formData.license,callback:function(s){t.$set(t.formData,"license",s)},expression:"formData.license"}})],1),o("FormItem",[o("div",{staticClass:"license-box"},[t.formData.info.sn?o("ul",[o("li",[o("em",[t._v("SN:")]),o("span",[t._v(t._s(t.formData.info.sn))]),o("ETooltip",{attrs:{"max-width":"auto",placement:"right"}},[o("div",{attrs:{slot:"content"},slot:"content"},[t._v(t._s(t.$L("\u5F53\u524D\u73AF\u5883"))+": "+t._s(t.formData.doo_sn))]),o("Icon",{staticClass:"information",attrs:{type:"ios-information-circle-outline"}})],1)],1),o("li",[o("em",[t._v("IP:")]),o("span",[t._v(t._s(t.infoJoin(t.formData.info.ip)))])]),o("li",[o("em",[t._v(t._s(t.$L("\u57DF\u540D"))+":")]),o("span",[t._v(t._s(t.infoJoin(t.formData.info.domain)))])]),o("li",[o("em",[t._v("MAC:")]),o("span",[t._v(t._s(t.infoJoin(t.formData.info.mac)))]),o("ETooltip",{attrs:{"max-width":"auto",placement:"right"}},[o("div",{attrs:{slot:"content"},slot:"content"},[t._v(t._s(t.$L("\u5F53\u524D\u73AF\u5883"))+": "+t._s(t.infoJoin(t.formData.macs,"-")))]),o("Icon",{staticClass:"information",attrs:{type:"ios-information-circle-outline"}})],1)],1),o("li",[o("em",[t._v(t._s(t.$L("\u4F7F\u7528\u4EBA\u6570"))+":")]),o("span",[t._v(t._s(t.formData.info.people||t.$L("\u65E0\u9650\u5236"))+" ("+t._s(t.$L("\u5DF2\u4F7F\u7528"))+": "+t._s(t.formData.user_count)+")")]),o("ETooltip",{attrs:{"max-width":"auto",placement:"right"}},[o("div",{attrs:{slot:"content"},slot:"content"},[t._v(t._s(t.$L("\u9650\u5236\u6CE8\u518C\u4EBA\u6570")))]),o("Icon",{staticClass:"information",attrs:{type:"ios-information-circle-outline"}})],1)],1),o("li",[o("em",[t._v(t._s(t.$L("\u521B\u5EFA\u65F6\u95F4"))+":")]),o("span",[t._v(t._s(t.formData.info.created_at))])]),o("li",[o("em",[t._v(t._s(t.$L("\u5230\u671F\u65F6\u95F4"))+":")]),o("span",[t._v(t._s(t.formData.info.expired_at||t.$L("\u6C38\u4E45")))]),t.formData.info.expired_at?o("ETooltip",{attrs:{"max-width":"auto",placement:"right"}},[o("div",{attrs:{slot:"content"},slot:"content"},[t._v(t._s(t.$L("\u5230\u671F\u540E\u9650\u5236\u6CE8\u518C\u5E10\u53F7")))]),o("Icon",{staticClass:"information",attrs:{type:"ios-information-circle-outline"}})],1):t._e()],1)]):o("ul",[o("li",[t._v(" "+t._s(t.$L("\u52A0\u8F7D\u4E2D..."))+" ")])])])]),((a=t.formData.error)===null||a===void 0?void 0:a.length)>0?o("FormItem",{attrs:{label:t.$L("\u5F53\u524D\u73AF\u5883")}},[o("div",{staticClass:"license-box"},[o("ul",[o("li",[o("em",[t._v("SN:")]),o("span",[t._v(t._s(t.formData.doo_sn))])]),o("li",[o("em",[t._v("MAC:")]),o("span",[t._v(t._s(t.infoJoin(t.formData.macs)))])]),t._l(t.formData.error,function(s){return o("li",{staticClass:"warning"},[t._v(t._s(s))])})],2)])]):t._e()],1),o("div",{staticClass:"setting-footer"},[o("Button",{attrs:{loading:t.loadIng>0,type:"primary"},on:{click:t.submitForm}},[t._v(t._s(t.$L("\u63D0\u4EA4")))]),o("Button",{staticStyle:{"margin-left":"8px"},attrs:{loading:t.loadIng>0},on:{click:t.resetForm}},[t._v(t._s(t.$L("\u91CD\u7F6E")))])],1)],1)},m=[];const _={data(){return{loadIng:0,formData:{license:"",info:{},macs:[],doo_sn:"",user_count:0,error:[]}}},mounted(){this.systemSetting()},computed:{...n(["userInfo","formLabelPosition","formLabelWidth"])},methods:{submitForm(){this.$refs.formData.validate(a=>{a&&this.systemSetting(!0)})},resetForm(){this.formData=$A.cloneJSON(this.formData_bak)},systemSetting(a){this.loadIng++,this.$store.dispatch("call",{url:"system/license",data:Object.assign(this.formData,{type:a?"save":"get"}),method:"post"}).then(({data:t})=>{a&&$A.messageSuccess("\u4FEE\u6539\u6210\u529F"),this.formData=t,this.formData_bak=$A.cloneJSON(this.formData)}).catch(({msg:t})=>{a&&$A.modalError(t)}).finally(t=>{this.loadIng--})},infoJoin(a,t=null){return $A.isArray(a)&&(a=a.join(",")),a||(t===null?this.$L("\u65E0\u9650\u5236"):t)}}},i={};var c=r(_,l,m,!1,f,"0f9d4138",null,null);function f(a){for(let t in i)this[t]=i[t]}var v=function(){return c.exports}();export{v as default};