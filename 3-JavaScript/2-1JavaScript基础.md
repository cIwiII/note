历史

-   90年代，JavaScript就应运而生。
-   95年，网景公司研发出LiveScript，后改为JavaScript。
-   97年，JS1.1被交给欧洲计算机协会(ECMA)组织，统一标准，即ECMAScript。
-   98年，国际标准化组织(ISO)和国际电工委员会(IEC)将ECMAScript纳入国际标准，作为浏览器厂商脚本依据。

## JS概述

-   JavaScript是一种目前世界上最流行的、轻量级解释型脚本语言，简称为JS。
- 主要作用：1. 实现用户数据校验与交换; 2. 实现页面动态效果;
-   组成
    1.  ECMAScript:最核心、基础部分，所有浏览器都能解析执行;
    2.  BOM:Browser Object Model 浏览器对象模型，提供与浏览器进行交换的接口，浏览器独有;
    3.  DOM:Document Object Model 文档对象模型，提供与页面内容进行交换的接口，浏览器独有;
- 版本：ES5(主)、ES6(辅)
-   兼容性
    -   ES5:所有主流浏览器都支持，IE9支持部分，IE11、IE12完美支持;
    -   ES6:2015年以后的浏览器支持，IE全系列不支持，Edge12支持;
    
    

## 输入

- js `从上到下`、`从左到右`依次执行
- 输入：var str = prompt('提示');  document.write('99')页面覆盖

## 关键字

### JavaScript 保留关键字

Javascript 的保留关键字不可以用作变量、标签或者函数名。有些保留关键字是作为 Javascript 以后扩展使用。

|          |           |            |           |              |
| -------- | --------- | ---------- | --------- | ------------ |
| abstract | arguments | boolean    | break     | byte         |
| case     | catch     | char       | class*    | const        |
| continue | debugger  | default    | delete    | do           |
| double   | else      | enum*      | eval      | export       |
|          | false     | final      | finally   | float        |
| for      | function  | goto       | if        | implements   |
| import*  | in        | instanceof | int       | interface    |
| let      | long      | native     | new       | null         |
| package  | private   | protected  | public    | return       |
| short    | static    | super*     | switch    | synchronized |
| this     | throw     | throws     | transient | true         |
| try      | typeof    | var        | void      | volatile     |
| while    | with      | yield      |           |              |





### JavaScript 对象、属性和方法

避免使用 JavaScript 内置的对象、属性和方法的名称作为 Javascript 的变量或函数名：

|           |          |          |               |                |
| --------- | -------- | -------- | ------------- | -------------- |
| Array     | Date     | eval     | function      | hasOwnProperty |
| Infinity  | isFinite | isNaN    | isPrototypeOf | length         |
| Math      | NaN      | name     | Number        | Object         |
| prototype | String   | toString | undefined     | valueOf        |



### Java 保留关键字

JavaScript 经常与 Java 一起使用。您应该避免使用一些 Java 对象和属性作为 JavaScript 标识符：

|          |      |           |           |            |             |
| -------- | ---- | --------- | --------- | ---------- | ----------- |
| getClass | java | JavaArray | javaClass | JavaObject | JavaPackage |



### Windows 保留关键字

JavaScript 可以在 HTML 外部使用。它可在许多其他应用程序中作为编程语言使用。

在 HTML 中，您必须（为了可移植性，您也应该这么做）避免使用 HTML 和 Windows 对象和属性的名称作为 Javascript 的变量及函数名：

|              |          |             |               |                    |
| ------------ | -------- | ----------- | ------------- | ------------------ |
| alert        | all      | anchor      | area          | area               |
| assign       | blur     | button      | checkbox      | clearInterval      |
| clearTimeout | confirm  | close       | closed        | clientInformation  |
| constructor  | crypto   | decodeURI   | defaultStatus | decodeURIComponent |
| document     | element  | elements    | embed         | embeds             |
| encodeURI    | event    | escape      | fileUpload    | encodeURIComponent |
| focus        | form     | forms       | frame         | innerHeight        |
| innerWidth   | layer    | layers      | link          | location           |
| mimeTypes    | navigate | navigator   | frames        | frameRate          |
| hidden       | history  | image       | images        | offscreenBuffering |
| open         | opener   | option      | outerHeight   | outerWidth         |
| packages     | parent   | pageXOffset | pageYOffset   | parseFloat         |
| parseInt     | password | pkcs11      | plugin        | propertyIsEnum     |
| radio        | prompt   | reset       | screenX       | screenY            |
| scroll       | secure   | select      | self          | setInterval        |
| setTimeout   | status   | submit      | taint         | text               |
| textarea     | top      | unescape    | untaint       | window             |

