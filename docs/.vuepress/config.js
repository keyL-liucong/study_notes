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
              { title: "JavaScript深入之从原型到原型链", path: "/javascript/prototype" },
              { title: "es5", path: "/javascript/es5" }
            ],
          },
          {
            title: "Vue",
            path: '/Vue/TheBasics',
            collapsable: true,
            children: [
              { title: "Vue基础", path: "/Vue/TheBasics" },
              { title: "Vue进阶", path: "/Vue/advance" }
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
            title: "项目总结",
            path: '/project/Summary',
            collapsable: true,
            children: [
              { title: "后台管理系统权限控制RBAC", path: "/project/RBAC" },
            ],
          },
          {
            title: "计算机网络",
            path: '/computer/network',
            collapsable: true,
            children: [
              { title: "计算机网络基础", path: "/computer/TheBasics" },
            ],
          },
          {
            title: "编译原理", 
            path: '/compiler/TheBasics',
            collapsable: true,
            children: [
              { title: "编译原理", path: "/compiler/TheBasics" },
            ],
          },
          {
            title: "数据结构", 
            path: '/dataStructure/TheBasics',
            collapsable: true,
            children: [
              { title: "数据结构", path: "/dataStructure/TheBasics" },
            ],
          },
          {
            title: "操作系统", 
            path: '/operatingSystem/TheBasics',
            collapsable: true,
            children: [
              { title: "操作系统", path: "/operatingSystem/TheBasics" },
            ],
          }
        ]
  }
}