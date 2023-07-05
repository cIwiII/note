## Nodejs

### Nodejs-npm



- 实际开发中，经常使用第三方依赖包(库)。存在以下问题:
  - 项目整合时，存在版本控制管理不方便;
  - 需要在对应的网站下载要使用的包;

- npm(node package manager)，nodejs自带命令，可以实现项目包的统一管理(包下载、删除、查看)。

#### 命令

- npm init -y：初始化项目， -y：可选 一律确认
- npm config get registry：registry(镜像)查看，默认https://registry.npmjs.org/

- npm config set registry 镜像地址：镜像修改

  ```
  npm config set registry https://registry.npm.taobao.org/
  ```

- npm view jquery version：查看默认下载版本信息

- npm view jquery versions：查看所有版本

- npm install bootstrap@4.0.0 -g：安装指定版本插件｜包

- npm uninstall 包名：卸载

- npm i：根据`package.json`配置文件下载包

- `npm config get prefix`：查看全局包安装位置

- `npm config set prefix 新路径`：修改全局包安装位置

  

note：包名全小写，install 简化为i，uninstall 简化为uni，

​         @可选，默认局部安装， -g 全局安装，

​         安装默认生产依赖(-S, --save)，-D|--save-dev 开发依赖（development）

​         多文件空格隔开： npm i 包名1 包名2....，卸载同理

#### 其他命令

--force：强制执行

npm rm -rf node_modules：删除（无效）

### Nodejs-express

- 一个可以快速搭建web项目的nodejs框架。
- 初始化项目时，会自动创建项目所需各种文件夹以及文件，并配置基本的服务器信息；

**下载安装express** 

```
npm i express-generator -g
```

#### 项目创建

**1、创建express项目** 

```
express 项目名称
express test
```

- 创建项目失败，找到系统的`Windows PowerShell`，用管理员身份运行，打开脚本命令行窗口，输入`set-ExecutionPolicy RemoteSigned`回车，如果选项中有`A`则输入`A`,没有`A`选项，则输入`y`，回车后，关闭窗口，重启VSCode。

**2、下载项目依赖** ，在package.json所属文件夹执行：npm i

**3、创建项目首页** 

**4、配置启动信息** 

- 删除`app.js`中最后一行`module.exports = app;`

- 在`app.js`中最后部分添加以下代码:（查看系统端口占用情况`netstat -ano`）

  ```js
  app.listen(端口号,服务器启动成功时调用的函数);
  app.listen(3000,function(){    
      console.log('服务器启动成功!端口号为3000');
  });
  ```

**5、启动服务器** 

```
node app.js
```

- 关闭服务器可以选择关闭当前终端或者输入`ctrl+c`

**6、用户通过浏览器访问服务器资源** 

- ```
  http://主机:端口号/资源路径
  ```

  - 本机:可以使用`localhost`或`127.0.0.1`
  - 查看自己电脑的IP`ipconfig`

- `http://127.0.0.1:3000/html/index.html`

- 注意:如果没指定资源路径，服务器会默认从`public`文件夹中查找`index`文件作为请求资源;

#### 项目结构

- bin: 存放服务器配置文件。
  
  - `www`:服务器配置文件，在其中编写服务器配置信息(没特殊情况，不允许修改)。

- public: 存放项目的公共资源。
  - 公共资源:可以被用户访问的资源（浏览器可以从服务器上直接请求到的资源）。
  - 比如:html、css、js、图片等。

- routes: 存放路由配置文件。存放后端程序代码。
  
- `views`:存放模板文件。

- `app.js`:项目启动入口文件。执行该文件后，可以启动服务器，服务器启动后，项目资源就可被用户访问(浏览器请求)。

- `package.json`:管理项目包的配置文件。

#### 后端代码编写

1. 在`routes`文件夹下创建后端程序的JS文件；

