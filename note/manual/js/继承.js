//es5继承手写
function create(proto) {
  function F() {}
  F.prototype = proto;
  return new F();
}
// Parent
function Parent1(name) {
  this.name = name;
}
Parent1.prototype.sayName = function () {
  console.log(this.name);
};
// Child
function Child1(age, name) {
  Parent1.call(this, name);
  this.age = age;
}
Child1.prototype = create(Parent1.prototype);
Child1.prototype.constructor = Child1;
Child1.prototype.sayAge = function () {
  console.log(this.age);
};
// 测试
const child1 = new Child1(18, 'Jack');
child1.sayName();
child1.sayAge();
