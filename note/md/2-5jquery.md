## jquery

-   对常用的JS操作进行简化封装，是一个JS的代码库。
-   是一个快速、简洁的JavaScript框架，一个优秀的JavaScript代码库。
-   设计宗旨`Write Less,Do more!`，写更少的代码，做更多的事情。
-   /*   var jq=jQuery.noConflict()；自定义$符号为jq， */
-   比如
    -   JS
        -   `document.querySelector('#id值')`
    -   jQuery
        -   `$('#id值')`

**环境搭建** 

1.  下载jQuery的代码库。  最新版本为  3.6.0

    ```
    https://jquery.com/download/
    ```

    -   生产版(production、压缩版)   `jquery-3.6.0.min.js`     代码可读性较低，空间占用小，解析效率高;
-   开发版(development)    `jquery-3.6.0.js`      代码可读性较高，空间占用更大，解析效率较低;
    
2.  在要使用jQuery语法的页面上引入库

**入门语法** 

-   `$`  jQuery   的简写

    -   ```js
        $('选择器语法')   $('.myDiv')
        ```

    -   ```js
    jQuery('选择器语法')    jQuery('.myDiv')
        ```
    
-   入口函数

    -   `$(function(){代码})`     在页面加载完成后，自动调用执行回调函数代码

        ```js
$(function(){    //入口函数:代码会在页面加载完成时执行   
            console.log(document.querySelector('.myDiv').innerText) ; } )
        ```
    
- css控制

  - 设置css值

    -   ```js
        目标元素的jQuery对象.css('css属性名称','css属性值')
        $('.myDiv').css('color','red');
        ```
    ```
        
    ```

  -   获取css值

      -   ```js
          var 变量名称=目标元素的jQuery对象.css('css属性名称')
          var color=$('.myDiv').css('color');
          ```
  ```
          
  ```

-   JS对象与jQuery对象间转换

    -   JS对象转jQuery对象 加$()：  `$(JS对象)`     `$(document.querySelector('.myDiv'))`
    -   jQuery对象转JS对象加get(0) ：  `jQuery对象.get(0)`       `$('.myDiv').get(0)`  

20220429-jQuery操作DOM

## jQuery-DOM

### 操作内容

/ *  text()、html() 以及 val() 的回调函数
上面的三个 jQuery 方法：text()、html() 以及 val()，同样拥有回调函数。回调函数由两个参数：
被选元素列表中当前元素的下标，以及原始（旧的）值。然后以函数新值返回您希望使用的字符串。
attr() 的回调函数
参数同内容函数一致  * /看不懂 

###### 表单元素内容

- 赋值

  -   JS   `JS的元素对象.value='值'`

  -   jQuery    `jQuery的元素对象.val('值')`

      ```js
  var $accInp=$('[name="acc"]');
      //赋值
      $accInp.val('888');
      ```

-   取值

    -   JS

        -   `var 变量名称=JS的元素对象.value`

    -   jQuery

        -   `var 变量名称=jQuery的元素对象.val()`

            ```js
            var $accInp=$('[name="acc"]');
            //取值var 
            accVal=$accInp.val();
            ```

###### 普通元素内容

- html内容

  - 赋值

    -   JS

        -   `JS的元素对象.innerHTML='值'`

    -   jQuery

        -   `jQuery的元素对象.html('值')`

            ```js
            var $myDiv=$('.myDiv');
            //赋值
            $myDiv.html('<h1>H1</h1>');
            ```

  -   取值

      -   JS

          -   `var 变量名称=JS的元素对象.innerHTML`

      -   jQuery

          -   `var 变量名称=jQuery的元素对象.html()`

              ```js
              var $myDiv=$('.myDiv');
              //取值var 
              myDivContent=$myDiv.html();
              console.log(myDivContent);
              ```

-   text内容

    -   赋值

        -   JS

            -   `JS的元素对象.innerText='值'`

        -   jQuery

            -   `jQuery的元素对象.text('值')`

                ```
                var $myDiv=$('.myDiv');//赋值$myDiv.text('<h1>H1</h1>');
                ```

    -   取值

        -   JS

            -   `var 变量名称=JS的元素对象.innerText`

        -   jQuery

            -   `var 变量名称=jQuery的元素对象.text()`

                ```
                var $myDiv=$('.myDiv');//取值var myDivContent=$myDiv.text();
                ```

