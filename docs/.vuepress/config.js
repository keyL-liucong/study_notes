module.exports = {
  title: 'STUDY NOTES',
  description: 'STUDY NOTES',
  base: '/study_notes/',
  theme: 'reco',
  head: [
    // 设置 favor.ico，.vuepress/public 下
    [
      'link', { rel: 'icon', href: '/logo.png' }
    ]
  ],
  locales: {
      '/': {
        lang: 'zh-CN'
      }
  },
  themeConfig: {
      // lastUpdated: '上次更新',
      subSidebar: 'auto',
      nav: [
          { text: '首页', link: '/' },
          { 
              text: 'Hello W BLOG', 
              items: [
                { text: 'Github', link: 'https://github.com/keyL-liucong' },
              ]
          }
      ],
      sidebar: [
          {
              title: 'html',
              path: '/html/TheBasics',
              collapsable: true,
              children: [
                  { title: "html", path: "/html/TheBasics" },
              ]
          },
          {
            title: "css",
            path: '/css/TheBasics',
            collapsable: true,
            children: [
              { title: "css", path: "/css/TheBasics" },
            ],
          },
          {
            title: "javascript",
            path: '/javascript/TheBasics',
            collapsable: true,
            children: [
              { title: "js运行机制", path: "/javascript/TheOperatingMechanism" },
              { title: "闭包", path: "/javascript/Closure" },
              { title: "JavaScript深入之从原型到原型链", path: "/javascript/prototype" },
              { title: "es5", path: "/javascript/es5" },
              { title: "js异步解决方案", path: "/javascript/Async" },
              { title: "promise", path: "/javascript/Promise" },
              { title: "js设计模式", path: "/javascript/DesignPattern" }
            ],
          },
          {
            title: "Vue",
            path: '/Vue/index',
            collapsable: true,
            children: [ 
              { title: "Vue2.0基础", path: "/Vue/TheBasics2x" },
              { title: "Vue3.0基础", path: "/Vue/TheBasics3x" },
              { title: "Vue2.x源码", path: "/Vue/SourceCode2x" },
              { title: "Vue进阶", path: "/Vue/advance" },
              { title: "Vue Diff算法", path: "/Vue/diff" },
              { title: "Vue源码解读", path: "/Vue/SourceCode" },
            ],
          },
          {
            title: "React",
            path: '/React/TheBasics',
            collapsable: true,
            children: [
              { title: "React基础", path: "/React/TheBasics" },
              { title: "React进阶", path: "/React/advance" }
            ],
          },
          {
            title: "微信小程序",
            path: '/mp/title',
            collapsable: true,
            children: [
              { title: "小程序发展史", path: "/mp/TheBasics" },
            ],
          },
          {
            title: "webpack",
            path: '/webpack/TheBasics',
            collapsable: true,
            children: [
              { title: "webpack基础", path: "/webpack/TheBasics" },
              { title: "webpack进阶", path: "/webpack/advance" }
            ],
          },
          {
            title: "axios",
            path: '/axios/TheBasics',
            collapsable: true,
            children: [
              { title: "axios基础", path: "/axios/TheBasics" },
            ],
          },
          {
            title: "nodejs",
            path: '/nodejs/index',
            collapsable: true,
            children: [
              { title: "nodejs", path: "/nodejs/TheBasics" },
            ],
          },
          {
            title: "项目总结",
            path: '/project/index',
            collapsable: true,
            children: [
              { title: "常用utils函数", path: "/project/utils" },
              { title: "常用正则表达式", path: "/project/Regular" },
              { title: "后台管理系统权限控制RBAC", path: "/project/RBAC" },
              { title: "常用工具网站", path: "/project/ToolWebSite" }
            ],
          },
          {
            title: "计算机网络",
            path: '/computer/network',
            collapsable: true,
            children: [
              { title: "计算机网络基础", path: "/computer/TheBasics" },
              { title: "http", path: "/computer/Http" },
              { title: "跨域", path: "/computer/CrossDomain" }
            ],
          },
          {
            title: "前端进阶",
            path: '/frontEnd/index',
            collapsable: true,
            children: [
              { title: "前端工程化", path: "/frontEnd/Engineered" },
              { title: "前端性能优化", path: "/frontEnd/Optimization" },
              { title: "前端部署", path: "/frontEnd/Deploy" },
            ],
          }
          // {
          //   title: "编译原理", 
          //   path: '/compiler/TheBasics',
          //   collapsable: true,
          //   children: [
          //     { title: "编译原理", path: "/compiler/TheBasics" },
          //   ],
          // },
          // {
          //   title: "数据结构", 
          //   path: '/dataStructure/TheBasics',
          //   collapsable: true,
          //   children: [
          //     { title: "数据结构", path: "/dataStructure/TheBasics" },
          //   ],
          // },
          // {
          //   title: "操作系统", 
          //   path: '/operatingSystem/TheBasics',
          //   collapsable: true,
          //   children: [
          //     { title: "操作系统", path: "/operatingSystem/TheBasics" },
          //   ],
          // }
        ]
  }
}