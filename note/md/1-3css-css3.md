

## 网页三部分：

-   HTML：网页的骨架，网页的结构设计
-   CSS：网页的样式，用于美化网页，有了css才能达到像素级还原
-   JavaScript：动态脚本，控制页面中动画效果，点击效果等

## 网页样式来源5部分

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


## 样式

### 背景样式

- `background-position`:背景图片位置（x轴  y轴；）

  - 单词：right（右） left（左） center（居中） top（上）  bottom（下）  两两搭配使用

  - 像素：0px 0px 代表默认左上角

  - 百分比：50% 50% 相当于center center

    注意：默认是参考整个盒子的位置，如果设置背景图片固定，是参考的整个页面的显示区域

- `background-size`：设置背景图片的大小，css3提出

  -   `contain`:铺满一边就停止，另一边不管
  -   `cover`：两边都铺满，超出部分隐藏掉
  -   `x  y`：宽度和高度，如果只设置一个值时，代表宽度，高度等比例缩放

- `background-attachment`：设置背景图片是否固定

  -   `scroll`:默认值，随着滚动条滚动
  -   `fixed`：固定在页面上，不随着滚动条滚动

- `background`:复合属性

  ```css
    /* 只设置两个值，代表显示位置，/前面代表显示位置，/后面代表图片大小 */  
    background: pink url(img/img-1.jpg) no-repeat 50px 100px /200px 200px fixed;
  ```

### 文本样式

**text-decoration:设置文本修饰**

-   `none`：无，可以用于取消a标签默认的下划线
-   `underline`：下划线
-   `line-through`：中划线，删除线
-   `overline`:上划线


**letter-spacing：设置字符间距，一个中文就是一个字符，一个英文字母就是一个字符**

**word-spacing：设置字间距，是以空格来区分**

**text-indent：设置首行缩进**

**text-transform:设置字母的大小写**

-   `none`:无 
-   `lowercase`：全小写  
-   `uppercase`：全大写  
-   `capitalize`：首字母大写



### 字体样式、图标

-   `font-size`:设置字体的大小，数字越大，字号越大
-   ·font-family ：设置字体的类型，逗号隔开，中文或多个英文单词，要引号包裹
-   font-style:设置字体的风格：`normal`：默认值，正常   `italic`:斜体   `oblique`：倾斜

### 字体引用技术

- 可以在网页中使用自己的字体文件

- 语法：

  ```css
  // 一个font-face只能引入一种字体，多个文件使用逗号隔开,
  @font-face{      
      font-family:字体名称;      
      src: url(字体文件格式1的文件路径),  url(字体文件格式2的文件路径); 
  }  
  div{      font-family: 字体名称;  }
  ```

### 字体图标

-   本质为字体，可以通过字体控制样式
-   font awesome官网：https://fontawesome.dashgame.com/
-   font awesome是通过不同的class名使用不同的图标，图标都是矢量图标

### 超链接添加样式

- 语法：

  ```css
  a:link {color: red;  }    /*未被访问样式 */
  a:visited {color: green;  }  /*访问过的样式 */  
  a:hover{color: yellow;  }  /*鼠标悬停样式  放在:link和:visited之后 */ 
  a:active{color: violet;  }  /*被激活的样式，鼠标左键不放时的样式 ，放在:hover之后*/
  顺序：L-V-H-A
  ```


### 列表样式

#### list-style-type：标志类型

-   注意：可以将无序列表和有序列表进行相互切换

#### list-style-position：列表项位置

，默认在li标签外面

-   `outside`：默认值，显示在li标签外面
-   `inside`：显示在li标签的内容区域

#### list-style-image：将图片作为列表项标志

-   注意：css无法控制图片的大小，只能更改原图片的大小，不建议使用

#### list-style：复合属性

-   `none`：无，可以取消列表默认的 列表项的标志

### 表格样式border-spacing

#### `border-spacing`：设置单元格与单元格之间的间距

#### border-collapse：设置表格的边框是否合并为一

-   `collapse`：将边框合并为一

### 外边框样式

`outline`是边框border外一圈轮廓线，设置方式为`outline:宽度  类型  颜色`；不占用空间

### 基础溢出隐藏

```css
 /* 基础溢出隐藏 */
.box {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  /* 溢出不换行 */
}

/* 字符串中 \n为换行 */
.pre {
  white-space: pre-line;
}

/* placeholder的样式控制 */
input::-webkit-input-placeholder {
  color: palevioletred;
}
input::placeholder {
  color: palevioletred;
}

/* 文本不可选中，具有继承性 */
.noselect {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
```

### 背景模糊虚化

```css
/* 背景虚化 */
/* 依靠的是 filter: blur(15px); blur值 越大 模糊程度也越大 
关键点：一个盒子模糊，另一个盒子脱离文档流处于它之上 */
.outer-box {
  position: relative;
  height: 400px;
  width: 100%;
  .div1 {
    width: 100%;
    height: 400px;
    -webkit-filter: blur(15px);
    -moz-filter: blur(15px);
    -o-filter: blur(15px);
    -ms-filter: blur(15px);
    filter: blur(15px);
  }

  .div2 {
    position: absolute;
  }
}
```

### mask遮罩应用

```css
/* mask遮罩，应用如：弹幕位于人物后方 */
/* mask缩写包含以下属性，mask指定的图片等位于元素上方
https://www.zhangxinxu.com/wordpress/2017/11/css-css3-mask-masks/
mask-image
mask-mode
mask-repeat
mask-position
mask-clip
mask-origin
mask-size
mask-type
mask-composite
 */

.mask-image {
  width: 250px;
  height: 187.5px;
  -webkit-mask-image: url(loading.png);
  mask-image: url(loading.png);
}
```



## 标签的分类

**行内标签（行内元素）、行内块级标签、块级标签**

- 行内：a，b，i，span，strong，label，em等
- 行内快：img，input，td，select，button
- 块：h、p、div、table、tr

**标签类型可以通过 display 属性相互转换**

## 文档流、浮动及清除

**块级标签同行显示**

1.  浮动 （不存在兼容问题）
2.  display:inline-block；(不推荐)：存在5px兼容问题

### 浮动

