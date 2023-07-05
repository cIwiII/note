

## JavaScript性能优化

### 1.访问对象属性和数组元素的速度都比变量慢

### 2.避免全局查找

```js
function search() {
    //当我要使用当前页面地址和主机域名
    alert(window.location.href + window.location.host);
}
    //最好的方式是如下这样  先用一个简单变量保存起来
function search() {
    var location = window.location;
    alert(location.href + location.host);
}
```

### 3.避免with语句

with()语句同时给局部变量和全局变量的性能带来负面影响。

```js
with (a.b.c.d) {
    property1 = 1;
    property2 = 2;
}
//可以替换为：
var obj = a.b.c.d;
obj.property1 = 1;
obj.property2 = 2;
```

### 4.数字转换成字符串

般最好用”"+1来将数字转换成字符串，虽然看起来比较丑一点，但性能上来说这个效率是最高的：

```js
(“” +) > String() > .toString() > new String()
```

### 5.通过模板元素clone，替代createElement

```js
var frag = document.createDocumentFragment();
+ var pEl = document.getElementsByTagName('p')[0];
for (var i = 0; i < 1000; i++) {
-     var el = document.createElement('p');
+    var el = pEl.cloneNode(false);
    el.innerHTML = i;
    frag.appendChild(el);
}
document.body.appendChild(frag);
```

### 6.将脚本放在body底部

### 7.小心使用闭包

### 8.在循环时将控制条件和控制变量合并起来

```js
# 未合并前：
for ( var x = 0; x < 10; x++ ) {
};

每次都需要
#1：检查 x 是否存在
#2：检查 x 是否满足条件
#3：使 x 增加 1

# 合并
var x = 9;
do { } while( x-- );
```

### 9.使用 XMLHttpRequest(XHR)对象加载 JavaScript 脚本

```js
var xhr = new XMLHttpRequest();
xhr.open("get", "script1.js", true);
xhr.onreadystatechange = function(){
    if (xhr.readyState == 4){
        if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304){
            var script = document.createElement ("script");
            script.type = "text/javascript";
            script.text = xhr.responseText;
            document.body.appendChild(script);
        }
    }
};
xhr.send(null);
```



### 10.注意NodeList

最小化访问NodeList的次数可以极大的改进脚本的性能

```
 var images = document.getElementsByTagName('img');
        for (var i = 0, len = images.length; i < len; i++) {}
```

编写JavaScript的时候一定要知道何时返回NodeList对象，这样可以最小化对它们的访问

1、进行了对getElementsByTagName()的调用

2、获取了元素的childNodes属性
3、获取了元素的attributes属性
4、访问了特殊的集合，如document.forms、document.images等等

### 11.避免与null进行比较

null进行比较的代码，尝试使用以下技术替换：

1、如果值应为一个引用类型，使用instanceof操作符检查其构造函数

2、如果值应为一个基本类型，作用typeof检查其类型

3、如果是希望对象包含某个特定的方法名，则使用typeof操作符确保指定名字的方法存在于对象上

### 12.尊重对象的所有权

1、不要为实例或原型添加属性
2、不要为实例或者原型添加方法
3、不要重定义已经存在的方法
4、不要重复定义其它团队成员已经实现的方法，永远不要修改不是由你所有的对象，你可以通过以下方式为对象创建新的功能:

​        1、创建包含所需功能的新对象，并用它与相关对象进行交互

​        2、创建自定义类型，继承需要进行修改的类型，然后可以为自定义类型添加额外功能

### 13.循环引用

如果循环引用中包含DOM对象或者ActiveX对象，那么就会发生内存泄露。内存泄露的后果是在浏览器关闭前，即使是刷新页面，这部分内存不会被浏览器释放。
简单的循环引用：

```js
 var el = document.getElementById('MyElement');

 var func = function () { }
 el.func = func;
 func.element = el;
```

