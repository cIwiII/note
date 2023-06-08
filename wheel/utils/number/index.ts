
/**
 * 获取随机整数
 * @param minNum 最小数
 * @param maxNum 最大数
 */
export function randomInt(minNum: number, maxNum: number): number {
  return parseInt((Math.random() * (maxNum - minNum + 1) + minNum).toString(), 10);
};


/**
 * 获取随机字符串
 * @param length 长度
 */
export function randomString(length?: number):string {
  if (length === void 0) {
    length = 6;
  }

  var db = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var result = '';

  for (var i = 0; i < length; i++) {
    result += db[randomInt(0, db.length - 1)];
  }

  return result;
};
