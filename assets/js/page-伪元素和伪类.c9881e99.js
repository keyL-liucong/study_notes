(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{760:function(t,s,a){"use strict";a.r(s);var e=a(1),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"伪元素和伪类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#伪元素和伪类"}},[t._v("#")]),t._v(" 伪元素和伪类")]),t._v(" "),a("h2",{attrs:{id:"伪元素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#伪元素"}},[t._v("#")]),t._v(" 伪元素")]),t._v(" "),a("h3",{attrs:{id:"伪元素写法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#伪元素写法"}},[t._v("#")]),t._v(" 伪元素写法")]),t._v(" "),a("p",[t._v("有时候我们想选择的页面区域不是通过元素来表示的（比如想选择一段话的第一个字），而我们也不想为此给页面添加额外的标记。CSS 为这种情况提供了一些特殊选择符，叫作伪元素。")]),t._v(" "),a("p",[t._v("伪元素是一个附加至选择符末的关键词，允许你对被选择元素的特定部分修改样式。")]),t._v(" "),a("p",[t._v("常用的伪元素如下表所示：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("属性")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("::first-letter")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("选择一段文本的第一个字符添加特殊样式。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("::first-line")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("选择一段文本的第一行添加特殊样式。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("::before")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("在元素之前添加内容。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("::after")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("在元素之后添加内容。")])])])]),t._v(" "),a("h3",{attrs:{id:"伪元素应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#伪元素应用"}},[t._v("#")]),t._v(" 伪元素应用")]),t._v(" "),a("p",[t._v("通过 "),a("code",[t._v("content")]),t._v(" 属性，在文本前插入一个引号。")]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".chapter::before")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\" '")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 15em"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("h3",{attrs:{id:"伪元素注意事项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#伪元素注意事项"}},[t._v("#")]),t._v(" 伪元素注意事项")]),t._v(" "),a("ul",[a("li",[t._v("为了与伪类区分开来，伪元素应该使用双冒号语法（尽管浏览器也兼容但冒号写法）。")])]),t._v(" "),a("h2",{attrs:{id:"伪类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#伪类"}},[t._v("#")]),t._v(" 伪类")]),t._v(" "),a("p",[t._v("伪类选择符的语法是以有一个冒号开头，用于选择元素的特定状态或关系。")]),t._v(" "),a("h3",{attrs:{id:"状态伪类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#状态伪类"}},[t._v("#")]),t._v(" 状态伪类")]),t._v(" "),a("p",[t._v("有时候，我们想基于文档结构以外的情形来为页面添加样式，比如基于超链接或表单元素的状态。这时候就可以使用伪类选择符。")]),t._v(" "),a("p",[t._v("一些最常见的用于超链接的伪类列举如下：")]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 未访问过的链接为蓝色 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("a:link")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" blue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 访问过的链接为绿色 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("a:visited")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" green"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 链接在鼠标悬停及获取键盘焦点时为红色 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("a:hover,\na:focus")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" red"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 活动状态时为紫色 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("a:active")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" purple"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br")])]),a("p",[t._v("以上伪类的先后次序很重要，应该始终满足正确的顺序：爱恨原则（lvha）—— 因爱（love）生恨（hate）。")]),t._v(" "),a("blockquote",[a("p",[t._v(":link、:visited、:hover、:focus 和 :active")])]),t._v(" "),a("h3",{attrs:{id:"目标伪类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#目标伪类"}},[t._v("#")]),t._v(" 目标伪类")]),t._v(" "),a("p",[t._v("目标伪类 "),a("code",[t._v(":target")]),t._v("，它匹配的元素有一个 ID 属性，而且该属性的值出现在当前页面 URL 末尾的井号（#）后边。"),a("a",{attrs:{href:"https://www.w3school.com.cn/tiy/t.asp?f=css_sel_target",target:"_blank",rel:"noopener noreferrer"}},[t._v("最常见的应用"),a("OutboundLink")],1),t._v("就是页面锚点跳转后，给当前选中的元素增加样式。")]),t._v(" "),a("h3",{attrs:{id:"反选伪类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#反选伪类"}},[t._v("#")]),t._v(" 反选伪类")]),t._v(" "),a("p",[t._v("反选伪类 "),a("code",[t._v(":not()")]),t._v("，专门用于排除某些选择符，可以配合各种放到括号中的选择符使用，不过伪元素和它自身除外。")]),t._v(" "),a("p",[t._v("实例：")]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 选择所有不是段落（p）的元素 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(":not(p)")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" blue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("h3",{attrs:{id:"结构化伪类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#结构化伪类"}},[t._v("#")]),t._v(" 结构化伪类")]),t._v(" "),a("p",[t._v("CSS3 新增了一大批与文档结构有关的新伪类。其中最常见的是 "),a("code",[t._v("nth-child")]),t._v(" 选择符，可以用来交替地为表格行应用样式。")]),t._v(" "),a("p",[t._v("考虑到现在手写表格的情况不多，就不展开描述了。"),a("a",{attrs:{href:"https://www.w3school.com.cn/cssref/selector_nth-child.asp",target:"_blank",rel:"noopener noreferrer"}},[t._v("详情点击此处"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"表单伪类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#表单伪类"}},[t._v("#")]),t._v(" 表单伪类")]),t._v(" "),a("p",[t._v("还有很多伪类专门用于选择表单元素。这些伪类根据用户与表单控件交互的方式，来反映表单控件的某种状态。")]),t._v(" "),a("p",[t._v("UI 库泛滥的今天，我们很少在实际业务中手动写这些样式，所以也不展开多讲。"),a("a",{attrs:{href:"https://www.runoob.com/css/css-pseudo-classes.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("详情点击此处"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#区别"}},[t._v("#")]),t._v(" 区别")]),t._v(" "),a("ul",[a("li",[t._v("伪元素创建一个文档树以外的元素，而伪类的操作对象是文档树中已有的元素。")]),t._v(" "),a("li",[t._v("CSS3 规范中要求使用双冒号("),a("code",[t._v("::")]),t._v(") 表示伪元素，单冒号("),a("code",[t._v(":")]),t._v(") 表示伪类。")])]),t._v(" "),a("h2",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),a("ul",[a("li",[t._v("《精通CSS 高级Web标准解决方案（第3版）》")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-elements",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN 伪元素"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-classes",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN 伪类"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.runoob.com/css/css-pseudo-classes.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("菜鸟教程伪类"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("（完）")])])}),[],!1,null,null,null);s.default=n.exports}}]);