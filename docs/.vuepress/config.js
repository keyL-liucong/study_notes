module.exports = {
  title: 'study records',
  description: 'study records',
  base: '/study_notes/',
  theme: 'reco',
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
              text: 'Hello W blog', 
              items: [
                { text: 'Github', link: 'https://github.com/keyL-liucong' },
              ]
          }
      ],
      sidebar: [
        {
          title: "基础学习",
          path: '/handbook/ConditionalTypes',
          collapsable: true, // 不折叠
          children: [
            { title: "条件类型", path: "/handbook/ConditionalTypes" },
            { title: "泛型", path: "/handbook/Generics" }
          ],
        },

          {
              title: 'html',
              path: '/html/TheBasics',
              collapsable: true,
              children: [
                  { title: "html", path: "/html/TheBasics" },
                  { title: "html", path: "/html/TheBasics" }
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
              { title: "基础", path: "/javascript/TheBasics" },
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