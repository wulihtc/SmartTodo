<template>
  <div>
    <!-- 主体：文本编辑器控制按钮 -->
    <div id='editControls' style='text-align:center; padding:5px;'>
      <div class='btn-group'>
        <a class='btn' @click="doAction('h1')" href='#'>h<sup>1</sup></a>
        <a class='btn' @click="doAction('h2')" href='#'>h<sup>2</sup></a>
        <a class='btn' @click="doAction('p')" href='#'>p</a>
        <a class='btn' @click="doAction('bold')" href='#'><b>Bold</b></a>
        <a class='btn' @click="doAction('italic')" href='#'><em>Italic</em></a>
        <a class='btn' @click="doAction('underline')" href='#'><u><b>U</b></u></a>
        <a class='btn' @click="doAction('strikeThrough')" href='#'>
          <del>abc</del>
        </a>
        <a class='btn' @click="doAction('undo')" href='#'>Undo</a>
        <a class='btn' @click="doAction('redo')" href='#'>Redo</a>
      </div>
    </div>

    <item-list title="正在进行" btn-name="-" :data="todo" :done="false" @checkbox-change="finishTodoItem"
               @btn-click="removeTodo"></item-list>

    <!-- 主体：文本编辑器 -->
    <div id='editor' contenteditable="true" @keydown.tab="tab" @input="updateContent" v-html="initContent"></div>


    <item-list title="已经完成" btn-name="-" :data="done" :done="true" @checkbox-change="resetTodoItem"
               @btn-click="removeDone"></item-list>


    <!-- 弹出的提示框, 指示是否保存成功 -->
    <div id="alert" class="alert-none">保存成功</div>

  </div>


</template>

<script>

import ItemList from "@/components/list/ItemList";

