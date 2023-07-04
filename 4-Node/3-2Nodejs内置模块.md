综合：

https://www.yisu.com/zixun/452865.html



## Express框架

Express是一个nodejs的web开源框架，用于快速的搭建web项目。其主要集成了web的http服务器的创建、静态文本管理、服务器URL地址请求处理、get和post请求处理分发、session处理等功能。

使用方法，在cmd中打开你所想创建web项目的路径。然后输入

Express appname

即可创建一个名为appname的web项目。

## 1、NodeJS-path模块

https://www.cnblogs.com/coder2028/p/16812478.html 细说nodejs的path模块 

path模块：用于处理文件路径。引入语法为“require('path')”

概念：path模块是Node.,js 官方提供的，用来处理路径的模块。它提供了一系列的方法和属性，用来满足用户对路径的处理需求。

### 1.常见API

| API（）                        | 作用                                                         |
| ------------------------------ | ------------------------------------------------------------ |
| path.basename(path[,？ext])；  | 获取文件名（文件.后缀）                                      |
| path.dirname();                | 获取路径(目录名)（获取文件的父文件夹，除开文件名部分为目录） |
| path.extname(path);            | 获取后缀（文件扩展名   .html）                               |
| path.join()：完整路径;         | 路径片段合并（当前文件路径+括号内路径）                      |
| path.normalize();              | 路径解析，得到规范路径                                       |
| path.resolve([...paths]);      | 将片段路径解析，获取绝对路径                                 |
| path.relative(from,to);        | 获取相对路径                                                 |
| path.parse(path)               | 获取目录对象，解析路径文件，返回路径对象                     |
| path.format(pathObj)           | 序列化路径，与 parse 刚好相反，对象转为路径字符串            |
| path.isAbsolute(path)：boolean | 是否是绝对路径                                               |



### 解析

**path.parse(path) ( str => obj )** ：获取目录对象

- path：文件/目录路径
- 返回值：带有属性(dir,root,base,name,ext)的对象
  - root：根目录
  - dir： 文件所在的文件夹
  - base：完整文件 ( index.js )
  - name：文件名
  - ext: 文件后缀名

**路径的拼接 (path.join函数 )**：如果我们希望将多个路径进行拼接，但是不同的操作系统可能使用的是不同的分隔符；

**将文件和某个文件夹拼接**

- 将某个文件和文件夹拼接，可以使用 path.resolve;

- resolve函数会判断拼接的路径前面是否有 /或../或./；

- 如果有表示是一个绝对路径，会返回对应的拼接路径；

- 如果没有，那么会和当前执行文件所在的文件夹进行路径的拼接



```js
const path = require('path')
 
// 1.从路径中获取信息
const filePath = '/User/zyk/abc.txt'
console.log(path.dirname(filePath)); // /User/zyk
console.log(path.basename(filePath)); // abc.txt
console.log(path.extname(filePath)); // .txt
 
// 2.路径的拼接
const basePath = '../User/zyk'
const filename = 'abc.txt'
const filePath1 = path.join(basePath, filename) // \User\zyk\abc.txt
console.log(filePath1);
 
// 3.将文件和某个文件夹拼接 resolve
// resolve函数会判断我们拼接的路径前面是否有 /或../或./
const filename2 = path.resolve(basePath, filename)
console.log(filename2); 
```



## 2、NodeJS-until模块

until模块：用于弥补js功能不足，新增API；



|                               |                  |
| ----------------------------- | ---------------- |
| util.format();                | 格式化输出字符串 |
| util.isArray();               | 检查是否为数组   |
| util.isDate();                | 是不是日期型     |
| util.inherits(child,parent)； | 实现继承         |
| util.RegExp();                | 是不是正则       |





## 3、NodeJS-fs模块

定义：fs是File System的缩写，表示文件系统。



### API-1:  

filename:文件名，必须。

data：写入的数据或者buffer流。

flags:操作标识，打开方式，r w。

[options]：指定权限，读、写、执行。是否可续写。

