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
    sidebar: 'auto',
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
          welcome: 'welcome',
          home: 'home',
          theme: 'theme',
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
        ],
        autoShrink: true,
        shrinkMode: 'mini',
      },
    ],
  ],
};
