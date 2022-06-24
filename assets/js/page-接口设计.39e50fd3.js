(window.webpackJsonp=window.webpackJsonp||[]).push([[193],{895:function(s,e,a){"use strict";a.r(e);var n=a(1),t=Object(n.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"接口设计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#接口设计"}},[s._v("#")]),s._v(" 接口设计")]),s._v(" "),a("blockquote",[a("p",[s._v("接口设计遵循 RESTful 规范，这是目前最流行的 API 设计规范。")])]),s._v(" "),a("p",[s._v("在 RESTful 风格中，URL 被视为「资源」，要求使用名词进行说明，一般标准如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("http(s)://域名:端口[/版本]/资源1[/子资源2/.../子资源n][/路径变量]\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("其中版本号是可选项，用于版本控制，通常使用 v1 / v1.1 这样的格式进行表达。如果版本号没有写，则默认使用最新版本获取资源。")]),s._v(" "),a("p",[s._v("下面列几个 RESTful 接口设计的注意点。")]),s._v(" "),a("h2",{attrs:{id:"域名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#域名"}},[s._v("#")]),s._v(" 域名")]),s._v(" "),a("p",[s._v("应该尽量将 API 部署在专用域名之下。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("https://api.example.com\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("如果确定 API 很简单，不会有进一步扩展，可以考虑放在主域名下。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("https://example.org/api/\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"版本-versioning"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#版本-versioning"}},[s._v("#")]),s._v(" 版本（Versioning）")]),s._v(" "),a("p",[s._v("应该将 API 的版本号放入 URL。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("https://api.example.com/v1/\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("另一种做法是，将版本号放在 HTTP 头信息中，但不如放入 URL 方便和直观。"),a("a",{attrs:{href:"https://developer.github.com/v3/media/#request-specific-version",target:"_blank",rel:"noopener noreferrer"}},[s._v("Github"),a("OutboundLink")],1),s._v(" 采用这种做法。")]),s._v(" "),a("h2",{attrs:{id:"路径-endpoint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#路径-endpoint"}},[s._v("#")]),s._v(" 路径（Endpoint）")]),s._v(" "),a("p",[s._v("路径又称「终点」（endpoint），表示 API 的具体网址。")]),s._v(" "),a("p",[s._v("在 RESTful 架构中，每个网址代表一种资源（resource），所以网址中"),a("strong",[s._v("不能有动词，只能有名词")]),s._v("，而且所用的名词往往与数据库的表格名对应。一般来说，数据库中的表都是同种记录的「集合」（collection），所以 API 中的名词也应该使用"),a("strong",[s._v("复数")]),s._v("。")]),s._v(" "),a("p",[s._v("举例来说，有一个 API 提供动物园（zoo）的信息，还包括各种动物和雇员的信息，则它的路径应该设计成下面这样。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("https://api.example.com/v1/zoos\nhttps://api.example.com/v1/animals\nhttps://api.example.com/v1/employees\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("blockquote",[a("p",[s._v("URL 中的名词，应该使用复数，还是单数？")]),s._v(" "),a("p",[s._v("这没有统一的规定，常见的操作是读取一个集合，比如 "),a("code",[s._v("GET /articles")]),s._v("（读取所有文章），这里明显应该是复数。")]),s._v(" "),a("p",[s._v("为了统一起见，建议都使用复数 URL，比如 "),a("code",[s._v("GET /articles/2")]),s._v(" 要好于 "),a("code",[s._v("GET /article/2")]),s._v("。")])]),s._v(" "),a("h2",{attrs:{id:"http-动词"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-动词"}},[s._v("#")]),s._v(" HTTP 动词")]),s._v(" "),a("p",[s._v("对于资源的具体操作类型，由 HTTP 动词表示。")]),s._v(" "),a("p",[s._v("常用的 HTTP 动词有下面五个（括号里是对应的 SQL 命令）。")]),s._v(" "),a("ul",[a("li",[s._v("GET（SELECT）：从服务器取出资源（一项或多项）。")]),s._v(" "),a("li",[s._v("POST（CREATE）：在服务器新建一个资源。")]),s._v(" "),a("li",[s._v("PUT（UPDATE）：在服务器更新资源（客户端提供改变后的完整资源）。")]),s._v(" "),a("li",[s._v("PATCH（UPDATE）：在服务器更新资源，通常是部分更新（客户端提供改变的属性）。")]),s._v(" "),a("li",[s._v("DELETE（DELETE）：从服务器删除资源。")])]),s._v(" "),a("p",[s._v("还有两个不常用的 HTTP 动词。")]),s._v(" "),a("ul",[a("li",[s._v("HEAD：获取资源的元数据。")]),s._v(" "),a("li",[s._v("OPTIONS：获取信息，关于资源的哪些属性是客户端可以改变的。")])]),s._v(" "),a("p",[s._v("下面是一些例子（根据 HTTP 规范，动词一律大写）：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("GET /zoos                     列出所有动物园\nPOST /zoos                    新建一个动物园\nGET /zoos/ID                  获取某个指定动物园的信息\nPUT /zoos/ID                  更新某个指定动物园的信息（提供该动物园的全部信息）\nPATCH /zoos/ID                更新某个指定动物园的信息（提供该动物园的部分信息）\nDELETE /zoos/ID               删除某个动物园\nGET /zoos/ID/animals          列出某个指定动物园的所有动物\nDELETE /zoos/ID/animals/ID    删除某个指定动物园的指定动物\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h2",{attrs:{id:"过滤信息-filtering"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#过滤信息-filtering"}},[s._v("#")]),s._v(" 过滤信息（Filtering）")]),s._v(" "),a("p",[s._v("如果记录数量很多，服务器不可能都将它们返回给用户。API 应该提供参数，过滤返回结果。")]),s._v(" "),a("p",[s._v("下面是一些常见的参数：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("?limit=10                     指定返回记录的数量\n?offset=10                    指定返回记录的开始位置\n?page=2&per_page=100          指定第几页，以及每页的记录数\n?sortby=name&order=asc        指定返回结果按照哪个属性排序，以及排序顺序\n?animal_type_id=1             指定筛选条件\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("参数的设计允许存在冗余，即允许 API 路径和 URL 参数偶尔有重复。比如，"),a("code",[s._v("GET /zoo/ID/animals")]),s._v(" 与 "),a("code",[s._v("GET /animals?zoo_id=ID")]),s._v(" 的含义是相同的。")]),s._v(" "),a("h2",{attrs:{id:"状态码-status-codes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#状态码-status-codes"}},[s._v("#")]),s._v(" 状态码（Status Codes）")]),s._v(" "),a("p",[s._v("客户端的每一次请求，服务器都必须给出回应。回应包括 HTTP 状态码和数据两部分。")]),s._v(" "),a("p",[s._v("HTTP 状态码就是一个三位数，分成五个类别。")]),s._v(" "),a("ul",[a("li",[s._v("1xx：接受的请求正在处理 （信息性状态码）")]),s._v(" "),a("li",[s._v("2xx：表示请求正常处理完毕 （成功状态码）")]),s._v(" "),a("li",[s._v("3xx：表示重定向状态，需要重新请求 （重定向状态码）")]),s._v(" "),a("li",[s._v("4xx：服务器无法处理请求 （客户端错误状态码）")]),s._v(" "),a("li",[s._v("5xx：服务器处理请求出错 （服务端错误状态码）")])]),s._v(" "),a("p",[s._v("这五大类总共包含 "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/List_of_HTTP_status_codes",target:"_blank",rel:"noopener noreferrer"}},[s._v("100 多种"),a("OutboundLink")],1),s._v("状态码，覆盖了绝大部分可能遇到的情况。每一种状态码都有标准的（或者约定的）解释，客户端只需查看状态码，就可以判断出发生了什么情况，所以服务器应该返回尽可能精确的状态码。")]),s._v(" "),a("p",[s._v("常用的状态码有以下一些（方括号中是该状态码对应的 HTTP 动词）：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("200 OK                     - [GET]             服务器成功返回用户请求的数据，该操作是幂等的（Idempotent）。\n201 Created                - [POST/PUT/PATCH]  用户新建或修改数据成功。\n202 Accepted               - [*]               表示一个请求已经进入后台排队（异步任务）。\n204 No Content             - [DELETE]          用户删除数据成功。\n400 Bad Request            - [POST/PUT/PATCH]  服务器不理解客户端的请求，未做任何处理。\n401 Unauthorized           - [*]               用户未提供身份验证凭据，或者没有通过身份验证。\n403 Forbidden              - [*]               用户通过了身份验证，但是不具有访问资源所需的权限。\n404 Not Found              - [*]               所请求的资源不存在，或不可用。\n405 Method Not Allowed     - [*]               用户已经通过身份验证，但是所用的 HTTP 方法不在他的权限之内。\n406 Not Acceptable         - [GET]             请求的资源的内容特性无法满足请求头中的条件，因而无法生成响应实体，即我要的你不给（比如用户请求 JSON 格式，但是只有 XML 格式）。\n410 Gone                   - [GET]             所请求的资源已从这个地址转移，不再可用。\n415 Unsupported Media Type - [POST/PUT/PATCH]  服务器拒绝服务，原因是请求格式不被支持，即我给的你不要（比如 API 只能返回 JSON 格式，但是客户端要求返回 XML 格式）。\n422 Unprocesable entity    - [POST/PUT/PATCH]  客户端上传的附件无法处理，导致请求失败。\n429 Too Many Requests      - [*]               客户端的请求次数超过限额。\n500 Internal Server Error  - [*]               客户端请求有效，服务器处理时发生了意外。\n503 Service Unavailable    - [*]               服务器无法处理请求，一般用于网站维护状态。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("p",[s._v("注意事项：")]),s._v(" "),a("ul",[a("li",[s._v("API 不需要 1xx 状态码。")]),s._v(" "),a("li",[s._v("API 用不到 301 状态码（永久重定向）和 302 状态码（暂时重定向，307 也是这个含义），因为它们可以由应用级别返回，浏览器会直接跳转，API 级别可以不考虑这两种情况。")]),s._v(" "),a("li",[s._v("API 用到的 3xx 状态码，主要是 303（See Other），表示参考另一个 URL。它与 302 和 307 的含义一样，也是「暂时重定向」，区别在于 302 和 307 用于 GET 请求，而 303 用于 POST、PUT 和 DELETE 请求。收到 303 以后，浏览器不会自动跳转，而会让用户自己决定下一步怎么办。")]),s._v(" "),a("li",[s._v("一般来说，API 不会向用户透露服务器的详细信息，所以表示服务端错误的 5xx 状态码只要两个就够了：500 和 503。")])]),s._v(" "),a("p",[s._v("状态码的完全列表参见"),a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status",target:"_blank",rel:"noopener noreferrer"}},[s._v("这里"),a("OutboundLink")],1),s._v("。")]),s._v(" "),a("h2",{attrs:{id:"返回结果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#返回结果"}},[s._v("#")]),s._v(" 返回结果")]),s._v(" "),a("blockquote",[a("p",[s._v("API 返回的数据格式，不应该是纯文本，而应该是一个 JSON 对象，因为这样才能返回标准的结构化数据。")]),s._v(" "),a("p",[s._v("所以，服务器回应的 HTTP 头的 "),a("code",[s._v("Content-Type")]),s._v(" 属性要设为 "),a("code",[s._v("application/json")]),s._v("。")]),s._v(" "),a("p",[s._v("客户端请求时，也要明确告诉服务器，可以接受 JSON 格式，即请求的 HTTP 头的 "),a("code",[s._v("ACCEPT")]),s._v(" 属性也要设成 "),a("code",[s._v("application/json")]),s._v("。")])]),s._v(" "),a("p",[s._v("RESTful 响应的 JSON 结构应当全局保持相同的结构与语义，这里我给出行业最常见的数据格式范例。")]),s._v(" "),a("p",[s._v("在"),a("strong",[s._v("标准化的响应结构")]),s._v("中，要包含 code、message 两项，分别对应了服务器处理结果与返回的消息内容。除此以外，data 属性是可选项，包含从响应返回的额外数据，如查询结果、新增或更新后的数据。")]),s._v(" "),a("p",[s._v("在"),a("strong",[s._v("语义层面")]),s._v("，也要遵循相同的规则。例如，当服务器处理成功，code 固定等于 0；如果遇到异常情况，公司内部也要遵循统一的 code 命名标准。例如：code 以 1xxx 开头代表参数异常，2xxx 开头代表数据库处理异常。")]),s._v(" "),a("blockquote",[a("p",[s._v("注意：这里的 code 与 HTTP 状态码（Status Codes）是两码事，请不要混淆。")])]),s._v(" "),a("p",[s._v("当然不同的公司有不同的命名规则，一定要提前定义好并要求开发团队严格按语义使用编码。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('{\n    code:"0" ,\n    message : "success" ,\n    data : {\n        employee : {\n            name : "张三",\n            salary : 3500 , \n            version : 2\n        }\n    }\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("（完）")])])}),[],!1,null,null,null);e.default=t.exports}}]);