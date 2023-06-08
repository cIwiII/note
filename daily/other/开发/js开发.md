1、JS组成？

ECMAscript、BOM、DOM三部分组成

#### 2、注释？作用？

不被浏览器说解析的一段文字说明，

使代码更易与理解和记忆
方便代码维护和管理

#### 3、严格模式？

不能使用未声明的变量；

不允许函数形参重名；

非全局作用域的this指向undefined；

变量名称不能使用保留字。

#### 4、解释标识符规则？

只能由数字、字母、下划线_、美元符号$组成;
数字不能开头;
不能与关键字冲突

#### 5、垃圾回收机制

   手动赋值为null，解除引用不意味已回收，而是让值脱离执行环境，以便GC(Garbage Collection)垃圾回收机制下次运行时将其回收

#### 6、js包装类型

js中基本类型是没有属性和方法，在使用时进行包装：

```js
const a = 'abc';
const a = String('abc');//隐式包装
a.length;//3
'abc'.length 时 ， JavaScript 将 'abc' 在 后 台 转 换 成
String('abc'),然后再访问其 length 属性

//使用 Object 显式的将基本类型转为包装类型
let b = Object(a);  // String{ 'abc' }

// valueOf 包装类型转为基本类型
let c = b.valueOf(); // "abc"
```

note：包装类型是对象，所以在逻辑判断是永远是 `true` 

#### 7、JS类型转换机制

一、常见的类型转换有：强制转换（显示转换）、自动转换（隐式转换）
二、特殊类型转换数值规则：

- undefined为NaN,
- null转为数值时，值为0
- Symbol报错（Throw a TypeError exception）
- object 先调用toPrimltlve，再调用toNumber

三、特殊类型转换字符串规则：

- Symbol报错（Throw a TypeError exception）

- object 先调用toPrimltlve，再调用toNumber

四、特殊类型转换布尔值规则：NaN转boolean为false
五、空数组会忽略，{对象}转为 "[object Object]"

null 和 undefined 表示不存在，即不等于false，也不等于true 

false == undefined // false
false == null // false
null == undefined // true

'\t\r\n' == 0 // true

#### 8、深拷贝浅拷贝实现？

浅拷贝：

1. Object.assign、
2. Array.prototype.slice(), 
3. Array.prototype.concat()
4. 使用拓展运算符实现的复制

```js
下面简单实现一个浅拷贝
function shallowClone(obj) {
    const newObj = {};
    for(let prop in obj) {
        if(obj.hasOwnProperty(prop)){
            newObj[prop] = obj[prop];
        }
    }
    return newObj;
}
```

深拷贝：

-  require('lodash')的cloneDeep()方法
-  require('jquery')的extend(true, {}, obj1);
-  JSON.parse(JSON.stringify(obj1));不能含有特殊字符undefined，symbol
-  手写循环递归

```js
function deepClone(obj, hash = new WeakMap()) {
  if (obj === null) return obj; // 不进行拷贝操作
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof RegExp) return new RegExp(obj);
    
  // 对象、普通的值 、函数不需要深拷贝
  if (typeof obj !== "object") return obj;
    
  // 是对象的话就要进行深拷贝
  if (hash.get(obj)) return hash.get(obj);
  let cloneObj = new obj.constructor();
  // 找到的是所属类原型上的constructor,而原型上的 constructor指向的是当前类本身
  hash.set(obj, cloneObj);
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      // 实现一个递归拷贝
      cloneObj[key] = deepClone(obj[key], hash);
    }
  }
  return cloneObj;
}
```

#### 9、防抖、节流？

```html
<body>
    <script>
        function antiShake(ms = 1000) {
            let timer = false;
            let num = 0;
            return function (...args) {
                if (timer) {
                    clearTimeout(timer)
                }
                timer = setTimeout(() => {
                    console.log(++num)
                }, ms)

            }
        }
        let anti = antiShake()

        function choke(ms = 1000) {
            let timer = true;
            let num = 0;
            return function () {
                if (timer) {
                    timer = setTimeout(() => {
                        console.log(++num)
                        timer = false
                    }, ms)
                }
            }
        }
        let cho = choke()
    </script>
    <button onclick="anti()">防抖：点击关闭或停止定时器</button>
    <button onclick="cho()">节流点击</button>
</body>
```



#### 9：闭包及使用场景？

闭包：函数嵌套，外部函数返回内部函数，内部函数称为外部函数的闭包

作用：

1、内部函数可以访问外部函数的变量，保持变量存储在内存中的同时，限制变量的可访问操作（创建私有变量，延长生命周期）

2、计数器中，变量初始化只执行一次，需要结合IIFE

场景：函数柯里化(模块方式)、防抖和节流、结合IIFE实现计数保护

缺点：处理速度和内存消耗方面对脚本性能具有负面影响

例如，在创建新的对象或者类时，方法通常应该关联于对象的原型，而不是定义到对象的构造器中。

原因在于每个对象的创建，方法都会被重新赋值

#### 10、作用域，作用域链

分为全局、函数(局部)、块级。

JavaScript 遵循的就是词法作用域，即创建(写代码时)就确定。

作用域链：采用就近作用域原则，向上查找(非严格会声明)

#### 11、原型，原型链

原型：每个函数都有prototype属性，被称为原型或原型对象。原型对象有一个自有属性constructor指向自身。

原型链(prototype chain)：解释了为何一个对象会有其他对象的属性和方法

在对象实例和它的构造器之间建立一个链接（它是__proto__属性，是从构造函数的prototype属性派生的），之后通过上溯原型链，在构造器中找到这些属性和方法。

```js
1、每个对象的__proto__都是指向它的构造函数的原型对象prototype
person1.__proto__ === Person.prototype

2、构造函数是一个函数对象，是通过 Function构造器产生的
Person.__proto__ === Function.prototype

3、原型对象本身是一个普通对象，而普通对象的构造函数都是Object
Person.prototype.__proto__ === Object.prototype

4、所有的构造器都是函数对象，函数对象都是 Function构造产生的
Object.__proto__ === Function.prototype

5、Object的原型对象也有__proto__属性指向null，null是原型链的顶端
Object.prototype.__proto__ === null
```


总结：

- 一切的函数对象（包括 Object 对象），都是继承自 Function 对象

- Object 对象直接继承自 Function 对象

- Function对象的__proto__会指向自己的原型对象，最终还是继承自Object对象

#### 12、javascript如何实现继承？



优点：子类有父类(超类)的属性和方法，不用再写相同的代码

常见的继承方式：

- 原型链继承
- 构造函数继承（借助 call）

- 组合继承

- 原型式继承

- 寄生式继承

- 寄生组合式继承(组合继承改造)最优，extends和此类似



#### 13、执行上下文和执行栈

执行上下文：即代码执行环境的抽象概念，包含：

​    (1)GO/AO/VO ,     (2)this,      (3)[[scope]]作用域链

分类：

- 全局执行上下文是window，可被其他任何上下文访问

- 函数执行上下文在每次调用时创建

- Eval 函数执行上下文不建议使用

生命周期：创建阶段 → 执行阶段 → 回收阶段

