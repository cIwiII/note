const webSocket = require('ws');

let wss = new webSocket.Server({ port: 7776 }, function () {
  console.log('服务器ws7776启动成功');
});
wss.on('connection', function (ws, req) {
  console.log('ws连接成功');

   ws.on('message', function (message) {
    let text = binaryData(message);
    console.log('接受原始消息', message, '转译为', text);
    ws.send(JSON.stringify({ type: '返回', data: text.data }));
  });

  ws.on('error', function (message) {
    console.log('error', message);
  });

  ws.on('close', function (message) {
    //刷新页面会关闭，然后重新开启参数为编号
    console.log('close', message);
  });
});

//二进制转换为发送时的数据类型
function binaryData(data) {
  return JSON.parse(new TextDecoder('utf-8').decode(new Uint8Array(data)));
}
