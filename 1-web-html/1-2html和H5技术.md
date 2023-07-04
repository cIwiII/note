## 网页组成

网页分三部分：

- HTML：网页的骨架，网页的结构设计

- CSS：网页的样式，用于美化网页，有了css才能达到像素级还原

- JavaScript：动态脚本，控制页面中动画效果，点击效果等

- ## 网页样式来源5部分

  所有标签默认没有样式，显示时有是由于浏览器厂商的默认样式，

  1、浏览器默认。2、浏览器用户自定义。3、内联样式。4、内部样式。5、外部样式

  优先级：就近原则+属性后面覆盖前面

  ```html
  // 内联样式 优点：哪里需要哪里写，缺点：相同样式重复添加
  <p style="css属性名1: css属性值1; css属性名2: css属性值2;  ">  </p>
  
  // 内部样式  优点：结构和样式分离，清晰易于维护，可以提取公共样式， 缺点：分离不完全
  <head><style> 选择器{ css属性名1: css属性值1; }    </style></head>
  
  // 外部样式  创建扩展名为.css文件  优点：结构和样式完全分离，易于维护，可压缩减少体积
  <head>   <link rel="stylesheet" href="连接需要引入的css文件的文件路径">  </head>
  ```

  

## HTML

前端的发展：

网页开发，网站开发，web开发、小程序开发

web指的就是网页开发

91年，第一个网页出现了，早期的网页主要用于论文发表、学术研究等等

Tim berners-Lee lee博士，互联网之父

94年，php诞生，实现数据的交互和动态页面的模板引擎，为web2.0时代做了铺垫

lee博士建立W3C，主要制定页面的前端开发规则，包括HTML+CSS+JavaScript等规则

-   web1.0：页面上的数据写死的，静态页面
-   web2.0：可以动态渲染页面上数据，动态页面

95年，JavaScript出现，只能实现页面的动态交互，页面中动画效果

99年，ajax技术。异步技术，标志着web2.0时代到来

2007年，第一部iPhone出现

14年，H5发布

20年，vue3.0发布

前端学习的三部分：HTML（网页的骨架）   CSS（网页的样式，美化网页）  JavaScript（网页的动态效果）

vue、react、uni-app等等

### HTML概念及特点

**Hyper Text Markup Language 超文本标记语言** 

-   超文本：通过一系列的超链接将不同空间的资源组合起来形成了一个网状结构，超文本就是超媒体的概念，不仅仅是指的页面中文本，还包含页面中图片、视频、音频等等
-   标记：指的就是页面中标签，一个超文本就需要一个标签进行链接

**html的特点** 

-   简单性：没有复杂的逻辑结构，只需要学会标签的使用，合理的搭配标签就可以构建网页
-   可扩展性：HTML每种标签有自己的用途，新增一种标签就是新增一种用途
-   跨平台性：网页运行环境是浏览器，只要系统中有浏览器，网页就可以运行
-   通用性：网页写好之后，可以在其他的网页中相互嵌套，在浏览器中可以正常渲染

**HTML网页结构** 

-   html文档就是描述网页
-   HTML文档包含文本和标签

**文档结构** 

```html
<!DOCTYPE  html> 文档类型，声明浏览器解析规则，大小写均可，不写采用兼容模式
<html>    根标签，每个网页只有一个
    <head>        网页头部
        <meta  charset="utf-8">       网页编码集
        <!-- 定义关键字 --> 
        <meta name="keywords" content="">
        <!-- 定义网页的描述 -->
        <meta name="description" content="">
        <title>网页标题</title>    
    </head>    
    <body>网页主体</body> 
</html>
```

关键字和描述，有利于搜索引擎SEO收录优化

**!DOCTYPE头部** 

h5：既可以采用严格模式，又可以采用兼容模式

```
<!DOCTYPE  html>
```

h4:

```
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"   "http://www.w3.org/TR/html4/strict.dtd">
```

xhtml

```
<?xml version="1.0" encoding="utf-8"?><!DOCTYPE html  PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
```

作用：

1.  声明文档的类型
2.  声明html的版本，告诉浏览器采用哪种版本的解析规则进行页面的解析
3.  决定了浏览器的加载模式，告诉浏览器是采用混杂模式还是严格模式来解析网页

**浏览器加载模式** ：

-   严格模式（标准模式）：严格按照W3C的规范解析网页
-   混杂模式（兼容模式）：浏览器按照自己的规范来解析网页





### 开发工具vscode

- 记事本：太麻烦

- Dreamweaver：更新太慢

- webstorm：内置插件过多，导致电脑出现卡顿

- HBuilder：vue推荐，比较耗内存，启动慢

- vscode：前后端皆可，插件自行安装

