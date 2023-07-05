// BigInt----100个9加100个9----7--------
// BigInt可以和Number混入数组中进行排序
const mixed = [4n, 6, -12n, 10, 4, 0, 0n]; // ↪  [4n, 6, -12n, 10, 4, 0, 0n]
mixed.sort();
// ↪ [-12n, 0, 0n, 10, 4n, 4, 6]
// 方式一
let num = 0,
  s = '';
while (num < 100) {
  s = s + '9';
  num++;
}
let b1 = BigInt(s);
// console.log(b1*2n)

// 方式二
let n = BigInt('9'.repeat(100));
console.log(n + n);

// 方式三
let x = 10n ** 100n - 1n;
let y = x + x;
console.log(y);
