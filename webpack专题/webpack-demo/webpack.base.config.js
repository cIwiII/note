// 两个环境的公共配置
const path = require("path");

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const HappyPack = require('happypack');
// 构造出共享进程池，进程池中包含5个子进程，获取用户电脑信息来设置
var happyThreadPool = HappyPack.ThreadPool({ size: 5 });

const { NODE_ENV } = process.env;
module.exports = {
    mode: NODE_ENV,
    entry: {
        index: './src/main.js'
    },
    // 出口文件位置
    output: {
        // 出口文件的路径(__dirname 获取项目的绝对路径)
        path: path.resolve(__dirname, 'dist'),
        // 出口文件的名称
        filename: 'js/[name].js'
    },
    // 配置 loader
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,     // 需要匹配的文件后缀名
                exclude: /node_modules/, // 排除 node_modules 目录
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                // 将.js文件交给id为babel的 happypack 实例来执行
                // 1) 用 happypack/loader 代原始的 loaders 列表
                use: 'happypack/loader?id=babel',
                // 排除 node_modules 目录下的文件，
                // node_modules 目录下的文件都是采用的 ES5 语法，没必要再通过 Babel 去转换
                exclude: /node_modules/,
            }
        ]
    },
    // 插件
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',   // 源文件路径
            filename: 'index.html',         //打包后的文件名
            chunks: ['index'],              // 对应的入口 js 文件
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'  // 配置打包后的 CSS 文件的存储位置
        }),
        new CopyPlugin({
            patterns: [
                // from：原文件的位置，to：复制后的位置dist/static
                { from: "./src/static", to: "./static" },
            ]
        }),
        // 多进程打包
        new HappyPack({
            // id 标识 happypack 处理那一类文件
            id: 'babel',
            // 共享线程池
            threadPool: happyThreadPool,
            // 3) 配置一个替代步骤 1) 中的loader
            loaders: ['babel-loader'],
            // 日志输出
            verbose: true
        }),
        new HappyPack({
            // id 标识 happypack 处理那一类文件
            id: 'babel2',
            // 共享线程池
            threadPool: happyThreadPool,
            // 3) 配置一个替代步骤 1) 中的loader
            loaders: ['babel-loader'],
            // 日志输出
            verbose: true
        })
    ]
}