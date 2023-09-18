







## ajax

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



原生使用

```js
// axios 封装请求
axios.get();
axios.post();
axios({
  url: "",
  method: ""
});
await axios.get();
axios.get("/url").then(res => {});
```

### js ajax 实现

```js

var myajax = params => {
  // （1）创建ajax的核心对象
  const xmlhttp = new XMLHttpRequest();
  // (2)和服务器进行连接
  xmlhttp.open(params.url, params.method);
  // (3)发送请求,发送请求接受到结果
  xmlhttp.send(params.data);
  // (4)监控状态码变化，获取响应结果. 判断成功还是失败  x 100-200  200
  xmlhttp.onreadystatechange = function (resp) {
    //状态码等于200，readyState=4代表后端已经将数据传输完毕，前端可以获取
    if (resp.status == 200 && resp.readyState == 4) {
      const result = resp.responseText;
      params.success(result);
    } else {
      //获取失败结果
      params.error(result2);
    }
  };
  // 设置请求失败时的监听函数
  xmlhttp.onerror = function () {
    console.error(this.statusText);
  };
  // 设置请求头信息
  xmlhttp.responseType = "json";
  xmlhttp.setRequestHeader("Accept", "application/json");
};

//去注释
const myajax = params => {
  const xmlhttp = new XMLHttpRequest();
  xmlhttp.open(params.url, params.method, true);
  xmlhttp.send(params.data);
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.state == 200 && xmlhttp.readyState == 4) {
      params.success(xmlhttp.responseText);
    } else {
      params.error(this.statusText);
    }
  };
  xmlhttp.onerror = function () {
    console.error(this.statusText);
  };
  xmlhttp.responseType = "json";
  xmlhttp.setRequestHeader("Accept", "application/json");
};

// 使用自己的ajax
myajax({
  url: "",
  method: "GET",
  data: { id: 1 },
  success(result) {},
  error() {}
});

// promise 封装实现：
function getJSON(url) {
  // 创建一个 promise 对象
  let promise = new Promise(function (resolve, reject) {
    let xhr = new XMLHttpRequest();
    // 新建一个 http 请求
    xhr.open("GET", url, true);
    // 设置状态的监听函数
    xhr.onreadystatechange = function () {
      if (this.readyState !== 4) return;
      // 当请求成功或失败时，改变 promise 的状态
      if (this.status === 200) {
        resolve(this.response);
      } else {
        reject(new Error(this.statusText));
      }
    };
    // 设置错误监听函数
    xhr.onerror = function () {
      reject(new Error(this.statusText));
    };
    // 设置响应的数据类型
    xhr.responseType = "json";
    // 设置请求头信息
    xhr.setRequestHeader("Accept", "application/json");
    // 发送 http 请求
    xhr.send(null);
  });
  return promise;
}

// promise 技术
const promise = new Promise((reslove, reject) => {
  ajax({
    url: "",
    method: "GET",
    data: "",
    success(res) {
      reslove(res);
    },
    fail(error) {
      reject(error);
    }
  });
});
promise.then(res => {});




```



### TS ajax 实现

```ts

interface IData {
    id:number,
    name:string
}
type newData = string | IData
// 用于定义一个函数
type successType = (msg:string)=>void
// 用于定义函数类型
type error = (error:string)=>void

interface IType {
    url:string,
    method?:string,
    data:newData,
    success:successType,
    error?:(error:string)=>void
}

//ajax函数就已经封装完毕
function ajax({url,method="GET",data,success,error}:IType){
    const xmlhttp = new XMLHttpRequest()
    // 语法检测到method没有传递过后，得到undefined
    xmlhttp.open(url,method)
    // 传递数据给后端.send方法发现消息的时候，默认支持字符串个数
    // data是一个对象，data转化为一个字符串传递send
    // todo 自己封装一个函数，接受一个对象，转化字符串"id=1&name=xiaowang"
    let res:string = changeDateTOString(data)  // "id=1&name=xiaowang"
    // 比如{id:1,name:"xiaowang"} JSON.stringify()   {"id":1,"name":"xiaowang"}
    xmlhttp.send(res)
    xmlhttp.onreadystatechange = function(){
        // 判断装填码
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
            const res = xmlhttp.responseText
            // 成功后调用成功回调
            success(res)
        }else{
            const res = xmlhttp.responseText
            // 当我们没有传递error的时候，直接不调用这个函数
            error!(res)
        }
    }
}
ajax({
    url:"http://127.0.0.1",
    method:"GET",
    data:"id=1&name=xiaowang",
    success(msg){
        console.log(msg)
    },
    error(erorr){

    }
})

function changeDateTOString(data:any){
    return "id=1&name=xiaowang"
}
```



### jquery ajax应用

```js
// jquery封装的ajax请求代码。
$.ajax({ url: "", method: "", data: {}, success(res) {} });

function getPromise(url) {
  return new Promise(function (resolve, reject) {
      $.ajax({
          url: "",
          method: "",
          data: {},
          success(res) {
              resolve(res);
          },
          error(error) {
              reject(error);
          }
      });
  });
}

// 使用
const p = getPromise(url)
p.then(res => {}).catch(err => {});

//获取类型数据的Promise对象
let typePromise = getPromise("https://www.fastmock.site/mock/40e170f960701a834866a0bc956002f6/tickets/getAllTypes");
//获取演艺数据的Promise对象
let artPromise = getPromise("https://www.fastmock.site/mock/40e170f960701a834866a0bc956002f6/tickets/getAllArts");

typePromise
  .then(function (type) {
    //   数据处理
    return artPromise;
  })
  .then(function (art) {
    //   数据处理
  });
```

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





## web APIs 

### [TCP/IP](https://baike.baidu.com/item/TCP/IP%E5%8D%8F%E8%AE%AE/212915)协议：

- TCP/IP协议在一定程度上参考了[OSI](https://baike.baidu.com/item/OSI/5520?fromModule=lemma_inlink)的体系结构，OSI模型共有七层，从下到上分别是物理层、数据链路层、网络层、传输层、会话层、表示层和应用层。
- 在TCP/IP协议中，它们被简化为了四个层次，
- 1-应用层（应用层、表示层、会话层）:
  - 其他协议使用
  - 加解密，格式化数据
  - 建立与解除联系
- 2-传输层
- 3-网络层
- 4-网络接口层（物理层、数据链路层）

### [UDP协议](https://baike.baidu.com/item/UDP/571511?fr=ge_ala)：

- 用户数据报协议（User Datagram Protocol）,传输层协议（与TCP一样），用于发送IP数据包。
- UDP 为应用程序提供了一种无需建立连接就可以发送封装的 IP 数据包的方法
- RFC 768  是UDP的正式规范
- UDP在IP报文的协议号是17

### [SMTP](https://baike.baidu.com/item/SMTP/175887?fromModule=lemma_inlink)协议：邮件传输应用

- 

### [HTTP](https://baike.baidu.com/item/HTTP/243074?fromModule=lemma_inlink)协议：万维网



### [TELNET](https://baike.baidu.com/item/TELNET/810597?fromModule=lemma_inlink)协议：远程登录服务应用



### [RTC](https://developer.mozilla.org/en-US/docs/Web/API/RTCAudioSourceStats) 