2. 编写后端代码(不能让请求方式和二级路由值同时相同);

   - 回调函数的参数
     - 第一个参数:请求对象，通过操作该对象可以获取请求相关数据，比如请求正文(用户post方式提交的数据)
       - 获取请求正文`request.body`
     - 第二个参数:响应对象，通过操作该对象可以生成响应内容
       - 响应内容到浏览器`response.send(内容)`

   ```JS
   //引入express模块
   let express=require('express');
   //获取路由对象
   let router=express.Router();
   //后端程序代码编写
   //二级路由配置:为当前后端程序取个名字
   router.请求方式('/二级路由',function(request,response){
       后端程序代码
   });
   module.exports=router;
   ```

   ```JS
   //编写后端代码实现用户模块功能
   //引入express模块
   let express=require('express');
   //获取路由对象
   let router=express.Router();
   //二级路由配置:为当前后端程序取个名字
   router.post('/login',function(request,response){
       //request获取请求相关数据
       console.log(request.body);
       //response响应
       console.log('执行login-post');
       response.send({
           message:'登录成功!'
       })
   });
   module.exports=router;
   ```

3. 将后端程序在服务器中进行注册声明;

   - 在`app.js`文件中，编写代码引入目标后端程序JS文件

     ```
     let 变量名称=require('./routes/JS文件名称');
     ```

     ```
     let loginRouter=require('./routes/user');
     ```

   - 在`app.js`文件中，编写代码配置一级路由

     ```
     app.use('/一级路由',变量名称);
     ```

     ```
     app.use('/user',loginRouter);
     ```

4. 前端请求目标后端资源

   - 请求资源路径:`/一级路由/二级路由`

   - 请求方式(跟要执行的后端程序的请求方式对应)

     ```HTML
     <form action="/user/login" method="post">
         <label for="acc">账号:</label>
         <input type="text" id="acc" name="acc" placeholder="请输入11位手机号">
         <br/>
         <label for="pwd">密码:</label>
         <input type="text" id="pwd" name="pwd" placeholder="请输入6~12位数字或字母">
         <br/>
         <input type="submit">
     </form>
     ```

5. 重启服务器

   - 关闭服务器

     ```
     ctrl+c
     ```

   - 启动服务器

     ```
     node app.js
     ```

1. 登录流程图

   ![image-20230705203454633](C:\Users\LENOVO\AppData\Roaming\Typora\typora-user-images\image-20230705203454633.png)

   ## GET与POST区别

   - 目的:
     - GET用于获取服务器资源，POST用于向服务器提交数据;
   - 传参方式
     - GET通过URL传参，受浏览器对URL的总长度限制，POST通过请求正文传参，理论上长度无上限，但实际受服务器接收处理能力限制;
     - 注意:
       - GET请求传参，后端使用`请求对象.query`获取
       - POST请求传参，后端使用`请求对象.body`获取
   - 安全性
     - GET数据相较于POST安全性更低;

#### nodemon

- 一个命令工具包，会自动检测项目中文件修改，重启服务器;

- 使用

  1. 下载`nodemon`包

     ```
     npm i nodemon -g
     ```

  2. 利用nodemon启动服务器

     ```
     nodemon app.js
     ```



### ES6(前端)模块化编程

- 每个JS文件作为一个功能模块，每个JS文件间代码相互独立、不可见，通过指定语法引入模块内容，并暴露模块中的内部数据。

#### 单独暴露

```
// js 暴露
export{    变量名称1,        变量名称2,        ......}
export{    str1,    obj,    test }


// html 引入模块
<script src="目标JS模块文件路径" type="module"></script>
<script src="./a.js" type="module"></script>
<script type="module">    
    import {变量名称1,....} from '目标JS模块文件路径';
    import {str1,obj,test} from './a.js';   
	console.log(str1);    
	console.log(obj);    
	test();
</script>


// js  引入模块
import '目标JS模块文件路径'
import './c.js';
import {变量名称1,....} from '目标JS模块文件路径';
import {str1,obj,test} from './a.js';
console.log(str1);
console.log(obj);
test();

```

#### 整体暴露

```
// js 暴露
export default{    变量名称1,        变量名称2,        ......}
export default{    str1,    obj,    test}

// 引入
import 对象名称 from '目标JS模块文件路径'
import obj from './a.js';
console.log(obj.str1);
console.log(obj.obj);
obj.test();
```

### Nodejs模块化编程

```
// Nodejs 引入
require('目标模块JS路径') //如果为包，直接使用包名
let 变量名称=require('目标模块JS路径');
require('./a.js');
let n=require('./a.js');
let n=require('./a'); js扩展名可省
let express=require('express');//已安装的第三方包


// 暴露
module.exports={    变量名称1,    变量名称2,    ......}
module.exports=对象名称
module.exports={    num  }
```



