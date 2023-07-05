前言：
- interface是在代码中使用的接口,api是提供给外部使用的程序接入点。
- 前者是编程语言中使用的,没有具体实现的抽象的定义
- 后者其实是一个已经包含了逻辑的可执行的程序,供外部使用的。

## 内置API

### Fullscreen API（全屏）
- el:
```js
// 观察enter键（实现enter切换全屏）
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    toggleFullScreen();
  }
}, false);
// 全屏
function toggleFullScreen() {
  //Document.fullscreenElement/ShadowRoot.fullscreenElement,是否是全屏
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();//元素全屏，清除其他UI元素
  } else if (document.exitFullscreen) {
    document.exitFullscreen();//从全屏切回窗口模式
  }
}

function toggle() {
  const videoStageEl = document.querySelector(".video")
  // 是否全屏
  if(!document.fullscreenElement)
    //设置全屏
    videoStageEl.requestFullscreen()
  else
    //退出全屏
    document.exitFullscreen()
}
```
- 说明
    - 访问控制:即能否使用改方法，使用Permissions Policy（HTTP权限政策）进行控制。全屏模式功能由字符串 标识，"fullscreen"默认白名单值为"self"
    - 注意：需要从事件处理程序中调用全屏请求，否则它们将被拒绝。
    - fullscreenElement：实际使用中需要检查它的前缀版本（例如mozFullScreenElement（火狐），msFullscreenElement（IE）、 或webkitFullscreenElement（谷歌）
    - document.fullscreenEnabled：全屏是否可用

- 特性
    - Document.fullscreen 弃用，使用fullscreenElement代替
    - Document.fullscreenElement
- 方法
    - Document.exitFullscreen()：退出全屏
    - Element.requestFullscreen()：进入全屏
- 事件
    - Document|Element：fullscreenchange进入或退出全屏模,触发事件
```js
document.addEventListener('fullscreenchange', fullscreenchanged);
// or
document.onfullscreenchange = fullscreenchanged;
```
    - Document|Element :fullscreenerror 尝试将其切换到或退出全屏模式时发生错误时触发
- 补充
    - Gecko 自动将 CSS 规则添加到元素以将其拉伸以填充屏幕：“ width: 100%; height: 100%”。
    - WebKit 不会这样做；相反，它将全屏元素以相同的尺寸置于屏幕的中心，否则屏幕为黑色。width: 100%; height: 100%;
    - 要在 WebKit 中获得相同的全屏行为，您需要自己向元素添加自己的“ ” CSS 规则：
    ```css
    #myvideo:-webkit-full-screen {
        width: 100%;
        height: 100%;
    }
    ```
### 设备定位 Geolocation.getCurrentPosition()
- el
```js
var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
  var crd = pos.coords;

  console.log('Your current position is:');
  console.log('Latitude : ' + crd.latitude);
  console.log('Longitude: ' + crd.longitude);
  console.log('More or less ' + crd.accuracy + ' meters.');
};

function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
};

navigator.geolocation.getCurrentPosition(success, error, options);//语法
```
- 说明: Geolocation.getCurrentPosition() 方法用来获取设备当前位置。
- 特性
- 方法
- 事件
- 补充


## 内置接口
### clearInterval()
### clearTimeout()
### XMLHttpRequest
- el
- 说明
    - `地址 :+1: `  https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest#constructor
    - XMLHttpRequest在AJAX编程中大量使用。
      - EventTarget ← XMLHttpRequestEventTarget ← XMLHttpRequest
    - 构造器应该在其他方法之前被调用new
    - 继承了XMLHttpRequestEventTarget和 的属性EventTarget。
- 属性
    - XMLHttpRequest.readyState 只读，返回表示请求状态的数字。

    - XMLHttpRequest.response 只读，根据 的值，返回包含响应实体主体的ArrayBuffer、 a Blob、 a 、JavaScript 对象或字符串。DocumentXMLHttpRequest.responseType

    - XMLHttpRequest.responseText 只读，返回一个字符串，其中包含对请求的响应作为文本，或者null请求不成功或尚未发送。

    - XMLHttpRequest.responseType，指定响应的类型。

    - XMLHttpRequest.responseURL 只读，返回响应的序列化 URL，如果 URL 为 null，则返回空字符串。

    - XMLHttpRequest.responseXML 只读，返回Document包含对请求的响应，或者null如果请求不成功、尚未发送或无法解析为 XML 或 HTML。在Web Workers中不可用。

    - XMLHttpRequest.status 只读，返回请求的HTTP 响应状态代码。

    - XMLHttpRequest.statusText 只读，返回包含 HTTP 服务器返回的响应字符串的字符串。与 不同XMLHttpRequest.status，这包括响应消息的整个文本（OK例如，“”）。

    - XMLHttpRequest.timeout 请求在自动终止之前可以花费的时间（以毫秒为单位）。

    - XMLHttpRequest.upload 只读，XMLHttpRequestUpload代表上传过程。

    - XMLHttpRequest.withCredentials 返回是否应使用 cookie 或授权标头等凭据进行true跨站点请求；Access-Control否则false。
- 非标(准)属性
    - XMLHttpRequest.channel 只读，执行请求时对象使用的通道。

    - XMLHttpRequest.mozAnon 只读，一个布尔值。如果为真，请求将在没有 cookie 和身份验证标头的情况下发送。

    - XMLHttpRequest.mozSystem 只读，一个布尔值。如果为 true，则不会对请求执行同源策略。

    - XMLHttpRequest.mozBackgroundRequest 一个布尔值。它指示对象是否表示后台服务请求。
    
    
