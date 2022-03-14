const { config } = require('vuepress-theme-hope')

module.exports = config({
  title: 'Hello World',
  description: 'welcome Hello W\' study notes',
  dest: './dist',
  port: '8888',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['link', { rel: 'stylesheet', href: '/css/style.css' }],
    ['script', { charset: 'utf-8', src: 'https://unpkg.com/sweetalert/dist/sweetalert.min.js' }],
    ['script', { charset: 'utf-8', src: '/js/main.js' }]
  ],
  markdown: {
    lineNumbers: true
  },
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  themeConfig: {
    docsRepo: 'keyl-liucong/study_notes',
    docsDir: 'docs',
    logo: '/img/logo.png',
    nav: require('./nav.js'),
    sidebar: require('./sidebar.js'),
    sidebarDepth: 2,
    lastUpdated: '上次更新',
    searchMaxSuggestoins: 10,
    editLinks: false,
    editLinkText: '帮助我们改善此页面！',
    smoothScroll: true,
    // vuepress-theme-hope config
    author: 'keyl-liucong',
    hostname: 'https://keyl-liucong.github.io/',
    darkmode: 'disable',
    themeColor: false,
    blog: false,
    pageInfo: false,
    mdEnhance: {
      enableAll: false
    },
    comment: false,
    copyright: false,
    git: {
      timezone: 'Asia/Shanghai'
    },
    pwa: false,
    copyCode: false,
    photoSwipe: false,
    repoDisplay: false,
    fullscreen: false,
    sidebarIcon: false,
    breadcrumb: false,
    contributor: false
  },
  plugins: ['one-click-copy']
})