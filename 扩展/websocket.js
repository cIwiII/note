
//1. 创建服务器
const Websocket = require('ws');
const clients = [];

const wsServer = new Websocket.Server({ port: 7777 }, () => {
  console.log('websocket server 启动:7777');
});

// 2 当某个客户端连接该服务器时
wsServer.on("connection", function (ws, req) {
  // console.log("服务器监听已打开");
  clients.push({ clientWs: ws, userid: "传过来的数据" });
  //req.url来获取参数数据
  // console.log("传递的参数为"+req.url);
  //以上为首次链接时执行
  //设置接受数据的监听事件
  ws.on("message", function (data) {
    console.log("接受数据：" + data);
    data = binaryData(data);//接收的二进制转换为发送时的数据
    // console.log(data);
    //  ws.send("已收到，您发的 信息为"+data);
    ws.send(JSON.stringify(data));
  });
});



//二进制转换为发送时的数据类型
function binaryData(data) {
  return JSON.parse(new TextDecoder("utf-8").decode(new Uint8Array(data)))
}