```js
创建阶段伪代码如下：（发生于函数调用后，内部代码执行前）
ExecutionContext = {  
   //（1）确定this 定义时不能确认this，也被称为 This Binding
  ThisBinding = <this value>,   
  LexicalEnvironment = { ... },   //  （2）词法环境  组件被创建
  VariableEnvironment = { ... },  // （3）变量环境  组件被创建
}
```

#### 14、this

1. 在对象函数中，`this`指代调用该函数的对象;
2. 在类函数中,`this`指代调用该函数的类;
3. 默认环境下(兼容模式下)，`this`指代`window`对象(严格模式下，只有全局时默认指代`window`，非全局默认为`undefined`);
4. 监听器函数中，`this`指代绑定事件的元素对象;
5. jQuery的`each`函数中,`this`指代当前遍历的JS元素对象(如果存在箭头函数，则以箭头函数指代为准);

总结：(1),this永远指向一个对象。（2）函数在哪里调用

#### 15、JS注册事件方式？

直接在标签上加事件
element.on事件=function()
element.addElementListener('事件',监听器代码)

#### 15、事件代理委托？

优点：

- 减少整个页面所需的内存，减少事件注册，提升整体性能

- 动态绑定，减少很多重复工作，函数执行过程中匹配，

缺点：

focus、blur、load、unload 、以及自定义的事件，仅发生于自身上，没有冒泡机制，无法委托。

mousemove、mouseout有冒泡，但要不断获取位置，性能消耗大

#### 15、阻止事件传播的方式

event.stopPropagation()：后续节点相同事件不再执行

event.stopImmediatePropagation()：包含当前节点相同事件监听器不再执行

#### 15、DOM0级和DOM2级事件的区别

1) DOM0：事件源同一事件只能绑定一个监听器；DOM2可绑多个，顺序执行;

2) DOM0：仅冒泡阶段处理事件，DOM2可冒泡，可捕获处理;10、new操作符？

流程
1、创建对象的内存空间;

2、设置对象的内置属性`__proto__`值为构造函数的`prototype`值;

3、改变构造函数中的`this`指向为当前对象;

4、执行构造函数的内部代码;

5、如果构造函数返回原始值则被忽略，返回该对象，否则返回刚创建的对象;返回对象，需要正常处理

#### 15、阻止默认事件？

阻止跳转和表单提交

event.preventDefault();   满足条件后可用提交



#### 14、事件循环、微任务、宏任务

**事件循环**(event loop)：反复从任务队列中取出任务代码执行的过程。

过程：

1. 主线程执行(分析全局变量和函数)。
2. 全局变量放入到全局上下文对象中，入栈放入栈底
3. 发现函数调用，创建函数上下文对象，存放函数内部变量、代码
4. 函数执行
5. 发现异步任务放在事件队列（内存开辟空间，浏览器找异步任务，异步请求执行）
6. 主线程执行完毕，队列循环查找。
7. 浏览器给每个任务绑定一个事件，主线程执行完毕后，通过事件的方式调用异步任务结果。
8. 主线程结束。

**微任务**：主函数之后，宏任务之前执行。

异步代码(案例)

- ajax的async取值为true;
- jQuery动画:
  - fadeIn、fadeOut、slideDown、slideUp、show、hide、animate

常见的微任务有：

- Promise.then（promise是同步，then是异步微任务）

- MutaionObserver

- Object.observe（已废弃；Proxy 对象替代）

- process.nextTick（Node.js）
- await后面被阻塞的代码

**宏任务**：时间粒度比较大，执行的时间间隔是不能精确控制的。

常见的宏任务有：

- script (可以理解为外层同步代码)
- setTimeout/setInterval
- UI rendering/UI事件
- postMessage、MessageChannel

- setImmediate、I/O（Node.js）

**async与await**
async ：声明异步，await ：async wait  等待异步方法执行。

正常情况下，await后是一个 Promise对象，返回该对象的结果。如果不是 Promise对象，就直接返回对应的值

```js
async函数返回一个promise对象，下面两种方法是等效的

function f() {
    return Promise.resolve('TEST');
}
async function asyncF() {
    return 'TEST';
}
```



#### 16、ajax原理和实现？

AJAX(Async Javascript and XML)  即异步的JavaScript 和XML，是一种创建交互式网页应用的网页开发技术,更新网页部分数据。

实现

```js
//封装一个ajax请求,6步，
function ajax(options) {
    // 1.核心-创建XMLHttpRequest对象
    const http = new XMLHttpRequest()
    //初始化参数的内容
    options = options || {} 
    options.type = (options.type || 'GET').toUpperCase()
    options.dataType = options.dataType || 'json'
    const params = options.data

    //发送请求
    if (options.type === 'GET') {
        // 2.通过 XMLHttpRequest 对象的 open() 方法与服务端建立连接
        http.open('GET', options.url + '?' + params, true)
        // 3. 通过XMLHttpRequest 对象的 send() 方法发送给服务器端
        http.send(null)
    } else if (options.type === 'POST') {
        http.open('POST', options.url, true)
        http.send(params)

        //接收请求
        //  4.通过 XMLHttpRequest 对象提供的 onreadystatechange 事件
        //  监听服务器端你的通信状态
        http.onreadystatechange = function () {
            if (http.readyState === 4) {
                let status = http.status
                if (status >= 200 && status < 300 && options.success) {
                    options.success(http.responseText, http.responseXML)
                } else {
                    options.fail && options.fail(status)
                }
            }
        }
    }
       // 5.接受并处理服务端向客户端响应的数据结果
       // 6.将处理结果更新到 HTML页面中
```

使用方式如下

```js
ajax({
    type: 'post',
    dataType: 'json',
    data: {},
    url: 'https://xxxx',
    success: function(text,xml){//请求成功后的回调函数
        console.log(text)
    },
    fail: function(status){////请求失败后的回调函数
        console.log(status)
    }
})

参数说明：
method：请求方式
url：服务端地址
async：布尔值，是否异步执行操作，默认为true
user: 可选的用户名用于认证用途；默认为`null
password: 可选的密码用于认证用途，默认为`null
```









#### 17、call、apply 、bind区别、实现?

相同点：都是改变 this 指向（函数盗用） 。参数一是改变后 this 指向的对象，没有、undefined、null，则默认指向全局 window 。

区别:

|      | call                      | apply                         | bind                                   |
| ---- | ------------------------- | ----------------------------- | -------------------------------------- |
| 执行 | 立即执行该函数            | 立即执行该函数                | 返回改变this指向的新函数，不会立即执行 |
| 传参 | 独立列表传入              | 数组传入                      | 独立多次传入                           |
| el   | call(obj,arg0,arg1......) | apply(obj,[arg0,arg1......]); | bind(obj)                              |



