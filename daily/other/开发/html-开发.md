## HTML

##### 1、H5新增特性

语义化标签，音视频标签，canvas画布，地理定位，本地存储，表单控件，拖拽和释放，响应式布局

HTML5的缺点：低版本浏览器支持性不好，比如IE9以下的浏览器不支持HTML5。

##### 2、不会改变原数组内容的API

indexOf , lastIndexOf , includes , concat , slice , ( join , split )

##### 3、http是什么意思？有哪些状态码？

HTTP状态码：是用以表示网页服务器超文本传输协议响应状态的三位数字

404资源找不到

200成功

500服务器错误

扩展：http协议特点（简单快速、灵活、无连接、无状态、明文传输）

##### 4、HTTP 80和HTTPS 443区别？

  		明文，速度，端口，身份认证

##### 5、什么是npm 作用

node package management , node包管理工具；

nodejs自带命令，可以实现项目包的统一管理(包下载、删除、查看)

##### 6、HTTP协议的特点

简单快速、灵活、无连接、无状态、明文传输

##### 7、身份认证的主流实现方式

1、cookie与session(了解)

2、本地存储

3、token



## CSS

##### 1、CSS3技术？

1.弹性盒模型2.动画/过渡。3圆角。4阴影。5背景渐变效果。6响应式布局（媒体查询)

1.新增结构选择器
p:nth-child(n){color: rgba(255, 0, 0, 0.75)}
2.新增伪元素
::before 和 ::after
3.弹性盒模型
display: flex;
4.多列布局
column-count: 5;
5.媒体查询 
@media (max-width: 480px) {.box: {column-count: 1;}}
6.个性化字体 
@font-face{font-family: BorderWeb; src:url(BORDERW0.eot);}
7.颜色透明度
color: rgba(255, 0, 0, 0.75);
8.圆角
border-radius: 5px;
9.渐变 
background:linear-gradient(red, green, blue);
10.阴影
box-shadow:3px 3px 3px rgba(0, 64, 128, 0.3);
11.倒影 
box-reflect: below 2px;
12.文字装饰
text-stroke-color: red;
13.文字溢出 
text-overflow:ellipsis;
14.背景效果
background-size: 100px 100px;
15.边框效果
border-image:url(bt_blue.png) 0 10;
16.旋转
transform: rotate(20deg);
17.倾斜
transform: skew(150deg, -10deg);
18.位移
transform: translate(20px, 20px);
19.缩放
transform: scale(.5);
20.平滑过渡 
transition: all .3s ease-in .1s;
21.动画 
@keyframes anim-1 {50% {border-radius: 50%;}} animation: anim-1 1s;