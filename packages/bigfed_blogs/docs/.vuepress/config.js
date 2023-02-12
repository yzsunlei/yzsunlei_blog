module.exports = {
  base: "/bigfed_blogs/",
  title: "小磊哥er的大前端博文杂记",
  theme: '@vuepress/blog',
  themeConfig: {
    nav: [
      {
        text: "博文",
        link: "/",
      },
      {
        text: "阅读",
        link: "/02.read/",
      },
    ],
    directories: [
      {
        id: 'blog',
        dirname: '01.blog',
        path: '/',
        title: "博文"
      },
      {
        id: 'read',
        dirname: '02.read',
        path: '/02.read/',
        title: "阅读"
      },
    ],
    sidebar: 'auto',
    sidebarDepth: 1,
    globalPagination: {
      prevText: "上一页",
      nextText: "下一页",
    },
    footer: {
      copyright: [
        {
          text: "MIT Licensed | Copyright © 2023-present 小磊哥er"
        }
      ]
    }
  },
};
