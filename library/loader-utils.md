
## loader-utils
### 概念/作用
- webpack中有一个及其重要的概念loader，Loader的定义,是处理js后缀文件名除外的文件
- webpack 可以使用 loader 来预处理文件。这允许你打包除 JavaScript 之外的任何静态资源。你可以使用 Node.js 来很简单地编写自己的 loader。
- loader-utils是一个webpack工具类,通过一些方法配合loader处理文件。
- 在loader中，咱们可以通过关键词this访问当前执行环境的所有变量
    1、同步回调时，可以执行this.callback()，默认第一个参数是err错误信息（不报错时返回null），第二个参数是解析完模块后的返回结果，第三个参数是sourceMap（可选），在链式调用时可将sourceMap传给下一个loader；

    2、异步回调时，可以执行this.async()，参数同上；

    3、this.addDependency(filePath)可以把对应filePath的文件添加到webpack的依赖树，webpack可以监测它的文件变动并刷新（filePath要是绝对路径）；

    4、this.resolve()可以解析处理文件路径；

    5、this.query：获取loader的配置选项。

## 扩展webpack'
### module.noParse
noParse 配置项可以让 Webpack 忽略对部分没采用模块化的文件的递归解析和处理，这样做的好处是能提高构建性能。 原因是一些库例如 jQuery 、ChartJS 它们庞大又没有采用模块化标准，让 Webpack 去解析这些文件耗时又没有意义。noParse 是可选配置项，类型需要是 RegExp、[RegExp]、function 其中一个.例如想要忽略掉 jQuery 、ChartJS，可以使用如下代码：
```js
// 使用正则表达式
noParse: /jquery|chartjs/
 
// 使用函数，从 Webpack 3.0.0 开始支持
noParse: (content)=> {
  // content 代表一个模块的文件路径
  // 返回 true or false
  return /jquery|chartjs/.test(content);
}
```
### module.rules
配置模块的读取和解析规则，通常用来配置 Loader。其类型是一个数组，数组里每一项都描述了如何去处理部分文件。 配置一项 rules 时大致通过以下方式：

1.条件匹配：通过 test 、 include 、 exclude 三个配置项来命中 Loader 要应用规则的文件。

2.应用规则：对选中后的文件通过 use 配置项来应用 Loader，可以只应用一个 Loader 或者按照从后往前的顺序应用一组 Loader，同时还可以分别给 Loader 传入参数。

3.重置顺序：一组 Loader 的执行顺序默认是从右到左执行，通过 enforce 选项可以让其中一个 Loader 的执行顺序放到最前或者最后。 下面来通过一个例子来说明具体使用方法：
































未完，待续

漏洞描述
loader-utils 是一款用于 webpack 加载器的实用程序的工具类。

loader-utils 中的 parseQuery.js 中的 parseQuery 方法中由于未对手动传入的 name 参数进行过滤，从而存在原型污染漏洞。攻击者可用过此漏洞通过传入恶意的 name 参数修改 JavaScript 对象属性的默认值，从而导致拒绝服或远程代码执行。

漏洞名称	loader-utils v2.0.0 原型污染漏洞
漏洞类型	动态确定对象属性修改的控制不恰当
发现时间	2022-10-13
漏洞影响广度	一般
MPS 编号	MPS-2022-53514
CVE 编号	CVE-2022-37601
CNVD 编号	-