### HTML 事件句柄

除此之外，您还应该避免使用 HTML 事件句柄的名称作为 Javascript 的变量及函数名。

实例：

| onblur    | onclick    | onerror     | onfocus     |
| --------- | ---------- | ----------- | ----------- |
| onkeydown | onkeypress | onkeyup     | onmouseover |
| onload    | onmouseup  | onmousedown | onsubmit    |





## 数据

### 数据类型

- 1、基本数据类型(简单数据类型) 7种

  - Symbol：译为‘符号’。唯一值，ES6新增;括号中的值没有意义，自定义的符号便于区分，Iterotor是symbol的内置符号，

    -   在Js中迭代器对象实现了可迭代协议，迭代器对象由Symbol.iterator属性的值返回。
  -   Symbol.iterator属性的值是一个函数，它返回一个迭代器对象。
    
    -   迭代器指的是拥有next方法的对象。
  -   该next方法必须返回一个带有value和done的对象。
  
  -   BigInt：ES2020(11)新增n结尾的整数，用以表示超出范围的数
  
      ```js
  var a=Symbol('张三');
      var b=Symbol('张三');
    console.log(a==b);//false
    
    Symbol('123')==Symbol('123');// false
    const a=Symbol.for('123');// 不管定义在何处都是全局变量
    const b=Symbol.for('123');//如果存在就赋值，没有就新建
    a===b;// true
    
    Symbol.keyFor(a);//123, 返回登记的值
    ```
    
      
    
  
-   2、复合数据类型(引用数据类型)

    -   Object（对象）、Array（数组）、Function（函数）、Date、RegExp、Map、Set。。。

#### 模块的 Singleton 模式

Singleton 模式：调用一个类，任何时候返回同一个实例。

基本实现

```js
// mod.js，Node中存放于 global 全局对象上
function A() {
  this.foo = 'hello';
}
if (!global._foo) {
  global._foo = new A();
}
module.exports = global._foo;
```

但是有一个问题，全局变量global._foo是可写的，任何文件都可以修改。

```js
global._foo = { foo: 'world' };

const a = require('./mod.js');// 会使得加载mod.js的脚本都失真。
console.log(a.foo);
```

为了防止这种情况出现，就可以使用 Symbol。

```js
// mod.js
const FOO_KEY = Symbol.for('foo');
function A() {
  this.foo = 'hello';
}
if (!global[FOO_KEY]) {
  global[FOO_KEY] = new A();
}
module.exports = global[FOO_KEY];
```

上面代码中，可以保证global[FOO_KEY]不会被无意间覆盖，但还是可以被改写。

```js
global[Symbol.for('foo')] = { foo: 'world' };
const a = require('./mod.js');
```


如果键名使用Symbol方法生成，那么外部将无法引用这个值，当然也就无法改写。

```js
// mod.js
const FOO_KEY = Symbol('foo');

// 后面代码相同 ……
```

上面代码将导致其他脚本都无法引用FOO_KEY。但这样也有一个问题，就是如果多次执行这个脚本，每次得到的FOO_KEY都是不一样的。

虽然 Node 会将脚本的执行结果缓存，一般情况下，不会多次执行同一个脚本，但是用户可以手动清除缓存，所以也不是绝对可靠



### 数据判断

#### typeof

- 检测基本类型，复合类型除function都是object，

- 可能的值：string，number，bigInt，boolean，symbol，undefined，object，function

- 可用于证明暂时性死区TDZ：typeof 一个不存在的值是undefined，而暂时性死区是报错

  ```JS
  var demo=1;
  console.log( typeof(demo) );
  console.log( typeof demo );
  typeof null;//object
  // 判断是否存在时 使用typeof a，而非if(a)  不存在时报错
  
  console.log(typeof num);//undefined，不存在
  console.log(typeof num2);//报错，let 存在声明提升，但是不可用，即使是typeof
  let num2=1;
  ```


