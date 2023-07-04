/* 
  isPrototypeOf     的两个变量都是    对象    ，用于检测调用此方法的对象是否存在于指定对象的原型链中
  instanceof     的两个变量分别是    对象    和   构造函数 ，用于检测构造函数的原型是否存在于指定对象的原型链中

*/

Object.prototype.isPrototypeOf1 = function (obj) {
  obj = obj.__proto__;
  while (obj) {
    if (obj === this) return true;
    obj = obj.__proto__;
  }
  return false;
};

console.log(Array.isPrototypeOf1([]));
console.log(Array.prototype.isPrototypeOf1([]));
console.log(Object.isPrototypeOf1({}));
console.log(Object.prototype.isPrototypeOf1({}));
