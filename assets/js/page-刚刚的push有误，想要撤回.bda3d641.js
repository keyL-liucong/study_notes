(window.webpackJsonp=window.webpackJsonp||[]).push([[151],{692:function(t,i,s){"use strict";s.r(i);var v=s(1),_=Object(v.a)({},(function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"刚刚的-push-有误-想要撤回"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#刚刚的-push-有误-想要撤回"}},[t._v("#")]),t._v(" 刚刚的 push 有误，想要撤回")]),t._v(" "),s("h2",{attrs:{id:"问题描述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问题描述"}},[t._v("#")]),t._v(" 问题描述")]),t._v(" "),s("p",[t._v("出于某种原因，不小心把错误的或者不完整的代码 commit 并且 push 到了远程，可能会影响到远程上代码的正确性。")]),t._v(" "),s("p",[t._v("Git 提供了撤回远程代码的方法。")]),t._v(" "),s("h2",{attrs:{id:"解决方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决方案"}},[t._v("#")]),t._v(" 解决方案")]),t._v(" "),s("p",[t._v("按下面的步骤进行：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("git log")]),t._v(" 查看提交记录，找到"),s("strong",[t._v("需要撤回到的提交 id")]),t._v("（即有问题的那次提交的上一个 commit）。")]),t._v(" "),s("li",[s("code",[t._v("git reset --soft [commit-id]")]),t._v(" 或者 "),s("code",[t._v("git reset --hard [commit-id]")]),t._v("，id 为需要回退到的 commit-id。")]),t._v(" "),s("li",[s("code",[t._v("git push origin [本地当前分支名] --force")]),t._v("，强制提交当前版本号")])]),t._v(" "),s("p",[t._v("这个时候查看本地和远程的 log，发现有错误的那次记录已经查不到了，表示撤销成功了。")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),s("p",[t._v("--hard 会丢弃本地修改，请谨慎使用。")]),t._v(" "),s("ul",[s("li",[t._v("--soft 撤销 commit，保留工作区的代码变更，不会撤销 git add")]),t._v(" "),s("li",[t._v("--mixed 撤销 commit，保留工作区的代码变更，撤销 git add")]),t._v(" "),s("li",[t._v("--hard 撤销 commit，删除工作区的代码变更，撤销 git add")])])]),t._v(" "),s("p",[t._v("（完）")])])}),[],!1,null,null,null);i.default=_.exports}}]);