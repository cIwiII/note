当 ESLint 的规则和 Prettier 的规则相冲突时，就会发现一个尴尬的问题，用其中一种来格式化代码，另一种就会报错。

- `prettier` 官方提供了一款工具 [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) 来解决这个问题。避免 Prettier 格式化之后的代码导致 ESLint 报错。

- `prettier` 官方提供了一个 ESLint 插件 [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)。eslint 和 prettier 两者结合起来使用

### eslint-config-prettier

- 作用：本质上这个工具其实就是禁用掉了一些不必要的以及和 Prettier 相冲突的 ESLint 规则。
- 安装：npm install --save-dev eslint-config-prettier

- 使用：修改 `eslintrc` 文件

  ```js
  // 在eslintrc- extends 部分加入 prettier 即可
  module.exports = {
    "extends": [
      "...",
      "prettier"
    ]
  } 
  
  ```

  

### eslint-plugin-prettier

- 作用：将 `prettier` 作为 `ESLint` 的规则来使用，相当于代码不符合 `Prettier` 的标准时，会报一个 `ESLint` 错误，同时也可以通过 `eslint --fix` 来进行格式化。

- 安装
  - npm install --save-dev eslint-plugin-prettier
  - npm install --save-dev prettier

- 使用：修改 `eslintrc` 文件

  ```js
   {
    "extends": [
      "prettier"
    ],
    "plugins": ["prettier"],
    "rules": {
      "prettier/prettier": "error"
    }
  }
  // 可以简化为，
  {
    "extends": ["plugin:prettier/recommended"]// 添加到数组的最后一个元素
  }
  // 上面这个简化实际等同于
  {
    "extends": ["prettier"],
    "plugins": ["prettier"],
    "rules": {
      "prettier/prettier": "error",
      "arrow-body-style": "off",
      "prefer-arrow-callback": "off"
    }
  }
  
  ```

  





官方链接：

prettier 官方文档：https://prettier.io/docs/en/integrating-with-linters.html#docsNav
eslint-config-prettier：https://github.com/prettier/eslint-config-prettier
eslint-plugin-prettier：https://github.com/prettier/eslint-plugin-prettier
typescript-eslint：https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/README.md#usage-with-prettier