- float: left | right | none(默认);  排列不下时，会自动换行

- ### 特点：

  -   同行显示，排列不下自动换行，不存在兼容问题
  -   浮动元素会脱离文档流，不在占用原来空间，行内元素浮动支持宽高

  -   块级元素浮动后，宽度默认值是auto（自适应内容决定）


### 浮动元素影响

- 子元素浮动，父元素高度塌陷

- 非浮动元素会挤占浮动元素原来的空间

- 非浮动元素的文本会被浮动元素挤开

  - 实现图文混排

    ```html
      css：<style>   img{ float:left; }  </style>
    html：  <img src="图片路径"><p>文本 </p> 
    ```

  ```
  
  ```

### 清除浮动clear

-   作用：清除浮动元素对非浮动元素的影响，不等于解决高度塌陷
-   clear: left | right | both;
    -   `left`:清除左浮动的影响
    -   `right`：清除右浮动的影响
    -   `both`：清除左浮动和右浮动的影响

**清除浮动方式**

1. 给受影响的元素添加`clear:both;`，子元素之间，且不是第一个

2. 使用br标签,  使用`之前`的元素可解决`高度塌陷`，

   ```
    <br clear="all"> 或  <br clear="both">
   ```

3. 使用空白的div标签，使用`之前`的元素可解决`高度塌陷`，

   ```
     <div style="clear: both;"></div>
   ```

4. 给父元素添加伪元素选择器::after来清除浮动(推荐使用)

   ```css
    .clearfix::after{     
        content: "";     
        clear: both;     
        display: block; 
   }
   ```

注意：（5）给父元素设置`overflow:hidden;`可以解决子元素浮动，父元素`高度塌陷`的问题，这不是清除浮动，是借助的BFC容器的特点。元素内的任何布局不是影响外面



### margin重叠性问题

- 解决方案：

  1. 给父元素设置border，会撑大盒子

  2. 给父元素设置padding，也会撑大盒子

  3. 给父元素设置`overflow:hidden;`，盒子变成BFC容器，容器布局不会影响盒子外面元素

      注意：`overflow:hidden;`溢出隐藏，内容超出盒子显示区域的部分隐藏

### padding-margin百分比

1.  padding--margin百分比都是**参考父标签的宽度**

## CSS选择器

css主要由两部分构成：

1.  选择器：用于找到页面中的标签，只能由外而内找
2.  css样式代码：多个样式代码中间使用分号隔开

基础选择器：标签、类class、id、属性、伪类:、伪元素::、通配符*

组合选择器：后代、子元素、相邻兄弟、后续兄弟

### 基础选择器

**通配符选择器** ：*{  css属性名1: css属性值1;  }

**标签选择器**

``` css
  标签名{      css属性名1: css属性值1;      css属性名2: css属性值2;   }
```

**类选择器（class选择器）**多个class 空格隔开

```css
.class名{      css属性名1: css属性值1;      css属性名2: css属性值2;   }
.op.oa{  }  //   标签上的class既包含op又包含了oa的标签 
   <p class="text  op  oa">  </p>
```

**id选择器**：唯一，应当只能找到一个，慎用，字母、数字、_和-构成，不能数字开头

```css
  #id名{      css代码  }
```

**属性选择器** 

-   根据标签上属性名或属性值找到对应的标签，可以使用属性选择器来提取公共样式

|       选择器       |                      描述                      |
| :----------------: | :--------------------------------------------: |
|     `[属性名]`     |            选取带有指定属性的元素。            |
| `[属性名=属性值]`  |    选取带有指定属性和值的元素。（精确匹配）    |
| `[属性名*=属性值]` | 匹配属性值中包含指定值的某个元素。（模糊匹配） |
| `[属性名~=属性值]` |        选取属性值中包含指定词汇的元素。        |
| `[属性名|=属性值]` |       选取以指定值单词开头的属性值的元素       |
| `[属性名^=属性值]` |       匹配属性值以指定值开头的每个元素。       |
| `[属性名$=属性值]` |       匹配属性值以指定值结尾的每个元素。       |



**伪类选择器**

-   给浏览器上的标签添加一些功能性内容

| 选择器         | 描述                   |               |                                                   |
| -------------- | ---------------------- | ------------- | ------------------------------------------------- |
| `:link`        | 未被访问过的超链接样式 | `:active`     | 被激活的标签样式                                  |
| `:visited`     | 访问过的超链接样式     | `:hover`      | 鼠标悬停的标签样式                                |
| input:checked  |                        | `:focus`      | 拥有键盘输入焦点的标签样式, outline：宽度类型颜色 |
| input:default  |                        | :fullscreen   | 选择处于全屏模式的元素。                          |
| input:disabled |                        | input:enabled | 每个启用的input                                   |
| p:empty        | 没有子元素             |               |                                                   |

-   注意：
    -   `:link`和`:visited`是超链接特有的伪类选择器
    -   a标签在使用伪类选择器时，`:link`、`:visited`、`:hover`、`:active`（顺序：L-V-H-A）



### 组合选择器

**伪元素选择器**

-   可以在HTML标签的开头或者结尾通过css代码添加一块渲染区域，该区域可以添加css样式
-   before、after，必须配合content,为行内元素。可修改display属性

| 选择器           | 描述                             |
| ---------------- | -------------------------------- |
| `::first-letter` | 向标签中第一个字符添加样式       |
| `::first-line`   | 向标签中第一行添加样式           |
| `::selection`    | 向标签被选中区域添加样式         |
| `::before`       | 向标签内容之前添加一块渲染区域   |
| `::after`        | 向标签的内容之后添加一块渲染区域 |

-   注意：
    -   `::before`和`::after`必须配合`content:"";`一起使用，渲染为里面的子元素
    -   `::before`和`::after`渲染为行内元素，如果需要设置宽高，需要转为`block`或`inline-block`
-   应用：渲染三角形或添加内容
    -   绘制三角形：必须使用`content:"";`，转为行内块级元素或块级元素，设置宽高为0，设置三边透明，一边不透明



**后代选择器（派生选择器）** 

- 后续所有满足条件的标签，中间使用空格隔开

  ```css
  所有box类下面的a标签
  .box  a{  }
  ```


