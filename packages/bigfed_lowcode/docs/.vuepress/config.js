module.exports = {
  base: "/bigfed_lowcode/",
  title: "小磊哥er的低代码专题",
  themeConfig: {
    nav: [
      {
        text: "首页",
        link: "/",
      },
      {
        text: "01.基础概述",
        items: [
          { text: '1.1.基本定义', link: '/bigfed_serverless/01.基础概述/1.1.基本定义.html', target:'_blank' },
        ],
      },
      {
        text: "02.相关技术",
        items: [
          { text: '2.1.sortablejs', link: '/bigfed_serverless/02.相关技术/2.1.sortablejs.html', target:'_blank' },
        ],
      },
      {
        text: "03.核心实践",
        items: [
          { text: '3.1.管理', link: '/bigfed_serverless/03.核心实践/3.1.管理.html', target:'_blank' },
        ]
      },
      {
        text: "04.应用扩展",
        items: [
          { text: '4.1.历史记录', link: '/bigfed_serverless/04.应用扩展/4.1.历史记录.html', target:'_blank'},
        ]
      },
      {
        text: "05.技术原理",
        items: [
          { text: '5.1.基本协议', link: '/bigfed_serverless/05.技术原理/5.1.基本协议.html', target:'_blank'},
        ]
      },
      {
        text: "06.开源项目",
        items: [
          { text: '6.1.lowcode-engine', link: '/bigfed_serverless/06.开源项目/6.1.基本协议.html', target:'_blank'},
        ]
      }
    ],
    sidebar: 'auto',
    sidebarDepth: 1
  },
};
