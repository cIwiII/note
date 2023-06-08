20220330-前端与后端

# 前端与后端

## 软件架构模式

- C/S
  - client/server
  - 客户端/服务器端
- B/S
  - browser/server
  - 浏览器/服务器
  - 将程序全部放在服务器上，用户通过浏览器访问服务器资源;
  - 淘宝、京东、哔哩哔哩等

## 服务器

- 一个安装了服务器软件的计算机。

## 前端与后端

- 前端
  - 提供一个用户体验良好的应用程序。
  - 主要实现用户交互和数据展示。
- 后端
  - 数据业务处理，接收前端数据，逻辑判断分析，操作数据库数据，将数据库数据处理结果发送给前端。

## 流程

- 登录

  <img src="https://woniuimage.oss-cn-hangzhou.aliyuncs.com/woniuimage/woniunote/20220330/7039ae8fae344427a6097f82c17fb42c.png" alt="img" style="zoom: 100%;" />

- 首页数据展示

  ![img](https://woniuimage.oss-cn-hangzhou.aliyuncs.com/woniuimage/woniunote/20220330/d58565269db1475aa416641e10f75f29.png)

## URL

- Uniform Resource Locator，统一资源定位器。
- 用于定位互联网中的资源(资源的地址)。
- 格式:
  - `协议://主机:端口号/资源路径?参数`
  - 协议:
    - 一般为`http`或`https`；
  - 主机:
    - IP:
      - IPv4:0.0.0.0~255.255.255.255
      - IPv6:保证每台互联网上的计算机都要唯一的IP地址。
    - 域名
      - `www.主机名称.com`
  - 端口号:
    - 定位服务程序;
    - 取值:0~65535;
    - 申请端口尽量避免`0~1024`的端口，因为该范围的端口大部分被系统占用;

## 前端与后端技术栈

- 前端
  - 基础:HTML、CSS、JavaScript
  - 基础库:jquery、boostrap
  - 高级(进阶):Vue、React等
- 后端
  - Nodejs:express
  - Java体系:springboot+springcloud
- 数据库
  - mongodb
  - mysql、oracle

20220330-HTTP协议

# HTTP协议

## 概念

- 计算机网络协议
  - 计算机间通讯要遵循约定、规则、标准。
- HTTP
  - HyperText Transfer Protocol超文本传输协议。
  - 每个请求只能请求服务器上的一个资源，服务器会对请求生成对应响应

## 请求

- 请求格式

  - 请求头(浏览器要告诉给服务器的通用信息)
    - 请求首行
      - `请求类型 资源路径 HTTP协议版本`
  - 请求正文(GET没有请求正文，浏览器向服务器提交的数据)
    - 以键值对形式提交

- 请求类型

  - ```
    GET
    ```

    - 向服务器索取资源的请求

  - ```
    POST
    ```

    - 向服务器提交数据的请求
  
  - 另外要说一点，这两个都是发送数据的，只是发送机制不一样，不要相信网上说的 "GET获得服务器数据，POST向服务器发送数据"!!    另外GET安全性非常低，Post安全性较高， 但是执行效率却比Post方法好，一般查询的时候我们用GET，数据增删改的时候用POST！！

## 响应

- 组成
  - 响应头(服务器要告诉给浏览器的一些通用信息)
    - 响应首行
      - `HTTP版本 响应状态码`
  - 响应正文
    - 针对GET请求，响应内容一般为请求资源的内容;
    - 针对POST请求，响应内容一般为请求数据的处理结果;

## 状态码

- HTTP响应状态码，由3位数字组成;

  - 常见的状态码
    - 200:表示成功
    - 404:资源找不到
    - 500:服务器错误(服务器后端程序执行错误，抛出异常)

  ![img](https://woniuimage.oss-cn-hangzhou.aliyuncs.com/woniuimage/woniunote/20220330/14577529975147b3a2b5968307a8c8ab.png)

- 100~199 : 成功接受请求，客户端需提交下一次请求才能完成整个处理过程
- 200: OK，客户端请求成功
- 300~399：请求资源已移到新的地址(302,307,304)
- 401：请求未授权，改状态代码需与WWW-Authenticate报头域一起使用
- 403：Forbidden，服务器收到请求，但是拒绝提供服务
- 404：Not Found，请求资源不存在，
- 500：Internal Server Error，服务器发生不可预期的错误
- 503：Server Unavailable，服务器当前不能处理客户端请求，一段时间后可能恢复正常



## 缓存

- 从服务器获取不常改变的资源后，存储到浏览器本地文件夹中，下次要使用资源时，先从本地文件查找，如果有，则直接使用，从而减少浏览器请求次数以及服务器响应次数，提高用户体验，减少流量消耗，减少服务器压力。

## 特点

1. 简单快速
   - 使用简单，仅需提供请求资源路径和方式，则可以发送HTTP请求；
   - 传输速度快;
2. 灵活
   - 支持各种资源的传输;
3. 无连接
   - 短连接
     - 发送请求与响应前，先建立连接(建立通信通道),将请求数据包发送到服务器，服务器生成响应数据包后，发送给浏览器主机，该通道则被注销；
   - 长连接
     - 发送请求与响应前，先建立连接(建立通信通道),将请求数据包发送到服务器，服务器生成响应数据包后，发送给浏览器主机，该通道不会马上被注销(一般会限制使用事件或请求总数)；
4. 无状态
   - 不具备保存用户状态信息的能力;
     - 比如:登录状态
5. 明文传输
   - 发送的数据不做加密处理;

## HTTP与HTTPS区别

1. 端口号
   - HTTP默认端口号为80，HTTPS默认端口号为443;
2. 数据传输
   - HTTP数据传输以明文形式传输，HTTPS数据以加密形式传输;
3. 服务器身份认证
   - HTTP不具备识别目标服务器是否正规合法能力，HTTPS识别服务器是否正规;
4. 响应速度
   - HTTP协议响应速度高于HTTPS，HTTPS(HTTP+SSL+TLS);

20220330-Nodejs概述

# Nodejs概述

## 概述

- 是一个可以独立执行JavaScript的服务器环境。
- 底层基于谷歌的V8引擎实现。
- 可以使用Nodejs环境实现后端程序编写。

## 搭建环境

1. 下载安装包;
   - 下载URL：`https://registry.npmmirror.com/binary.html?path=node/`
   - win10可以下载v16.x，win7最高版本v12.x
     - 找到对应系统位数的`msi`文件下载
2. 安装
   - 一路next;
   - 安装前退出各种杀毒软件，以管理员身份安装，尽量使用默认安装路径(如果要自定义安装位置，不要选择包含中文字符的路径)
3. 测试是否安装成功
   - 打开命令行窗口
     - 系统键+R,打开运行，输入`cmd`，回车
   - 输入命令测试是否成功
     - `node -v`

## 执行JS文件

1. 准备要执行的JS文件
2. 执行目标JS文件
   - 基于系统命令行执行
     1. 在要执行的文件所在目录下，文件路径输入栏中输入`cmd`，打开命令行窗口;
     2. 命令行窗口输入`node 目标文件名.js`,执行目标文件;
   - 基于VSCode执行
     1. 选中要执行的JS文件，右键选择`在集成终端中打开`;
     2. 命令行窗口输入`node 目标文件名.js`,执行目标文件;

20220330-npm

# npm

## 背景

- 实际开发中，经常使用第三方库时，存在以下问题:
  1. 需要去各种网站下载对应包;
  2. 项目整合时，存在版本管理不方便;

## 概念

- npm(node package management，node包管理工具):nodejs捆绑安装（自带）的命令，可以实现项目包的统一管理(包下载、删除、查看)。

## 操作流程

1. 创建项目文件夹;

2. 初始化项目;

   - 选中项目文件夹，右键选择`在集成终端中打开`,打开命令行窗口;

   - 输入命令`npm init -y`，并回车;

     - `-y`:可选，一律确认为`yes`;

       ```
       npm init -y
       ```

3. 下载目标包;

   - 输入命令`npm install 包名`

     - 注意包名全小写;

       ```
       npm install jquery
       ```

## 文件解释

- `node_modules`:该文件夹用于存放使用`npm`命令下载的第三方包文件，每个包会以一个文件夹的形式存在;

- `package-lock.json`(不要去修改):记录依赖包信息，后期使用git上传项目时，用于版本控制;

- ```
  package.json
  ```

  :用于实时记录当前项目的依赖信息。

  - 每个包会以`dependencies`或`devDependencies`中一条记录的形式存在;

## npm常用命令

- 查看包的版本信息

  - 查看默认下载的版本号`npm view 包名 version`

    ```
    npm view jquery version
    ```

  - 查看所有版本`npm view 包名 versions`

    ```
    npm view jquery versions
    ```

- 下载

  - 下载默认版本(最新)`npm install 包名`

    ```
    npm install jquery
    ```

  - 下载指定版本`npm install 包名@版本号`

    ```
    npm install jquery@1.9.1npm install jquery@2
    ```

  - 可以将`install`简写为`i`,`npm i 包名@版本号`

    ```
    npm i jquery@3
    ```

- 卸载(删除)

  - 卸载`npm uninstall 包名`

    ```
    npm uninstall jquery
    ```

  - 可以将`uninstall`简写为`uni`,`npm uni 包名`

    ```
    npm uni jquery
    ```

- 多文件操作

  - 下载`npm i 包名1 包名2 ....`

    ```
    npm i jquery bootstrap
    ```

  - 卸载`npm uni 包名1 包名2 .....`

    ```
    npm uni jquery bootstrap
    ```

- 下载`package.json`中配置的第三方依赖包`npm i`

  ```
  npm i
  ```

## 镜像地址

- 默认镜像地址`https://registry.npmjs.org/`

- 查看`npm config get registry`

  ```
  npm config get registry
  ```

- 修改`npm config set registry 新的镜像地址`

  ```
  npm config set registry https://registry.npm.taobao.org/
  ```

## 全局安装与局部安装

- 局部安装

  - 默认安装方式。

  - 将目标包下载在当前项目中，只在当前项目使用。

    ```
    npm i jquery
    ```

- 全局安装

  - 将目标包下载在nodejs环境下，全局环境使用。

  - 默认下载安装位置`C:\Users\Administrator\AppData\Roaming\npm\node_modules`

  - 一般在所有项目都要使用的命令包使用全局安装。

  - `npm i 包名 -g`

    ```
    npm i bootstrap -g
    ```

## 开发依赖和生产依赖

- 开发依赖

  - 在项目开发(编码)时需要用到的第三方包，被称为开发依赖。

  - 只在编码期用到的包使用开发依赖，一般用于解决开发效率和资源管理问题。

  - 比如:webpack等。

  - 下载的包会在`package.json`中以`devDependencies`中的声明存在;

  - 查看全局包下载安装路径`npm config get prefix`,修改全局包下载安装路径`npm config set prefix 新路径`;

  - `npm i 包名 -D`或者`npm i 包名 --save-dev`;

    ```
     npm i bootstrap -D npm i bootstrap --save-dev
    ```

- 生产依赖

  - 在项目处于生产阶段(上线)时要要到的第三方包，被称为生产依赖。

  - 在编码时和运行时都要用到的包使用生产依赖。

  - 比如:jquery、bootstrap等。

  - 下载的包会在`package.json`中以`dependencies`中的声明存在;

  - 默认下载为生产依赖，也可以使用`npm i 包名 -S`或`npm i 包名 --save`

    ```
    npm i bootstrapnpm i bootstrap -Snpm i bootstrap --save
    ```

20220331-express

# express

## 概念

- 一个可以快速搭建一个web项目环境的nodejs框架。
- 自动创建项目相关文件，配置项目运行的服务器环境。

## 安装

```
npm i express-generator -g
```

## 创建express项目

- 执行创建express项目命令`express 项目名称`

  ```
  express expressDemo
  ```

  - 使用express命令创建报错如下:

    ![img](https://woniuimage.oss-cn-hangzhou.aliyuncs.com/woniuimage/woniunote/20220331/5389d1f189ec4119b84d702e1b37ee5a.png)

  - 解决方案：以管理员身份打开`window PowerShell`窗口，输入`set-ExecutionPolicy RemoteSigned`命令，选择`y`或`A`，重启VSCode则可以解决。

## express项目文件

- ```
  bin
  ```

  :存放服务器配置文件。

  - `www`:服务器配置文件，编写服务器配置信息。

- ```
  public
  ```

  :存放项目公共资源。

  - 公共资源:可以被用户请求访问的资源(浏览器可以从服务器获取到的资源)。
  - 比如:html、css、js、img等。

- ```
  routes
  ```

  :路由配置文件夹。存放路由配置文件。

  - 配置后端代码接口。

- `views`:存放模板文件。

- `app.js`:项目的启动入口文件，执行该文件可以启动服务器，服务器启动后，该项目的资源就可以被用户访问。

- `package.json`:项目包配置文件。

## 初体验express项目

1. 创建express项目;

   ```
   express 项目名称
   ```

2. 准备并下载项目要使用的基础包;

   ```
   npm i
   ```

3. 创建项目首页

   - 首页一般命名为`index`
   - 在`public`文件夹中创建`index.html`

4. 配置启动信息

   - 删除`app.js`中的`module.exports = app;`

   - 在`app.js`末尾，添加以下代码:

     ```
     app.listen(端口号,()=>{    //当服务器启动成功时要执行的代码});app.listen(1314,()=>{  console.log(`服务器启动成功，端口号为1314`);});
     ```

     - 端口不能冲突，可以在命令行输入`netstat -ano`命令查看系统端口占用情况;

5. 启动服务器

   ```
   node app.js
   ```

   - 关闭服务器
     1. 关闭终端；
     2. 输入`ctrl+c`;

6. 访问服务器资源;

   - 浏览器地址栏输入项目资源网址访问项目资源:

     - `http://localhost:端口号/资源路径`

     - ```
       http://127.0.0.1:端口号/资源路径
       ```

       - 首页的资源路径可以省略服务器会自动在`public`下去查找`index`文件

## 后端代码编写

1. 创建路由文件;

   - 在`routes`文件夹中创建js文件;

2. 配置路由(配置访问路径);

   - 配置一级路由

     - 创建路由对象

       - 在`app.js`文件中添加以下代码

         ```
         let 路由对象名称=require('路由文件相对app.js路径');
         ```

     - 配置路由访问路径

       - 在`app.js`文件中添加以下代码

         ```
         app.use('/自定义路径名',路由对象名称);
         ```

   - 配置二级路由

     - 在目标路由文件中添加以下代码

       ```
       var express = require('express');var router = express.Router();//二级路由router.get('/自定义二级路由名称', function(req, res, next) {  console.log('执行到了b');  res.send({      mes:'测试响应是否成功'  });});module.exports = router;
       ```

3. 前端请求访问后端资源

   - `http://主机:端口号/一级路由/二级路由`
   - `http://127.0.0.1:1314/a/b`

## 案例-登录

1. 创建对应功能的路由文件(如果不存在时,按功能模块划分);

2. 配置路由

   - 一级路由`app.js`

     ```
     let userRouter=require('./routes/user');app.use('/user',userRouter);
     ```

   - 二级路由(在对应的路由文件中)

     ```
     //编写用户模块后端代码let express=require('express');let router=express.Router();//登录router.请求类型('/二级路由名称',function(req,res){    //编写对应后端程序});module.exports=router;
     ```

     - req(第一个参数):代表请求对象，封装了请求相关数据操作;

       - 获取前端传参
         - `get`:`req.query`
         - `post`:`req.body`

     - res(第二个参数):代表响应对象，封装了响应相关数据操作;

       - 生成响应内容

         - `res.send(响应内容)`

           ```
           res.send({mes:'测试'});res.send('测试');
           ```

3. 编写后端代码;

4. 编写前端代码;

   ```
   $.ajax({    url:目标后端程序(/一级路由/二级路由)',    type:'请求方式(默认为get)',    data:{        提交到服务器的数据（键值对形式存在，属性名为键，属性值为值）    },    success:function(data){        // 当请求发送成功，且服务器生成响应内容后，会自动执行该回调函数，且将响应内容作为实参传入该函数       //编写代码处理响应内容    }})
   ```

![img](https://woniuimage.oss-cn-hangzhou.aliyuncs.com/woniuimage/woniunote/20220331/6635f4c774124e018b483e36fd569694.png)

## nodemon

- 一个命令包，自动检测项目文件修改，自动重启服务器。

- 使用

  1. 下载nodemon包

     ```
     npm i nodemon -g
     ```

  2. 利用nodemon启动服务器

     ```
     nodemon app.js
     ```

## GET与POST区别

- 目的:
  - GET用于索取服务器资源的请求，POST用于提交数据到服务器的请求；
- 传参方式:
  - GET使用URL传参，长度会受浏览器对URL的长度限制，POST使用请求正文传参，长度受服务器接收处理能力限制;
- 安全性:
  - GET的数据安全性相对POST更低;

20220401-ES6模块化编程

# ES6模块化编程

## 概念

- 将每个JS文件作为一个功能模块，每个功能模块之间代码相互独立、不可见，可以使用指定的语法引入不同模块代码，并暴露其中的数据。

## 语法

- 引入模块

  - html

    ```html
    <script src="引入的模块文件路径" type="module"></script>
    <script src="./javascripts/demo.js" type="module"></script>
    ```

  - js

    ```
    import "引入的模块文件路径";import './test.js';
    ```

- 暴露

  - html

    - 模块文件中暴露外部要使用的数据

      ```
      export{    变量名称,    ....}
      ```

      ```
      let one=1;let obj={    name:'admin'}console.log(`demo`);function m(){    console.log('函数执行');}//暴露export{one,    obj,    m}
      ```

    - 在外部文件引入模块，并接收暴露的数据

      ```
      <script type="module">    import {变量名称,....} from '模块文件路径';</script>
      ```

      ```
      <script type="module">    import {one,obj,m} from './javascripts/demo.js';    console.log(one,obj);    m();</script>
      ```

  - JS

    - 模块文件中暴露外部要使用的数据

      ```
      export{    变量名,        .......}
      ```

      ```
      let two=3;let obj={    name:'admin'}console.log(`demo`);function m(){    console.log('函数执行');}console.log('test');export{two,    obj,    m}
      ```

    - 在外部文件引入模块，并接收暴露的数据

      ```
      import {变量名,....} from '模块文件路径';
      ```

      ```
      import {two,obj,m} from './test.js';console.log(two,obj);m();
      ```

## 整体暴露与接收

- 暴露

  ```
  export default{    变量名,        .......}
  ```

  ```
  export default{    RegexUtil,    sendAjax,    getPromise}
  ```

- 引入与接收

  ```
  import 对象名称 from '模块文件路径';
  ```

  ```js
  <script type="module">    
      import util from './javascripts/util.js';   
  util.sendAjax('/demo/postDemo','post',true,{test:'测试'},function(data){        
      console.log(data);    })   
  console.log(util.RegexUtil.checkTel('13566668888'));
  </script>
  ```

20220401-mongoose概述

# mongoose

## 概述

- 一个可以在Nodejs环境下操作mongodb数据库的第三方包。
- 安装mongoose后，可利用其提供的API实现程序操作数据库，进行数据的CRUD。

## 安装

```
npm i mongoose
```

## 连接数据库

1. 连接数据库

   - 新建数据库连接模块JS文件，并编写以下内容:

     ```js
     //连接数据库
     //引入mongooselet 
     mongoose=require('mongoose');
     //数据库URL
     //  mongodb://主机:27017/数据库名称
     let dbURL='mongodb://localhost:27017/schoolMS';
     //连接数据
     mongoose.connect(dbURL,{    
         useNewUrlParser:true,    
         useUnifiedTopology:true});
     //设置连接成功后要执行的回调函数
     mongoose.connection.on('connected',function(){    
         console.log('数据库连接成功!');
     });
     ```

2. 在app.js中引入连接模块

   ```
   //引入数据库连接模块require('./util/dbConnect');
   ```

## 操作数据中集合

1. 在要操作数据库的模块中引入`mongoose`模块;

   ```
   let mongoose=require('mongoose');
   ```

2. 创建目标集合的模型对象(忽略_id属性,类型名称首字母大写)

   ```
   let 模型名称=new mongoose.Schema({    属性名称:属性类型,    .....});
   ```

   ```
   let userSchema=new mongoose.Schema({    account:String,    password:String});
   ```

3. 建立模型与数据库中集合关系

   ```
   mongoose.model('名称',目标模型对象,'目标集合名称');
   ```

   ```
   mongoose.model('userModel',userSchema,'user');
   ```

4. 操作集合

   ```
   aysnc function(){    let 变量名称=await mongoose.model('名称').find({})}
   ```

   ```
   router.get('/demo',async function(req,res){    let re=await mongoose.model('userModel').find({});});
   ```

20220401-Nodejs模块化编程

# Nodejs模块化编程

## 语法

- 引入模块

  - ES6

    ```
    import '目标模块文件路径'import './test.js';
    ```

    - 不允许省略文件的扩展名

  - nodejs:

    ```
    require('目标模块文件路径');
    ```

    ```
    require('./test.js');
    ```

    - 允许省略文件扩展名

      ```
      require('./test');
      ```

    - 如果引入的模块为第三方包的模块或系统内置模块，可以不用写路径，直接写模块名称

      ```
      let express = require('express');let path = require('path');
      ```

- 暴露

  - ES6

    ```
    export default{    变量名称,    .....}
    ```

    ```
    import 对象名称 from '目标模块文件路径'
    ```

  - nodejs

    ```
    module.exports = {    变量名称,    .......}
    ```

    ```
    let 对象名称=require('目标模块文件路径');
    ```

20220401-mongoose之API

# mongoose之API

## 查询

- 查询所有

  ```
  let re=await mongoose.model('名称').find({});
  ```

  ```
  let re=await mongoose.model('userModel').find({});console.log(re);
  ```

- 根据条件查询

  ```
  let re=await mongoose.model('名称').find({    条件属性名称:条件属性值,    .....});
  ```

  ```
  let re=await mongoose.model('userModel').find({    account:'admin',    password:'ad12'});console.log(re);
  ```

- 查询大于指定属性值`$gt`

  ```
  let re=await mongoose.model('名称').find({    条件属性名称:{        $gt:值    }});
  ```

  ```
  let re=await mongoose.model('studentModel').find({    age:{        $gt:25    }});
  ```

- 查询小于指定属性值`$lt`

  ```
  let re=await mongoose.model('名称').find({    条件属性名称:{        $lt:值    }});
  ```

  ```
  let re=await mongoose.model('studentModel').find({    age:{        $lt:25    }});
  ```

- 查询大于等于指定属性值`$gte`

  ```
  let re=await mongoose.model('名称').find({    条件属性名称:{        $gte:值    }});
  ```

  ```
  let re=await mongoose.model('studentModel').find({    age:{        $gte:25    }});
  ```

- 查询小于指定属性值`$lte`

  ```
  let re=await mongoose.model('名称').find({    条件属性名称:{        $lte:值    }});
  ```

  ```
  let re=await mongoose.model('studentModel').find({    age:{        $lte:25    }});
  ```

- 满足任意一个指定条件的数据`$or`

  ```
  let re=await mongoose.model('名称').find({    $or:[        {            条件1        },        {            条件2        },        .......    ]});
  ```

  ```
  let re=await mongoose.model('studentModel').find({    $or:[        {            classId:'6247ab709962000040001ca3'          },        {            age:{                $gt:25            }        }    ]});
  ```

- 查询指定属性的值为指定值中任意一个`$in`

  ```
  let re=await mongoose.model('名称').find({    目标属性名称:{        $in:[值1,值2,......]    }});
  ```

  ```
  let re=await mongoose.model('studentModel').find({    age:{        $in:[18,20,22]    }});
  ```

- 查询指定属性的值不在指定值中任意一个`$nin`

  ```
  let re=await mongoose.model('名称').find({    目标属性名称:{        $nin:[值1,值2,.....]    }});
  ```

  ```
  let re=await mongoose.model('studentModel').find({    age:{        $nin:[18,20,22]    }});
  ```

- 查询满足指定的所有条件结果`$and`

  ```
  let re=await mongoose.model('名称').find({    $and:[        {           条件1        },        {            条件2        },        .......    ]});
  ```

  ```
  let re=await mongoose.model('studentModel').find({    $and:[        {            classId:'6247ab709962000040001ca3'        },        {            age:{                $lt:25            }        }    ]});
  ```

- 查询指定属性值满足指定正则规则的数据`$regex`

  ```
  let re=await mongoose.model('名称').find({    目标属性名称:{        $regex:'正则表达式'    }});
  ```

  ```
  let re=await mongoose.model('studentModel').find({    name:{        $regex:'^张'    }});
  ```

## 新增

```js
await mongoose.model('名称').create(新增的对象数据);
let re=await mongoose.model('userModel').create(
    {    account:'wangwu',    password:'ww123'}
);
```

## 删除

```
let re=await mongoose.model('名称').deleteMany(要删除的条件对象);
```

- 返回值对象`deletedCount`获取删除的文档个数

```
let re=await mongoose.model('userModel').deleteMany({    account:'wangwu'});
```

## 修改

```js
let re=await mongoose.model('名称').updateMany(要修改的条件对象,新对象);
```

- 返回值对象`modifiedCount`获取修改的文档个数

```js
let re=await mongoose.model('userModel').updateMany({    account:'lisi'},{    password:'123456'});console.log(re.modifiedCount);
```

## 多集合关联查询

- 一对一(A集合中的一条数据对应B集合中一条数据)

  - 设置关联模型，建立集合与集合的模型关联

    - 格式:

      ```
      let 模型名称=new mongoose.Schema({    ......    关联其它集合的属性名称:{        type:mongoose.SchemaTypes.ObjectId,        ref:'关联其它集合的注册名称'    }});
      ```

    - 案例:

      ```
      let classSchema=new mongoose.Schema({    name:String});
      ```

      ```
      let studentSchema=new mongoose.Schema({    name:String,    age:Number,    tel:String,    // classId:String    classId:{        type:mongoose.SchemaTypes.ObjectId,        ref:'classModel'    }});
      ```

    - 查询

      - 格式:

        ```
        let re=await mongoose.model('注册名称').find({查询条件}).populate('要关联的属性名称');
        ```

      - 案例

        ```
        let re=await mongoose.model('studentModel').find({}).populate('classId');
        ```

- 一对多(A集合中一条数据对应B集合中多条数据)

  - 设置关联模型，建立集合与集合的模型关联

    - 格式:

      ```
      let 模型名称=new mongoose.Schema({    ......    关联其它集合的属性名称:[        {            type:mongoose.SchemaTypes.ObjectId,            ref:'关联其它集合的注册名称'        }     ]});
      ```

    - 案例:

      ```
      let teacherSchema=new mongoose.Schema({    name:String,    courseId:[        {            type:mongoose.SchemaTypes.ObjectId,            ref:'courseModel'        }    ]});let courseSchema=new mongoose.Schema({    name:String,    classHour:Number,    credit:Number})
      ```

  - 查询

    - 格式:

      ```
      let re=await mongoose.model('注册名称').find({查询条件}).populate('要关联的属性名称');
      ```

    - 案例:

      ```
      let re=await mongoose.model('teacherModel').find({}).populate('courseId');
      ```

- 集合与集合的嵌套关联(A集合中数据关联B集合，B集合中数据关联C集合)

  - 设置关联模型，建立集合与集合的模型关联

    ```
    let scoreSchema=new mongoose.Schema({    studentId:{        type:mongoose.SchemaTypes.ObjectId,        ref:'studentModel'    },    courseId:{        type:mongoose.SchemaTypes.ObjectId,        ref:'courseModel'    },    score:Number})
    ```

  - 查询

    - 格式:

      ```
      let re=await mongoose.model('注册名称').find({查询条件}).populate({    path:'要关联的属性名称',    populate:{        path:'要关联的属性名称'    }});
      ```

      ```
      let re=await mongoose.model('scoreModel').find({}).populate({    path:'studentId',    populate:{        path:'classId'    }}).populate('courseId');
      ```

20220406-MVC

# MVC

## 概念

- 是一种设计模式。
- MVC
  - model
    - 模型，数据模型。
  - view
    - 视图，用于展示数据，比如:HTML、JSP、模板引擎。
  - controller
    - 控制器，接收客户端请求数据，并进行逻辑处理，将处理结果对应的数据模型发送给视图进行展示。
      - 比如:routes等。

20220406-Restful

# Restful

## 接口文档和接口

- 登录

  - 请求接口

    - `/user/login`

  - 请求类型:

    - `POST`

  - 参数

    ```
    {    account:"admin",    password:"ad123"}
    ```

    - account:登录的账号。
    - password:登录的密码。

  - 响应

    ```
    {    code:200,    mes:"登录成功!"}
    ```

    - code:状态码，200表示成功，250表示失败
    - mes:结果的字符串表示。

## 概念

- 是一种接口的编程风格。接口路径只用于确定操作的目标资源，以请求类型来确定操作类型。

- 根据`一级路由+请求类型+参数个数`自动匹配要执行的后端代码;

- 传统编程接口:

  ```js
  //班级模块//查询班级信息               restful
  /class/findAll                      /class    GET
  //删除班级信息
  /class/delById                    /class     DELETE
  //修改班级信息
  /class/updateById             /class      PUT
  //新增班级信息
  /class/add                         /class       POST 
  ```

- 请求类型:

  - `GET`:获取资源；
  - `POST`:添加资源;
  - `DELETE`:删除资源;
  - `PUT`:修改资源;

- 传参形式

  - 路径传参

    - 声明参数`/:变量名称2/:变量名称2......`

      ```
      router.delete('/:_id',async function(req,res){});
      ```

      ```
      router.post('/:name/:classHour/:credit',function(req,res){});
      ```

    - 获取参数`请求对象(回调函数的第一个形参).params.变量名称`

      ```
      let _id=req.params._id;
      ```

      ```
      // let name=req.params.name;// let classHour=req.params.classHour;// let credit=req.params.credit;let {name,classHour,credit}=req.params;
      ```

## query、body、params区别

- 后端`query`获取URL后以`?key=value`方式的传参;

  ```
  <a href="/demo/test?name=admin&age=22">点击</a>
  ```

- 后端`body`获取请求正文`ajax中data属性`方式的传参;

  ```js
  $.ajax({    url:'/demo/test',    type:'post',    
      data:{        
          name:"admin",        
          age:22    },    
      ......});
  ```

- 后端`params`获取以`URL`请求路径的传参;

  ```js
  $.ajax({    
      url:'/demo/test/admin/22',    ......});
  ```

20220406-跨域

# 跨域

## 概念

- 浏览器的同源策略：
  - 1995年，网景公司引入自家浏览器的一个安全策略，该策略要求资源只能请求访问`同源`的服务器资源。
  - 同源资源:
    - 协议相同;
    - 主机相同;
    - 端口号相同;
- 跨域
  - 解决浏览器同源访问限制;

## 主流的跨域解决方案

- `jsonp`(只支持`GET`请求)

  - 利用`<script></script> `标签本身自带的跨域特点，实现跨域;

    ```
    <script src="http://127.0.0.1:1314/cors/demo"></script>
    ```

  - jQuery实现jsonp跨域;

    - 前端(`设置dataType:"jsonp"`)

      ```js
      $.ajax({    
              url:'http://127.0.0.1:1314/cors/demo',    
            dataType:'jsonp',    
              success:function(data){        
                console.log(data);    }
             })
      ```
    
    - 后端(通过`响应对象.jsonp(响应内容)`生成响应)
    
      ```js
      router.get('/demo',(req,res)=>{    
          console.log('后端 demo执行');    
          // res.send('成功');    
          res.jsonp('成功');
      });
      ```

- `cors`

  - 让服务器告诉浏览器不做同源限制(配置服务器响应头信息)

  - 实现:

    1. 向`app.js`添加以下代码:

       ```js
       // 设置 CORS 允许跨域
       var allowCrossDomain = function (req, res, next) {   
         // 设置允许哪一个源（域）可以进行跨域访问，* 表示所有源    
           res.header("Access-Control-Allow-Origin", "*");    
         // 设置允许跨域访问的请求头    
           res.header("Access-Control-Allow-Headers", "X-Requested-With,Origin,Content-Type,Accept,Authorization");    
               // 设置允许跨域访问的请求类型   
               res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE");   
           // 设置允许 cookie 发送到服务器    
           res.header('Access-Control-Allow-Credentials', 'true');    
           next();
       };
       ```
    
    2. 在一级路由配置前将响应头函数运用到系统中:
    
       ``` js
       app.use(allowCrossDomain); // 运用,放在一级路由配置前
       ```

- `代理服务器`

  - 同源策略建立在`浏览器-服务器`之间，而`服务器-服务器`之间不存在`同源策略`限制。可以使用同源服务器获取到非同源资源后响应给浏览器来达到跨域效果。









# NODEJS

20220408-文件上传

# 文件上传

## 前端

1. 确定上传的文件;

   ```
   <input type="file" id="myFile"/>
   ```

2. 确定文件上传契机;

   ```
   document.querySelector('#myFile').onchange=function(event){    console.log('上传文件代码');}
   ```

3. 编写代码将文件上传到服务器

   ```js
   //引入工具模块
   import Util from './javascripts/util.js';
   //获取要上传的文件信息
   let file=event.target.files[0];
   console.log(file);
   //上传文件类型和大小限制
   if(!Util.RegexUtil.checkImg(file.name) || file.size>1024000){    
       alert('只能上传图片哦!并且文件不能大于1000KB!');   
       return;}
   //将文件信息封装为form表单数据格式
   let formData=new FormData();
   formData.append('file',file);
   //将文件数据发送到服务器去
   $.ajax({    
       url:'/upload/img',    type:'post',    data:formData,   
       success:function(data){        
           console.log(data);      },    
           //防止jquery自动转换提交数据格式    
           contentType:false,    processData:false,  
           //上传数据不缓存    
           cache:false
     });
   ```

## 后端

1. 下载插件`multer`;

   ```
   npm i multer
   ```

2. 引入文件上传的工具代码;

   - 将工具代码文件复制到项目文件中;

   - 将工具代码模块引入到要接收处理文件的模块中;

     ```
     let {uploadFiles}=require('./../util/handleFile');
     ```

3. 编写后端代码接收并获取上传的文件信息

   ```js
   //配置文件上传信息
   //path:配置上传文件保存路径
   //key:配置获取上传文件的键
   //size：上传文件的最大大小限制，单位为KB
   let uploadMethod=uploadFiles({    path:'./public/img',    key:'file'});
   //接收上传文件，并获取上传的文件信息
   uploadMethod(req,res,(error)=>{    
       //文件接收成功时要执行的函数    
       //编写代码处理文件上传结果(成功或失败)   
       if(error){        
           //上传失败        
           res.send({            
               code:250,           
               mes:'上传失败!'        
           } );    
       }else{        
           console.log(req.files);       
             //上传成功        
             res.send({            
                 code:200,            
                 mes:'上传成功!',   
                 data:'./img/'+req.files[0].filename
             });   
            }     }   )
   ```

20220408-身份认证

# 身份认证

## 概念

- 由于HTTP协议无状态，不能保存用户状态信息，实际开发过程中又需要该功能，比如有些网页资源只能在用户登录成功后才可访问；

## 主流实现技术

- cookie和session(了解);
  - cookie:一个客户端浏览器的文件(对象)。
  - session:一个服务器的文件(对象)。
  - 流程:
    1. 客户端第一次请求服务器资源时，服务器会为每个客户端浏览器创建一个session，该session有一个由32位数字、字母组成的id，服务器生成对应响应时，会将sessionid作为响应头内容发生给客户端浏览器;
    2. 客户端浏览器接收到响应数据后，会将sessionid保存到本地的cookie文件中，以后每次请头都会携带该sessionId；
    3. 当用户发起登录请求时，服务器验证登录成功后，会将登录用户信息保存到请求头中sessionId对应的session文件中;
    4. 当用户请求需要登录才能访问的资源时，服务器会根据请求头中sessionId找到对应session文件，查看是否有登录信息，如果有，则正常响应请求访问内容，否则，让用户登录后再请求;
  - 存在主要问题：
    - 服务器内存压力过大;
      ![img](https://woniuimage.oss-cn-hangzhou.aliyuncs.com/woniunote/20220408/93a30967594544d996d641446ca04b37.png)
- 本地存储(了解);
  - 用户登录成功时，浏览器将用户信息保存到本地存储，一旦要请求登录才能访问的资源时，会从本地存储取出登录信息，以请求内容的形式发送给服务器，服务器接收到请求后，会先验证登录信息是否合法有效，有效则响应请求的资源内容，否则让用户登录后再请求;
  - 存在的主要问题:
    - 用户信息容易泄漏;
      
      ![img](https://woniuimage.oss-cn-hangzhou.aliyuncs.com/woniunote/20220408/ee8e5f3b0a5a4c10bd13e1b5ed92ae5c.png)
- token(掌握);
  
  - 用户登录成功后，将用户账号信息加密后形成的密文(`token`)响应给客户端浏览器，浏览器将`token`进行本地存储，一旦要登录成功后才能请求访问的资源，就将`token`从本地存储中取出，发送给服务器，服务器验证`token`合法无误后，则响应请求的目标资源，否则让用户重新登录;

## JWT

- Json Web Token，是一个利用Json来生成Token解决web身份认证问题的技术解决方案。
- 工作流程
  ![img](https://woniuimage.oss-cn-hangzhou.aliyuncs.com/woniunote/20220408/fc58a4356ece4edfb34cc13e0819fbfc.png)

## JWT实现Token身份认证

1. 由用户信息生成token；

   - 前端

     - 发送登录请求，登录成功时，将服务器响应的token存储到本地存储;

       - 发登录请求

         ```
         $.ajax({    url:'登录的URL',    type:'post',    data:{        登录数据    },    success:function(data){        //登录成功后要执行的代码    }})
         ```

       - 登录成功后存储响应token

         ```
          sessionStorage.setItem('token',data.data);
         ```

   - 后端

     - 下载第三方插件`jsonwebtoken`，实现token生成

       ```
       npm i jsonwebtoken
       ```

     - 登录验证成功时，生成token

       - 引入jsonwebtoken插件模块

         ```
         let jsonwebtoken=require('jsonwebtoken');
         ```

       - 调用`sign`函数实现token生成

         ```
         //sign(参数1,参数2,参数3)//参数1：确定用户信息 //参数2: 确定秘钥 xumin  加密:明文->秘钥->密文   解密:密文->秘钥->明文//参数3:设置token有效期 方式一:纯数字，表示指定数字秒后过期，方式二:字符串，指定时间单位 h dayslet token=jsonwebtoken.sign(user,'xumin',{    expiresIn:60});
         ```

2. 验证token是否有效(鉴权);

   - 前端

     - 在要身份认证才能访问的资源请求时，以请求头形式发送token到服务器，验证是否合法有效

       ```js
       //获取本地存储中的token
       let token=sessionStorage.getItem('token');
       if(token==null){    
           alert('登录后才可上传图片!');   
           location.href='./login.html';
           //登录页面路径    
           return;}
       //将文件数据发送到服务器去
       $.ajax({    ......    headers:{       
           Authorization:'Bearer '+token    },    
               success:function(data){       
                   //操作成功要执行的代码   
               },   
               error:function(error){        
                   if(error.status==401){            
                       alert('登录超时!请重新登录!');           
                       location.href='./login.html';       
                   }else{            alert('联系管理员!');        }    }});
       ```

   - 后端

     - 验证token是否合法有效

       1. 下载第三方插件`express-jwt`，实现验证token的合法有效;

          ```
          npm i express-jwt
          ```

       2. 创建鉴权配置文件，文件名为`auth.config.js`

          ```js
          //引入express-jwt模块
          let expressJwt=require('express-jwt');
      //执行鉴权函数
          let jwtAuth=expressJwt({    
          secret:'xumin',//秘钥，跟sign函数第二个参数一致    
              algorithms:['HS256'],//设置jwt的算法    
          credentialsRequired:false//设置true，表示请求是否携带token都要鉴权，如果不携带token则，则鉴权失败，设置为false，表示只有携带了token的请才需要鉴权
          }).unless({    
              //罗列白名单，不需要鉴权的请求    
              path:['/user/login','/user/register']
          });
          module.exports=jwtAuth;
          ```
       
       3. 在系统中应用`auth.config.js`配置文件；
       
          - 在app.js中的一级路由配置前新增以下代码:
       
            ```js
            let jwtAuth=require('./util/auth.config');
            app.use(jwtAuth);
            ```

1. 根据`token`获取用户信息(加密前的明文数据)

   - 前端

     - 发送请求获取用户数据

       ```js
       import Util from './javascripts/util.js';
       Util.sendAuthAjax('/user/getUserInfo','POST',true,null,
                      function(data){    console.log(data);}
       );
       ```
    ```
   
    ```
- 后端
  
     - 接收到请求后，获取请求头中的token，然后进行token解密;
     
       ```js
       router.post('/getUserInfo', function(req, res, next) {    
           //获取请求头中token数据    //req.get(请求头的键);    
           let authorization=req.get('Authorization');    
           console.log(authorization);    
           //解析出token    
           let token=authorization.split(' ')[1];    
           console.log(token);   
           //解密token 由密文转换为明文    
           //verify(参数1,参数2)    
           //参数1:目标token    
           //参数2:秘钥，与sign函数第二个参数一致    
           let user=jsonwebtoken.verify(token,'xumin');    
           console.log(user);    
           res.send({       
               code:200,        
               mes:'获取成功!',        
               data:user    })
       });
       ```

20220409-webpack

# webpack

## 概述

- 一个前端资源的打包工具，可以实现前端工程化，有助于实现前后端分离。
- 核心功能:
  1. 兼容处理
     - 保证代码向下兼容；
  2. 实现各种前端资源的模块化;
     - 可以实现非JS的模块化编程;
  3. 减少项目文件的资源数量;
     - 一个页面相关的资源自动进行整理合并，所有当前页面相关CSS和SCSS自动合并为一个CSS文件，所有当前页面相关的JS自动合并为一个JS文件;
  4. 实现资源内容的压缩和混淆;
     - 压缩:将资源内容中的换行、空格、注释等去除，减少资源大小，提高加载速度;
     - 混淆:自动将代码转为浏览器能直接识别的语法，以达到保护代码，提高代码解析执行效率的目的;
- 每个页面关联一个主JS文件，该JS文件引入所有该页面的资源包括:其他JS、CSS、SCSS。

## 创建node项目

- 使用`npm`命令创建node项目

  ```
  npm init -y
  ```

## 下载安装webpack插件

```
npm i webpack webpack-cli -D
```

- `-D`:开发依赖

## 初始化项目文件夹

- ```
  src
  ```

  :source表示源码，该文件夹下用于存放源码(自己编写的代码文件)。

  - `css`:存放前端的css文件。
  - `scss`:存放前端的scss文件。
  - `js`:存放前端的js文件。
  - `html`:存放前端html文件。
  - `image`:存放前端图片文件。

- `dist`:存放源码打包后的结果。

## 初体验webpack

1. 创建webpack的配置文件`webpack.config.js`

   - 文件名只能是`webpack.config.js`，并且该文件只能放在项目跟目录下，系统才能自动识别;

2. 配置`webpack.config.js`文件

   ```
   //引入路径模块let path=require('path');//配置打包信息并将打包信息暴露给系统module.exports={    mode:'development',//配置打包模式，development:开发模式，不会对代码进行压缩，production:生产模式    entry:{//要打包的资源        index:'./src/js/index.js'//参照根目录查找打包资源    },    output:{        path:path.resolve(__dirname,'dist'),//_dirname获取当前项目的绝对路径        filename:'js/[name].js'//[name]获取源文件名称    }}
   ```

3. 使用`webpack`命令对项目进行打包

   ```
   npx webpack
   ```

   - npx:用于执行第三方包命令文件

## 主要配置

- mode：配置打包模式。
  - `development`:开发模式。不会对资源进行压缩处理;一些未被关联使用的资源会被保留，不会移除。
  - `production`:生产模式。会对资源进行压缩处理;一些未被关联使用的资源会被移除。
- entry:打包入口，确定要打包的资源。
- output:配置打包后资源的存放位置。
- module:配置打包规则。
- plugins:打包用到的第三方插件。非JS资源打包需要借助第三方插件。
- devServer:配置开发服务器。

## 打包JS

- 主要作用:将当前JS文件关联的资源统一按模块合并为一个文件。

- 实现:

  1. 添加`webpack.config.js`配置信息

     - 配置要打包的JS文件路径(参照项目根目录指定路径)

       ```
       entry:{    资源属性名称1:'资源1路径',//资源属性名称自定义，只要与entry中属性名不冲突就好    ......}
       ```

       ```
       entry:{//要打包的资源    index:'./src/js/index.js',//参照根目录查找打包资源        login:'./src/js/login.js'}
       ```

       - 可优化主JS路径配置代码

         ```
         //定义数组存储页面文件名(页面与主JS文件名一一对应)let pageNameArray=[    'index','login','register'];function entryList(){    let obj={};    pageNameArray.forEach(pageName=>{        obj[pageName]=`./src/js/${pageName}.js`;    });    return obj;}//配置打包信息并将打包信息暴露给系统module.exports={    ......    // entry:{//要打包的资源    //     index:'./src/js/index.js',//参照根目录查找打包资源    //     login:'./src/js/login.js'    // },    entry:entryList(),    ......}
         ```

```
 - 配置打包资源的输出路径   ```javascript   output:{       path:总的输出路径,//_dirname获取当前项目的绝对路径       filename:相对总输出路径的相对位置和文件名称   }   ```   ```javascript   output:{       path:path.resolve(__dirname,'dist'),//_dirname获取当前项目的绝对路径       filename:'js/[name].js'//[name]获取源文件名称   }   ```
```

1. 使用`webpack`命令对项目中声明的JS文件进行打包

   ```
   npx webpack
   ```

## HTML打包

- 主要效果:自动引入页面相关的资源文件(比如:JS、CSS等)。

- 补充:

  - 打包后的HTML引入JS文件都带`defer`,表示异步加载当前JS文件；

    ```
    <script defer="defer" src="../js/index.js"></script>
    ```

- 实现

  1. 下载第三方插件`html-webpack-plugin`，实现HTML打包功能;

     ```
     npm i html-webpack-plugin -D
     ```

  2. 配置`webpack.config.js`实现HTML打包信息；

     - 引入打包插件`html-webpack-plugin`

       ```
       let HtmlWebpackPlugin=require('html-webpack-plugin');
       ```

     - 配置HTML打包信息

       ```
       plugins:[    //声明要使用的插件对象    new HtmlWebpackPlugin({        template:'要打包的HTML文件路径，参照项目根目录指定路径',        filename:'打包后的资源保存到输出文件夹中的那个路径，参照输出文件夹(dist)指定路径',        chunks:['当前HTML要引入的主JS文件名'],    }),    .......]
       ```

       - HTML打包配置可优化为以下代码

         ```
         //获取HTML配置对象function htmlPlugin(){    let htmlPluginArray=[];    pageNameArray.forEach(pageName=>{        htmlPluginArray.push(new HtmlWebpackPlugin({            template:`./src/html/${pageName}.html`,            filename:`./html/${pageName}.html`,            chunks:[pageName],        }));    });    return htmlPluginArray;}//配置打包信息并将打包信息暴露给系统module.exports={    ......    plugins:[        //声明要使用的插件对象        // new HtmlWebpackPlugin({        //     template:'./src/html/index.html',        //     filename:'./html/index.html',        //     chunks:['index'],        // }),        // new HtmlWebpackPlugin({        //     template:'./src/html/login.html',        //     filename:'./html/login.html',        //     chunks:['login'],        // })        ...htmlPlugin()    ]}
         ```

  3. 使用`webpack`命令对项目中声明的HTML文件进行打包

     ```
     npx webpack
     ```

## CSS打包

- 主要效果:将多个CSS文件合并为一个，并自动引入到对应页面。

- 实现:

  1. 下载第三方插件`mini-css-extract-plugin`和`css-loader`,实现CSS打包;

     ```
     npm i mini-css-extract-plugin css-loader@5.1.0 -D
     ```

     - `mini-css-extract-plugin`:将主JS中引入的多个CSS文件合并为一个CSS文件。
     - `css-loader`:解析加载CSS文件。

  2. 配置`webpack.config.js`实现CSS打包信息；

     - 引入第三方`mini-css-extract-plugin`插件;

       ```
       let MiniCssExtractPlugin=require('mini-css-extract-plugin');
       ```

     - 配置并创建打包插件对象

       ```
       plugins:[    ......    new MiniCssExtractPlugin({        filename:'./css/[name].css'    })]
       ```

     - 配置打包规则

       ```
       module:{    rules:[        {            test:/\.css$/i,//编写正则，用于确定要打包的资源            use:[MiniCssExtractPlugin.loader,'css-loader']//指定以什么插件进行打包        }    ]}
       ```

  3. 在要使用CSS样式的页面对应的主JS文件中使用`import`语法引入CSS文件

     ```
     import './../css/index.css';import './../css/test.css';
     ```

  4. 使用`webpack`命令对项目中声明的CSS文件进行打包

     ```
     npx webpack
     ```

## SCSS打包

- 主要效果:自动将SCSS转为CSS语法，并，将转换后的内容合并到CSS文件中;

- 实现:

  1. 下载第三方插件`sass-loader`和`node-sass`，实现SCSS打包;

     ```
     npm i sass-loader node-sass -D
     ```

     - 如果插件下载失败，可执行以下命令下载

       ```
       npm i node-sass -D --sass_binary_site=https://npm.taobao.org/mirrors/node-sass
       ```

  2. 配置`webpack.config.js`打包规则;

     ```
     module:{    rules:[        ......        //配置打包SCSS规则        {            test:/\.scss$/i,            use:[MiniCssExtractPlugin.loader,'css-loader','sass-loader']//指定以什么插件进行打包        }    ]}
     ```

  3. 在要使用SCSS样式的页面对应的主JS文件中使用`import`语法引入SCSS文件

     ```
     import './../scss/a.scss';
     ```

  4. 使用`webpack`命令对项目中声明的SCSS文件进行打包

     ```
     npx webpack
     ```

## 图片打包

- 主要效果:将CSS和HTML文件中使用的图片进行打包处理，将小图片转为base64格式。

- 实现

  1. 下载第三方插件`url-loader`、`file-loader`和`html-withimg-loader`，实现图片打包;

     ```
     npm i url-loader file-loader html-withimg-loader -D
     ```

     - `url-loader`、`file-loader`:实现CSS中引入图片打包功能；
     - `html-withimg-loader`:实现HTML中引入的图片打包功能;

  2. 配置`webpack.config.js`打包规则;

     ```
     module:{    rules:[        ......        //配置图片打包规则        {            test:/((\.jpg)|(\.png)|(\.jpeg)|(\.gif)|(\.svg)|(\.psd)|(\.tif)|(\.bmp)|(\.webp))$/i,            use:{                loader:'url-loader',                options:{                    limit:1024*10,//将10KB以下的图片自动转为base64字符串格式放在页面中                    outputPath:'./image/',//配置打包后的图片存放在输出文件夹(dist)中的路径                    esModule:false//用于解决兼容问题                }            }        },        //配置html中图片的打包规则配置        {            test:/\.html$/i,            use:['html-withimg-loader']        }    ]}
     ```

  3. 使用`webpack`命令对项目中的图片文件进行打包

     ```
     npx webpack
     ```

## 配置打包服务器

- 主要效果:开启服务器后，自动根据改动进行打包，并打开指定页面展示效果。

- 注意:打包结果保存在运行内存中，在打包输出文件夹(dist)中不显示打包结果。

- 实现:

  1. 下载第三方插件`webpack-dev-server`插件，实现打包服务器功能;

     ```
     npm i webpack-dev-server@3.11.2 -D
     ```

  2. 配置`webpack.config.js`实现服务器配置;

     ```
     devServer:{        port:8888,//服务器端口        open:true,//启动服务器时自动打开一个页面        openPage:'./html/index.html',//要打开的页面        hot:true,//热部署，更新代码后，服务器自动进行打包        // proxy:{//代理服务器        //     "/":{        //         target:'http://localhost:1314'//如果当前webpack服务器上无法查找资源，会去target对应的服务器找        //     }        // } }
     ```

  3. 启动服务器

     ```
     npx webpack serve
     ```

- 代理服务器

  ![img](https://woniuimage.oss-cn-hangzhou.aliyuncs.com/woniunote/20220409/bff8939065c3456aa848ab518ea8c8c0.png)

## 引入JQuery

1. 下载jquery；

   ```
   npm i jquery
   ```

2. 配置`webpack.config.js`实现项目全局使用jquery语法;

   - 引入`webpack`模块;

     ```
     let webpack=require('webpack');
     ```

   - 配置插件信息

     ```
     plugins:[    .......    new webpack.ProvidePlugin({        "$":"jquery"    })]
     ```

## 引入bootstrap

1. 下载bootstrap;

   ```
   npm i bootstrap@4 popper.js@1.16.1
   ```

2. 在要使用bootstrap的页面的主JS文件中引入bootstrap的文件;

   ```js
   import 'bootstrap/dist/css/bootstrap.min.css';
   import 'bootstrap/dist/js/bootstrap.min.js';
   ```

20220411-快速构造webpack项目

# 构建webpack项目

1. 创建项目文件夹;

   - 文件夹命名符合标志符规则

2. 初始化项目;

   - 保证在当前项目目录下执行以下命令

   ```
   npm init -y
   ```

3. 配置`package.json`，并实现相关依赖下载;

   - 配置`package.json`

     ```js
     "devDependencies": {    
         "css-loader": "^5.1.0",    "file-loader": "^6.2.0",    "html-webpack-plugin": "^5.5.0",    "html-withimg-loader": "^0.1.16",    "mini-css-extract-plugin": "^2.6.0",    "node-sass": "^7.0.1",    "sass-loader": "^12.6.0",    "url-loader": "^4.1.1",    "webpack": "^5.72.0",    "webpack-cli": "^4.9.2",    "webpack-dev-server": "^3.11.2"  }
     ```

     - 如果要使用bootstrap和jquery，可增加以下生成依赖

       ```js
        "dependencies": {    
            "bootstrap": "^4.6.1",    "jquery": "^3.6.0",    "popper.js": "^1.16.1"  }
       ```

   - 下载依赖包

     ```
     npm i
     ```

4. 新建项目文件夹

   - dist
   - src
     - html
     - js
     - css
     - scss
     - image

5. 在项目根目录下创建`webpack.config.js`，并配置打包信息

   1. - 修改项目页面名数组内容，以及服务器配置信息；

      ```js
      //引入路径模块
      let path=require('path');
      //引入html打包插件
      let HtmlWebpackPlugin=require('html-webpack-plugin');
      //引入CSS打包插件
      let MiniCssExtractPlugin=require('mini-css-extract-plugin');
      //引入webpack模块
      let webpack=require('webpack');
      //定义数组存储页面文件名(页面与JS文件名一一对应)
      let pageNameArray=[    'index','login','register'];
      //获取主JS函数配置
      function entryList(){
          let obj={};
          pageNameArray.forEach(pageName=>{
              obj[pageName]=`./src/js/${pageName}.js`;    
                   });
          return obj;
      }
      //获取HTML配置对象
      function htmlPlugin(){    
          let htmlPluginArray=[];    
          pageNameArray.forEach(pageName=>{
              htmlPluginArray.push(
                  new HtmlWebpackPlugin({
                  	template:`./src/html/${pageName}.html`,
                  	filename:`./html/${pageName}.html`,
                  	chunks:[pageName],
                  })
              );    
          });   
          return htmlPluginArray;
      }
      //配置打包信息并将打包信息暴露给系统
      module.exports={
          //配置打包模式，development:开发模式，不会对代码进行压缩，production:生产模式    
          mode:'production',
          entry:entryList(),
          output:{
              path:path.resolve(__dirname,'dist'),//_dirname获取当前项目的绝对路径
              filename:'js/[name].js'//[name]获取源文件名称
          },
          plugins:[
              ...htmlPlugin(),
              //打包HTML的插件对象
             new MiniCssExtractPlugin({
                 filename:'./css/[name].css'
             }),
              new webpack.ProvidePlugin({
                  "$":"jquery"        })
          ],
          module:{
              rules:[
                  //打包CSS规则
                  {  test:/\.css$/i,//编写正则，用于确定要打包的资源   
                   //指定以什么插件进行打包
               	use:[MiniCssExtractPlugin.loader,'css-loader']},
                  //配置打包SCSS规则
                  {  test:/\.scss$/i,
                   //指定以什么插件进行打包 
               	use:[MiniCssExtractPlugin.loader,'css-loader','sass-loader']           },            
                  //配置图片打包规则
                   {   test:/\.(jpg | png | jpeg | gif | svg | psd | tif | bmp | webp)$/i,                
                       use:{
                           loader:'url-loader',
                           //将10KB以下的图片自动转为base64字符串格式放在页面中
                           options:{  limit:1024*10,
                           outputPath:'./image/',//配置打包后的图片存放在输出文件夹(dist)中的路径
                           esModule:false//用于解决兼容问题
      	           }                }            },
                  //配置html中图片的打包规则配置
                   { 
                       test:/\.html$/i,
               	  use:['html-withimg-loader']
             	     }        ]    },    //module
          devServer:{
              port:8888,//服务器端口
              open:true,//启动服务器时自动打开一个页面
              openPage:'./html/index.html',//要打开的页面 ,参照dist文件路径
              hot:true,//热部署，更新代码后，服务器自动进行打包        
              proxy:{   //代理服务器 
                  "/":{
                      target:'http://localhost:1314'
                      //后端服务器找
      //如果当前webpack服务器上无法查找资源，会去target对应的服务器找
                   }       
               }    
           }
      }//暴露over
      ```

6. 编写项目代码，启动服务器

   ```
   npx webpack serve  //serve
   ```

20220411-git

# git

## 传统团队项目开发存在的问题

1. 项目环境、资源不统一，后期整合难度较高;
2. 无法实现代码版本控制，不能回退到以前的代码版本;
3. 项目无法实现远程访问;

## 项目版本管理工具

- 一个专门用于管理团队代码的工具，可以实现代码版本控制、项目远程访问;
- 主流的版本管理工具:
  - `svn`:集中式版本管理工具(没有本地仓库)
  - `git`:分布式管理管理工具`https://git-scm.com/`

## 安装git并测试

1. 下载git并安装

   - `https://registry.npmmirror.com/binary.html?path=git-for-windows/v2.35.1.windows.2/`   更快
   - `https://git-scm.com/downloads`  外网

2. 安装，不需要格外配置，一路`next`，建议安装在默认路径下;

3. 测试是否安装成功;

   - `cmd`命令行中，输入以下命令进行测试

     ```
     git --version
     ```

## git初始化配置

- 鼠标右键，选择`get bash here`，会基于当前文件夹所在位置打开git的命令行窗口;

- 配置git

  - 用户名称(自定义)

    ```
    git config --global user.name "名称"
    ```

    ```
    git config --global user.name "xumin"
    ```

  - 用户邮箱

    ```
    git config --global user.email "邮箱地址"
    ```

    ```
    git config --global user.email "xuyilin629@qq.com"
    ```

## git工作流程

git add.加到缓冲区，git commit存到本地仓库(个人之间相互独立)，git push提交到仓库，git pull从远程仓库拉取



![img](https://woniuimage.oss-cn-hangzhou.aliyuncs.com/woniunote/20220411/9428340566ca4af2b1b3d360f4cbddf3.png)

## git与github

- git是开发者电脑上需要安装的版本管理工具，可以提供缓冲区、本地仓库等功能，但远程仓库需要使用github。
- github是一个在线的远程仓库，是使用最大的开源网站。
- gitee(码云):是一个国内的github。上传速度更快、而且支持中文。
- 实际开发推荐使用:git+gitee；

## 创建远程仓库

1. 注册gitee账号并登录`https://gitee.com/?from=osc-index`;

2. 创建远程仓库(项目负责人);

   ![img](https://woniuimage.oss-cn-hangzhou.aliyuncs.com/woniunote/20220411/a26dc76cd09c4e62bbae30c5465706bb.png)

3. 管理仓库;

   - 配置仓库是否开源

   ![img](https://woniuimage.oss-cn-hangzhou.aliyuncs.com/woniunote/20220411/de4db867cb4e48e4aae8731fc1488794.png)

- 添加开发成员

  ![img](https://woniuimage.oss-cn-hangzhou.aliyuncs.com/woniunote/20220411/6e79164a76624daab92a605366393175.png)

## 初始化远程仓库(负责人)

1. 克隆远程仓库内容到本地文件夹中;

   - 新建文件夹并进入文件夹中，右键选择`get bash here`,打开命令窗口

   - 执行命令克隆远程仓库

     ```
     git clone 远程仓库的HTTPS协议的URL
     ```

2. 进入本地远程仓库对应文件夹;

   ```
   cd 仓库文件夹名称
   ```

3. 将项目(要上传到远程仓库的项目)复制到仓库文件夹中;

4. 将仓库文件夹中的内容添加到缓冲区;

   ```
   git add .
   ```

   - `.`:表示把当前所在路径中新增或修改的内容添加到缓冲区

5. 将缓存区内容提交到本地仓库;

   ```
   git commit -m "提交日志"
   ```

6. 将本地仓库内容推送到远程仓库

   ```
   git push
   ```

## 个人开发流程(组员)

- 注意，如果每次提交和拉取远程仓库代码都让你输入用户名和密码，可执行以下命令，下一次输入账号和密码后会自动保存

  ```
  git conifg --global credential.helper store
  ```

1. 新建文件夹(可选)，克隆远程仓库代码

   - 进入文件夹，右键选择`get bash here`,输入以下命令

     ```
     git clone 远程仓库的HTTPS协议的URL
     ```

2. 使用VSCode打开`仓库文件夹(包含.git文件的文件)`

3. 使用VSCode编写项目代码

   - 文件状态:
     - `M`:文件相较本地仓库中原文件内容发生了修改;
     - `U`:文件相较本地仓库中为新增文件;
     - `A`:新建的文件被添加到缓冲区，但未添加到本地仓库;

4. 将代码添加到缓存区

   ```
   git add .
   ```

5. 将缓冲区中代码提交到本地仓库

   ```
   git commit -m "提交日志"
   ```

6. 查看提交到本地仓库的日志信息

   ```
   git log
   ```

   - 回车`enter`可以查看下一行日志信息
   - 查看后在冒号后输入`q`

7. 回退版本

   ```
   git reset --hard 版本号
   ```

8. 将本地仓库代码推送到远程仓库

   ```
   git push
   ```

9. 将远程仓库代码更新(拉取)到本地仓库

   ```
   git pull
   ```

## git分支

- 存在意义

  - 解决远程仓库中代码被所有组员共享，不能仅供自己使用;

  - 不能保证上传和提交代码的完整性和可用性;

    ![img](https://woniuimage.oss-cn-hangzhou.aliyuncs.com/woniunote/20220411/ff04088a5ee5452295ad53568f2b3121.png)

- git分支

  - `master`主分支
  - 自定义分支(子分支)

- 操作

  - 创建子分支

    ```
    git checkout -b 分支名称
    ```

  - 切回指定分支

    ```
    git checkout 分支名称
    ```

  - 把指定分支代码合并到当前分支

    ```
    git merge 分支名称
    ```

- 子分支关联远程仓库子分支

  1. 远程仓库中创建目标子分支（一般本地子分支名称与远程子分支名称一致）

  2. 在目标子分支下拉取远程仓库代码

     ```
     git pull
     ```

  3. 将当前本地子分支分支关联远程子分支分支

     ```
     git branch --set-upstream-to=origin/远程子分支名称
     ```

## 版本冲突解决

- 本地仓库与远程仓库存在不同版本修改了同一个文件

  - 一般会在推送代码到远程仓库(git push)时会报错

    ![img](https://woniuimage.oss-cn-hangzhou.aliyuncs.com/woniunote/20220411/9a05bef0f6864f6fbc13965bfc34143a.png)

  - 解决方案:

    1. 执行`git pull`命令，将远程仓库代码拉取到本地仓库,VSCode会自动进入版本选择模式;

    2. 确定选择保留版本;

       - `Accept Current Change`:接收当前(自己的)内容;

       - `Accept Incoming Change`:接收远程仓库内容;

       - `Accept Both Change`:同时接收当前内容和远程仓库内容，两者合并保留;

       - `Compare Change`:打开对比窗口，实现内容对比;

         ![img](https://woniuimage.oss-cn-hangzhou.aliyuncs.com/woniunote/20220411/c1d338d7e70a48e0b46b316f02a6f94a.png)

    3. 保存文件，重新执行`git add .`和`git commit -m "日志"`添加到本地仓库,执行`git push`推送到远程仓库;

- 本地子分支与主分支存在不同版本修改了同一个文件

  - 一般会在分支内容合并时，在VSCode中解决冲突

  - 解决方案

    1. 确定选择保留版本;

       - `Accept Current Change`:接收当前(自己的)内容;

       - `Accept Incoming Change`:接收远程仓库内容;

       - `Accept Both Change`:同时接收当前内容和远程仓库内容，两者合并保留;

       - `Compare Change`:打开对比窗口，实现内容对比;

         ![img](https://woniuimage.oss-cn-hangzhou.aliyuncs.com/woniunote/20220411/c1d338d7e70a48e0b46b316f02a6f94a.png)

    2. 保存文件，重新执行`git add .`和`git commit -m "日志"`添加到本地仓库;
    
    3. 出现长串错误：按i，再按ESC，输入:wq，然后回车
