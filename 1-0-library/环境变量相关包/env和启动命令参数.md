
- React 配置环境变量- 地址：  https://blog.csdn.net/qq_42578620/article/details/128467767

## env环境

注：文件中的自定义环境变量名

- react 必须以REACT_APP开头才能识别，
- vue项目中以VUE_APP_ 作为前缀，如果是vue3+vite则需要以VITE_作为前缀，

否则，除了 NODE_ENV 之外的任何其他变量都将被忽略，以避免意外地在可能具有相同名称的计算机上公开私钥。
更改任何环境变量都需要重新启动正在运行的开发服务器。

如果env命名非【.env.development 、.env.production 】，如【.env.test、.env.prod】，则需在package.json中配置启动参数，如：在vue项目中
```json
"scripts": {
    "serve": "vue-cli-service serve",
    "serve:dev": "vue-cli-service serve --mode test",
    "serve:pro": "vue-cli-service serve --mode prod",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint"
  },

"scripts": {
    "serve": "vue-cli-service serve --mode development",
    "build": "vue-cli-service build",
    "build:sit": "vue-cli-service build --mode production.sit",
    "build:uat": "vue-cli-service build --mode production.uat",
    "build:prod": "vue-cli-service build --mode production",
    "lint": "vue-cli-service lint",
    "et": "node_modules/.bin/et",
    "et:init": "node_modules/.bin/et -i",
    "et:list": "gulp themes"
  }

"scripts": {
    "serve-test": "vue-cli-service serve --open --mode test",
    "serve": "vue-cli-service serve --open --mode development",
    "dev": "vue-cli-service  --open --mode development  serve",
    "test-oss": "vue-cli-service  --mode sit  build",
    "build:sit": "vue-cli-service  --mode sit  build",
    "build:prod": "vue-cli-service  --mode production  build",
    "lint": "vue-cli-service lint",
    "fix": "tslint --fix -c ./tslint.json 'src/**/*{.ts,.tsx}'"
 }

```



- 当执行build时，将按顺序优先寻找.env.production.local, .env.production, .env.local, .env文件来配置环境变量

### 解读：
- build:pro :dotenv -c pro react-app-rewired build 

- "build:pro": "dotenv -e .env.pro react-app-rewired build" 

- 符号
    - -c标志的解释是：只运行预处理，编译和汇编步骤
    -  多个env文件用 -e 隔开
    - dotenv源码/cli.js
        - --debug ：输出将要处理的文件，但实际上不解析它们或运行`命令`
        - -e <path> ： 将文件＜路径path＞解析为“.env”文件，并将变量添加到环境中，允许使用多个-e标志
        - -v <name>=<value>  使用＜name＞=＜value＞将变量放入环境,允许使用多个-v标志
        - -p <variable> :将＜variable＞的值打印到控制台。如果指定此选项，则不必指定“命令”`
        - -c [environment]:支持来自于`.env`、`.env.<environment>`、`.env.local`、`-env.<environment>.local`这些文件的级联env变量
            - 如 -c pro: 启用 .env.pro环境（environment）
        - command : command`是要运行的实际命令。最佳做法是在该命令前面加上“--”。“--”之后的一切都被认为是您的命令。因此，此工具不会解析任何标志，而是将其传递给您的命令。如果不执行此操作，此工具将删除这些标志'

```js
function printHelp () {
console.log([
'Usage: dotenv [--help] [--debug] [-e <path>] [-v <name>=<value>] [-p <variable name>] [-c [environment]] [-- command]',
'  --help              print help',
'  --debug             output the files that would be processed but don\'t actually parse them or run the `command`',
'  -e <path>           parses the file <path> as a `.env` file and adds the variables to the environment',
'  -e <path>           multiple -e flags are allowed',
'  -v <name>=<value>   put variable <name> into environment using value <value>',
'  -v <name>=<value>   multiple -v flags are allowed',
'  -p <variable>       print value of <variable> to the console. If you specify this, you do not have to specify a `command`',
'  -c [environment]    support cascading env variables from `.env`, `.env.<environment>`, `.env.local`, `.env.<environment>.local` files',
'  command             `command` is the actual command you want to run. Best practice is to precede this command with ` -- `. Everything after `--` is considered to be your command. So any flags will not be parsed by this tool but be passed to your command. If you do not do it, this tool will strip those flags'
].join('\n'))
}

```


