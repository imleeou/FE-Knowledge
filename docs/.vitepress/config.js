export default {
  title: '前端开发知识库',
  description: '前端知识、前端开发面试',
  lang:'zh',
  lastUpdated: true,
  base:'/',
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/imleeou/FE-Knowledge' }
    ],
    nav:[
      {
        text: '首页',
        link: '/'
      },
      {
        text: '题目知识',
        activeMatch:'/interviewQuestion/',
        link: '/interviewQuestion/index'
      }
    ],
    sidebar:[
      {
        text:'题目知识',
        // collapsible: true,
        items:[
          {
            text:'html相关',
            link:'/interviewQuestion/html'
          },
          {
            text:'javaScript相关',
            link:'/interviewQuestion/javaScript'
          },
          {
            text:'Vue2相关',
            link:'/interviewQuestion/vue2'
          },
          {
            text:'Vue3相关',
            link:'/interviewQuestion/vue3'
          }
        ]
      }
      
    ],
    footer:{
      message:'Written by Leeou',
      copyright:'收集自网络'
    }
  }
}