### 操作属性

###### 操作自带属性`prop()`

- 赋值

  -   `jQuery的元素对象.prop('属性名称','属性值')`

      ```js
      //找到目标元素对象
      var $a=$('a');
      //属性操作
      $a.prop('href','https://www.woniuxy.com');
      ```

-   取值

    -   `var 变量名称=jQuery的元素对象.prop('属性名称')`

        ```js
        var $a=$('a');
        //取值var 
        aHref=$a.prop('href');
        ```

###### 操作自定义属性`attr()`

​        允许您同时设置多个属性。设置一个属性属性和属性值用逗号隔开，多个属性的属性和值之间用冒号隔开，属性和属性之间用逗号隔开。

- 赋值

  -   `jQuery的元素对象.attr('属性名称','属性值')`

      ```js
      var $a=$('a');
      $a.attr('test','123456');
      ```

-   取值

    -   `var 变量名称=jQuery的元素对象.attr('属性名称')`

        ```
        var $a=$('a');//取值var aDemo=$a.attr('demo');
        ```

###### `prop()与attr()区别`

1.  `prop()`只能操作自带属性，`attr()`可以操作自带属性，也可以操作自定义属性;
2.  `prop()`操作选中状态(`checked`和`selected`)是通过布尔值控制，true为选中，false为未选中,而`attr()`操作选中状态(`checked`和`selected`)是通过`undefined`和`checked`、`selected`控制，`checked`和`selected`为选中，`undefined`为未选中;

###### 操作class属性


-   `addClass('要添加的属性值')`

    -   添加指定class属性值。向被选元素添加一个或多个类，多个用空格隔开

        ```
        $('div').addClass('two');
        ```

-   `removeClass('要移除的属性值')`

    -   移除指定class属性值。  从被选元素删除一个或多个类

        ```
        $('div').removeClass('one');
        ```

-   `hasClass('目标属性值')`

    -   判断是否存在指定属性值。

        ```
        console.log($('div').hasClass('three'));
        ```

- `toggleClass()`
  
  - 对被选元素进行添加/删除类的切换操作

###### 操作css属性

`css()` - 设置或返回样式属性,写法就是css的写法，单个属性和值逗号分开，多个用冒号，属性和属性间用逗号。都需要加引号。

- 设置`CSS`属性

  ```js
  css("propertyname","value");
  ```

- 获取`CSS`属性

  ```js
  css("propertyname");
  ```

  

  ​	

### 操作元素       txt结构树

###### 更新内容和元素前后

-   元素内容

    -   追加内容

        -   `append('内容')`

            ```
            $('.myDiv').append('新内容');
            ```

    -   前置内容

        -   `prepend('内容')`

            ```
            $('.myDiv').prepend('新内容');
            ```

    -   清空内容

        -   `empty()`

            ```
            $('.myDiv').empty();
            ```

-   元素前后

    -   前元素

        -   `before('内容')`

            ```
            $('.myDiv').before('新内容');
            ```

    -   后元素

        -   `after('内容')`

            ```
            $('.myDiv').after('新内容');
            ```

-   移除元素

    -   `remove()`

        ```
        $('.myDiv').remove();
        ```

###### 获取父子兄元素

- 子元素

  -   `children()`   可以传入选择器过滤

      -   获取当前元素的所有子元素。

          ```
          $('.myDiv').children()
          ```

  -   `find('选择器')`

      -   根据选择器获取当前元素的后代元素。

          ```
          console.log($('.myDiv').find('b'));
          ```

  -  `选择器:lt()` 

    - 选取 index 值小于指定数字的元素。index 值从 0 开始。

    - 相反的可使用 :gt selector 来选取 index 值大于指定数字的元素。

       ```   js
       $("tr:lt(4)").css("background-color", "yellow");});
       ```

      

