

### jest

介绍：是一门前端单元测试框架 [简洁教程](https://www.jestjs.cn/docs/getting-started) 

作用：

1、监视插件，可以定义在按键时执行代码的监视模式菜单提示

w3c教程 https://www.w3cschool.cn/jest_cn/jest_observe.html

安装：npm install --save-dev jest



简单使用

```js
//  sum.js
function sum(a, b) {
  return a + b;
}
module.exports = sum;

// sum.test.js 
const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

// package.json
{
  "scripts": {
    "test": "jest"
  }
}

npm test
// 输出如下
PASS  ./sum.test.js
✓ adds 1 + 2 to equal 3 (5ms)
// expect 和 toBe 来检测两个值是否完全相同
```

