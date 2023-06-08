var startTime = new Date().getTime();
var count = 0;
setInterval(function () {
  count++;
  console.log(`${count}---${new Date().getTime() - (startTime + count * 1000)}`);
}, 1000);
