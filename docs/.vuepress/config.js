module.exports = {
  title: '羊吃菜',
  description: '个人网站',
  base: '/blog/',
  markdown: {
    lineNumbers: false  // 代码块显示行号
  },
  themeConfig: {
    nav: [
      { text: '概述', link: '/' },
      { text: '相关学习',
        items: [
          { text: 'js', link: '/learn/js/'},
          { text: 'algorithm', link: '/learn/algorithm/'}
        ]
      }
    ],
    sidebar: {
      '/learn/algorithm/': [
        'test1',
        'test2'
      ],
      '/learn/js/': [
        {
          title: "js",
          collapsable: true,
          children: [
            { title: "js1", path: "js1" }
          ],
        }
      ]
    },
  }
}