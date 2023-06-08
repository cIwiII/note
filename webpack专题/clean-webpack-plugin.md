### clean-webpack-plugin

删除（清理）构建目录

在打包文件时，每次修改源码后打包，都会生成打包后文件，文件夹中依然会存在之前打包的文件，只有最新的有用其他都没用。

不传入任何参数，该插件会默认使用 `output.path` 目录作为需要清空的目录，会把该目录下的所有文件目录以及文件都清除。

```bash
npm install --save-dev clean-webpack-plugin
```

1

```js
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
  entry: './a.js',
  output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
  },
  plugins: [
    ...,
    new CleanWebpackPlugin(),
    ...
  ]
}
```

### option

插件 clean-webpack-plugin 也支持传入参数进行单独配置，实际使用中很少对其进行单独[配置](https://github.com/johnagan/clean-webpack-plugin).