```js
//案例
class Demo{
    sum(a,b){
        console.log(this);
        return a+b;
    }
}
class Test{
    sub(a,b){ return a-b; }
}
let demo=new Demo();
//创建要借用函数的对象
let test=new Test();

//call: test 对象借用 demo 对象中的 sum 函数并执行
console.log(demo.sum.call(test,5,4));

//apply: test 对象借用 demo 对象中的 sum 函数并执行
console.log(demo.sum.apply(test, [5,4]));

//bind: test 对象借用 demo 对象中的 sum 函数，获取到新函数对象
let newMethod=demo.sum.bind(test);
console.log(newMethod(5,3)); //执行新函数对象
```


#### 18、正则表达式及应用？


正则表达式：特殊字符串

创建方式：1字面量创建   2 new RegExp("\\d+","g");

```js
const string = "12345";
// 默认贪婪模式
const reg= /(\d{1,3})(\d{1,3})/;
// 懒惰模式 量词后加 ？，尽可能少匹配
var regex = /(\d{1,3}?)(\d{1,3})/;
console.log( string.match(reg) ); // => ["12345", "123", "45"]
console.log( string.match(regex) ); // => ["12345", "1", "234"]

// 分组 括号内为一个整体，beyond{3}，匹配d字母3次，(beyond){3}是匹配beyond三次

// 反向引用, 如 交换名字和姓氏
let str = "John Smith";
console.log(str.replace(/(john) (smith)/i, '$2, $1'))   // Smith, John
```

三、匹配方法可以分成两类：

1、字符串（str）方法：match、matchAll、search、replace、split
2、正则对象下（regexp）的方法：test、exec

exec	 查找匹配，返回数组或null
test	  测试是否匹配，返回 true 或 false。
match  字符串中查找匹配的String方法，返回数组或null

matchAll	查找所有匹配的String方法，返回迭代器（iterator，二维数组？）。

search	测试匹配的String方法，查找第一个返回索引或-1
replace	查找匹配的String方法，字符串替换掉匹配的子串。
split	使用正则表达式或者固定字符串分隔字符串的 String 方法，存储并返回数组。

- ```js
  let str = "I love JavaScript";
  let result = str.match(/Java(Script)/);
  console.log( result[0] );     // JavaScript（完全匹配）
  console.log( result[1] );     // Script（第一个分组）
  console.log( result.length ); // 2
  // 其他信息：
  console.log( result.index );  // 7（匹配位置）
  console.log( result.input );  // I love JavaScript（源字符串）
  //如果regexp 带有 g 标记 ，则它将所有匹配项的数组作为字符串返回，而不包含分组和其他详细信息
  
  let str = "I love JavaScript";
  let result = str.match(/Java(Script)/g);
  console.log( result[0] ); // JavaScript
  console.log( result.length ); // 1
  
  const regexp = /t(e)(st(\d?))/g;
  const str = 'test1test2';
  const array = [...str.matchAll(regexp)];
  console.log(array[0]);
  //===》[["test1","e","st1","1"],["test2","e","st2","2"]]
  
  let str = 'More about JavaScript at https://javascript.info';
  let regexp = /javascript/ig;
  let result;
  while (result = regexp.exec(str)) {
    console.log( `Found ${result[0]} at position ${result.index}` );
    // Found JavaScript at position 11
    // Found javascript at position 33
  }
  ```



四、应用场景

1、数据验证   2、url解析

```js
var patrn=/^[a-zA-Z]{1}([a-zA-Z0-9]|[._]){4,19}$/;   // 5-20位字母开头，可以有数字字母下划线点
const isvalid = patrn.exec(s)
```



#### 19、DOM操作？

- 创建节点
  - createElement-创建新元素
  - createTextNode-创建一个文本节点
  - createDocumentFragment-创建一个文档碎片
  - createAttribute-创建属性节点，可以是自定义属性
- 查询（获取）节点
  - querySelector-传入选择器
  - querySelectorAll-所有匹配的节点
  - `parentNode`、`childNodes`、`firstChild`、`lastChild`、`nextSibling`、`previousSibling`

- 更新节点
  -  innerHTML
  -  innerText、textContent
  -  style-驼峰命名
- 添加节点
  -  innerHTML
  -  appendChild
  -  insertBefore
  -  setAttribute
- 删除节点
  - removeChild

#### 17、ES6新增特性



