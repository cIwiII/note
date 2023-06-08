



### ts-jest 

作用：Jest 配置入门并不算友好，ts-jest 预处理库 是对 jest 的封装，每个 Case 前都会出现 `Run|Debug` 标识，点击后自动运行。只要在 vscode 上打上断点，点击 Debug 按钮，就会自动在断点处停止。

安装：yarn add -D jest typescript ts-jest @types/jest

使用：

主要就是四个库： `jest`、`typescript`自不必说，`ts-jest`是要用到的预处理器，`@types/jest`用于测试框架的类型推断。

配置生成：yarn ts-jest config:init

利用 ts-jest 自动生成 jest.config.js 文件如下：

```js
// jest.config.js
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
};
```

运行：yarn jest