通常循环引用发生在为dom元素添加闭包作为expendo的时候。

```js
function init() {
    var el = document.getElementById('MyElement');
    el.onclick = function () {  }
}
init();
```

init在执行的时候，当前上下文我们叫做context。这个时候，context引用了el，el引用了function，function引用了context。这时候形成了一个循环引用。

下面2种方法可以解决循环引用：

1、置空dom对象

```js
function init() {
    var el = document.getElementById('MyElement');
    el.onclick = function () {  }
}
init();

//可以替换为：
function init() {
    var el = document.getElementById('MyElement');
    el.onclick = function () {  }
    el = null;
}
init();
```

将el置空，context中不包含对dom对象的引用，从而打断循环应用。

如果我们需要将dom对象返回，可以用如下方法：

```js
function init() {
    var el = document.getElementById('MyElement');
    el.onclick = function () {  }
    return el;
}
init();

//可以替换为：
function init() {
    var el = document.getElementById('MyElement');
    el.onclick = function () {  }
    try {
        return el;
    }
    finally {
        el = null;
    }
}
init();
```

2、构造新的context

```js
function init() {
    var el = document.getElementById('MyElement');
    el.onclick = function () {  }
}
init();

//可以替换为：
function elClickHandler() { }
function init() {
    var el = document.getElementById('MyElement');
    el.onclick = elClickHandler;
}
init();
```

把function抽到新的context中，这样，function的context就不包含对el的引用，从而打断循环引用。

### 14.通过javascript创建的dom对象，必须append到页面中

IE下，脚本创建的dom对象，如果没有append到页面中，刷新页面，这部分内存是不会回收的！

```js
function create() {
    var gc = document.getElementById('GC');
    for (var i = 0; i < 5000; i++) {
        var el = document.createElement('div');
        el.innerHTML = "test";
        //下面这句可以注释掉，看看浏览器在任务管理器中，点击按钮然后刷新后的内存变化
        gc.appendChild(el);
    }
}
```

### 15.字符串连接

如果要连接多个字符串，应该少使用+=，如

s+=a; s+=b;  s+=c;

应该写成s+=a + b + c；

而如果是收集字符串，比如多次对同一个字符串进行+=操作的话，最好使用一个缓存，使用JavaScript数组来收集，最后**使用join方法连接起来**

```js
let all="";
for (var i = 0; i < 100; i++) {
   all +=i;
}
// 替换为
var buf = [];
for (var i = 0; i < 100; i++) {
    buf.push(i.toString());
}
var all = buf.join("");
```



### 16.各种类型转换

```js
var myVar = "3.14159",
str = "" + myVar, //转成string类型
i_int = ~ ~myVar,  //转成int类型  
f_float = 1 * myVar,  //转成浮点型  
b_bool = !!myVar,  /*  转成布尔类型，任何长度不为0的字符串和除0以外的任何数字都为真*/array = [myVar];  //  转成数组
```

如果定义了toString()方法来进行类型转换的话，推荐**显式调用toString()**，因为内部的操作在尝试所有可能性之后，会尝试对象的toString()方法尝试能否转化为String，所以直接调用这个方法效率会更高

### 17.多个类型声明

一个声明语句一次声明多个变量，就像上面的例子

### 18.插入迭代器

```js
var name=values[i]; 
i++;
// 替换为
var name=values[i++]
```

### 19.使用直接量（字面量）

```js
var aTest = new Array(); //替换为
var aTest = [];

var aTest = new Object; //替换为
var aTest = {};

var reg = new RegExp(); //替换为
var reg = /../;

//如果要创建具有一些特性的一般对象，也可以使用字面量，如下：
var oFruit = new Object;
oFruit.color = "red";
oFruit.name = "apple";

//前面的代码可用对象字面量来改写成这样：
var oFruit = { color: "red", name: "apple" };
```

### 20.避免双重解释

