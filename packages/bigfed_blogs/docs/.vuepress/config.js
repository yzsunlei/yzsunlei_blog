module.exports = {
  base: "/bigfed_blogs/",
  title: "小磊哥er的大前端博文杂记",
  theme: '@vuepress/blog',
  themeConfig: {
    nav: [
      {
        text: "首页",
        link: "/",
      },
      {
        text: "博文",
        items: [
          { text: 'B.《CSS世界》', link: '/bigfed_notes/01.basis/B.《CSS世界》.html', target:'_blank' }
        ],
      },
      {
        text: "阅读",
        items: [
          { text: 'E.《JavaScript异步编程》', link: '/bigfed_notes/02.advance/E.《JavaScript异步编程》.html', target:'_blank' },
        ],
      },
    ],
    sidebar: 'auto',
    sidebarDepth: 1
  },
};
