

## SASS

原生css的不便

-   重复书写css的选择器
-   修改属性时，每次需要修改，不能达到一处处处改
-   css代码重复编写

-   less和sass都是一个css预处理器，为网站启用可定义、可管理、可重用的样式表，就是动态的样式表语言。
    -   css预处理器：一种脚本语言，可扩展css将其编译为常规的css代码，以便浏览器正常读取。
    -   sass就是css扩展，通过提供的嵌套、混合、变量等等语言，通过sass编译为css代码。
-   作用：极大地提高开发css代码效率
-   官网：https://www.sass.hk/



**使用vscode中`easy sass`插件来完成sass文件编写**

-   安装后重启
-   新建`.sass`或`.scss`后缀文件，在里面书写css代码
    -   `.sass`是老版本的sass文件格式
    -   `.scss`是新版本的sass文件格式（推荐使用）
-   `easy sass`可以自动将sass文件编译成css文件，在文件中引入css文件即可

**手动更改编译后的css文件的存储路径**

-   找到设置，搜索`easy sass`
-   注意：存储路径是从`工作区`出发，工作区必须有名字
-   <img src="https://woniumd.oss-cn-hangzhou.aliyuncs.com/web/zhangrui/20220328165731.png" alt="image-20220328165724144" style="zoom:30%;" />

### 嵌套

- sass支持选择器里面嵌套子选择器

- 作用：让sass代码层级结构更加清晰明了，不会出现父子标签的权重问题

- 语法：

  ```scss
  .header {      
      width: 100%;      
      .nav{               
          margin: 0 auto;          
          ul{                      
              list-style: none;              
              >li{                              
                  width: 60px;
                  // &代表父选择器                  
                  &:hover{ color: red; }                  
                  &::after{ content: "111"; }              
              }              
              +.box{ width: 500px; }              
              ~div{ height: 50px; }
          }      
      } 
  }  
  编译后的css代码： 
  .header {  width: 100%;  } 
  .header .nav {  margin: 0 auto;  } 
  .header .nav ul {  list-style: none;  }  
  .header .nav ul > li {  width: 60px; } 
  .header .nav ul > li:hover {    color: red;  }  
  .header .nav ul > li::after {    content: "111";  }  
  .header .nav ul + .box {    width: 500px;  }  
  .header .nav ul ~ div {    height: 50px;  }
  ```

### 变量

- 概念：变量可以看作一个保存数据的容器，可以在代码中重复使用

- 作用：一处改处处改

- 语法：

  ```scss
    $变量名: 数据;
  ```

  -   变量名命名规则：数字、字母、_和-构成，不以数字开头，单词之间-连接

- 注意：

  -   再变量使用前需先定义
  -   可以进行数学运算，符号前后加空格



### 多版sass区别

[sass（dart sass）和node-sass 的区别以及 /deep/、::v-deep的支持](https://www.cnblogs.com/yyh1/p/15954139.html) 

`sass` ：由 `ts`调用 `dart-sass`实现的工具类，来编译 `sass`（以前是由单纯的 `ts`实现的）
`dart-sass` ：由 `dart` 实现的,通过 `dart vm` 运行 `dart` 是编译 `sass`（在 `npm` 可以看到该包已不被开放下载了）
`node-sass` 是由 `node` 调用 底层 `c++` 实现的 `libsass` 来编译 `sass

**目前`sass`官方主推的是 `dart-sass`**

**再看看 深度选择器 `/deep/`和`::v-deep`:**

1. `sass` 只支持 `::v-deep`
2. `node-sass` 支持 `/deep/`和`::v-deep`

### sass和scss的区别

Sass 和 SCSS 其实是同一种东西，我们平时都称之为 Sass，两者之间不同之处有以下两点：

- 文件扩展名不同，Sass 是以“.sass”后缀为扩展名，而 SCSS 是以“.scss”后缀为扩展名
- 语法书写方式不同，Sass 是以严格的缩进式语法规则来书写，不带大括号({})和分号(;)，而 SCSS 的语法书写和我们的 CSS 语法书写方式非常类似。





## Less



## Stylus

使用严格缩进来确定属性