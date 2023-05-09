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
          { text: '图形动效', link: '/01.packages/index.html#animation' },
          { text: '游戏框架', link: '/01.packages/index.html#game' },
          { text: 'Node.js框架', link: '/01.packages/index.html#nodejs' },
        ],
      },
      {
        text: "平台工具",
        items: [
          { text: '构建工具', link: '/02.tools/index.html#build' },
          { text: '开发工具', link: '/02.tools/index.html#dev' },
          { text: '调试工具', link: '/02.tools/index.html#debugger' },
          { text: '设计资源', link: '/02.tools/index.html#design' },
          { text: '字体图标', link: '/02.tools/index.html#font' },
        ],
      },
      {
        text: "组织社区",
        items: [
          { text: '团队组织', link: '/03.teams/index.html#team' },
          { text: '开发社区', link: '/03.teams/index.html#community' },
          { text: '门户网站', link: '/03.teams/index.html#portal' },
          { text: '前端大会', link: '/03.teams/index.html#meeting' },
          { text: '前端公众号', link: '/03.teams/index.html#wxcode' },
          { text: '前端牛人', link: '/03.teams/index.html#person' },
        ],
      },
    ],
  },
};
