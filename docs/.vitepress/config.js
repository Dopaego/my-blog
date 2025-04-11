export default {
    base: process.env.NODE_ENV === 'production' ? '/my-blog/' : '/', 
    title: '我的博客',
    description: '欢迎来到我的技术博客',
    themeConfig: {
      nav: [
        { text: '首页', link: '/' },
        { text: '文章', link: '/posts/' }
      ],
      sidebar: [
        {
          text: '文章',
          items: [
            { text: '第一篇文章', link: '/posts/first-post' }
          ]
        }
      ]
    }
  }