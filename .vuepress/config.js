module.exports = {
  title: 'ArikarBlog',
  description: 'ArikarBlog',
  dest: 'public',
  base: '/arikarblog/',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/arikar.ico',
      },
    ],
    [
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1,user-scalable=no',
      },
    ],
  ],
  port: 8866,
  temp: '/path/to/@vuepress/core/.temp',
  theme: 'reco',
  themeConfig: {
    // valineConfig: {
    //   placeholder: '欢迎评论留言',
    //   visitor: true,
    //   recordIP: true,
    //   appId: 'As5zJ2Mjf2XWNzKvx59Yn4u3-gzGzoHsz', // your appId
    //   appKey: 'Q6XmAmMubL9FYXrMv1n7Lqbu', // your appKey
    // },
    nav: [
      {
        text: '主页',
        link: '/',
        icon: 'reco-home',
      },
      {
        text: '时光',
        link: '/timeline/',
        icon: 'reco-date',
      },
      {
        text: '文档',
        icon: 'reco-message',
        items: [
          {
            text: 'vuepress-reco',
            link: '/docs/theme-reco/',
          },
        ],
      },
      {
        text: '关于',
        icon: 'reco-message',
        target: '_blank',
        items: [
          {
            text: 'GitHub',
            link: 'https://github.com/ArikarWang',
            icon: 'reco-github',
          },
        ],
      },
    ],
    subSidebar: 'auto',
    type: 'blog',
    blogConfig: {
      category: {
        location: 2,
        text: '分类',
      },
      tag: {
        location: 3,
        text: '标签',
      },
    },
    friendLink: [
      {
        title: '前端学习路线',
        desc: '好好学习，天天敲代码',
        email: '',
        link: 'https://objtube.github.io/front-end-roadmap/#/',
      },
      {
        title: '午后南杂',
        desc: 'Enjoy when you can, and endure when you must.',
        email: '1156743527@qq.com',
        link: 'https://www.recoluan.com',
      },
      {
        title: 'vuepress-theme-reco',
        desc: 'A simple and beautiful vuepress Blog & Doc theme.',
        avatar: 'https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png',
        link: 'https://vuepress-theme-reco.recoluan.com',
      },
    ],
    logo: '/timg.jpg',
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: 'Last Updated',
    author: 'Arikar',
    authorAvatar: '/arikar.jpg',
    // record: 'xxxx',
    startYear: '2020',
  },
  markdown: {
    lineNumbers: true,
  },
  plugins: [
    [
      '@vuepress-reco/vuepress-plugin-kan-ban-niang',
      {
        theme: ['blackCat'],
        clean: false,
        messages: {
          welcome: '欢迎',
          home: '首页',
          theme: '悲观主义是一种态度，一个勇敢的人的态度',
          close: '88',
        },
      },
    ],
    [
      '@vuepress-reco/vuepress-plugin-bgm-player',
      {
        audios: [
          {
            name: '群青',
            artist: 'YOASOBI,Ayase',
            url: '/arikarblog/YOASOBI、Ayase - 群青.mp3',
            cover: '/arikarblog/群青.jpg',
          },
          {
            name: 'あの夢をなぞって (描绘着那个梦想)',
            artist: 'YOASOBI',
            url: '/arikarblog/YOASOBI - あの夢をなぞって (描绘着那个梦想).mp3',
            cover: '/arikarblog/描绘着那个梦想.jpg',
          },
          {
            name: 'ハルジオン (春紫菀)',
            artist: 'YOASOBI',
            url: '/arikarblog/YOASOBI - ハルジオン (春紫菀).mp3',
            cover: '/arikarblog/春紫菀.jpg',
          },
          {
            name: 'たぶん (大概)',
            artist: 'YOASOBI',
            url: '/arikarblog/YOASOBI - たぶん (大概).mp3',
            cover: '/arikarblog/大概.jpg',
          },
          {
            name: '夜に駆ける (向夜晚奔去)',
            artist: 'YOASOBI',
            url: '/arikarblog/YOASOBI - 夜に駆ける (向夜晚奔去).mp3',
            cover: '/arikarblog/向夜晚奔去.jpg',
          },
          {
            name: '广寒谣',
            artist: '伊格赛听、不靠谱组合',
            url: '/arikarblog/伊格赛听、不靠谱组合 - 广寒谣.mp3',
            cover: '',
          },
        ],
        autoShrink: true,
        shrinkMode: 'mini',
      },
    ],
    [
      '@vuepress-reco/comments',
      {
        solution: 'valine',
        options: {
          placeholder: '欢迎评论留言',
          visitor: true,
          recordIP: true,
          appId: 'As5zJ2Mjf2XWNzKvx59Yn4u3-gzGzoHsz', // your appId
          appKey: 'Q6XmAmMubL9FYXrMv1n7Lqbu', // your appKey
        },
      },
    ],
  ],
};
