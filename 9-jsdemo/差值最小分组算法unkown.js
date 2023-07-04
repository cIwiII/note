// JS中刚刚的写法还可以按照下面的方式实现
for (var i = 0; i < 6; i++) {
  setTimeout(fn(i), 1000);
}
function fn(a) {
  return function () {
    console.log('for循环输出:', a);
  };
}





// ================
var arr = [2, 4, 6, 7, 8, 5];
var keys = [], //存元素在数组中的位置
  maxValue = []; //存储网格中的最大值
function bb() {
  //计算出所有数据的总和
  var sum = arr.reduce(function (start, ele) {
    return start + ele;
  }, 0);
  var v = sum / 4; //分几组数组

  //生成以所有元素为行，值递增为列的网格，以值最大为规划条件，值越大，
  //越接近于平均值
  for (var i = 0; i < arr.length; i++) {
    var row = [],
      key = [];
    for (var j = 0; j <= v; j++) {
      key[j] = [];
      if (i == 0) {
        //第一行，只要小于该列值的都可以加入进去
        if (arr[i] <= j) {
          key[j].push(i);
          row[j] = arr[i];
        } else {
          row[j] = 0;
        }
      } else {
        var value = arr[i],
          cur = 0;
        if (j >= value) {
          //该行的值小于容量值时，该值加上剩余容量可以放的值
          cur = value + maxValue[i - 1][j - value];
        }

        if (cur <= j && cur > maxValue[i - 1][j]) {
          //该行的值小于容量值时，该值加上剩余容量可以放的值，小于容量值
          //同时又比上一行存储的值大，则当前行存储两者之和，否则依然延用上一行的值
          row[j] = cur;
          key[j].push(...keys[i - 1][j - value]);
          key[j].push(i);
        } else {
          row[j] = maxValue[i - 1][j];
          key[j].push(...keys[i - 1][j]);
        }
      }
    }
    keys.push(key);
    maxValue.push(row);
  }

  //右下角的网格中存储的是最优的解
  console.info(keys);
}

bb(); //剩下几组可以将已求得的解排除掉，继续按此方式求解