## React-xgimi-记录

- 地址： https://www.jianshu.com/p/c78251ff28fb

1.Raect跨域配置
```js
npm i http-proxy-middleware -S
```
- src/setupProxy.js，名字不能更改，必须是这个

```js
//setupProxy.js内容
const proxy = require('http-proxy-middleware')
module.exports = function(app) {
  app.use(
    proxy.createProxyMiddleware('/api', {
      target: process.env.REACT_APP_BASE_URL, //你需要访问的地址
      changeOrigin: true,
      // secure: false,
      pathRewrite: {'^/api': ''}
    })
  )
}
```
2.自定义覆盖webpack配置
```js
npm i customize-cra -S
```

项目根目录新建文件config-overrides.js，名字不能更改，必须是这个
```js
//injectBabelPlugin
const { override, addDecoratorsLegacy, addWebpackAlias, addWebpackResolve, fixBabelImports, adjustStyleLoaders, addLessLoader } = require("customize-cra");
const path = require('path')
process.env.GENERATE_SOURCEMAP = "false";

module.exports = {
webpack: override (
    // 路径别名
    addWebpackAlias({
        '@': path.resolve(__dirname, 'src')
    }),
    // 导入文件的时候可以不用添加文件的后缀名
    addWebpackResolve({
        extensions: ['.tsx', '.ts', '.js', '.jsx', '.json', '.css', '.scss']
    }),
    // 装饰器
    addDecoratorsLegacy(),
    // antd按需加载
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true
    }),
    // antd定制化主题
    addLessLoader({
        lessOptions:{
           javascriptEnabled: true,
           modifyVars: { '@primary-color': '#5FE0B7' }
        }
    }),
    adjustStyleLoaders(rule => {
        if (rule.test.toString().includes("scss")) {
          rule.use.push({
            loader: require.resolve("sass-resources-loader"),
            options: {
              resources: "./src/styles/var.scss" //公共scss变量         
            }
          });
        }
      })
)
}

```
3.react-router-cache-route缓存路由

配合react v17版本和react-dom v17版本使用报错，解决办法使用16.13.1版本的react和react-dom

4. react-scripts react-app-rewired 配置多环境运行命令

1.dotenv

安装工具dotenv-cli,在根目录下新建文件

```js
// .env.development 开发的配置文件
REACT_APP_BASE_URL=https://xxxxx
REACT_APP_ENV=development

// .env.test 测试的配置文件
REACT_APP_BASE_URL=https://xxxxx
REACT_APP_ENV=test

// .env.production 生产的配置文件
REACT_APP_BASE_URL=https://xxxxx
REACT_APP_ENV=production
```
修改package.json中的scripts指定环境

```js
"build:dev": "dotenv -e .env.development react-app-rewired build",
"build:pro": "dotenv -e .env.production react-app-rewired build",
```
使用
- html中：%REACT_APP_ENV%
- js/jsx中：可以在process.env中访问

2.cross-env

安装 cross-env:npm install cross-env -D 或 yarn add cross-env -D

```js
// package.json 的 scripts 里面添加代码
"start:dev": "cross-env REACT_APP_ENV=development react-app-rewired start",
"start:test": "cross-env REACT_APP_ENV=test react-app-rewired start",
"start:prod": "cross-env REACT_APP_ENV=production react-app-rewired start",

```
通过使用REACT_APP_ENV就可以获取到不同环境的变量，根据此变量就可以设置不同环境的地址。


## .env文件原理源码解析
- 地址：  https://jiuaidu.com/jianzhan/1103097/