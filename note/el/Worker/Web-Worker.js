// <!--子线程，HTML文件的body标签中-->
// importScripts('script1.js')	// 加载单个脚本
// importScripts('script1.js', 'script2.js')	// 加载多个脚本

// worker线程
/* let arr = ['...好多图片路径'];
for (let i = 0, len = arr.length; i < len; i++) {
    let req = new XMLHttpRequest();
    req.open('GET', arr[i], true);
    req.responseType = "blob";
    req.setRequestHeader("client_type", "DESKTOP_WEB");
    req.onreadystatechange = () => {
      if (req.readyState == 4) {
      postMessage(req.response);
    }
  }
  req.send(null);
} */
// self.name // myWorker
let n = 0,
  timer = null;
self.onmessage = ev => {
  console.log('子线成接收数据', ev);
  if (ev.data == '暂停') {
    clearInterval(timer);
    timer = null;
  } else if (timer == null) {
    timer = setInterval(() => {
      n++;
      sendMessage(n);
      // self.close(),关闭后不在接收
    }, 1000);
  }
};
function sendMessage(a) {
  self.postMessage(a);
}

// Worker线程中全局对象为 self，代表子线程自身，这时 this指向self，其上有一些api：

// self.postMessage: 往主线程发消息，消息可以是任意类型数据，包括二进制数据
// self.close: worker线程关闭自己
// self.onmessage: 主线程发worker线程消息时的回调，支持 DOM2 级
// self.onerror: worker线程发生错误时的回调，支持 DOM2 级
