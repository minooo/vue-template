module.exports = {
  // Global CSS
  head: {
    title: 'my vue app',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1,user-scalable=no'
      },
      {
        hid: 'description',
        name: 'description',
        content: '我的vue, 内容，内容'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      // {
      //   rel: 'stylesheet',
      //   type: 'text/css',
      //   href: 'https://cdn.bootcss.com/bootstrap/4.0.0/css/bootstrap.min.css'
      // },
      // {
      //   rel: 'stylesheet',
      //   type: 'text/css',
      //   href: 'https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.min.css'
      // }
    ],
    script: [
      // {
      //   src: '//res.wx.qq.com/open/js/jweixin-1.2.0.js'
      // }
    ]
  },
  css: [{ src: '~assets/styles/common.scss', lang: 'scss' }],
  // 页面切换时的顶部加载条样式定制，也可以直赋值 false 禁用
  loading: {
    color: 'blue',
    height: '5px'
  },
  router: {
    middleware: 'stats'
  },
  // plugins 属性使得你可以轻易地为 Nuxt.js 配置使用 Vue.js 插件。
  // 其他配置
  // [ { src: '~/plugins/vue-notifications', ssr: false } ]
  plugins: ['~/plugins/vue-notifications'],
  build: {
    analyze: {
      analyzerMode: 'static'
    },
    vendor: ['axios', '~/plugins/vue-notifications'],
    extend(config, ctx) {
      if (ctx.isClient) {
        // Run ESLint on save
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    loaders: [
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: 'url-loader',
        query: {
          limit: 10000, // 10Kb
          name: 'img/[name].[hash].[ext]'
        }
      }
    ],
    postcss: {
      plugins: {
        autoprefixer: {
          browsers: [
            '> 1%',
            'last 7 versions',
            'not ie <= 8',
            'ios >= 8',
            'android >= 4.0'
          ]
        }
      }
    }
  }
}
