
console.log('package.json 信息')
/* 
移除5 main,加"private":true,确保我们安装包是私有的（private）;

lodash:library依赖包，npm install --save lodash，或者npm i lodash;
import _ from 'lodash',（要使用的js文件）导入；

原本执行的时npx webpack，在scripts加属性"build": "webpack"，
可以使用npm run build,替代npx命令；

"watch": "webpack --watch",（观察者模式）等同于下载
"webpack-dev-server ": "^3.11.2"的自动打包功能，放置于scripts中
运行 npm run watch，就会看到 webpack 编译代码，
然而却不会退出命令行。这是因为 script 脚本还在观察文件。

"start": "webpack-dev-server --open",添加一个 script 脚本，
可以直接运行开发服务器(dev server)：命令行中运行 npm start运行
类似与npx webpack serve命令



*/


console.log('config文件')
/* 
clean-webpack-plugin,每次打包前自动清理dist下的文件，
需要在config中引入，在plugins中new 包（）；['文件名一般为dist']
注意：由于暴露使对象暴露，引用时使用｛｝解构使用，参数可选，默认删除无用文件，

contentBase: './dist',//(self-将dist设置为可访问文件)
*/