**子元素选择器**

- 满足条件的直接子标签，中间使用`>`隔开

  ```css
    所有box类下面的直接子标签，同时是a标签  .box   >  a{  }
  ```


**相邻兄弟选择器**

- 相邻满足条件的兄弟(同级)标签，中间使用`+`隔开

  ```css
   所有box类后面相邻的第一个兄弟标签，且必须是p标签  .box + p{  }
  ```


**后续兄弟选择器**

- 所有满足条件的兄弟(同级)标签，中间使用`~`隔开

  ```css
   所有box类后面的兄弟p标签  .box ~ p{  }
  ```


**选择器分组**

- 使用逗号隔开，逗号前后的选择器会分别作用一次花括号里面的css代码

  ```css
  h2{color:red;  }  
  span{color:red;  }  
  label{color:red;  } 
   等价于  
  h2 , span , label{
      color:red; 
  }
  ```


### 选择器权重

-   相同选择器时，后面相同属性的样式会盖住前面
-   相同选择器时，就近原则
-   不同选择器时，优先级（权重大小）： id选择器>class选择器（属性选择器）>标签选择器>通配符选择器(约0.5)> 继承的样式
-   组合选择器是由多种基础选择器构成，需要将多种基础选择器的权重叠加起来得到最终的权重大小

**加法计算** ：相加对比权重值，值越大，权重越高

- 内联样式权重值为1000

- id选择器的权重值为100

- 类选择器（属性选择器）权重值为10

- 标签选择器的权重值为1

- 继承的样式权重值为0

  注意：不满足满10进1的规则，同级比较

**4个0（0,0,0,0）** 

-   第一个0：有无内联样式，有则为1，无为0
-   第二个0：代表id选择器个数
-   第三个0：类选择器（属性选择器）个数
-   第四个0：标签选择器的个数

从前至后依次比较，若都相同，后面覆盖前面



### 扩展选择器

```css
:root 文档的根元素。

::selection 用户已选取的元素部分
/* 控制选中文本的颜色,默认选中为白色
   没有继承性，不作用旗下的子元素，全局使用*通配符
 */
::selection {
    background:#d3d3d3; 
    color:#555;
}
::-moz-selection {}
::-webkit-selection {}
*::selection {color: blue;}

#id:target  被跳转的锚点突出样式。

#news:target：id为news的元素（活动）被跳转时

input:out-of-range 选择值超出指定范围的 input 元素。

// 带有 min 和/或 max 属性的 input 元素！
input:in-range { 
    border: 2px solid yellow;
}

input:not(input:in-range){
    border: 2px solid yellow;
}

<input type="number" min="5" max="10" value="7">

input:indeterminate 选择处于不确定状态的 input 元素。

input:invalid 具有无效值的所有 input 元素

input:valid 带有有效值的所有 input 元素。

p:lang(en)

:not(p) 选择非 <p> 元素的每个元素。

p:only-of-type  父元素下p元素只有一个的p。

input:optional  不带 "required" 属性。

input::placeholder  有"placeholder" 属性

input:read-only  有"readonly" 属性。

input:read-write  未规定 "readonly" 属性。

input:required  已规定 "required" 属性
```



## css变量

css变量定义以 -- 开头定义

```css

:root {--main-bg-color: coral; }
div{
    background-color: var(--main-bg-color);
}
```



## css函数

1. attr(属性)：返回所选元素的属性值。

2. a:after {content: " (" attr(href) ")";}

3.  cubic-bezier(x1,y1,x2,y2)：生成一个曲线速率

    `transition-timing-function: cubic-bezier(0.1, 0.7, 1.0, 0.1);`

4. hsl()  使用色相-饱和度-亮度模型（HSL）定义颜色。

   `使用 Hue-saturation-lightness 模型（HSL）定义颜色`

5. hsla()使用色相-饱和度-亮度-阿尔法模型（HSLA）定义颜色。

6. linear-gradient() 线性渐变设置为背景图像。

   `background-image: linear-gradient(red, yellow, blue);`

7. radial-gradient() 将径向渐变设置为背景图像。

    `background-image: radial-gradient(red, green, blue);`

8. repeating-linear-gradient() 重复线性渐变。

    `repeating-radial-gradient() 重复径向渐变。`

9. rgb() 使用红-绿-蓝模型（RGB）定义颜色。

10. rgba()  使用红-绿-蓝-阿尔法模型（RGB）定义颜色。

## CSS继承

css继承：父元素的样式默认子元素可以获取到。

继承分为两种：

- 自动继承：子元素不需要任何操作，可以直接从父元素上获取样式作用在标签上

- 手动继承：子元素需要自己写代码从父元素上获取样式， `css属性名: inherit;`  

  inherit：继承父元素的该属性的样式

### 可自动继承

**文本样式可被继承**

-   color       text-align    line-height    text-decoration     letter-spacing    word-spacing    text-indent    text-transform

**font系列样式可被继承**

-   font-size   font-family    font-weight    font-style

**list-style li可从ul或ol上继承**

**鼠标样式cursor 可被继承**

  `cursor:pointer;`抓手

### 不可自动继承

-   width、height、border、padding、margin、background等等

## 定位

### 文档流的概念

-   标准文档流：从上到下，从左到右，块级独占一行，行级共享一行，占据空间
-   脱离文档流：不遵循标准规范，不占据空间
-   破坏文档流：移动过程中不遵循标准规范，移动完成后仍在标准文档流中，占据空间



### 静态定位

-   所有标签默认静态定位：position:static;


### 相对定位

-   参考盒子原来的位置，按照指定的方向进行移动，只设置相对定位不会有影响，一般作为定位父级

-   语法：position:relative;

-   设置偏移量：

    -   `top`：距离参考位置上边缘的间距               `right`：距离参考位置右边缘的距离 
    -   `bottom`：距离参考位置下边缘的距离          `left`：距离参考位置左边缘的距离 

-   特点:

    -   破坏文档流
    -   设置偏移量，参考原来的位置移动
    -   原来的位置还占用


### 绝对定位

-   绝对定位的元素会脱离文档流，按照指定的方向进行移动

-   语法：position:absolute;

