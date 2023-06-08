//instanceof

// object instanceof constructor
// object为实例对象，constructor为构造函数
// 原理
function myInstanceof(left, right) {
  if (typeof left !== 'object' || left === null) return false;
  // 获取对象原型  // let proto = left.__proto__;//等同
  let proto = Object.getPrototypeOf(left);
  // 获取构造函数的 prototype 对象
  let prototype = right.prototype;
  while (true) {
    if (!proto) return false;
    //找到相同原型对象，返回true
    if (proto === prototype) return true;
    // 如果没有找到，就继续从其原型上找  proto = proto.__proto__;
    proto = Object.getPrototypeof(proto);
  }
}

// 测试
class Parent {}
class Child extends Parent {}
const child = new Child();
console.log(
  '手写istenceof输出：',
  child instanceof Parent,
  myInstanceof(child, Parent),
  myInstanceof(child, Child),
  myInstanceof(child, Array)
);


