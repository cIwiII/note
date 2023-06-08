// 开发环境的配置

const base = require('./webpack.base.config');
const { merge } = require('webpack-merge');

module.exports = merge(base, {
    devtool: "eval",
    watchOptions: {
        ignored: /node_modules/
    },
    devServer: {
        hot: true,  // 启动热更新
        port: 3000, // 设置服务器端口号为 3000
        open: true, // 启动服务器时自动打开浏览器
        proxy: {    // 代理跨域配置
            '/api': {
                target: 'http://localhost:8080',  // 后端服务器地址
                changeOrigin: true,
                pathRewrite: { "^/api": "" }
            }
        }
    }
})