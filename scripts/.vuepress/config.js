module.exports = {
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'Math',
      description: 'Easy Math for Coder'
    }
  },
  head: [
    ['script', null, 'var _hmt=_hmt||[];!function(){var e=document.createElement("script");e.src="https://hm.baidu.com/hm.js?5cedb7dc6c843a8d056817e2d52ef28d";var r=document.getElementsByTagName("script")[0];r.parentNode.insertBefore(e,r),_hmt.push(["_requirePlugin","UrlChangeTracker",{shouldTrackUrlChange:function(e,r){var t=function(e){return e.replace(/[?#].*$/,"")};return t(e)!==t(r)}}])}()'],
    ['script', { async: true, src: 'https://www.googletagmanager.com/gtag/js?id=G-FR9MQET06Y' }],
    ['script', null, 'function gtag(){dataLayer.push(arguments)}dataLayer=self.dataLayer||[],gtag("js",new Date),gtag("config","G-FR9MQET06Y")']
  ],
  markdown: {
    // lineNumbers: true
  },
  themeConfig: {
    activeHeaderLinks: false,
    sidebar: 'auto',
    lastUpdated: true,
    repo: 'haozi/Math',
    repoLabel: 'Github',
    docsDir: 'docs',
    docsBranch: 'master',
    nav: [{
      text: 'Home',
      link: '/'
    },
    {
      text: 'More',
      items: [{
        text: 'XSS',
        link: 'https://xss.haozi.me'
      },
      {
        text: 'JSON/URI',
        link: 'https://jsonuri.js.org/'
      }]
    }]
  },
  plugins: [
    [
      'vuepress-plugin-mathjax', {
        target: 'svg',
        macros: {
          '*': '\\times'
        }
      }
    ],
    [
      'vuepress-plugin-comment', {
        choosen: 'gitalk',
        options: {
          clientID: '57f16373f90dd62b1b30',
          clientSecret: '494142f6184aa16fa320d69b5ea09eb420e7a013',
          repo: 'Math',
          owner: 'haozi',
          admin: [
            'haozi'
          ],
          distractionFreeMode: false
        }
      }
    ]
  ]
}
