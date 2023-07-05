20220530-前端与后端

# 前端与后端

## 概念

- 前端
  - 利用技术构建一个`用户体验`较好的引用;
  - 核心:用户交互与数据展示;
- 后端
  - 负责数据`业务处理`，接收前端数据，操作数据库数据，并将处理结果数据发送给前端;
- 数据库
  - 负责存储管理项目中要使用的所有数据。

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

## 流程

- 登录

- 首页数据展示


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
  - 基础库:jquery、bootstrap
  - 高级(进阶):Vue、React等
- 后端
  - Nodejs:express
  - Java体系:springboot+springcloud
- 数据库
  - mongodb
  - mysql、oracle

20220531-Http协议

# Http协议

## 概念

- 协议
  - 事先约定好的规则、标准。
- 计算机协议
  - 计算机与计算机之间通讯要遵守的约定、规则、标准。
- Http协议
  - 属于计算机通讯协议中的一种;
  - HyperText Transfer Protocol 超文本传输协议;
  - 每个请求只能请求服务器上的一个资源，服务器会根据请求生成对应响应数据包;

## 请求

- 浏览器发送给服务器的数据包，目的为了告诉服务器一些请求相关的通用数据;
- 请求方式
  - GET：向服务器索取资源的请求类型;
  - POST:向服务器提交(发送)数据的请求类型;
- 组成
  - 头(Reuqest Headers)
    - 请求首行
      - `请求方式 资源路径 HTTP协议版本`
    - 请求的键值对
      - HTTP定义好了标准；
  - 正文(GET没有正文，POST请求有正文)
    - 提交到服务器的数据
    - 格式
      - `acc=admin&pwd=ad123`
      - 数据对象

## 响应

- 服务器发给浏览器的数据包，目的是为了服务器告诉给浏览器的一些响应相关的通用数据;
- 组成
  - 头(Response Headers)
    - 响应首行
      - `HTTP版本 响应状态码`
    - 响应键值对
      - HTTP定义好了标准；
  - 正文
    - GET：请求的资源内容;
    - POST:数据的处理结果;

## Http状态码

