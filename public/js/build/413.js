(self.webpackChunkDooTask=self.webpackChunkDooTask||[]).push([[413],{90431:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>o});var i=n(23645),r=n.n(i)()((function(e){return e[1]}));r.push([e.id,".component-only-office[data-v-700846c6] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.component-only-office .placeholder[data-v-700846c6] {\n  flex: 1;\n  width: 100%;\n  height: 100%;\n}\n",""]);const o=r},21413:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>l});var i=n(20629);function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const s={name:"OnlyOffice",props:{id:{type:String,default:function(){return"office_"+Math.round(1e4*Math.random())}},value:{type:[Object,Array],default:function(){return{}}}},data:function(){return{serverUrl:"http://10.22.22.3/",fileName:null,fileType:null,fileUrl:null,docEditor:null}},mounted:function(){},beforeDestroy:function(){null!==this.docEditor&&(this.docEditor.destroyEditor(),this.docEditor=null)},computed:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},(0,i.rn)(["userToken","userInfo"])),watch:{value:{handler:function(e){this.fileUrl=this.serverUrl+"api/file/content/?id="+e.id+"&token="+this.userToken,this.fileType=this.getType(e.type),this.fileName=e.name},immediate:!0,deep:!0},fileUrl:{handler:function(e){var t=this;if(e){var n=new URL(this.$store.state.method.apiUrl("web-apps"));$A.loadScript("http://".concat(n.hostname,":2224/web-apps/apps/api/documents/api.js"),(function(){t.loadFile()}))}},immediate:!0}},methods:{getType:function(e){switch(e){case"word":return"docx";case"excel":return"xlsx";case"ppt":return"pptx"}return""},loadFile:function(){var e=this;if(this.fileUrl){null!==this.docEditor&&(this.docEditor.destroyEditor(),this.docEditor=null);var t="zh";switch(this.getLanguage()){case"CN":case"TC":t="zh";break;default:t="en"}var n={document:{fileType:this.fileType,key:this.fileType+"-"+this.value.id,title:this.fileName+"."+this.fileType,url:this.fileUrl},editorConfig:{mode:"edit",lang:t,user:{id:this.userInfo.userid,name:this.userInfo.nickname},callbackUrl:this.serverUrl+"api/file/content/office?id="+this.value.id+"&token="+this.userToken}};this.$nextTick((function(){e.docEditor=new DocsAPI.DocEditor(e.id,n)}))}}}};n(39754);const l=(0,n(51900).Z)(s,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"component-only-office"},[t("div",{staticClass:"placeholder",attrs:{id:this.id}})])}),[],!1,null,"700846c6",null).exports},39754:(e,t,n)=>{var i=n(90431);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[e.id,i,""]]),i.locals&&(e.exports=i.locals);(0,n(45346).Z)("5308b61e",i,!0,{})}}]);