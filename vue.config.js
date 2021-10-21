module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://152.136.185.210:4000/',
        pathRewrite: {
          '^/api': ''
        },
        ws: true,
        changeOrigin: true
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        views: '@/views'
      },
      extensions: ['.js', '.json', '.wasm', '.vue', '.ts']
    }
  }
}