- **HTTP状态码**（英语：HTTP Status Code）是用以表示网页服务器[超文本传输协议](https://baike.baidu.com/item/超文本传输协议)响应状态的3位数字代码。
- 常见状态码:
  - 200 成功
  - 404 请求资源没找到
    - 请求资源的URL错误
    - 服务器确实不存在请求资源
  - 500 服务器错误
    - 后端程序异常

## 缓存

- 从服务器获取到不常改动的资源后，存储到本地浏览器中，下一次要使用资源时，先从浏览器文件中查找，如果存在，则直接使用，不存在，再从服务器请求获取，从而减少请求次数，减少流量消耗，加快页面加载渲染速度，提高用户体验，减少服务器压力；

## Http协议特点

- 简单快速
  - 使用简单，仅需要提供请求的资源URL，则可发送Http请求;
  - 传输速度较快;
- 灵活
  - 支持各种超文本资源传输;
- 无连接
  - 短连接
    - 发送请求前建立连接，生成响应后，注销连接;
  - 长连接
    - 发送请求前建立连接，生成响应后，不会马上注销连接;
- 无状态
  - 不具备报存用户状态;
    - 比如:登录状态
- 明文传输
  - 数据不做加密处理，直接传输，容易被截包，导致数据泄密;

## HTTP与HTTPs区别

- 端口号
  - HTTP:80
  - HTTPs:443
- 数据传输
  - HTTP:数据以明文形式传输;
  - HTTPS:数据以加密后的形式(密文)传输;
- 服务器身份认证
  - HTTP不具备识别目标服务器是否正规合法的能力，HTTPS能够识别服务器是否正规合法;
- 响应速度
  - HTTP协议的响应速度高于HTTPS(HTTP+TLS/SSL)协议;

20220531-Nodejs概述

# Nodejs概述

## 概念

- 是一个可以独立执行JavaScript的服务器环境。
- 底层基于谷歌的V8引擎实现。
- 可以使用Nodejs环境去编写后端程序。

## 搭建环境

1. 下载安装包;
   - `https://registry.npmmirror.com/binary.html?path=node/`
2. 安装(一路next)
   - 退出杀毒软件;
   - 以管理员身份运行安装包;
   - 安装路径建议以默认安装路径为准，如果需要改变安装路径，保证安装路径中不存在中文、空格等特殊符号;
3. 测试是否安装成功；
   - 打开命令行窗口
     - 系统键+R打开运行窗口，输入`cmd`点击确定，打开命令行窗口;
   - 输入命令测试安装是否成功
     - `node -v`回车

## 执行JS文件

1. 准备要执行的JS文件;
2. 选中文件右键，选择`在集成终端中打开`，在打开的命令行窗口中输入`node 要执行的JS文件名称.js`，执行目标JS文件;

20220531-npm

# npm

## 背景

- 实际开发中，经常使用第三方依赖包(库)。存在以下问题:
  - 项目整合时，存在版本控制管理不方便;
  - 需要在对应的网站下载要使用的包;

## 概述

- npm(node package management,node 包管理工具)，nodejs自带命令，可以实现项目包的统一管理(包下载、删除、查看)。

## 操作流程

1. 创建项目文件夹;

2. 初始化项目(将当前项目进行配置为npm项目);

   - 选中项目文件夹，右键选择`在集成终端中打开`，打开命令行窗口;

   - 输入命令`npm init -y`，并回车;

     - `-y`:可选，一律确认为`yes`;

       ```
       npm init -y
       ```

3. 下载目标包

   - 输入命令`npm install 包名`

     - 包名全小写;

     ```
     npm install jquery
     ```

## 镜像地址

- 默认的镜像地址`https://registry.npmjs.org/`

- 查看当前镜像地址

  ```
  npm config get registry
  ```

- 修改当前镜像地址`npm config set registry 镜像地址`

  ```
  npm config set registry https://registry.npm.taobao.org/
  ```

## npm常用命令

- 查看版本信息

  - 查看当前默认的下载版本`npm view 包名 version`

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

  - 下载指定版本班`npm install 包名@版本号`

    ```
     npm install bootstrap@4.0.0
    ```

  - 可以将`install`简化为`i`

    ```
    npm i bootstrap@4.0.0
    ```

- 卸载

  - `npm uninstall 包名`

    ```
    npm uninstall bootstrap
    ```

  - 可以将`uninstall`简化为`uni`

    ```
    npm uni bootstrap
    ```

- 多文件操作

  - 下载

    - `npm i 包名1 包名2......`

      ```
      npm i jquery@3.6.0 bootstrap
      ```

  - 卸载

    - `npm uni 包名1 包名2.....`

      ```
      npm uni jquery popper.js
      ```

- 根据配置文件`package.json`下载包

  - `npm i`

## 文件解释

- `node_modules`:该文件用于存放使用`npm`命令下载的第三方包文件，每个包会以一个文件夹的形式存在;

- `package-lock.json`(不要去修改其内容):记录了依赖的包信息，后期使用`git`上传项目时，会用于包版本控制;

- `package.json`:实时记录当前项目的包依赖信息;
  - 每个包会以`dependencies`或`devDependencies`中的一条记录形式存在;

## 全局与局部安装

- 全局安装

  - 所有项目都要使用的包和环境，使用全局安装。

  - 将包下载安装到Nodejs环境中，供所有项目使用。

    ```
    npm i 包名 -g
    ```

    - `-g`:表示全局(global)。
    - 查看全局包安装位置`npm config get prefix`;
    - 修改全局包安装位置`npm config set prefix 新路径`;

  - 卸载

    ```
    npm uni 包名 -g
    ```

- 局部安装

  - 默认安装为局部安装。

  - 将包下载安装到当前项目中，仅供当前项目使用。

    ```
    npm i 包名
    ```

## 开发依赖和生产依赖

- 开发依赖

  - 只在项目编码过程中要使用的第三方包，被称为`开发依赖`。

  - 一般开发依赖包用于提高开发效率或解决资源管理问题。

  - 比如:webpack。

  - npm的package.json文件中，开发依赖会以`devDependencies`属性声明。

    ```
    npm i 包名 -D
    npm i 包名 --save-dev
    npm i webpack -D
    ```

    - `-D`:表示开发依赖，development的简写。

- 生产依赖

  - 项目运行时需要使用的第三方包，被称为`生成依赖`。

  - 项目编码阶段和运行阶段(上线)都要用到的包。

  - 比如:jquery、bootstrap、Vue等。

    ```
    npm i 包名
    npm i 包名 -S
    npm i 包名 --save
    npm i jquery
    ```

