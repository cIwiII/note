/**
 * umirc 4.0配置项，支持 es6 link：  https://umijs.org/docs/api/config
 * 或者
 * config/config.ts
 */
import { defineConfig } from "umi";

// 可以直接 export default {}; defineConfig包裹会有提示
export default defineConfig({
  // 别名
  alias: {
    "@": "./src",
    foo: "/tmp/to/foo",
    foo: require.resolve("foo"), //推荐绝对路径
    foo$: "/tmp/to/foo" // $子路径不映射
  },

  /* 解析 CSS 添加指定前缀 
   flexbox:'no-2009',  默认值 将仅为规范的最终版本和IE版本添加前缀。
   supports: false,    禁用前缀 
   grid:'autoplace',   -ms前缀
   remove:false,       将禁用清除过时的前缀
*/
  autoprefixer: {
    flexbox: "no-2009"
  },

  // 分析产物构成, 体积大小，webpack-bundle-analyzer 配置项
  analyze: {},

  // 设置路由前缀
  base: "/docs/", //可访问如/docs/，/docs/**路径

  // 更改缓存文件路径到指定文件夹，默认值 node_modules/.cache
  cacheDirectoryPath: "node_modules/.cache1",

  // 基于 webpack-chain，修改webpack配置，
  chainWebpack(memo, args) {
    // memo现有配置，args 包含一些额外信息和辅助对象，目前有 env 和 webpack对象
    return memo;
  },

  // 点击组件时的行为，如：查看、跳转至源码，仅 React 项目支持
  clickToComponent: {},

  // 为每个路由声明数据加载,默认值false
  clientLoader: {},

  // 打包策略方案
  codeSplitting: null,

  //  umi 约定式路由时有效,默认值:null,
  conventionRoutes: {
    // 设置约定的路由的基础路径，默认从 src/pages 读取
    base: "src/pages",
    // 文件过滤,不识别 components 和 models 目录下的文件为路由
    exclude: [/\/components\//, /\/models\//]
  },

  // 打包时采用复制方式，
  copy: ["foo.json", "src/bar.json"], //默认拷贝到产物目录

  // 配置 script 加上 crossorigin="anonymous" 属性。
  crossorigin: false,

  // 配置 CSS 压缩工具; none 表示不压缩。
  cssMinifier: "esbuild",

  // 对应 css 压缩工具配置项
  cssMinifierOptions: {
    minifyWhitespace: true,
    minifySyntax: true
  },

  // 配置 css-loader
  cssLoader: {},

  // 配置 css modules 的行为，默认值{}
  cssLoaderModules: {
    // 配置驼峰式使用
    exportLocalsConvention: "camelCase"
  },

  // 检测未使用的文件和导出，build阶段时，抛出警告配置
  deadCode: {},

  // 设置可用变量，FOO变量值为‘bar’，默认值 { process.env.NODE_ENV: 'development' | 'production' }
  define: { FOO: "bar" },

  // 打包源码-程度
  devtool: false,

  // 设置 babel class-properties 启用 loose
  classPropertiesLoose: {},

  // 修复 esbuild 压缩器自动引入的全局变量导致的命名冲突问题。
  esbuildMinifyIIFE: false,

  // 设置哪些模块不打包
  externals: {},

  // 配置额外需要做 Babel 编译的 NPM 包或目录,默认值{}
  extraBabelIncludes: [
    // 支持绝对路径
    join(__dirname, "../../common"),
    // 支持 npm 包
    "react-monaco-editor",
    // 转译全部路径含有 @scope 的包
    /@scope/
  ],

  // 配置额外的 babel 插件。可传入插件地址或插件函数
  extraBabelPlugins: {},

  // 配置额外的 babel 插件集。可传入插件集地址或插件集函数。
  extraBabelPresets: {},

  // 配置额外的 postcss 插件。
  extraPostCSSPlugins: {},

  // 开启该配置后会针对每个路由单独输出 HTML 文件
  exportStatic: {},

  // 支持配置多个 favicon 文件
  favicons: {},

  // 开启 TypeScript 的类型检查。基于 fork-ts-checker-webpack-plugin
  forkTSChecker: {},

  // 开启 hash 模式，让 build 之后的产物包含 hash 后缀
  hash: {},

  // 配置 <head> 中的额外 script。
  headScripts: {},

  // 配置 react-helmet-async 的集成
  helmet: {},

  // 设置路由 history 类型。{ type: 'browser' | 'hash' | 'memory' }
  history: { type: "browser" },

  // 让 history 带上 query。
  historyWithQuery: false,

  // 开启 dev 的 https 模式。
  https: { hosts: ["127.0.0.1", "localhost"] },

  // 快捷地引用 icon 集,默认false,开启 icons 功能，并允许自动安装图标库,其他属性见文档
  icons: {
    // 是否自动安装 icon 集
    autoInstall: {},
    // 用于配置 icon 的别名
    alias: { home: "fa:home" },
    // 配置需要强制使用的 icon
    include: ["fa:home", "local:icon"]
  },

  // 忽略 moment 的 locale 文件，用于减少产物尺寸，默认true
  ignoreMomentLocale: false,

  // 配置图片文件是否走 base64 编译的阈值
  inlineLimit: 10000,

  // 配置构建时压缩 JavaScript (webpack)的工具默认值 esbuild, terser, swc, uglifyJs, none（不压缩）
  jsMinifier: "esbuild",

  // jsMinifier 的配置项
  jsMinifierOptions: {},

  // 设置 less-loader 的 Options
  lessLoader: { modifyVars: userConfig.theme, javascriptEnabled: true },

  // 兼容低版本浏览器,默认false
  legacy: false,

  // 配置额外的 link 标签。
  links: [{ href: "/foo.css", rel: "preload" }],

  // 生成额外的 manifest 文件，用于描述产物
  manifest: null,

  // mdx loader 配置 loader 配置路径
  mdx: {},

  // 配置额外的 meta 标签。
  metas: [],

  // 配置基于 Module Federation 的提速功能
  mfsu: { mfName: "mf", strategy: "normal" },

  // 配置 mock 功能。默认开启
  mock: {
    exclude: [], // 用于排除不需要的 mock 文件
    include: ["src/pages/**/_mock.ts"] //额外文件
  },

  // 配置 react 组件树渲染到 HTML 中的元素 id。
  mountElementId: "root",

  // 重定向子包导入源码的位置
  monorepoRedirect: false,

  // 启用 mpa 模式。多页面
  mpa: false,

  // 配置输出路径。
  outputPath: "dist",

  // 执行幽灵依赖检测
  phantomDependency: false,

  // 配置额外的 Umi 插件。
  plugins: [],

  // 设置按需引入的 polyfill,默认全局引入
  polyfill: {},

  // 设置 postcss-loader 的配置项
  postcssLoader: {},

  // 配置额外的 Umi 插件集
  presets: {},

  // 配置代理功能。
  proxy: {
    "/api": {
      target: "http://jsonplaceholder.typicode.com/",
      changeOrigin: true,
      pathRewrite: { "^/api": "" }
    }
  },

  // 配置 webpack 的 publicPath
  publicPath: "/",

  // 启用 react-router 5 兼容模式
  reactRouter5Compat: false,

  // 配置路由
  routes: [],

  // run 命令的全局注入配置
  run: null,

  // 启用运行时 publicPath
  runtimePublicPath: {},

  // 配置 <body> 中额外的 script 标签
  scripts: [],

  // 配置 sass-loader
  sassLoader: {},

  // 启用 style loader 功能,不输出css文件
  styleLoader: false,

  // 配置额外的 CSS。
  styles: [],

  // 配置构建时转译 js/ts 的工具,babel, swc, esbuild, none
  srcTranspiler: "babel",

  // 转译工具为 swc / esbuild时的进一步配置
  srcTranspilerOptions: undefined,

  // svgr 默认开启，支持 React svg 组件
  svgr: {},

  // 默认使用 svgo 来优化 svg 资源
  svgo: {},

  // 配置需要兼容的浏览器最低版本,{ chrome: 80 }
  targets: { ie: 11 },

  // 配置 less 变量主题。
  theme: { "@primary-color": "#1DA57A" },

  // 全局页面 title
  title: {},

  // verify-commit 命令
  verifyCommit: { scope: ["feat", "fix"] },

  // 开发者的配置会 merge 到 vite 的 默认配置。
  vite: { cacheDir: "node_modules/.bin/.vite" },

  // dev 模式下额外输出一份文件到 dist 目录
  writeToDisk: false
});
