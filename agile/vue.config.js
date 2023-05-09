const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port : 8080,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers' : 'Content-Type'
    },
    proxy: {
    '/' : {
        target:'http://192.168.0.62:8080',
        changeOrigin:true,
        ws:false
      },
    }
  }
})