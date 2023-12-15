export default defineNuxtConfig({
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
  postcss: {
    plugins: {
    },
  },
  css: ['assets/style/main.scss'],
  site: {
    url: 'https://www.xxx.com',
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

})
