(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{698:function(n,s,a){"use strict";a.r(s);var t=a(1),e=Object(t.a)({},(function(){var n=this,s=n.$createElement,a=n._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h1",{attrs:{id:"nginx-常用命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx-常用命令"}},[n._v("#")]),n._v(" Nginx 常用命令")]),n._v(" "),a("h2",{attrs:{id:"nginx-操作的命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx-操作的命令"}},[n._v("#")]),n._v(" Nginx 操作的命令")]),n._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 查看 Nginx 版本")]),n._v("\n/usr/local/nginx/sbin/nginx -v\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 检查配置文件 ngnix.conf 的正确性")]),n._v("\n/usr/local/nginx/sbin/nginx -t\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 启动 Nginx 服务")]),n._v("\n/usr/local/nginx/sbin/nginx\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 启动 Nginx 服务，-c 指定配置文件的路径")]),n._v("\n/usr/local/nginx/sbin/nginx -c /usr/local/nginx/conf/nginx.conf\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 重新加载配置")]),n._v("\n/usr/local/nginx/sbin/nginx -s reload\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 停止 Nginx 服务（快速关闭，不管有没有正在处理的请求）")]),n._v("\n/usr/local/nginx/sbin/nginx -s stop\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 安全退出 Nginx 服务（在退出前会完成已经接受的连接请求，比较优雅）")]),n._v("\n/usr/local/nginx/sbin/nginx -s quit\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br")])]),a("h2",{attrs:{id:"linux-检查的命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux-检查的命令"}},[n._v("#")]),n._v(" Linux 检查的命令")]),n._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 查看 Nginx 进程")]),n._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[n._v("ps")]),n._v(" -ef "),a("span",{pre:!0,attrs:{class:"token operator"}},[n._v("|")]),n._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[n._v("grep")]),n._v(" nginx\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 检查 Nginx 启动的端口")]),n._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[n._v("netstat")]),n._v(" -lntup "),a("span",{pre:!0,attrs:{class:"token operator"}},[n._v("|")]),n._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[n._v("grep")]),n._v(" nginx\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br")])]),a("h2",{attrs:{id:"服务器防火墙相关命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务器防火墙相关命令"}},[n._v("#")]),n._v(" 服务器防火墙相关命令")]),n._v(" "),a("p",[n._v("如果 Nginx 启动成功后，从浏览器访问还是连接不上，按如下步骤排查：")]),n._v(" "),a("ul",[a("li",[n._v("检查阿里云安全组是否开放端口（通过阿里云后台）")]),n._v(" "),a("li",[n._v("检查腾讯云实例管理防火墙是否开放端口（通过腾讯云后台）")]),n._v(" "),a("li",[n._v("服务器防火墙是否开放端口")])]),n._v(" "),a("p",[n._v("（完）")])])}),[],!1,null,null,null);s.default=e.exports}}]);