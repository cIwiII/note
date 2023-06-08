

/* 指定范围随机数 */
class Random {
  //随机[s,e）范围
  static nextInt(start, end) {
    return Math.floor(Math.random() * (end - start)) + start;
  }
  //随机[s,e]范围
  static nextInt(start, end) {
    return Math.floor(Math.random() * (end - start + 1)) + start;
  }
}

//随机色
function getRandomColor() {
  const colorAngle = Math.floor(Math.random() * 360);
  return `hsla(${colorAngle},100%,50%,1)`;
}

//随机数
function randomNumber( min = 0, max = 1) {
  if (min >= max) {
    return max;
  }
  return Math.floor(Math.random() * (max - min) + min);
}