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
    
    
    
    
    // 对象遍历
    for(var 属性名称 in 对象变量名称){   
       属性值 = 对象名称[变量名称]
    }
    
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



## 函数(方法)

-   为反复调用的代码取个名字，方便调用
-   作用：可重用性、管理和维护、可读性;
    
- 声明函数: function标识定义，使用小驼峰命名;

- 参数: 形参、实参


- 内置arguments数组：保存了当前函数的所有实参值(只能在函数内部使用)

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

-   显示器上的文字、图片等信息，在电脑里面其实并不是我们看见的样子，即使你知道所有信息都存储在硬盘里，把它拆开也看不见里面有任何东西，只有些盘片。假设，你用显微镜把盘片放大，会看见盘片表面凹凸不平，凸起的地方被磁化，凹的地方是没有被磁化；凸起的地方代表数字1，凹的地方代表数字0。硬盘只能用0和1来表示所有文字、图片等信息。如何存储字母A？
-   计算机存储单位 位(bit) -> 字节(Byte) -> KB -> MB -> GB ->TB
    -   1Byte=8bit
    -   1KB=1024Byte
    -   1MB=1024KB
    -   1GB=1024MB
    -   1TB=1024BG

### 常用编码表

`ASCII`、`MBCS`、`Unicode`、`UTF-8`

-   `ASCII`

ASCII码使用7位2进制数表示一个字符，7位2进制数可以表示出2的7次方个字符，共128个字符。EBCDIC码使用8位，可以表示出2的8次方个字符，256个字符。

![image-20230705201652381](C:\Users\LENOVO\AppData\Roaming\Typora\typora-user-images\image-20230705201652381.png)

