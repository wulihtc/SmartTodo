(function(t){function e(e){for(var o,c,r=e[0],d=e[1],s=e[2],u=0,p=[];u<r.length;u++)c=r[u],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&p.push(a[c][0]),a[c]=0;for(o in d)Object.prototype.hasOwnProperty.call(d,o)&&(t[o]=d[o]);l&&l(e);while(p.length)p.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,r=1;r<n.length;r++){var d=n[r];0!==a[d]&&(o=!1)}o&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var o={},a={app:0},i=[];function c(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=o,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)c.d(n,o,function(e){return t[e]}.bind(null,o));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],d=r.push.bind(r);r.push=e,r=r.slice();for(var s=0;s<r.length;s++)e(r[s]);var l=d;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"02c4":function(t,e,n){},1660:function(t,e,n){},"2a5a":function(t,e,n){},4015:function(t,e,n){"use strict";n("02c4")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23");function a(t,e,n,a,i,c){var r=Object(o["w"])("router-view");return Object(o["p"])(),Object(o["d"])(r)}var i={name:"App",components:{}};n("e150");i.render=a;var c=i,r=n("6c02"),d=Object(o["F"])("data-v-59d9cc00");Object(o["s"])("data-v-59d9cc00");var s={class:"wrapper"},l={class:"container"},u=Object(o["g"])("h1",null,"基于时空大数据的时间管理工具",-1),p={class:"form",onsubmit:"return false;"},h=Object(o["g"])("ul",{class:"bg-bubbles"},[Object(o["g"])("li"),Object(o["g"])("li"),Object(o["g"])("li"),Object(o["g"])("li"),Object(o["g"])("li"),Object(o["g"])("li"),Object(o["g"])("li"),Object(o["g"])("li"),Object(o["g"])("li"),Object(o["g"])("li")],-1);Object(o["q"])();var f=d((function(t,e,n,a,i,c){return Object(o["p"])(),Object(o["d"])("div",null,[Object(o["g"])("div",s,[Object(o["g"])("div",l,[u,Object(o["g"])("form",p,[Object(o["D"])(Object(o["g"])("input",{type:"text",placeholder:"Username",name:"username",id:"username","onUpdate:modelValue":e[1]||(e[1]=function(e){return t.username=e})},null,512),[[o["B"],t.username]]),Object(o["D"])(Object(o["g"])("input",{type:"password",placeholder:"Password",name:"password",id:"password","onUpdate:modelValue":e[2]||(e[2]=function(e){return t.password=e})},null,512),[[o["B"],t.password]]),Object(o["g"])("button",{type:"submit",id:"login-button",onClick:e[3]||(e[3]=function(){return c.submit&&c.submit.apply(c,arguments)})},"Login")])]),h])])})),b=(n("498a"),{name:"Login.vue",data:function(){return{username:"",password:""}},methods:{submit:function(){var t=this;this.username=this.username.trim(),this.password=this.password.trim(),""!==this.username&&""!==this.password?this.axios({method:"post",url:"/login",data:{username:this.username,password:this.password}}).then((function(e){if(e.data.success){var n=e.data.data;t.$store.commit("set_token",n),t.$router.push("/home/todo")}else alert("用户名或密码错误, 请检查后重新输入")})):alert("用户名或密码不可为空")}}});n("4015");b.render=f,b.__scopeId="data-v-59d9cc00";var m=b,g=Object(o["F"])("data-v-6c112626");Object(o["s"])("data-v-6c112626");var O={class:"header"},j={class:"box"},v=Object(o["g"])("label",{for:"title"},"ToDoList",-1),k={style:{float:"right",width:"60%"}},y=Object(o["g"])("label",{for:"itemType"},null,-1),C=Object(o["g"])("option",{value:"single"},"创建待办",-1),T=Object(o["g"])("option",{value:"file"},"下载文件",-1),x=Object(o["g"])("option",{value:"note"},"创建便签",-1),w={class:"footer",id:"footerContainer"},D={class:"footer",id:"footerFunctionContainer"};Object(o["q"])();var _=g((function(t,e,n,a,i,c){var r=Object(o["w"])("router-view");return Object(o["p"])(),Object(o["d"])("div",null,[Object(o["g"])("div",O,[Object(o["g"])("div",j,[Object(o["g"])("div",{id:"form",onKeyup:e[3]||(e[3]=Object(o["E"])((function(){return c.commitTodo&&c.commitTodo.apply(c,arguments)}),["enter"]))},[v,Object(o["g"])("div",k,[y,Object(o["D"])(Object(o["g"])("select",{id:"itemType","onUpdate:modelValue":e[1]||(e[1]=function(e){return t.todoType=e})},[C,T,x],512),[[o["A"],t.todoType]]),Object(o["D"])(Object(o["g"])("input",{type:"text",id:"title",placeholder:"添加ToDo",autocomplete:"off","onUpdate:modelValue":e[2]||(e[2]=function(e){return t.todoContent=e})},null,512),[[o["B"],t.todoContent]])])],32)])]),Object(o["g"])(r,{class:"container",updateTodo:t.updateTodo,createPlaceHold:t.createPlaceHold},null,8,["updateTodo","createPlaceHold"]),Object(o["g"])("div",w," Copyright © "+Object(o["y"])(t.year)+" LiZeC ",1),Object(o["g"])("div",D,[Object(o["g"])("a",{onClick:e[4]||(e[4]=function(){return c.selectFile&&c.selectFile.apply(c,arguments)})},"上传文件"),t.isAdmin?(Object(o["p"])(),Object(o["d"])("a",{key:0,onClick:e[5]||(e[5]=function(){return c.backUpData&&c.backUpData.apply(c,arguments)})},"备份数据")):Object(o["e"])("",!0),t.isAdmin?(Object(o["p"])(),Object(o["d"])("a",{key:1,onClick:e[6]||(e[6]=function(){return c.updateLogs&&c.updateLogs.apply(c,arguments)})},"查看日志")):Object(o["e"])("",!0),t.isAdmin?(Object(o["p"])(),Object(o["d"])("a",{key:2,onClick:e[7]||(e[7]=function(){return c.gc&&c.gc.apply(c,arguments)})},"垃圾回收")):Object(o["e"])("",!0),Object(o["g"])("a",{onClick:e[8]||(e[8]=function(){return c.doLogout&&c.doLogout.apply(c,arguments)})},"退出登录")]),Object(o["g"])("input",{type:"file",id:"file_selector",style:{display:"none"},onChange:e[9]||(e[9]=function(){return c.uploadFile&&c.uploadFile.apply(c,arguments)})},null,32)])})),I=(n("ac1f"),n("1276"),n("b0c0"),{name:"Main",data:function(){return{todoContent:"",todoType:"single",updateTodo:0,createPlaceHold:0,year:(new Date).getFullYear(),isAdmin:!1}},created:function(){var t=this;this.axios.get("/meta/isAdmin").then((function(e){return t.isAdmin=e.data.data}))},methods:{commitTodo:function(){var t=this;if(this.todoContent=this.todoContent.trim(),""===this.todoContent)alert("TODO不能为空");else if(/set (.+)/.test(this.todoContent)||/fun (.+)/.test(this.todoContent));else{var e=A(this.todoContent,this.todoType,this.$route.params.id);this.axios.post("/item/create",e).then((function(){return t.updateTodo+=1})),this.todoContent="",this.todoType="single","file"===e.itemType&&(this.createPlaceHold+=1)}},doLogout:function(){this.$store.commit("del_token"),yt.push({path:"/login"})},selectFile:function(){document.getElementById("file_selector").click()},uploadFile:function(){var t=this,e=document.getElementById("file_selector").files[0];if(e){var n="/file/upload",o=new FormData;o.append("myFile",e);var a="0";this.$route.params.id&&(a=this.$route.params.id),o.append("parent",a),console.log(a);var i={headers:{"Content-Type":"multipart/form-data"}};this.axios.post(n,o,i).then((function(){t.updateTodo+=1,console.log("Do Reload")}))}else alert("请先选择文件后再上传")},backUpData:function(){this.$router.push("/home/log/data")},updateLogs:function(){this.$router.push("/home/log/log")},gc:function(){this.axios.post("/admin/gc").then((function(){return alert("垃圾回收完毕")}))}}});function A(t,e,n){var o=t.split(" "),a={itemType:e};1===o.length?a.name=t:a.name=o[0],a.itemType=B(a.name,a.itemType),void 0!==n&&(a.parent=n);for(var i=1;i<o.length;i++)"-"!==o[i].charAt(0)?a.name+=" "+o[i]:"-dl"===o[i]&&i+1<o.length?(a.deadline=o[i+1],i++):"-wk"===o[i]?a.work=!0:"-re"===o[i]?a.repeatable=!0:"-sp"===o[i]&&i+1<o.length&&(a.specific=o[i+1],i++);return a}function B(t,e){return"single"!==e?e:F(t)?"file":L(t)?"note":"single"}function F(t){var e=t.lastIndexOf("."),n=t.substring(e+1),o=["zip","jpg","png","exe","rar"];return-1!==o.indexOf(n)&&-1!==t.indexOf("http")&&confirm("检测到链接类型为文件, 是否按照文件类型进行下载?")}function L(t){for(var e=["计划","规划","事项","分析","笔记"],n=0,o=e;n<o.length;n++){var a=o[n];if(-1!==t.indexOf(a))return confirm("检测到代办类型包含关键词, 是否按照便签类型进行创建?")}return!1}n("c5df");I.render=_,I.__scopeId="data-v-6c112626";var U=I,$=Object(o["F"])("data-v-53158b30");Object(o["s"])("data-v-53158b30");var P={id:"editControls",class:"span12",style:{"text-align":"center",padding:"5px"}},S={class:"btn-group"},H=Object(o["f"])("h"),N=Object(o["g"])("sup",null,"1",-1),E=Object(o["f"])("h"),M=Object(o["g"])("sup",null,"2",-1),q=Object(o["g"])("b",null,"Bold",-1),V=Object(o["g"])("em",null,"Italic",-1),K=Object(o["g"])("u",null,[Object(o["g"])("b",null,"U")],-1),R=Object(o["g"])("del",null,"abc",-1),G={id:"editor",class:"span12",style:{},contenteditable:"true"},J=Object(o["g"])("div",{id:"alert",class:"alert-none"},"保存成功",-1);Object(o["q"])();var z=$((function(t,e,n,a,i,c){var r=Object(o["w"])("item-list");return Object(o["p"])(),Object(o["d"])("div",null,[Object(o["g"])("div",P,[Object(o["g"])("div",S,[Object(o["g"])("a",{class:"btn",onClick:e[1]||(e[1]=function(t){return c.doAction("h1")}),href:"#"},[H,N]),Object(o["g"])("a",{class:"btn",onClick:e[2]||(e[2]=function(t){return c.doAction("h2")}),href:"#"},[E,M]),Object(o["g"])("a",{class:"btn",onClick:e[3]||(e[3]=function(t){return c.doAction("p")}),href:"#"},"p"),Object(o["g"])("a",{class:"btn",onClick:e[4]||(e[4]=function(t){return c.doAction("bold")}),href:"#"},[q]),Object(o["g"])("a",{class:"btn",onClick:e[5]||(e[5]=function(t){return c.doAction("italic")}),href:"#"},[V]),Object(o["g"])("a",{class:"btn",onClick:e[6]||(e[6]=function(t){return c.doAction("underline")}),href:"#"},[K]),Object(o["g"])("a",{class:"btn",onClick:e[7]||(e[7]=function(t){return c.doAction("strikeThrough")}),href:"#"},[R]),Object(o["g"])("a",{class:"btn",onClick:e[8]||(e[8]=function(t){return c.doAction("undo")}),href:"#"},"Undo"),Object(o["g"])("a",{class:"btn",onClick:e[9]||(e[9]=function(t){return c.doAction("redo")}),href:"#"},"Redo")])]),Object(o["g"])(r,{title:"正在进行","btn-name":"-",data:t.todo,done:!1,onCheckboxChange:c.finishTodoItem,onBtnClick:c.removeTodo},null,8,["data","onCheckboxChange","onBtnClick"]),Object(o["g"])("div",G,[Object(o["g"])("span",{innerHTML:t.content},null,8,["innerHTML"])]),Object(o["g"])(r,{title:"已经完成","btn-name":"-",data:t.done,done:!0,onCheckboxChange:c.resetTodoItem,onBtnClick:c.removeDone},null,8,["data","onCheckboxChange","onBtnClick"]),J])})),Y=(n("a9e3"),n("a434"),Object(o["F"])("data-v-5522cc60"));Object(o["s"])("data-v-5522cc60");var Z={key:0},Q={id:"todoCount"},W={id:"todoList",class:"demo-box"};Object(o["q"])();var X=Y((function(t,e,n,a,i,c){return n.data.length>0?(Object(o["p"])(),Object(o["d"])("div",Z,[Object(o["g"])("h2",null,[Object(o["f"])(Object(o["y"])(n.title),1),Object(o["g"])("span",Q,Object(o["y"])(n.data.length),1)]),Object(o["g"])("ol",W,[(Object(o["p"])(!0),Object(o["d"])(o["a"],null,Object(o["v"])(n.data,(function(t,e){return Object(o["p"])(),Object(o["d"])("li",{key:t.id,class:[n.done?"done":"",c.mapTypeToClass(t)],id:"li-active"},[Object(o["g"])("label",null,[Object(o["g"])("input",{type:"checkbox",onChange:function(t){return c.change(e)},checked:n.done},null,40,["onChange","checked"])]),Object(o["g"])("p",{onClick:function(e){return c.jumpTo(t.url)}},Object(o["y"])(c.mapName(t)),9,["onClick"]),Object(o["g"])("a",{onClick:function(t){return c.click(e)}},Object(o["y"])(n.btnName),9,["onClick"])],2)})),128))])])):Object(o["e"])("",!0)})),tt={name:"ItemList",props:{title:String,btnName:String,done:Boolean,data:Array},methods:{change:function(t){this.$emit("checkbox-change",t)},jumpTo:function(t){null!==t&&window.open(t)},click:function(t){this.$emit("btn-click",t)},mapTypeToClass:function(t){return t.repeatable?"repeatable":t.specific?"specific":t.urgent>0&&t.urgent<=4?"specific-"+t.urgent:"single"},mapName:function(t){var e=t.name;return"note"===t.item_type?e="【便签】"+t.name:"file"===t.item_type?e="【文件】"+t.name:null!==t.url&&(e="【链接】"+t.name),null!==t.deadline&&(e="【"+t.deadline.split(" ")[0]+"】"+e),t.work&&(e="【工作】"+e),t.specific&&(e="【"+et(t.specific)+"】"+e),e}}};function et(t){var e=["周一","周二","周三","周四","周五","周六","周日"];return e[t-1]}n("7fa9");tt.render=X,tt.__scopeId="data-v-5522cc60";var nt=tt,ot={name:"NoteComponent",components:{ItemList:nt},props:{updateTodo:Number,createPlaceHold:Number},data:function(){return{done:[],todo:[],old:[],content:"",lastContent:void 0,lastUpdateDate:(new Date).getDate()}},created:function(){var t=this;this.axios.post("/note/getAll",{id:this.$route.params.id}).then((function(e){t.todo=e.data.data.todo,t.done=e.data.data.done,t.old=e.data.data.old})),this.axios.post("/item/getTitle",{id:this.$route.params.id}).then((function(t){return document.title=t.data.data})),this.axios.post("/note/content",{id:this.$route.params.id}).then((function(e){return t.content=e.data.data})),document.onkeydown=this.save,setInterval((function(){var e=document.getElementById("editor").innerHTML;e!==t.lastContent&&(console.log(["autoSave",e]),t.lastContent=e,t.axios.post("note/update",{id:t.$route.params.id,content:e}))}),6e4)},methods:{finishTodoItem:function(t){var e=this;this.axios.post("/item/done",{id:this.todo[t].id,parent:this.$route.params.id}).then((function(n){e.done.unshift(e.todo[t]),e.todo=n.data.data}))},resetTodoItem:function(t){var e=this;this.axios.post("/item/undone",{id:this.done[t].id,parent:this.$route.params.id}).then((function(n){e.done.splice(t,1),e.todo=n.data.data}))},removeTodo:function(t){var e=this;this.axios.post("/item/remove",{id:this.todo[t].id,parent:this.$route.params.id}).then((function(){return e.todo.splice(t,1)}))},removeDone:function(t){var e=this;this.axios.post("/item/remove",{id:this.done[t].id,parent:this.$route.params.id}).then((function(){return e.done.splice(t,1)}))},save:function(t){(t.ctrlKey||t.metaKey)&&"s"===t.key&&(t.preventDefault(),this.axios.post("note/update",{id:this.$route.params.id,content:document.getElementById("editor").innerHTML}).then((function(){at(),setTimeout(it,500)})))},doAction:function(t){var e=["h1","h2","p"];-1!==e.indexOf(t)?document.execCommand("formatBlock",!1,"<"+t+">"):document.execCommand(t,!1,null)},checkUpdateStatus:function(){var t=this,e=(new Date).getDate();e!==this.lastUpdateDate&&(this.axios.post("/note/getAll",{id:this.$route.params.id}).then((function(e){t.todo=e.data.data.todo,t.done=e.data.data.done,t.old=e.data.data.old})),this.lastUpdateDate=e)}},watch:{updateTodo:function(){var t=this;this.axios.post("/note/getTodo",{id:this.$route.params.id}).then((function(e){return t.todo=e.data.data}))},createPlaceHold:function(){this.todo.unshift({id:1,name:"文件正在下载,请稍等...",item_type:"file",urgent:0,deadline:null,old:!1,repeatable:!1,specific:0,work:!1,url:"#"})}}};function at(){document.getElementById("alert").className="alert-show"}function it(){document.getElementById("alert").className="alert-none"}n("9070");ot.render=z,ot.__scopeId="data-v-53158b30";var ct=ot,rt=Object(o["F"])("data-v-4d1ddddb");Object(o["s"])("data-v-4d1ddddb");var dt=Object(o["g"])("p",{style:{margin:"auto","text-align":"center"}},"公共空间的文件在24小时后自动删除",-1);Object(o["q"])();var st=rt((function(t,e,n,a,i,c){var r=Object(o["w"])("item-list");return Object(o["p"])(),Object(o["d"])("div",null,[Object(o["g"])(r,{title:"公共空间","btn-name":"-",data:t.publicFiles,done:!1,onCheckboxChange:c.refresh,onBtnClick:c.remove},null,8,["data","onCheckboxChange","onBtnClick"]),dt])})),lt={name:"FileComponent",components:{ItemList:nt},props:{updateTodo:Number},data:function(){return{publicFiles:[]}},created:function(){var t=this;this.axios.post("/file/getAll").then((function(e){return t.publicFiles=e.data.data}))},methods:{refresh:function(){console.warn("刷新功能不可用")},remove:function(t){var e=this;this.axios.post("/item/remove",{id:this.publicFiles[t].id}).then((function(){return e.publicFiles.splice(t,1)}))}},watch:{updateTodo:function(){var t=this;this.axios.post("/file/getAll").then((function(e){return t.publicFiles=e.data.data}))}}};lt.render=st,lt.__scopeId="data-v-4d1ddddb";var ut=lt,pt=Object(o["F"])("data-v-2a591cda"),ht=pt((function(t,e,n,a,i,c){var r=Object(o["w"])("item-list");return Object(o["p"])(),Object(o["d"])("div",null,[Object(o["g"])(r,{title:"正在进行","btn-name":"↓",data:t.todo,done:!1,onCheckboxChange:c.finishTodoItem,onBtnClick:c.promotion},null,8,["data","onCheckboxChange","onBtnClick"]),Object(o["g"])(r,{title:"已经完成","btn-name":"-",data:t.done,done:!0,onCheckboxChange:c.resetTodoItem,onBtnClick:c.removeDone},null,8,["data","onCheckboxChange","onBtnClick"]),Object(o["g"])(r,{title:"长期任务","btn-name":"-",data:t.old,done:!1,onBtnClick:c.removeOld},null,8,["data","onBtnClick"])])})),ft={name:"TodoComponent",components:{ItemList:nt},props:{updateTodo:Number,createPlaceHold:Number},data:function(){return{done:[],todo:[],old:[],lastUpdateDate:(new Date).getDate()-1}},created:function(){this.reload()},methods:{reload:function(){var t=this;this.axios.post("/item/getAll").then((function(e){t.todo=e.data.data.todo,t.done=e.data.data.done,t.old=e.data.data.old}))},finishTodoItem:function(t){var e=this;this.axios.post("/item/done",{id:this.todo[t].id}).then((function(n){e.done.unshift(e.todo[t]),e.todo=n.data.data}))},resetTodoItem:function(t){var e=this;this.axios.post("/item/undone",{id:this.done[t].id}).then((function(n){e.done.splice(t,1),e.todo=n.data.data}))},removeDone:function(t){var e=this;this.axios.post("/item/remove",{id:this.done[t].id}).then((function(){return e.done.splice(t,1)}))},removeOld:function(t){var e=this;this.axios.post("/item/remove",{id:this.old[t].id}).then((function(){return e.old.splice(t,1)}))},promotion:function(t){var e=this;this.axios.post("/item/toOld",{id:this.todo[t].id}).then((function(){e.old.unshift(e.todo[t]),e.todo.splice(t,1)}))},checkUpdateStatus:function(){var t=(new Date).getDate();t!==this.lastUpdateDate&&(console.log("Update State!"),this.reload(),this.lastUpdateDate=t)}},mounted:function(){window.onfocus=this.checkUpdateStatus},watch:{updateTodo:function(){var t=this;this.axios.post("/item/getTodo").then((function(e){return t.todo=e.data.data}))},createPlaceHold:function(){this.todo.unshift({id:1,name:"文件正在下载,请稍等...",item_type:"file",urgent:0,deadline:null,old:!1,repeatable:!1,specific:0,work:!1,url:"#"})}}};ft.render=ht,ft.__scopeId="data-v-2a591cda";var bt=ft,mt=Object(o["F"])("data-v-1bab2f36"),gt=mt((function(t,e,n,a,i,c){return Object(o["p"])(),Object(o["d"])("div",null,[Object(o["g"])("h2",null,Object(o["y"])(t.title),1),Object(o["D"])(Object(o["g"])("textarea",{"onUpdate:modelValue":e[1]||(e[1]=function(e){return t.content=e}),id:"editor"},null,512),[[o["B"],t.content]])])})),Ot={name:"LogTypeComponent",data:function(){return{title:"",content:""}},created:function(){var t=this,e=this.$route.params.type;switch(e){case"data":this.title="用户数据";break;case"log":this.title="系统日志";break;default:console.warn("无效的类型"),this.title="数据"}document.title=this.title,this.axios.get("/log/"+e).then((function(e){return t.content=e.data.data}))}};n("6be0");Ot.render=gt,Ot.__scopeId="data-v-1bab2f36";var jt=Ot,vt=[{path:"/",redirect:"/home/todo"},{path:"/login",component:m},{path:"/home",component:U,children:[{path:"todo",component:bt},{path:"note/:id",component:ct},{path:"log/:type",component:jt},{path:"file",component:ut}]}],kt=Object(r["a"])({history:Object(r["b"])(),routes:vt}),yt=kt,Ct=n("5502"),Tt=Object(Ct["a"])({state:{token:""},mutations:{set_token:function(t,e){t.token=e,localStorage.token=e},del_token:function(t){t.token="",localStorage.removeItem("token")}},actions:{},modules:{}}),xt=n("bc3a"),wt=n.n(xt),Dt=n("2106"),_t=n.n(Dt);wt.a.defaults.baseURL="/api",wt.a.interceptors.request.use((function(t){return Tt.state.token&&(t.headers.common["Token"]=Tt.state.token),t}));var It=function(){};wt.a.interceptors.response.use((function(t){return t.data.success||(Tt.commit("del_token"),yt.push({path:"/login"}).then(It)),t})),localStorage.getItem("token")&&Tt.commit("set_token",localStorage.getItem("token")),yt.beforeEach((function(t,e,n){console.log(["In router beforeEach, Token = ",Tt.state.token]);var o=Tt.state.token;o||"/login"===t.path||(console.log("GOTO Login Page"),yt.push({path:"/login"}).then(It)),"/login"===t.path&&o&&(console.log("GOTO Home Page"),yt.push({path:"/home/todo"}).then(It)),n()})),Object(o["c"])(c).use(Tt).use(yt).use(_t.a,wt.a).mount("#app")},"60ae":function(t,e,n){},"6be0":function(t,e,n){"use strict";n("e2d0")},"7fa9":function(t,e,n){"use strict";n("2a5a")},9070:function(t,e,n){"use strict";n("a2cf")},a2cf:function(t,e,n){},c5df:function(t,e,n){"use strict";n("60ae")},e150:function(t,e,n){"use strict";n("1660")},e2d0:function(t,e,n){}});
//# sourceMappingURL=app.3868af30.js.map