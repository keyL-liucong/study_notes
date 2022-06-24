(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{588:function(t,s,a){t.exports=a.p+"assets/img/two-ways-insert-mq.57188058.svg"},833:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"事件循环机制-微任务和宏任务的关系"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#事件循环机制-微任务和宏任务的关系"}},[t._v("#")]),t._v(" 事件循环机制，微任务和宏任务的关系")]),t._v(" "),n("blockquote",[n("p",[t._v("本文涉及到的名词：事件循环（Event Loop），宏任务（macro-task）与微任务（micro-task），执行栈和任务队列等。")])]),t._v(" "),n("h2",{attrs:{id:"前言"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),n("p",[t._v("JavaScript 是单线程的，同一时间只能做一件事情。如果碰到某个耗时长的任务（比如一个需要 3s 的网络请求），那么后续的任务都要等待，这种效果是无法接受的，这时我们就引入了"),n("RouterLink",{attrs:{to:"/frontend-knowledge/javascript/sync-and-async/",title:"同步与异步 Promise，async/await"}},[t._v("异步任务")]),t._v("的概念。")],1),t._v(" "),n("p",[t._v("所以 JavaScript 执行主要包括同步任务和异步任务：")]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("同步任务")]),t._v("：会放入到"),n("RouterLink",{attrs:{to:"/frontend-knowledge/javascript/execution-context.html",title:"执行上下文"}},[t._v("执行栈")]),t._v("中，他们是要按顺序执行的任务；")],1),t._v(" "),n("li",[n("strong",[t._v("异步任务")]),t._v("：会放入到任务队列中，这些异步任务一定要等到执行栈清空后才会执行，也就是说异步任务一定是在同步任务之后执行的。")])]),t._v(" "),n("p",[t._v("本文所讲的 JavaScript 事件循环机制，它主要与异步任务有关。")]),t._v(" "),n("h2",{attrs:{id:"消息队列"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#消息队列"}},[t._v("#")]),t._v(" 消息队列")]),t._v(" "),n("p",[t._v("事件循环主要与消息队列有关，所以必须要先知道宏任务与微任务。")]),t._v(" "),n("p",[t._v("在任务队列中，有两种任务：宏任务和微任务。")]),t._v(" "),n("p",[n("strong",[t._v("宏任务")]),t._v("：script 标签中的整体代码、setTimeout、setInterval、setImmediate、I/O、UI渲染"),n("br"),t._v(" "),n("strong",[t._v("微任务")]),t._v("：process.nextTick（Node.js）、Promise、Object.observe（不常用）、MutationObserver（Node.js）")]),t._v(" "),n("p",[n("strong",[t._v("任务优先级")]),t._v("：process.nextTick > Promise.then > setTimeout > setImmediate")]),t._v(" "),n("p",[t._v("以上这些是常见的宏任务和微任务，记住就行了，不用追究为什么它是宏任务或微任务，因为就是这样规定的。")]),t._v(" "),n("h2",{attrs:{id:"事件循环"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#事件循环"}},[t._v("#")]),t._v(" 事件循环")]),t._v(" "),n("p",[t._v("那么什么是事件循环机制呢？")]),t._v(" "),n("ul",[n("li",[t._v("一开始整个脚本（script 标签中的整体代码）作为一个宏任务执行。")]),t._v(" "),n("li",[t._v("执行过程中同步代码直接执行，宏任务进入宏任务队列，微任务进入微任务队列。")]),t._v(" "),n("li",[t._v("当前宏任务执行完毕后，立即执行当前微任务队列中的所有微任务（依次执行）。")]),t._v(" "),n("li",[t._v("当前宏任务执行完毕，开始检查渲染，然后 GUI 线程接管渲染（浏览器会在两个宏任务交接期间，对页面进行重新渲染）。")]),t._v(" "),n("li",[t._v("渲染完毕后，JavaScript 线程继续接管，开始下一个宏任务（从任务队列中获取），依此循环，直到宏任务和微任务队列都为空。")])]),t._v(" "),n("p",[t._v("上面这一过程就称为：事件循环（Event Loop）。")]),t._v(" "),n("p",[t._v("说的通俗一点：宏任务和他所产生的微任务是绑定的，一个宏任务执行完成后，开始执行这个宏任务所产生的微任务，以及微任务产生的微任务。等它们全部执行完后，才会执行下一个宏任务。")]),t._v(" "),n("div",{staticStyle:{"text-align":"center"}},[n("svg",{attrs:{id:"SvgjsSvg1135",width:"581.5000305175781",height:"393.99998474121094",xmlns:"http://www.w3.org/2000/svg",version:"1.1","xmlns:xlink":"http://www.w3.org/1999/xlink","xmlns:svgjs":"http://svgjs.com/svgjs"}},[n("defs",{attrs:{id:"SvgjsDefs1136"}}),n("g",{attrs:{id:"SvgjsG1137",transform:"translate(25.000015258789062,24.99999237060547)"}},[n("path",{attrs:{id:"SvgjsPath1138",d:"M 0 0L 94 0L 94 126L 0 126Z",stroke:"rgba(0,0,0,1)","stroke-width":"1","fill-opacity":"1",fill:"#f57f17"}}),n("g",{attrs:{id:"SvgjsG1139"}},[n("text",{attrs:{id:"SvgjsText1140","font-family":"微软雅黑","text-anchor":"middle","font-size":"16px",width:"74px",fill:"#ffffff","font-weight":"400",align:"middle",lineHeight:"125%",anchor:"middle",family:"微软雅黑",size:"16px",weight:"400","font-style":"",opacity:"1",y:"51",transform:"rotate(0)"}},[n("tspan",{attrs:{id:"SvgjsTspan1141",dy:"20",x:"47"}},[n("tspan",{staticStyle:{},attrs:{id:"SvgjsTspan1142"}},[t._v("宏任务")])])])])]),n("g",{attrs:{id:"SvgjsG1143",transform:"translate(119.00001525878906,44.49999237060547)"}},[n("path",{attrs:{id:"SvgjsPath1144",d:"M 0 0L 37 0L 37 87L 0 87Z",stroke:"rgba(0,0,0,1)","stroke-width":"1","fill-opacity":"1",fill:"#2196f3"}}),n("g",{attrs:{id:"SvgjsG1145"}},[n("text",{attrs:{id:"SvgjsText1146","font-family":"微软雅黑","text-anchor":"middle","font-size":"16px",width:"17px",fill:"#ffffff","font-weight":"400",align:"middle",lineHeight:"125%",anchor:"middle",family:"微软雅黑",size:"16px",weight:"400","font-style":"",opacity:"1",y:"11.5",transform:"rotate(0)"}},[n("tspan",{attrs:{id:"SvgjsTspan1147",dy:"20",x:"18.5"}},[n("tspan",{staticStyle:{},attrs:{id:"SvgjsTspan1148"}},[t._v("微")])]),n("tspan",{attrs:{id:"SvgjsTspan1149",dy:"20",x:"18.5"}},[n("tspan",{staticStyle:{},attrs:{id:"SvgjsTspan1150"}},[t._v("任")])]),n("tspan",{attrs:{id:"SvgjsTspan1151",dy:"20",x:"18.5"}},[n("tspan",{staticStyle:{},attrs:{id:"SvgjsTspan1152"}},[t._v("务")])])])])]),n("g",{attrs:{id:"SvgjsG1153",transform:"translate(156.00001525878906,44.49999237060547)"}},[n("path",{attrs:{id:"SvgjsPath1154",d:"M 0 0L 37 0L 37 87L 0 87Z",stroke:"rgba(0,0,0,1)","stroke-width":"1","fill-opacity":"1",fill:"#2196f3"}}),n("g",{attrs:{id:"SvgjsG1155"}},[n("text",{attrs:{id:"SvgjsText1156","font-family":"微软雅黑","text-anchor":"middle","font-size":"16px",width:"17px",fill:"#ffffff","font-weight":"400",align:"middle",lineHeight:"125%",anchor:"middle",family:"微软雅黑",size:"16px",weight:"400","font-style":"",opacity:"1",y:"11.5",transform:"rotate(0)"}},[n("tspan",{attrs:{id:"SvgjsTspan1157",dy:"20",x:"18.5"}},[n("tspan",{staticStyle:{},attrs:{id:"SvgjsTspan1158"}},[t._v("微")])]),n("tspan",{attrs:{id:"SvgjsTspan1159",dy:"20",x:"18.5"}},[n("tspan",{staticStyle:{},attrs:{id:"SvgjsTspan1160"}},[t._v("任")])]),n("tspan",{attrs:{id:"SvgjsTspan1161",dy:"20",x:"18.5"}},[n("tspan",{staticStyle:{},attrs:{id:"SvgjsTspan1162"}},[t._v("务")])])])])]),n("g",{attrs:{id:"SvgjsG1163",transform:"translate(193.00001525878906,44.49999237060547)"}},[n("path",{attrs:{id:"SvgjsPath1164",d:"M 0 0L 37 0L 37 87L 0 87Z",stroke:"rgba(0,0,0,1)","stroke-width":"1","fill-opacity":"1",fill:"#2196f3"}}),n("g",{attrs:{id:"SvgjsG1165"}},[n("text",{attrs:{id:"SvgjsText1166","font-family":"微软雅黑","text-anchor":"middle","font-size":"16px",width:"17px",fill:"#ffffff","font-weight":"400",align:"middle",lineHeight:"125%",anchor:"middle",family:"微软雅黑",size:"16px",weight:"400","font-style":"",opacity:"1",y:"11.5",transform:"rotate(0)"}},[n("tspan",{attrs:{id:"SvgjsTspan1167",dy:"20",x:"18.5"}},[n("tspan",{staticStyle:{},attrs:{id:"SvgjsTspan1168"}},[t._v("微")])]),n("tspan",{attrs:{id:"SvgjsTspan1169",dy:"20",x:"18.5"}},[n("tspan",{staticStyle:{},attrs:{id:"SvgjsTspan1170"}},[t._v("任")])]),n("tspan",{attrs:{id:"SvgjsTspan1171",dy:"20",x:"18.5"}},[n("tspan",{staticStyle:{},attrs:{id:"SvgjsTspan1172"}},[t._v("务")])])])])]),n("g",{attrs:{id:"SvgjsG1173",transform:"matrix(-1.8369701987210297e-16,-1,1,-1.8369701987210297e-16,26.000015258789077,246.99999237060555)"}},[n("path",{attrs:{id:"SvgjsPath1174",d:"M 90.00000000000006 0Q 81.00000000000006 0 81.00000000000006 9L 81.00000000000006 93.00000000000003Q 81.00000000000006 102.00000000000003 68.00000000000006 102.00000000000003Q 81.00000000000006 102.00000000000003 81.00000000000006 111.00000000000003L 81.00000000000006 195.00000000000006Q 81.00000000000006 204.00000000000006 90.00000000000006 204.00000000000006",stroke:"rgba(50,50,50,1)","stroke-width":"2",fill:"none"}}),n("path",{attrs:{id:"SvgjsPath1175",d:"M 0 0L 90.00000000000006 0L 90.00000000000006 204.00000000000006L 0 204.00000000000006Z",stroke:"none",fill:"none"}}),n("g",{attrs:{id:"SvgjsG1176"}},[n("text",{attrs:{id:"SvgjsText1177","font-family":"微软雅黑","text-anchor":"end","font-size":"13px",width:"64px",fill:"#323232","font-weight":"400",align:"middle",lineHeight:"125%",anchor:"end",family:"微软雅黑",size:"13px",weight:"400","font-style":"",opacity:"1",y:"92.37500000000003",transform:"rotate(0)"}})])]),n("g",{attrs:{id:"SvgjsG1178",transform:"translate(59.500015258789176,184.99999237060547)"}},[n("path",{attrs:{id:"SvgjsPath1179",d:"M 0 0L 137 0L 137 43L 0 43Z",stroke:"none",fill:"none"}}),n("g",{attrs:{id:"SvgjsG1180"}},[n("text",{attrs:{id:"SvgjsText1181","font-family":"微软雅黑","text-anchor":"middle","font-size":"16px",width:"137px",fill:"#323232","font-weight":"400",align:"middle",lineHeight:"125%",anchor:"middle",family:"微软雅黑",size:"16px",weight:"400","font-style":"",opacity:"1",y:"9.5",transform:"rotate(0)"}},[n("tspan",{attrs:{id:"SvgjsTspan1182",dy:"20",x:"68.5"}},[n("tspan",{staticStyle:{},attrs:{id:"SvgjsTspan1183"}},[t._v("一个事件循环结束")])])])])]),n("g",{attrs:{id:"SvgjsG1184",transform:"translate(259.00001525878906,57.99999237060547)"}},[n("path",{attrs:{id:"SvgjsPath1185",d:"M 0 19.8L 38 19.8L 38 0L 68 30L 38 60L 38 40.2L 0 40.2L 0 19.8Z",stroke:"none","fill-opacity":"1",fill:"#2196f3"}}),n("g",{attrs:{id:"SvgjsG1186"}},[n("text",{attrs:{id:"SvgjsText1187","font-family":"微软雅黑","text-anchor":"middle","font-size":"13px",width:"68px",fill:"#ffffff","font-weight":"400",align:"middle",lineHeight:"125%",anchor:"middle",family:"微软雅黑",size:"13px",weight:"400","font-style":"",opacity:"1",y:"20.375",transform:"rotate(0)"}})])]),n("g",{attrs:{id:"SvgjsG1188",transform:"translate(351.50001525878906,24.99999237060547)"}},[n("path",{attrs:{id:"SvgjsPath1189",d:"M 0 0L 94 0L 94 126L 0 126Z",stroke:"rgba(0,0,0,1)","stroke-width":"1","fill-opacity":"1",fill:"#f57f17"}}),n("g",{attrs:{id:"SvgjsG1190"}},[n("text",{attrs:{id:"SvgjsText1191","font-family":"微软雅黑","text-anchor":"middle","font-size":"16px",width:"74px",fill:"#ffffff","font-weight":"400",align:"middle",lineHeight:"125%",anchor:"middle",family:"微软雅黑",size:"16px",weight:"400","font-style":"",opacity:"1",y:"51",transform:"rotate(0)"}},[n("tspan",{attrs:{id:"SvgjsTspan1192",dy:"20",x:"47"}},[n("tspan",{staticStyle:{},attrs:{id:"SvgjsTspan1193"}},[t._v("宏任务")])])])])]),n("g",{attrs:{id:"SvgjsG1194",transform:"translate(445.50001525878906,44.49999237060547)"}},[n("path",{attrs:{id:"SvgjsPath1195",d:"M 0 0L 37 0L 37 87L 0 87Z",stroke:"rgba(0,0,0,1)","stroke-width":"1","fill-opacity":"1",fill:"#2196f3"}}),n("g",{attrs:{id:"SvgjsG1196"}},[n("text",{attrs:{id:"SvgjsText1197","font-family":"微软雅黑","text-anchor":"middle","font-size":"16px",width:"17px",fill:"#ffffff","font-weight":"400",align:"middle",lineHeight:"125%",anchor:"middle",family:"微软雅黑",size:"16px",weight:"400","font-style":"",opacity:"1",y:"11.5",transform:"rotate(0)"}},[n("tspan",{attrs:{id:"SvgjsTspan1198",dy:"20",x:"18.5"}},[n("tspan",{staticStyle:{},attrs:{id:"SvgjsTspan1199"}},[t._v("微")])]),n("tspan",{attrs:{id:"SvgjsTspan1200",dy:"20",x:"18.5"}},[n("tspan",{staticStyle:{},attrs:{id:"SvgjsTspan1201"}},[t._v("任")])]),n("tspan",{attrs:{id:"SvgjsTspan1202",dy:"20",x:"18.5"}},[n("tspan",{staticStyle:{},attrs:{id:"SvgjsTspan1203"}},[t._v("务")])])])])]),n("g",{attrs:{id:"SvgjsG1204",transform:"translate(482.50001525878906,44.49999237060547)"}},[n("path",{attrs:{id:"SvgjsPath1205",d:"M 0 0L 37 0L 37 87L 0 87Z",stroke:"rgba(0,0,0,1)","stroke-width":"1","fill-opacity":"1",fill:"#2196f3"}}),n("g",{attrs:{id:"SvgjsG1206"}},[n("text",{attrs:{id:"SvgjsText1207","font-family":"微软雅黑","text-anchor":"middle","font-size":"16px",width:"17px",fill:"#ffffff","font-weight":"400",align:"middle",lineHeight:"125%",anchor:"middle",family:"微软雅黑",size:"16px",weight:"400","font-style":"",opacity:"1",y:"11.5",transform:"rotate(0)"}},[n("tspan",{attrs:{id:"SvgjsTspan1208",dy:"20",x:"18.5"}},[n("tspan",{staticStyle:{},attrs:{id:"SvgjsTspan1209"}},[t._v("微")])]),n("tspan",{attrs:{id:"SvgjsTspan1210",dy:"20",x:"18.5"}},[n("tspan",{staticStyle:{},attrs:{id:"SvgjsTspan1211"}},[t._v("任")])]),n("tspan",{attrs:{id:"SvgjsTspan1212",dy:"20",x:"18.5"}},[n("tspan",{staticStyle:{},attrs:{id:"SvgjsTspan1213"}},[t._v("务")])])])])]),n("g",{attrs:{id:"SvgjsG1214",transform:"translate(519.5000152587891,44.49999237060547)"}},[n("path",{attrs:{id:"SvgjsPath1215",d:"M 0 0L 37 0L 37 87L 0 87Z",stroke:"rgba(0,0,0,1)","stroke-width":"1","fill-opacity":"1",fill:"#2196f3"}}),n("g",{attrs:{id:"SvgjsG1216"}},[n("text",{attrs:{id:"SvgjsText1217","font-family":"微软雅黑","text-anchor":"middle","font-size":"16px",width:"17px",fill:"#ffffff","font-weight":"400",align:"middle",lineHeight:"125%",anchor:"middle",family:"微软雅黑",size:"16px",weight:"400","font-style":"",opacity:"1",y:"11.5",transform:"rotate(0)"}},[n("tspan",{attrs:{id:"SvgjsTspan1218",dy:"20",x:"18.5"}},[n("tspan",{staticStyle:{},attrs:{id:"SvgjsTspan1219"}},[t._v("微")])]),n("tspan",{attrs:{id:"SvgjsTspan1220",dy:"20",x:"18.5"}},[n("tspan",{staticStyle:{},attrs:{id:"SvgjsTspan1221"}},[t._v("任")])]),n("tspan",{attrs:{id:"SvgjsTspan1222",dy:"20",x:"18.5"}},[n("tspan",{staticStyle:{},attrs:{id:"SvgjsTspan1223"}},[t._v("务")])])])])]),n("g",{attrs:{id:"SvgjsG1224",transform:"translate(351.50001525878906,242.99999237060547)"}},[n("path",{attrs:{id:"SvgjsPath1225",d:"M 0 0L 94 0L 94 126L 0 126Z",stroke:"rgba(0,0,0,1)","stroke-width":"1","fill-opacity":"1",fill:"#f57f17"}}),n("g",{attrs:{id:"SvgjsG1226"}},[n("text",{attrs:{id:"SvgjsText1227","font-family":"微软雅黑","text-anchor":"middle","font-size":"16px",width:"74px",fill:"#ffffff","font-weight":"400",align:"middle",lineHeight:"125%",anchor:"middle",family:"微软雅黑",size:"16px",weight:"400","font-style":"",opacity:"1",y:"51",transform:"rotate(0)"}},[n("tspan",{attrs:{id:"SvgjsTspan1228",dy:"20",x:"47"}},[n("tspan",{staticStyle:{},attrs:{id:"SvgjsTspan1229"}},[t._v("宏任务")])])])])]),n("g",{attrs:{id:"SvgjsG1230",transform:"translate(445.50001525878906,262.49999237060547)"}},[n("path",{attrs:{id:"SvgjsPath1231",d:"M 0 0L 37 0L 37 87L 0 87Z",stroke:"rgba(0,0,0,1)","stroke-width":"1","fill-opacity":"1",fill:"#2196f3"}}),n("g",{attrs:{id:"SvgjsG1232"}},[n("text",{attrs:{id:"SvgjsText1233","font-family":"微软雅黑","text-anchor":"middle","font-size":"16px",width:"17px",fill:"#ffffff","font-weight":"400",align:"middle",lineHeight:"125%",anchor:"middle",family:"微软雅黑",size:"16px",weight:"400","font-style":"",opacity:"1",y:"11.5",transform:"rotate(0)"}},[n("tspan",{attrs:{id:"SvgjsTspan1234",dy:"20",x:"18.5"}},[n("tspan",{staticStyle:{},attrs:{id:"SvgjsTspan1235"}},[t._v("微")])]),n("tspan",{attrs:{id:"SvgjsTspan1236",dy:"20",x:"18.5"}},[n("tspan",{staticStyle:{},attrs:{id:"SvgjsTspan1237"}},[t._v("任")])]),n("tspan",{attrs:{id:"SvgjsTspan1238",dy:"20",x:"18.5"}},[n("tspan",{staticStyle:{},attrs:{id:"SvgjsTspan1239"}},[t._v("务")])])])])]),n("g",{attrs:{id:"SvgjsG1240",transform:"translate(482.50001525878906,262.49999237060547)"}},[n("path",{attrs:{id:"SvgjsPath1241",d:"M 0 0L 37 0L 37 87L 0 87Z",stroke:"rgba(0,0,0,1)","stroke-width":"1","fill-opacity":"1",fill:"#2196f3"}}),n("g",{attrs:{id:"SvgjsG1242"}},[n("text",{attrs:{id:"SvgjsText1243","font-family":"微软雅黑","text-anchor":"middle","font-size":"16px",width:"17px",fill:"#ffffff","font-weight":"400",align:"middle",lineHeight:"125%",anchor:"middle",family:"微软雅黑",size:"16px",weight:"400","font-style":"",opacity:"1",y:"11.5",transform:"rotate(0)"}},[n("tspan",{attrs:{id:"SvgjsTspan1244",dy:"20",x:"18.5"}},[n("tspan",{staticStyle:{},attrs:{id:"SvgjsTspan1245"}},[t._v("微")])]),n("tspan",{attrs:{id:"SvgjsTspan1246",dy:"20",x:"18.5"}},[n("tspan",{staticStyle:{},attrs:{id:"SvgjsTspan1247"}},[t._v("任")])]),n("tspan",{attrs:{id:"SvgjsTspan1248",dy:"20",x:"18.5"}},[n("tspan",{staticStyle:{},attrs:{id:"SvgjsTspan1249"}},[t._v("务")])])])])]),n("g",{attrs:{id:"SvgjsG1250",transform:"translate(519.5000152587891,262.49999237060547)"}},[n("path",{attrs:{id:"SvgjsPath1251",d:"M 0 0L 37 0L 37 87L 0 87Z",stroke:"rgba(0,0,0,1)","stroke-width":"1","fill-opacity":"1",fill:"#2196f3"}}),n("g",{attrs:{id:"SvgjsG1252"}},[n("text",{attrs:{id:"SvgjsText1253","font-family":"微软雅黑","text-anchor":"middle","font-size":"16px",width:"17px",fill:"#ffffff","font-weight":"400",align:"middle",lineHeight:"125%",anchor:"middle",family:"微软雅黑",size:"16px",weight:"400","font-style":"",opacity:"1",y:"11.5",transform:"rotate(0)"}},[n("tspan",{attrs:{id:"SvgjsTspan1254",dy:"20",x:"18.5"}},[n("tspan",{staticStyle:{},attrs:{id:"SvgjsTspan1255"}},[t._v("微")])]),n("tspan",{attrs:{id:"SvgjsTspan1256",dy:"20",x:"18.5"}},[n("tspan",{staticStyle:{},attrs:{id:"SvgjsTspan1257"}},[t._v("任")])]),n("tspan",{attrs:{id:"SvgjsTspan1258",dy:"20",x:"18.5"}},[n("tspan",{staticStyle:{},attrs:{id:"SvgjsTspan1259"}},[t._v("务")])])])])]),n("g",{attrs:{id:"SvgjsG1260",transform:"matrix(6.123233995736766e-17,1,-1,6.123233995736766e-17,428.5,164)"}},[n("path",{attrs:{id:"SvgjsPath1261",d:"M 0 19.8L 38 19.8L 38 0L 68 30L 38 60L 38 40.2L 0 40.2L 0 19.8Z",stroke:"none","fill-opacity":"1",fill:"#2196f3"}}),n("g",{attrs:{id:"SvgjsG1262"}},[n("text",{attrs:{id:"SvgjsText1263","font-family":"微软雅黑","text-anchor":"middle","font-size":"13px",width:"68px",fill:"#323232","font-weight":"400",align:"middle",lineHeight:"125%",anchor:"middle",family:"微软雅黑",size:"13px",weight:"400","font-style":"",opacity:"1",y:"20.375",transform:"rotate(0)"}})])])]),t._v(" "),n("p",{staticStyle:{"text-align":"center",color:"#888"}},[t._v("（图解 JavaScript 事件循环）")])]),t._v(" "),n("h2",{attrs:{id:"为什么要分两种任务"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#为什么要分两种任务"}},[t._v("#")]),t._v(" 为什么要分两种任务")]),t._v(" "),n("p",[t._v("每一个任务的执行当中，有可能会产生新的任务，那么这些新的任务有两种插入消息队列的方式：")]),t._v(" "),n("div",{staticStyle:{"text-align":"center"}},[n("img",{attrs:{src:a(588),alt:"两种插入消息队列的方式"}}),t._v(" "),n("p",{staticStyle:{"text-align":"center",color:"#888"}},[t._v("（两种插入消息队列的方式）")])]),t._v(" "),n("p",[t._v("这也主要是宏任务和微任务的区别，在任务执行过程中：")]),t._v(" "),n("ul",[n("li",[t._v("产生的宏任务直接插入消息队列尾部依次执行。")]),t._v(" "),n("li",[t._v("产生的微任务直接插入当前宏任务的微任务队列中，在此宏任务执行完成后，直接执行此宏任务的微任务队列。")])]),t._v(" "),n("p",[t._v("可以看出"),n("strong",[t._v("微任务在时效性和效率之间实现了一个有效的权衡")]),t._v("。")]),t._v(" "),n("ul",[n("li",[t._v("时效性方面，微任务归根结底还是异步执行的代码，所以它一定还是比同步代码要慢。")]),t._v(" "),n("li",[t._v("效率方面，微任务的代码纯粹就是为了异步操作，并没有任何延时需要，所以它又是异步代码中最快的。")])]),t._v(" "),n("p",[t._v("而微任务的快体现在：它会在 DOM 重新渲染 + 宏任务执行之前，所以有这样一个结论：")]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("微任务在 DOM 渲染前触发")])]),t._v(" "),n("li",[n("strong",[t._v("宏任务在 DOM 渲染后触发")])])]),t._v(" "),n("h2",{attrs:{id:"代码示例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#代码示例"}},[t._v("#")]),t._v(" 代码示例")]),t._v(" "),n("p",[t._v("我们执行如下一段代码，用上面的思路执行，看一下结果是否和预期的一致。")]),t._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[t._v("console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'script start'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 宏任务")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'setTimeout'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 微任务 跟在当前宏任务后面")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Promise")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("resolve")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'new Promise'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'promise body'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'promise.then 1'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'promise.then 2'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'script end'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br")])]),n("p",[t._v("按照上面的思路，我们来理一下，预测一下执行结果，看看实际效果是否是这样的。")]),t._v(" "),n("p",[t._v("执行流程：")]),t._v(" "),n("ul",[n("li",[t._v("第一次事件循环\n"),n("ul",[n("li",[t._v("首先这一整段 JavaScript 代码作为一个宏任务先被执行")]),t._v(" "),n("li",[t._v("遇到 "),n("code",[t._v("console.log('script start')")]),t._v("，打印出 "),n("code",[t._v('"script start"')]),t._v("；")]),t._v(" "),n("li",[t._v("遇到 "),n("code",[t._v("setTimeout")]),t._v("，回调函数作为宏任务压入到宏任务队列中，此时宏任务队列："),n("code",[t._v("[setTimeout]")]),t._v("；")]),t._v(" "),n("li",[t._v("遇到 "),n("code",[t._v("new Promise")]),t._v("，由于 "),n("code",[t._v("new")]),t._v(" 一个对象是瞬间执行的，不是异步，所以打印出 "),n("code",[t._v('"new Promise"')]),t._v("；")]),t._v(" "),n("li",[t._v("继续执行，由于 Promise 中的异步逻辑在 "),n("code",[t._v("then")]),t._v(" 里面，在 "),n("code",[t._v("then")]),t._v(" 之前的都不是异步，所以打印出 "),n("code",[t._v('"promise body"')]),t._v("；")]),t._v(" "),n("li",[t._v("遇到了第一个 "),n("code",[t._v(".then")]),t._v("，它是个微任务，将它放入微任务队列，跟在当前宏任务（整体代码）后面，此时微任务队列："),n("code",[t._v("[promise 1]")]),t._v("；")]),t._v(" "),n("li",[t._v("Promise 的第一个 "),n("code",[t._v(".then")]),t._v(" 还没执行，只是排好队伍了，因此继续往后，遇到 "),n("code",[t._v("console.log('script end')")]),t._v("，打印出 "),n("code",[t._v('"script end"')]),t._v("。")]),t._v(" "),n("li",[t._v("执行第一个宏任务后的微任务")]),t._v(" "),n("li",[t._v("执行 Promise 的第一个 "),n("code",[t._v(".then")]),t._v("，打印出 "),n("code",[t._v('"promise 1"')]),t._v("，，此时微任务队列："),n("code",[t._v("[]")]),t._v("；")]),t._v(" "),n("li",[t._v("又遇到 "),n("code",[t._v(".then")]),t._v("，它是个微任务，将它放入微任务队列，跟在当前宏任务（整体代码）后面，此时微任务队列："),n("code",[t._v("[promise 2]")]),t._v("；")]),t._v(" "),n("li",[t._v("执行 Promise 的第二个 "),n("code",[t._v(".then")]),t._v("，打印出 "),n("code",[t._v('"promise 2"')]),t._v("，此时微任务队列："),n("code",[t._v("[]")]),t._v("；")]),t._v(" "),n("li",[t._v("整体代码执行完，微任务队列也执行完，当前的事件循环结束。")])])]),t._v(" "),n("li",[t._v("第二次事件循环\n"),n("ul",[n("li",[t._v("执行 "),n("code",[t._v("setTimeout")]),t._v(" 的回调，打印出 "),n("code",[t._v('"setTimeout"')]),t._v("。")])])])]),t._v(" "),n("p",[t._v("预测打印结果：")]),t._v(" "),n("div",{staticClass:"language-text line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('"script start"\n"new Promise"\n"promise body"\n"script end"\n"promise.then 1"\n"promise.then 2"\n"setTimeout"\n')])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br")])]),n("p",[t._v("执行代码后可以发现，实际打印结果和预测一致。")]),t._v(" "),n("h2",{attrs:{id:"复杂情况"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#复杂情况"}},[t._v("#")]),t._v(" 复杂情况")]),t._v(" "),n("p",[t._v("如果遇到更复杂的场景，比如当前微任务里有微任务，微任务里有宏任务，多层嵌套的情况，只需记住一句话："),n("strong",[t._v("微任务跟在当前宏任务后面，执行完当前宏任务，微任务就跟上，然后再执行下一个宏任务")]),t._v("。")]),t._v(" "),n("h2",{attrs:{id:"应用场景"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#应用场景"}},[t._v("#")]),t._v(" 应用场景")]),t._v(" "),n("p",[t._v("除了在前端面试中，会问到关于事件循环、执行栈的问题，了解 JavaScript 事件循环机制有没有实质的作用呢？")]),t._v(" "),n("ul",[n("li",[t._v("以后我们在代码中使用 "),n("code",[t._v("Promise")]),t._v("，"),n("code",[t._v("setTimeout")]),t._v(" 时，思路将更加清晰，用起来更佳得心应手。")]),t._v(" "),n("li",[t._v("不要在 "),n("code",[t._v(".then()")]),t._v(" 中写耗时的循环，会影响后续 DOM 渲染以及宏任务的释放。")]),t._v(" "),n("li",[t._v("在阅读一些源码时，对于一些 "),n("code",[t._v("setTimeout")]),t._v(" 相关的骚操作可以理解的更加深入。")]),t._v(" "),n("li",[t._v("理解 JavaScript 中的任务执行流程，加深对异步流程的理解，少犯错误。")])]),t._v(" "),n("h2",{attrs:{id:"总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),n("ul",[n("li",[t._v("JavaScript 事件循环总是从一个宏任务开始执行。")]),t._v(" "),n("li",[t._v("一个事件循环过程中，只执行一个宏任务，但是可能执行多个微任务。")]),t._v(" "),n("li",[t._v("执行栈中的任务产生的微任务会在当前事件循环内执行。")]),t._v(" "),n("li",[t._v("执行栈中的任务产生的宏任务要在下一次事件循环才会执行。")])]),t._v(" "),n("p",[t._v("最后的最后，记住，JavaScript 是一门单线程语言，异步操作都是放到事件循环队列里面，等待主执行栈来执行的，并没有专门的异步执行线程。")]),t._v(" "),n("p",[t._v("（完）")])])}),[],!1,null,null,null);s.default=e.exports}}]);