- 兄弟元素

  -   `prev()`

      -   获取当前元素的前一个元素。

          ```
          $('.myDiv').prev()
          ```

  -   `next()`

      -   获取当前元素的后一个元素。

          ```
          $('.myDiv').next()
          ```
      
  - `拓展水平查找`  --水平遍历-------------
    - siblings()所有同胞元素,可选参数
      nextAll()，后续所有同胞
      nextUntil()两个给定参数之间的所有跟随的同胞元素
      prevAll()
      prevUntil()
      
    - 语法：$(*selector*).nextUntil(*stop,filter*)  
    
    - 开始对象.nextUntil(结束对象的选择器，筛选选择器)
    
    - ```js
      $(document).ready(function(){    //加载完执行的入口函数
          $("li.start").nextUntil("li.stop").css({"color":"red","border":"2px solid red"});
      });
      ul (parent)
      li (sibling)
      li (sibling)
      li (sibling with class name "start")
      li (sibling)
      li (sibling)
      li (sibling)
      li (sibling with class name "stop")
      
      ```
    
    - 

- 父元素

  -   `parent()`

      -   获取当前元素的直接父元素。

          ```
          $('i').parent()
          ```

  -   `parents('选择器')`

      -   获取当前元素符合指定选择器结果的祖先元素。

          ```
          $('i').parents('div')
          ```
  
  - `parentsUntil('选择器')`
  
    - 介于两个给定元素之间的所有祖先元素
  
    - 语法：子元素对象.parentsUntil('目标父元素')，在他们两者之间的所有父元素，
  
      参数选择器
  
      ```js
      <script>
      $(document).ready(function(){
      	$("span").parentsUntil("div").css({"color":"red","border":"2px solid red"});
      });   //即li和ul
      </script>
      </head>
      
      <body class="ancestors"> body (曾曾祖父节点)
        <div style="width:500px;">div (曾祖父节点)
          <ul>ul (祖父节点)  
            <li>li (直接父节点)
              <span>span</span>
            </li>
          </ul>   
        </div>
      </body>
      ```
  
      
  
  - `closest()` 
  
    - 返回被选元素的第一个祖先，满足选择器的最近的父元素，从元素本身开始往上
  
    ***closest()\***
  
    - 从当前元素开始
    - 沿 DOM 树向上遍历，并返回匹配所传递的表达式的第一个单一祖先
    - 返回包含零个或一个元素的 jQuery 对象
  
    ***parents()\***
  
    - 从父元素开始
    - 沿 DOM 树向上遍历，并返回匹配所传递的表达式的所有祖先
    - 返回包含零个、一个或多个元素的 jQuery 对象

20220505-jQuery遍历

# jQuery遍历

## 隐式遍历

-   jQuery对找到的元素数组，进行统一遍历操作，执行指定函数内容，称为jQuery的隐式遍历。

    ```
    $('h1').css('color','red');
    ```

## 语法

-   方式一：

    -   `jQuery元素数组.each(function(index,ele){函数体})`

        -   第一个参数:当前元素的索引

        -   第二个参数:当前元素的JS对象

            ```
            $('h1').each(function(index,val){    console.log(index,val);})
            ```

    -   `jQuery元素数组.each(function(){函数体})`

        -   在函数体中，使用`this`操作当前元素的JS对象

            ```
            $('h1').each(function(){    console.log(this);})
            ```

-   方式二

    -   `$.each(jQuery元素数组,function(index,val){函数体})`

        ```
        $.each($('h1'),function(index,val){    console.log(index,val);})
        ```

    -   `$.each(jQuery元素数组,function(){函数体})`

        ```
        $.each($('h1'),function(){    console.log(this);})
        ```

## 注意

-   jQuery遍历获取元素对象可通过回调函数第二个参数或`this`获取，但获取到的都是JS对象。

## 补充，数组对象遍历eq

-   `jQuery元素数组.first()`

    -   获取数组中第一个jQuery元素。

        ```
        var $f = $('h1').first();$f.css('color', 'red');
        ```

-   `jQuery元素数组.last()`

    -   获取数组中最后一个jQuery元素。

        ```
        var $l=$('h1').last();$l.css('color','blue');
        ```

-   `jQuery元素数组.eq(索引值)`

    -   根据指定索引获取jQuery元素。

        ```
        var $e=$('h1').eq(5);$e.css('color','red');
        ```



# jQuery事件

## 绑定事件    txt扩展绑定事件