export default {
  name: "NoteComponent",
  components: {ItemList},
  props: {
    updateTodo: Number,
    createPlaceHold: Number
  },
  data: function () {
    return {
      done: [],
      todo: [],
      old: [],
      initContent: "",
      contentUpdated: false,  // 指示前端是否修改了content内容
      lastUpdateDate: new Date().getDate()
    }
  },
  created() {
    this.reload()
  },
  mounted() {
    //绑定保存按键
    document.onkeydown = this.save;

    // 获得焦点后自动更新一次
    window.onfocus = this.checkUpdateStatus

    // 设置自动保存
    setInterval(this.autoSave, 60 * 1000);

    // 关闭页面时如果未保存则执行保存操作
    window.onbeforeunload = this.checkUnsaved;
  },
  methods: {
    reload: function () {
      // 获取Note私有的Item列表
      this.reloadItem()

      // 获取Note的标题并设置为页面的标题
      this.axios.post("/item/getTitle", {"id": this.$route.params.id}).then(res => document.title = res.data.data);
      // 获取note的正文
      this.axios.post("/note/content", {"id": this.$route.params.id})
          .then(res => {
            this.initContent = res.data.data
          });
    },
    reloadItem: function () {
      this.axios.post("/note/getAll", {"id": this.$route.params.id}).then(res => {
        this.todo = res.data.data.todo
        this.done = res.data.data.done
        this.old = res.data.data.old
      });
    },
    finishTodoItem: function (index) {
      this.axios.post("/item/done", {
        "id": this.todo[index].id,
        "parent": this.$route.params.id
      }).then(res => {
        this.done.unshift(this.todo[index]);
        this.todo = res.data.data;
      });
    },
    resetTodoItem: function (index) {
      this.axios.post("/item/undone", {
        "id": this.done[index].id,
        "parent": this.$route.params.id
      }).then(res => {
        this.done.splice(index, 1);
        this.todo = res.data.data;
      });
    },
    removeTodo: function (index) {
      this.axios.post("/item/remove", {
        "id": this.todo[index].id,
        "parent": this.$route.params.id
      }).then(() => this.todo.splice(index, 1));
    },
    removeDone: function (index) {
      this.axios.post("/item/remove", {
        "id": this.done[index].id,
        "parent": this.$route.params.id
      }).then(() => this.done.splice(index, 1));
    },
    updateContent: function () {
      this.contentUpdated = true
    },
    save: function (e) {
      // Ctrl + S
      if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        e.preventDefault();

        this.axios.post("note/update", {
          "id": this.$route.params.id,
          "content": document.getElementById("editor").innerHTML
        }).then(() => {
          this.contentUpdated = false
          showAlert();
          setTimeout(hideAlert, 500);
        });
      }
    },
    autoSave: function () {
      if (this.contentUpdated) {
        console.log("autoSave")
        this.axios.post("note/update", {
          "id": this.$route.params.id,
          "content": document.getElementById("editor").innerHTML
        }).then(() => this.contentUpdated = false)
      }
    },
    checkUnsaved: function (e) {
      e.preventDefault();
      if (this.contentUpdated) {
        // 虽然设置文本并没有用, 但必须设置了才会出现弹窗
        e.returnValue = "自定义文本";
      }
    },
    doAction: function (role) {
      const baseAction = ['h1', 'h2', 'p'];

      if (baseAction.indexOf(role) !== -1) {
        document.execCommand('formatBlock', false, '<' + role + '>');
      } else {
        document.execCommand(role, false, null);
      }
    },
    checkUpdateStatus: function () {
      const today = new Date().getDate();
      if (today !== this.lastUpdateDate) {
        console.log("Update State!")
        this.reloadItem();
        this.lastUpdateDate = today;
      }
    },
    tab: function (event) {
      // 阻止默认切换元素的行为
      if (event && event.preventDefault) {
        event.preventDefault()
      } else {
        window.event.returnValue = false
      }
      // 获取光标的range对象 event.view 是一个window对象
      let range = event.view.getSelection().getRangeAt(0);
      // 光标的偏移位置
      let offset = range.startOffset;
      // 新建一个span元素
      let span = document.createElement('span');
      // 四个 表示四个空格
      span.innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp;';
      // 创建一个新的range对象
      let newRange = document.createRange();
      // 设置新的range的位置，也是插入元素的位置
      newRange.setStart(range.startContainer, offset);
      newRange.setEnd(range.startContainer, offset);
      newRange.collapse(true);
      newRange.insertNode(span);
      // 去掉旧的range对象，用新的range对象替换
      event.view.getSelection().removeAllRanges();
      event.view.getSelection().addRange(range);
      // 将光标的位置向后移动一个偏移量，放到加入的四个空格后面
      range.setStart(span, 1);
      range.setEnd(span, 1);
    }
  },
  watch: {
    "updateTodo": function () {
      this.axios.post("/note/getTodo", {"id": this.$route.params.id})
          .then(res => this.todo = res.data.data);
    },
    "createPlaceHold": function () {
      this.todo.unshift({
        "id": 1,
        "name": "文件正在下载,请稍等...",
        "item_type": "file",
        "urgent": 0,
        "deadline": null,
        "old": false,
        "repeatable": false,
        "specific": 0,
        "work": false,
        "url": "#",
      })
    }
  }
}

function showAlert() {
  document.getElementById("alert").className = 'alert-show';
}

function hideAlert() {
  document.getElementById("alert").className = 'alert-none';
}


</script>

<style scoped>
.btn-group > a {
  position: relative;
  display: inline-flex;
  vertical-align: middle;
  margin-left: 8px;
}

.btn-group > .btn {
  position: relative;
  flex: 1 1 auto;
}

#editor {
  resize: vertical;
  overflow: auto;
  border: 1px solid silver;
  border-radius: 5px;
  min-height: 100px;
  box-shadow: inset 0 0 10px silver;
  padding: 1em;
}


.alert-none {
  display: none;
}

.alert-show {
  position: fixed;
  top: 50%;
  left: 50%;
  margin-left: -57px;
  padding: 8px 24px 8px 24px;
  color: #3c763d;
  background-color: #dff0d8;
  border: 1px solid transparent;
  border-radius: 4px;
}
</style>