打包器(bundler)、打包工具、构建化工具：Grunt、Gulp、Webpack

- 构建化工具需要NodeJs 环境
- 使用npm 的命令可以创建工程项目，可以打包项目

## webpack

Webpack：是一个模块打包器。实现前端工程化，有助于前后端分离;

- Webpack认为前端的所有资源文件(js/json/css/img/less/...)都应是模块

- 根据模块依赖关系进行静态分析，生成对应的静态资源

- Webpack 本身只能加载JS/JSON模块，其他模块需要loader

- Loader 本身模块,运行在 node.js 环境中，npm i 来安装

- 配置文件webpack.config.js : 是一个node模块，返回一个 json 格式的配置信息对象

- 插件完成一些Loader不能完成的功能。在 webpack 的配置信息 plugins 选项中指定.

- 核心功能:
  - 兼容处理：保证代码向下兼容
  - 实现各种前端资源的模块化：可以实现非JS的模块化编程
  - 减少项目资源文件的数量：资源合并
  - 实现资源内容的压缩和混淆
    - 压缩:将资源内容中的换行、空格、注释等去除，减少资源的大小，提高加载速度;
    - 混淆:自动将代码转为浏览器能直接识别的语法，从而达到保护代码的目的，并且可以提高代码的解析执行效率;
  
- 安装webpack

  npm install webpack -g //全局安装

  npm install webpack --save-dev //局部安装

**创建node项目** 

- 项目位置执行`npm init -y` 初始化node项目;
- 依赖包
  - `webpack`：webpack 核心文件；
  - `webpack-cli`：webpack 核心文件；
  - `webpack-dev-server`：用于配置开发服务器


**下载webpack插件** ：基础

- ` npm i webpack webpack-cli -D `

- `-D`:开发依赖；

- src:source表示源码，
- dist:源码打包后的结果。

### loader和plugin插件

loder：代码编译 多个loader执行顺序是从右往左，从下到上

plagin：功能相关

**打包js相关：** 

- uglifyjs-webpack-plugin：压缩 JS 代码
- ts-loader：ts解析为js
- 

**打包html：** 

- html-webpack-plugin: 打包html，自动生成HTML文件并js、css
- 

**打包css：** 

- mini-css-extract-plugin：必须
- css-loader：必须，解析为css，不会插入页面，单独使用无效
- style-loader：必须，将样式插入页面< style >标签
- mini-css-extract-plugin：将编译后的css提取为单独文件，css压缩
- sass-loader：sass必须，scss解析为css
- node-sass：使用sass语法
- less-loader：less解析为css

**打包图片：** 

- url-loade：必须
- file-loader：必须
- html-withimg-loader：必须，打包html中图片

**其他：** 

- webpack-dev-server：打包，并打开指定页面
- copy-webpack-plugin：复制文件(不经过任何处理)
- clean-webpack-plugin：自动清除指定文件夹多余无用资源
- happypack：多进程打包
- webpack-parallel-uglify-plugin：多进程压缩
- vue-loader：编译vue文件
- eslint-loader：语法规范、错误检查

- BundleAnalyzerPlugin：项目体积分析
- webpack-merge：用于多个配置文件合并，解构 {merge(配置1，配置2)}
- cross-env：用于替换mode，跨平台变量设置

```js
{
    "scripts": {
        "dev": "cross-env NODE_ENV=development webpack-dev-server --config webpack.dev.config.js",
        "build": "cross-env NODE_ENV=production webpack --config webpack.prod.config.js"
    }
}
const { NODE_ENV } = process.env;
module.exports = {
    mode: NODE_ENV
}
```





### 核心配置

- 创建打包的html和js目标文件，一般js文件名与html文件名对应，通过名称建立关联关系;

- 项目根目录下，新建`webpack.config.js`文件；

