(function(t){function e(e){for(var n,s,r=e[0],c=e[1],l=e[2],u=0,p=[];u<r.length;u++)s=r[u],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&p.push(a[s][0]),a[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),o()}function o(){for(var t,e=0;e<i.length;e++){for(var o=i[e],n=!0,r=1;r<o.length;r++){var c=o[r];0!==a[c]&&(n=!1)}n&&(i.splice(e--,1),t=s(s.s=o[0]))}return t}var n={},a={app:0},i=[];function s(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=t,s.c=n,s.d=function(t,e,o){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(o,n,function(e){return t[e]}.bind(null,n));return o},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var d=c;i.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";o("85ec")},"16ca":function(t,e,o){},"39b8":function(t,e,o){},4632:function(t,e,o){"use strict";o("f113")},"4a94":function(t,e,o){"use strict";o("39b8")},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("router-view")},i=[],s={name:"App",components:{}},r=s,c=(o("034f"),o("2877")),l=Object(c["a"])(r,a,i,!1,null,null,null),d=l.exports,u=o("bc3a"),p=o.n(u),m=o("8c4f"),h=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"wrapper"},[o("div",{staticClass:"container"},[o("h1",[t._v("基于时空大数据的时间管理工具")]),o("form",{staticClass:"form",attrs:{onsubmit:"return false;"}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],attrs:{type:"text",placeholder:"Username",name:"username",id:"username"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",placeholder:"Password",name:"password",id:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),o("button",{attrs:{type:"submit",id:"login-button"},on:{click:t.submit}},[t._v("Login")])])]),t._m(0)])])},f=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ul",{staticClass:"bg-bubbles"},[o("li"),o("li"),o("li"),o("li"),o("li"),o("li"),o("li"),o("li"),o("li"),o("li")])}],v={name:"Login.vue",data:function(){return{username:"",password:""}},methods:{submit:function(){var t=this;this.$axios({method:"post",url:"/login",data:{username:this.username,password:this.password}}).then((function(e){if(console.log(e),e.data.success){var o=e.data.data;t.$store.commit("set_token",o),t.$router.push("/home/todo")}}))}}},g=v,b=(o("8419"),Object(c["a"])(g,h,f,!1,null,"668ac1c0",null)),_=b.exports,y=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"header"},[o("div",{staticClass:"box"},[o("div",{attrs:{id:"form"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.commitTodo(e)}}},[o("label",{attrs:{for:"title"}},[t._v("ToDoList")]),o("div",{staticStyle:{float:"right",width:"60%"}},[o("label",{attrs:{for:"itemType"}}),o("select",{directives:[{name:"model",rawName:"v-model",value:t.todoType,expression:"todoType"}],attrs:{id:"itemType"},on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.todoType=e.target.multiple?o:o[0]}}},[o("option",{attrs:{value:"single"}},[t._v("创建待办")]),o("option",{attrs:{value:"file"}},[t._v("下载文件")]),o("option",{attrs:{value:"note"}},[t._v("创建便签")])]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.todoContent,expression:"todoContent"}],attrs:{type:"text",id:"title",placeholder:"添加ToDo",autocomplete:"off"},domProps:{value:t.todoContent},on:{input:function(e){e.target.composing||(t.todoContent=e.target.value)}}})])])])]),o("router-view",{staticClass:"container",attrs:{updateTodo:t.updateTodo}}),o("div",{staticClass:"footer",attrs:{id:"footerContainer"}},[t._v(" Copyright © "+t._s(t.year)+" LiZeC ")]),o("div",{staticClass:"footer",attrs:{id:"footerFunctionContainer"}},[o("a",{on:{click:t.selectFile}},[t._v("上传文件")]),o("a",{on:{click:t.downCenter}},[t._v("文件中心")]),o("a",{on:{click:t.doLogout}},[t._v("退出登录")])]),o("input",{staticStyle:{display:"none"},attrs:{type:"file",id:"file_selector"},on:{change:t.uploadFile}})],1)},k=[],x=(o("498a"),o("1276"),o("ac1f"),o("b0c0"),{name:"Main",data:function(){return{todoContent:"",todoType:"single",updateTodo:0,year:(new Date).getFullYear(),isAdmin:!1}},created:function(){},methods:{commitTodo:function(){var t=this;""===this.todoContent.trim()?alert("TODO不能为空"):/set (.+)/.test(this.todoContent)||/fun (.+)/.test(this.todoContent)||(this.$axios.post("/item/create",T(this.todoContent,this.todoType,this.$route.params.id)).then((function(){return t.updateTodo+=1})),this.todoContent="")},doLogout:function(){this.$store.commit("del_token"),st.push({path:"/login"}).then((function(){}))},selectFile:function(){document.getElementById("file_selector").click()},uploadFile:function(){var t=this,e=document.getElementById("file_selector").files[0];if(e){var o="/file/upload",n=new FormData;n.append("myFile",e);var a={headers:{"Content-Type":"multipart/form-data"}};this.$axios.post(o,n,a).then((function(){t.updateTodo+=1,console.log("Do Reload")}))}else alert("请先选择文件后再上传")},downCenter:function(){window.location="file"}}});function T(t,e,o){var n=t.split(" "),a={itemType:e};1===n.length?a.name=t:a.name=n[0],void 0!==o&&(a.parent=o);for(var i=1;i<n.length;i++)"-"!==n[i].charAt(0)?a.name+=" "+n[i]:"-dl"===n[i]&&i+1<n.length?(a.deadline=n[i+1],i++):"-wk"===n[i]?a.work=!0:"-re"===n[i]?a.repeatable=!0:"-sp"===n[i]&&i+1<n.length&&(a.specific=n[i+1],i++);return console.log(["Commit Data",a]),a}var C=x,w=(o("8cef"),Object(c["a"])(C,y,k,!1,null,"7ca28d44",null)),$=w.exports,O=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t._m(0),o("item-list",{attrs:{title:"正在进行","btn-name":"-",data:t.todo,done:!1},on:{"checkbox-change":t.finishTodoItem,"btn-click":t.removeTodo}}),o("div",{staticClass:"span12",attrs:{id:"editor",contenteditable:"true"}},[o("span",{domProps:{innerHTML:t._s(t.content)}})]),o("item-list",{attrs:{title:"已经完成","btn-name":"-",data:t.done,done:!0},on:{"checkbox-change":t.resetTodoItem,"btn-click":t.removeDone}}),o("div",{staticClass:"alert-none",attrs:{id:"alert"}},[t._v("保存成功")])],1)},I=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"span12",staticStyle:{"text-align":"center",padding:"5px"},attrs:{id:"editControls"}},[o("div",{staticClass:"btn-group"},[o("a",{staticClass:"btn",attrs:{"data-role":"h1",href:"#"}},[t._v("h"),o("sup",[t._v("1")])]),o("a",{staticClass:"btn",attrs:{"data-role":"h2",href:"#"}},[t._v("h"),o("sup",[t._v("2")])]),o("a",{staticClass:"btn",attrs:{"data-role":"p",href:"#"}},[t._v("p")]),o("a",{staticClass:"btn",attrs:{"data-role":"bold",href:"#"}},[o("b",[t._v("Bold")])]),o("a",{staticClass:"btn",attrs:{"data-role":"italic",href:"#"}},[o("em",[t._v("Italic")])]),o("a",{staticClass:"btn",attrs:{"data-role":"underline",href:"#"}},[o("u",[o("b",[t._v("U")])])]),o("a",{staticClass:"btn",attrs:{"data-role":"strikeThrough",href:"#"}},[o("del",[t._v("abc")])]),o("a",{staticClass:"btn",attrs:{"data-role":"undo",href:"#"}},[t._v("Undo")]),o("a",{staticClass:"btn",attrs:{"data-role":"redo",href:"#"}},[t._v("Redo")])])])}],j=(o("a9e3"),o("a434"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.data.length>0?o("div",[o("h2",[t._v(t._s(t.title)),o("span",{attrs:{id:"todoCount"}},[t._v(" "+t._s(t.data.length))])]),o("ol",{staticClass:"demo-box",attrs:{id:"todoList"}},t._l(t.data,(function(e,n){return o("li",{key:e.id,class:[t.done?"done":"",t.mapTypeToClass(e)],attrs:{id:"li-active"}},[o("label",[o("input",{attrs:{type:"checkbox"},domProps:{checked:t.done},on:{change:function(e){return t.change(n)}}})]),o("p",{on:{click:function(o){return t.jumpTo(e.url)}}},[t._v(t._s(t.mapName(e)))]),o("a",{on:{click:function(e){return t.click(n)}}},[t._v(t._s(t.btnName))])])})),0)]):t._e()}),E=[],L={name:"ItemList",props:{title:String,btnName:String,done:Boolean,data:Array},methods:{change:function(t){this.$emit("checkbox-change",t)},jumpTo:function(t){null!==t&&(t.indexOf("http")?window.open(t):this.$router.push({path:"/home/"+t}))},click:function(t){this.$emit("btn-click",t)},mapTypeToClass:function(t){return t.repeatable?"repeatable":t.specific?"specific":t.urgent>0&&t.urgent<=4?"specific-"+t.urgent:"single"},mapName:function(t){var e=t.name;return"note"===t.item_type?e="【便签】"+t.name:"file"===t.item_type?e="【文件】"+t.name:null!==t.url&&(e="【链接】"+t.name),null!==t.deadline&&(e="【"+t.deadline.split(" ")[0]+"】"+e),t.work&&(e="【工作】"+e),t.specific&&(e="【"+S(t.specific)+"】"+e),e}}};function S(t){var e=["周一","周二","周三","周四","周五","周六","周日"];return e[t-1]}var P=L,F=(o("4632"),Object(c["a"])(P,j,E,!1,null,"027fe6e6",null)),N=F.exports,D={name:"NoteComponent",components:{ItemList:N},props:{updateTodo:Number},data:function(){return{done:[],todo:[],old:[],content:"",lastContent:void 0}},created:function(){var t=this;this.$axios.post("/note/getAll",{id:this.$route.params.id}).then((function(e){t.todo=e.data.data.todo,t.done=e.data.data.done,t.old=e.data.data.old})),this.$axios.post("/note/content",{id:this.$route.params.id}).then((function(e){return t.content=e.data.data})),document.onkeydown=this.save,setInterval((function(){var e=document.getElementById("editor").innerHTML;e!==t.lastContent&&(console.log(["autoSave",e]),t.lastContent=e,t.$axios.post("note/update",{id:t.$route.params.id,content:e}))}),6e4)},methods:{finishTodoItem:function(t){var e=this;this.$axios.post("/item/done",{id:this.todo[t].id,parent:this.$route.params.id}).then((function(o){e.done.unshift(e.todo[t]),e.todo=o.data.data}))},resetTodoItem:function(t){var e=this;this.$axios.post("/item/undone",{id:this.done[t].id,parent:this.$route.params.id}).then((function(o){e.done.splice(t,1),e.todo=o.data.data}))},removeTodo:function(t){var e=this;this.$axios.post("/item/remove",{id:this.todo[t].id,parent:this.$route.params.id}).then((function(){return e.todo.splice(t,1)}))},removeDone:function(t){var e=this;this.$axios.post("/item/remove",{id:this.done[t].id,parent:this.$route.params.id}).then((function(){return e.done.splice(t,1)}))},save:function(t){t.ctrlKey&&83===t.keyCode&&(t.preventDefault(),this.$axios.post("note/update",{id:this.$route.params.id,content:document.getElementById("editor").innerHTML}).then((function(){A(),setTimeout(B,500)})))}},watch:{updateTodo:function(){var t=this;this.$axios.post("/note/getTodo",{id:this.$route.params.id}).then((function(e){return t.todo=e.data.data}))}}};function A(){document.getElementById("alert").className="alert-show"}function B(){document.getElementById("alert").className="alert-none"}var M=D,H=(o("4a94"),Object(c["a"])(M,O,I,!1,null,"68f69f37",null)),U=H.exports,R=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("item-list",{attrs:{title:"公共空间","btn-name":"-",data:t.publicFiles,done:!1},on:{"checkbox-change":t.refresh,"btn-click":t.remove}}),o("p",{staticStyle:{margin:"auto","text-align":"center"}},[t._v("公共空间的文件在24小时后自动删除")])],1)},G=[],J={name:"FileComponent",components:{ItemList:N},props:{updateTodo:Number},data:function(){return{publicFiles:[]}},created:function(){var t=this;this.$axios.post("/file/getAll").then((function(e){return t.publicFiles=e.data.data}))},methods:{refresh:function(){console.warn("刷新功能不可用")},remove:function(t){var e=this;this.$axios.post("/item/remove",{id:this.publicFiles[t].id}).then((function(){return e.publicFiles.splice(t,1)}))}},watch:{updateTodo:function(){var t=this;this.$axios.post("/file/getAll").then((function(e){return t.publicFiles=e.data.data}))}}},q=J,K=Object(c["a"])(q,R,G,!1,null,"c5aa0a4e",null),Y=K.exports,Z=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("item-list",{attrs:{title:"正在进行","btn-name":"↓",data:t.todo,done:!1},on:{"checkbox-change":t.finishTodoItem,"btn-click":t.promotion}}),o("item-list",{attrs:{title:"已经完成","btn-name":"-",data:t.done,done:!0},on:{"checkbox-change":t.resetTodoItem,"btn-click":t.removeDone}}),o("item-list",{attrs:{title:"长期任务","btn-name":"-",data:t.old,done:!1},on:{"btn-click":t.removeOld}})],1)},z=[],Q={name:"TodoComponent",components:{ItemList:N},props:{updateTodo:Number},data:function(){return{done:[],todo:[],old:[]}},created:function(){var t=this;this.$axios.post("/item/getAll").then((function(e){t.todo=e.data.data.todo,t.done=e.data.data.done,t.old=e.data.data.old}))},methods:{finishTodoItem:function(t){var e=this;this.$axios.post("/item/done",{id:this.todo[t].id}).then((function(o){e.done.unshift(e.todo[t]),e.todo=o.data.data}))},resetTodoItem:function(t){var e=this;this.$axios.post("/item/undone",{id:this.done[t].id}).then((function(o){e.done.splice(t,1),e.todo=o.data.data}))},removeDone:function(t){var e=this;this.$axios.post("/item/remove",{id:this.done[t].id}).then((function(){return e.done.splice(t,1)}))},removeOld:function(t){var e=this;this.$axios.post("/item/remove",{id:this.old[t].id}).then((function(){return e.old.splice(t,1)}))},promotion:function(t){var e=this;this.$axios.post("/item/toOld",{id:this.todo[t].id}).then((function(){e.todo.splice(t,1),e.old.unshift(e.todo[t])}))}},watch:{updateTodo:function(){var t=this;this.$axios.post("/item/getTodo").then((function(e){return t.todo=e.data.data}))}}},V=Q,W=Object(c["a"])(V,Z,z,!1,null,"aa70b448",null),X=W.exports,tt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("h2",[t._v(t._s(t.title))]),o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],attrs:{id:"editor"},domProps:{value:t.content},on:{input:function(e){e.target.composing||(t.content=e.target.value)}}})])},et=[],ot={name:"LogTypeComponent",data:function(){return{title:"",content:""}},created:function(){var t=this,e=this.$route.params.type;switch(e){case"data":this.title="用户数据";break;case"log":this.title="系统日志";break;default:console.warn("无效的类型"),this.title="数据"}this.$axios.get("/log/"+e).then((function(e){return t.content=e.data.data}))}},nt=ot,at=(o("6797"),Object(c["a"])(nt,tt,et,!1,null,"56fb7cfe",null)),it=at.exports;n["a"].use(m["a"]);var st=new m["a"]({mode:"history",routes:[{path:"/",redirect:"/home/todo"},{path:"/login",component:_},{path:"/home",component:$,children:[{path:"todo",component:X},{path:"note/:id",component:U},{path:"log/:type",component:it},{path:"file",component:Y}]}]}),rt=o("2f62");n["a"].use(rt["a"]);var ct=new rt["a"].Store({state:{token:""},mutations:{set_token:function(t,e){t.token=e,localStorage.token=e},del_token:function(t){t.token="",localStorage.removeItem("token")}}});n["a"].config.productionTip=!1,n["a"].prototype.$axios=p.a,p.a.defaults.baseURL="/api",p.a.interceptors.request.use((function(t){return ct.state.token&&(t.headers.common["Token"]=ct.state.token),t})),p.a.interceptors.response.use((function(t){if(t.data.success)return t;ct.commit("del_token"),st.push({path:"/login"}).then((function(){}))})),localStorage.getItem("token")&&ct.commit("set_token",localStorage.getItem("token")),st.beforeEach((function(t,e,o){console.log(["In router beforeEach, Token = ",ct.state.token]);var n=ct.state.token;n||"/login"===t.path||(console.log("GOTO Login Page"),st.push({path:"/login"}).then((function(){}))),"/login"===t.path&&n&&(console.log("GOTO Home Page"),st.push({path:"/home/todo"}).then((function(){}))),o()})),new n["a"]({render:function(t){return t(d)},router:st,store:ct}).$mount("#app")},6285:function(t,e,o){},6797:function(t,e,o){"use strict";o("16ca")},8419:function(t,e,o){"use strict";o("6285")},"85ec":function(t,e,o){},"8cef":function(t,e,o){"use strict";o("9c8c")},"9c8c":function(t,e,o){},f113:function(t,e,o){}});
//# sourceMappingURL=app.70f78159.js.map