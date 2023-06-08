/**
 * 多文件打包配置
 */

const path=require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssExtractPlugin=require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const webpack = require('webpack');

const fESA='192.168.11.17'   //前端地址，（端口port配置）
const bESA='http://192.168.11.17:3000/'   //后端地址

//文件过多采用数组 自动生成,数组存放文件名,需要对应html和js文件
const nameArr=['index','login'];

//遍历函数方法
function getEntry(){
    //entry是个对象，创建对象
    let obj={};
    nameArr.forEach(valname=>{
        obj[valname]=`./src/js/${valname}.js`
    })
    return obj
}
function getHtml(){
    let htmlArr=[];
    nameArr.forEach(function(valname){
        htmlArr.push(
            new HtmlWebpackPlugin({
                //参照项目根目录
                template:`./src/html/${valname}.html`,
                //参照dist文件目录，打包后的文件地址和名字
                filename:`./html/${valname}.html`,
                //<script defer="defer">异步加载js文件,
                chunks:[valname]
            })
        )
        
    })
    return htmlArr
}


module.exports={
    mode:'development',
    /* entry:{
        index:'./src/js/index.js',//打包单个文件路径
        login:'./src/js/login.js'
    }, */
    //函数方法动态生成
    entry:getEntry(),
    //显示错误之处,勿使用于生产模式
    devtool: 'inline-source-map',
    output:{
        path:path.resolve(__dirname,'dist'),
        //[]动态填充文件名，name原文件名
        filename:'js/[name].js'
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
    plugins:[
        ...getHtml(), //数组解构赋值
        new CleanWebpackPlugin(), //参数可选['dist']，没有就是删除无用文件
        new CssExtractPlugin({
            //打包后存放位置,dist开始
            filename:'./css/[name].css'
        }),
        new webpack.ProvidePlugin({
            "$": "jquery"
            //bootstrap应用，参照node_modules放主js文件中
            // import 'bootstrap/dist/css/bootstrap.min.css';
            // import 'bootstrap/dist/js/bootstrap.min.js';
        })
    ],
    //module打包规则配置
    module:{
        rules:[
            {
                test:/\.css$/i,//规则
                use:[CssExtractPlugin.loader,'css-loader']//根据配置自动打包css

            },
            //sass
            {  
                test:/\.scss$/i,              
                //指定以什么插件进行打包 
                use:[CssExtractPlugin.loader,'css-loader','sass-loader'] 
            },   
            //img规则 
            {
                test:/\.(jpg|png|jpeg|gif|svg|psd|tif|bmp|webp)$/i,
                //转为base64字符串格式,无法正常显示，取消↓行代码注释
                // type:'javascript/auouto',
                use:{
                    loader:'url-loader',         
                    options:{  
                        //将10KB以下的图片自动转为base64字符串格式放在页面中 
                        limit:0,//1024*10,
                        //输出，参照(dist)中的路径，根目录为dist
                        outputPath:'./image/',
                        //打包原名字，（有无）
                        name: '[name].[ext]',
                        esModule:false//用于解决兼容问题 图片格式不改变                   
                    }                
                },
                //禁止匿名重复打包（会在dist更目下额外生成文件，使用也是这个文件）
                type:'javascript/auto'
                
            } ,
             //对html文件中的图片的打包规则配置            
            { 
                test:/\.html$/i,                
                use:['html-withimg-loader']            
            },
            //字体加载处理(未验证有效性)
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                  'file-loader'
                ]
            },
            //csv,tsv文件数据打包处理(未验证有效性)
            {
                test: /\.(csv|tsv)$/,
                use: [
                  'csv-loader'
                ]
            },
            //xml文件数据打包处理(未验证有效性)
            {
                test: /\.xml$/,
                use: [
                  'xml-loader'
                ]
            }
        ]
        
    },
    devServer: {
        //不配置loclhost访问，127.0.0.1，本地ip访问，1全0 本机ip访问
        host:fESA,
        port: 8888,
        open: true,//自动打开浏览器
        openPage: './html/index.html',
        hot: true,
        proxy:{
            "/":{
                // target:'http://127.0.0.1:3000/'
                // 提升至上方统一管理
                target:bESA
             }       
         }

    }
    // 没什么用
    // performance: {
    //     hints: false
    // }
    //非全局命令执行npx 模块名

}

//-- npx webpack执行  自动打包命令


// 依赖下载
/* 
"devDependencies": {
    "css-loader": "^5.1.0",
    "file-loader": "^6.2.0",
    "html-webpack-plugin": "^5.5.0",
    "html-withimg-loader": "^0.1.16",
    "mini-css-extract-plugin": "^2.6.0",
    "node-sass": "^7.0.1",
    "sass-loader": "^13.0.0",
    "url-loader": "^4.1.1",
    "webpack": "^5.73.0",
    "webpack-cli": "^4.9.2",
    "webpack-dev-server": "^3.11.2"
  },
  "dependencies": {
    "bootstrap": "^4.6.1",
    "jquery": "^3.6.0",
    "popper.js": "^1.16.1"
  }
*/