- 编写`webpack.config.js`文件内容:

  ```js
  let path=require('path');
  module.exports={
      mode:'development',//打包模式
      entry:{
          index:'./src/js/index.js',//编译后的入口文件，默认 ./src/index.js
      },
      output:{
          // __dirname 执行文件的绝对路径下的dist目录
          path:path.resolve(__dirname,'dist'),
          // 出口文件的名称，name指入口时指定的编译后文件名
          filename:'js/[name].js'
      },
      devtool: 'inline-source-map',//指示源代码错误位置
      watchOptions: {// 忽略配置
          ignored: /node_modules/
      }
  }
  ```
  
- 执行`npx webpack`命令实现项目资源打包

  ```
  npx webpack
  ```

- mode:配置打包模式。
  - development：开发，不会压缩
  - production：生产，会压缩
- entry:打包入口，确定要打包的资源。
  - 每个html提供一个主JS文件，所有该页面的相关资源都在对应的主JS文件中引入
  - 页面资源要被打包，必须在配置文件中entry属性配置主JS文件路径
- output:存放位置。
- module:配置打包规则。
- plugins:配置第三方插件。非JS资源打包需要。
- devServer:配置打包服务器。

### 打包JS

- 主要作用: 将当前JS文件关联的资源模块合并为一个文件。

- 实现:

  - 配置entry，确定要打包的目标主JS文件。

    ```js
    entry:{
        属性名称:'主JS资源文件路径'，//路径基于项目根目录查找文件
        index:'./src/js/index.js',
        login:'./src/js/login.js'
        .....
}
    ```
    
  - 配置output,确定打包后的资源的输出路径。
  
    ```js
    let path=require('path');
  output:{
        path:path.resolve(__dirname,'dist'),// 输出目录
      filename:'js/[name].js'    // 输出的文件名
    }
    ```
  
- 执行`npx webpack`命令，实现配置的资源打包。
  
- 优化后的配置

  ```js
  let path=require('path');
  let htmlNameArray=['index','login'];
  //动态根据html文件名生成对应主JS文件的打包入口配置
  function getEntryList(){
      let obj={};
      htmlNameArray.forEach(function(htmlName){
          // obj['属性名称']=值
          obj[htmlName]=`./src/js/${htmlName}.js`
      });
      return obj;
  }
  module.exports={
      mode:'production',
      entry:getEntryList(),
      output:{
          path:path.resolve(__dirname,'dist'),
          filename:'js/[name].js'
      }
  }
  ```

### 打包html

- 主要作用: 将当前HTML相关资源自动引入的当前HTML文件中;

- 实现:（可以new 多个页面配置）

  - template: 源文件路径，参照项目根目录查找目标文件,
- filename:打包后文件名,参照配置目录。如 dist
  - chunks:['打包后，当前HTML要引入的主JS文件名称']
  
  ```js
npm i html-webpack-plugin -D
  
  // webpack.config.js
  let HtmlWebpackPlugin=require('html-webpack-plugin');
  plugins:[
      new HtmlWebpackPlugin({
          template:'./src/html/login.html',
          filename:'./html/login.html',
          chunks:['login']
      })
  ]
  ```

### 打包CSS

- 主要作用:合并css，并引入。

- 实现

  ```js
npm i mini-css-extract-plugin css-loader@5.1.0 -D
  
  // webpack.config.js
  let MiniCssExtractPlugin=require('mini-css-extract-plugin');
plugins:[
      ......
    new MiniCssExtractPlugin({
          filename:'目标CSS打包后的资源文件名称'
    }),
      new MiniCssExtractPlugin({
          filename:'./css/[name].css'//参照dist文件夹输出路径名称
      })
],
  // 配置打包规则
module:{
        rules:[
            {
                test:/\.css$/i,
                use:[MiniCssExtractPlugin.loader,'css-loader']
            }
        ]
    }
  ```

  在要使用CSS样式的页面对应主JS文件中，引入目标CSS文件
  

```js
 import '目标CSS文件路径'
 import './../css/c1.css';
 import './../css/c2.css';
```

### 打包SCSS

- 主要作用:自动将页面相关的SCSS文件转为CSS语法，并将转换后的内容合并到页面CSS文件中。