### Restful

#### 接口文档

- 删除班级数据

  - 请求接口

    - `/class/delById`

  - 请求类型

    - `POST`

  - 参数

    ```
    {    id:2}
    ```

    - id:要删除的班级编号；

  - 响应

    ```
    {    code:200,    message:'删除成功!'}
    ```

    - code:响应状态，200表示成功，250表示删除的编号不存在。
    - message:操作结果对应的文字提示。

#### 概念

- 是一种接口的编程风格，接口的路径只用于确定操作的目标资源，以请求类型来确定对目标资源进行操作的类型。

  ```css
  //传统            
  Restful
  //查询
  /class/findAll            /class    GET
  //删除
  /class/delById          /class    DELETE
  //添加
  /class/add                /class    POST
  //修改
  /class/updateById    /class    PUT
  ```

- 请求类型

  - `GET`:获取资源
  - `POST`:添加资源
  - `DELETE`:删除资源
  - `PUT`:修改资源

#### 传参方式

- 路径传参

  - 前端传参

    - url:`/一级路由名称/参数值1/参数值2/.....`

      ```js
      $.ajax({    
          url:'/class/2/Java100',    
        type:'put',    
          success:function(data){        
            console.log(data);    }
      })
      ```
  
- 后端接收参数
  
    - 二级路由配置声明参数接收的属性名称
    
    - `/:接收参数值1的属性名称/:接收参数值2的属性名称/.....`
    
      ```js
        router.put('/:id/:name',function(req,res){
            
      });
      ```
    
    - 在对应后端代码的回调函数中使用`请求对象.params.接收参数值的属性名称`
    
      ```js
      router.put('/:id/:name',function(req,res){    
          //根据编号修改班级名称，并将处理结果响应给浏览器    
          console.log('修改');    console.log(req.params.id,req.params.name);   
          res.send('修改成功');
      });
      ```

#### query、body、params区别

- query用于获取URL传参(`?键1=值1&键2=值2`);
- body用于获取请求正文传参;
- params用于获取请求路径传参;





### Process 对象