-   设置偏移量：

    -   `top`：距离参考位置上边缘的间距                 `right`：距离参考位置右边缘的距离
    -   `bottom`：距离参考位置下边缘的距离             `left`：距离参考位置左边缘的距离

-   特点：

    -   脱离文档流
    -   只设置绝对定位的元素是在`当前的位置`脱离文档流，一旦设置偏移量默认是参考整个文档进行移动，如果设置定位父级，参考最近的定位父级进行移动
    -   原来的空间不再占用

-   注意：

    -   后面绝对定位的元素会盖住前面绝对定位的元素
    -   行内元素设置绝对定位后，行内元素支持宽高

**结构父级** ：在html代码结构中元素的父标签

**定位父级 **：绝对定位的元素可以设置将某个父标签作为参考进行移动，父标签就是定位父级。

-   注意：
    -   若有多个定位父级，参考最近的定位父级移动
    -   相对、绝对、固定定位都可以作为定位父级
    -   相对定位作定位父级（子绝父相）

### 固定定位

-   脱离文档流，固定在页面上，不随滚动条滚动

-   语法：position: fixed;  

-   设置偏移量：

    -   `top`：距离参考视口上边缘的间距             `right`：距离参考视口右边缘的距离
    -   `bottom`：距离参考视口下边缘的距离        `left`：距离参考视口左边缘的距离

-   特点：

    -   固定定位的元素会脱离文档流，在标准文档流之上，固定在页面上，不随着滚动条滚动
    -   只设置固定定位的元素会在当前位置脱离文档流，固定在页面上，一旦设置偏移量，固定定位的元素是参考整个文档进行移动
    -   固定定位的元素原来的空间不再占用

-   应用场景：头部导航、小广告、侧边栏导航等等。

### 定位层级

-   定位元素的层级关系

-   语法： z-index: n；

    -   n：代表数字，数字越大，层级越高，数字相同，后面定位的元素盖住前面定位的元素

-   注意：

    -   z-index只针对相对定位、绝对定位、固定定位有效
    -   定位层级可以设置负值
    -   标准文档流和定位元素默认都相当于默认为0

### 绝对定位元素宽度设置百分比

-   绝对定位的元素宽度设置百分比时，如果有定位父级，参考的是最近的定位父级的宽度，如果没有定位父级，参考整个文档的宽度

## 盒子居中技巧

`margin:auto auto；`：可以让元素水平居中，但是无法垂直居中，auto是一个自适应，一般盒子的高度不确定，由内容决定，将垂直方向上auto禁用。

#### 一：定位margin

-   大盒子：设置定位父级 `position：relative;`
-   小盒子：设置绝对定位`position:absolute;  top:0;  left:0; bottom:0;right:0;  margin:auto  auto;`

#### 二：margin-calc (宽高一致)

-   小盒子：
    -   margin-top: calc（50% - 小盒子高度的一半）
    -   margin-left：calc（50% - 小盒子宽度的一半）
-   注意：只适用于大盒子宽高一样，因为设置margin为百分比时，无论哪个方向是参考父元素的宽度

#### 三：定位-margin

-   大盒子：设置相对定位
-   小盒子：设置绝对定位，`top：50%;left:50%;` `margin-top: - 小盒子的高度的一半； margin-left：- 小盒子的宽度的一半`

#### 四：弹性盒模型

## 弹性盒模型

**传统的布局** ：display+float+position布局，兼容性好，但布局繁琐

-   不便：1.块级元素同行显示设置浮动——清除浮动  2.各种盒子居中问题   3.margin调整

**弹性盒模型** ：

-   概念：是一种当页面需要适应不同的屏幕大小时，确保元素拥有恰当行为的布局方式。
-   目的：提供一种布局方式，这种可以进行元素排列、空白空间分配等等。

**结构**