- 实现:

  ```js
npm i node-sass sass-loader css-loader mini-css-extract-plugin -D
  
  // webpack.config.js
  const MineCssExtractPlugin = require('mini-css-extract-plugin');
  module:{
    rules:[
          ......
        {
              test: /\.s[ac]ss$/i,
              exclude: /node_modules/,
              use:[MiniCssExtractPlugin.loader,'css-loader','sass-loader']
          }
      ],
       plugins: [
          // ...
          new MineCssExtractPlugin({
              filename: 'css/[name].css'  // 配置打包后的 CSS 文件的存储位置
          })
      ]
  }
  ```
  
  - 在要使用SCSS样式的页面对应主JS文件中，引入目标SCSS文件
  
    ```
    import '目标SCSS文件路径'
    import './../scss/sc1.scss';
    import './../scss/sc2.scss';
    ```

### 打包图片

- 主要作用:将CSS和HTML中的图片进行打包处理，并将小图片转为base64格式(字符串表示图);

- 实现

  ```js
npm i url-loader file-loader html-withimg-loader -D
  
  // webpack.config.js
  module:{
    rules:[
          ......
        {
              test:/(\.(jpg)|(png)|(jpeg)|(gif)|(svg)|(psd)|(tif)|(bmp)|(webp))$/i,
              type:'javascript/auto',
              use:{
                  loader:'url-loader',
                  options:{
                      limit:1024*10,//指定大下以下转为base64
                      outputPath:'./image/',//参照dist的指定输出路径
                      esModule:false//兼容设置，解决兼容
                  }
              }
          },
          {
              test:/\.html$/i,
              use:['html-withimg-loader']
          }
      ]
  }
  ```

### 配置打包服务器

- 主要效果:开启服务器后，服务器自动根据改动进行打包，将打包结果保存在内存中，并打开指定页面展示打包效果。

- 实现:

  ```js
npm i webpack-dev-server@3.11.2 -D
  
  // webpack.config.js
  devServer:{
      port:8888,//服务器端口号配置
      open:true,//是否服务器启动成功后自动打开页面
      openPage:'./html/index.html',//默认打开的页面URL
      hot:true,//开启热部署，文件改动后，服务器会自动重新打包
      proxy:{//配置代理服务器
          "/":{
              target:'后端服务器URL'
          },
           '/api': {
                  target: 'http://localhost:8080', // 后端服务器地址
                  changeOrigin: true,
                  pathRewrite: { "^/api": "" }
            }
      }
  }
  ```
  
  - 使用` npx webpack serve ` 命令，启动服务器
  

### 引入jquery | bootstrap

```js
npm i jquery
npm i bootstrap@4 popper.js@1.16.1

// webpack.config.js
let webpack=require('webpack');
plugins:[
    ......
    new webpack.ProvidePlugin({
        "$":"jquery",// jquery全局使用
    })
]
```

- 在要使用bootstrap样式的页面主JS文件中引入bootstrap文件

  ```js
  import 'bootstrap/dist/css/bootstrap.min.css';//参照node_modules文件的相对路径
  import 'bootstrap/dist/js/bootstrap.min.js';//参照node_modules文件的相对路径
  ```

### 文件复制

```js
npm i copy-webpack-plugin -D

// 公共配置
const CopyPlugin = require("copy-webpack-plugin");
module.exports = {
    plugins: [
        new CopyPlugin({
            patterns: [
                // from：原文件的位置，to：复制后的位置
                { from: "./src/static", to: "./static" },
            ]
        })
    ]
}
```

### 服务器代理

一般仅用于 开发环境

```js
npm i webpack-dev-server -D

module.exports = merge(base, {
    devServer: {
        hot: true,  // 启动热更新
        port: 3000, // 设置服务器端口号为 3000，默认8080
        open: true, // 启动服务器时自动打开浏览器
        proxy: {    // 代理跨域配置
            '/api': {
                target: 'http://localhost:8080', // 后端服务器地址
                changeOrigin: true,
                pathRewrite: { "^/api": "" }
            }
        }
    }
})
```

### 忽略文件

