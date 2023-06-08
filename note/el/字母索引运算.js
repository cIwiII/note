// 算法排序,'A+B-X-L-@+F-I+!-E+G-S+D-K-L+&-#-F+U',A-Z索引0-25，其他非加减字符为0，计算最终结果。

function sum(data) {
  let str = data.split("");
  // console.log(str)
  let strs = str.reduce((num, item, index) => {
    item = item.toUpperCase();
    let code = item.charCodeAt(0);
    if (code >= 65 && code <= 90) {
      code -= 65;
    } else if (code == 43) {
      code = "+";
    } else if (code == 45) {
      code = "-";
    } else if (code == 32) {
      code = "";
    } else {
      code = 0;
    }
    return num + code;
  }, "");
  console.log(eval(strs));
}
sum("A+B-X-L-@+F-I+!-E+G-S+D-K-L+&-#-F+U");
