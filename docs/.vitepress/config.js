export default {
    base: process.env.NODE_ENV === 'production' ? '/my-blog/' : '/', 
    title: '5399',
    description: 'txwm好啊',
    themeConfig: {
      nav: [
        { text: '首页', link: '/' },
        { text: '文章', link: '/posts/' }
      ],
      sidebar: [
        {
          text: '文章',
          items: [
            { text: 'JS', link: '/posts/first-post' }
          ]
        }
      ]
    }
  }