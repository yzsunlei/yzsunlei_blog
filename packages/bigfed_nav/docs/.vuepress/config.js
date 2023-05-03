module.exports = {
  base: "/bigfed_nav/",
  title: "小磊哥er的大前端学习导航",
  themeConfig: {
    nav: [
      {
        text: "首页",
        link: "/",
      },
      {
        text: "常用库包",
        items: [
          { text: '框架类库', link: '/01.packages/index.html#framework' },
        ],
      },
      {
        text: "平台工具",
        items: [
          { text: '构建工具', link: '/02.tools/index.html#build' },
        ],
      },
      {
        text: "组织社区",
        items: [
          { text: '团队组织', link: '/03.teams/index.html#team' },
        ],
      },
    ],
  },
};