#### instanceof

不能判断基础类型，返回布尔值，检测构造函数的 prototype 是否在实例的原型链上

**扩展** 

类型标签存在每个单元低位中：最低位1，标签长度占1位(bit)，0长度占3位(bit),undefined的值是 (-2)30超出范围，null指针全是0同object
000: object
 1: int  31 位的有符号整数
010: double  双精度的浮点数
100: string
110: boolean 

#### 通用检测

通用检测采用 `Object.prototype.toString.call(obj)`  // ' [object Undefined] '.slice(8,-1);

#### NaN

isNaN：隐式转number类型再判断

Number.isNaN：不转换类型判断是不是NaN

### 数据转换

**number =》string** ：num + ‘’、num.toString()、num.toFixed(默认0)

**string =》number** ：Number(str)、parseInt(str 转整 尽可能转)、parseFloat(str 小数 尽可能转)

**other =》Boolean** ：

-   转为true：非0数字、非空字符串、symbol、object(对象)
-   转为false (6个)：0，NaN, '', undefined, false, null

**other =》Number** ：

-   转为NaN：string字面值是非数字、undefined、对象
-   转为1：true
-   转为0：null、‘’、 false
-   Symbol：TypeError

### switch

-   在做等值条件判断时，可以考虑使用switch;

- 匹配指定变量的值是否是case后的值，如果是，则执行对应条件体代码，退出当前switch判断，所有case值都不匹配时，执行default后的代码体;

  ```js
  switch(变量){    
      case 值①:        
            条件体②;        
            break;    
      case 值③:        
           条件体④;       
           break;        
  .....  default:        
        否则代码体⑤;        
         break;
  }
  ①->②①->③->④①->③->......->⑤
  ```

-   break穿透:break会结束当前switch判断执行，但如果break丢失，会发生穿透现象，将匹配的case以后的所有case代码都会执行，指定遇到break为止;

    

## 循环

### while

-   当循环条件满足时，会重复执行指定代码(循环体),直到条件不满足时，退出循环，继续执行循环以后的代码;

-   注意:

    -   避免循环条件始终满足的情况出现，如果循环条件不做改变，始终满足，没有退出循环的节点现象，称为`死循环`；
    -   当循环体有效代码只有一行时，可省略大括号，不推荐使用;

-   语法

    ```
    ①while(循环条件②){      循环体③;}④①->②->④①->②->③->②->③->......->②->④
    ```

-   案例

    ```
    var count=1;while(count<11){    document.write('Hello World!<br/>');    count++;}document.write('循环结束');
    ```

### doWhile

-   先执行一次循环体内容，再判断条件是否满足，如果满足，则继续执行循环体代码，如果不满足，则退出当前循环执行，继续执行循环以后的代码;

- 语法

  ```
  ①
  do{    
    循环体②；
  }while(循环条件③);
  ④
  
  ①->②->③->④
  ①->②->③->②->......->③->④
  ```

-   案例

    ```js
    var count=1;
    do{    
        document.write(`Hello World<br/>`);    
        count++;
    }while(count<1);
    ```

### for、for-in、for-of

-   案例

    ```js
    var num = parseInt(prompt('请输入一个正整数:'));
    //普通for循环
    for(var n=1,re=1;n<=num;n++){    
        re*=n;
    }
    let arr=[1,2,3,4,5,6,7,8]
    //for in 包括继承的可枚举属性。也就是原型l
    for (let index in arr){}
    
    //for of，专门用于遍历可迭代对象，对象本身默认是不可迭代的，所以需要Object.keys(),转换在for of
    for (let item of arr){}
    ```

### Object.entries(arr)

1. Object.entries()方法返回一个给定对象自身可枚举属性的键值对数组，
2. 其排列与使用  for.....in  循环遍历该对象时返回的顺序一致（区别在于for...in）循环还会枚举原型链中的属性.