### 表格单元格合并

-   `rowspan`：跨行合并，垂直方向上合并单元格
-   `colspan`：跨列合并，水平方向上合并单元格



### 下拉列表

-   下拉列表默认只能选中一个选项，select标签上设置`multiple`属性控制多选

### 文本域

```
  <textarea  rows="控制可以显示的行数"   cols="控制一行显示的字符个数" ></textarea>
```

### 定义列表 dl

```html
  <!-- 定义列表 dl  用于解释的列表-->  
  <!--dt：指定名词   dd：针对名词进行解释说明  三者都是默认独占一行-->  
<dl>      
    <dt>中国</dt>      
    <dd>中华人民共和国</dd>      
    <dt>汽水</dt>      
    <dd>冒着泡泡的肥宅水</dd>  
</dl>
```

### marquee 标签

- 跑马灯，内容会从右边进入，从左边消失，无限循环，以后可以通过动画来实现

  ```
  <marquee behavior="" direction="">公告：明天不上班</marquee>
  ```


### iframe标签

- 将目标网页嵌套进当前的网页中

  ```
    <iframe src="http://www.woniuxy.com" frameborder="1" width="1000px" height="500px"></iframe>
  ```

- 注意：

  -   需要设置宽度和高度，显示不下会产生滚动条，不建议使用，因为网页的宽高无法确定
  -   frameborder：设置网页的显示区域的边框

### fieldset

- 带标题和边框的标签，legend:设置边框上的标题

  ```html
  <fieldset>      
      <legend>登录</legend>      
      <form action="">          
          用户名：<input type="text"><br>         
          密   码：<input type="password"><br>          
          <button>登录</button>      
      </form>  
  </fieldset>
  ```

  

### 标签的分类

**行内标签（行内元素）、行内块级标签、块级标签**

- 行内：a，b，i，span，strong，label，em等
- 行内快：img，input，td，select，button
- 块：h、p、div、table、tr

**标签类型可以通过 display 属性相互转换**


# H5

## H5新增表单控件

部分存在一定兼容性

```
<input type="email">
<input type="number">
<input type="url">
<input type="search">
<input type="range">
<input type="color">

  <!-- 选择年/月/日 -->  <input type="date"> 
  <!-- 年/月 -->  <input type="month"> 
  <!-- 某年第几周 -->  <input type="week">  
  <!-- 时/分 -->  <input type="time">
  
  <input type="file"  multiple>
```

**邮箱输入框** ：要求输入的内容是正确

**数字输入框** ：只能输入数字，提供数字的加1或减1的操作

**网址输入框** ：以http或https开头完整的网址

**搜索输入框** ：部分浏览器提供清空功能

**选取范围** ：range

**选择颜色** ：

**时间控件** 

**文件上传** ：默认只能上传一个文件，添加multiple属性上传多个文件

**选项列表** ： datalist  可以给input提供选择的选项

list 属性绑定 datalist 的id

```html
<input type="text" list="mylist">  
<datalist id="mylist">      
    <option value="">小米手机</option>      
    <option value="">小米电脑</option>         
    <option value="">大头儿子</option>      
    <option value="">大米先生</option>  
</datalist>
```

- 注意：input输入框中通过指定名进行

## H5之Canvas

### 画布创建

1. 创建画布`Canvas`，并确定画布大小。

   canvas 默认宽为300px，高为150px。

   ```js
   <canvas width="600" height="600">  </canvas>
   ```

2. 获取画笔

   ```js
   var can=document.querySelector('canvas');  //获取canvas元素对象
   var context=can.getContext('2d');   //获取2d画笔
   ```

### API

- 属性
  - strokeStyle：设置线条颜色，默认为黑色
  - lineWidth：设置线条宽度，单位为像素。
  - fillStyle：设置填充颜色，默认为黑色。
- 函数
- getContext('画笔名称')：获取指定名称的上下文对象(画笔)。
  - moveTo(x,y)：将画笔移动到指定起始点。
  - lineTo(x,y)：从起始点到指定x、y坐标的点连为一条线
  - stroke()：将线条绘制到画布上(呈现)。
- beginPath()：开始绘制路径。
  - closePath()：关闭路径，将起点和终点连接，形成闭合区间。
- fill()：通过填充路径的内容区域，形成实心图像。

### 绘制线条

- 先设计，再呈现。

  ```js
  var can=document.querySelector('canvas');  //获取目标canvas元素对象
  var context=can.getContext('2d');  //获取2d画笔
  context.moveTo(100,100);  //确定线条起点
  context.lineTo(500,100);  //绘制线条到指定点
  context.lineTo(500,500);   //绘制线条到指定点
  context.lineTo(100,500);  //绘制线条到指定点
  context.strokeStyle='pink';  //设置线条颜色
  context.lineWidth=20;  //设置线条的宽度
  context.stroke();  //呈现线条
  ```

