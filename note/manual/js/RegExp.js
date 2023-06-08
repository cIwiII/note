let flag = '<div>好挺起<img src="../123"/></div>'; // true

var reg = /(?<=>)[^<]+?(?=<)/g; // html文本  匹配>之后的，<之前的，不是< 的内容
var reg2 = /<[^>]+>/gi; // 匹配html标签  ，匹配 包含<>之内的，里面没有>

var asd = reg.test(flag);
let res = flag.match(reg);//==>["好挺起"]
var asd1 = flag.split(reg2).filter(Boolean); // 出去虚值  ==>["好挺起"]    res != asd1 引用类型地址不同不相等


var str = "12ab34cd56ef78gh999";
var reg = /[0-9]+/g;
console.log(str.match(reg));
//['12','34','56','78','999']

var str = "123abc456efg789";
var reg = /(?<=b)[\da-z]{0,4}/;
console.log(str.replace(reg, "*")); //***abc***efg***

var str = "123abc456efg";
var reg = /[0-9]+/;
console.log(str.split(reg)); //['','abc','efg']

// const string = "12345";
// const regx = /[(\d{1,3})(\d{1,3})]/;
// console.log(string.match(regx));
// // => ["12345", "123", "45", index: 0, input: "12345"]

// var str1 = "12ab34cd56ef78gh999";
// var reg1 = /[0-9]+?/g;
// console.log(str1.match(reg1));
// //['12','34','56','78','999']