-   `jQuery元素对象.on(events,callback)`

    -   为当前元素绑定指定事件，指定监听器函数。

    -   参数

        -   第一个参数:要绑定的事件，字符串型，多个事件间以空格作为分隔符。
            -   `'click dblclick'`
        -   第二个参数:监听器函数。

        ```
        $('input').on('change focus',function(event){    console.log('监听器代码触发');});
        ```

## 移除事件(解除事件绑定)

-   `jQuery元素对象.off(events)`

    -   将当前元素上指定事件移除。

    -   参数

        -   第一个参数:要移除的事件名称，字符串型，多个要移除的事件，可以使用空格分隔。

        ```
        $('input').off('focus change');
        ```



# jQuery动画

### 基本动画(改变宽和透明度)

###### `jQuery元素对象.show(s,e,f)`

-   实现隐藏元素的显示动画。

-   参数

    -   第一个参数(s):确定动画的速度。
        -   取值
            -   固定值:`slow`慢、`normal`一般、`fast`快;
            -   毫秒值;
    -   第二个参数(e):动画切换方式。
        -   取值
            -   固定值:      linear      swing
                -   `linear`：匀速切换。
                -   `swing`:先快后慢。
    -   第三个参数(f):动画完成时要执行的回调函数。

    ```
    $('img').show(3000,'linear',function(){    console.log('动画完成!');})
    ```

###### `jQuery元素对象.hide(s,e,f)`

-   实现显示元素的隐藏动画。 /*  改变透明度和宽度变为0  */

-   参数

    -   第一个参数(s):确定动画的速度。
        -   取值
            -   固定值:`slow`、`normal`、`fast`;
            -   毫秒值;
    -   第二个参数(e):动画切换方式。
        -   取值
            -   固定值:    linear     swing
                -   `linear`：匀速切换。
                -   `swing`:先快后慢。
    -   第三个参数(f):动画完成时要执行的回调函数。

    ```
    $('img').hide(3000,'linear',function(){    console.log('动画完成!');})
    ```

######  `jQuery元素对象.toggle()`  显示状态取反 



## 滑入与滑出(改变宽)

###### `jQuery元素对象.slideDown(s,e,f)`

-   滑入隐藏的元素(显示)。

-   参数:

    -   第一个参数(s):确定动画的速度。
        -   取值
            -   固定值:`slow`、`normal`、`fast`;
            -   毫秒值;
    -   第二个参数(e):动画切换方式。
        -   取值
            -   固定值:    linear     swing
                -   `linear`：匀速切换。
                -   `swing`:先快后慢。
    -   第三个参数(f):动画完成时要执行的回调函数。

    ```
    $('img').slideDown(3000,'linear',function(){    console.log('动画完成!');})
    ```

###### `jQuery元素对象.slideUp(s,e,f)`

-   滑出显示元素(隐藏)。

-   参数:

    -   第一个参数(s):确定动画的速度。
        -   取值
            -   固定值:`slow`、`normal`、`fast`;
            -   毫秒值;
    -   第二个参数(e):动画切换方式。
        -   取值
            -   固定值:    linear     swing
                -   `linear`：匀速切换。
                -   `swing`:先快后慢。
    -   第三个参数(f):动画完成时要执行的回调函数。

    ```
    $('img').slideUp(3000,'linear',function(){    console.log('动画完成!');})
    ```

###### `slideToggle() 切换`状态



## 淡入与淡出(改变透明度)

###### `jQuery元素对象.fadeIn(s,e,f)`

-   淡入隐藏元素(显示)。

-   参数:

    -   第一个参数(s):确定动画的速度。
        -   取值
            -   固定值:`slow`、`normal`、`fast`;
            -   毫秒值;
    -   第二个参数(e):动画切换方式。
        -   取值
            -   固定值:      linear      swing
                -   `linear`：匀速切换。
                -   `swing`:先快后慢。
    -   第三个参数(f):动画完成时要执行的回调函数。

    ```
    $('img').fadeIn(3000,'linear',function(){    console.log('动画完成!');})
    ```

###### `jQuery元素对象.fadeOut(s,e,f)`

-   淡出显示元素(隐藏)。

