## webpack 配置

### 一、无框架-项目初始化

**1、生成 package.json 文件** npm init -y

**2、下载依赖包** 

```bash
npm install webpack webpack-cli webpack-dev-server -D
```

依赖包说明：

- `webpack`：webpack 核心文件；
- `webpack-cli`：webpack 核心文件；
- `webpack-dev-server`：用于配置开发服务器

### 二、配置

```bash
|--- webpack.dev.config.js    # 开发环境的配置
|--- webpack.prod.config.js   # 生产环境的配置
|--- webpack.base.config.js   # 公共配置
```

**合并**  

```js
npm i webpack-merge -D

// webpack.dev.config.js
const base = require('./webpack.base.config');
const { merge } = require('webpack-merge');

module.exports = merge(base, {
	// 其他配置
})

// webpack.prod.config.js
const base = require('./webpack.base.config');
const { merge } = require('webpack-merge');

module.exports = merge(base, {
    // 其他配置
})
```

**配置环境变量 process.env** 

process 是 nodejs 中的一个全局变量，所有模块都可以直接调用。 

倾向于通过 `process.env` 来控制 mode 的值，从而区分开发环境和生产环境。

**配置启动命令** 

配置启动命令前，先下载一个插件：`cross-env`。

```bash
npm i cross-env -D
```

cross-env 插件：作用是可以运行跨平台设置和使用环境变量。简单来说就是方便我们配置不同环境的启动命令。

**package.json** 

在 `package.json` 文件中配置不同环境的不同启动命令：

```json
{
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "dev": "cross-env NODE_ENV=development webpack-dev-server --config webpack.dev.config.js",
        "build": "cross-env NODE_ENV=production webpack --config webpack.prod.config.js"
    }
}
```

在公共设置中通过环境变量配置 mode：

```js
const { NODE_ENV } = process.env;

module.exports = {
    mode: NODE_ENV
}
```

### 三、入口出口配置

入口，指编译时最先要处理的 `.js` 文件。通过 `entry` 属性设置路径

出口，指编译完成后，新代码的存储位置，通过 `output` 属性设置路径

```js
const path = require("path"); //路径处理，nodejs自带
module.exports = {
    // 入口文件位置，不配置时默认，./src/index.js
    entry: {
        index: './src/index.js' //编译后的文件：入口文件
    },
    // 出口文件位置
    output: {
        // 出口文件的路径(__dirname 获取项目的绝对路径)
        path: path.resolve(__dirname, 'dist'),
        // 出口文件的名称，name指入口时指定的编译后文件名
        filename: 'js/[name].js'
    },
}
```



### 四、loader 和 plugin

#### 1、loader 转码

- `style-loader`：用于将 `css` 编译完成的结果添加到页面 `<style>` 标签上；
- `css-loader`：用于编译 `.css` 文件，需要搭配 `style-loader` 使用；
- `sass-loader`：用于编译 `.scss` 文件，将 SASS 代码转换为 CSS 代码；
- `less-loader`：用于编译 `.less` 文件，将 LESS 代码转换为 CSS 代码；
- `babel-loader`：用于将高版本的 JS 语法转换为低版本的 JS 语法；
- `ts-loader`：用于编译 `.ts` 文件，将 TS 代码转换为 JS 代码；
- `vue-loader`：用于编译 `.vue` 文件；
- `eslint-loader`：用于检查代码是否符合规范，是否存在语法错误等；
- ...

#### 2、plugin 功能

- `html-webpack-plugin`：生成 HTML 文件，自动引入打包好的 JS、CSS 文件；
- `uglifyjs-webpack-plugin`：压缩 JS 代码；
- `mini-css-extract-plugin`：将编译后的 CSS 代码提取成独立的文件；
- `copy-webpack-plugin`：复制文件（用来处理一些不需要编译的文件）；
- `clean-webpack-plugin`：自动清除打包后多余无用的文件；



### 六、SASS 配置

我们可以在 `src` 目录中创建一个 `styles` 目录，用来存放所有的 `.scss` 文件。例如：

```bash
src
 |--- styles
 |       |--- index.scss
```

然后在 `index.js` 引入样式文件：

```js
import './styles/index.scss';
```

#### 1、下载依赖包

```bash
npm i node-sass sass-loader css-loader mini-css-extract-plugin -D
```

#### 下载失败的解决方案

如果下载失败，大概率是 node-sass 造成的，那我们先去掉 node-sass，下载其他依赖包：

```bash
npm i sass-loader css-loader mini-css-extract-plugin -D
```

然后重新通过以下方式下载 node-sass：

```bash
npm install node-sass --sass-binary-site=https://npm.taobao.org/mirrors/node-sass
```



附加说明：如果项目中使用的是 Less，就需要下载 less-loader。

### 十二、性能优化

#### 1、开启多进程打包：HappyPack

webpack 是单线程模型，也就是说 webpack 需要一个一个地去处理任务，不能同时处理多个任务。

HappyPack 可以将任务分解给多个子进程去并发执行，子进程处理完后再将结果发送给主进程，从而发挥多核 CPU 电脑的优势。

##### 1）下载插件

```bash
npm i happypack -D
```

##### 2）配置插件

我们在公共配置中进行配置：

```js
const HappyPack = require('happypack');

// 构造出共享进程池，进程池中包含5个子进程
var happyThreadPool = HappyPack.ThreadPool({ size: 5 });

module.exports = {
    module: {
        rules: [
            // 其他 loader 配置
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
    plugins: [
        // ... 其他插件配置
        // 2)创建一个plugin
        new HappyPack({
            // id 标识 happypack 处理那一类文件
            id: 'babel',
            // 共享线程池
            threadPool: happyThreadPool,
            // 3) 配置一个替代步骤 1) 中的loader
            loaders: ['babel-loader'],
            // 日志输出
            verbose: true
        })
    ]
}
```

#### 2、多进程压缩 JS：ParallelUglifyPlugin

##### 1）下载插件

```bash
npm i webpack-parallel-uglify-plugin -D
```

##### 2）配置插件

这个我们可以在开发环境中配置：

```js
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');

module.exports = merge(base, {
    plugins: [
        // ... 其他插件的配置
        new ParallelUglifyPlugin({
            // 传递给 UglifyJS 的参数
            // （还是使用 UglifyJS 压缩，只不过帮助开启了多进程）
            uglifyJS: {
                output: {
                    beautify: false, // 最紧凑的输出
                    comments: false, // 删除所有的注释
                },
                compress: {
                    // 删除所有的 `console` 语句，可以兼容ie浏览器
                    drop_console: true,
                    // 内嵌定义了但是只用到一次的变量
                    collapse_vars: true,
                    // 提取出出现多次但是没有定义成变量去引用的静态值
                    reduce_vars: true,
                }
            }
        })
    ]
})
```