### 绘制三角形

```js
var can=document.querySelector('canvas');  //获取目标canvas
var context=can.getContext('2d');  //获取画笔
context.beginPath();  //开始路径
context.moveTo(100,100);  //确定起点
context.lineTo(100,500);  //确定第二个点
context.lineTo(500,500);  //确定第三个点
context.lineTo(100,100);  //回到起点
context.closePath();  //关闭路径
context.stroke();  //呈现
context.fillStyle='pink';  //设置填充颜色
context.fill();   //填充
```



### 绘制矩形

-   绘制空心矩形可以使用`rect()`配合`strock()`实现，也可以使用`strockRect()`实现；
-   绘制填充矩形(实心矩形)，可以使用`fillRect()`实现；

```js
//获取目标canvas
var can=document.querySelector('canvas');
//获取画笔
var context=can.getContext('2d');
//设置填充颜色
context.fillStyle='pink';
//开始路径
context.beginPath();
//绘制矩形// 
context.rect(100,100,410,100);// 
context.strokeRect(100,100,410,100);
context.fillRect(100,100,410,100)
//关闭路径
context.closePath();
//呈现//
context.stroke();
//清空指定矩形区域内容
context.clearRect(255,125,50,50);
```

### 绘制圆形

```js
//获取目标
canvasvar can=document.querySelector('canvas');
//获取画笔
var context=can.getContext('2d');
//开始路径
context.beginPath();
//绘制圆形区域
context.arc(300,300,200,0,Math.PI,true);
//关闭路径
context.closePath();
//呈现// 
context.stroke();
//设置填充颜色
context.fillStyle='pink';
//填充
context.fill();
```

### 绘制文字

```js
//获取canvas
var can=document.querySelector('canvas');//获取画笔
var context=can.getContext('2d');//设置文字样式
context.font='bold 32px 楷体';//设置水平对齐方式
context.textAlign='center';//设置垂直对齐方式
context.textBaseline='middle';//文字绘制
context.fillText('蜗牛学院牛逼!',300,300);
```



## H5之拖拽

**设置元素可拖拽** ：`draggable`的值为`true`

```html
<div draggable="true"></div>
```

### 常用事件

- `dragstart` ：开始被拖拽时。dragend，结束时发生

  ```js
ele.ondragstart=function(event){ console.log('开始拖拽',event.target);}
  ```
  
- `dragover` ：当前元素区域内发生拖拽悬浮时触发监听器代码。

  ```js
ele.ondragover=function(event){    console.log('拖拽悬浮');}
  ```
  
- `drop` ：当前元素区域内发生 拖拽释放。

  ```js
ele.ondrop=function(event){    console.log('拖拽释放');}
  ```

注意: 

​    默认元素区域内不能发生释放，可在悬浮事件时阻止默认行(`event.preventDefault()`)为达到能释放的效果。

**event对象** 

- `dataTransfer` ：实现事件间的数据传输。

  - `setData(key,value)` ：将value值，以key的名字进行存储。

    ```js
event.dataTransfer.setData('targetId', event.target.id);
    ```
  
  - `getData(key)` ：根据key名字，获取对应value值。

    ```js
  var targetId=event.dataTransfer.getData('targetId');
    ```

**案例** 

```js
window.onload=function(){
    document.querySelector('.content').ondragstart=function(event){
        // console.log('开始拖拽',event.target);
        //将事件源的id值存储
        event.dataTransfer.setData('targetId',event.target.id);
    }
    document.querySelector('.content').ondragover=function(event){
        // console.log('拖拽悬浮');
        //阻止默认行为，默认行为是不可释放元素
        event.preventDefault();
    }
    document.querySelector('.content').ondrop=function(event){
        // console.log('拖拽释放');
        //获取存储的数据
        var targetId=event.dataTransfer.getData('targetId');
        // console.log(targetId);
        //获取事件源
        var oldTarget=document.querySelector('##'+targetId);
        //获取事件源背景图片
        var backImg=oldTarget.style.backgroundImage;
        // console.log(backImg);
        //判断是否存在背景
        if(backImg.length>0){
            //取消事件源的背景图片
            oldTarget.style='';
            //设置当前发生释放的元素背景为原图片
            event.target.style.backgroundImage=backImg;
        }
    }
}
<div class="content">
    <div id="one" style="background: url('img/butterfly-frame0.png');" draggable="true"></div>
    <div id="two" draggable="true"></div>
    <div id="three" draggable="true"></div>
</div>
```



## H5之本地存储

