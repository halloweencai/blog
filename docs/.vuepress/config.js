module.exports = {
  title: '羊吃菜',
  description: '个人网站',
  base: '/blog/',
  markdown: {
    lineNumbers: false  // 代码块显示行号
  },
  themeConfig: {
    nav: [
      {text: '首页', link: '/'},
      {text: 'frp配置', link: '/frp'},
      {text: '算法', link: '/algorithm'},
    ]
  }
}