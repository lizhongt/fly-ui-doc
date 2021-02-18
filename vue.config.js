// import path from 'path'
// eslint-disable-next-line
const path = require('path')
const resolve = dir => path.join(__dirname, dir)

module.exports = {
  // 基本路径
  publicPath: './',

  // 输出文件目录
  outputDir: 'dist',

  // 静态资源目录
  assetsDir: 'static',

  // 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径。
  indexPath: 'index.html',

  // 默认在生成的静态资源文件名中包含hash以控制缓存
  filenameHashing: true,

  // 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码 (在生产构建时禁用 eslint-loader)
  lintOnSave: process.env.NODE_ENV !== 'production',

  // 是否使用包含运行时编译器的 Vue 构建版本
  runtimeCompiler: false,

  // webpack配置

  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md

  chainWebpack: config => {
    // 修复HMR
    config.resolve.symlinks(true)
    config.output.filename('[name].[hash].js').end()
    console.log(__dirname, '__dirname')
    // 增加插件
    config.module
      .rule('md')
      .test(/\.md/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vue-markdown-loader')
      .loader('vue-markdown-loader/lib/markdown-compiler')
      .options({
        raw: true,
        // eslint-disable-next-line space-before-function-paren
        preprocess: function(MarkdownIt, Source) {
          // eslint-disable-next-line space-before-function-paren
          MarkdownIt.renderer.rules.table_open = function() {
            return '<div class="table-container"><table class="table">'
          }
          // eslint-disable-next-line space-before-function-paren
          MarkdownIt.renderer.rules.table_close = function() {
            return '</table></div>'
          }
          return Source
        }
      })
    // 添加别名
    config.resolve.alias
      .set('~', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('utils', resolve('src/utils'))
  },

  configureWebpack: config => {
    config.externals = {}
  },
  // vue-loader 配置项

  // https://vue-loader.vuejs.org/en/options.html

  // vueLoader: {},

  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: true,

  // css相关配置
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {
      scss: {
        additionalData: `@import "~/assets/sass/common_mixin.scss";@import "~/assets/sass/flex.scss";`
      }
    },
    // 启用 CSS modules for all css / pre-processor files.
    requireModuleExtension: false
  },

  // use thread-loader for babel & TS in production build

  // enabled by default if the machine has more than 1 cores

  parallel: require('os').cpus().length > 1,

  // 是否启用dll

  // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#dll-mode

  // dll: false,

  // PWA 插件相关配置

  // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa

  pwa: {},

  // webpack-dev-server 相关配置

  devServer: {
    open: true,

    host: 'localhost',

    port: 8888,

    https: false,

    hotOnly: false,
    // 设置代理
    // proxy: {},

    // eslint-disable-next-line
    before: app => {
      console.log(app)
    }
  },

  // 第三方插件配置

  pluginOptions: {
    // ...
  }
}