- 数据类型

  -   瞬时数据
      -   保存在内存中，一旦程序停止运行，则数据被清除。
  -   持久数据
      -   保存在硬盘中，在未主动删除数据的情况下，数据会被永久保留。

- 背景

  |        | cookies                                                      | 本地存储                                                     |
  | ------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
  |        | 客户端/服务器端，既可以从客户端也可以从服务器端访问数据。每个请求都会发送cookie数据到服务器 | 只能在本地浏览器端访问数据。服务器无法访问本地存储，除非特意通过POST或GET发送到服务器 |
  | 大小   | 每个Cookie 4095个字节                                        | 每个域5 MB。                                                 |
  | 有效期 | cookie有附加的有效期。所以有效期后的cookie和cookie数据会被删除。 | 数据可以没有有效期限。要么最终用户从浏览器删除它，要么使用JavaScript编程删除 |

### 分类

- `sessionStorage`:存储的数据针对一个窗口(会话)，用户关闭窗口后，数据就会被删除。

  ```
  window.sessionStorage;
  ```

- `localStorage`:存储的数据没有时间限制。

  ```
  window.localStorage;
  ```

### 操作

- 存数据

  - `setItem(key,value)`

  - 根据键存储指定值，如果键已经存在，则会覆盖对应值。

    ```
    sessionStorage.setItem('name','李四');
    ```

- 取数据

  - `getItem(key)`

  - 根据键获取对应值，如果键不存在，则返回null。

    ```
    console.log(sessionStorage.getItem('name'));
    ```

- 移除数据

  - `removeItem(key)`

  - 根据键移除对应键值对。

    ```
    sessionStorage.removeItem('name');
    ```

- 清空数据

  - `clear()`

  - 清空当前本地存储(sessionStorage或者localStorage)的所有键值对。

    ```
    sessionStorage.clear();
    ```

## JSON

- JavaScript Object Notation，JavaScript，JSON 不允许包含函数

- JSON.parse(text[, reviver])

  - **text:**必需， 一个有效的 JSON 字符串。

  -   **reviver:** 可选，返回值作为当前key的值。通用条件不能为undefined

  - ```js
    var text = '{ "name":"Runoob", "initDate":"2013-12-14", "site":"www.runoob.com"}';
    var obj = JSON.parse(text, function (key, value) {
        if (key == "initDate") {
            return new Date(value);//条件内可返回undefined
        } else {
            return value;// 此处不能返回undefined
    }});
    ```

- JSON.stringify(value[, replacer[, space]]): 

  日期对象转为字符串，函数删除key和value

  - value: 必需，通常为对象或数组

  -   replacer?: 用于转换结果的函数或数组。

       replacer 为函数，返回undefined会删除元素，返回非原始值，则将整个str结果替换为这个非原始值

      replacer 为数组，仅返回按数组包含key顺序的JSON字符串。

  -   space?: 文本添加缩进、空格和换行符，

      如果 space 是数字，则返回值文本在每个级别缩进指定数目空格，最大10，

      space 也可以使用非数字，如：\t。

  ```js
  var obj = { name: "runoob", alexa: 10000, site: "www.runoob.com" };
  
  var myJSON = JSON.stringify(obj, ['site','name'],'\t');
  ```

  

## 百度地图

### 环境搭建

1.  注册百度地图账号并登录;`https://lbsyun.baidu.com/`
2.  申请开发者身份;`https://lbsyun.baidu.com/apiconsole/center`
3.  创建应用获取应用AK;`https://lbsyun.baidu.com/apiconsole/key/create`
4.  创建HelloWorld程序;`https://lbs.baidu.com/index.php?title=jspopularGL/guide/helloworld`

### 基本操作

API:`https://mapopen-pub-jsapi.bj.bcebos.com/jsapi/reference/jsapi_webgl_1_0.html`

Demo:`https://lbsyun.baidu.com/jsdemo.htm#aCreateMap`

1. 引入百度地图的依赖JS库;

   ```
   <script src="https://api.map.baidu.com/api?v=1.0&type=webgl&ak=aF4dfBtsBD209YNrVcj40nWV7Lm4CQb6"></script>
   ```

2. 创建地图容器;

   ```
   #myMap{    width: 600px;    height: 600px;    border: 1px solid red;}
   ```

   ```
   <div id="myMap"></div>
   ```

3. 创建地图实例对象;

   - 传入id定位容器

     ```
     var myMap=new BMapGL.Map('myMap');
     ```

   - 传入JS元素对象定位容器

     ```
     var myMapEle=document.querySelector('#myMap');var myMap=new BMapGL.Map(myMapEle);
     ```