代码改变重新编译，指定部分文件变化，不用处理，开发环境中配置

```js
module.exports = merge(base, {
    watchOptions: {
        ignored: /node_modules/
    }
})
```

### 清除多余文件

如清除上次打包的无用文件

```js
npm i clean-webpack-plugin -D

// 生产使用
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = merge(base, {
    plugins: [
        new CleanWebpackPlugin()
    ]
})
```



### 深入理解

地址：https://blog.csdn.net/weixin_52851967/article/details/128612325

#### 1-入口

默认以src/index.js作为入口，如果没有就会报错

- 配置文件entry指定，也可以如下命令执行时指定

- npx webpack --entry ./src/main.js --output-path ./build ：指定了入口和出口

#### 2-配置文件名

- 配置文件默认名字是 webpack.config.js，--config 字段可以指定其他文件名

- 如将webpack.config.js修改成了 wk.config.js；
- 配置 webpack --config wk.config.js 命令

```js
//webpack打包配置文件通过--config字段改为 wk.config.js作为配置文件 
"scripts": {
    "build": "webpack --config wk.config.js"
  }
```

#### 3-loader多种加载方式

**如何使用这个loader来加载css文件呢？有三种方式()：** 

- 3.1- **CLI方式** （webpack5中不再使用）；在脚手架命令启动中

- 3.2- **内联方式** ：内联方式使用较少，因为不方便管理；在引入的样式前加上使用的loader，并且使用!分割；

```js
import "css-loader!../css/style/css";
```

- 3.3- **loader配置方式** ：方便后期的维护，同时也让你对各个Loader有一个全局的概览

css-loader：负责解析，不会将解析后的css插入到页面中；
style-loader：将解析后的样式插入页面；

loader执行顺序是从右向左（或者说从下到上，或者说从后到前的），所以将style-loader写到css-loader的前面；

```js
use: [ // use中多个loader的使用顺序是从后往前
           { loader: "style-loader" },
           { loader: "css-loader" }
]
```

```js
module: {
    rules: [
      {
        test: /\.css$/i,
        //loader: "css-loader" //写法一
        //use:["css-loader"] //写法二
        // use: [//写法三
        //    { loader: "css-loader" }
        // ]
        //写法四
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
    ]
}
```

- rules属性值是一个数组：[Rule, Rule]
- Rule是一个对象，对象中可以设置多个属性：
  - test属性：用于对 resource（资源）进行匹配的，通常会设置成正则表达式；
  - use属性：对应的值时一个数组：[UseEntry]
      - UseEntry是一个对象，可以通过对象的属性来设置一些其他属性

        - loader：必须有一个 loader属性，对应的值是一个字符串；

  - options：可选的属性，值是一个字符串或者对象，值会被传入到loader中；

  - query：目前已经使用options来替代；

  - 传递字符串（如：use: [ 'style-loader' ]）是 loader 属性的简写方式（如：use: [ { loader: 'style-loader'} ]）；
- loader属性： Rule.use: [ { loader } ] 的简写。



common-shake插件

tree-shaking

### 项目体积分析

```js
module.exports = {
    webpack: (config, env) => {
        config.plugins = {
            ...config.plugins,
            new BundleAnalyzerPlugin({
                analyzerMode: 'static',//文件类型，静态文件
                reportFilename: 'bundle-report.html',//生成的文件名字
                logLevel: 'info',
                openAnlyzer: false,//每次启动项目是否自动打开分析文件
            })
        }
    }
}
```



### tree-shaking 按需引入

#### 一、tree-shaking？

es6 推出了tree shaking机制，类似于按需引入，在Uglify阶段查出，没有使用的不打包到bundle中。为了减少最终构建体积而诞生。只支持ES6 Module代码。在production 环境默认开启。

#### 二、使用

哪些情况下可以使用tree-shaking呢？
1.首先，要明确一点：Tree Shaking 只支持 ESM 的引入方式，不支持 Common JS 的引入方式。

ESM: export + import
Common JS: module.exports + require

