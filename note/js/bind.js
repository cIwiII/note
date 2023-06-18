// Function.prototype.myBind = function (context) {
//   // 判断调用对象是否为函数
//   if (typeof this !== 'function') {
//     throw new TypeError('Error');
//   }
//   // 获取参数
//   var args = [...arguments].slice(1),
//     fn = this;
//   return function Fn() {
//     // 根据调用方式，传入不同绑定值
//     return fn.apply(this instanceof Fn ? this : context, args.concat(...arguments));
//   };
// };

Function.prototype.myBind = function (context = globalThis) {
  if (typeof this !== 'function') {
    throw new TypeError('Error');
  }
  const args = Array.from(arguments).slice(1);
  const fn = this;
  const newFunc = function () {
    // const newArgs = args.concat(...arguments);
    // if (this instanceof newFunc) {
    //   // 通过 new 调用，绑定 this 为实例对象
    //   fn.apply(this, newArgs);
    // } else {
    //   // 通过普通函数形式调用，绑定 context
    //   fn.apply(context, newArgs);
    // }
    // 可返回可不返回，影响调用结束后的值
    return fn.apply(this instanceof newFunc ? this : context, args.concat(...arguments));
  };
  // 支持 new 调用方式
  newFunc.prototype = Object.create(fn.prototype);
  return newFunc;
};

//实现bind方法
/* Function.prototype.asbind = function(context) {
  var self = this;
  return function() {
    return self.apply(context, arguments);
  }
} */
// 测试
const me = { name: 'Jack' };
const other = { name: 'Jackson' };
function say() {
  console.log(`My name is ${this.name || 'default'}`);
}
const meSay = say.myBind(me);
meSay();
const otherSay = say.myBind(other);
otherSay();
