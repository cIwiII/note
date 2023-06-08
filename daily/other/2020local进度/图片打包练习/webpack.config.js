//编写webpack打包配置
//引入path系统模块,查找绝对路径js文件使用
let path = require('path')
//html打包插件配置引入
let HtmlWebpackPlugin = require('html-webpack-plugin');
//css打包插件配置引入
let CssExtractPlugin = require('mini-css-extract-plugin');
//文件过多采用数组 自动生成,数组存放文件名
let nameArr = ['index', 'login'];
//
let webpack = require('webpack')
//遍历函数方法
function getEntry() {
    //entry是个对象，创建对象
    let obj = {};
    nameArr.forEach(valname => {
        obj[valname] = `./src/js/${valname}.js`
    })
    return obj
}
function getHtml() {
    let htmlArr = [];
    nameArr.forEach(function (valname) {
        htmlArr.push(
            new HtmlWebpackPlugin({
                //参照项目根目录
                template: `./src/html/${valname}.html`,
                //参照dist文件目录，打包后的文件地址和名字
                filename: `./html/${valname}.html`,
                //<script defer="defer">异步加载js文件,
                chunks: [valname]
            })
        )

    })
    return htmlArr
}


module.exports = {
    mode: 'production',//打包模式,正式上线需要更改模式
    /* entry:{
        index:'./src/js/index.js',//打包单个文件路径
        login:'./src/js/login.js'
    }, */
    //函数方法动态生成
    entry: getEntry(),
    //配置打包文件输出位置
    output: {
        //引入第三方包line3，打包路径,打包位置名字
        path: path.resolve(__dirname, 'dist'),
        //[]动态填充文件名，name原文件名
        filename: 'js/[name].js'

    },
    /*  plugins:[
         //创建HtmlWebpackPlugin对象和内部配置
         new HtmlWebpackPlugin({
             //参照项目根目录
             template:'./src/html/index.html',
             //参照dist文件目录，打包后的文件地址和名字
             filename:'./html/index.html',
             //<script defer="defer">异步加载js文件
             chunks:['index']
         })
     ] */
    //多个值函数调用
    plugins: [
        ...getHtml(), //数组解构赋值
        new CssExtractPlugin({
            //打包后存放位置,dist开始
            filename: './css/[name].css'
        }),
        new webpack.ProvidePlugin({
            "$": "jquery"
            //bootstrap应用，参照node_modules放主js文件中
            // import 'bootstrap/dist/css/bootstrap.min.css';
            // import 'bootstrap/dist/js/bootstrap.min.js';
        })
    ],
    //module打包规则配置
    module: {
        rules: [
            {
                test: /\.css$/i,//规则
                use: [CssExtractPlugin.loader, 'css-loader']//根据配置自动打包css

            },
            //sass
            {
                test: /\.scss$/i,
                //指定以什么插件进行打包 
                use: [CssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            //img规则 
            {
                test: /\.(jpg|png|jpeg|gif|svg|psd|tif|bmp|webp)$/i,
                //转为base64字符串格式,无法正常显示，取消↓行代码注释
                // type:'javascript/auouto',
                use: {
                    loader: 'url-loader',
                    options: {
                        //将10KB以下的图片自动转为base64字符串格式放在页面中 
                        limit: 1024 * 10,
                        //输出，参照(dist)中的路径，根目录为dist
                        outputPath: './image/',
                        //原名字
                        name: '[name].[ext]',
                        esModule: false//用于解决兼容问题                    
                    }
                }

            },
            //对html文件中的图片的打包规则配置            
            {
                test: /\.html$/i,
                use: ['html-withimg-loader']
            }
        ]

    },
    devServer: {
        port: 8880,//服务器端口
        open: true,//启动服务器时自动打开一个页面
        openPage: './html/index.html',//要打开的页面 ,参照dist文件路径
        hot: true//热部署，更新代码后，服务器自动进行打包        
        /* proxy:{   //代理服务器 
            "/":{
                target:'http://localhost:1314'
                //后端服务器找
//如果当前webpack服务器上无法查找资源，会去target对应的服务器找
             }       
         } */
    }
    //非全局命令执行npx 模块名

}

//------------