process 对象是一个全局变量，提供了有关当前 [Node](https://so.csdn.net/so/search?q=Node&spm=1001.2101.3001.7020).js进程的信息并对其进行控制，作为一个全局变量



process[常见的属性](https://blog.csdn.net/qq_30071415/article/details/117508606)有如下：

process.env：环境变量，例如通过 `process.env.NODE_ENV 获取不同环境项目配置信息
process.nextTick：这个在谈及 EventLoop 时经常为会提到
process.pid：获取当前进程id
process.ppid：当前进程对应的父进程
process.cwd()：获取当前进程工作目录，
process.platform：获取当前进程运行的操作系统平台
process.uptime()：当前进程已运行时间，例如：pm2 守护进程的 uptime 值
进程事件：process.on(‘uncaughtException’,cb) 捕获异常信息、 process.on(‘exit’,cb）进程推出监听
三个标准流：process.stdout 标准输出、 process.stdin 标准输入、 process.stderr 标准错误输出
process.title 指定进程名称，有的时候需要给进程指定一个名称



对于初级工程师来说，核心是技术，框架熟练使用

中级工程师：项目架构设计、项目业务的处理

高阶工程师：架构规划、性能优化、各种业务的变迁

## yarn包管理器

npm问题：

1. 下载速度非常慢，配置了镜像好一些
2. 同一个项目，有时候无法保证版本统一。`~5.0.3`,代表要安装5.0.x版本
3. 下载过程中如果遇到某个包报错，npm会继续下载其他的包。

yarn包管理器优点：

1. 快速性：缓存你们下载每个包，无需重复下载对用的包。利用并行下载，可以提高速度
2. 安全性：yarn会通过算法来验证每个包是否可用
3. 并行安装：下载完成后并行的安装我们包
4. 版本统一：为了防止拉去到不同的版本，我们每个包都会锁定版本，yarn包管理器下载 yarn.lcok 文件
5. 命令比较简洁



一、下载yarn

yarn的官方文档：[https://yarn.bootcss.com](https://yarn.bootcss.com/)

```javascript
//下载
npm install yarn -g

//检测版本
yarn --version

//查看yarn的配置
yarn config list

//yarn的淘宝镜像配置
yarn config set registry https://registry.npm.taobao.org -g
yarn config set sass_binary_site http://cdn.npm.taobao.org/dist/node-sass -g
```

二、使用命令



|            | npm 命令                                                  | yarn 命令                                        |
| ---------- | --------------------------------------------------------- | ------------------------------------------------ |
|            | npm install                                               | yarn add/yarn install                            |
|            | npm install [package] —save                               | yarn add [package]                               |
|            | npm install [package] —save-dev                           | yarn add [package] —dev                          |
|            | npm install [package][@1](https://github.com/1).1.1 —save | yarn add [package][@1](https://github.com/1).1.1 |
| 删除依赖   | npm uninstall [package@版本] —save(-dev)                  | yarn remove [package@版本]                       |
|            | npm update —save                                          | yarn upgrade                                     |
| 初始化项目 | npm init -y                                               | yarn init -y                                     |

12





## 跨域及解决

- 同源策略
  - 1995年，网景公司引入到自家浏览器的一个安全策略，该策略要求请求资源只能是`同源`的服务器资源。
  - 同源: 协议、主机、端口号相同
- 跨域：解决浏览器的同源访问限制

**方案** jsonp、cors、代理服务器

- jsonp(只支持GET请求)

  - 利用`script`标签本身自带的跨域特点，实现跨域;

    ```
    <script src="http://127.0.0.1:3000/javascripts/test.js"></script>
    ```

  - jQuery实现jsonp跨域

    ```js
    // 前端
    $.ajax({
        url:'http://127.0.0.1:3000/db',
        type:'get',
        dataType:'jsonp',
        success:function(data){
            console.log(data);
        }
    })
    // 后端
    响应对象.jsonp(响应内容);
    ```

  ```
  
  ```

- cors

  - 配置服务器响应头：服务器告诉浏览器不做同源限制

  - 实现:

    - 在`app.js`文件中添加以下代码，实现不做同源策略的响应头配置

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

    - 在一级路由配置前将响应头配置函数应用到系统中

      ```
      app.use(allowCrossDomain);
      ```

- 代理服务器

  - 同源策略限制针对的是`浏览器请求服务器`资源的限制，不针对`服务器请求服务器资源`，故可以让浏览器请求同一个A服务器资源，如果资源存在于另外的B服务器，让A服务器去请求B服务器资源，获取到资源后，由A服务器响应资源给浏览器；




### 身份认证及解决

- 由于Http协议无状态，不能保存用户状态，在实际开发中又需要使用状态保存功能，比如:用户登录后才能访问某些资源;

**主流解决方案** ：cookie、本地存储、token（JWT）

- cookie与session(了解)

  - cookie:一个客户端的文件(对象)。

  - session:一个服务器的文件(对象)。

  - 流程:

    1. 当客户端第一次请求服务器资源时，服务器会为每个客户端创建一个`session`文件，`session`文件有一个由32位数字、字母组成的唯一的名称(`sessionId`)，服务器生成响应时，会将该`session`名称作为响应头内容发送给客户端浏览器，浏览器接收到响应数据后，会将`session`名称存储到本地的`cookie`文件中;

    2. 以后的客户端浏览器发起的每个请求的请求头中都会携带`session`文件名(`sessionId`)到服务器;

    3. 用户发起登录请求时，同样请求头会携带`sessionId`到服务器，服务器验证用户登录信息无误后，会根据请求头中的`sessionId`找到对应`session`文件，并将用户登录信息存储到该`session`文件中;

    4. 如果用户要请求的资源为登录后才可访问的资源，服务器会根据请求头中携带的`sessionId`找到对应`session`文件，查看是否存在登录数据，如果存在，则将请求的目标数据作为响应内容正常响应，否则，服务器会响应登录页面内容或者提示用户登录后再访问的消息;

       ![image-20230705203550518](C:\Users\LENOVO\AppData\Roaming\Typora\typora-user-images\image-20230705203550518.png)

  - 存在问题

    1. 一旦`sessionId`暴露，可能存在冒充行为;
    2. 所有的用户都会创建自己的`session`文件，该文件存储在服务器上，文件数量较多，造成服务器压力较大;

- 本地存储(了解)

  - 用户登录成功时，直接将用户数据保存到本地存储，一旦要请求登录后才可访问的资源时，浏览器会从本地存储获取用户登录数据发送到服务器，服务器会先验证用户登录数据是否合法有效，如果合法有效，则将请求的目标数据作为响应内容正常响应，否则，服务器会响应登录页面内容或者提示用户登录后再访问的消息;
  - 存在问题
    1. 用户数据不安全，容易暴露;

- token(掌握)

  - 用户登录成功时，服务器将用户登录数据加密后形成密文(`token`),将`token`响应给客户端浏览器，客户端浏览器接收到`token`后，会将`token`进行本地存储，一旦要请求登录后才可访问的资源时，浏览器会从本地存储获取用户`token`发送到服务器，服务器会先验证`token`是否合法有效，如果合法有效，则将请求的目标数据作为响应内容正常响应，否则，服务器会响应登录页面内容或者提示用户登录后再访问的消息;

#### JWT

Json Web Token，是一种利用json生成token解决web身份认证问题的技术解决方案。

**实现** 

- 获取token并存储：登陆成功存储token

  前端

  ```js
  $.ajax({
      url:`登录的URL`,
      type:'请求方式',
      success:function(data){
      ......
          //将用户token存储到本地
          sessionStorage.setItem('token',data.data);
      }
  })
  ```

  后端

  ```js
  // 下载第三方插件，用于生成token
  npm i jsonwebtoken
  
  //引入
  let jsonwebtoken=require('jsonwebtoken');
  
  // 生成token
  let token=jsonwebtoken.sign({
      user:用户数据对象
  },'秘钥',{
      expiresIn:时间   //number型:表示指定秒后token失效，string型:带单位，指定时间后token失效，比如'1h'，表示1小时候token失效
  });
  ```

- **验证token是否合法有效(鉴权)** 

  - 前端：登录成功后才能访问的资源，在请求头中携带token

    ```js
    $.ajax({
        url:'要请求的资源路径',
        type:'请求方式',
        headers:{
            Authorization:'Bearer '+token值
        },
        success:function(data){
            console.log(data);
        },
        error:function(){
            alert('鉴权失败!请重新登录!');
            location.href='login.html';
        }
    })
    ```

  - 后端：下载第三方插件实现鉴权功能

    ```js
    npm i express-jwt
    
    ```

  // auth.config.js
    let {expressjwt}=require('express-jwt');
  let jwtAuth=expressjwt({
        secret:'xumin',//秘钥,与生成token的秘钥保持一致
    algorithms:['HS256'],//jwt算法
        credentialsRequired:false//false:不带token的请求不进行鉴权验证;true:请求无论是否携带token，都要鉴权，如果不带token直接鉴权失败
  }).unless({
        path:['/user/login','/user/register']
  });
    //暴露鉴权配置对象
    module.exports=jwtAuth;

    ```
    
  - 应用到系统中，在`app.js`中配置
  
    ```js
    // app.js
    let jwtAuth=require('auth.config文件路径');
    //应用到系统中
    app.use(jwtAuth);
    ```

- 根据token获取用户数据

  - 前端

    - 发送请求获取用户登录数据，请求头必须携带`token`

      ```js
      sendAuthAjax('获取登录数据的后端程序URL','请求方式',function(data){
          console.log(data);
      })
      function sendAuthAjax(url,type,method) {
          $.ajax({
              url,
              type,
              headers: {
                  Authorization: 'Bearer ' + sessionStorage.getItem('token')
              },
              // dataType:'jsonp',
              success: method,
              error: function () {
                  alert('鉴权失败!请重新登录!');
                  location.href = 'login.html';
              }
          });
      }
      ```

  - 后端

    ```js
    //引入jwt插件
    let jsonwebtoken=require('jsonwebtoken');
    
    // 获取请求头中的token数据
    let token=请求对象.get('Authorization').split(' ')[1];
    
    // 根据token解密获取用户数据
    let user=jsonwebtoken.verify(token,'秘钥').user;
    ```

12