**1、尽量少使用eval函数** 
使用eval相当于在运行时再次调用解释引擎对内容进行运行，需要消耗大量时间，而且使用Eval带来的安全性问题也是不容忽视的。

**2、不要使用Function构造器** 
setTimeout接收字符串和函数，字符串会自动调用Function构造器创建函数，不要给setTimeout或者setInterval传递字符串参数，避免调用构造器

```js
 var num = 0;
 setTimeout('num++', 10);// ==>new Function( num++ );
 
//可以替换为：
var num = 0;
function addNum() {
    num++;
}
setTimeout(addNum, 10);
```

### 21.缩短否定检测

```js
if(oTest != '#ff0000'){
    //do something
}
if(oTest != null){
//do something
}
if(oTest != false){
  //do something
}
//虽然这些都正确，但用逻辑非操作符来操作也有同样的效果：
if(!oTest){
//do something
}
```

### 22.释放javascript对象

在rich应用中，随着实例化对象数量的增加，内存消耗会越来越大。所以应当及时释放对对象的引用，让GC能够回收这些内存控件。

- 对象：obj = null

- 对象属性：delete obj.myproperty

- 数组item：使用数组的splice方法释放数组中不用的item

### 23.性能方面的注意事项

**1、尽量使用原生方法**

**2、switch语句相对if较快**

通过将case语句按照最可能到最不可能的顺序进行组织

**3、位运算较快**

当进行数字运算时，位运算操作要比任何布尔运算或者算数运算快

**4、巧用 || 和 && 布尔运算符** 

```js
function eventHandler(e) {
    if (!e) e = window.event;
}
//可以替换为：
function eventHandler(e) {
    e = e || window.event;
}

if(myobj){
    doSomething(myobj);
}
//可以替换为：
myobj && doSomething(myobj);
```

### 24.避免错误应注意的地方

**1、每条语句末尾须加分号，if加大括号**,

在if语句中，即使条件表达式只有一条语句也要用{}把它括起来，以免后续如果添加了语句之后造成逻辑错误

**2、使用+号时需谨慎**

```js
var valueA = 20;
var valueB = "10";
alert(valueA + valueB);     //ouput: 2010 
alert(valueA + (+valueB));  //output: 30 
alert(valueA + +valueB);    //output:30 
alert(valueA ++ valueB);     //Compile error
```

**3、使用return语句需要注意**

一条有返回值的return语句不要用()括号来括住返回值，如果返回表达式，则表达式应与return关键字在同一行，以避免压缩时，压缩工具自动加分号而造成返回与开发人员不一致的结果

```js
function F1(){
    var valueA = 1;
    var valueB = 2;
    return valueA + valueB;
}
function F2() {
    var valueA = 1;
    var valueB = 2;
    return
    valueA + valueB;
}
alert(F1());  //输出: 3 
alert(F2());  //输出: undefined
```

### 25.==和===

尽可能使用=== 和 !==，

### 26.不要使用生偏语法

不要使用生偏语法，写让人迷惑的代码，虽然计算机能够正确识别并运行，但是晦涩难懂的代码不方便以后维护

### 27.函数返回统一类型

为了规范和以后维护时容易理解，应保证函数应返回统一的数据类型

### 28.总是检查数据类型

一方面是为了安全性，另一方面也是为了可用性。用typeof方法来检测你的function接受的输入是否合法

### 29.何时用单引号，何时用双引号

建议在HTML中使用双引号，在JavaScript中使用单引号，但为了兼容各个浏览器，也为了解析时不会出错，定义JSON对象时，最好使用`双引号` 

### 30.部署

1、用JSLint运行JavaScript验证器来确保没有语法错误或者是代码没有潜在的问题。

2、部署之前推荐使用压缩工具将JS文件压缩。
3、文件编码统一用UTF-8。

4、重构是一项从项目开始到结束需要持续的工作，只有不断的优化代码才能让代码的执行效率越来越好。