![image-20220328093513593](https://woniumd.oss-cn-hangzhou.aliyuncs.com/web/zhangrui/20220328093520.png)

弹性盒子：由弹性容器和弹性项目构成。  

1.弹性容器：包含弹性项目的父元素   

2.弹性项目：弹性容器里面的每个子元素都是弹性项目    

3.主轴：弹性项目一行显示的方向就是主轴的方向    

4.侧轴：与主轴垂直的方向就是侧轴的方向

### 弹性容器属性

#### display:flex | inline-flex

-   设置盒子为弹性容器，里面的子元素是以弹性项目显示
-   `display:flex`:设置一个块级的弹性容器，对其他的兄弟标签来说，他就是一个普通的块级标签，对其子元素来说，它就是一个弹性容器，子元素按照弹性项目的方向进行显示。
-   `display:inline-flex`：设置一个行级的弹性容器，对其他的兄弟标签来时，它就是一个普通的行级标签，对其子元素来说，它就是一个弹性容器，子元素按照弹性项目的方式进行显示。

**特点：**

-   弹性容器里面弹性项目可以同行显示，排列不下时按比例进行压缩显示
-   弹性容器没有设置高度时，弹性容器的高度可以自适应
-   弹性容器对其他兄弟标签没有影响
-   弹性容器只对直接子元素有影响

#### flex-wrap  ：换行

- `nowrap`：默认值，不换行   `wrap`：换行

#### flex-direction-垂直导航设计

- 设置弹性容器主轴的方向和弹性项目的排列方式

- 主轴：弹性项目同行显示的方向。侧轴：与主轴垂直的方向

- 取值：

  -   `row`：默认，设置水平方向为主轴，弹性项目从左到右依次排列
  -   `row-reverse`：设置水平方向为主轴，弹性项目从右到左依次排列
  -   `column`：设置垂直方向为主轴，弹性项目从上到下依次排列
  -   `column-reverse`：设置垂直方向为主轴，弹性项目从下到上依次排列

  富裕空间——弹性容器中除了弹性项目剩下的空白的空间，就是富裕空间

#### justify-content：主轴富裕空间

-   设置弹性容器主轴上的富裕空间的分配
-   取值：
    -   `flex-start`:默认值，将主轴上的富裕空间放在所有弹性项目之后
    -   `flex-end`：将主轴上的富裕空间放在所有弹性项目之前
    -   `center`：将弹性项目在主轴方向上居中
    -   `space-between`：首尾弹性项目紧靠弹性容器，中间均分
    -   `space-around`：将富裕空间均分到每个弹性项目两边
    -   `space-evenly`：每个弹性项目之间的间距均分，包含首尾弹性项目和弹性容器的间距

#### align-items：侧轴富裕空间

-   设置所有弹性项目在侧轴上的富裕空间的分配
-   取值：
    -   `flex-start`：当弹性项目设置高度时的默认值，将侧轴上的富裕空间均分在每行弹性项目之后
    -   `flex-end`：将侧轴上的富裕空间均分在每行弹性项目之前
    -   `center`：每行弹性项目上下均分，在每行中弹性项目在侧轴上居中
    -   `stretch`：当弹性项目没有设置高度时的默认值，将弹性项目拉伸撑满弹性容器
    -   `baseline`：侧轴高度由子元素内容来定，（有点瑕疵 ）

### 弹性项目属性

**弹性空间(闲余)**

- 弹性项目可以消化掉的富裕空间，就是弹性空间

- 原理：让弹性项目撑满整个弹性容器的主轴上的空间，通过`flex-grow`控制消化的比例

#### align-self：侧轴富裕空间

-   设置当前弹性项目在侧轴上的富裕空间的分配
-   取值：
    -   `flex-start`：当弹性项目设置高度时的默认值，将侧轴上的富裕空间均分在每行弹性项目之后
    -   `flex-end`：将侧轴上的富裕空间均分在每行弹性项目之前
    -   `center`：每行弹性项目上下均分，在每行中弹性项目在侧轴上居中
    -   `stretch`：当弹性项目没有设置高度时的默认值，将弹性项目拉伸撑满弹性容器

#### flex-shrink：设置压缩因子

- 原理：弹性容器中的弹性项目为了保证弹性项目能够在一行显示达到不换行的目的，会将弹性项目进行压缩显示，通过`flex-shrink`控制每个弹性项目压缩的空间。

- 语法： flex-shrink: 数字； 

  -   默认值为1，数字越大，压缩的空间越大，盒子的大小越小

- 计算公式：

  ```
    总的压缩空间= 弹性项目总宽度 - 弹性容器的宽度  每份压缩的空间= 总的压缩空间  /  压缩因子的总数  盒子的大小 = 原来的大小  -  每份压缩的空间 * 压缩因子
  ```

#### flex-grow：设置弹性因子

- 语法：flex-grow:数字；

  -   默认值为0，数字越大，弹性空间越大，盒子的大小越大

- 计算公式

  ```
    富裕空间 = 弹性容器的宽度- 弹性项目的总宽度  每份弹性空间 = 富裕空间 / 弹性因子总数  盒子的大小 = 原来的大小 + 每份弹性空间 * 弹性因子
  ```

#### order：弹性项目显示顺序

-   语法：  order: 数字；

    -   默认值为0，数字越大，元素越靠后，数字相同，按照代码顺序依次显示
    -   可以设置负值

-   应用：可以通过js拖拽实现拖拽到最后或最前


#### flex-basis

-   设置弹性项目的默认宽度

-   语法： flex-basis: 宽度；默认值为auto

-   注意：优先级： flex-basis  > witdth  > 由内容决定

#### flex复合属性

```css
flex:  弹性因子    压缩因子     默认宽度
flex: flex-grow  flex-shrink  flex-basis;
  // 默认值： 0  1  auto；
.box{
    flex: 0  0  auto;
}
```



## 线性渐变 linear-gradient

- 语法： background-image: linear-gradient(方向 ,  颜色1  位置1 , 颜色2  位置2 );

- 方向：默认to bottom（180deg或-180deg）0deg向上，顺时针正，逆时针负

- 颜色：至少有2种

- 位置：像素，百分比，没有首尾，默认在0% 或100%，纯色填充，相邻位置相同会断层。

  - ```css
    0%~20%是red，
    20%~50%是red到green的渐变，
    50%~70%是green到yellow的渐变，
    70%~100%是yellow 
    background: linear-gradient( red 20%, green 50%,yellow 70% );
    ```

## 重复线性渐变 repeating-linear-gradient

- 将线性渐变进行重复铺设，使用`repeating-linear-gredient`

- 注意：只有首尾的色标不在0%或100%时，重复线性渐变才有效

  ```css
    语法：
  background-image:repeating-linear-gradient(渐变线方向 ,  颜色1  位置1 , 颜色2  位置2 , 颜色3  位置3);
  ```


## 径向(椭圆)渐变

- 分为两部分：

  -   椭圆：用来控制径向渐变的位置、大小、形状
  -   色标：颜色和位置构成

  ```css
   语法：    
  background: radial-gradient(大小  形状  at x轴 y轴 , 颜色1  位置1 , 颜色2  位置2)；
  ```

- 大小：

  -   `farthest-corner`：半径是从圆心到最  远角, 默认值
  -   `closest-corner`：圆心到最   近角
  -   `farthest-side`：圆心到最   远的边
  -   `closest-side`:圆心到最   近的边

- 形状：

  -   `ellipse`：默认，椭圆
  -   `circle`：正圆

- 圆心： at x轴  y轴

  圆心默认在盒子的中心点，相当于center center

  -   单词：top  right left bottom  center  两两搭配使用
  -   像素：0px 0px 相当于盒子的左上角
  -   百分比：是参考盒子的宽度和高度， 50% 50% 相当于center center

## 重复径向渐变

- repeating-radial-gradient

- 注意：渐变首尾不能在0%或100%时，重复径向渐变才有效

- 语法：

  ```css
  background: repeating-radial-gradient(方向 ,  颜色1  位置1 , 颜色2  位置2 );
  ```

## 圆角 border-radius

```css
border-radius: 30px 30px 30px 30px / 30px 60px 60px 60px;  八个值：/前面代表水平半径，/后面代表垂直半径
```

## 盒子阴影 box-shadow

- 语法：模糊程度和阴影的大小可以默认不写

  ```css
  box-shadow: x轴偏移  y轴偏移  模糊程度  阴影大小  颜色；
  
  inset可以将外阴影变为内阴影  
  box-shadow: x轴偏移  y轴偏移  模糊程度  阴影大小  颜色  inset；
  
  可以设置多层阴影，中间使用逗号隔开  
  box-shadow: x轴偏移  y轴偏移  模糊程度  阴影大小  颜色 , 
  		      x轴偏移  y轴偏移  模糊程度  阴影大小  颜色 , 
                        x轴偏移  y轴偏移  模糊程度  阴影大小  颜色；
  ```


## 文字阴影 text-shadow

- 语法：

  ```css
    text-shadow: x轴偏移 y轴偏移  模糊程度   颜色；
  ```

## 结构选择器

-   伪类选择器的一种

### :first-child

- 第一个子标签

- 语法：

  ```css
  找到class名为box的标签里面的所有后代span标签，并且这个span标签是第一子标签  
  .box  span:first-child{  }
  ```

### :last-child

- 倒数第一个子标签

- 语法：

  ```css
  找到class名为box的标签里面的所有后代span标签，并且这个span标签是倒数第一子标签  
  .box  span:last-child{  }
  
  ```

### :nth-child(n)

- 第n个子标签, n代表数字, 偶数子标签2n, 2n-1奇数子标签

- 语法：

  ```css
  找到class名为box的标签里面的所有后代span标签，并且这个span标签是第n个子标签  
  .box span:nth-child(n){  }
  
  ```

### :nth-last-child(n)

- 倒数第n个子标签, n代表数字

- 语法：

  ```css
  找到class名为box的标签里面的所有后代span标签，并且这个span标签是倒数第n个子标签  
  .box span:nth-last-child(n){  }
  ```

### :first-of-type

- of-type：先筛选后排序

  ```js
  .box span:first-of-type{}
  ```

### :nth-of-type(n)

- 同类型的第n个标签

- 语法：

  ```css
  找到class名为box的标签里面的所有后代span标签，将其筛选处理进行重新排序，找到其中的第n个标签  
  .box span:nth-of-type(n){  }
  
  ```

### :nth-last-of-type(n)

- 同类型的倒数第n个标签

- 语法：

  ```css
  找到class名为box的标签里面的所有后代span标签，将其筛选处理进行重新排序，找到其中的倒数第n个标签  
  .box span:nth-last-of-type(n){  }
  
  ```

## transition：动画过渡

-   `transition` : 在更改css属性时控制动画执行、执行速率。可以在指定时间内完成效果，而不是立即生效，也可以设置动画的执行速率等

### transition-property-过渡属性名

- 语法：  transition-property: css属性名;

  -   默认值为all，代表所有的css属性

  -   必须配合过渡的执行时长才有效
  -   多个属性名同时过渡时，中间使用逗号隔开，时间和属性名一一对应

### transition-duration--过渡时长

- 规定整个过渡动画时间。

- 语法：transition-duration: 时间；

  -   默认值为0s， s代表秒，ms代表毫秒，1s=1000ms

  -   如果过渡的属性名的个数多于过渡的执行时长的个数，时间一一对应，时间重复一遍

### transition-timing-function--过渡速率

-   属性值：
    -   `ease`：默认值，以低速开始，然后变快，在结束前变慢
    -   `linear`：匀速
    -   `ease-in`:以低速开始
    -   `ease-out`：以低速结束
    -   `ease-in-out`：以低速开始和结束
    -   `cubic-bezier(x1,y1,x2,y2)`：贝塞尔曲线

### 贝塞尔曲线

-   概念：用于构建二维图形速度曲线，本质为数学曲线

-   作用：在css中，贝塞尔曲线用于定义动画的执行速率

-   语法： **cubic-bezier(x1,y1,x2,y2)**

    -   这两个坐标决定了曲线的形状，不同的形状对应的速率不一样，甚至可以设置负值

-   构建贝塞尔曲线网址：https://cubic-bezier.com/

### transition-delay--过渡延迟

-   语法：transition-delay: 时间;  默认值为0s

### transition--复合属性

- 语法：

  ```css
  transition: css属性名  执行时长  延迟时长  执行速率；  
  
  多个属性过渡时，中间使用逗号隔开  
  transition: css属性名1  执行时长  延迟时长  执行速率 , 
  		 css属性名2  执行时长  延迟时长  执行速率 , 
  		 css属性名3  执行时长  延迟时长  执行速率；
  
  ```

- 不可过渡属性：如display属性

## 2D3D转换--transform

-   概念:css提供`transform`属性, 来实现了对标签的:位移, 旋转, 缩放, 倾斜
-   特点:
    -   不会影响到其他元素
    -   一般还是搭配 hover 和 transition 来使用
    -   轴向会随着转换而改变.

### 位移

```css
===》2D
x轴位移
transform: translateX(偏移量)

y轴位移
transform: translateY(偏移量)

x轴,y轴同时位移
transform: translate(x轴偏移量,y轴偏移量)

===》3D
x轴位移
transform: translateX(偏移量)

y轴位移
transform: translateY(偏移量)

z轴位移
transform: translateZ(偏移量)

x轴,y轴,z轴同时位移
transform: translate(x轴偏移量,y轴偏移量,z轴偏移量)

```

### 旋转

```css
===》2D
默认旋转,以中心点旋转(等同于z轴旋转)
transform: rotate(角度)

以x轴旋转
transform: rotateX(角度)

以y轴旋转
transform: rotateY(角度)

===》3D
默认旋转,以中心点旋转
transform: rotate(角度)

以x轴旋转
transform: rotateX(角度)

以y轴旋转
transform: rotateY(角度)

同时控制x,y,z轴旋转
transform: rotate3d(x轴,y轴,z轴,角度)

```

### 缩放

```css
===》2D
x轴缩放
transform:scaleX(倍数)

y轴缩放
transform:scaleY(倍数)

x轴y轴同时缩放
transform:scale(倍数,倍数) 

 等比例缩放
transform:scale(倍数) 

===》3D
x轴缩放
transform:scaleX(倍数)

y轴缩放
transform:scaleY(倍数)

z轴缩放
transform:scaleZ(倍数)

x轴y轴z轴同时缩放
transform:scale3d(x轴倍数,y轴倍数,z轴倍数) 
transform:scale3d(倍数)  等比例缩放

```

### 倾斜

```css
===》2D
x轴倾斜
transform: skewX(角度)   或者  transform: skew(角度)

y轴倾斜
transform: skewY(角度)

x,y轴同时倾斜
transform: skew(角度, 角度)

```

### 复合属性

```css
先x轴向右位移200px,同时倾斜45度,同时旋转90度
transform: translateX(200px) skewX(45deg) rotate(90deg)

```

### 2D3D基点转换

- css提供transform-origin,来改变元素上默认转换的基点位置

- 默认位置转换都是参考的中心点，需要设置在要转换的标签上

  ```css
  transform-origin: x轴 y轴
  transform-origin: x轴,y轴,z轴
  
  ```

  -   像素: 100px  0px
  -   单词: top left center right bottom ,两两组合, 如左上角:  left top
  -   百分比: 相对于该元素的宽高 0% 0% :左上角  100% 100% 右下角

### 3D景深--近大远小

-   CSS提供`perspective`属性来表示景深, 可以看做是一个盒子的厚度,来实现近大远小的一个效果，
-   想让元素处于3D空间(景深)时,给父盒子设置perspective 属性，激活3D空间
-   语法:

```css
.box{    perspective: 600px}

```

-   景深值越大,3D的效果越小,
-   景深值越小.3D的效果越大,

### 3D灭点

<img src="https://woniumd.oss-cn-hangzhou.aliyuncs.com/web/zhangxiao/202203281055351.png" alt="img" style="zoom:25%;" />

- 灭点：视线消失点(观察者位置)，默认位于设置了景深元素的正中心

- 修改灭点

  ```
  perspective-origin:x轴 y轴
  
  ```

  -   单词.left center,right,top,bottom 两两组合
  -   像素,0px,0px  左上
  -   百分比: 50% 50% 正中间

- 需要设置在有景深属性的标签上.

### transform-style 子元素显示模式

- 概念:用于设置子元素在父元素中是以2D显示还是3D显示

- 语法

  ```
  transform-style:flat | preserve-3d
  
  ```

  -   flat:默认值.子元素以2d呈现在父元素中
  -   preserve-3d:子元素以3d呈现在父元素中

- 注意

  -   该属性不一定要设置在景深元素上

## animation动画

### 概念:

- 一段段连续的动画,不断切换,达到动态画面的效果,它是通过帧数来控制动画的速率.

  ![book](https://woniumd.oss-cn-hangzhou.aliyuncs.com/web/zhangxiao/202203151033735.gif)

- 帧数:每秒切换的画面数量,流畅24帧，60帧,120帧,144帧,单位叫做hz--帧数越大,画面越流畅,

- css种有个概念,叫做关键帧,动画大浮动波动的画面

  -   例子1, 蹲下:2个关键正, 开始蹲下,蹲下结束
  -   例子2, 蹲下 系个鞋带 站起来, 6个关键帧

- css3提供了一个animation的属性,来实现标签自动并持续播放的一个动画效果

### 实现方法

-   css通过`@keyframes`定义关键帧,并给动画定义个名字
-   通过`animation`属性来绑定该关键帧,并且设置执行时间,来达到动画效果
-   通过`animation`属性来实现动画效果,含延迟,速率,次数,状态.

#### 定义关键帧

```
@keyframes 动画名字{    from{        开始状态    }    to{        结束状态    }}除了from和to以外,我们还可以通过百分比来设置关键帧,@keyframes 动画名字{    0%{        开始状态    }    50%{        执行时长中间的状态    }    100%{        结束状态    }}

```

#### 调用动画

```
选择器{    animation-name:动画名称;    animation-duration:执行时长}

```

#### 动画的其他控制属性

- animation-name : 绑定动画名

- animation-duration: 设置动画执行时长

- animation-delay: 延迟执行

- animation-timing-function: 控制执行速率

  -   ease: 默认值 ,低速开始开始,中间变快,低速结束.线性运动
  -   linear:匀速,
  -   ease-in: 低速开始,快速结束
  -   ease-out: 快速开始以低速结束
  -   ease-in-out: 低速开始低速结束
  -   cubic-bezier(x1,y1,x2,y2): 贝塞尔运动

- animation-iteration-count:控制执行次数

  -   数字:代表执行几次
  -   infinite:代表无限次执行

- `animation-direction·`: 控制动画执行的方向

  -   normal: 默认值
  -   reverse: 反向执行
  -   alternate: 奇数次正向运动,偶数次反向运动
  -   alternate-reverse: 奇数次反向运动,偶数次正向运动

- animation-fill-mode: 控制运动结束后,第一帧或者最后一帧是否保持在元素上

  -   backwards: 将第一帧作用于元素上,并保持,
  -   forwards: 将最后一帧作用于元素上,并保持

- animation-play-state: 设置播放状态,也就是运动过程中的状态

  -   running: 继续
  -   paused: 暂停
  -   注意:一般搭配hover使用

- 复合属性

  ```
  animation: 名字 执行时长 执行速率 延迟执行 执行次数 播放方向 保持状态
  
  ```

## 响应式布局

### 常见布局方式

-   静态布局:
    -   内容区域采用固定大小,内容不会随着窗口的变化而变化
    -   一般只适配我们的pc端,采用中间固定,两边适应
    -   好处
        -   布局简单,盒子宽度固定就可以
        -   不用考虑适应性
    -   坏处
        -   对移动端不友好
        -   浏览器缩小会产生横向滚动条
-   流式布局
    -   通过设置百分比配合 min-width和max-width来进行页面布局
    -   好处
        -   有一定的适应性
    -   坏处
        -   页面缩小到一定程度的时候, 会造成页面错乱
-   响应式布局
    -   利用了 `媒体查询`的概念,来针对不同的屏幕,开发不同的代码,来达到适应所用屏幕大小的布局.
    -   好处
        -   能适应多种规格的屏幕大小,用户体验极佳
    -   坏处
        -   编写多套代码,开发效率底下

### 响应式布局

- 核心:媒体查询

  - 通过判断屏幕的大小和媒体类型来实现响应式

    媒体类型：

    | 值       | 设备类型                 | 值         | 设备类型           |
    | -------- | ------------------------ | ---------- | ------------------ |
    | All      | 所有设备，默认值         | Handhelp   | 便携设备           |
    | Print    | 打印设备                 | Projection | 投影设备           |
    | `Screen` | `电脑显示器，彩色屏幕`   | Speech     | 语音或者音频合成器 |
    | Braille  | 盲人用点字法触觉回馈设备 | Tv         | 电视类型设备       |
    | Embossed | 盲文打印机               | Try        | 电传打印机或者终端 |

- 查询: 通过css代码来自动查询,该设备是否属于我们想要的这个媒体设备

- 语法:通过link标签引入css文件并判断媒体类型是否为该类

```
<link rel="stylesheet" href="./index2.css" media="媒体类型" >
@media 媒体类型{    选择器{        针对该媒体类型的样式    }}

```

### 媒体特性

-   用于描述媒体的特点,包括,高度\宽度\最大宽度\最小宽度,是否横屏\竖屏等.

|   **值**    |            **描述**            |                      |
| :---------: | :----------------------------: | -------------------- |
|    width    | 网页显示区域完全等于设备的宽度 |                      |
|   height    | 网页显示区域完全等于设备的高度 |                      |
|  max-width  |  网页显示区域小于等于设备宽度  |                      |
| max-height  |  网页显示区域小于等于设备高度  |                      |
|  min-width  | 网页显示区域大于等于设备的宽度 |                      |
| min-height  | 网页显示区域大于等于设备的高度 |                      |
| orientation |     portrait (竖屏模式) \      | landscape (横屏模式) |

### 通过媒体关键字来连接我们的媒体特性

-   `and`: 表示并且的意思,既要满足前面的条件,也要满足后面的条件,必须同时满足才会作用css样式

```
@media screen and (min-width:1199px){    body{        background-color: aqua;    }}

```

-   `,`:表示或者,只要满足前后一个条件即可

```
@media tv , (min-width:1199px){    body{        background-color: aqua;    }}

```

-   `not`:否定,不是的意思

```
@media not tv{    body{        background-color: aqua;    }}

```

-   `only`:仅仅是,只是

```
@media only screen{    body{        background-color: aqua;    }

```

# bootstrap

### 是一个去前端开发的辅助组件库,帮助我们快速开发项目的一个响应式框架

-   以移动端优先的开发工具
-   官网:https://www.bootcss.com/

### bootstrap3 与4 的区别

|       BootStrap 3        |                   BootStrap 4                    |
| :----------------------: | :----------------------------------------------: |
|       less语言编写       |                   sass语言编写                   |
|        4种栅格类         |                    5种栅格类                     |
|       使用px为单位       | 使用rem和em为单位（除部分margin和padding使用px） |
| 使用push和pull向左右移动 |             偏移列通过offset-类设置              |
|   使用float的布局方式    |            选择弹性盒模型（flexbox）             |

-   bootstrap3 的栅格系统
    -   特小 (col-xs-) 适配手机    (<768px)
    -   小 (col-ms-) 适配平板 (>=768 and <992)
    -   中 (col-md-) 适配普通小屏电脑 (>=992 and <1200px)
    -   大 (col-lg- ) 适配宽屏电脑 (>=1200px)
-   bootstrap4 的栅格系统 5种
    -   特小 (col-) (<567px)
    -   小 (col-ms- ) (>=567px and <768px)
    -   中 (col-md-)  (>=768 and <992)
    -   大 (col-lg-) (>=992 and <1200px)
    -   特大 (col-xl-) (>=1200px)

### bootstrap基本使用

- 引入文件

  ```css
  <!-- 引入bootstrap的css文件 --><!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-p1KAotb3W9ndluCsqePPYnjRm3c6abdnIjo0tQwYUv83VsbsYd43RuofnFAaDo0E" crossorigin="anonymous"> --><link rel="stylesheet" href="./bootstrap-4.6.1-dist/css/bootstrap.min.css"><!-- 引入jquery文件 --><script src="./bootstrap-4.6.1-dist/js/jquery-3.5.1.min.js"></script><!-- <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script> --><!-- 引入bootstrap的js文件 --><script src="./bootstrap-4.6.1-dist/js/bootstrap.bundle.min.js"></script><!-- <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-E5Sj1saJVFNzWWK3YIJB4LEDEEVEGaOdfmCprPDkfWUo+xkb6Ep52Q1TMEtgcFwi" crossorigin="anonymous"></script> -->
  
  ```

- CV大法

### 响应式容器

|                    | Extra small <576px | Small ≥576px | Medium ≥768px | Large ≥992px | Extra large ≥1200px |
| ------------------ | ------------------ | ------------ | ------------- | ------------ | ------------------- |
| `.container`       | 100%               | 540px        | 720px         | 960px        | 1140px              |
| `.container-sm`    | 100%               | 540px        | 720px         | 960px        | 1140px              |
| `.container-md`    | 100%               | 100%         | 720px         | 960px        | 1140px              |
| `.container-lg`    | 100%               | 100%         | 100%          | 960px        | 1140px              |
| `.container-xl`    | 100%               | 100%         | 100%          | 100%         | 1140px              |
| `.container-fluid` | 100%               | 100%         | 100%          | 100%         | 100%                |

### 栅格系统

-   通过 row这个类 来定义 一行,每一行分为了12列, 
-   通过col来定义列数,如果,没有特殊设置,会均分12列
-   如果容器一行被沾满,剩下的会自动换行

|                   |          超小 <576px          | 小 ≥576px  | 中 ≥768 像素 | 大 ≥992px  | 超大 ≥1200px |
| :---------------: | :---------------------------: | :--------: | :----------: | :--------: | ------------ |
| 最大container宽度 |          无（自动）           |  540像素   |   720像素    |  960像素   | 1140像素     |
|      类前缀       |            `.col-`            | `.col-sm-` |  `.col-md-`  | `.col-lg-` | `.col-xl-`   |
|       列数        |              12               |            |              |            |              |
|    装订线宽度     | 30 像素（列的每一侧 15 像素） |            |              |            |              |
|      可嵌套       |             是的              |            |              |            |              |
|      列排序       |             是的              |            |              |            |              |



