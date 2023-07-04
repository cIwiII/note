/**
 * 使用 web-worker
 */

var startTime = new Date().getTime();
var count = 0;
setInterval(function () {
  count++;
  console.log(`使用webworker 第${count}次：误差 ${new Date().getTime() - (startTime + count * 1000)} ms`);
}, 1000);
