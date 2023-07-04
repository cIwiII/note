

### umi@4.0 约定项：

1. 约定 配置文件名 umirc.ts
2. 约定 都为单页面应用，html 仅加载一次，其他都为组件切换
3. 约定 `src/app.tsx` 为运行时配置。
4. 约定 如果`src/pages/document.ejs`文件存在，会作为默认html模板
5. 约定 `/mock` 文件夹下所有文件为 mock 文件。预先跟服务器端约定好接口，模拟请求数据和逻辑
6. 约定 `public` 目录下所有文件会被 copy 到输出路径。
7. 约定 `umi build` 打包放在 `dist` 下
8. 约定 `src/layouts/index.tsx` 为全局路由，通过 `props.children` 渲染子组件
   1. 约定 `[]` 包裹的文件或文件夹为动态路由。
   2. 约定 `[ $]` 包裹的文件或文件夹为动态可选路由。
   3. 约定 `src/pages/404.tsx` 为 404 页面，需返回 React 组件
9. 约定 `src/global.css(less)` 为全局样式，如果存在此文件，会被自动引入到入口文件最前面。
10. 