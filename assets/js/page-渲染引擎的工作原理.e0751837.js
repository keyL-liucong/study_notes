(window.webpackJsonp=window.webpackJsonp||[]).push([[219],{540:function(t,s,a){t.exports=a.p+"assets/img/simple-rendering-process.f900ff31.png"},541:function(t,s,a){t.exports=a.p+"assets/img/complete-rendering-process.5a9f2c0c.png"},749:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"渲染引擎的工作原理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#渲染引擎的工作原理"}},[t._v("#")]),t._v(" 渲染引擎的工作原理")]),t._v(" "),n("p",[t._v("这个系列的第一篇文章中对「"),n("RouterLink",{attrs:{to:"/frontend-knowledge/browser/browser-macro-knowledge/#导航流程-输入-url-到页面展示"}},[t._v("浏览器从输入 URL 到页面展示")]),t._v("」的整个流程做了小结，但其实最后一步在获得到 HTML、CSS 和 JavaScript 文件后，对渲染进程做的工作只是简单概括了一下，这里单独写一篇作为细节扩充。")],1),t._v(" "),n("h2",{attrs:{id:"html、css-和-javascript-是如何变成页面的"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#html、css-和-javascript-是如何变成页面的"}},[t._v("#")]),t._v(" HTML、CSS 和 JavaScript 是如何变成页面的")]),t._v(" "),n("p",[t._v("渲染引擎的工作过程相当复杂，所以渲染模块在执行过程中会被划分为很多子阶段，输入的 HTML 经过这些子阶段，最后输出像素。其大致流程如下图所示：")]),t._v(" "),n("div",{staticStyle:{"text-align":"center"}},[n("img",{staticStyle:{width:"600px"},attrs:{src:a(540),alt:"简单的渲染流程示意图"}}),t._v(" "),n("p",{staticStyle:{"text-align":"center",color:"#888"}},[t._v("（简单的渲染流程示意图，图来源于网络）")])]),t._v(" "),n("p",[t._v("按照渲染的时间顺序，整个渲染流程可分为如下几个子阶段：构建 DOM 树、样式计算、布局、分层、图层绘制、栅格化、合成和显示。为了方便记忆，每个子阶段都应该重点关注其"),n("strong",[t._v("输入的内容")]),t._v("，"),n("strong",[t._v("处理过程")]),t._v("，"),n("strong",[t._v("输出内容")]),t._v("。")]),t._v(" "),n("h3",{attrs:{id:"流程小结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#流程小结"}},[t._v("#")]),t._v(" 流程小结")]),t._v(" "),n("p",[t._v("大体的渲染流程还是"),n("strong",[t._v("复制之前一篇文章里归纳的 "),n("RouterLink",{attrs:{to:"/frontend-knowledge/browser/browser-macro-knowledge/#输入-url-到页面展示"}},[t._v("8 个步骤")])],1),t._v("，这里在每个步骤之下补充一些细节知识点：")]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("构建 DOM 树")]),t._v("：通过 HTML 解析器将 HTML 转换成 DOM 树。")]),t._v(" "),n("li",[n("strong",[t._v("样式计算")]),t._v("：渲染引擎将 CSS 文本转换为 styleSheets，计算出 DOM 节点的样式。\n"),n("ul",[n("li",[t._v("转成 styleSheets 后，会先进行属性值的标准化操作，再根据 CSS 的继承规则和层叠规则计算每个节点的具体样式。")])])]),t._v(" "),n("li",[n("strong",[t._v("布局")]),t._v("：创建布局树（只包含可见元素的树），并计算元素的布局信息。\n"),n("ul",[n("li",[t._v("布局是为了计算 DOM 树中可见元素的几何位置，因为前一步只是获得了元素样式，并不知道它应该放哪。")]),t._v(" "),n("li",[t._v("布局树会忽略不可见节点，比如 "),n("code",[t._v("head")]),t._v(" 标签，和使用了 "),n("code",[t._v("display:none")]),t._v(" 属性的元素等。")]),t._v(" "),n("li",[t._v("目前的布局操作中，布局树既是输入内容也是输出内容，Chrome 团队为了分离输入和输出，正在重构布局代码，下一代布局系统叫 LayoutNG。")])])]),t._v(" "),n("li",[n("strong",[t._v("分层")]),t._v("：对布局树进行分层，并生成分层树。\n"),n("ul",[n("li",[t._v("分层是为了实现页面中一些复杂的效果：3D 变换、页面滚动，或者使用 z-indexing 做 z 轴排序等。")]),t._v(" "),n("li",[t._v("如果一个节点没有对应的层，那么这个节点就从属于父节点的图层。")]),t._v(" "),n("li",[t._v("拥有层叠上下文属性的元素（比如定位属性元素、透明属性元素、CSS 滤镜属性元素）提升为单独的一层，需要裁剪（clip）的地方也会被创建为图层。")])])]),t._v(" "),n("li",[n("strong",[t._v("图层绘制")]),t._v("：为每个图层生成绘制列表，并将其提交到合成线程。\n"),n("ul",[n("li",[t._v("把一个图层的绘制拆分成很多小的绘制指令，然后再把这些指令按照顺序组成一个待绘制列表。（就跟绘画一样，先画什么，再画什么……）")])])]),t._v(" "),n("li",[n("strong",[t._v("栅格化")]),t._v("：合成线程将图层分成图块，通过栅格化把图块转换为位图。\n"),n("ul",[n("li",[t._v("为了提高性能，即不绘制视口（viewport）以外的图层，合成线程会将图层划分为图块。")]),t._v(" "),n("li",[t._v("图块是栅格化执行的最小单位，合成线程会按照视口附近的图块来优先生成位图。")]),t._v(" "),n("li",[t._v("通常栅格化过程都会使用 GPU 来加速生成，这是一种跨进程操作（GPU 操作是运行在 GPU 进程中）。")])])]),t._v(" "),n("li",[n("strong",[t._v("合成")]),t._v("：所有图块都被光栅化后，渲染引擎中的合成线程发送一个绘制图块的命令「DrawQuad」给浏览器进程。")]),t._v(" "),n("li",[n("strong",[t._v("显示")]),t._v("：浏览器进程根据接收到的「DrawQuad」消息绘制页面，并显示到显示器上。")])]),t._v(" "),n("h3",{attrs:{id:"完整流程示意图"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#完整流程示意图"}},[t._v("#")]),t._v(" 完整流程示意图")]),t._v(" "),n("p",[t._v("下图是一张李兵老师梳理的「完整的渲染流水线示意图」：")]),t._v(" "),n("div",{staticStyle:{"text-align":"center"}},[n("img",{attrs:{src:a(541),alt:"完整的渲染流水线示意图"}}),t._v(" "),n("p",{staticStyle:{"text-align":"center",color:"#888"}},[t._v("（完整的渲染流水线示意图，图来源于网络）")])]),t._v(" "),n("h2",{attrs:{id:"重排、重绘、和合成"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#重排、重绘、和合成"}},[t._v("#")]),t._v(" 重排、重绘、和合成")]),t._v(" "),n("p",[t._v("这是三个和渲染流水线相关的概念 —— 「重排」、「重绘」和「合成」，这三个概念与 Web 的性能优化有关。")]),t._v(" "),n("h3",{attrs:{id:"重排-更新了元素的几何属性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#重排-更新了元素的几何属性"}},[t._v("#")]),t._v(" 重排：更新了元素的几何属性")]),t._v(" "),n("ul",[n("li",[t._v("如果修改了元素的几何属性（元素的位置和尺寸大小），就会触发重新布局、解析之后的一系列子阶段。")]),t._v(" "),n("li",[t._v("重排需要更新完整的渲染流水线，所以开销也是最大的。")]),t._v(" "),n("li",[t._v("常见的引起重排的操作：\n"),n("ul",[n("li",[t._v("添加或者删除可见的 DOM 元素。")]),t._v(" "),n("li",[t._v("元素尺寸改变 —— 边距、填充、边框、宽度和高度。")]),t._v(" "),n("li",[t._v("内容变化，比如用户在 "),n("code",[t._v("input")]),t._v(" 框中输入文字。")]),t._v(" "),n("li",[t._v("浏览器窗口尺寸改变 —— "),n("code",[t._v("resize")]),t._v(" 事件发生时。")]),t._v(" "),n("li",[t._v("计算 "),n("code",[t._v("offsetWidth")]),t._v(" 和 "),n("code",[t._v("offsetHeight")]),t._v(" 属性。")]),t._v(" "),n("li",[t._v("设置 "),n("code",[t._v("style")]),t._v(" 属性的值。")])])])]),t._v(" "),n("p",[t._v("常见的引起重排的属性和方法：")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",{staticStyle:{"text-align":"left"}}),t._v(" "),n("th",{staticStyle:{"text-align":"left"}}),t._v(" "),n("th",{staticStyle:{"text-align":"left"}}),t._v(" "),n("th",{staticStyle:{"text-align":"left"}})])]),t._v(" "),n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("width")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("height")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("margin")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("padding")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("display")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("border")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("position")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("overflow")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("clientWidth")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("clientHeight")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("clientTop")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("clientLeft")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("offsetWidth")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("offsetHeight")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("offsetTop")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("offsetLeft")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("scrollWidth")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("scrollHeight")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("scrollTop")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("scrollLeft")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("scrollIntoView()")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("scrollTo()")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("getComputedStyle()")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("getBoundingClientRect()")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("scrollIntoViewIfNeeded()")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}}),t._v(" "),n("td",{staticStyle:{"text-align":"left"}})])])]),t._v(" "),n("h3",{attrs:{id:"重绘-更新元素的绘制属性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#重绘-更新元素的绘制属性"}},[t._v("#")]),t._v(" 重绘：更新元素的绘制属性")]),t._v(" "),n("ul",[n("li",[t._v("如果修改了元素的外观属性（颜色、背景、边框等），就会直接进入了绘制阶段，然后执行之后的一系列子阶段。")]),t._v(" "),n("li",[t._v("因为几何位置没有变换，所以布局阶段不会被执行，省去了布局和分层阶段，所以执行效率会比重排操作要高一些。")])]),t._v(" "),n("p",[t._v("常见的引起重绘的属性：")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",{staticStyle:{"text-align":"left"}}),t._v(" "),n("th",{staticStyle:{"text-align":"left"}}),t._v(" "),n("th",{staticStyle:{"text-align":"left"}}),t._v(" "),n("th",{staticStyle:{"text-align":"left"}})])]),t._v(" "),n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("color")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("border-style")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("visibility")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("background")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("text-decoration")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("background-image")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("background-position")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("background-repeat")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("outline-color")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("outline")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("outline-style")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("border-radius")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("outline-width")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("box-shadow")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("background-size")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}})])])]),t._v(" "),n("h3",{attrs:{id:"合成-直接合成阶段"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#合成-直接合成阶段"}},[t._v("#")]),t._v(" 合成：直接合成阶段")]),t._v(" "),n("ul",[n("li",[t._v("如果更改的是一个既不要布局也不要绘制的属性，渲染引擎将跳过布局和绘制，只执行后续的合成操作。")]),t._v(" "),n("li",[t._v("例如：使用 CSS3 的 "),n("code",[t._v("transform")]),t._v(" 来实现动画效果，比使用 JS 修改 style 高效。")])]),t._v(" "),n("h2",{attrs:{id:"优化策略-减少重排和重绘"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#优化策略-减少重排和重绘"}},[t._v("#")]),t._v(" 优化策略：减少重排和重绘")]),t._v(" "),n("h3",{attrs:{id:"_1-对-dom-属性的读写操作要分离"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-对-dom-属性的读写操作要分离"}},[t._v("#")]),t._v(" 1.对 dom 属性的读写操作要分离")]),t._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这段代码会触发 4 次重排 + 重绘")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 因为在 console 中用到的这几个属性虽然跟操作修改的值没关联, ")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 但浏览器为了给我们最精确的值, 会立即重排 + 重绘.")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这种会强制刷新渲染队列并触发立即重排的属性还有:")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// offsetTop, offsetLeft, offsetWidth, offsetHeight")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// scrollTop, scrollLeft, scrollWidth, scrollHeight")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// clientTop, clientLeft, clientWidth, clientHeight")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// getComputedStyle(), 或者 IE 的 currentStyle")]),t._v("\ndiv"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'10px'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("div"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetLeft"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ndiv"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("top "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'10px'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("div"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetTop"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ndiv"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'20px'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("div"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetWidth"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ndiv"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'20px'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("div"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetHeight"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这段代码只会触发 1 次重排 + 重绘")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 因为操作值的时候, 只有等到渲染队列中到了一定大小, 或一定时间间隔后, 浏览器才会批量执行这些操作;")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 而读取值的时候, 因为渲染队列本来就是空的, 所以并没有触发重排, 仅仅拿值而已.")]),t._v("\ndiv"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'10px'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ndiv"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("top "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'10px'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ndiv"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'20px'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ndiv"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'20px'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("div"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetLeft"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("div"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetTop"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("div"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetWidth"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("div"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetHeight"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br"),n("span",{staticClass:"line-number"},[t._v("25")]),n("br"),n("span",{staticClass:"line-number"},[t._v("26")]),n("br"),n("span",{staticClass:"line-number"},[t._v("27")]),n("br"),n("span",{staticClass:"line-number"},[t._v("28")]),n("br"),n("span",{staticClass:"line-number"},[t._v("29")]),n("br")])]),n("h3",{attrs:{id:"_2-使用-class-操作样式-而不是频繁操作-style"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-使用-class-操作样式-而不是频繁操作-style"}},[t._v("#")]),t._v(" 2.使用 class 操作样式，而不是频繁操作 style")]),t._v(" "),n("p",[t._v("虽然现在大部分浏览器有渲染队列优化，不排除有些浏览器以及老版本的浏览器效率仍然低下，所以建议通过改变 "),n("code",[t._v("class")]),t._v(" 或者 "),n("code",[t._v("cssText")]),t._v(" 属性集中改变样式。")]),t._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// bad")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" left "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" top "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nel"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" left "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"px"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nel"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("top  "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" top  "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"px"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// good ")]),t._v("\nel"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("className "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('" theclassname"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// good")]),t._v("\nel"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cssText "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"; left: "')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" left "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"px; top: "')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" top "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"px;"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br")])]),n("h3",{attrs:{id:"_3-缓存布局信息"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-缓存布局信息"}},[t._v("#")]),t._v(" 3.缓存布局信息")]),t._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// bad 强制刷新, 触发两次重排")]),t._v("\ndiv"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" div"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetLeft "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'px'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ndiv"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("top "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" div"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetTop "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'px'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// good 缓存布局信息, 相当于读写分离")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" curLeft "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" div"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetLeft"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" curTop "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" div"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetTop"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ndiv"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" curLeft "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'px'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ndiv"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("top "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" curTop "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'px'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br")])]),n("h3",{attrs:{id:"_4-离线改变-dom"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-离线改变-dom"}},[t._v("#")]),t._v(" 4.离线改变 DOM")]),t._v(" "),n("ul",[n("li",[t._v("隐藏要操作的 DOM"),n("br"),t._v("\n在要操作 DOM  之前，通过 "),n("code",[t._v("display")]),t._v(" 隐藏 DOM ，当操作完成之后（比如修改 100 次后），才将元素的 display 属性设置为可见，因为不可见的元素不会触发重排和重绘。"),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[t._v("dom"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("display "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'none'")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 修改 DOM 样式")]),t._v("\ndom"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("display "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'block'")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br")])])]),t._v(" "),n("li",[t._v("通过使用 "),n("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/DocumentFragment",target:"_blank",rel:"noopener noreferrer"}},[t._v("DocumentFragment"),n("OutboundLink")],1),t._v(" 创建一个 DOM 碎片，在它上面批量操作 DOM，操作完成之后，再添加到文档中，这样只会触发一次重排。")]),t._v(" "),n("li",[t._v("复制节点，在副本上工作，然后替换它。")]),t._v(" "),n("li",[t._v("使用现代化框架，例如 Vue、React。")])]),t._v(" "),n("h3",{attrs:{id:"_5-position-属性为-absolute-或-fixed"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-position-属性为-absolute-或-fixed"}},[t._v("#")]),t._v(" 5.position 属性为 absolute 或 fixed")]),t._v(" "),n("p",[t._v("position 属性为 absolute 或 fixed 的元素，重排开销比较小，不用考虑它对其他元素的影响。")]),t._v(" "),n("h3",{attrs:{id:"_6-优化动画"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-优化动画"}},[t._v("#")]),t._v(" 6.优化动画")]),t._v(" "),n("ul",[n("li",[t._v("可以把动画效果应用到 position 属性为 absolute 或 fixed 的元素上，这样对其他元素影响较小。\n"),n("ul",[n("li",[t._v("动画效果还应牺牲一些平滑，来换取速度，这中间的度自己衡量：比如实现一个动画，以 1 个像素为单位移动这样最平滑，但是 reflow 就会过于频繁，大量消耗 CPU 资源，如果以 3 个像素为单位移动则会好很多。")])])]),t._v(" "),n("li",[t._v("启用 GPU 硬件加速\n"),n("ul",[n("li",[t._v("GPU 硬件加速是指应用 GPU 的图形性能对浏览器中的一些图形操作交给 GPU 来完成，因为 GPU 是专门为处理图形而设计，所以它在速度和能耗上更有效率。")]),t._v(" "),n("li",[t._v("GPU 加速通常包括以下几个部分：Canvas2D，布局合成，CSS3转换（transitions），CSS3 3D 变换（transforms），WebGL 和视频（video）。")])]),t._v(" "),n("div",{staticClass:"language-css line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\n * 根据上面的结论\n * 将 2d transform 换成 3d\n * 就可以强制开启 GPU 加速\n * 提高动画性能\n */")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v("div")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("transform")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("translate")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("10px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 10px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v("div")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("transform")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("translate3d")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("10px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 10px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br")])])])]),t._v(" "),n("h3",{attrs:{id:"_7-对-window-resize-事件做防抖处理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_7-对-window-resize-事件做防抖处理"}},[t._v("#")]),t._v(" 7.对 window resize 事件做防抖处理")]),t._v(" "),n("p",[t._v("这个延迟时间视场合而定。")]),t._v(" "),n("h3",{attrs:{id:"_8-不要使用-table-布局"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_8-不要使用-table-布局"}},[t._v("#")]),t._v(" 8.不要使用 table 布局")]),t._v(" "),n("p",[t._v("因为 table 中某个元素一旦触发了重排，那么整个 table 的元素都会触发重排。在不得已使用 table 的场合，可以设置 "),n("code",[t._v("table-layout: auto;")]),t._v(" 或者是 "),n("code",[t._v("table-layout:fixed")]),t._v(" 这样可以让 table 一行一行的渲染，这种做法也是为了限制重排的影响范围。")]),t._v(" "),n("h3",{attrs:{id:"_9-尽可能不要修改影响范围比较大的-dom"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_9-尽可能不要修改影响范围比较大的-dom"}},[t._v("#")]),t._v(" 9.尽可能不要修改影响范围比较大的 DOM")]),t._v(" "),n("p",[t._v("尽可能限制重排的影响范围，尽可能在低层级的 DOM 节点上作修改。比如要改变 p 标签的样式，class 就不要加在它上层的 div 标签上，通过父元素去影响子元素不好。")]),t._v(" "),n("h3",{attrs:{id:"_10-慎用-css-表达式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_10-慎用-css-表达式"}},[t._v("#")]),t._v(" 10.慎用 CSS 表达式")]),t._v(" "),n("p",[t._v("如果 CSS 里面有计算表达式，每次都会重新计算一遍，都会触发一次重排。")]),t._v(" "),n("p",[t._v("（完）")])])}),[],!1,null,null,null);s.default=e.exports}}]);