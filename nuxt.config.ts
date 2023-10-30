export default defineNuxtConfig({
  experimental: {
    payloadExtraction: false,
  },
  devServer: {
    port: 8888,
  },
  modules: [
    '@unocss/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/robots',
    'nuxt-simple-sitemap',
  ],
  postcss: {
    plugins: {
      autoprefixer: {}, // 自动添加前缀
      cssnano: {},
    },
  },
  css: ['assets/css/main.scss'],
  sitemap: {
    siteUrl: 'https://www.xxx.com',
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/'],
    },
    devProxy: {
      '/xxx/api': {
        target: 'http://192.168.111.88/xxx/api',
        ws: false,
        changeOrigin: true,
      },
    },
  },
  app: {
    head: {
      title: 'websilte global title',
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
        {
          name: 'keywords',
          content: 'websilte global keywords',
        },
        {
          name: 'description',
          content:
            'websilte global description',
        },
        {
          charset: 'utf-8',
        },
        { name: 'theme-color', content: '#FCF2E2' }, // PWA移动浏览器顶部主题颜色
        // 添加百度验证
        // {
        //   name: 'baidu-site-verification',
        //   content: 'codeva-xPGHhJKk8H',
        // },
      ],
      link: [
        {
          hid: 'icon',
          rel: 'icon',
          href: '/logo.ico',
        },
        {
          hid: 'icon',
          rel: 'icon',
          href: '/logo.svg',
        },
        { rel: 'manifest', href: '/manifest.json' },
        // 网址规范化
        { rel: 'canonical', href: 'https://www.xxx.com' },
      ],
      script: [],
    },
  },
})