- Class(面向对象，关键字，extends，super指代父类）
- 块级作用域(let和const)
- 解构赋值
- 扩展运算符
- Set和Map(引用数据类型)
- Promise
- 箭头函数
- 模板字符串
- Symbol(基本数据类型）
- rest参数

#### 17、Set、Map？

Set、Map遍历：

- keys()：返回键名的遍历器
- values()：返回键值的遍历器
- entries()：返回键值对的遍历器
- forEach()：使用回调函数遍历每个成员

`keys`方法、`values`方法、`entries`方法返回的都是遍历器对象

forEach()用于对每个成员执行某种操作，没有返回值，键值、键名都相等，同样的`forEach`方法有第二个参数，用于绑定处理函数的this



扩展运算符和`Set` 结构相结合实现数组或字符串去重, Set的增、删效率高(数组查询效率高);

实现并集、交集、和差集

```javascript
let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 2]);

// 并集，去重
let union = new Set([...a, ...b]);
// Set {1, 2, 3, 4}

// 交集
let intersect = new Set([...a].filter(x => b.has(x)));
// set {2, 3}

// （a 相对于 b 的）差集
let difference = new Set([...a].filter(x => !b.has(x)));
// Set {1}
```

|                                | set增删改查 | Map增删改查 |
| ------------------------------ | ----------- | ----------- |
| add(),已存在不会再添加         | √           | ×           |
| delete():boolean，删除某个值   | √           | √           |
| has():boolean 是否存在         | √           | √           |
| clear():void 清除所有成员      | √           | √           |
| size ，返回长度                | ×           | √           |
| set（key，val）添加或修改      | ×           | √           |
| get(key) 不存在，返回undefined | ×           | √           |



#### 17、箭头函数？

（1）箭头函数比普通函数更加简洁，

```js
let a = ( )=>{};// 没有参数空括号
let a = b =>{};// 一个参数省括号
let a = ( )=>1; // 只有一句返回，省大括号
let a = () => void doesNotReturn();//没有返回值，调用函数
```

（2）箭头函数没有自己的this，定义时固定，永远不会改变（call()、apply()、bind()也不会改变）
（3）箭头函数没有prototype，不能作为构造函数使用
（4）箭头函数没有自己的arguments，如果使用就是外层函数的arguments值。
（5）箭头函数不能用作Generator函数，不能使用yeild关键字

总结就是：不当函数看

#### 17、new

new 操作符的实现步骤如下：创建对象、作用域赋给、this改变、返回

1.创建对象

2.将构造函数的作用域赋给新对象（也就是将对象的__proto__属性

指向构造函数的 prototype 属性）

3.指向构造函数中的代码，构造函数中的 this 指向该对象（也就是

为这个对象添加属性和方法）

4.返回新的对象

所以，上面的第二、三步，箭头函数都是没有办法执行的。

#### 18、尾递归？

递归（Recursion）自调用，边界条件不满足时，递归前进；当边界条件满足时，递归返回

```js
计算 x 的 n 次方
一、迭代方式
function pow(x, n) {
  let result = 1;
  for (let i = 0; i < n; i++) { result *= x; }
  return result;
}
二、递归自调用
function pow(x, n) {
  return n == 1? x : x * pow(x, n - 1);
}
```

尾递归：递归的一种特殊情形。尾递归是一种特殊的尾调用，返回值中包含自身的调用

尾递归多出了2个特征：

1、在尾部调用的是函数自身
2、可通过优化，使得计算仅占用常量栈空间

常规的递归函数，需要消耗大量性能，在递归调用的过程当中系统为每一层的返回点、局部量等开辟了栈来存储，递归次数过多容易造成栈溢出

而使用尾递归可以解决问题，即一个函数中所有递归形式的调用都出现在函数的末尾，对于尾递归来说，由于只存在一个调用记录，所以永远不会发生"栈溢出"错误

```js
阶乘，如果用普通的递归，
function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}
factorial(5) // 120
方法要执行5次，才返回最终的计算表达式，每次都要保存这个方法，就容易造成栈溢出，复杂度为O(n)

使用尾递归
function factorial(n, total) {
  if (n === 1) return total;
  return factorial(n - 1, n * total);
}
factorial(5, 1) // 120
每一次返回的就是一个新的函数，不带上一个函数的参数，也就不需要储存上一个函数了。尾递归只需要保存一个调用栈，复杂度 O(1)
```

二、应用场景


```js
1、数组求和
function sumArray(arr, total) {
    if(arr.length === 1) {return total }
    return sum(arr, total + arr.pop())
}
2、尾递归优化求斐波那契数列
function factorial2 (n, start = 1, total = 1) {
    if(n <= 2){ return total}
    return factorial2 (n -1, total, total + start)
}
3、数组扁平化
let a = [1,2,3, [1,2,3, [1,2,3]]]
// 变成
let a = [1,2,3,1,2,3,1,2,3]
// 具体实现
function flat(arr = [], result = []) {
    arr.forEach(v => {
        if(Array.isArray(v)) {
            result = result.concat(flat(v, []))
        }else {
            result.push(v)
        }
    })
    return result
}
4、数组对象格式化
let obj = {
    a: '1',
    b: {c: '2',D: { E: '3' }  }
}
// 转化为如下：
let obj = {
    a: '1',
    b: {c: '2',d: {e: '3'} }
}

// 代码实现
function keysLower(obj) {
    let reg = new RegExp("([A-Z]+)", "g");
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            let temp = obj[key];
            if (reg.test(key.toString())) {
                // 将修改后的属性名重新赋值给temp，并在对象obj内添加一个转换后的属性
                temp = obj[key.replace(reg, function (result) {
                    return result.toLowerCase()
                })] = obj[key];
                // 将之前大写的键属性删除
                delete obj[key];
            }
            // 如果属性是对象或者数组，重新执行函数
            if (typeof temp === 'object' || Object.prototype.toString.call(temp) === '[object Array]') {
                keysLower(temp);
            }
        }
    }
    return obj;
};
```

#### 19、内存泄漏？

会造成内存的泄漏：

- **意外的全局变量：** 使用未声明变量而意外创建的全局变量，变量一直留在内存中无法被回收。
- **被遗忘的计时器或回调函数：** 设置了 setInterval 定时器，忘记取消，如果循环函数有对外部变量的引用的话，那么这个变量会被一直留在内存中，而无法被回收。
- **脱离 DOM 的引用：** 获取一个 DOM 元素的引用，而后面这个元素被删除，由于一直保留了对这个元素的引用，所以它也无法被回收。
- **闭包：** 不合理的使用闭包，从而导致某些变量一直被留在内存当中。



#### 20、本地存储和cookie、应用场景？

- cookie

  - 小型文本文件，辨别用户身份,解决 `HTTP`无状态导致的问题。
  - 每个Cookie 4095个字节(不超过4KB)，由一个名称（Name）、一个值（Value）和其它几个用于控制 `cookie`有效期、安全性、使用范围的可选属性组成
  - 客户端/服务器端 既可以从客户端也可以从服务器端访问数据。`cookie`每次请求都会被发送，如不使用 `HTTPS`加密，保存的信息很容易被窃取，导致安全风险。
  - Expires ：设置过期时间
  - Max-Age ：设置过期秒数（优先级比`Expires`高）
  - Domain：指定可以送达的主机名
  - `Path`指定了一个 `URL`路径，这个路径必须出现在要请求的资源的路径中才可以发送 `Cookie` 首部
  - 标记为 `Secure`的 `Cookie`只应通过被`HTTPS`协议加密过的请求发送给服务端

- sessionStorage

  特点：

  - 生命周期：持久化的本地存储，除非主动删除数据，否则数据是永远不会过期的
  - 存储的信息在同一域中是共享的
  - 当本页操作（新增、修改、删除）了`localStorage`的时候，本页面不会触发`storage`事件,但是别的页面会触发`storage`事件。
  - 大小：每个域5 MB（跟浏览器厂商有关系）
  - `localStorage`本质上是对字符串的读取，如果存储内容多的话会消耗内存空间，会导致页面变卡
  - 受同源策略的限制
  - 只能在本地浏览器端访问数据。服务器无法访问本地存储，除非特意通过POST或GET发送到服务器。 
  - 数据可以没有有效期限。要么最终用户从浏览器删除它，要么使用JavaScript编程删除。

  缺点：

  - 无法像`Cookie`一样设置过期时间
  - 只能存入字符串，无法直接存对象

- localStorage

  - `sessionStorage`和 `localStorage`使用方法基本一致，唯一不同的是生命周期，一旦页面（会话）关闭，`sessionStorage` 将会删除数据

- indexedDB

  - `indexedDB`是一种低级API，用于客户端存储大量结构化数据(包括, 文件/ blobs)。该API使用索引来实现对该数据的高性能搜索。

    优点：

    - 储存量理论上没有上限
    - 所有操作都是异步的，相比 `LocalStorage` 同步操作性能更高，尤其是数据量较大时
    - 原生支持储存`JS`的对象
    - 是个正经的数据库，意味着数据库能干的事它都能干

    缺点缺点：

    - 操作非常繁琐
    - 本身有一定门槛

  **应用场景**

  针对不同场景使用选择：

  - 标记用户与跟踪用户行为的情况，推荐使用`cookie`
  - 适合长期保存在本地的数据（令牌），推荐使用`localStorage`
  - 敏感账号一次性登录，推荐使用`sessionStorage`
- 存储大量数据的情况、在线文档（富文本编辑器）保存编辑历史的情况，推荐使用`indexedDB`

#### 21、函数式编程？

函数式编程是一种"编程范式"，一种编写程序的方法论，强调执行结果，让执行结果不断渐进，而非设计过于复杂的过程。

编程范：命令式编程，声明式编程、函数式编程

函数式编程又分为纯函数（无状态的函数）、高阶函数（接收的参数为另一个函数）、柯里化（返回一个函数的函数）、组合与管道（多个函数在一个函数中组合调用）

优点：

- 更好的管理状态：因为它的宗旨是无状态，或者说更少的状态，能最大化的减少这些未知、优化代码、减少出错情况
- 更简单的复用：固定输入->固定输出，没有其他外部变量影响，并且无副作用。这样代码复用时，完全不需要考虑它的内部实现和外部影响
- 更优雅的组合：往大的说，网页是由各个组件组成的。往小的说，一个函数也可能是由多个小函数组成的。更强的复用性，带来更强大的组合性
- 隐性好处。减少代码量，提高维护性

缺点：

- 性能：函数式编程相对于指令式编程，性能绝对是一个短板，因为它往往会对一个方法进行过度包装，从而产生上下文切换的性能开销
- 资源占用：在 JS 中为了实现对象状态的不可变，往往会创建新的对象，因此，它对垃圾回收所产生的压力远远超过其他编程方式
- 递归陷阱：在函数式编程中，为了实现迭代，通常会采用递归操作

#### 23、js函数缓存、应用场景？

一、函数缓存
将函数运算结果进行缓存，本质是用空间（缓存存储）换时间（计算过程），常用于缓存数据计算结果和缓存对象
缓存只是一个临时的数据存储，它保存数据，以便将来对该数据的请求能够更快地得到处理

二、实现函数缓存
主要依靠闭包(函数 + 函数体内变量总和)、柯里化(参数分开处理)、高阶函数：

柯里化
把接受多个参数的函数转换成接受一个单一参数的函数

将一个二元函数拆分成两个一元函数（元：多少个参数）

高阶函数
通过接收其他函数作为参数或返回其他函数的函数



实现函数缓存实现原理：把参数和对应的结果数据存在一个对象中，调用时判断参数对应的数据是否存在，存在就返回对应的结果数据，否则就返回计算结果

三、应用场景
虽然使用缓存效率是非常高的，但并不是所有场景都适用，不要极端的将所有函数都添加缓存

以下几种情况下，适合使用缓存：

- 对于昂贵的函数调用，执行复杂计算的函数
  对于具有有限且高度重复输入范围的函数
  对于具有重复输入值的递归函数
  对于纯函数，即每次使用特定输入调用时返回相同输出的函数

#### 24、js数字精度丢失解决？

 * 原因：十进制转换二进制科学记数法形式，有时会出现无限循环，(0舍1入)，再转换为十进制时造成误差。

  解决：使用 `toPrecision` 凑整并 `parseFloat` 转成数字后再显示

  ```js
parseFloat(1.4000000000000001.toPrecision(12)) === 1.4  // True
//封装
 function strip(num, precision = 12) {
   return +parseFloat(num.toPrecision(precision));
 }
  ```

 对于运算类操作，如 `+-*/`，就不能使用 `toPrecision`正确的做法是把小数转成整数后再运算,还可以使用第三方库，如`Math.js`、`BigDecimal.js`

#### 25、防抖、节流？实现？

防抖:延时器单位时间内触发会重新计时

在事件触发n秒后再执行监听器回调函数，如果期间又触发了事件，则重新计时; 利用延时器执行任务代码，如果存在延时器，取消延时器，重新创建新的延时器;

```js
function demo(){       
        let timer=null,count=0;        
        return function(){            
            if(timer!=null){ //存在延时器,取消延时器               
             clearTimeout(timer);           
            }            
            timer=setTimeout(function(){ 
               ++count
             },750);  
	}    
}    
```

节流：单位时间内触发不在创建事件任务

每隔n秒，只执行一次回调函数;  利用延时器执行任务代码，如果存在延时器，则不再创建新的延时器;

```js
 function demo(){       
     let timer=null, let count=0;        
      return function(){           
                if(timer==null){    //不存在延时器 
                        timer=setTimeout(function(){
                           ++count;                   
                            timer=null;               
                         },750);           
                 }       
          }   
    }    
```

相同点：

- 都可以通过使用 `setTimeout` 实现
- 目的都是，降低回调执行频率。节省计算资源

不同点：

- 函数防抖，在一段连续操作结束后，处理回调，利用`clearTimeout`和 `setTimeout`实现。函数节流，在一段连续操作中，每一段时间只执行一次，频率较高的事件中使用来提高性能
- 函数防抖关注一定时间连续触发的事件，只在最后执行一次，而函数节流一段时间内只执行一次

三、应用场景

防抖在连续的事件，只需触发一次回调的场景有：

- 搜索框搜索输入。只需用户最后一次输入完，再发送请求
- 手机号、邮箱验证输入检测
- 窗口大小`resize`。只需窗口调整完成后，计算窗口大小。防止重复渲染。

节流在间隔一段时间执行一次回调的场景有：

- 滚动加载，加载更多或滚到底部监听
- 搜索框，搜索联想功能



#### 26、web攻击、防御？

Web攻击(WebAttack)：植入恶意代码，修改网站权限，获取网站用户隐私等。

攻击方式：

- XSS (Cross Site Scripting) 跨站脚本攻击  （用户写入相关）
  CSRF（Cross-site request forgery）跨站请求伪造
  SQL注入攻击

**XSS**：跨站脚本攻击，允许攻击者将恶意代码植入到提供给其它用户使用的页面中，XSS涉及到三方，即攻击者、客户端与Web应用

根据攻击的来源，XSS攻击可以分成：

- 存储型：将恶意代码存到数据库，服务端安全漏洞
- 反射型：构造特殊URL，拼接在html中，服务端安全漏洞
- DOM 型：构造出特殊的 URL，前端安全漏洞

XSS的**预防**：

1、减少innerHTML、outerHTML、document.write() ，尽量使用 .textContent、.setAttribute() 

2、用 Vue/React 技术栈，并且不使用 v-html/dangerouslySetInnerHTML 功能，就在前端 render 阶段避免 innerHTML、outerHTML 的 XSS 隐患

3、DOM 中的内联事件监听器，如 location、onclick、onerror、onload、onmouseover 等，<a> 标签的 href 属性，eval()、setTimeout()、setInterval() 等，都能把字符串作为代码运行，务必避免。



**CSRF**（Cross-site request forgery）跨站请求伪造：利用获取的注册凭证，绕过后台用户验证，冒充用户

CSRF的**预防**
CSRF通常从第三方网站发起，被攻击的网站无法防止攻击发生，只能通过增强自己网站针对CSRF的防护能力来提升安全性

1. 阻止不明外域的访问
2. 同源检测
3. Samesite Cookie
4. 提交时要求附加本域才能获取的信息
5. CSRF Token
6. 双重Cookie验证


**SQL** 注入攻击：将恶意的 Sql查询或添加语句插入到应用的输入参数中，再在后台 Sql服务器上解析执行进行的攻击

流程如下所示：

1、找出SQL漏洞的注入点

2、判断数据库的类型以及版本

3、猜解用户名和密码

4、利用工具查找Web后台管理入口

5、入侵和破坏

SQL的 **预防** ：

1、严格检查输入变量的类型和格式
2、过滤和转义特殊字符
3、对访问数据库的Web应用程序采用Web应用防火墙

#### 27、迭代器？

**迭代器**： 集合对象(数组、Set、Map)和 字符串 都是可迭代对象，默认有迭代器。ES6 `for-of`循环需要对象可迭代。for-of循环每执行一次都会调用可迭代对象的next()方法，并将迭代器返回的结果对象的value属性存储在一个变量中，循环将持续执行这一过程直到返回对象的done属性的值为true

可迭代对象具有Symbol.iterator属性，是一种与迭代器密切相关的对象。Symbol.iterator通过指定的函数可以返回一个作用于附属对象的迭代器

如果只需迭代数组或集合中的值，用for-of循环代替for循环是个不错的选择。相比传统的for循环，for-of循环的控制条件更简单，不需要追踪复杂的条件，所以更少出错

> 如果将for-of语句用于不可迭代对象、null或undefined将会导致程序抛出错误

**访问默认迭代器**

数组默认是可迭代的(for..of可以输出)。也可以通过Symbol.iterator来访问对象默认的迭代器

```js
let values = ["小王", "小飞", "小李"];
let iterator = values[Symbol.iterator]();
console.log(iterator.next()); // "{ value: "小王", done: false }"
console.log(iterator.next()); // "{ value: "小飞", done: false }"
console.log(iterator.next()); // "{ value: “小李”, done: false }"
console.log(iterator.next()); // "{ value: undefined, done: true }"
```

**是否可迭代**：必须有Symbol.iterator迭代属性，对象不可迭代，可以循环遍历

```js
function isIterable(object) : boolean { // 判断是否可迭代
    return typeof object[Symbol.iterator] === "function";
}
console.log(isIterable([1, 2, 3])); // true  数组、Set、Map、string 都可迭代
console.log(isIterable({id:1})); // false
console.log(isIterable(new WeakMap())); // false
console.log(isIterable(new WeakSet())); // false
```

#### 28、生成器？

generator编程也称为生成器。

目前我们前端要解决异步执行问题

1. 回调函数
2. promise获取异步结果
3. generator编程

语法规则

```js
function* checkItem(){}
function *checkItem(){}
```

#### 29、object常用函数方法?

Object.is(value1,value2):boolean
Object.defineProperty(obj,prop,desc)
Object.assign(target,obj1,obj2......)

#### 29、Object-API分类？

静态函数
对象函数

#### 29、is 函数

Object.is(value1,value2)：判断两个值是否是同一个值。一般情况和===相同。特殊：-0和+0不等、NaN和NaN相等。

1.长得一样，即写法表现相同。

2.都是相同对象(引用地址相同)

3.数字时:都是+;、都是-0、都是NaN、除此之外其他相同值

注意:Set和Map底层判断是否为同一个元素是基于Object.is()实现





#### 30、MVC是什么？

设计模式m 模型v视图  c控制器



#### 31、原型或class的链式调用

案列：new myCalculator(100).add(1).reduce(100) ===》输出结果为91

```js
class myCalculator{
     constructor(num){
        this.num=num;
    }
    add(num){
        this.num *=num
        return this
    }
    reduce(num){
         this.num -=0.09*num
        return this
    }
}
let calcu=new myCalculator(100).add(1).reduce(100)
console.log(calcu.num)
```



#### 32、ES6-Promise？使用场景？

`Promise`，译为承诺，是异步编程的一种解决方案，比传统的解决方案（回调函数）更加合理和更加强大，解决回调地狱的问题

优点：

- 链式操作减低了编码难度
- 代码可读性明显增强

`promise`对象仅有三种状态

- `pending`（进行中）
- `fulfilled`（已成功）
- `rejected`（已失败）

特点：状态不受外界影响，只有异步操作结果可决定，确定后不可再变

二、用法

`Promise`对象是一个构造函数，用来生成`Promise`实例，Promise构造函数接受一个函数作为参数，该函数的两个参数分别是`resolve`和`reject

```javascript
const promise = new Promise(function(resolve, reject) {});
```

- `resolve`函数的作用是，将`Promise`对象的状态从“未完成”变为“成功”
- `reject`函数的作用是，将`Promise`对象的状态从“未完成”变为“失败”

`Promise`构建出来的实例存在以下方法：

- then()：返回新Promise(因此能链式调用)，参数一成功回调，参数二，失败回调。
- catch()：.then(null, rejection)或.then(undefined, rejection)的别名
- finally()：成功失败都会执行的逻辑



```javascript
getJSON('/posts.json').then(function(posts) {
  // ...
}).catch(function(error) {
  // 处理 getJSON 和 前一个回调函数运行时发生的错误
  console.log('发生错误！', error);
});
```

`Promise`对象的错误具有“冒泡”性质，会一直向后传递，直到被捕获为止

```javascript
getJSON('/post/1.json').then(function(post) {
  return getJSON(post.commentURL);
}).then(function(comments) {
  // some code
}).catch(function(error) {
  // 处理前面三个Promise产生的错误
});
```

一般来说，使用`catch`方法代替`then()`第二个参数

`Promise`对象抛出的错误不会传递到外层代码，即不会有任何反应

```js
const someAsyncThing = function() {
  return new Promise(function(resolve, reject) {
    // 下面一行会报错，因为x没有声明
    resolve(x + 2);
  });
};
```

浏览器运行到这一行，会打印出错误提示`ReferenceError: x is not defined`，但是不会退出进程

`catch()`方法之中，还能再抛出错误，通过后面`catch`方法捕获到

finally()

`finally()`方法用于指定不管 Promise 对象最后状态如何，都会执行的操作

```javascript
promise
.then(result => {···})
.catch(error => {···})
.finally(() => {···});
```



**Promise构造函数方法**

- all()，将多个实例，包装成一个新的 Promise实例
- race()，将多个实例，包装成一个新的 Promise实例
- allSettled()，所有这些参数实例都返回结果，包装实例才会结束
- resolve()，将现有对象转为 `Promise`对象
- reject()，返回状态为rejected的实例
- try()

三用场景

1、将图片的加载写成一个`Promise`，一旦加载完成，`Promise`的状态就发生变化

2、通过链式操作，将多个渲染数据分别给个`then`，让其各司其职。或当下个异步请求依赖上个请求结果的时候，我们也能够通过链式操作友好解决问题

3、通过`all()`实现多个请求合并在一起，汇总所有请求结果，只需设置一个`loading`即可

4、通过`race`可以设置图片请求超时

#### 32、promise的all、race、allsetlet区别

都是用于将多个 Promise实例，包装成一个新的 Promise实例

```js
const p = Promise.all([p1, p2, p3]);
```



- all()：

  - 所有成员p1,p2,p3状态都为fulfilled，p的状态才会变成fulfilled,参数成员p1,p2,p3返回值组成的新数组传递给p的回调函数

  - 只要其中一个被rejected，返回的新实例p状态就变为rejected，第一个被rejected的实例的返回值传递给p的回调函数。

  - 如果参数实例自己定义了catch方法，被rejected时，不会触发 Promise.all()的catch方法，反之，触发 Promise.all()的catch方法

- race() 

  - p1, p2, p3其中一个状态改变， p就改变，最先改变的实例返回值传递给p的回调函数。

- allSettled()

  - 只有等所有参数实例都返回结果，不管是fulfilled还是rejected，包装实例才会结束



#### 33、什么是数据驱动？

数据交互以数据为核心，编写处理数据的业务代码(针对数据的CRUD操作，增加(Create)、检索(Retrieve)、更新(Update)和删除(Delete))，再将处理后的数据渲染到页面进行展示。

#### 33、ES6-Proxy: 响应式实现

在 Vue3.0 中通过 Proxy 来替换原本的 Object.defineProperty

来实现数据响应式。

Proxy 是 ES6 中新增的功能，它可以用来自定义对象中的操作。

```js
let p = new Proxy(target, handler);
```

代表需要添加代理的对象，handler 用来自定义对象中的操作，比如

可以用来自定义 set 或者 get 函数。

下面来通过 Proxy 来实现一个数据响应式：

```js
let onWatch = (obj, setBind, getLogger) => {
    let handler = {
        get(target, property, receiver) {
            getLogger(target, property);
            return Reflect.get(target, property, receiver);
        },
        set(target, property, value, receiver) {
            setBind(target, property);
            return Reflect.set(target, property, value);
        }
    }
    return new Proxy(obj, handler);
}

// 使用
let obj = { a: 1 };
let p = onWatch(
    obj,
    (v, property) => {
        console.log(`属性${property}改变为${v}`)
    },
    (target, property) => {
        console.log(`'${property}' = ${target[property]}`)
    },
)
p.a = 2; // 监听到属性a 变化
p.a // ‘a' = 2
```



在上述代码中，通过自定义 set 和 get 函数的方式，在原本的逻辑中插入了我们的函数逻辑，实现了在对对象任何属性进行读写时发出通知。

当然这是简单版的响应式实现，如果需要实现一个 Vue 中的响应式，需要在 get 中收集依赖，在 set 派发更新，之所以 Vue3.0 要使用Proxy 替换原本的 API 原因在于 Proxy 无需一层层递归为每个属性添加代理，一次即可完成以上操作，性能上更好，并且原本的实现有一些数据更新不能监听到，但是 Proxy 可以完美监听到任何方式的数据改变，唯一缺陷就是浏览器的兼容性不好



#### 34、字符编码？

计算机只能识别0和1，我们向计算机输入的任何信息最终都会转
成0和1，但是并不是所有信息都能直接转成二进制，所以需要一些过渡
进制进行转换，这些过渡进制 成为字符编码

#### 34、**escape、encodeURI、encodeURIComponent 的区别**

- encodeURI ：URI 中的非法字符转换为合法字符，特殊字符不转义。

- encodeURIComponent 完整转义(包括特殊字符)。

- escape ：和 encodeURI 的作用相同，对于 unicode 编码为0xff 之外字符会有区别，

  escape 是直接在字符的 unicode编码前加上 %u，

  而 encodeURI 首先会将字符转换为 UTF-8 的格式，再在每个字节前加上 %。

#### 35、冒泡排序？

外层循环控制轮数 内层控制两两比较  如果前面的大于后面的 就先把前面的数给一个变量  然后后面的数给前面的 后面的再等于那个变量

#### 36、如何实现根据Date对象获取指定格式的日期字符串？

定义一个函数，传入指定的格式的日期字符串  然后获取各个时间  挨个替换用replaceAll 

#### 37、JS中如何操作子节点？

children firstElementChild lastElementChild  

#### 38、locating中assign()与replace()区别？

跳转到指定URL页面，替换当前页面的历史记录，不会生成新的历史记录。
跳转到指定URL页面，新建一条历史记录。

#### 39、keydown和keypress区别？

keydown不区分大小写 但是能获取功能键
keypress区分  不能获取功能



#### 40、视口？

浏览器显示网页的屏幕区域。
分类:布局视口、视觉视口、理想视口。



#### 41、请求服务器方式？

ajax
form
a标签

#### 42、JSON？应用场景？

-   JavaScript Object Notation，JavaScript对象简谱，轻量级的数据交换格式，可以被任何的编程语言读取和作为数据格式来传递。
-   JSON 中属性值不能为函数，不能出现 NaN 这样的属性值等
    - JSON.stringify 序列化为字符串
    - JSON.parse() 函数

主要运用场景

-   网络数据传输
-   数据本地存储

#### 42、JS延迟加载？

作用：页面加载完成后加载，提高页面加载速度

- defer 属性：脚本和文档同步解析，解析完成后再执行
- async 属性：异步加载并立即执行，文档未加载会阻塞，多个脚本顺序不可测
- 动态创建 DOM 方式：可以对文档的加载事件进行监听，当文档加载完成后引入脚本
- setTimeout 延迟加载
- js文件最后加载

#### 43、js字精度丢失及解决？

计算机存储双精度浮点数需要先把十进制数转换为二进制的科学记数法的形式，然后计算机以自己的规则{符号位+(指数位+指数偏移量的二进制)+小数部分}存储二进制的科学记数法

因为存储时有位数限制（64位），并且某些十进制的浮点数在转换为二进制数时会出现无限循环，会造成二进制的舍入操作(0舍1入)，当再转换为十进制时就造成了计算误差

解决：使用 `toPrecision` 凑整并 `parseFloat` 转成数字后再显示

```js
parseFloat(1.4000000000000001.toPrecision(12)) === 1.4  // True
//封装
function strip(num, precision = 12) {
  return +parseFloat(num.toPrecision(precision));
}
```

对于运算类操作，如 `+-*/`，就不能使用 `toPrecision`，正确的做法是把小数转成整数后再运算,还可以使用第三方库，如`Math.js`、`BigDecimal.js`



#### 44、什么是值传递？

JavaScript在进行函数调用时，是将实参的值传递给形参。



#### 48、垃圾回收机制 

赋值为null，手动为它解除引用。
解除引用不意味着自动回收该值所占用的内存，而是让值脱离执行环境，以便GC(Garbage Collection)垃圾回收机制下次运行时将其回收

#### 49、Canvas主要应用场景？

绘制图形    验证码



#### 50、鼠标坐标值？

page：页面       client：窗口      offset：偏移

-   `pageX`:相对当前页面的水平距离。
-   `pageY`:相对当前页面的垂直距离。

-   `clientX`:相对当前窗口的水平距离。
-   `clientY`:相对当前窗口的垂直距离。

-   `offsetX`:相对当前事件源的水平距离。
-   `offsetY`:相对当前事件源的垂直距离。



#### 51、判断图片文件？

reg.test(str)，str是需要测试的字符串，以点加图片格式作为结尾的文件

#### 52、浏览器特点？

浏览器是多进程的应用程序，可以同时执行多任务。

浏览器最核心的内核部分。（CSS兼容性）

JS引擎：V8引擎 解析js代码

GUI引擎：渲染引擎，主要负责页面内容的渲染。包括HTML解析器、CSS解析器等等内容

定时器执行引擎：只要你的代码有定时器任务，用定时器引擎来执行

异步请求引擎：只要发现代码中出现异步，浏览器马上使用异步以前来处理请求，不影响其他代码执行

事件触发引擎：当你绑定了事件过后，我们将任务交给事件处理引擎来执行



#### 52、自动登录的流程

(1)获取本地token

(2)携带token到后端服务器验证，过期清除并跳转登录，未过期自动登录

#### 54、物理像素、逻辑像素？

1、物理像素：设备像素，在同⼀个设备上，它的物理像素是固定的，这是⼚商在出⼚时就设置好了的，即⼀个设备的分辨率是固定的。
2、逻辑像素：CSS像素，viewport中的⼀个⼩⽅格，CSS样式代码中使⽤的是逻辑像素。如果在⼀个设备中，物理像素与逻辑像素相等，将不会产⽣任何
问题。
素。
3、像素⽐：物理像素与逻辑像素之间的⽐例。当像素⽐为1:1时，使⽤1个物理像素显⽰1个逻辑像素；当像素⽐为2:1时，使⽤4个物理像素显⽰1个逻辑
像素。

#### 55、轮播实现？

1. 父元素设置溢出隐藏，不设置高度
2. 图片容器设置相对定位，宽度设置为图片对应的倍数
3. 定时器改变left值，使图片切换
4. 切换至最后一张时恢复left为原本状态

#### 56、移动端适配？

动态 rem 方案
VW 适配方案
 flex 做布局
等比缩放

#### 57、mongoose API 增删查改

find , updateMany , deleteMany , creat

#### 58、webpack作用？

- 实现前端项目`模块化`(提高管理和维护效率)
- 实现JS应用程序的静态模块打包工具(避免模块间相互污染)
- 实现按需加载。
- 一个前端资源构建工具，实现前端工程化，有助于前后端分离。

**核心功能**：

(1)兼容处理：保证代码向下兼容

(2)实现各种前端资源的模块化：可以实现非JS的模块化编程

(3)减少项目资源文件的数量：

将一个页面相关的资源自动进行整理合并，当前页面的所有css文件和	scss文件内容合并为一个css文件，当前页面的所有js文件内容合并	为一个js文件

(4)实现资源内容的压缩和混淆：

压缩:将资源内容中的换行、空格、注释等去除，减少资源的大小，提高		加载速度

(5)混淆:自动将代码转为浏览器能直接识别的语法，从而达到保护代码的目		的，并且可以提高代码的解析执行效率

#### 59、webpack配置？

- mode: 配置打包模式。
- `development`:开发模式。不会对资源进行压缩处理。
- `production`:生产模式。会对资源进行压缩处理。
- entry:打包入口，确定要打包的资源。
- 每个html提供一个主JS文件，所有该页面的相关资源都在对应的主JS文件中引入
- 页面资源要被打包，必须在配置文件中entry属性配置主JS文件路径
- output:配置打包资源的存放位置。
- module:配置打包规则。
- plugins:配置打包时使用的第三方插件。非JS资源打包需要依赖第三方插件进行实现。
- devServer:配置打包服务器。



#### 59、webpack-Loader？

webpack默认只能打包.js 文件。其他文件需要调用loader 加载器才可以正常打包，否则会报错!

加载模块执行顺序：entry→loaders→output

loader加载器的作用：
协助webpack打包处理特定的文件模块。

- style-loader: 将css添加到DOM的内联样式标签style里
- css-loader :允许将css文件通过require的方式引入，并返回css代码，并合成⼀个 `css`
- less-loader: 处理less
- sass-loader: 处理sass
- postcss-loader: 用postcss来处理CSS
- autoprefixer-loader: 处理CSS3属性前缀，已被弃用，建议直接使用postcss
- file-loader: 分发文件到output目录并返回相对路径
- url-loader: 和file-loader类似，但是当文件小于设定的limit时可以返回一个Data Url
- html-minify-loader: 压缩HTML
- babel-loader :用babel来转换ES6文件到ES

#### 59、webpack-Plugin？

\- html-webpack-plugin：在打包结束后，⾃动生成⼀个 `html` 文件，并把打包生成的`js` 模块引⼊到该 `html` 中

\- clean-webpack-plugin:  删除（清理）构建目录

\- mini-css-extract-plugin:  提取 `CSS` 到一个单独的文件中  

\- DefinePlugin:  允许在编译时创建配置的全局对象，是一个`webpack`内置的插件，不需要安装

\- copy-webpack-plugin：当我们的项目中，有一些文件代码不需要 webpack 进行处理，只需要直接复制到打包后的目录中即可。那么，也需要进行对应的配置。
\- mini-css-extract-plugin：该插件的主要是为了抽离 css 样式,防止将样式打包在 js 中文件过大和因为文件大网络请求超时的情况。

#### 59、webpack性能优化？

通过`webpack`优化前端的手段有：

- JS代码压缩:使用terser工具压缩混淆代码。，
- CSS代码压缩 ：除去无用空格
- Html文件代码压缩
- 文件大小压缩：对文件的大小进行压缩，减少`http`传输过程中宽带的损耗
- 图片压缩
- Tree Shaking
  - usedExports：通过标记某些函数是否被使用，之后通过Terser来进行优化的
  - sideEffects：跳过整个模块/文件，直接查看该文件是否有副作用
- 代码分离：可以按需加载，或者并行加载
- 内联 chunk：将一些`chunk`的模块内联到`html`



#### 59、前后端-模块化使用？区别？

- 前端模块化
  - 定义模块return或者define函数的第二个参数的export
  - 引入模块require，或者CMD的seajs.use,import
  - html引入模块，script标签,type="module"
  - export与export default
    - 均可用于导出常量、函数、文件、模块等
    - 在一个文件或模块中，export可以有多个，export default仅有一个，而且export default在导出是不需要变量名，相当于匿名的。
    - 通过export方式导出，在导入时要加{ }，export default则不需要。

- 后端模块化
  - 导出使用module.exports和exports
  - 导入，require()
- 二者有何不同点：
  1. 后端模块化加载模块是同步的，即 require引入时，在文件加载完成后，才执行后面的代码。前端加载模块是异步的，所有依赖加载完成后以回调函数的形式执行代码。



#### 60、jQuery？

-   是一个JS的代码库。对常用的JS操作进行简化封装
-   是一个快速、简洁的JavaScript框架，一个优秀的JavaScript代码库。

#### 60、jQuery如何操作内容和css？

val() html() text() css()

#### 60、jQuery的ajax语法？如何获取页面URL传参？

$.ajax{url:'',type:'',success:function(data){  } }

#### 60、jQuery如何操作属性？两者区别是什么？

prop() attr()

#### 61、jQuery如何操作class属性？

addClass hasClass removeClass

#### 67、jQuery遍历？

普通for循环，each（）方法

#### 70、jQuery对象与JS对象转换？

$(js对象)    $().get(0) 转为js对象

#### 78、jQuery如何查找符合指定特征的父元素？

$('i').parents('div')

#### 80、JS如何获取第一个子元素和最后一个子元素？和jquery获取

var 变量名称=e.firstElementChild;     var $f = $('h1').first()   var $e=$('h1').eq(0)
var 变量名称=e.lastElementChild;      var $l=$('h1').last()   var $e=$('h1').eq($('h1').children().length-1)



 

 

 