4. 设置地图中心点以及地图级别;

   - `centerAndZoom()`

     -   参数
         -   第一个参数:地图中心点;
         -   第二个参数:地图级别，整数类型，值越大越详细，离地越近，值越小，离地越远;

     ```
     var centerPoint=new BMapGL.Point(104.069944,30.579012);myMap.centerAndZoom(centerPoint,15);
     ```

### 鼠标滚轮控制地图级别

- `enableScorllWheelZoom()`

  ```
  myMap.enableScrollWheelZoom();
  ```

### 常用控件

- 比例尺控件

  ```
  var scaleCtrl = new BMapGL.ScaleControl();  // 添加比例尺控件地图对象.addControl(scaleCtrl);
  ```

- 缩放控件

  ```
  var zoomCtrl = new BMapGL.ZoomControl();  // 添加缩放控件地图对象.addControl(zoomCtrl);
  ```

- 3D控件

  ```
  var navi3DCtrl = new BMapGL.NavigationControl3D();  // 添加3D控件地图对象.addControl(navi3DCtrl);
  ```

- 城市控件

  ```
  var cityControl = new BMapGL.CityListControl({    // 控件的停靠位置（可选，默认左上角）    anchor: BMAP_ANCHOR_TOP_LEFT,    // 控件基于停靠位置的偏移量（可选）    offset: new BMapGL.Size(10, 5)});// 将控件添加到地图上地图对象.addControl(cityControl);
  ```

### 地图事件

- 添加点击事件

  -   `event.latlng.lng`、`event.latlng.lat`可以获取点击地点的精度和纬度。

  ```
  地图对象.addEventListener('click',function(event){    console.log('被点击',event.latlng.lng,event.latlng.lat);});
  ```

### 标注(标记)

- 添加标注

  ```
  //创建点对象var point=new BMapGL.Point(标注添加位置的经度,标注添加位置的纬度);//创建标注对象var marker=new BMapGL.Marker(point);//将标注点添加到地图上地图对象.addOverlay(marker);
  ```

- 标注添加事件

  -   `event.latLng.lng`、`event.latLng.lat`获取经、纬度
  -   常用事件`dragstart`、`dragend`拖拽开始和拖拽结束事件

  ```
  标注对象.addEventListener('事件名称',function(event){});marker.addEventListener('dragend', function (event) {    console.log('拖拽',event.latLng.lng,event.latLng.lat);})
  ```

- 可拖拽标注

  ```
  标注对象.enableDragging();
  ```

### 消息框(信息窗口)

- 创建消息框

  ```
  var win=new BMapGL.InfoWindow('展示内容',{    width:宽,    height:高,    title:标题});
  ```

- 将消息框添加到地图上

  ```
  地图对象.openInfoWindow(目标消息框对象,打开消息框的地址点对象);
  ```

### 地址解析(文本地址转为经纬度)

- 创建地址解析对象

  ```
  var geo=new BMapGL.Geocoder();
  ```

- 根据文本地址获取经纬度的Point对象

  ```
  geo.getPoint('文本地址',function(point){    //point为解析后的经纬度点对象},'目标城市');
  ```

### 地址逆向解析(经纬度转为文本地址)

- 创建地址解析对象

  ```
  var geo=new BMapGL.Geocoder();
  ```

- 根据经纬度Point对象获取文本地址

  ```
  geo.getLocation(目标Point对象,function(re){    //re.address可以获取完整文本地址    //re.addressComponents可以分别获取地址的省、市、区、街道、街道号等});
  ```

## 移动端开发

### 多端网页开发模式

- 响应式布局
  - PC端和移动端使用同一套网页，根据分辨率不同使用不同CSS样式。
  - 优点
    - 开发效率较高;
  - 缺点
    - 较为复杂的页面加载较慢，用户体验很难达到最佳。
- 独立开发网页
  - PC端和移动端各自开发一套网页。
  - 优点
    - 用户体验较佳，页面加载速度较快。
  - 缺点
    - 开发效率相对低一些;

### 基础概念

- 屏幕尺寸-英寸
  - 英寸为长度单位，1英寸约等于2.54厘米。
  - 移动端屏幕使用英寸作为单位，指屏幕的对角线长度。
  - 常见手机信息`https://www.uiiiuiii.com/screen`

