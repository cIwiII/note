
## react-app-rewired
### 概念/作用
- 是对react-scripts（create-react-app）进行了扩展，配合babel-plugin-import
- 作用是在不eject的情况下修改webpack配置
- 作用就是在不eject的情况下,覆盖create-react-app的配置，
- 作用是用来帮助你重写 react 脚手架配置
- 目标：修改build的output目录

1: npm install react-app-rewired --save-dev

2: 根目录下新建文件：config-overrides.js

3：添加以下配置
```js
module.exports = function override(config, env) {
// 修改path目录
const path = require('path');
const paths = require('react-scripts/config/paths');
paths.appBuild = path.join(path.dirname(paths.appBuild), 'dist');
config.output.path = path.join(path.dirname(config.output.path), 'dist');
config.resolve.alias = {
        '@': resolve('src')
  }
console.log(custom output path - ${config.output.path});
return config;
};
```
json文件一般4种配置
```json
"scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test",
    "eject": "react-scripts eject"
  },
```
4：npm run build