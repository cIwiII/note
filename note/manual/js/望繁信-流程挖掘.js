/* js 检查html语法是否正确 */

/* ["1.25.34","3.0.3","2.5.123.3","3","0.2.4.1"] 按首尾权重比较大小 */

/* [3,2,4,8,54,32],[43,35,12,6,4,6,3,3]
  
  数组合并和排序，不能使用 array 及 es6 语法的方法

*/

/* 4.编写solution函数，传入指定html字符串，是否合法
   <div><img/></div>  //true
   <div><img></img></div>  //true
   <div><p></div></p>  // false
*/

// let flag = '<div class="adsd"><img/></div>'; //true
// let flag = '<div><img/></div>'   //true
// let flag = '<div><img></img></div>'  //true
// let flag = "<div><p></div></p>"; // false
let flag = '<div>好挺起<img src="../123"/></div>'; // true

isHtmlStr(flag);

function isHtmlStr(htmlStr) {
  let reg = /<[^>]+>/gi || /<.+?>/gi;
  const arr = htmlStr.toLowerCase().match(reg);
  const boo = testHtml(arr);
  console.log(`字符串：${htmlStr} 是否合法--${boo}`);
}

function testHtml(array) {
  let arr = [],
    tempIndex = 0;
  array.forEach((v, i) => {
    if (!v.endsWith("/>")) {
      //过滤单标签
      let tag = v.split(" ")[0];
      tag = tag.endsWith(">") ? tag : tag + ">";
      arr.push(tag);
    }
  });

  if (arr.length === 0) return true;
  if (arr.length % 2 != 0) {
    console.error("不合法");
    return false;
  }

  let bool = arr.every((v, i) => {
    if (v === true || tempIndex < i) return true;
    let index = arr.indexOf(`</${v.slice(1, -1)}>`);
    if (index === -1) return false;
    arr[index] = true;
    tempIndex = index;
    if (i + 1 === index) return true;
    let newArr = arr.slice(i + 1, index);
    // console.log(v, i, str, index, newArr);
    return isHtml(newArr);
  });
  return bool;
}
