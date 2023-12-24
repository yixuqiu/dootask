import{n as a,_ as n}from"./app.f638dae9.js";import{I as r}from"./IFrame.f2413a4d.js";var s=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{staticClass:"single-file-task"},[t("PageTitle",{attrs:{title:e.title}}),e.loadIng>0?t("Loading"):e.isWait?e._e():[e.isType("md")?t("MDPreview",{attrs:{initialValue:e.fileDetail.content.content}}):e.isType("text")?t("TEditor",{attrs:{value:e.fileDetail.content.content,height:"100%",readOnly:""}}):e.isType("drawio")?t("Drawio",{attrs:{title:e.fileDetail.name,readOnly:""},model:{value:e.fileDetail.content,callback:function(l){e.$set(e.fileDetail,"content",l)},expression:"fileDetail.content"}}):e.isType("mind")?t("Minder",{attrs:{value:e.fileDetail.content,readOnly:""}}):e.isType("code")?t("AceEditor",{staticClass:"view-editor",attrs:{ext:e.fileDetail.ext,readOnly:""},model:{value:e.fileDetail.content.content,callback:function(l){e.$set(e.fileDetail.content,"content",l)},expression:"fileDetail.content.content"}}):e.isType("office")?t("OnlyOffice",{attrs:{code:e.officeCode,documentKey:e.documentKey,readOnly:""},model:{value:e.officeContent,callback:function(l){e.officeContent=l},expression:"officeContent"}}):e.isType("preview")?t("IFrame",{staticClass:"preview-iframe",attrs:{src:e.previewUrl}}):t("div",{staticClass:"no-support"},[e._v(e._s(e.$L("\u4E0D\u652F\u6301\u5355\u72EC\u67E5\u770B\u6B64\u6D88\u606F")))])]],2)},c=[];const d=()=>n(()=>import("./preview.93d138a5.js"),["js/build/preview.93d138a5.js","js/build/app.f638dae9.js","js/build/app.2884b9ac.css"]),f=()=>n(()=>import("./TEditor.e6008fa7.js"),["js/build/TEditor.e6008fa7.js","js/build/app.f638dae9.js","js/build/app.2884b9ac.css","js/build/ImgUpload.ab8fc63d.js"]),_=()=>n(()=>import("./AceEditor.1efb55f9.js"),["js/build/AceEditor.1efb55f9.js","js/build/app.f638dae9.js","js/build/app.2884b9ac.css"]),u=()=>n(()=>import("./OnlyOffice.57687aa3.js"),["js/build/OnlyOffice.57687aa3.js","js/build/OnlyOffice.d095e45d.css","js/build/app.f638dae9.js","js/build/app.2884b9ac.css","js/build/IFrame.f2413a4d.js"]),p=()=>n(()=>import("./Drawio.2a3d8cc3.js"),["js/build/Drawio.2a3d8cc3.js","js/build/Drawio.fc5c6326.css","js/build/app.f638dae9.js","js/build/app.2884b9ac.css","js/build/IFrame.f2413a4d.js"]),m=()=>n(()=>import("./Minder.ef245794.js"),["js/build/Minder.ef245794.js","js/build/Minder.3ba64342.css","js/build/IFrame.f2413a4d.js","js/build/app.f638dae9.js","js/build/app.2884b9ac.css"]),v={components:{IFrame:r,AceEditor:_,TEditor:f,MDPreview:d,OnlyOffice:u,Drawio:p,Minder:m},data(){return{loadIng:0,isWait:!1,fileDetail:{}}},mounted(){},watch:{$route:{handler(){this.getInfo()},immediate:!0}},computed:{fileId(){const{fileId:e}=this.$route.params;return parseInt(/^\d+$/.test(e)?e:0)},title(){const{name:e}=this.fileDetail;return e||"Loading..."},isType(){const{fileDetail:e}=this;return function(i){return e.file_mode==i}},officeContent(){return{id:this.fileDetail.id||0,type:this.fileDetail.ext,name:this.title}},officeCode(){return"taskFile_"+this.fileDetail.id},previewUrl(){const{name:e,key:i}=this.fileDetail.content;return $A.apiUrl(`../online/preview/${e}?key=${i}`)}},methods:{getInfo(){this.fileId<=0||(setTimeout(e=>{this.loadIng++},600),this.isWait=!0,this.$store.dispatch("call",{url:"project/task/filedetail",data:{file_id:this.fileId}}).then(({data:e})=>{this.fileDetail=e}).catch(({msg:e})=>{$A.modalError({content:e,onOk:()=>{this.$Electron&&window.close()}})}).finally(e=>{this.loadIng--,this.isWait=!1}))},documentKey(){return new Promise((e,i)=>{this.$store.dispatch("call",{url:"project/task/filedetail",data:{file_id:this.fileId,only_update_at:"yes"}}).then(({data:t})=>{e(`${t.id}-${$A.Time(t.update_at)}`)}).catch(t=>{i(t)})})}}},o={};var h=a(v,s,c,!1,D,null,null,null);function D(e){for(let i in o)this[i]=o[i]}var T=function(){return h.exports}();export{T as default};