```js
let arr=[1,2,3,4,5,6,7,8]
for (const [i,item] of Object.entries(arr)) {
  console.log(i,item);//输出索引和值，如果是对象输出键和值。
}

for (const v of Object.entries(arr)){
    //v是键值对或者索引和值构成的数组，
    //Object.entries(arr)返回的是一个二维数组
}
```



### 循环控制-break,continue

-   break：结束本层整个循环;

-   continue：结束本层的本次循环，继续下一次循环;


## 原生对象

-   API：Application Programming Interface 应用程序接口。
    -   预先写好的代码接口，后期可直接通过接口执行代码，实现对应功能;
-   原生对象
    -   原生对象（native object，也称本地对象），其定义为“独立于宿主环境的 ECMAScript实现提供的对象”。即ECMAScript本身带有的一些基本对象，而不包含浏览器等宿主提供的对象。它包含：`String、Boolean、Number、Object、Function、Array、Date、RegExp、Error、EvalError、RangeError、ReferenceError、SyntaxError、TypeError、URIError`。
    -   内置对象(属于原生对象，JS引擎初始化时，系统自动创建的)，Global、Math。



## 数组

- 指定索引赋为空(empty)：delete arr[index];

- 类型化数组是在 ES6 中引入的，只允许包含数值类型的值

- ES6 : find() 与 findIndex() ：接收参数1(v,i,a)=>{},参数2?: this指向对象

- **fill()** 方法,填充数组，

  -   参数1: 填充值，
  -   参数2?:起始索引，若为负数，-1，则加上长度 array.length - 1
  -   参数3?:结束索引不包括(不传默认到最后)，

- **copyWithin(startIndex，copyIndex，endIndex?)** 方法，数组内部复制自身元素依次填充，所有填充均是原数组对应的值，而非非填充过程中改变的值，endIndex不会被修改，负数同fill

  

### Array.of()

ES6方法，new Array()在传入单个数值是被识别为长度，Array.of()修复了这个问题

### Array.from

将可迭代对象转为数组，即有Symbol.iterator 属性，这是遍历的本质

ES6方法，参数一：类数组，参数二?，映射回调函数，参数三?，参数二函数中this的指向

Array.from(arguments, (value) => value + 1，this指向);


### 数组判断方法

一、Array.isArray(obj)-----ES6语法

```js
 document.write(Array.isArray([ ])); //true
```

二、instanceof、constructor

```js
var arr = ['a', 'b', 'c'];
console.log(arr instanceof Array); 	         // true 
console.log(arr.constructor === Array;); // true

// 下面的函数调用都返回 true
Array.isArray([]);
Array.isArray([10]);
Array.isArray(new Array());
Array.isArray(new Array('a', 'b', 'c'))
// 鲜为人知的事实：其实 Array.prototype 也是一个数组。
Array.isArray(Array.prototype); 

// 下面的函数调用都返回 false
Array.isArray();
Array.isArray(new Uint8Array(32))
Array.isArray({ __proto__: Array.prototype });

//自定义 isArray
if (!Array.isArray){
  Array.isArray = function(arg){
    return Object.prototype.toString.call(arg) === '[object Array]';
  };
}
```

### 类数组转换(5)

```js
// call-slice
Array.prototype.slice.call(arrayLike);
// call-splice
Array.prototype.splice.call(arrayLike, 0);
// apply-concat
Array.prototype.concat.apply([], arrayLike);
// Array-from
Array.from(arrayLike);
// 扩展运算符
[...arrayLike]
```

### 数组冒泡算法

```js
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
```



## Math

ceil()向上取整

floor()向下取整

## String

常用属性：str.length

charAt(index)：获取字符

charCodeAt(index):Unicode

trim():去除首尾空格

substring(startindex，endindex)

## 函数(方法)

-   当一段代码需要被反复执行时，可为该代码取个名字，后期通过名字调用
-   作用;
    1.  提高代码的可重用性;
    2.  方便代码的管理和维护;
    3.  提高代码的可读性;

- 声明函数: function标识定义，使用小驼峰命名;