callback：读取文件后的回调函数。function（err，data）;

| API                                                          | 作用                         |
| ------------------------------------------------------------ | ---------------------------- |
| fs.[writeFile](https://so.csdn.net/so/search?q=writeFile&spm=1001.2101.3001.7020)(filename,data,[options],callback); | 覆盖写入内容                 |
| fs.appendFile(filename,data,[options],callback)              | 追加内容                     |
| fs.readFile(filename,[options],callback)                     | 读取文件                     |
| fs.existsSync();                                             | 判断文件是否存在             |
| fs.stat('目标文件或者文件夹' ，（err,stat）=>{<br/>   console.log(stat.isFile()); //是否文件<br/>   console.log(stat.isDirectory()); //是否是目录<br/>console.log(stat.size);  //128字节<br/>}) | 判断文件是否是文件或着文件夹 |
| fs.unlink(参数1，参数2)；参数1 目录  参数2 错误回调          | 删除文件                     |
| fs.open(filename,flags,[mode],callback);                     | 打开文件                     |
|                                                              |                              |

fs.realpathSync(path, [cache])：

path 路径

cache 可选，一个文字的映射路径可用于强制一个特定的路径解决或避免额外的fs.stat需要知道真正的路径对象。

```js
var fs = require('fs');

// 点号表示当前文件所在路径
var str = fs.realpathSync('.');
console.log(str);

// 字符串指定node.js进程的当前工作目录。
// 保证文件在不同的目录下执行时，路径始终不变
process.cwd()
```

__dirname：当前文件执行时的绝对目录(不包含文件名，包含文件名是路径)

一个文件a，一个文件b，b中有_dirname语法，b被引入到了a， 执行a，此时，__dirname指a的绝对目录，如果a被引入了c，就是指a的目录

### API-2:  

path：被创建目录的完整路径以及目录名。

[mode]: 目录权限，默认0777（可读可写可执行）。

atime:新的访问时间。

ctime：新的修改时间。

oldfilename、newfilename 旧名字和新名字。

callback：创建完目录后的回调函数。

|                                              |                              |
| -------------------------------------------- | ---------------------------- |
| fs.mkdir(path,[mode],callback);              | 创建目录                     |
| fs.readdir(path,callback);                   | 读取目录                     |
| fs.exists(path,callback);                    | 查看文件与目录是否存在       |
| fs.utimes(path,atime,mtime,callback);        | 修改文件的访问时间和修改时间 |
| fs.rename(oldfilename,newfilename,callback); | 重命名文件名或者目录         |
| fs.rmdir(path,callback);                     | 删除空目录                   |



### 1.API操作方式

这些API大多数都提供三种操作方式：

方式一：同步操作文件：代码会被阻塞，不会继续执行；

方式二：异步回调函数操作文件：代码不会被阻塞，需要传入回调函数，当获取到结果时，回调函数被执行；

方式三：异步Promise操作文件：代码不会被阻塞，通过 fs.promises 调用方法操作，会返回一个Promise， 可以通过then、catch进行处理；

获取一个文件的状态：

```js
const fs = require("fs");
 
const filepath = "./abc.txt";
 
// 1.方式一：
const state = fs.statSync(filepath);
console.log(state);
console.log("后续的代码");
 
// 2.方式二：
fs.stat(filepath, (err, state) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(state);
});
console.log("后续的代码");
 
// 3.方式三：
fs.promises
  .stat(filepath)
  .then((state) => {
    console.log(state);
  })
  .catch((err) => {
    console.log(err);
  });
console.log("后续的代码");
```

### 2.文件描述符

文件描述符(File descriptors)概念：

- 在 POSIX 系统上，对于每个进程，内核都维护着一张当前打开着的文件和资源的表格。

- 每个打开的文件都分配了一个称为文件描述符的简单的数字标识符。

- 在系统层，所有文件系统操作都使用这些文件描述符来标识和跟踪每个特-定的文件。

- Windows 系统使用了一个虽然不同但概念上类似的机制来跟踪资源。

**通过文件描述符去获取文件信息**：fs.open() 方法用于分配新的文件描述符。 一旦被分配，则文件描述符可用于从文件读取数据、向文件写入数据、或请求关于文件的信息。



```js
const fs = require('fs')
 
fs.open('./abc.txt', (err, fd) => {
  if (err) {
    console.log(err);
    return 
  }
  // 通过文件描述符去获取文件信息
  fs.fstat(fd, (err, info) => {
    console.log(info);
  })
})
```

### 3.文件的读写

对文件的内容进行操作，这个时候可以使用文件的读写：

- fs.readFile(path[, options], callback)：读取文件的内容；

- fs.writeFile(file, data[, options], callback)：在文件中写入内容；

**option参数：**

flag：写入的方式

- w打开文件写入，默认值;
- w+打开文件进行读写，如果不存在则创建文件;
- r+打开文件进行读写，如果不存在那么抛出异常﹔
- r打开文件读取，读取时的默认值;
- a打开要写入的文件，将流放在文件末尾。如果不存在则创建文件;
- a+打开文件以进行读写，将流放在文件末尾。如果不存在则创建文件

 encoding：字符的编码

**文件写入：**

```js
const fs = require('fs')
 
const content = '你好啊, kk'
 
fs.writeFile('./abc.txt', content, {flag: 'a'}, err => {
  console.log(err);
})
```

**文件读取：（**如果不填写encoding，返回的结果是Buffer **）**

```js
fs.readFile('./abc.txt', {encoding: 'utf-8'}, (err, data) => {
  console.log(data);
})
```

### 4.文件夹操作

新建文件夹

```js
const fs = require('fs')
const path = require('path')
 
const dirname = './zyk'
 
// 1.新建文件夹
if (!fs.existsSync(dirname)) {
  fs.mkdir(dirname, (err) => {
    console.log(err);
  })
}
```

获取文件夹的内容

```js
// 2.获取文件夹里的内容
// fs.readdir(dirname, (err, files) => {
//   console.log(files);
// })
 
function getFiles(dirname) {
  fs.readdir(dirname, {withFileTypes: true} ,(err, files) => {
    files.forEach(file => {
      // 判断是否为目录
      if (file.isDirectory()) {
        const newFolder = path.resolve(dirname, file.name)
        getFiles(newFolder)
      } else {
        console.log(file.name);
      }
    })
  })
}
 
getFiles(dirname)
```

文件夹重命名

```js
// 3.文件夹重命名
fs.rename(dirname, './ks', err => {
  console.log(err);
})
```



## 4、NodeJS-events内置模块

events内置模块：只提供了“events.EventEmitter”对象，

【EventEmitter 的核心就是事件触发与事件监听器功能的封装。】

EventEmitter 的每个事件由一个事件名和若干个参 数组成，事件名是一个字符串，通常表达一定的语义。对于每个事件，EventEmitter 支持 若干个事件监听器。当事件触发时，注册到这个事件的事件监听器被依次调用，事件参数作 为回调函数参数传递。

Node中的核心API都是基于异步事件驱动的：

- 在这个体系中，某些对象（发射器（Emitters））发出某一个事件；

- 可以监听这个事件（监听器 Listeners），并且传入的回调函数，这个回调函数会在监听到事件时调用；

发出事件和监听事件都是通过EventEmitter类来完成的，它们都属 于events对象。

- emitter.on(eventName, listener)：监听事件，也可以使用 addListener；

- emitter.off(eventName, listener)：移除事件监听，也可以使 用removeListener；

- emitter.emit(eventName[, ...args])：发出事件，可以携带一 些参数；



```js
const EventEmmiter = require('events')
 
const emmiter = new EventEmmiter()
 
// 监听事件
const listener1 = (...args) => {
  console.log('监听1到click事件', ...args);
}
emmiter.on('click', listener1)
 
const listener2 = (...args) => {
  console.log('监听2到click事件', ...args);
}
emmiter.on('click', listener2)
 
// 发送事件
setTimeout(() => {
  emmiter.emit('click', "kk", "ss")
  // 取消监听事件
  emmiter.off('click', listener2)
  emmiter.emit('click', "kk", "ss")
}, 2000)
```



## 5、NodeJS-http模块

http模块：用于创建 web 服务器



#### API

http.createServer(function(){});创建服务器。

http.get('路径',callback);发送get请求。

http.request(options,callback);发送请求。

options：options是一个类似关联数组的对象，表示请求的参数，callback作为回调函数，需要传递一个参数。

options常用的参数有host、port（默认为80）、method（默认为GET）、path（请求的相对于根的路径，默认是“/”。





#### get

```js
var http=require("http");
var options={
    hostname:"cn.bing.com",
    port:80
}
var req=http.request(options,function(res){
    res.setEncoding("utf-8");
    res.on("data",function(chunk){
        console.log(chunk.toString())
    });
    console.log(res.statusCode);
});
req.on("error",function(err){
    console.log(err.message);
});
req.end();
```





#### post

```js
var http=require("http");
var querystring=require("querystring");
var postData=querystring.stringify({
    "content":"我真的只是测试一下",
    "mid":8837
});
var options={
    hostname:"www.imooc.com",
    port:80,
    path:"/course/document",
    method:"POST",
    headers:{
        "Accept":"application/json, text/JavaScript, */*; q=0.01",
        "Accept-Encoding":"gzip, deflate",
        "Accept-Language":"zh-CN,zh;q=0.8",
        "Connection":"keep-alive",
        "Content-Length":postData.length,
        "Content-Type":"application/x-www-form-urlencoded; charset=UTF-8",
        "Cookie":"imooc_uuid=6cc9e8d5-424a-4861-9f7d-9cbcfbe4c6ae; imooc_isnew_ct=1460873157; loginstate=1;
        apsid=IzZDJiMGU0OTMyNTE0ZGFhZDAzZDNhZTAyZDg2ZmQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
        AAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjkyOTk0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
        AAAAAAAAAAAAAAAAAAAAAAAAAAAAAGNmNmFhMmVhMTYwNzRmMjczNjdmZWUyNDg1ZTZkMGM1BwhXVwcIV1c%3DMD;
        phpSESSID=thh4bfrl1t7qre9tr56m32tbv0;
        Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1467635471,1467653719,1467654690,1467654957;
        Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1467655022; imooc_isnew=2;
        cvde=577a9e57ce250-34",
        "Host":"www.imooc.com",
        "Origin":"http://www.imooc.com",
        "Referer":"http://www.imooc.com/video/8837",
        "User-Agent":"Mozilla/5.0 (Windows NT 10.0; WOW64)
        AppleWebKit/537.36 (Khtml, like Gecko) Chrome/53.0.2763.0 Safari/537.36",
    "X-Requested-With":"XMLHttpRequest",
}
}
var req=http.request(options,function(res){
    res.on("data",function(chunk){
        console.log(chunk);
    });
    res.on("end",function(){
        console.log("评论完毕！");
    });
    console.log(res.statusCode);
});
req.on("error",function(err){
    console.log(err.message);
})
req.write(postData);
req.end();
```

12

### 扩展1

#### 静态资源服务器 

静态资源：常见的有html、css、js、图片、音频、视频等

静态资源服务器：专门保存上述静态资源的服务器，称之为静态资源服务器。

- 实现思路：

客户端请求的每个资源uri地址，作为在本机服务器指定目录中的文件。通过相关模块进行读取文件中数据进行响应给客户端，从而实现静态服务器。

```js
// 导入公共模块
var http = require('http');
var fs = require('fs');
var path = require('path');
// 创建server服务
var server = http.createServer();
// 监听请求
server.on('request',(req,res) =>{
    // 利用path模块拼接路径
    var filepath = path.join('public',req.url);
    // 利用fs模块判定有没有该文件
    var b = fs.existsSync(filepath);
    if(b){
        fs.readFile(filepath,(err,data) =>{
            res.end(data);
        })
    }else{
        res.end('404,文件飞走了')
    }
 
})
 
 
server.listen(8080,()=>{
    console.log('服务器启动了');
})
```

#### get数据获取

get数据通过地址栏使用query方式进行传递的数据 例**?id=1&name=zhangsan**

```js
var http = require('http')
var url =require('url')
var server = http.createServer()
server.on('request',(req,res)=>{
    const { query } =  url.parse(req.url,true) //获取get参数
    console.log(query);
   
    res.end('hello')
 
})
server.listen(8080)
```

#### post数据获取

表单数据多数为post进行提交到服务器端。需要监听req对象的data事件（接收请求提交过来的数据的）来获取客户端发送到服务器的数据。如果数据量比较大，无法一次性发送完毕，则客户端会把数据切割后分批次发送给服务器。**所以data事件==可能==会被触发多次**，每次触发data事件时，收到的数据只是全部数据的一部分，因此需要做数据的拼接才能得到完整的数据


```js
var http = require('http')
var querystring = require('querystring')
var server = http.createServer()
server.on('request',(req,res)=>{
    //post接收参数  第一步监听data事件
    var arr = []
    req.on('data',buffer=>{
        arr.push(buffer)
    })
    req.on('end',()=>{
      var params = querystring.parse(Buffer.concat(arr).toString()) 
      console.log(params);
    })
    res.end('hello')
 
})
server.listen(8080)
```



### 扩展2

#### 1.创建服务器

创建服务器对象，是通过 createServer 来完成的

- http.createServer会返回服务器的对象；
- 底层其实使用直接 new Server 对象。

```js
const http = require('http')
 
// 创建一个web服务器
// 方式一：
const server = http.createServer((req, res) => {  //这个回调也可以用server.on绑定
  res.end('hello kk')
})
 
server.listen(8888, '0.0.0.0', () => {
  console.log('服务器启动成功~');
})

// 方式二：自己来创建这个对象：
const server1 = new http.Server((req, res) => {
  res.end('hello ss')
})
server1.listen(8889, '0.0.0.0', () => {
  console.log('服务器启动成功~');
})
```

server.on分开绑定

```js
//http 搭建应用服务的
//1.引入http
var http = require('http')
//2.创建一个server
var server = http.createServer()
//3.监听请求
server.on('request',(req,res)=>{
    console.log(req.url); //接口名
    console.log(req.method); //请求类型 get post
    console.log(req.headers); //请求头信息
    //请求头 json字符串  默认值   form表单
    res.setHeader('content-type', 'text/html;charset=utf-8')
    // res.statusCode = 304 //状态码
    res.end('hello boy') //返回内容
})
//4.启动服务
server.listen(8080,()=>{
    console.log('服务已经启动');
})
```

#### 2.监听主机和端口号

Server通过listen方法来开启服务器，并且在某一个主机和端口上监听网络请求， 也就是当我们通过 ip:port的方式发送到我们监听的Web服务器上时， 我们就可以对其进行相关的处理；

**listen函数有三个参数：**

- 端口port: 可以不传, 系统会默认分配端

- 主机host: 通常可以传入localhost、ip地址127.0.0.1、或者ip地址0.0.0.0，默认是0.0.0.0；
  - localhost：本质上是一个域名，通常情况下会被解析成127.0.0.1；
  - 127.0.0.1：回环地址（Loop Back Address），表达的意思其实是我们主机自己发出去的包，直接被自己接收；
  - 0.0.0.0：监听IPV4上所有的地址，再根据端口找到不同的应用程序；
- 回调函数：服务器启动成功时的回调函数；

#### 3.request对象-url

客户端在发送请求时，会请求不同的数据，那么会传入不同的请求地址：

- 本次请求的URL，服务器需要根据不同的URL进行不同的处理；
- 本次请求的请求方式，比如GET、POST请求传入的参数和处理的方式是不同的；
- 本次请求的headers中也会携带一些信息，比如客户端信息、接受数据的格式、支持的编码格式等；

这些信息，Node会帮助我们封装到一个request的对象中，我们可以直接来处理这个request对象：

```js
const http = require('http')
 
const server = http.createServer((req, res) => {
  console.log(req.url);
  console.log(req.method);
  console.log(req.headers);
  res.end('hello kk')
})
 
server.listen(8000, '0.0.0.0', () => {
  console.log('服务器启动成功~');
})
```

#### 4.request对象-method

在Restful规范（设计风格）中，我们对于数据的增删改查应该通过不同的请求方式：

- GET：查询数据；
- POST：新建数据；

- PATCH：更新数据；
- DELETE：删除数据；

#### 5.headers属性

在request对象的header中也包含很多有用的信息，客户端会默认传递过来一些信息：

- **content-type**：是这次请求携带的数据的类型：
  - application/json表示是一个json类型；
  - text/plain表示是文本类型；
  - application/xml表示是xml类型；
  - multipart/form-data表示是上传文件；
- **content-length**：文件的大小和长度

- **keep-alive**：
  - http是基于TCP协议的，但是通常在进行一次请求和响应结束后会立刻中断；
  - 在http1.0中，如果想要继续保持连接：
    - 浏览器需要在请求头中添加 connection: keep-alive；
    - 服务器需要在响应头中添加 connection:keey-alive；
    - 当客户端再次放请求时，就会使用同一个连接，直接一方中断连接；
  - 在http1.1中，所有连接默认是 connection: keep-alive的；
    - 不同的Web服务器会有不同的保持 keep-alive的时间；
    - Node中默认是5s中；
- **accept-encoding**：告知服务器，客户端支持的文件压缩格式，比如js文件可以使用gzip编码，对应 .gz文件；

- **accept**：告知服务器，客户端可接受文件的格式类型；

- **user-agent**：客户端相关的信息；

#### 6.返回响应结果

如果我们希望给客户端响应的结果数据，可以通过两种方式：

- Write方法：这种方式是直接写出数据，但是并没有关闭流；
- end方法：这种方式是写出最后的数据，并且写出后会关闭流；

如果我们没有调用 end和close，客户端将会一直等待结果：所以客户端在发送网络请求时，都会设置超时时间。

#### 7.常见的http  [状态码](https://blog.csdn.net/dgxin_605/article/details/109896967?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522167378074716800215066067%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=167378074716800215066067&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~top_positive~default-1-109896967-null-null.142^v71^pc_search_v2,201^v4^add_ask&utm_term=%E7%8A%B6%E6%80%81%E7%A0%81&spm=1018.2226.3001.4187)  

设置状态码常见的有两种方式：

```js
res.statusCode = 400;
res.writeHead(200);
```

#### 8.响应头文件

返回头部信息，主要有两种方式：

- res.setHeader：一次写入一个头部信息；
- res.writeHead：同时写入header和status；



## 6、NodeJS-jade模块

jade模块，可通过jade来编写html文件。

jade是一款高性能、简洁易懂的模板引擎。可通过jade来编写html文件。

jade类似一个用于快速编写html的语言，其编写后的文件后缀为.jade。



## 7、NodeJS-os模块

os模块：当前系统类信息。const os = require('os')   *//引入os内置模块*



| API方法()   | 作用                               |
| ----------- | ---------------------------------- |
| os.EOL      | 根据不同的操作系统生成对应的换行符 |
| os.cpus     | cup的相关信息                      |
| os.totalmem | 总内存大小                         |
| os.freemem  | 空余内存大小                       |
| os.hostname | 主机名                             |
| os.typr     | 系统类型                           |



```js
const os = require("os"); //内置模块
console.log(os.EOL());
console.log(os.cpus());
...
```



## 8、NodeJS-url模块（弃用）

url模块：处理url相关信息，var url = require('url');    *//引入URL内置模块*


**属性**

href: 准备解析的完整的 URL，包含协议和主机（小写）


'http://user:pass@host.com:8080/p/a/t/h?query=string#hash'
protocol: 请求协议， 小写


'http:'
slashes: 协议要求的斜杠（冒号后）


true 或 false
true 或 false
host: 完整的 URL 小写 主机部分，包含端口信息


'host.com:8080'
auth: url 中的验证信息


'user:pass'
hostname: 域名中的小写主机名


'host.com'
port: 主机的端口号

1
'8080'
pathname: URL 中的路径部分，在主机名后，查询字符前，包含第一个斜杠


'/p/a/t/h'
search: URL 中的查询字符串，包含开头的问号


'?query=string'
path: pathname 和 search 连在一起


'/p/a/t/h?query=string'
query: 查询字符串中得参数部分，或者使用 querystring.parse() 解析后返回的对象


'query=string' or {'query':'string'}
hash: URL 的 “#” 后面部分（包括 # 符号）


'#hash'

**基本语法：**

| API（）                   | 作用                                                         |
| ------------------------- | ------------------------------------------------------------ |
| url.parse(地址 ，true) ； | 将地址转为对象，第二个参数为true时，query属性也转为对象，目前已弃用 ，改用 new URL 或 querystring.parse() |
| url.resolve()             | 合并目录解析， 目前已弃用                                    |
| url.format(),             | 将对象转化为url地址，目前已弃用                              |
| url.resolveObject         | 已弃用                                                       |
|                           |                                                              |
|                           |                                                              |




el：

```js
const url = require("url");

const strURL = 'https://www.baidu.com/s?ie=UTF-8&wd=不吃香菜';
console.log(url.parse(strURL , true));  // Url 对象
console.log(url.parse(strURL , true).query.wd);// 对象中的属性wd, 值为"不吃香菜" 

console.log(url.resolve('https://www.baidu.com', '../bar')); //  https://www.baidu.com/bar
// 以上弃用

const data = new URL(strURL ) // new一个URL实例,参数二为默认
// console.log(data) // 可以打印出来看看里面有什么，
// 通过searchParams的get可以获取到想要获取的数据
const name = data.searchParams.get('获取的属性名') 
const wd = data.searchParams.get('wd')
console.log(wd) // 不吃香菜

// 第三方  
const querystring = require('querystring') // 引用querystring
query = querystring.parse(strURL.split('?')[1]) // 设置query值，将req的url值进行分割整理
console.log(query.wd) // 不吃香菜
```







## require 机制

require，不算模块，是一种机制

- 在nodejs中，require用于加载模块或文件；

- require函数是一种运行时同步加载的机制。

- 参数值可以是完整路径的文件名，也可以为模块名，当node加载该文件后，会有一个“require.cache”函数对该文件进行缓存。



### 使用机制

在node中,可以使用require()函数来加载模块.

require函数使用一个参数,参数值可以带有完整路径的模块的文件名,也可以为模块名.当使用node中提供的模块时,在require函数中只需要指定模块名即可.

require函数是一种运行时同步加载的机制(拷贝该文件)，当node加载该文件后，会有一个require.cache函数对该文件进行缓存

字符串中是否含有路径。如以下示例

1、无路径(也称为加载模块)：require('find')

2、有路径(也称为加载文件)：require('./find.js')



### 加载模块

如：加载find模块，require("find"); 步骤

1、node会先查找find模块是否是内置模块（nodejs内置的模块有fs、http等），找不到则进行下一步

2、从当前目录向外寻找node_moludes查找是否有find.js文件，找不到进行下一步；

3、在node_moludes中找find文件夹，寻找index.js文件；

4、没有index.js文件，则去package.json中查找main字段，该字段对应于一个入口路径；

5、以上都找不到，报错。



### 加载文件

如：加载find文件， require("./find"); 步骤

1、node会先找当前目录下的find.js文件；

2、进而寻找find.json文件；

3、寻找当前目录下的find文件夹的index.js

4、没有index.js文件，则去package.json中查找main字段，该字段对应于一个入口路径；