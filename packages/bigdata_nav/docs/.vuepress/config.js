module.exports = {
  base: "/bigdata_nav/",
  title: "小磊哥er的大数智学习导航",
  themeConfig: {
    nav: [
      {
        text: "首页",
        link: "/",
      },
      {
        text: "常用库包",
        items: [
          { text: '网页开发', link: '/01.packages/index.html#web' },
          { text: '爬虫开发', link: '/01.packages/index.html#spider' },
          { text: '数据开发', link: '/01.packages/index.html#data' },
          { text: '办公处理', link: '/01.packages/index.html#office' },
          { text: '媒体处理', link: '/01.packages/index.html#media' },
          { text: '人工智能', link: '/01.packages/index.html#ai' },
        ],
      },
      {
        text: "平台工具",
        items: [
          { text: '开发工具', link: '/02.tools/index.html#dev' },
        ],
      },
      {
        text: "组织社区",
        items: [
          { text: '社区网站', link: '/03.teams/index.html#web' },
        ],
      }
    ],
  },
};