- 参数: 形参、实参

  ```js
      // function 函数名称(形参名称1,.....){函数体;return 数据;}
  function sumArr(arr) { 
      var re = 0;    
      for (var e of arr) {        re += e;    }  
      return re
  }
  var arr = [1, 5, 2, 8, 2, 9];   
  // 调用函数, 并传参
  var a=sumArr(arr);
  sumArr.length;// sumArr函数的参数个数
  ```


### 内置arguments数组

保存了当前函数的所有实参值(只能在函数内部使用)

```js
function sumPlus(){    
    var re=0;    for(var v of arguments){        re+=v;    }    
    return re;
}
console.log(sumPlus(1,2,3,4));
```

### 转为表达式

```js

(function fnA(){ console.log("msg")}())
=
(function fnA(){console.log("msg")})()
=
var b=function fnA(){console.log("msg")}()
=
!function fnA(){console.log("msg")}()


!function(){console.log("msg")}()       
+function(){console.log("msg")}()        
-function(){console.log("msg")}()        
~function(){console.log("msg")}()  
```




## 字符编码

-   在显示器上看见的文字、图片等信息在电脑里面其实并不是我们看见的样子，即使你知道所有信息都存储在硬盘里，把它拆开也看不见里面有任何东西，只有些盘片。假设，你用显微镜把盘片放大，会看见盘片表面凹凸不平，凸起的地方被磁化，凹的地方是没有被磁化；凸起的地方代表数字1，凹的地方代表数字0。硬盘只能用0和1来表示所有文字、图片等信息。如何存储字母A？
-   计算机存储单位 位(bit) -> 字节(Byte) -> KB -> MB -> GB ->TB
    -   1Byte=8bit
    -   1KB=1024Byte
    -   1MB=1024KB
    -   1GB=1024MB
    -   1TB=1024BG

### 常用编码表

`ASCII`、`MBCS`、`Unicode`、`UTF-8`

-   `ASCII`

    -   ASCII码使用7位2进制数表示一个字符，7位2进制数可以表示出2的7次方个字符，共128个字符。EBCDIC码使用8位，可以表示出2的8次方个字符，256个字符。

        ![img](https://woniuxyopenfile.oss-cn-beijing.aliyuncs.com/woniuxynote/classNoteMd/202110261049/1.jpg)

-   `MBCS`

    -   为了扩充[ASCII编码](https://baike.baidu.com/item/ASCII编码)，以用于显示本国的语言，不同的国家和地区制定了不同的标准，由此产生了 GB2312, BIG5, JIS 等各自的编码标准。这些使用 2 个[字节](https://baike.baidu.com/item/字节)来代表一个字符的各种汉字延伸编码方式，称为 ANSI 编码，又称为”MBCS（Muilti-Bytes Character Set，多字节字符集）”。在简体中文系统下，ANSI 编码代表 GB2312 编码，在日文[操作系统](https://baike.baidu.com/item/操作系统)下，ANSI 编码代表 JIS 编码，所以在中文 windows下要转码成gb2312,gbk只需要把文本保存为ANSI 编码即可。 不同 ANSI 编码之间互不兼容，当信息在国际间交流时，无法将属于两种语言的文字，存储在同一段 ANSI 编码的文本中。一个很大的缺点是，同一个编码值，在不同的编码体系里代表着不同的字。这样就容易造成混乱。

-   `Unicode`

    -   称为”万国码”，如果有一种编码，将世界上所有的符号都纳入其中，无论是英文、日文、还是中文等，大家都使用这个[编码表](https://baike.baidu.com/item/编码表)，就不会出现编码不匹配现象。每个符号对应一个唯一的编码，[乱码](https://baike.baidu.com/item/乱码)问题就不存在了。这就是Unicode编码。

-   `UTF-8`

    -   为了提高Unicode的编码效率，于是就出现了UTF-8编码。UTF-8可以根据不同的符号自动选择编码的长短。比如英文字母可以只用1个[字节](https://baike.baidu.com/item/字节)就够了。

## 自定义对象

### 创建

-   方式一:  var obj={属性名:属性值,....}`

-   方式二: var 对象变量名称=new Object();

-   删除对象属性：delete 对象变量名称.属性名称

-   遍历对象属性

    ```js
    for(var 属性名称 in 对象变量名称){   
       属性值 = 对象名称[变量名称]
}
    ```
    



