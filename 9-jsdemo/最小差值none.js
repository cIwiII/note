// 一个数字数组分成3份，使他们各自的和的差值最小
// let array = [9, 0, 12, 13, 32, 42, 43, 65, 76, 84, 23, 34, 5, 79, 12, 124, 88]
// let array=[12, 12, 8, 8, 8, 4,4,4,4,4,4]
// let array=[54,345,45,345,45,6,324,34,56,656,32]
let array = [54, 345, 45, 345, 45, 6, 324, 34, 56, 656, 32];
function sums(arr) {
  return arr.reduce((num, item) => num + item, 0);
}
function average(array) {
  let a = [],
    b = [],
    c = [];
  let arr = array.sort((p, n) => n - p);
  // let newArr=[...new Set(arr)].sort((p, n) => p-n)
  // let aver = sums(arr) / 3
  // let offset=newArr[0]==0?newArr[1]-1:newArr[0]-1
  arr.forEach(item => {
    // if (sums(a) + item < aver+offset) {
    //     a.push(item)
    // } else if (sums(b) + item < aver+offset) {
    //     b.push(item)
    // } else {
    //     c.push(item)
    // }
    if (sums(a) > sums(b)) {
      if (sums(b) > sums(c)) {
        c.push(item);
      } else {
        b.push(item);
      }
    } else {
      if (sums(a) > sums(c)) {
        c.push(item);
      } else {
        a.push(item);
      }
    }
  });
  console.log(sums(a));
  console.log(sums(b));
  console.log(sums(c));
  return [a, b, c];
}
console.log(average(array));
