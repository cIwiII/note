let limit = 4;
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let proItem = item => {
  return new Promise((resolve, reject) => {
    console.log("开始", item);
    setTimeout(() => {
      console.log("\n结束", item);
      resolve();
    }, Math.random() * 3000);
  });
};
const as = promiseAll(array, proItem, limit);
function promiseAll(arr = [], proItem, limit = 3) {
  let index = 0;
  let res = [];
  let excuting = [];
  function enqueue() {
    if (index === arr.length) return Promise.resolve();
    let item = arr[index++];
    let p = proItem(item);
    res.push(p);
    const e = p.then(() => {
      excuting.splice(excuting.indexOf(e), 1);
    });
    excuting.push(e);
    let r = Promise.resolve();
    if (excuting.length >= limit) {
      r = Promise.race(excuting);
    }
    return r.then(() => enqueue());
  }
  return enqueue();
  // return enqueue().then(() => Promise.all(res));
}