提示：如果想要做到tree shaking，在引入模块时就应该避免将全部引入，应该引入局部才可以触发tree shaking机制

代码如下（示例）：

```js
// Import everything (not tree-shaking)
import lodash from 'lodash';

// Import named export (can be tree-shaking)
import { debounce } from 'lodash';

// Import the item directly (can be tree-shaking)
import debounce from 'lodash/lib/debounce';
```

#### 三、配置

项目中如何配置tree-shaking(抖动摇晃)？

1、开发环境配置tree shaking

```js
// webpack.config.js
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
  // ...
  mode: 'development',
  optimization: {
    usedExports: true,// 1.为true，标记为未使用，但依然存在
  },
  plugins: [
        new UglifyJsPlugin(), //2.将标记为未使用的清除掉
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new CleanWebpackPlugin()
    ],
};
```



生产环境下的配置:  去掉 usedExports 和 uglifyjs-webpack-plugin 相关配置，将 mode 修改为 production:

```js
// webpack.config.js   生产环境下只需要把mode配置成‘production’即可
module.exports = {
  // ...
  mode: 'production',
};
```

 根据环境的不同进行配置以后，还需要在 package.json 中，添加字段：**sideEffects: false，**告诉 Webpack 哪些代码可以处理

```js
{
  "name": "webpack-demo-1",
  "sideEffects": false, 
  // ...
}
//  列子：
// All files have side effects, and none can be tree-shaken
{
 "sideEffects": true
}

// No files have side effects, all can be tree-shaken
{
 "sideEffects": false
}

// Only these files have side effects, all other files can be tree-shaken, but these must be kept
// 只有这些文件会有副作用，所有其他文件都会受到影响，但这些文件必须保留
// 即引入后，即使没有使用，也应当打包，如css文件
{
 "sideEffects": [
 // "./src/file1.js",
 //"./src/file2.js",
 // "./src/some-side-effectful-file.js",
  "*.css"
 ]
}
```



#### 四、sideEffects

sideEffects 对全局 CSS 的影响
对于那些直接引入到 js 文件的文件，例如全局的 css，它们并不会被转换成一个 CSS 模块。

```js
/* reset.css */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html,
body {
    background-color: #eaeaea;
}

// main.js
import "./styles/reset.css"
```

以上样式无效：原因在于：sideEffects 设置为 false后(标记为无副作用)，所有的文件都会被 Tree Shaking，通过 import 形式引入的 CSS 就会被当作无用代码处理掉。
为了解决这个问题，可以在 loader 的规则配置中，添加 sideEffects: true，告诉 Webpack 这些文件不要Tree Shaking。方式一、在sideEffects数组种设置，见上例，方式二，如下：loder中设置

```js
// webpack.config.js
module.exports = {
  // ...
    module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
        sideEffects: true
      }
    ]
  },
};
```

**总结** 

- tree shaking就是类似一棵树有长熟的苹果，将已经成熟的苹果摇掉减轻树的负担，这就实现了这个机制
- 在es6中的import和export才可以触发这个机制
- 项目中对tree-shaking的配置
- tree-shaking对项目中的影响

### 性能

多线程打包（happypack）、多线程压缩（ webpack-parallel-uglify-plugin）



### Devtool错误提示

自动使用 SourceMapDevToolPlugin`/`EvalSourceMapDevToolPlugin 插件

最终将应用两个插件。**build** 构建，**rebuild** 重建

