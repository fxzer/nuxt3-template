export default defineNuxtConfig({
  ssr: false,
  typescript: { // 启用 dev/build 类型检查
    typeCheck: true,
  },
  runtimeConfig: {
    // 只在服务器端可用的私有键
    apiSecret: '123',
    apiOther: 'xxx',
    // public中的键也可以在客户端使用
    public: {
      apiBase: '/api',
      apiBase2: '/api2',
    },
  },
  vue: {
    defineModel: true,
    propsDestructure: true,
  },
  experimental: {
    payloadExtraction: false,
  },
  devServer: {
    port: 9898,
  },
  modules: [
    'nuxt-icon',
    '@unocss/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/robots',
    'nuxt-simple-sitemap',
  ],
  css: ['assets/style/main.scss'],
  site: {
    url: 'https://www.xxx.com',
  },
  routeRules: {
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
    // pageTransition: { name: 'page', mode: 'out-in' }, // 启用所有的页面应用自动过渡效果
    head: {
      title: 'Site Title',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        {
          name: 'keywords',
          content: 'keyword1、keyword2、keyword3',
        },
        {
          name: 'description',
          content:
            'site description',
        },
        { name: 'theme-color', content: '#FCF2E2' }, // PWA移动浏览器顶部主题颜色
        // 添加百度验证
        {
          name: 'baidu-site-verification',
          content: 'codeva-PPGHhJKk9H',
        },
      ],
      link: [
        {
          hid: 'icon',
          rel: 'icon',
          href: '/favicon.ico',
        },
        {
          hid: 'icon',
          rel: 'icon',
          href: '/favicon.svg',
        },
        { rel: 'manifest', href: '/manifest.json' },
        // 网址规范化
        { rel: 'canonical', href: 'https://www.xxx.com' },
      ],
      script: [
        { innerHTML: 'console.log(\'Nuxt Hello world\')' },
      ],
    },
  },

})
