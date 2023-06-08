//手new操作符
function myNew(func, ...args) {
  if (typeof func !== "function") {
    throw TypeError("type error");
  }
  const obj = {}; //创建一个空对象
  obj.__proto__ = func.prototype; //新对象的原型指向构造函数的原型
  // const obj = Object.create(func.prototype);//两步合并为一步，创建对象并指定原型
  let result = func.apply(obj, args); //构造函数的this指向新创建的对象,为对象添加属性和方法
  // let flag = result && (typeof result === "object" || typeof result === "function");
  let flag = result && result instanceof Object;
  return flag ? result : obj; // 如果是引用类型返回这个引用类型的对象，如果是值类型，返回创建的对象obj
}

// 测试
function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.say = function () {
  console.log(this.name);
};

let p = myNew(Person, "huihui", 123);
// let p=new Person("huihui",123)

console.log(p); // Person {name: "huihui", age: 123}
p.say(); // huihui
