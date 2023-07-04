230404

简易的阻尼滚动条插件

```js
// 直接添加到html中就可以看到效果

var speed = 0; // 速度(不可改)
var s____ = 6; // 速度(可配置)
var max__ = 48; // 最大速度：最好是s的倍数(可配置)
var direction = 0; // 方向(不可改)

$(document).on("mousewheel", function (e) {
  e.preventDefault(); // 阻止默认滚动
  var t1,
    t2 = -1,
    delta = e.originalEvent.wheelDeltaY || e.originalEvent.wheelDelta; // for IE
  if (speed === 0) {
    t1 = setTimeout(function () {
      window.scrollBy(0, speed);
      if (speed !== 0) {
        setTimeout(arguments.callee, 1);
      } else {
        clearTimeout(t1);
      }
    }, 1);
    // 缓冲(阻尼实现)
    t2 = setTimeout(function () {
      speed > 0 ? speed-- : speed++;
      if (speed !== 0) {
        setTimeout(arguments.callee, 1);
      } else {
        clearTimeout(t2);
      }
    }, 1);
  }
  // 刷新speed的值，实现加速，转向等
  if (delta < 0) {
    if (direction > 0) {
      speed = 0;
      direction = delta;
      return;
    }
    if (speed <= max__) speed += s____;
    else {
      speed = max__;
    }
  } else {
    if (direction < 0) {
      speed = 0;
      direction = delta;
      return;
    }
    if (speed >= -max__) speed -= s____;
    else {
      speed = -max__;
    }
  }
});

```



230106
- with（obj）{a=1}关键字
- 作用1 改变作用域，with模块中优先访问obj.a,将作用域指向了obj,在内部调用时，a就是值obj.a，当然，前提obj有a属性
- 存在严重的弊端，弊端支出不在于，使用a前，需要去判断a是否在obj上的问题，而在于js编译，无法判断a的作用域到底是什么，从而放弃优化，执行耗时百倍左右
- js压缩工具也无法压缩这部分代码
- 语意不明，存在潜在bug
```js
function foo(obj) {
  with (obj) {a = 2;}
}
function foo1(obj) {obj.a=2;}
var o1 = {a: 3};
var o2 = {b: 3};

foo(o1);
console.log(o1.a); // 2 
 
foo(o2);
console.log( o2.a ); // undefined,o2上不存在a，则创建了全局a变量赋值为2，而foo1则不存在此类情况 foo1(o2)//2
console.log( a ); // 2

    ({
        x: 10,
        foo: function () {
            function bar() {
                console.log(x);//undefined
                console.log(y);//30
                console.log(this.x);//20  
                console.log(this.y);//undefined
            }
            with (this) {
                var x = 20;
                var y = 30;
                bar.call(this);
            }
            
        }
    }).foo();
    
    // 假设块对象为a
    ({
        x: 10,//改为20
        foo: function () {
            // var x;
            // var y;//改为30
            function bar() {
                console.log(x);//如上，定义了x，但是没有值，undefined
                console.log(y);//如上 30
                console.log(this.x);//改变this指向a，输出a.x = 20  
                console.log(this.y);//a.y,不存在为 undefined
            }
            with (this) { //this就是a
                var x = 20; //更改a.x=20
                var y = 30; //a.y没有，本层查找y，赋值为30
                bar.call(this);//a对象
            }
        }
    }).foo();

```



230103

- Missing radix parameter 缺少一个基数根
- 如：:parseint的第二个参数没有指定，ESLint检查javascript代码语法时，压缩工具对语法的严谨性要求比较高，从而产生的错误，第二参数有四种:2、8、10、16进制，加上即可


221230
- npm i  : Could not install from xxx as it does not contain a package.json file 解决方法

- 先 npm install -g，完成后在npm i，即可

221229
- String()和toString()的区别和应用,都是将其他类型的变量转换为字符串类型。

区别是：

toString()无法转换null和undefined
```js
let a;
let b=null;
a.toString();//Uncaught TypeError: Cannot read property 'toString' of undefined
b.toString(); //Uncaught TypeError: Cannot read property 'toString' of null
String(a); //"undefined"
String(b);//"null"
```

- slice()、 substring()和substr()的区别，substr（start, start+length)）将被弃用，前两个都是[startIndex，endIndex]
```js
//参数为正
    var str = 'hello world';
    console.log(str.slice(3)); // lo world
    console.log(str.substring(3));// lo world
    console.log(str.substr(3));// lo world

    console.log(str.slice(3, 7)); // lo w
    console.log(str.substring(3, 7)); // lo w
    console.log(str.substr(3, 7));//lo worl

//参数为负
  var str = 'hello world';
  console.log(str.slice(-3)); // rld
  console.log(str.substring(-3));// hello world
  console.log(str.substr(-3));// rld

  console.log(str.slice(3, -4)); // lo w
  console.log(str.substring(3, -4)); // hel
  console.log(str.substr(3, -4));// ""(空字符串)

//元算过程转换如下：
slice(-3) => slice(8)
substring(-3) => substring(0)
substr(-3) => substr(8)
slice(3, -4) => slice(3, 7)
substring(3, -4) => substring(3, 0) =>substring(0, 3)
substr(3, -4) => substr(3, 0)

```





221213
移除示例？，看不懂
const reg=/\x20*(\/\/|{\/\*) EXAMPLE - (BEFORE|AFTER) (\/\/|\*\/})\x20*(\r\n|\r|\n)?/g

- data.reolace(reg,'')



221123

ad:boolean?yes：no；

简化

ad(yes) || no，

el：
```js
//pointer-events语法：Opera在SVG中支持。 但是 HTML中 不支持

pointer-events：auto | none | visiblepainted(同auto) | visiblefill | visiblestroke | visible | painted | fill | stroke | all
默认值： auto，具有继承性，
对于浏览器来说，只有auto和none两个值可用，其它的几个是针对SVG的(本身这个属性就来自于SVG，)
//https://developer.mozilla.org/zh-CN/docs/Web/CSS/pointer-events

/* Global values */
pointer-events: inherit;
pointer-events: initial;
pointer-events: unset;
pointer-events取值：


pointer-events: none;时可以穿透定位上层的元素
pointer-events作用（值为none时）：

提交页面，提交按钮点击后，添加这个样式属性（style="pointer-events"），来防止重复提交
阻止用户的点击动作产生任何效果，让链接不能点击
让鼠标点击穿透上方的 div
阻止缺省鼠标指针的显示
阻止CSS里的 hover 和 active 状态的变化触发事件
阻止JavaScript点击动作触发的事件


none——元素永远不会成为鼠标事件的 target。但是，当其后代元素的 pointer-events 属性指定其他值时，鼠标事件可以指向后代元素，在这种情况下，鼠标事件将在捕获或冒泡阶段触发父元素的事件侦听器。
利用子元素，可以实现禁用父元素，定义子元素的hover等，
```