-   `MBCS`

    -   为了扩充[ASCII编码](https://baike.baidu.com/item/ASCII编码)，以用于显示本国的语言，不同的国家和地区制定了不同的标准，由此产生了 GB2312, BIG5, JIS 等各自的编码标准。这些使用 2 个[字节](https://baike.baidu.com/item/字节)来代表一个字符的各种汉字延伸编码方式，称为 ANSI 编码，又称为”MBCS（Muilti-Bytes Character Set，多字节字符集）”。在简体中文系统下，ANSI 编码代表 GB2312 编码，在日文[操作系统](https://baike.baidu.com/item/操作系统)下，ANSI 编码代表 JIS 编码，所以在中文 windows下要转码成gb2312,gbk只需要把文本保存为ANSI 编码即可。 不同 ANSI 编码之间互不兼容，当信息在国际间交流时，无法将属于两种语言的文字，存储在同一段 ANSI 编码的文本中。一个很大的缺点是，同一个编码值，在不同的编码体系里代表着不同的字。这样就容易造成混乱。
-   `Unicode`

    -   称为”万国码”，如果有一种编码，将世界上所有的符号都纳入其中，无论是英文、日文、还是中文等，大家都使用这个[编码表](https://baike.baidu.com/item/编码表)，就不会出现编码不匹配现象。每个符号对应一个唯一的编码，[乱码](https://baike.baidu.com/item/乱码)问题就不存在了。这就是Unicode编码。
-   `UTF-8`

    -   为了提高Unicode的编码效率，于是就出现了UTF-8编码。UTF-8可以根据不同的符号自动选择编码的长短。比如英文字母可以只用1个[字节](https://baike.baidu.com/item/字节)就够了。









## 内存空间

- 每个在浏览器中运行的网页，都会占用一定的内存空间，用于存储需要使用的运行数据;
- 性能良好的网页，一般不超过100M;
- 一个标签页在32位系统的最大内存为0.7G左右，在64位系统是1.4g左右。

### **内存模型** （水杯）

- 栈(stack)
  - 空间大小较小，存储数据具有`先入后出`的特点；
  - 存储数据的过程被称为`入栈`、`压栈`、`进栈`;
  - 取出数据的过程被称为`弹栈`、`出栈`;
  - 存、取数据的一端被称为`栈顶`，另一端被称为`栈底`;
  - 一般用于存储基本数据类型的数据以及引用数据类型的引址;
- 堆(heap)
  - 空间大小较大；
  - 一般用于存储引用数据类型的数据;
- 池(pool)
  - 用于存储常量，被称为`常量池`;

```
var num;//分配栈空间
var arr;//分配栈空间
num=3;//栈空间数据写入

arr=new Array();//分配堆空间，并将堆引用地址数据写入到arr栈空间中
```

### 内存生命周期

1. 内存分配

   - 在声明变量、函数、对象、数组时，系统会自动分配内存空间;

     ```
     var num;//只分配栈空间
     var arr=new Array();//分配栈和堆
     
     
     ```

2. 内存使用

   - 内存的读、写操作,获取变量值、赋值操作；

     ```
     num1=6;//内存写
     num2=8;//内存写
     console.log(num1+num2);//内存读操作
     
     arr[0]='a';//堆的写入
     arr[1]='b';//堆的写入
     console.log(arr[1]);//堆的读出
     ```

3. 内存回收

   - 当内存(变量)不再被使用时，会由垃圾回收机制自动回收;
   - 不定时回收，每次回收操作时，都会阻碍程序的运行



### 值传递

- JavaScript在进行函数调用时，是将实参的值传递给形参;而不是拿原值来操作

### 执行上下文

执行上下文，指的就是代码的运行环境。分 ：

- 全局上下文
- 局部上下文（函数级）
- `eval()` 上下文：在 `eval()` 方法被调用时，会产生一个 `eval()` 上下文



代码运行过程中，每次产生的执行上下文都会保存到栈空间中，保存过程称为“压栈”。

当一个函数调用完成时会从栈中销毁对应的执行上下文，销毁过程称为“出栈”。

执行上下文栈，采用的压栈和出栈的顺序是堆箱模型：先进后出，后进先出。

对于执行上下文栈来说，只最上面的上下文是处于活动状态的，而只有活动状态的上下文，才能运行其内部的代码。

**总结** 

1. 任何一个程序，都会产生唯一的一个全局上下文；
2. 任何函数，只要被调用一次，就会产生一个对应的局部上下文，调用多次就产生多个；
3. 当一个函数调用完成时，对应的上下文会从栈内存中销毁；
4. 只有处于栈内存顶部的上下文，是活动状态的，其内部的代码才能运行；

## 变量对象

变量对象，就是用来保存当前上下文中所有的数据。

### 一、上下文和变量对象

执行上下文从创建到销毁可以分为三个阶段：

1. 执行上下文创建：在执行上下文内部创建变量对象、建立作用域链、确定 this 指向；
2. 代码运行阶段：当执行上下文创建完成后，开始运行内部代码；
3. 执行上下文销毁：当代码运行完成后，执行上下文从栈中销毁；

从以上三个步骤中，可以分析出上下文和变量对象之间的关系：

- 每一个执行上下文中都会有一个自己的变量对象；
- 上下文在创建的同时，它的变量对象也就产生了；

### 二、变量对象的作用

变量对象在创建的时候，会依次完成以下三件事情：

1. 找到当前上下文中所有的参数，将形参和实参以“键值对”的形式保存在变量对象中；
2. 找到当前上下文中所有的声明式函数，将函数名和函数地址以“键值对”的形式保存在变量对象中；
3. 找到当前上下文中所有通过 `var` 声明的变量，将变量名和 `undefined` 以“键值对”的形式保存在变量对象中；

以上三件事情完成后，变量对象就创建完成了。

![image-20230705201857010](C:\Users\LENOVO\AppData\Roaming\Typora\typora-user-images\image-20230705201857010.png)

说明：如果出现形参名、函数名、变量名重名的情况，正常情况下是变量对象中后面的会覆盖前面的。但是由于 JavaScript 中的函数是一等公民，所以如果变量没有的值的时候，是无法将同名函数给覆盖掉的。

## 变量

变量存在：**作用域** 、**作用域链**、**声明提升** 现象

- **分类 ** 
- 全局变量：定义在函数外部的变量，被称为全局变量(只针对var);
  - 局部变量：定义在函数内部的变量，被称为局部变量(属于函数级局部变量);

- 注意：变量未声明定义，直接赋值使用，会向上一级(提升)查找到具有同名的对象赋值，如果始终没有，会成为全局变量;


**作用域** 

- 概念：变量作用域指变量的作用范围;

- 分类

  - 全局作用域

    - 全局变量拥有全局作用域，在当前页面都可以使用(不考虑模块化编程);

  - 局部作用域

    - 局部变量拥有局部作用域，只能在当前作用域内部使用;块级只能在块内使用，函数级在函数级内使用

    - 每个函数都有自己的作用域，各自相互独立;


**作用域链** 

- 概念

  - 作用域链决定了作用域嵌套时，变量的访问顺序(优先级);

  - 访问顺序(优先级)

    - 采用就近作用域原则

    - 本层查找，不存在依次上层查找，始终没有，程序报错;

    - 作用域链关系在函数定义时就决定了，与函数调用关系无关

      

**声明提升** 

- 概念

  - 定义变量和函数时，会发生声明提升现象; 会被提升到当前作用域顶部，可直接访问，与声明位置无关;

    ```js
    demo();// 函数被提升，所以可调用
    function demo() {    
        // 声明提升，但赋值未提升，输出undefined
        console.log(a);  
        var a=1;
        // 再次输出，此时以赋值，输出2
        console.log(a);  
    }
    ```

### 作用域底层原理GO和VO/AO(扩展)

- 引入案例

  ```js
  var a=1;
  var b = 2;
  function a() {    
      console.log('函数执行');
  }
  // console.log(a);
  a();
  ```

- 概念

  - 在JavaScript代码执行前，会自动进行全局扫描，并根据扫描的内容自动创建一系列`作用域对象`，用于存储各个作用域中可访问的变量和函数;

- 作用域对象

  - GO(Global Object，全局对象)

    - 存储全局作用域中可访问的变量和函数;

    - 创建对象后初始化GO对象:

      1. 创建this、document、window等属性;
      2. 检查全局作用域中的`声明函数`，每个函数以GO对象的一个属性形式存在，属性名为函数名称，属性值为函数对象的引用(如果函数与函数之间名称冲突时，会发生覆盖);
      3. 检查全局作用域中的var变量声明，每个var变量以一个GO对象属性形式存在，属性名为变量名称,属性值为`undifined`,当变量对应的属性名已经在GO对象中存在时，会忽略当前变量，不会创建新的属性;

    - 案例一

      ```js
      var a=1;
      var b = 2;
      function a() {    
          console.log('函数执行');
      }
      a();
      ```

    ```
      ![img](https://woniuimage.oss-cn-hangzhou.aliyuncs.com/woniunote/20220519/60f72c95b4f845de820afad997a32f99.png)
    ```

  - 案例二

    ```
    var a=1;var b = 2;var a=function(){    console.log('函数执行');}a();
    ```

    ![image-20230705201923155](C:\Users\LENOVO\AppData\Roaming\Typora\typora-user-images\image-20230705201923155.png)

- AO(Activation Object 执行对象，Variable Object 变量对象)

  - 存储当前局部作用域中可访问的变量和函数;

  - 每个作用域都拥有自己独自的AO对象;

  - 创建AO对象后初始化对象:

    1. 创建`arguments`数组对象;
    2. 检查当前作用域中的`声明函数`，每个函数以AO对象的一个属性形式存在，属性名为函数名称，属性值为函数对象的引用(如果函数与函数之间名称冲突时，会发生覆盖);
    3. 检查当前作用域中的var变量声明，每个var变量以一个AO对象属性形式存在，属性名为变量名称,属性值为`undifined`,当变量对应的属性名已经在AO对象中存在时，会忽略当前变量，不会创建新的属性;

  - 案例

    ```js
    var a=1;
    function outer(){    
          var a=2;    
             function inner(){       
                     console.log('inner');    
             }   
            var inner=3;    
            inner();
    }
    outer();
    
    ```

    ![image-20230705201936561](C:\Users\LENOVO\AppData\Roaming\Typora\typora-user-images\image-20230705201936561.png)

### 作用域链底层原理(扩展)

- 由一个GO对象和一系列AO对象组成的链式结构;

- 查找变量和函数时，会以当前代码所在的作用域对象为起点，以GO对象为终点，单向向上查找，直到查找到目标变量为止，如果查不到则程序报错;

- //执行前是vo，激活后执行时是AO

  //作用域链，所在层往上找，直到 GO ，一层层形成的链条称为作用域链

  //扫描阶段，只看声明

  //扫描是先函数，后变量,函数首次时直接赋值地址

  // 同名函数后者覆盖前者

  //变量和函数重名时，变量被忽略

  //变量被扫描到时值为undefined

  //执行阶段只看值，变量若有值，会替换掉同名函数的地址（替换函数的函数体）

​    

- 案例

  ```
  var a=1;var c=5;function outer(){    var a=2;    var b=4;    function inner(){        console.log('inner');//inner        var a=3;        console.log(a);//3  AO(inner)        console.log(b);//4  AO(inner) -> AO(outer)        console.log(c);//5  AO(inner) -> AO(outer) -> GO        console.log(d);//报错   AO(inner) -> AO(outer) -> GO ->报错    }    inner();}outer();
  
  ```

  对比

  ![image-20230705202019620](C:\Users\LENOVO\AppData\Roaming\Typora\typora-user-images\image-20230705202019620.png)![image-20230705202045011](C:\Users\LENOVO\AppData\Roaming\Typora\typora-user-images\image-20230705202045011.png)

  



## ES6之块级作用域

- ES6新增了块级作用域，用于限制变量的作用范围为代码块范围;
  - 代码块:`{}`,循环定义的变量针对循环代码块;
- for 循环圆括号中也是一个块级区域
- 作用域
  - 全局作用域
  - 局部作用域
    - 函数级作用域
    - 块级作用域
- ES6新增`let`、`const`关键字用于定义块级作用域变量;



**var、let、const区别：** 

- 相同点：都是按就近原则，都有声明提升
- 不同点：
  - var是函数级作用域，let，const是块级
  - 虽然都有声明提升，但是let，const有`暂时性死区(TDZ)` ，在此之前使用会报错
  - const 用于声明运行期间值(指针)不会发生变化，一般全大写，且声明时必须赋值。

**证明暂时性死区：** 

- typeof ，typeof一个未声明的值会undefined，而typeof 一个暂时性死区的变量会报错





## 垃圾回收机制

- 垃圾回收机制(GC,Garbage Collection)：JavaScript内置程序专门负责内存回收工作，当程序存在不再使用的内存空间(数据)时，该内置程序会自动运行，回收该空间，以便后续可继续使用该内存空间;

- 找到不再使用的内存空间，并将其释放回收;

- 常用机制 两种：

  1. 引用计数机制

     - 跟踪每个内存的引用次数，当引用次数为0时，该内存就可以被释放回收;

       ```js
       var o1=[1,2,3,4];//堆空间内容被引用一次
       var o2=o1;//堆空间内容被引用两次
       o1=null;//堆空间内容被引用一次
       o2=null;//堆空间内容被引用0次
       
       ```

  2. 标记清除机制

     - 对`无法访问`的变量打上标记，表示该变量空间可以被回收，下一次回收操作时，会对所有打上标记的空间进行回收释放;

     - 无法访问的变量:

       - 在函数中定义的局部变量，在函数执行完毕后，则为无法访问的变量;

         ```
         function demo(){    
             var a=11;   
          var arr=[12,34,56,78];
         }
         demo()
         
         ```

       - 手动给变量赋值为`null`则该变量引用的空间无法访问

         ```
         var arr=[1,2,3,4,5];
         arr=null;
         
         ```

- 提高内存利用率

  1. 尽量使用局部变量，只保留必要的全局变量，推荐使用`let`、`const`关键字定义变量和常量;
  2. 尽量不频繁的创建和销毁对象;
  3. 不使用的变量，手动赋值为null;

## ES5之严格模式

- 由于JavaScript早期设计的缺陷，语法存在不合理、不严谨的现象，为了消除该缺陷，ES5新增的严格模式。

```
function demo(){    
    a=1;    // 自动创建全局变量，不合理
    console.log(a);
}
demo();
console.log(a);

```

**分类** 

- 兼容模式:JavaScript默认模式，对语法要求不严格;
- 严格模式:对语法要求严格,可以使用`"use strict"`切换到严格模式;

**语法** 

- 在要使用严格模式的作用域最前面添加`"use strict"`指令，则该作用域中使用严格模式;

  ```
  function demo(){    "use strict"    a=1;    console.log(a);}demo();console.log(a);
  
  ```

**核心特点** 

1. 不能使用未声明的变量;

   ```
   function demo(){    
       "use strict"   
        a=1;//报错:  Uncaught ReferenceError: a is not defined
   }
   demo();
   
   ```

2. 不允许函数形参重名;

   ```
   "use strict"
   function demo(a, a) {//Uncaught SyntaxError: Duplicate parameter name    
       console.log(a);
   }
   demo(1,2);
   
   ```

3. 非全局作用域的`this`不声明指向`undefined`;

   ```js
   "use strict"
   console.log(this);
   function demo(){   
       console.log(this); 
   }
   demo( );  //报错。需要前面指定作用域，如window.   （指向调用者）
   
   ```

4. 变量名称不能使用保留字；

   - arguments、eval、implements、interface、package、private、protected、public、static、yield等

     ```
     "use strict"
     function demo(){    
         console.log(arguments);    
         var arguments=1;//报错:  Uncaught SyntaxError: Unexpected eval or arguments in strict mode    
         console.log(arguments);
     }
     demo(1,2,3,4,5);
     
     ```

**作用** 

- 增强代码的安全性，语法更合理;
- 为新版本的JavaScript做铺垫;

## ES5之IIFE

- IIFE(Immediately Invoked Function Expression)为立即执行函数表达式，是一个在定义时就立即执行的函数，执行完毕后，该函数会被回收释放，不能再被调用执行;

**语法** 

- 由两个小括号组成，第一个小括号内定义要执行的函数，第二个小括号表示调用执行该函数;

  ```
  (function(形参列表){    函数内容})(实参列表);
  
  ```

  ```
  (function(a,b){    console.log('函数执行',a,b);})(1,2);
  
  ```



## ES5之闭包

- 闭包(closure)，当函数发生嵌套时，将内部函数作为外部函数的返回值返回，则内部函数被称为外部函数的闭包;

**形成条件** 

1. 函数嵌套

   ```
   function outer(){    let num=1;    function inner(){        num++;        console.log(num);    }}
   
   ```

2. 外部函数将内部函数作为返回值返回，不必将函数返回，但要体现闭包作用，需要返回函数。

   ```js
   function outer(){    
       let num=1;    
    function inner(){        
           num++;        
           console.log(num);    
       }    
       return inner;
   }
   
   ```

   ```js
   function outer(){    
       let num=1;    
       return function(){        
           num++;        
           console.log(num);    
       };
   }
   //累计计数，上面一种有保护作用，但每次都会初始化
   var add = (function () {
       var counter = 0;
       return function () {
           counter += 1
           console.log(counter)
           return counter;
           }
   })();//add()调用,只调用函数只执行一次
   
   ```

### 作用

- 内部函数可以访问外部函数的变量，保持变量存储在内存中的同时，限制变量的可访问操作;

### 应用场景

- 函数柯里化
- 函数防抖与节流
  - 防抖与节流是一种优化高频执行的JS代码的一种手段。
  - JS的一些事件触发时，会不断调用执行绑定的监听器代码，这样会极大的浪费系统资源，降低系统性能，为了优化，可以对其调用次数进行限制。
    - 常见的触发频率较高的事件有:
      - 浏览器:resize、scorll事件；
      - 鼠标:mousemove、mouseover事件;
      - 表单:input事件
      - 键盘:keydown、keypress事件;

#### ES5之函数柯里化

- 将接收多个参数的函数，转换为接收一个参数，并返回处理余下参数的函数现象，被称为`函数柯里化`。

**案例** 

```js
//定义函数实现字符串拼接功能
//未柯里化函数
function concat(str1,str2){
    return str1+str2;
}
let re1=concat('Hello','World');
let re2=concat(re1,'!');
let re3=concat(re2,'Hello');
let re4=concat(re3,'Woniuxy');
let re5=concat(re4,'!');
console.log(re5);
//柯里化后的函数
function concatPlus(str1){
    let re=str1;
    return function(str2){
        re+=str2;
        return re;
    }
}
let concatMethod=concatPlus('Hello');
concatMethod('World');
concatMethod('!');
concatMethod('Hello');
concatMethod('Woniuxy');
let re=concatMethod('!');
console.log(re);

```



#### **防抖** 

- 概念

  - 在事件触发n秒后再执行监听器回调函数，如果期间又触发了事件，则重新计时;

- 思路

  - 利用延时器执行任务代码，如果存在延时器，取消延时器，重新创建新的延时器;

- 案例

  - 未防抖

    ```
    window.onload=function(){    let count=0;    window.onmousemove=function(){        document.querySelector('.demo').innerText=++count;    }}
    
    ```

  - 防抖

    ```js
    window.onload=function(){    
        function demo(){       
            let timer=null;        
            let count=0;        
            return function(){            
              if(timer!=null){ //存在延时器,取消延时器               
               clearTimeout(timer);           
              }            
              timer=setTimeout(function(){ 
         document.querySelector('.demo').innerText=++count;            },750);  
    	}    
         }    
      window.onmousemove=demo();
    }
    
    ```

#### **节流** 

- 概念

  - 每隔n秒，只执行一次回调函数;

- 思路

  - 利用延时器执行任务代码，如果存在延时器，则不再创建新的延时器;

- 案例

  - 未节流

    ```JS
    window.onload=function(){
        let count=0;
      window.onmousemove=function(){
            document.querySelector('.demo').innerText=++count;
      }
    }
    
    ```

  - 节流

    ```js
    window.onload = function () {
        function demo() {
            let timer = null;
            let count = 0;
            return () => {
                if (timer == null) {                //不存在延时器 
                    timer = setTimeout(() => {
        document.querySelector('.demo').innerText = ++count;
                        timer = null;
                    }, 750);
                }
            }
        }
        window.onmousemove = demo();
    }
    
    ```



## 数据驱动

- 数据交互以数据为核心，编写处理数据的业务代码(针对数据的CRUD操作，增加(Create)、检索(Retrieve)、更新(Update)和删除(Delete))，再将处理后的数据渲染到页面进行展示。
- 数据驱动=数据+业务代码(业务函数)+数据渲染(渲染函数)

### 操作

- 准备数据

- 编写业务函数

  ```js
  function search(key){
      let re=goods.filter(val=>val.name.indexOf(key)!=-1 || 
                          val.writer.indexOf(key)!=-1 || 
                          val.output.indexOf(key)!=-1);
  
      return re
  }
  
  ```

- 编写渲染函数

  ```js
  function render(data){
      let content='';
      data.forEach(val=>{
          content+=`<tr>
                                  <td>${val.id}</td>
                                  <td>${val.name}</td>
                                  <td>${val.writer}</td>
                                  <td>${val.output}</td>
                                  <td>${val.price}</td>
                                  <td>${val.num}</td>
                                  <td>
                                  删除
                                  修改
                                  </td>
                          </tr>`
      });
      // 将内容填充到页面
      document.querySelector('tbody').innerHTML=content;
  }
  
  ```

- 确定业务函数和渲染函数的调用契机

  ```js
  window.onload=function(){
      document.querySelector('#search').oninput=function(){
          let timer=null;
          return function(event){
              if(timer!=null){
                  clearTimeout(timer);
              }
              timer=setTimeout(function(){
                  //获取用户输入的内容
                  let key=event.target.value;
                  //搜索业务函数
                  let re=search(key);
                  //数据渲染
                  render(re);
              },750);
          }
      }()
  }
  
  ```





## ES6之扩展运算符

- 扩展运算符又称为Rest运算符，可以实现数组、对象、字符串在语法层面上的展开，达到一个简化语法的目的。

**语法** 

- `...数组变量名称`

  - 罗列指定数组的所有元素，元素与元素之间用逗号分隔。

    ```js
    let arr=['a','b','c'];
    console.log(arr[0],arr[1],arr[2]);
    console.log(...arr);
    //创建新数组，拥有旧数组元素的同时新增新元素
    let newArr=[...arr,'d','e'];
    console.log(...newArr);
    
    ```

- `...字符串变量名称`

  - 罗列指定字符串的所有字符，字符与字符之间使用逗号分隔。

    ```js
    let str='abcd';
    console.log(str.charAt(0),str.charAt(1),str.charAt(2),str.charAt(3));
    console.log(...str);
    //获取指定字符串的字符数组
    let charArr=[...str];
    console.log(charArr);
    
    ```

- `...对象变量名称`

  - 罗列指定对象的所有属性，属性与属性之间使用逗号分隔。

    ```js
    let obj={
        id:1,
        name:'张三',
        age:666
    };
    let newObj={...obj,gender:'男'};
    console.log(newObj);
    
    ```

## REST不定参数

- 概念：REST参数是`...`的另一个作用，能够将多个数据合并成一个数组，或者收集剩余的数据为一个数组。效果可以说是跟扩展运算符是相反的。
- 扩展运算符用于`展开`数组或对象、字符串。而REST参数则是用于形式参数中，用于将多个数据`收缩`为一个数组。
- 作用：

  - 可以替代arguments
  - 结合解构赋值

```js
ffunction demo (...a){
    console.log(a);//[1,2,3];
}
demo(1,2,3);
//...作为最后的REST参数时，会将剩余的实际参数都放在一个数组里
function demo2 (a,...b){
    console.log(a);//1
    console.log(b);//[2,3]
}
demo2(1,2,3);

//  REST参数不能用于中间的某个形式参数，会报错
function demo3 (a,...b,c){}demo3(1,2,3);//报错

```



### 注意

- 当扩展运算符出现在函数形参部分，且作为最后一个形参存在时，其作用是将实参存储到扩展运算符后面的变量名称数组中;

  ```js
  function demo(...test){    
      console.log(test);}
  demo(1,2,3,4,5,6);
  
  ```



## ES6之解构赋值

将数组、字符串、对象进行展开，并将展开的数据赋值给指定变量，以达到语法简化的目的。

**语法** 

- `[变量名称1,变量名称2,......]=目标数组变量名称`

  ```js
  let arr=['1','2','3'];
  // let [a,b,c]=arr;
  // console.log(a,b,c);
  //赋值部分元素
  // let [,,c]=arr;
  // console.log(c);
  // let [a,b]=arr;
  // console.log(a,b);
  //赋值指定变量，将余下的元素赋值指定数组
  let [a,...demo]=arr;
  console.log(a,demo);
  
  ```

- `[变量名称1,变量名称2,......]=目标字符串变量名称`

  ```js
  let str='1234567';
  //赋值全部字符
  // let[a,b,c,d,e,f,g]=str;
  // console.log(a,b,c,d,e,f,g);
  //赋值部分字符
  // let[a,b,c]=str;
  // console.log(a,b,c);
  // let[,,,,,,g]=str;
  // console.log(g);
  //赋值指定变量，并将余下的字符赋值给指定数组
  let [a,...demo]=str;
  console.log(a,demo)
  
  ```

- `{变量名称1,,变量名称2,......}=目标对象变量名称`

  - 注意

    - 使用大括号;
    - 默认变量名称使用对应属性名称;

    ```js
    let obj={
        id:1,
        name:'admin',
        age:22
    };
    //全部属性值
    // let {name,id,age}=obj;
    // console.log(name,id,age);
    //部分属性赋值
    // let {name,age}=obj;
    // console.log(name,age);
    let{gender}=obj;
    console.log(gender);
    
    ```

- `{属性名称1:变量名称1,.....}=目标对象变量名称`

  ```js
  let {name:sname}=obj;
  console.log(sname);
  
  ```

20220524-ES6之Set

## ES6之Set

set更多是检查数据(存在性)，map是提取数据

- set：一种类似于数组的数据结构，用于存储一系列数据，单列集合，称为`集`。底层是由map集合来实现,  以理解set集合是一个特殊的Map集合。set集合中每个数据都是一个键值对：其中键名和键值是一样的

**特点：**

- Set元素是唯一、不重复的;
- Set不支持索引操作，元素顺序按照插入顺序为准;
- Set的增、删效率高(数组查询效率高);

**语法：**

```js
let 变量名称=new Set(数组)
let arr=[1,2,3,4,5,6,3,7,NaN,NaN];
let mySet2=new Set(arr);

```

API：

- add(value):Set：添加元素
- has(value):boolean：判断set集合是否有指定数据
- delete(value):boolean：从当前集中删除指定元素。
- clear():viod：清空当前集中所有元素。
- size属性：获取存储的元素个数。
- forEach(callback(value,value,set){}):void：遍历

## ES6之Map



- Map：一个存储键值对结构的数据存储结构(数据容器)，为双列集合，称为`字典`。map可以和二维数组无缝切换，但对象转为二维数组需要手动转换。

**特点**：

- 键与值组成，`键`与`值`之间存在关联的映射关系;
- 键唯一、不重复、可以是任意类型数据，值 可以重复;

**语法**：

```js
let 变量名称=new Map()
let arr=[    ["id",1],    ["name","admin"],    ["age",22]];
let myMap2=new Map(arr); // arr 必须是如上二维数组

```

API

- set(key,value):Map：添加或修改指定键值
- get(key)：根据键获取值，如果键不存在，返回`undefied`。
- delete(key):boolean：删除键值对，返回是否删除成功
- has(key):boolean：判断键是否存在
- clear():void：清空当前字典中所有键值对。
- size属性：获取当前字典中存储的键值对个数;
- forEach(callback(value,key,map){}):void：遍历执行
- keys(): 获取所有键值对的键名
- for of: 可以通过for of来完成对map集合的遍历



## for-of、for-in、for循环的区别

- for-of用于遍历可迭代对象，for-in用于遍历原生对象中的属性，for循环也可以用来 遍历带下标的数组或类数组对象。
- 性能上，for循环是最好的。
- forof可以更简洁的完成遍历，但是拿不到下标。

## 异常



### 内置异常对象

- 当JavaScript的程序不能正常执行时，系统会收集异常信息，根据异常类型创建对应的异常对象，用于存储封装异常数据;默认情况下，系统会将该异常对象进行控制输出;

- 类

  - Error

    - 所有异常的父类。

  - 常用子类:

    - `ReferenceError`

      - 引用异常，引用有误时会发生该异常,比如:使用了不存在的变量时，会发生该异常;

        ```
        console.log(a);
        
        ```

    - `TypeError`

      - 类型异常，一般在实际类型与预期类型不一致时，会发生该异常;

        ```
        new 1();
        
        ```

    - `SyntaxError`

      - 语法异常,语法编写有误时，会发生该异常;

        ```
        let 2=1;
        
        ```

    - `RangeError`

      - 范围异常，一般在指定值不在有效范围时，会发生该异常;

        ```
        let arr=[];arr.length=-1;
        
        ```

    - `URIError`

      - 地址异常,一般在URI不合法时，会发生该异常;

        ```
        decodeURIComponent('%');
        
        ```

### 异常处理

- 语法

  ``` js
  try{    //可能发生异常的代码
  }catch(e){  //处理异常的代码
  }finally{    //无论try中是否发生异常，都会最后执行的代码
  }
  
  ```

  - try
    - 可能发生异常的代码。
  - catch
    - 当try中代码发生异常时，会执行的代码。
  - finally
    - 当代码执行到try-catch部分时，无论try是否发生异常，都会在try-catch执行后，最后执行的代码。

- 当try中的代码发生异常，不会影响try外面的后面部分代码执行，但是try中后面的代码不会执行。

- 异常信息

  - `name`:异常类名。
  - `message`:异常信息(补充说明)。
  - `stack`:异常的执行栈。

### 异常抛出

- 关键字

  - `throw`

- 语法

  - `throw 异常对象`

- 案例

  ```js
  //工具制造者
  function sum(){
      let re=0;
      for(let n of arguments){
          if((typeof n) != "number"){
              throw new TypeError('每个累加的实参必须为number类型!');
          }
          // console.log(typeof n);
          re+=n;
      }
      return re;
  }
  //工具使用者
  let arr=[1,2,3,4,5];
  console.log(sum(arr));
  // console.log(sum(1,2,3,4,5));
  
  ```

### 自定义异常

- JavaScript提供的内置异常有限，不能表示所有的异常情况，故增加自定义异常模块，让程序编写更灵活，适应于各种编程需求。

- 语法

  - 自定义异常类继承`Error`类。

    ```js
    class DemoError extends Error{
        constructor(mes){
            super(mes);
            this.name='DemoError';
        }
    }
    let d=new DemoError('异常提示信息');
    console.log(d.name);
    console.log(d.message);
    throw d;
    
    ```



## new关键字作用

1. 创建对象的内存空间;
2. 设置对象的内置属性`__proto__`值为构造函数的`prototype`值;
3. 改变构造函数中的`this`指向为当前对象;
4. 执行构造函数的内部代码;
5. 如果构造函数返回非空对象，则返回该对象，否则返回刚创建的对象;



## API-this指向改变-函数变量借用

- 作用:

  1. 借用函数执行;
  2. 改变函数的执行对象(改变函数内部的this指向);

- 函数

  - ```
    call(obj,arg0,arg1......)
    
    ```

    - 将当前函数作为`obj`对象的函数调用，并传入函数实参；

  - ```
    apply(obj,[arg0,arg1......])
    
    ```

    - 将当前函数作为`obj`对象的函数调用，并以数组的形式传入函数实参；

  - ```
    bind(obj)
    
    ```

    - 改变this指向后，不会马上调用执行该函数，而是返回改变了this指向的新函数对象;

- call、apply、bind三者联系与区别

  - 联系:
    - 都可以改变函数的`this`指向;
  - 区别:
    - call和apply改变this指向后，立即执行该函数,bind改变this指向后，返回新的函数对象，不会立即执行;
    - call和bind实际参数都是独立传入，apply实际参数是以数组元素的形式传入;

- 案例

  ```js
  class Demo{
      sum(a,b){
          console.log(this);
          return a+b;
      }
  }
  class Test{
      sub(a,b){
          return a-b;
      }
  }
  let demo=new Demo();
  console.log(demo.sum(3,2));
  //创建要借用函数的对象
  let test=new Test();
  //call:test对象借用demo对象中的sum函数并执行
  console.log(demo.sum.call(test,5,4));
  //apply:test对象借用demo对象中的sum函数并执行
  let arr=[5,4];
  console.log(demo.sum.apply(test,arr));
  //bind:test对象借用demo对象中的sum函数，获取到新函数对象
  let newMethod=demo.sum.bind(test);
  console.log(newMethod);
  //执行新函数对象
  console.log(newMethod(5,3));
  
  ```



## script 脚本

### 标签

CDN静态库，引入时的属性：

- `crossorigin`: 跨域检查, `（默认值不检查）anonymous` | `use-credentials`
- `integrity` ：**避免由【托管在CDN的资源被篡改】而引入的XSS 风险**,

audio、 img、link、script 和 video 都可以设置 crossorigin属性

`integrity`属性可以用在`script` 或者 `link`元素上, 用来开启浏览器对获取的资源进行检查，它允许你为`script`或者`link`提供一个hash，用来进行验签，检验加载的JavaScript文件或者CSS问卷是否完整。



### js延迟加载

等页面加载完成之后再加载 JavaScript 文件。 js 延迟加载有助于提高页面加载速度

**实现：** 

- **defer 属性：** 给 js 脚本添加 defer 属性，这个属性会让脚本的加载与文档的解析同步解析，然后在文档解析完成后再执行这个脚本文件，这样的话就能使页面的渲染不被阻塞。多个设置了 defer 属性的脚本按规范来说最后是顺序执行的，但是在一些浏览器中可能不是这样。

  

  引入外部JS文件时，加上`defer="defer"`属性表示异步方式加载目标JS文件。

  ```js
  <script defer="defer" src="../js/index.js"></script>
  
  ```

  

- **async 属性：** 给 js 脚本添加 async 属性，这个属性会使脚本异步加载，不会阻塞页面的解析过程，但是当脚本加载完成后立即执行 js 脚本，这个时候如果文档没有解析完成的话同样会阻塞。多个 async 属性的脚本的执行顺序是不可预测的，一般不会按照代码的顺序依次执行。

- **动态创建 DOM 方式：** 动态创建 DOM 标签的方式，可以对文档的加载事件进行监听，当文档加载完成后再动态的创建 script 标签来引入 js 脚本。

- **使用 setTimeout 延迟方法：** 设置一个定时器来延迟加载js脚本文件

- **让 JS 最后加载：** 将 js 脚本放在文档的底部，来使 js 脚本尽可能的在最后来加载执行。



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







