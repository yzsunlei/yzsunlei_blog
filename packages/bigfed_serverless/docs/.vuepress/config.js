module.exports = {
  base: "/bigfed_serverless/",
  title: "小磊哥er的Serverless专题",
  themeConfig: {
    nav: [
      {
        text: "首页",
        link: "/",
      },
      {
        text: "01.简要介绍",
        items: [
          { text: '1.1.定义', link: '/bigfed_serverless/01.简要介绍/1.1.定义.html', target:'_blank' },
        ],
      },
      {
        text: "02.原理与使用",
        items: [
          { text: '2.1.基本原理', link: '/bigfed_serverless/02.原理与使用/2.1.基本原理.html', target:'_blank' },
        ],
      },
      {
        text: "03.平台应用",
        items: [
          { text: '3.1.阿里云', link: '/bigfed_serverless/03.平台应用/3.1.阿里云.html', target:'_blank' },
        ]
      },
      {
        text: "04.实战场景",
        items: [
          { text: '4.1.Web CMS', link: '/bigfed_serverless/04.实战场景/4.1.Web CMS.html', target:'_blank'},
        ]
      },
      {
        text: "05.衍生工具",
        items: [
          { text: '5.1.开发调试工具', link: '/bigfed_server le s s/05.衍生工具/5.1.开发调试工具.html', target:'_blank'},
        ]
      }
    ],
    sidebar: 'auto',
    sidebarDepth: 1
  },
};