-   参数:

    -   第一个参数(s):确定动画的速度。
        -   取值
            -   固定值:`slow`、`normal`、`fast`;
            -   毫秒值;
    -   第二个参数(e):动画切换方式。
        -   取值
            -   固定值:  linear        swing
                -   `linear`：匀速切换。
                -   `swing`:先快后慢。
    -   第三个参数(f):动画完成时要执行的回调函数。

    ```
    $('img').fadeOut(3000,'linear',function(){    console.log('动画完成!');})
    ```

######  `jQuery元素对象.fadeToggle()`  淡出淡入切换，取反 



###### `jQuery元素对象.fadeTo()`

渐变为给定的不透明度（值介于0与1之间）
如：fadeTo(speed,opacity,callback) 参数1,2必须
。

## 自定义

###### `jQuery元素对象.animate(params,s,e,f)`

-   自定义动画。

-   参数:

    -   第一个参数(params):确定动画的最终CSS效果。
        -   对象，每个CSS属性以对象的属性形式存在。
            -   注意:属性名称使用小驼峰规则代替`-`。
    -   第二个参数(s):确定动画的速度。
        -   取值
            -   固定值:`slow`、`normal`、`fast`;
            -   毫秒值;
    -   第三个参数(e):动画切换方式。
        -   取值
            -   固定值:   linear    swing
                -   `linear`：匀速切换。
                -   `swing`:先快后慢。
    -   第四个参数(f):动画完成时要执行的回调函数。

    ```js
    $('img').animate(  {    // width:0,    // opacity:0   
        borderRadius:'400px'  } , 3000,  'linear',function(){   
        console.log('动画完成!');})
    ```

###### `/*  拓展 */`动画自定义

-动画类--自定义--参数同上需定位----
animate() 1,2允许创建一个或多个自定义的动画属性
animate({params},speed,callback)参数1：必需，形成动画的 CSS 属性。（注意：css属性是用小驼峰式，值需要引号应，而不是原本的-式）
如果需要生成颜色动画，您需要从 jQuery.com 下载 Color Animations 插件。
3动画属性变化值可以用相对量如：
    height:'+=150px',
    width:'+=150px'
4预定义值如：height:'toggle'切换（即没有高度和显示）
5列队,即编写多个animate()调用,jQuery 会创建包含这些方法调用的“内部”队列。然后逐一运行这些animate 调用。不会同时：
div.animate({height:'300px',opacity:'0.4'},"slow");
div.animate({width:'300px',opacity:'0.8'},"slow");
div.animate({height:'100px',opacity:'0.4'},"slow");
div.animate({width:'100px',opacity:'0.8'},"slow");

--动画停止--------------------
stop(stopAll,goToEnd)方法用于在动画或效果完成前对它们进行停止
参数1：是否清楚动画列队默认false，仅停止当前动画，
参数2：是否立即停止当前动画，默认false，即暂停。true时立即执行完并停止

---动画冲突------------
由于 JavaScript 语句（指令）是逐一执行的 - 按照次序，动画之后的语句可能会产生错误或页面冲突，因为动画还没有完成。
为了避免这个情况，可以将要执行的代码以参数的形式添加 Callback 函数。

--链接------
浏览器不用多次查找相同的元素以下两种都是可以的
$("#p1").css("color","red").slideUp(2000).slideDown(2000);
$("#p1").css("color","red")
  .slideUp(2000)
  .slideDown(2000);



示例（广告展示）：

```html

<body>
    <style>
        img {
            width: 120px;
            height: 0;
            position: fixed;
            bottom: 0;
            right: 0;
            /* display: none; */
        }
    </style>
    <script src="./js/jquery-3.6.0.min.js"></script>
    <script>
        $(function () {
            function showAdj() {
                $('img').animate({ height: '120px' }, 1000, 'linear', function () {
                    // console.log('显示动画完成');
                    setTimeout(hideAdj, 2000);//写的多少就是在展示多久
                });
            }
            function hideAdj() {
                $('img').animate({ height: 0 }, 1000, 'linear', function () {
                    // console.log('隐藏动画完成');

                });
            }

            setInterval(showAdj, 6000);

        })
    </script>
    <img src="./img/weixin-code.jpg" alt="">
</body>
```



