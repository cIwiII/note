
rimraf

概念： 
- rimraf 是 Linux 命令 rm -rf 的 node 版本。就是用来删除目录、删除文件的。
- 使用webpack build文件项目时每次都会生成一个dist目录，有时需要把dist目录里的所以旧文件全部删掉，除了可以使用rm -rf /dist/命令删除外，还可以使用rimraf /dist/命令；

rimraf 的作用：以包的形式包装rm -rf命令，用来删除文件和文件夹的，不管文件夹是否为空，都可删除；

安装：

局部安装：npm install rimraf --save-dev

全局安装：npm install rimraf -g

使用：rimraf <path> [<path> ...]

作用：删除文件或文件夹

api/方法
```js
// 用于快速删除node_modules包
终端：rimraf node_modules // 也可以删除其它文件夹或文件
//json文件配置
  "scripts": {
  ...
+ "clean": "rimraf node_modules"
  },

//json2
"scripts": {
    ......
    "build": "rimraf dist && cross-env vite build"
}
```