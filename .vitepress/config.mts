import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "oop-dev",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '文档', link: '/markdown-examples' },
      { text: '快速开始', link: '/markdown-examples' },
      { text: '云对象oapi', link: '/oapi/oapi' },
      { text: '对象数据库odb', link: '/odb/odb' },
      { text: 'oadmin', link: '/oadmin/page' },
      { text: 'ouni', link: '/ouni/ouni' }
    ],

    sidebar: [
      {
        text: '云对象oapi',
        items: [
          { text: '云对象', link: '/oapi/oapi' },
          { text: '传参', link: '/oapi/args' },
          { text: '请求,响应对象', link: '/oapi/rw' },
          { text: '全局拦截器', link: '/oapi/intercepter' },
          { text: '重定向', link: '/oapi/redirect' }
        ]
      },
      {
        text: '对象数据库odb',
        items: [
          { text: '简介', link: '/odb/odb' },
          { text: '自动建表', link: '/odb/migrate' },
          { text: '增', link: '/odb/add' },
          { text: '删', link: '/odb/del' },
          { text: '改', link: '/odb/update' },
          { text: '查', link: '/odb/get' },
          { text: '云对象引入odb', link: '/odb/dao' },
        ]
      },
      {
        text: 'oadmin管理系统',
        items: [
          { text: '页面路由', link: '/oadmin/page' },
          { text: '云对象调用', link: '/oadmin/oapi' },
          { text: '增删改查实战', link: '/oadmin/crud' },
          { text: '权限控制', link: '/oadmin/auth' },
        ]
      },
      {
        text: 'ouni/小程序/安卓',
        items: [
          { text: '简介', link: '/ouni/ouni' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/oop-dev/oop-dev' }
    ]
  }
})