![img](https://woniuxyopenfile.oss-cn-beijing.aliyuncs.com/woniuxynote/classNoteMd/202111221731/1.png)

- 像素
  - 屏幕上的一个小方块，每个小方块有明确的位置和色彩值，每个小方块的位置和色彩值决定屏幕图像呈现的效果。
  - 平时说的有多少像素就是指有多少小方块。
- 物理像素(手机分辨率)
  - 指屏幕的真实像素点个数，固定。
- 独立像素(逻辑像素)
  - 是一个物理测量单位，基于坐标系统和虚拟像素，由底层系统使用，转为物理像素。
  - CSS像素属于独立像素。

### 视口

- 浏览器显示网页的屏幕区域。
- 分类:布局视口、视觉视口、理想视口。
- 布局视口(layout viewport)
  - 为一般浏览器有的默认视口，分辨率一般为980px。
  - 980px大于大部分移动端设备的宽度，按照布局视口的网页，用户只能通过滚动条或网页缩放的方式来浏览网页效果。

![img](https://woniuxyopenfile.oss-cn-beijing.aliyuncs.com/woniuxynote/classNoteMd/202111251428/20210830104337.png)

- 视觉视口(visual viewport)
  - 指用户正在看的网页区域。

![img](https://woniuxyopenfile.oss-cn-beijing.aliyuncs.com/woniuxynote/classNoteMd/202111221728/20210830105032.png)

- 理想视口(idea viewport)
  - 理想视口是布局视口的理想尺寸，当布局视口的尺寸与屏幕尺寸(视觉视口)一致时，为理想视口。
  - 设置布局视口为理想视口方式
    - ``
    - 常用属性
      - name:配置项名称。
      - content:具体的配置信息。
        - width:定义布局视口的宽度，单位为像素，一般使用`device-width`，视口宽度为设备屏幕宽度。
        - initial-scale:定义初始化缩放比例，一般为1.0。
        - user-scalable:是否允许用户手动缩放网页(yes/no)。

### 移动端尺寸适配方案

- rem和em
  - em:相对当前元素对象的文本尺寸`font-size`的单位，如:当前元素`font-size`值为默认`16px`,则`1em`表示`16px`。
  - rem:相对于根元素``的文本尺寸`font-size`的单位,如:``元素的`font-size`值为`32px`,则`1rem`表示`32px`。
- vw和vh
  - vw:相对视口宽度单位,`1vw`表示视口的1%，`100vw`表示视口的`100%`。
  - vh:相对视口高度单位,`1vh`表示视口的1%，`100vh`表示视口的`100%`。
  - vmin:选取vw和vh中较小值。
  - vmax:选取vw和vh中较大值。

### 移动端开发技巧

1. 布局尽量使用弹性布局;
2. 页面尺寸使用百分比或`vw`和`vh`控制;
3. 元素尺寸使用百分比或`rem`控制;
4. 字体尺寸使用`rem`控制;

### 适配JS代码

```js
function adapter(){    //获取屏幕的宽度    
    var width=window.innerWidth; 
    if(width>750){        width=750;    }
    document.documentElement.style.fontSize=width/75+'px';
}
window.onload=function(){    
    adapter();
}
window.onresize=function(){  adapter();  }
```

## 前端请求服务器资源的方式

![img](https://woniuimage.oss-cn-hangzhou.aliyuncs.com/woniunote/20220510/15924e81d32a4b5291390f9469020d71.png)

### 软件架构模式

-   C/S（Client/Server），客户端/服务器
    -   用户需要下载特点的安装程序（客户端程序），才可使用功能;
    -   比如:QQ、微信、LOL等
-   B/S（Browser/Server），浏览器/服务器
    -   将程序全部放在服务器上，用户通过浏览器访问服务器资源; 不需要下载特点的安装程序，
    -   比如:京东、淘宝、哔哩哔哩等

## http

### URL

- URL(Uniform Resource Locator)统一资源定位符
- 用于定位互联网中的一个资源
- 协议://主机:端口号/资源路径?参数

- 协议:http或https
- 主机:
  - IP (4段数字组成、每段数字取值为0~255):192.168.3.166  
  - IPv6:保证每台互联网上的计算机都要唯一的IP地址。
  - 定位互联网中的计算机
  - 域名：简化IP难以记忆的问题: `https://www.jd.com/index.html`，`www.主机名称.com`
- 端口号
  - 0~65535
  - 作用是区分服务，定位服务程序;  一般为隐藏状态
  - `0~1024`：为系统使用，避免使用



### Http协议

- 协议:：事先约定好的规则、标准
- 计算机协议：计算机与计算机之间通讯要遵守的约定、规则、标准。
- Http协议
  - 属于计算机通讯协议
  - HyperText Transfer Protocol 超文本传输协议;
  - 每个请求只能请求服务器上的一个资源，服务器会根据请求生成对应响应数据包;

**请求** ：浏览器发送给服务器的数据包，目的是获取相关数据

- 请求方式：GET获取，POST提交，GET没有正文，POST请求有正文
- 组成
  - 头(Reuqest Headers)
    - 请求首行：`请求方式 资源路径 HTTP协议版本`
    - 请求的键值对：HTTP定义好了标准；
  - 正文
    - 提交到服务器的数据
    - 格式：1、`acc=admin&pwd=ad123`，2、数据对象

**响应** ：即请求后的反馈，包含数据或结果

- 组成
  - 头(Response Headers)
    - 响应首行：`HTTP版本 响应状态码`
    - 响应键值对：HTTP定义好了标准；
  - 正文
    - GET：请求的资源内容;
    - POST:数据的处理结果;

### Http状态码

- **HTTP状态码**（英语：HTTP Status Code）是用以表示网页服务器[超文本传输协议](https://baike.baidu.com/item/超文本传输协议)响应状态的3位数字代码。
- 常见状态码:
  - 200 成功
  - 404 请求资源没找到（资源不存在，可能是URL错误导致）
  - 500 服务器错误，后端程序异常

### Http协议特点

- 简单快速：仅需要提供请求的资源URL
- 灵活：支持各种超文本资源传输;
- 无连接
  - 短连接：连接请求前建立，响应后注销
  - 长连接：连接请求、响应后不会马上注销
- 无状态
  - 不具备保存用户状态; 如:登录状态
- 明文传输：
  - 数据不做加密处理，直接传输，容易被截包，导致数据泄密;

### http和https

|                | HTTP                                   | HTTPs(HTTP+TLS/SSL)    |
| -------------- | -------------------------------------- | ---------------------- |
| 默认端口号     | 80                                     | 443                    |
| 数据传输       | 明文                                   | 密文                   |
| 服务器身份认证 | 不具备识别目标服务器是否正规合法的能力 | 识别服务器是否正规合法 |
| 响应速度       | 高于https                              | 低于http               |



### 缓存

- 从服务器获取到不常改动的资源后，存储到本地浏览器中，下一次要使用资源时，先从浏览器文件中查找，如果存在，则直接使用，不存在，再从服务器请求获取，从而减少请求次数，减少流量消耗，加快页面加载渲染速度，提高用户体验，减少服务器压力；

#### [常见Content-Type](https://blog.csdn.net/lisheng19870305/article/details/106122802/)

1. application/x-www-form-urlencoded：POST 提交数据的方式，原生Form表单
2. multipart/form-data：POST 数据提交的方式， Form 表单上传文件，甚至多个文件
3. application/json：序列化后的 JSON 字符串
4. text/xml：用于传输和存储数据，它非常适合万维网传输
5. binary (application/octet-stream)：二进制文件类型
   - 如application/pdf，指定了特定二进制文件的MIME类型。
   - 就像对于text文件类型若没有特定的子类型（subtype），就使用 text/plain。
   - 类似的，二进制文件没有特定或已知的 subtype，就使用 application/octet-stream，application/octet-stream，只能提交二进制，而且只能提交一个二进制，如果提交文件的话，只能提交一个文件，后台接收参数只能有一个，而且只能是流（或者字节数组）。



[下载文件所对应的的 Content-type类型](https://www.cnblogs.com/yutang-wangweisong/p/14343993.html) 



#### 请求缓存

静态资源运维配置，其中，gzip和设置缓存是必不可少的。这两项是最直接影响到网站性能和用户体验的。

缓存的优点：

- 减少了不必要的数据传输，节省带宽
- 减少服务器的负担，提升网站性能
- 加快了客户端加载网页的速度
- 用户体验友好

缺点：

- 资源如果有更改但是客户端不及时更新会造成用户获取信息滞后，如果老版本有bug的话，情况会更加糟糕。

**所以，为了避免设置缓存错误，掌握缓存的原理对于我们工作中去更加合理的配置缓存是非常重要的。**

##### 强缓存

强是强制的意思。当浏览器去请求某个文件的时候，服务端就在respone header里面对该文件做了缓存配置。缓存的时间、缓存类型都由服务端控制，具体表现为：
 respone header 的cache-control，常见的设置是max-age public private no-cache no-store等

`max-age`表示缓存的时间是31536000秒（1年）

`public`表示可以被浏览器和代理服务器缓存，代理服务器一般可用nginx来做。

`immutable`表示该资源永远不变，但是实际上该资源并不是永远不变。如果cahe-control:max-age=,public再加个immutable的话，就算用户刷新页面，浏览器也不会发起请求去服务，浏览器会直接从本地磁盘或者内存中读取缓存并返回200状态，

总结

1. **cache-control: max-age=xxxx，public**
   客户端和代理服务器都可以缓存该资源；
   客户端在xxx秒的有效期内，如果有请求该资源的需求的话就直接读取缓存,statu code:200 ，如果用户做了刷新操作，就向服务器发起http请求
2. **cache-control: max-age=xxxx，private**
   只让客户端可以缓存该资源；代理服务器不缓存
   客户端在xxx秒内直接读取缓存,statu code:200
3. **cache-control: max-age=315360000，immutable**
   客户端在xxx秒的有效期内，如果有请求该资源的需求的话就直接读取缓存,statu code:200 ，即使用户做了刷新操作，也不向服务器发起http请求
4. **cache-control: no-cache**
   跳过设置强缓存，但是不妨碍设置协商缓存；一般如果你做了强缓存，只有在强缓存失效了才走协商缓存的，设置了no-cache就不会走强缓存了，每次请求都回询问服务端。
5. **cache-control: no-store**
   不缓存，这个会让客户端、服务器都不缓存，也就没有所谓的强缓存、协商缓存了



##### 协商缓存

客户端每次请求资源时都会看是否过期；只有在过期才会去询问服务器

**怎么设置协商缓存？**

response header里面的设置

```js
etag: '5c20abbd-e2e8'
last-modified: Mon, 24 Dec 2018 09:49:49 GMT
```

`etag`：每个文件有一个，改动文件了就变了，就是个文件hash，每个文件唯一，就像用webpack打包的时候，每个资源都会有这个东西，如： app.js打包后变为 app.c20abbde.js，加个唯一hash，也是为了解决缓存问题。

`last-modified`：文件的修改时间，精确到秒



每次请求返回来 response header 中的 etag和 last-modified，在下次请求时在 request header 就把这两个带上，服务端进行标识对比，判断资源是否更改。

如果更改就直接返回新的资源，和更新对应的response header的标识etag、last-modified。

如果资源没有变，那就不变etag、last-modified，这时候对客户端来说，每次请求都是要进行协商缓存了。

完整的协商缓存的过程。

**未过期**

发请求-->看资源是否过期-->过期-->请求服务器-->服务器对比资源是否真的过期-->没过期-->返回`304`状态码-->客户端用缓存的老资源。

**过期**  （当服务端发现资源真的过期）

发请求-->看资源是否过期-->过期-->请求服务器-->服务器对比资源是否真的过期-->过期-->返回`200`状态码-->客户端如第一次接收该资源一样，记下它的cache-control中的max-age、etag、last-modified等。



补充一点，response header中的etag、last-modified在客户端重新向服务端发起请求时，会在request header中换个key名：

```js
// response header
etag: '5c20abbd-e2e8'
last-modified: Mon, 24 Dec 2018 09:49:49 GMT

// request header 变为
if-none-matched: '5c20abbd-e2e8'
if-modified-since: Mon, 24 Dec 2018 09:49:49 GMT
```

**为什么要有etag？**
 你可能会觉得使用last-modified已经足以让浏览器知道本地的缓存副本是否足够新，为什么还需要etag呢？HTTP1.1中etag的出现（也就是说，etag是新增的，为了解决之前只有If-Modified的缺点）主要是为了解决几个last-modified比较难解决的问题：

1. 一些文件也许会周期性的更改，但是他的内容并不改变(仅仅改变的修改时间)，这个时候我们并不希望客户端认为这个文件被修改了，而重新get；
2. 某些文件修改非常频繁，比如在秒以下的时间内进行修改，(比方说1s内修改了N次)，if-modified-since能检查到的粒度是秒级的，这种修改无法判断(或者说UNIX记录MTIME只能精确到秒)；

3. 某些服务器不能精确的得到文件的最后修改时间。







#### 怎么设置强缓存与协商缓存

1. 后端服务器如nodejs:
   res.setHeader('max-age': '3600 public')
   res.setHeader(etag: '5c20abbd-e2e8')
   res.setHeader('last-modified': Mon, 24 Dec 2018 09:49:49 GMT)
2. nginx配置

## 前端与后端技术栈

- 前端
  - 基础:HTML、CSS、JavaScript
  - 基础库:jquery、bootstrap
  - 高级(进阶):Vue、React等
- 后端
  - Nodejs:express
  - Java体系:springboot+springcloud
- 数据库
  - mongodb
  - mysql、oracle



### 表单

- ```
  <form action=""><input type="submit"/></form>
  ```

  - 用户点击提交按钮后，浏览器会将用户数据发送给服务器的action指定资源处理。
  - 一般表单请求服务器的资源为后端资源。

### Ajax

- JS实现了Ajax功能，但语法较为复杂，jQuery的语法，实现Ajax功能。

- 请求类型

  - get：向服务器获取资源;
  - post: 向服务器提交数据;

- 语法:

  ```js
  $.ajax({    
      url:'请求资源路径',    
    type:'请求类型,一般为get或post',    
      success:function(data){ 
      }
  })
  $.ajax({    
          url:'https://www.fastmock.site/mock/getAllMovies',    
          type:'get',    
          success:function(data){
              console.log(data);   
          }
  })
  ```
  