| devtool                                    | performance                              | production | quality        | comment                                                      |
| :----------------------------------------- | :--------------------------------------- | :--------- | :------------- | :----------------------------------------------------------- |
| (none)                                     | **build**: fastest  **rebuild**: fastest | yes        | bundle         | 最大性能生产版本                                             |
| **`eval`**                                 | **build**: fast  **rebuild**: fastest    | no         | generated      | 最大性能的开发版本                                           |
| `eval-cheap-source-map`                    | **build**: ok  **rebuild**: fast         | no         | transformed    | 开发构建的权衡选择。                                         |
| `eval-cheap-module-source-map`             | **build**: slow  **rebuild**: fast       | no         | original lines | 开发构建的权衡选择。                                         |
| **`eval-source-map`**                      | **build**: slowest  **rebuild**: ok      | no         | original       | 使用高质量SourceMaps开发构建的推荐选择                       |
| `cheap-source-map`                         | **build**: ok  **rebuild**: slow         | no         | transformed    |                                                              |
| `cheap-module-source-map`                  | **build**: slow  **rebuild**: slow       | no         | original lines |                                                              |
| **`source-map`**                           | **build**: slowest  **rebuild**: slowest | yes        | original       | 推荐使用高质量SourceMaps进行生产构建。完全详细位置提示       |
| `inline-cheap-source-map`                  | **build**: ok  **rebuild**: slow         | no         | transformed    |                                                              |
| `inline-cheap-module-source-map`           | **build**: slow  **rebuild**: slow       | no         | original lines |                                                              |
| `inline-source-map`                        | **build**: slowest  **rebuild**: slowest | no         | original       | 发布单个文件时的可能选择                                     |
| `eval-nosources-cheap-source-map`          | **build**: ok  **rebuild**: fast         | no         | transformed    | 未包含源代码                                                 |
| `eval-nosources-cheap-module-source-map`   | **build**: slow  **rebuild**: fast       | no         | original lines | 未包含源代码                                                 |
| `eval-nosources-source-map`                | **build**: slowest  **rebuild**: ok      | no         | original       | 未包含源代码                                                 |
| `inline-nosources-cheap-source-map`        | **build**: ok  **rebuild**: slow         | no         | transformed    | 未包含源代码                                                 |
| `inline-nosources-cheap-module-source-map` | **build**: slow  **rebuild**: slow       | no         | original lines | 未包含源代码                                                 |
| `inline-nosources-source-map`              | **build**: slowest  **rebuild**: slowest | no         | original       | 未包含源代码                                                 |
| `nosources-cheap-source-map`               | **build**: ok  **rebuild**: slow         | no         | transformed    | 未包含源代码                                                 |
| `nosources-cheap-module-source-map`        | **build**: slow  **rebuild**: slow       | no         | original lines | source code not included                                     |
| `nosources-source-map`                     | **build**: slowest  **rebuild**: slowest | yes        | original       | source code not included                                     |
| `hidden-nosources-cheap-source-map`        | **build**: ok  **rebuild**: slow         | no         | transformed    | 无引用，不包含源代码                                         |
| `hidden-nosources-cheap-module-source-map` | **build**: slow  **rebuild**: slow       | no         | original lines | no reference, source code not included                       |
| `hidden-nosources-source-map`              | **build**: slowest  **rebuild**: slowest | yes        | original       | no reference, source code not included                       |
| `hidden-cheap-source-map`                  | **build**: ok  **rebuild**: slow         | no         | transformed    | 无引用                                                       |
| `hidden-cheap-module-source-map`           | **build**: slow  **rebuild**: slow       | no         | original lines | no reference                                                 |
| `hidden-source-map`                        | **build**: slowest  **rebuild**: slowest | yes        | original       | 无参考。仅出于错误报告目的使用SourceMap时的可能选择。<br/>显示源码样式，但不知是那个文件 |

12



### 进程展示插件

| 进度插件                    | 美观 | 扩展性    | 额外安装 | 大小   |
| --------------------------- | ---- | --------- | -------- | ------ |
| webpack.ProgressPlugin      | 差   | 容易/一般 | 无需     | 16.9kb |
| progress-bar-webpack-plugin | 良   | 容易/优秀 | 需安装   | 5.72   |
| webpackbar                  | 优   | 复杂/优秀 | 需安装   | 134kb  |



### 问题

#### 1.webpackJsonp is not defined 错误
- vue项目，发现有这报错。
- 原因是用了CommonsChunkPlugin生成了公共文件，但是页面还没有引用这个公共文件
- 地址： https://www.cnblogs.com/wayneliu007/p/11578531.html



#### 2.sass相关下载失败





### 【完】

 