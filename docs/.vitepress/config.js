export default {
  title: "前端开发知识库",
  description: "前端知识、前端开发知识整理、前端开发面试、前端开发面试题大收集、前端面试集锦，适用于各阶段前端开发人员的知识库。",
  lang: "zh",
  lastUpdated: true,
  base: "/FE-Knowledge/",
  head:[
    ['link', { rel: 'icon', href: './favicon.ico' }]
  ],
  themeConfig: {
    logo: '../public/fe-icon.png',
    lastUpdatedText: '最近更新时间',
    socialLinks: [
      { icon: "github", link: "https://github.com/imleeou/FE-Knowledge" },
    ],
    nav: [
      {
        text: "首页",
        link: "/",
      },
      {
        text: "必备知识",
        activeMatch: "/necessary/",
        link: "/necessary/index",
      },
      {
        text: "题目知识",
        activeMatch: "/interviewQuestion/",
        link: "/interviewQuestion/index",
      },
    ],
    sidebar: {
      "/necessary/": [
        {
          text: "必备知识",
          items: [
            {
              text: "网络基础",
              link: "/necessary/network",
            },
          ],
        },
      ],
      "/interviewQuestion/": [
        {
          text: "题目知识",
          // collapsible: true,
          items: [
            {
              text: "html相关",
              link: "/interviewQuestion/html",
            },
            {
              text: "javaScript相关",
              link: "/interviewQuestion/javaScript",
            },
            {
              text: "Vue2相关",
              link: "/interviewQuestion/vue2",
            },
            {
              text: "Vue3相关",
              link: "/interviewQuestion/vue3",
            },
          ],
        },
      ],
    },
    footer: {
      message: "Written by Leeou",
      copyright: "收集自网络",
    },
  },
};
