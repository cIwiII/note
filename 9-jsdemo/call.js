Function.prototype.myCall = function (context = window) {
  // 判断调用对象
  if (typeof this !== 'function') {
    console.error('type error');
    throw new TypeError('Error');
  }
  // 获取参数
  let args = [...arguments].slice(1);
  // 将调用函数设为对象的方法
  context.fn = this;
  // 调用函数
  let result = context.fn(...args);
  // 将属性删除
  delete context.fn;
  return result;
};

Function.prototype.myCall = function (context = globalThis) {
  // 关键步骤，在 context 上调用方法，触发 this 绑定为 context，使用 Symbol 防止原有属性的覆盖
  if (typeof this === 'function') {
    console.error('type error');
    throw new SyntaxError('调用必须是 function 类型');
  }
  const key = Symbol('key');
  // es5 可通过 for 遍历 arguments 得到参数数组
  const args = [...arguments].slice(1);
  context[key] = this;
  const result = context[key](...args);
  delete context[key];
  return result;
};

// 测试
const me = { name: 'Jack' };
function say() {
  console.log(`My name is ${this.name || 'default'}`);
}
say.myCall(me);
