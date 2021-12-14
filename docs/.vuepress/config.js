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
              title: '欢迎学习',
              path: '/',
              collapsable: false,
              children: [
                  { title: "学前必读", path: "/" }
              ]
          },
          {
            title: "基础学习",
            path: '/handbook/ConditionalTypes',
            collapsable: false,
            children: [
              { title: "条件类型", path: "/handbook/ConditionalTypes" },
              { title: "泛型", path: "/handbook/Generics" }
            ],
          }
        ]
  }
}