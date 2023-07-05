

# Object

- 一条原型链的顶端对象为Object对象(不考虑null)，故所有对象都拥有Object的属性和函数。

## 空对象{}判断：

方法一：将对象转换成[字符串](https://so.csdn.net/so/search?q=字符串&spm=1001.2101.3001.7020)，再判断是否等于“{}”

```javascript
let obj={};
console.log(JSON.stringify(obj)==="{}");//返回true
```

方法二：for in循环

```javascript
let result=function(obj){    
    for(let key in obj){        
        return false;//不为空时执行   
    }    
    return true;//为空
}
console.log(result(obj));//返回true
```

方法三：Object.keys()方法，返回对象的属性名组成的一个数组，若长度为0，则为空对象（ES6的写法）

```javascript
console.log(Object.keys(obj).length==0);//返回true
```

方法四：Object.getOwnPropertyNames方法获取对象的属性名，存到数组中，若长度为0，则为空对象

```javascript
console.log(Object.getOwnPropertyNames(obj).length==0);//返回true
```

方法五：jQuery中的isEmptyObject()方法，其原理是利用for in的方式来判断（注意：使用这种方式记得引用jquery）

```javascript
console.log($.isEmptyObject(obj)); //true
```

## API

### 静态函数(static)

#### `Object.create(proto,propertiesObject)`

create：创建对象，能够手动指定该对象的原型。

#### [Object.freeze(obj)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze#%E6%8F%8F%E8%BF%B0) :冻结,属性不可添加删除修改

冻结后。不可修改原型，属性不能添加和删除，不能修改属性可枚举性、可配置性、可写性、值。

如果a对象被冻结，它有个属性b，属性值为c对象，c未冻结时可以修改

被冻结对象自身的所有属性都不可能以任何方式被修改。任何修改尝试都会失败。严格模式抛出异常。

返回： 被冻结后的对象。

```js
const obj = {prop: 42};

Object.freeze(obj);  // 冻结后，不可操作
obj.prop = 33;   // Throws an error in strict mode,在严格模式下抛出错误

console.log(obj.prop);  // expected output: 42

----------------
var obj = {
  prop: function() {},
  foo: 'bar'
};

// 新的属性会被添加，已存在的属性可能
// 会被修改或移除
obj.foo = 'baz';
obj.lumpy = 'woof';
delete obj.prop;

// 作为参数传递的对象与返回的对象都被冻结
// 所以不必保存返回的对象（因为两个对象全等）
var o = Object.freeze(obj);

o === obj; // true
Object.isFrozen(obj); // === true，是否冻结

// 现在任何改变都会失效
obj.foo = 'quux'; // 静默地不做任何事
obj.quaxxor = 'the friendly duck';  // 静默地不添加此属性

// 在严格模式，如此行为将抛出 TypeErrors
function fail(){
  'use strict';
  obj.foo = 'sparky'; // throws a TypeError
  delete obj.quaxxor; // 返回 true，因为 quaxxor 属性从来未被添加
  obj.sparky = 'arf'; // throws a TypeError
}
fail();

// 试图通过 Object.defineProperty 更改属性
// 下面两个语句都会抛出 TypeError.
Object.defineProperty(obj, 'ohai', { value: 17 });
Object.defineProperty(obj, 'foo', { value: 'eit' });

// 也不能更改原型
// 下面两个语句都会抛出 TypeError.
Object.setPrototypeOf(obj, { x: 20 })
obj.__proto__ = { x: 20 }

-----------
  数组冻结
let a = [0];
Object.freeze(a); // 现在数组不能被修改了。

a[0]=1; // fails silently，静默失败
a.push(2); // fails silently

// In strict mode such attempts will throw TypeErrors
function fail() {
  "use strict"
  a[0] = 1;
  a.push(2);
}

fail();

被冻结的对象是不可变的。但也不总是这样。
冻结对象不是常量对象（浅冻结）。
obj1 = {
  internal: {}
};

Object.freeze(obj1);
obj1.internal.a = 'aValue';

obj1.internal.a // 'aValue'

----------------
深冻结函数。
function deepFreeze(obj) {

  // 取回定义在 obj 上的属性名
  var propNames = Object.getOwnPropertyNames(obj);

  // 在冻结自身之前冻结属性
  propNames.forEach(function(name) {
    var prop = obj[name];

    // 如果 prop 是个对象，冻结它
    if (typeof prop == 'object' && prop !== null)
      deepFreeze(prop);
  });

  // 冻结自身 (no-op if already frozen)
  return Object.freeze(obj);
}

obj2 = {
  internal: {}
};

deepFreeze(obj2);
obj2.internal.a = 'anotherValue';
obj2.internal.a; // undefined

---------
    注意：在 ES5 中，如果这个方法的参数不是一个对象（一个原始值），那么它会导致 TypeError。在 ES2015 中，非对象参数将被视为要被冻结的普通对象，并被简单地返回。
    
 Object.freeze(1)
TypeError: 1 is not an object // ES5 code

 Object.freeze(1)
1                             // ES2015 code
```



- `Object.isFrozen(obj)`:判断一个对象是否冻结,返回布尔型。

#### [Object.seal()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/seal)密封，属性不能添加和删除，可修改

方法封闭一个对象，阻止添加新属性并将所有现有属性标记为不可配置。当前属性的值只要原来是可写的就可以改变。

```js
var obj = {
  prop: function() {},
  foo: 'bar'
};

// 可以添加新的属性
// 可以更改或删除现有的属性
obj.foo = 'baz';
obj.lumpy = 'woof';
delete obj.prop;

var o = Object.seal(obj);

o === obj; // true
Object.isSealed(obj); // === true

// 仍然可以修改密封对象的属性值
obj.foo = 'quux';


// 但是你不能将属性重新定义成为访问器属性
// 反之亦然
Object.defineProperty(obj, 'foo', {
  get: function() { return 'g'; }
}); // throws a TypeError

// 除了属性值以外的任何变化，都会失败。
obj.quaxxor = 'the friendly duck';// 添加属性将会失败

delete obj.foo;// 删除属性将会失败


// 在严格模式下，这样的尝试将会抛出错误
function fail() {
  'use strict';
  delete obj.foo; // throws a TypeError
  obj.sparky = 'arf'; // throws a TypeError
}
fail();

// 通过 Object.defineProperty 添加属性将会报错
Object.defineProperty(obj, 'ohai', {
  value: 17
}); // throws a TypeError
Object.defineProperty(obj, 'foo', {
  value: 'eit'
}); // 通过 Object.defineProperty 修改属性值
---------------------
    在 ES5 中，如果这个方法的参数不是一个（原始）对象，那么它将导致TypeError。在 ES2015 中，非对象参数将被视为已被密封的普通对象，会直接返回它。

Object.seal(1);
// TypeError: 1 is not an object (ES5 code)

Object.seal(1);
// 1                             (ES2015 code)
```





#### [Object.isSealed()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed#%E5%8F%82%E6%95%B0) 对象是否被密封。

密封对象是指那些不可 [`扩展`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible) 的（一个对象可以添加新的属性，则这个对象是可扩展的，不可扩展，属性可能仍然可被*删除*），且所有自身属性都不可配置且因此不可删除（但不一定是不可写）的对象。

语法：Object.isSealed(obj)    参数要被检查的对象

返回值：是否被密封boolean

```js
// 新建的对象默认不是密封的。
var empty = {};
Object.isSealed(empty); // === false

// 如果你把一个空对象变的不可扩展，则它同时也会变成个密封对象。
Object.preventExtensions(empty);
Object.isSealed(empty); // === true

// 但如果这个对象不是空对象，则它不会变成密封对象，因为密封对象的所有自身属性必须是不可配置的。
var hasProp = { fee: "fie foe fum" };
Object.preventExtensions(hasProp);
Object.isSealed(hasProp); // === false

// 如果把这个属性变的不可配置，则这个属性也就成了密封对象。
Object.defineProperty(hasProp, 'fee', {
  configurable: false
});
Object.isSealed(hasProp); // === true

// 最简单的方法来生成一个密封对象，当然是使用 Object.seal.
var sealed = {};
Object.seal(sealed);
Object.isSealed(sealed); // === true

// 一个密封对象同时也是不可扩展的。
Object.isExtensible(sealed); // === false

// 一个密封对象也可以是一个冻结对象，但不是必须的。
Object.isFrozen(sealed); // === true ，所有的属性都是不可写的
var s2 = Object.seal({ p: 3 });
Object.isFrozen(s2); // === false， 属性"p"可写

var s3 = Object.seal({ get p() { return 0; } });
Object.isFrozen(s3); // === true ，访问器属性不考虑可写不可写，只考虑是否可配置

注意
在 ES5 中，如果这个方法的参数不是一个对象（一个原始类型），那么它会导致TypeError。在 ES2015 中，非对象参数将被视为是一个密封的普通对象，只返回true。
Object.isSealed(1);
// TypeError: 1 is not an object (ES5 code)

Object.isSealed(1);
// true                          (ES2015 code)
```

#### Object.preventExtensions(obj)改为不可扩展

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions

让一个对象变的不可扩展，也就是永远不能再添加新的属性（即：prototype不能变，但内部可以），返回：已经不可扩展的对象。

[`Object.preventExtensions`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions)，[`Object.seal`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/seal) 或 [`Object.freeze`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze) 方法都可以标记一个对象为不可扩展（non-extensible）。

`注意`：仅自身不能添加，原型仍可操作。

```js
const object1 = {};

Object.preventExtensions(object1);

try {
  Object.defineProperty(object1, 'property1', {
    value: 42
  });
} catch (e) {
  console.log(e);
  // expected output: TypeError: Cannot define property property1, object is not extensible
}

------------
// Object.preventExtensions 将原对象变的不可扩展，并且返回原对象。
var obj = {};
var obj2 = Object.preventExtensions(obj);
obj === obj2;  // true

// 字面量方式定义的对象默认是可扩展的。
var empty = {};
Object.isExtensible(empty) //=== true

// ...但可以改变。
Object.preventExtensions(empty);
Object.isExtensible(empty) //=== false

// 使用 Object.defineProperty 方法为一个不可扩展的对象添加新属性会抛出异常。
var nonExtensible = { removable: true };
Object.preventExtensions(nonExtensible);
Object.defineProperty(nonExtensible, "new", { value: 8675309 }); // 抛出 TypeError 异常

// 在严格模式中，为一个不可扩展对象的新属性赋值会抛出 TypeError 异常。
function fail()
{
  "use strict";
  nonExtensible.newProperty = "FAIL"; // throws a TypeError
}
fail();

-------
    不可扩展原型不能变
var fixed = Object.preventExtensions({});
fixed.__proto__ = { oh: 'hai' }; // throws a 'TypeError'.


注意：在 ES5 中，参数不是对象类型（而是原始类型：基本类型），抛出TypeError异常。在 ES2015 中，非对象参数将被视为一个不可扩展的普通对象，因此会被直接返回。
Object.preventExtensions(1);
// TypeError: 1 is not an object (ES5 code)

Object.preventExtensions(1);
// 1                             (ES2015 code)
```

#### `Object.isExtensible()` 判断是否可扩展

方法判断一个对象是否是可扩展的（是否可以在它上面添加新的属性）

返回：boolean值

```js
// 密封对象是不可扩展的。
var sealed = Object.seal({});
Object.isExtensible(sealed); // === false

// 冻结对象也是不可扩展。
var frozen = Object.freeze({});
Object.isExtensible(frozen); // === false

注意：在 ES5 中，如果参数不是一个对象类型，将抛出一个 TypeError 异常。在 ES6 中， non-object 参数将被视为一个不可扩展的普通对象，因此会返回 false 。
Object.isExtensible(1);
// TypeError: 1 is not an object (ES5 code)

Object.isExtensible(1);
// false                         (ES6 code)
```



#### `Object.getPrototypeOf()` 

方法返回指定对象的原型（内部`[[__proto__]]`属性的值）。

—proto—：非标准方法，

#### `Object.setPrototypeOf()`

ES6 设置对象的原型，参数一对象，参数二原型对象

#### `布尔值 Object.is(value1,value2)`：

判断两个值是否是同一个值。

- 返回值为true的情况:
  - 都是`undefined`;
  - 都是`null`;
  - 都是`true`或者都是`false`;
  - 都是相同长度的字符串且字符按相同顺序排列;
  - 都是相同对象(引用地址相同);
  - 都是数字，且:都是`+0`;都是`-0`;都是`NaN`;都是非`0`或非`NaN`的其他相同值;
  - 注意:Set和Map底层判断是否为同一个元素是基于`Object.is()`实现；

#### `Object.assign(target,obj1,obj2......)`浅拷贝拼接


  - 将所有可枚举属性的值（复合数据值是地址）从一个或多个源对象分配到目标对象。返回目标对象。
    - target:目标对象。
    - obj1,obj2..:一个或多个源对象。

#### `Object.defineProperty(obj,prop,desc)`

:添加或修改指定对象的属性。(set,get)和(value,writable)冲突，要重写一个不可写入的属性，就需要使用defineProperty

- obj:目标对象(向谁添加或修改)。
- prop:目标属性。
- desc :属性描述对象。
  - value:该属性的值或者方法，默认值为`undefined`。
  - writable:设置属性值是否可`修改`，默认值为`false`;
  - configurable:设置属性是否可配置修改和`删除`，默认值为`false`;
  - enumerable:属性可枚举（`遍历`），默认值为`false`，该属性是否出现在`for in`结果中；
  - set:在设置当前属性值时，系统自动调用执行的函数;
  - get:在获取当前属性值时，系统自动调用执行的函数;

#### `Object.defineProperties`

设置多个属性

```js
Object.defineProperties(person, {
    [lastName]: {
       value: "Zakas",
       writable: false
    },
    b: {
          enumerable: true,
          configurable: true,
          value: 5,
        },
});
```



#### Object.getOwnPropertyDescriptor（）

- 获取对象自身的属性，而非原型上的属性，必须接收两个参数，1.对象，2.属性，返回**属性描述符**对象

**属性描述符**：对象中某一个属性配置，如defineProperty的第三个参数

#### Object.assign({},{})

- 该方法用于浅层属性合并，接受者不会创建访问器属性，只会将访问器属性变成值。
      如：get name访问器会成为接受者的name属性值，Object.mixin()会创建访问器，但已废弃

#### Object.keys() 

- 返回可枚举属性键，不能返回符号类型的属性

#### Object.getOwnPropertyNames() 

- 返回键，无视是否可枚举性，不能返回符号类型的属性

#### Object.getOwnPropertySymbols() 

- ES6，会返回一个数组，包含了对象自有属性名中的符号值，以便让你可以检索对象的符号类型属性

### 对象函数

- `字符串 toString()`：将对象转为字符串。
- `布尔值 hasOwnProperty()`:判断当前对象自身是否存在指定属性(跟原型链无关)。返回布尔型。
- `布尔值 isPrototypeOf()` 方法用于测试一个对象是否存在于另一个对象的原型链上。
- `布尔值 propertyIsEnumable(属性名称)`:判断一个对象的某个属性是否可枚举。

### ES6知名符号

每一个知名符号都对应全局 Symbol 对象的一个属性，例如 Symbol.create 。

这些知名符号是：

#### Symbol.hasInstance ：

- 供 instanceof 运算符使用的一个方法，用于判断对象继承关系。返回布尔值，可以设置返回其他数据，会影响 instanceof 作用

- 定义在Function.prototype上，因此所有函数都继承了面对 instanceof 运算

  符时的默认行为。 Symbol.hasInstance 属性自身是不可写入、不可配置、不可枚举的

  ```js
  obj instanceof Array;
  等价于，insranceof 的语法糖
  Array[Symbol.hasInstance](obj);
  
  // 定义一个函数，任何方法都不会判断为该函数的实例，始终返回false
  function MyObject() {
  // ...
  }
  Object.defineProperty(MyObject, Symbol.hasInstance, {
      value: function(v) {
          return false;
     }
  });
  let obj = new MyObject();
  console.log(obj instanceof MyObject); // false
  
  
  // 定义1-100认定为一个特殊的数值类型
  function SpecialNumber() {
  // empty
  }
  Object.defineProperty(SpecialNumber, Symbol.hasInstance, {
     value: function(v) {
         return (v instanceof Number) && (v >=1 && v <= 100);
     }
  });
  let two = new Number(2),
  zero = new Number(0);
  console.log(two instanceof SpecialNumber); // true
  console.log(zero instanceof SpecialNumber); // false
  ```

  

#### Symbol.isConcatSpreadable 

- 一个布尔类型值，在集合对象作为参数传递给Array.prototype.concat() 方法时，指示是否要将该集合的元素扁平化(一层)。

- 表示目标对象拥有`长度属性`与`数值类型的键`、并且数值类型键所对应的属性值在参与 concat() 调用时需要被分离为个体

  ```js
  // 使对象能够像数组一样被扁平化拼接
  // 满足条件，有长度，有数组类型的键，知名属性设置为true
  let collection = {
      0: "Hello",
      1: "world",
      length: 2,
      [Symbol.isConcatSpreadable]: true
  };
  
  let messages = [ "Hi" ].concat(collection);
  console.log(messages.length); // 3
  console.log(messages); // ["hi","Hello","world"]
  ```

  

Symbol.iterator ：返回迭代器（参阅第七章）的一个方法。

Symbol.match ：供 String.prototype.match() 函数使用的一个方法，用于比较字符串。

Symbol.replace ：供 String.prototype.replace() 函数使用的一个方法，用于替换子字符串。

Symbol.search ：供 String.prototype.search() 函数使用的一个方法，用于定位子字符串。

Symbol.species ：用于产生派生对象的构造器。

Symbol.split ：供 String.prototype.split() 函数使用的一个方法，用于分割字符串。

Symbol.toPrimitive ：返回对象所对应的基本类型值的一个方法。

Symbol.toStringTag ：供 String.prototype.toString() 函数使用的一个方法，用于创建对象的描述信息。

Symbol.unscopables ：一个对象，该对象的属性指示了哪些属性名不允许被包含在with 语句中。

## 克隆

- 概念

  - 对对象进行赋值(拷贝)。
  - 根据克隆的程度不同，将克隆分为浅克隆和深克隆。

- 浅克隆

  - 只对对象的属性值进行拷贝，如果属性类型为引用数据类型，会生成新空间（以前是不会生成新的堆空间）只拷贝最外层;

  - 实现:

    - 方式一:

      ```
      let obj={    id:1,    name:'admin'};let obj2={...obj};
      ```

    - 方式二:

      ```js
      let obj={    id:1,    name:'admin'};
      let obj2={};
      Object.assign(obj2,obj);//obj和obj2地址不再相同是两个对象
      ```

- 深克隆

  - 对对象的属性值进行拷贝，如果属性类型为引用数据类型，会生成新的堆空间;

  - 实现:

    - 方式一:

      ```js
      let obj={    id:1,    name:'admin',    
               score:[99,78,102]};
      let json=JSON.stringify(obj);
      let obj2=JSON.parse(json);
      //简化为
      let obj2=JSON.parse(JSON.stringify(obj) );
      ```

    - 方式二:编写递归函数，

      ```js
      function clone(source,target){//stu
          //遍历对象的所有属性
          for(let key in source){
              //对象["属性名称"]
              // console.log(source[key]);
              if((typeof source[key])=='object' && source[key]!=null){
                  // console.log('引用数据类型');
                  if(source[key] instanceof Array){
                      // console.log('数组');
                      target[key]=[...source[key]];
                  }else{
                      target[key]={};
                      clone(source[key],target[key]);
                  }
              }else{
                  // console.log('基本数据类型');
                  target[key]=source[key];
              }
          }
      }
      ```

## 模拟Vue双向绑定

```js
//更改表单内容，将表单内容同步更改对象属性
function initForm(id){
    let inputEleArray=document.querySelectorAll(`#${id} input`);
    //目标对象
    let obj={};
    // console.log(inputEle);
    //修改对象属性值，将属性值同步更改对应表单内容
    inputEleArray.forEach(val=>{
        // console.log(val);
        if(val.type=='text' || val.type=='password'){
            // console.log(val);
            //获取name属性值
            let nameAttr=val.name;
            Object.defineProperty(obj,nameAttr,{
                set:function(v){
                    //存储赋值内容到对象属性中
                    obj[`_${nameAttr}`]=v;
                    //更改值同步到表单内容中
                    val.value=v;
                },
                get:function(){
                    return obj[`_${nameAttr}`];
                }
            })
        }
    });
    //更改表单内容，将表单内容同步更改对象属性
    let formEle=document.querySelector(`#${id}`);
    formEle.onchange=function(event){
        let target=event.target;
        obj[`_${target.name}`]=target.value;
    }
    return obj;
}
```



## 异步编程

AJAX 的全称是“Asynchronous JavaScript and XML”，翻译过来就是“异步的 JS 和 XML”。

- Asynchronous：异步的，表示 AJAX 是一个异步代码，不会阻塞后面代码的执行；
- JavaScript：使用 JavaScript 来实现前端（浏览器）和后端（服务器）的通信；
- XML：XML 是一种数据格式，但是现在慢慢被 JSON 格式的数据替代了；

AJAX 的核心就是：

- 实现前端和后端的异步通信；
- 实现前端页面的局部刷新；

### 原生 AJAX 的使用步骤

```
// 第一步：创建核心对象const xhr = new XMLHttpRequest();// 第二步：建立前后端的连接xhr.open('GET', 'http://nocat.life:3000/students/getStudents');// 第三步：发送请求xhr.send();// 第四步：处理后端返回的结果// onreadystatechange：当 readystate 的值发生改变时会触发该事件xhr.onreadystatechange = function () {    // readyState == 4 表示后端处理完成了    // status == 200 表示后端处理成功了    if (xhr.readyState == 4 && xhr.status == 200) {        // responseText 接收到的就是后端传输给前端的数据        console.log(JSON.parse(xhr.responseText));    }}
```

### jQuery 的 AJAX

```
$.ajax({    type: 'GET',                                         // 请求类型    url: 'http://nocat.life:3000/students/getStudents',  // 请求资源的路径    // data: {},                                         // 前端发送给后端的数据    success(res) {                                       // 请求成功时执行的回调函数        console.log(res);                                // 后端传输给前端的数据    }})
```



### 异步编程概念

- 同步:按照代码编写顺序依次执行的过程，被称为同步执行，被执行的代码被称为同步代码。
  - 优点:逻辑清晰，数据加载顺序明确；
  - 缺点:代码执行效率较低，系统资源利用率不高;
- 异步:未按照代码编写顺序依次执行的过程，被称为异步执行，被执行的代码被称为异步代码。
  - 优点:代码执行效率较高，系统资源利用率较高;
  - 缺点:逻辑相对不够清晰，数据加载顺序不明确；
- javascript是单线程，不管同步还是异步，永远无法做到真正的多段代码同时执行
- 异步代码(案例)
  - 定时器和延时器;
  - ajax的async取值为true;
  - jQuery动画:
    - fadeIn、fadeOut、slideDown、slideUp、show、hide、animate

### 任务队列与事件循环

- 目的:当同步代码与异步代码共存时，确定代码的执行顺序。
- 流程:
  1. 当JavaScript代码执行前，会对代码进行预编译，并将代码存储到执行栈(代码容器)中;
  2. 依次执行执行栈中的同步代码;
  3. 如果遇到异步代码，会将异步代码存储到任务队列中(未执行)，继续执行后面的代码;
  4. 当执行栈中的代码执行完毕后，会从任务队列中取出第一个异步代码执行，执行完毕后，继续取出下一个任务队列中代码执行，直到任务队列中无待执行的代码，程序进入等待期;(先微任务，后宏任务)，每一个script标签都是一个宏任务
- 反复从任务队列中取出任务代码执行的过程，被称为`事件循环`。

### 回调函数

- 概念
  - 一个函数被作为参数传入另外一个函数，作为参数的那个函数被称为回调函数。
  - 比如:filter、map、forEach、sort、some、every、setTimeout、setInterval、fadeIn等。
- 分类
  - 同步回调
    - 按照代码编写顺序执行的回调函数，被称为同步回调。如数组api里的sort、forEach、filter之类的，
  - 异步回调
    - 未按照代码编写顺序执行的回调函数，被称为异步回调。如定时器、Ajax、事件代码

### 回调地狱

- 异步代码数据有依赖关系(后一个回调需要使用前一个回调的数据时)，会发生异步回调嵌套，该现象被称为回调地狱。这样会导致代码很难去管理和维护。
- 存在问题
  - 代码结果较复杂，可读性较差;
  - 不方便代码维护;
- 解决：可以实现异步代码顺序执行，但又要优雅简洁好管理的代码
  - promise
  - async&await（以promise为基础）

### Promise

#### **概念：** 

Promise再我们前端开发过程中代表的一个容器（对象），是异步编程的一种解决方案。ES6新增的构造函数，每个Promise对象可以处理解决一个异步回调问题。解决回调地狱存在的问题。

#### **Promise的状态** 

- Promise 对象有三种状态：内部的状态码是不可逆

  - pending: 等待中，或者进行中，表示还没有得到请求结果；
  - fulfilled: 已成功，then方法可以执行；
  - rejected: 已失败，虽然也已经完成，由于结果不是想要的，因此拒绝继续执行；代码会进入catch模块

- 语法
  ```js
  // 创建Promise对象;
  let 变量名称=new Promise(function(resolve,reject){
      //异步成功时
      resolve(传入then回调函数的实参);
      //异步失败时
      reject(传入cathc回调函数的实参);
  });
  ```

  

#### Promise的常用的api

then：状态为 fulfilled 会执行的模块

catch：实际上就是 then 方法中第二个回调函数的另一种写法：

finally：不管成功还是失败最后都会执行。

all：多个promise并发请求全部成功时执行。

race：多个promise的异步请求, 最先成功的，或者全部失败时第一个失败的。

allSettled：也可以发送多个异步请求

```js
new Promise((resolve,reject)=>{
    //内部状态
    axios({
        success(){
            resolve(123)  //内部转变fulfilled
        },fail(){
            reject("请求失败") //rejected
        }
    })
}).then(res=>{
    console.log('成功时触发', res); 
}).catch(error=>{
    console.log('失败时触发', error);
}).finally(res=>{
    //不管成功还是失败最后都会执行，清理资源
})
```



#### 配置`then`和`catch`;

- 可以通过自定义返回值来决定then和catch的返回promise对象，如果不指定，系统会自动创建promise对象返回。


- ```js
let typePromise = new Promise(function (resolve, reject) {
      $.ajax({
          url: 'https://w.../getAllTypes',
          success: function (data) { //异步成功
              resolve(data);
          },
          error: function () { //异步失败
              reject('类型失败');
          }
      });
  });
  let opePromise = new Promise(function (resolve, reject) {
      $.ajax({
          url: 'https://ww...e/getAllOperas',
          success: function (data) {
              resolve(data);
          },
          error: function () {
              reject('影院失败');
          }
      });
  });
  typePromise.then(function (v) {
      //类型异步成功时要执行的代码
      console.log('类型异步成功',v);
      return opePromise;
  }).then(function (v) {
      //电影院异步成功
      console.log('电影院异步成功',v);
  });
  ```

#### all

实现多个promise并发请求, 所有实例对象状态都变为”成功”，才会执行 then 方法中的第一个回调函数，每个请求状态都是成功，返回所有成功的结果。如果 `失败` 或 `报错` 会进入catch

```js
const p1 = new Promise((resolve, reject) => {
    resolve("请求成功")
}).then(res => {
    console.log(res);
}).catch(e => {
    console.log(e);
})

const p2 = new Promise((resolve, reject) => {
    throw new Error("请求错误了")
    // resolve("成功2")
}).then(res => {
    console.log(res);
}).catch(e => {
    console.log(e);
})

//  并发执行两个请求
const p = Promise.all([p1, p2])
p.then(res => {
    console.log(res);
}).catch(error => {
    console.log(error);
})
```

如果每个请求都有自己的then和catch，每个promise得到结果，执行自己的api。如上：

当要执行的promise请求，没有自己的then和catch，默认最后的结果再合并后的promise展现。如下：

```js
const p1 = new Promise((resolve, reject) => {   
    resolve("p1请求成功")
})
const p2 = new Promise((resolve, reject) => {   
    resolve("p2请求成功")
})
Promise.all([p1, p2]).then((data) => {   
    console.log(data);
})
```



#### race

race这个api也是promise的静态属性，多个并发请求，如果有一个请求更快得到结果，就会返回这个成功的promise结果

```js
const p1 = new Promise((resolve, reject) => {  
    resolve(1);})
const p2 = new Promise((resolve, reject) => {  
    resolve(2);})
Promise.race([p1, p2]).then((data) => {   
    console.log(data);
})
```

只要 p1 和 p2 中任意一个实例对象的状态变为了”成功”，就会执行 then 方法中的第一个回调函数。如果都有请求都异常，返回第一个异常的而结果

#### allSettled

es2020版本提出的

```js
<script>
        // promise all
        const p1 = new Promise((resolve, reject) => {
            resolve("请求成功")
            // throw new Error("请求错误了1")
        })
        const p2 = new Promise((resolve, reject) => {
            throw new Error("请求错误了2")
            // resolve("成功2")
        })
        //  并发执行两个请求
        const p = Promise.allSettled([p1, p2])
        p.then(res => {
            console.log(res);
        }).catch(error => {
            console.log(error);
        })
    </script>
```







### async和await

- 概念
  
  - ES7 中提供的异步最终解决方案，
  
- async
  
  - async 可以用来修饰定义一个异步函数，async 函数本身不是异步代码，函数内部可以用来处理异步代码，可以使用await关键字接收一个 Promise 对象中 resolve 的结果。
  
  - async函数可以有返回值，会`自动创建Promise对象`，并将返回值作为resolve参数传入;
  
- await
  
  - 阻塞代码，只能在异步async中使用，等待Promise对象执行异步代码完毕后，再执行async函数后面的代码，并将resolve的实参作为await的返回值返回;
  
  - ```js
    const res = await new Promise((resolve) => {    
        resolve(res);
    });
    console.log(res);
    
    // 完整应为
    async function main() {    
        const res = await new Promise((resolve) => {        
            resolve(res);    
        });    
        console.log(res);
    }
    main();
    ```
  
  async和普通函数的区别：`除await外`，即使有return也永远返回一个promise对象

案例1

```js
function getTestA() {    
    return new Promise((resolve) => {       
        $.ajax({            
            url: 'http://nocat.life:3000/test/a',            
            success(res) {                resolve(res);            }        
        })    
    })
}

function getTestB() {    
    return new Promise((resolve) => {        
        $.ajax({            
            url: 'http://nocat.life:3000/test/b',           
            success(res) {                resolve(res);            }        
        })    
    })
}

// 返回值是一个 Promise 对象
async function main() {    
    const resA = await getTestA();    
    console.log(resA);    
    const resB = await getTestB();    
    console.log(resB);    
}
main();
```

案例2

```js
function getPromise(url) {
    return new Promise(function (resolve, reject) {
        $.ajax({
            url,
            success: function (data) {
                console.log('resolve');
                resolve(data);
            },
            error: function () {
                console.log('reject');
                reject('异步失败');
            }
        });
    });
}
let artType = getPromise('https://...s/getAllTypes');
let art = getPromise('https://w...s/getAllArts');
```

- 

### 解决回调地狱方案

- 方案一：回调函数

- 方案二-1

  - Promise+then和catch，

    ```js
    artType.then(function(data){    
        console.log('演艺类型数据',data);    
        typeData=data;    
        return art;
    }).then(function(data){    //获取类型数据？    
        console.log(typeData);    
        console.log('演艺数据',data);
    });
    ```

- 方案二-2

  - Promise+Promise.all

    ```js
    Promise.all([artType,art]).then(
        function(data){    
            console.log('指定的Promise对象都执行了resovle后执行',data);
        }).catch(
        function(data){   
            console.log('指定的Promise对象有一个执行了reject后执行',data);
        });
    ```

- 方案三

  generator:中途曾使用

- 方案四（最终方案）

  - Promise+async和await

    ```js
    async function demo(){   
        let re=await artType;    
        let re2=await art;
    }
    demo();
    ```



### 【完】

