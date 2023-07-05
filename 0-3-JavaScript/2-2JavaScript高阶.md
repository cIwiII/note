

# 内存空间

**概念**

- 每个在浏览器中运行的网页，都会占用一定的内存空间，用于存储需要使用的运行数据;
- 一个性能良好的网页内存占用不应过大，一般不超过100M;
- 一个标签页在32位系统的最大内存为0.7G左右，在64位系统是1.4g左右。

## 内存模型

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
var num;//分配栈空间var arr;//分配栈空间num=3;//栈空间数据写入arr=new Array();//分配堆空间，并将堆引用地址数据写入到arr栈空间中
```

## 内存生命周期

1. 内存分配

   - 在声明变量、函数、对象、数组时，系统会自动分配内存空间;

     ```
     var num;//只分配栈空间var arr=new Array();//分配栈和堆
     ```

2. 内存使用

   - 内存的读、写操作,获取变量值、赋值操作；

     ```
     num=3;console.log(num);
     ```

3. 内存回收

   - 当内存(变量)不再被使用时，会由垃圾回收机制自动回收;

## 简单数据类型的内存分配

- 内存分配

  ```
  var num1,num2;
  ```

- 内存使用

  ```
  num1=6;//内存写num2=8;//内存写console.log(num1+num2);//内存读操作
  ```

- 内存回收

  - 不定时回收，每次回收操作时，都会阻碍程序的运行
  

## 引用数据类型的内存分配

- 内存分配

  ```
  var arr=new Array();//分配栈和堆
  ```

- 内存使用

  ```
  arr[0]='a';//堆的写入arr[1]='b';//堆的写入console.log(arr[1]);//堆的读出
  ```

- 内存回收


## 值传递

- JavaScript在进行函数调用时，是将实参的值传递给形参;

  ```
  var num=2;function demo(v){}demo(num);
  ```

```
var arr=[2];function demo(v){}demo(arr);
```



```
var num=1;function demo(v){//var v    v=2;}demo(num);console.log(num);//1
```

```
var obj={num:1};//var obj=new Object(); obj.num=1;function demo(v){//var v    v.num=2;}demo(obj);console.log(obj.num);//2
```

```
var obj={num:1};function demo(v){    v={};//v=new Object();    v.num=2;}demo(obj);console.log(obj.num);//1
```

## 执行上下文

执行上下文，指的就是代码的运行环境。

### 一、分类

执行上下文分为三类：

1. 全局上下文：在代码运行之前，会自动产生一个全局上下文；
2. 局部上下文：在函数被调用时，会产生一个局部上下文；
3. `eval()` 上下文：在 `eval()` 方法被调用时，会产生一个 `eval()` 上下文（仅作了解）；

### 二、执行上下文栈

在代码运行过程中，每一次产生的执行上下文，都会保存到内存的栈空间中，这个保存的过程，我们叫做“压栈”。

当一个函数调用完成时，该函数对应的执行上下文，会从栈空间中销毁，这个销毁的过程，我们叫做“出栈”。

执行上下文栈，采用的压栈和出栈的顺序是：先进后出，后进先出。

对于执行上下文栈来说，只最上面的上下文是处于活动状态的，而只有活动状态的上下文，才能运行其内部的代码。

### 三、总结

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

-  //执行前是vo，激活后执行时是AO

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
  
  



# ES6之块级作用域

## 引入案例

```js
var i=10;
var increment=10;
for(var i=1;i<=10;i++){
    increment++;
}
console.log(increment);//20
i+=increment;
console.log(i);//31



let i=10;
var increment=10;
for(let i=1;i<=10;i++){
    increment++;
}
console.log(increment);//20
i+=increment;
console.log(i);//30
```

## 概念

- ES6新增了块级作用域，用于限制变量的作用范围为代码块范围;
  - 代码块:`{}`,循环定义的变量针对循环代码块;
- 作用域
  - 全局作用域
  - 局部作用域
    - 函数级作用域
    - 块级作用域
- ES6新增`let`、`const`关键字用于定义块级作用域变量;

## let

- `let`用于定义块级变量的关键字，与`var`类似;

- 语法:

  - `let 变量名称`

    ```
    let num;
    ```

- `let`与`var`区别

  - 在定义局部变量时，`let`定义的变量是针对当前就近的块级作用域，`var`针对就近的函数级作用域;

    ```js
    function demo() {
        {
            var a = 1;//demo
            let b = 2;
            console.log(a);//1
            console.log(b);//2
        }
        console.log(a);//1
        console.log(b);//报错
    }
    demo();
    ```

  - `let`在声明变量前不能使用，此现象被称为`暂时性死区(TDZ)`，在`暂时性死区`期间使用变量，程序会报错,而`var`可以使用，不会报错;

    ```
    console.log(a);let a=1;console.log(aa);let aa=2;
    ```

  - `let`在同一个作用域中定义变量名冲突时，程序会报错，而`var`不会程序报错，会忽略后面声明的同名变量;

    ```
    var a=1;var a=2;let a=1;let a=2;
    ```

- 建议使用`let`;

## const

- 概念

  - ES6新增用于定义常量的关键字;
  - 常量:在程序运行期间，值不会发生变化的量;

- 语法

  - `const 常量名称`

    - 常量名一般全大写;
    - 只能在声明时赋初始值;

    ```
    const PI=3.1415926;const TELREG=/^1[3-9]\d{9}$/;
    ```

- `const`与`let`区别

  - `const`在声明常量时必须赋初始化值，否则程序报错,`let`不会;

    ```
    const PI;//编译器报错PI=3.14;
    ```

  - `const`常量值不能被修改,而`let`不会;

    ```
    const PI = 3.1415926;PI=3.14;//程序报错
    ```

- 注意

  ```
  const obj={num:1};// obj.num=2;obj={};
  ```

- 程序运行期间，值会发生变化时，使用`let`，否则，使用`const`;

## var、let与const区别

- let与const为ES6新增关键字，定义的变量或常量的作用域为块级作用域,存在`暂时性死区`，不能体现声明提升现象，同一个作用域中不能存在同名变量或常量,var定义的变量为作用域为函数级作用域，能体现声明提升现象，同一个作用域中可以存在同名变量;
- let与var用于定义变量，可以先声明再赋值，值可以改变，const用于定义常量，必须在声明时赋初始值，且值不能改变;



20220520-垃圾回收机制

# 垃圾回收机制(扩展)

## 概念

- JavaScript内置程序专门负责内存回收工作，当程序存在不再使用的内存空间(数据)时，该内置程序会自动运行，回收该空间，以便后续可继续使用该内存空间;

## 垃圾回收机制(GC,Garbage Collection)

- 找到不再使用的内存空间，并将其释放回收;

- 常用机制

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
         function demo(){    var a=11;    var arr=[12,34,56,78];}demo()
         ```

       - 手动给变量赋值为`null`则该变量引用的空间无法访问

         ```
         var arr=[1,2,3,4,5];arr=null;
         ```

- 提高内存利用率

  1. 尽量使用局部变量，只保留必要的全局变量，推荐使用`let`、`const`关键字定义变量和常量;
  2. 尽量不频繁的创建和销毁对象;
  3. 不使用的变量，手动赋值为null;

# ES5之严格模式

## 引入案例

```
function demo(){    a=1;    console.log(a);}demo();console.log(a);
```

## 概念

- 由于JavaScript早期设计的缺陷，语法存在不合理、不严谨的现象，为了消除该缺陷，ES5新增的严格模式。

## 分类

- 兼容模式:JavaScript默认模式，对语法要求不严格;
- 严格模式:对语法要求严格,可以使用`"use strict"`切换到严格模式;

## 语法

- 在要使用严格模式的作用域最前面添加`"use strict"`指令，则该作用域中使用严格模式;

  ```
  function demo(){    "use strict"    a=1;    console.log(a);}demo();console.log(a);
  ```

## 核心特点

1. 不能使用未声明的变量;

   ```
   function demo(){    "use strict"    a=1;//报错:  Uncaught ReferenceError: a is not defined}demo();
   ```

2. 不允许函数形参重名;

   ```
   "use strict"function demo(a, a) {//Uncaught SyntaxError: Duplicate parameter name    console.log(a);}demo(1,2);
   ```

3. 非全局作用域的`this`不声明指向`undefined`;

   ```js
   "use strict"
   console.log(this);
   function demo(){   
       console.log(this);  }
   demo( );  //报错。需要前面指定作用域，如window.   （指向调用者）
   ```

4. 变量名称不能使用保留字；

   - arguments、eval、implements、interface、package、private、protected、public、static、yield等

     ```
     "use strict"function demo(){    console.log(arguments);    var arguments=1;//报错:  Uncaught SyntaxError: Unexpected eval or arguments in strict mode    console.log(arguments);}demo(1,2,3,4,5);
     ```

## 作用

- 增强代码的安全性，语法更合理;
- 为新版本的JavaScript做铺垫;

# ES5之IIFE

## 概念

- IIFE(Immediately Invoked Function Expression)为立即执行函数表达式，是一个在定义时就立即执行的函数，执行完毕后，该函数会被回收释放，不能再被调用执行;

## 语法

- 由两个小括号组成，第一个小括号内定义要执行的函数，第二个小括号表示调用执行该函数;

  ```
  (function(形参列表){    函数内容})(实参列表);
  ```

  ```
  (function(a,b){    console.log('函数执行',a,b);})(1,2);
  ```



# ES5之闭包



## 概念

- 闭包(closure)，当函数发生嵌套时，将内部函数作为外部函数的返回值返回，则内部函数被称为外部函数的闭包;

## 形成条件

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

## 作用

- 内部函数可以访问外部函数的变量，保持变量存储在内存中的同时，限制变量的可访问操作;

## 应用场景

- 函数柯里化
- 函数防抖与节流

# ES5之函数柯里化

## 概念

- 将接收多个参数的函数，转换为接收一个参数，并返回处理余下参数的函数现象，被称为`函数柯里化`。

## 案例

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



# 函数防抖与节流

## 概念

- 防抖与节流是一种优化高频执行的JS代码的一种手段。
- JS的一些事件触发时，会不断调用执行绑定的监听器代码，这样会极大的浪费系统资源，降低系统性能，为了优化，可以对其调用次数进行限制。
  - 常见的触发频率较高的事件有:
    - 浏览器:resize、scorll事件；
    - 鼠标:mousemove、mouseover事件;
    - 表单:input事件
    - 键盘:keydown、keypress事件;

## 防抖

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

## 节流

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



# 数据驱动

## 概念

- 数据交互以数据为核心，编写处理数据的业务代码(针对数据的CRUD操作，增加(Create)、检索(Retrieve)、更新(Update)和删除(Delete))，再将处理后的数据渲染到页面进行展示。
- 数据驱动=数据+业务代码(业务函数)+数据渲染(渲染函数)

## 操作

- 准备数据

  ```
  let goods = [    {     id: 1,    name: '企业IT架构转型之道 阿里巴巴中台战略思想与架构实战',    output: '机械工业出版社',    writer: '钟华 ',     price: 99,     num: 98    },    {      id: 2,     name: 'IT运维之道 第2版 讲述IT服务标准 架构 体系和方法 IT软件开发技能技巧培训 学会一套成熟 规范 有效的IT运维方法 系统运维管理书籍',  output: '人民邮电出版社',       writer: '李 鹏 ',    price: 48,    num: 95   },    {   id: 3,   name: 'IT大趋势2017―2021年 全球信息技术导航图',    output: '电子工业出版社',    writer: '人本某作家',  price: '62',   num: '97'  },    {   id: 4,    name: '“互联网+”时代的IT战略、架构与治理 传统企业信息化转型的顶层设计 CEO和CIO必备手边书、以“顶层设计”思维指导企业信息化转型、运用“企业架构”规划方法实现企业信息化战略规划落地',    output: '机械工业出版社',        writer: '刘继承 ',    price: 76,    num: 97  },   {  id: 5,  name: 'IT服务连续性实现指南 数据中心业务连续性从业人员必读',  output: '清华大学出版社',    writer: '姚强 ',     price: '32', num: '349'    },    {  id: 6,   name: 'IT真相：打通IT与商务的通路 IT行业企业管理必备，让IT与商务衔接更加紧密！ 以苹果公司为例，深刻解读IT与商务的全新商业模式！',  output: '广东人民出版社',   writer: '（日）楠真 ',     price: 32,   num: 168  },    {   id: 7,   name: 'IT项目经理成长手记 第2版 IT项目管理口碑畅销书改版！',   output: '机械工业出版社',    writer: '潘东 韩秋泉 ',   price: 55,   num: 228   },    {   id: 8,   name: 'IT风险',    output: '商务印书馆',   writer: '（美）韦斯特曼，亨特 著，沈峰 ',     price: 23,   num: 112  },    {     id: 9,  name: 'CIO修炼之道 用IT为企业赋能 首席信息官信息主管信息化 IT 互联网+ 企业管理 数字转型 26位一线企业信息化工作者的工作笔记',    output: '人民邮电出版社',  writer: '杨彦武，景保玉 ',    price: 65,    num: 1042  },    {    id: 10,   name: 'IT技术基础（高职）',    output: '西安电子科技大学出版社',    writer: '王华兵，邓文达，付朝晖 编 ',   price: 38,    num: 498    }];
  ```

- 编写业务函数

  ```js
  function search(key){
      //根据用户输入的关键词，匹配商品的名称、作者、出版社，展示匹配到的商品数据
      // goods.filter(function(val){
      //     return val.name.indexOf(key)!=-1 || val.writer.indexOf(key)!=-1 || val.output.indexOf(key)!=-1
      // })
      let re=goods.filter(val=>val.name.indexOf(key)!=-1 || val.writer.indexOf(key)!=-1 || val.output.indexOf(key)!=-1);
      // console.log(re);
      return re;
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





# ES6之扩展运算符

## 概念

- 扩展运算符又称为Rest运算符，可以实现数组、对象、字符串在语法层面上的展开，达到一个简化语法的目的。

## 语法

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



## 注意

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

# 异常



## 内置异常对象

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

## 异常处理

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

## 异常抛出

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

## 自定义异常

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

20220526-ES5之面向对象

## ES5之面向对象

### 类

- ES5定义类通过函数实现，当前函数是否作为构造函数，取决于其是否使用`new`关键字调用;

  ```js
  function 类名(构造函数形参){    //定义属性    
      this.属性名称=值;    ......    //定义行为    
    this.函数名称=function(形参列表){        函数内容    }   
          ......
  }
  ```
  
  ```js
  function Human(name,age,gender){    //定义属性    //window.name    
      this.name=name;    
      this.age=age;    
      this.gender=gender;    
      //定义行为    
      this.eat=function(foodName){        
          console.log(`${this.name}正在吃${foodName}~`);
      }    
      this.sleep=function(){        
          console.log(`${this.name}正在睡觉~`);   
      }
  }
  ```

### 对象

```js
let 对象名称=new 类名(构造函数实参列表);
let zhang=new Human('小明',22,'男');
```

### 原型

#### 1、prototype

JavaScript 中每一个函数身上都有一个 `prototype` 的属性，称为“原型” 或“原型对象”。

- 默认的原型对象为Object对象。

- `prototype`属性值可以被修改。

```js
function Person() { }
console.log(Person.prototype);
```

#### 2、__proto__

JavaScript 中每一个对象身上都有一个 `__proto__` 的属性，称为“隐式原型”。

```js
function Person() {}
const p = new Person();
console.log(p.__proto__);
```

#### 3、原型和隐式原型

**每一个对象的隐式原型，都指向创建该对象的函数的原型。**

![image-20230705202232974](C:\Users\LENOVO\AppData\Roaming\Typora\typora-user-images\image-20230705202232974.png)

```js
function Animal(demo){
    this.demo=demo;
    this.test=function(){
        console.log('test');
    }
}
function Human(name,age,gender){
    //定义属性
    this.name=name;
    this.age=age;
    this.gender=gender;
    //定义行为
    this.eat=function(foodName){
        console.log(`${this.name}正在吃${foodName}~`);
    }
    this.sleep=function(){
        console.log(`${this.name}正在睡觉~`);
    }
}
let a=new Animal('测试');
//将Human函数的原型对象由Object对象更改为了a对象
Human.prototype=a;
```

- 通过该函数创建的对象，可以使用原型对象的属性和行为(函数)。

  ```js
  let zhang=new Human('张家铭',18,'男');
  console.log(zhang.demo);
  zhang.test();
  ```

- 案例(ES5实现ES6类定义效果)

  - ES6

    ```js
    class Human{    
        constructor(name, age, gender) {        
            this.name = name;       
            this.age = age;        
            this.gender = gender;
        }    
        eat(foodName) {        
            console.log(`${this.name}正在吃${foodName}~`);   
        }    
        sleep() {        
            console.log(`${this.name}正在睡觉~`);    
        }
    }
    let zhang = new Human('大明', 18, '男');
    console.log(zhang);
    ```

  - ES5

    ```js
    function Human(name, age, gender) {    //定义属性    
        this.name = name;    
        this.age = age;    
        this.gender = gender;
    }
    Human.prototype.eat = function (foodName) {    
        console.log(`${this.name}正在吃${foodName}~`);
    };
    Human.prototype.sleep = function () {    
        console.log(`${this.name}正在睡觉~`);
    };
    let zhang = new Human('大明', 18, '男');
    console.log(zhang);
    ```

- 补充

  - 函数的原型对象中有一个`constructor`属性引用了当前函数对象;

  - 通过函数创建的对象中存在`__proto__`([[Prototype]])属性，该属性引用了该函数的原型对象;

    ![image-20230705202249723](C:\Users\LENOVO\AppData\Roaming\Typora\typora-user-images\image-20230705202249723.png)

## new关键字作用

1. 创建对象的内存空间;
2. 设置对象的内置属性`__proto__`值为构造函数的`prototype`值;
3. 改变构造函数中的`this`指向为当前对象;
4. 执行构造函数的内部代码;
5. 如果构造函数返回非空对象，则返回该对象，否则返回刚创建的对象;

## 原型链

- 每个对象都拥有自己的原型，而原型又是一个对象，原型对象又拥有自己的原型对象，直到Object为止，这一系列对象形成了链式结构，被称为`原型链`。

- 作用

  - 对象的属性和函数访问顺序由原型链决定：
    - 优先查找当前对象中是否存在指定属性和函数，如果存在，则直接使用，否则，将查找目标切换为其原型对象;
    - 如果存在，则直接使用，否则，将查找目标切换为原型对象的原型对象，以此类推;
    - 直到Object对象为止，如果Object都不存在指定属性和函数，则属性结果为`undefined`，函数结果为程序报错(`TypeError: 指定对象.指定函数 is not a function`);

- 案例1

  ```js
  function A(){    
      this.a=1;}
  function B(){    
      this.b=2;}
  B.prototype=new A();
  function C() {    
      this.c=3;}
  C.prototype=new B();
  let c=new C();
  //获取自己的属性
  console.log(c.c);
  //获取原型的b属性
  console.log(c.b);
  //获取原型的原型的属性
  console.log(c.a);
  //不存在的函数
  console.log(c.d());
  //不存在的属性
  console.log(c.d);
  ```

案例2

```js
var F = function () {};
Object.prototype.a = function () {
    console.log('a');
};
Function.prototype.b = function () {
    console.log('b');
};
var f = new F();
f.a();
f.b(); // 报错，Function.prototype是Function才能用，但f是new出来一个对象，对象就有Object的方法
F.a(); // F => Function.prototype => Object.prototype,所以有a
F.b(); // F => Function.prototype，所以有b，F 是一个函数，它就有Function的方法，
/* 
      f => Object.prototype
      Object => Function.prototype
      Object != Object.prototype
      */
```



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

## 组合继承(原型链+call)

```
function Super(a){    this.a=a;}
```

1. 子类构造函数盗用父类构造函数并执行;

   ```
   function Son(a,b){    //借用Super构造函数执行    Super.call(this,a);    this.b=b;}
   ```

2. 设置子类原型对象为父类对象;

   ```
   Son.prototype=new Super(1);
   ```

3. 设置子类原型对象的`constructor`属性值为子类构造函数;

   ```
   Son.prototype.constructor=Son;
   ```

## instanceof

- 背景

  - 判断类型时，`typeof`只能判断基本数据类型和object，不能判断object具体类型;

- 作用

  - 判断某个对象是否是某个类或其子类的对象;

- 语法:

  - 如果目标对象是目标类或其子类的对象，则整个表达式结果为true，否则结果为false;

    ```
    目标对象 instanceof 目标类名称
    ```

    ``` js
    class A{}
    class B extends A{}
    let v=new B();
    console.log(v instanceof A);
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

## 【完】









