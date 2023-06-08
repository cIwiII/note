// 引入nodejs-websocket包
const wss = require('nodejs-websocket')
 
// 当前所处状态
const type_ENTER = 0 //进入聊天室状态
const type_DATA = 1 //发送信息状态
const type_LEAVE = 2 //离开聊天室状态
var count = 0 //当前用户数量
var server = wss.createServer(function (ws) {
    console.log("有用户连接了");
    count++
    ws.userName = `用户${count}`
    brodCast({
        type: type_ENTER,
        msg: `${ws.userName}进入了聊天室~`,
        time: new Date().toLocaleTimeString()
    })
    // 监听消息
    ws.on("text", function (str) {
        brodCast({
            type: type_DATA,
            time: new Date().toLocaleTimeString(),
            ...JSON.parse(str)
        })
    })
    // 监听连接关闭
    ws.on("close", function (code, reason) {
        count--
        brodCast({
            type: type_LEAVE,
            msg: `${ws.userName}离开了聊天室~`,
            time: new Date().toLocaleTimeString()
        })
    })
    // 监听异常
    ws.on('error', () => {
        console.log("用户连接异常~");
    })
})
 
// 广播
function brodCast(msg) {
    server.connections.forEach(item => {
        item.send(JSON.stringify(msg))
    })
}
server.listen(8081, () => {
    console.log("websocket服务启动成功了~");
})

// module.exports = server;