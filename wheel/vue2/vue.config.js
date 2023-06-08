const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  // mode:'development',
  transpileDependencies: true,

  // devServer: { proxy: "http://127.0.0.1:5000" /* 需要代理的服务器地址 */ }
})
