/**
 * 扁平化对象
 * @param {*} obj 
 * @returns 
 */
function objectFlat(obj = {}) {
  const res = {};
  function flat(item, preKey = '') {
    Object.entries(item).forEach(([key, val]) => {
      const newKey = preKey ? `${preKey}.${key}` : key;
      if (val && typeof val === 'object') {
        flat(val, newKey);
      } else {
        res[newKey] = val;
      }
    });
  }
  flat(obj);
  return res;
}
// 测试
const source = { a: { b: { c: 1, d: 2 }, e: 3 }, f: { g: 2 } };
console.log('对象扁平化输出：', objectFlat(source));

// 方案 1
/**
 * 数组扁平化
 * @param {*} ary 
 * @returns 
 */
function recursionFlat(ary = []) {
  const res = [];
  ary.forEach(item => {
    if (Array.isArray(item)) {
      res.push(...recursionFlat(item));
    } else {
      res.push(item);
    }
  });
  return res;
}

// 方案 2
/**
 * 数组扁平化
 * @param {*} ary 
 * @returns 
 */
function reduceFlat(ary = []) {
  return ary.reduce((res, item) => {
    console.log('执行', Array.isArray(item), item);
    return res.concat(Array.isArray(item) ? reduceFlat(item) : item);
  }, []);
}

function cont(arr = []) {
  return arr.reduce((res, item) => res.concat(Array.isArray(item) ? cont(item) : item), []);
}
// 测试
const sources = [1, 2, [3, 4, [5, 6]], '7'];
console.log('数组扁平化输出1：', recursionFlat(sources));
console.log('数组扁平化输出2：', cont(sources));
