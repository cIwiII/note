

### 别名设置

首先安装craco的模块: npm i @craco/craco -D

接着在项目根目录下创建以下文件, 3步

```js
// **craco.config.js**
const path = require('path');
module.exports = {
    webpack: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    }
};

// **jsconfig.json** 
{
    "compilerOptions": {
	"baseUrl": "./",
	"paths": {
		"@/*": ["src/*"]
	 }
     }
}

//  package.json
"scripts": {
    "start": "craco start",
    "build": "craco build",
    "test": "craco test",
    "eject": "react-scripts eject"
  }
```

