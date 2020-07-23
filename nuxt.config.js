const path = require('path')
const webpack = require('webpack')

/**
 * Nuxt configuration
 */
const config = {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  loading: false,
  loadingIndicator: false,
  /**
   * 定义公共的配置
   */
  globalName: 'app',
  globals: {
    id: (globalName) => `${globalName}`,
    nuxt: (globalName) => `$${globalName}`,
    context: (globalName) => `__${globalName.toUpperCase()}__`,
    pluginPrefix: (globalName) => globalName,
  },
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [{ src: '@/plugins/index.ts', ssr: true }],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxt/typescript-build',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
  ],
  styleResources: {
    less: ['./assets/styles/variable.less', './assets/styles/styles.less'],
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    // 'bootstrap-vue/nuxt',
    // '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    transpile: ['ant-design-vue'],
    extractCSS: true,
    analyze: false,
    publicPath: '/static/',
    optimization: {
      splitChunks: {
        chunks: 'async',
        minSize: 30000,
        maxSize: 0,
        minChunks: 1,
        maxAsyncRequests: 5,
        maxInitialRequests: 3,
        automaticNameDelimiter: '~',
        automaticNameMaxLength: 30,
        name: true,
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
          },
        },
      },
    },
    babel: {},
    loaders: {
      less: {
        lessOptions: {
          modifyVars: {
            'primary-color': '#00cccc', // 全局主色
            'link-color': '#00cccc', // 链接色
            'success-color': '#52c41a', // 成功色
            'warning-color': '#faad14', // 警告色
            'error-color': '#f5222d', // 错误色
            'font-size-base': '14px', // 主字号
            'heading-color': 'rgba(0, 0, 0, .85)', // 标题色
            'text-color': 'rgba(0, 0, 0, .65)', // 主文本色
            'text-color-secondary': 'rgba(0, 0, 0, .45)', // 次文本色
            'disabled-color': 'rgba(0, 0, 0, .25)', // 失效色
            'border-radius-base': '4px', // 组件/浮层圆角
            'border-color-base': '#d9d9d9', // 边框色
            'box-shadow-base': '0 2px 8px rgba(0, 0, 0, .15)', // 浮层阴影
          },
          javascriptEnabled: true,
        },
      },
    },
    plugins: [
      // Ignore all locale files of moment.js
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    ],
    extend(config, ctx) {
      config.resolve.alias['@assets'] = path.join(__dirname, './assets')
    },
  },
  render: {
    compressor: false,
  },
}

export default config
