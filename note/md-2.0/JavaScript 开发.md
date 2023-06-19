
##### 1.数字分隔符
为了提高数字的可读性，可以使用下划线作为分隔符。
```js
const largeNumber = 1_000_000_000;

console.log(largeNumber); // 1000000000
```

##### 2.事件监听器只运行一次
添加一个事件监听器并且只运行一次，可以使用 once 选项。
```js
element.addEventListener('click', () => console.log('I run only once'), {
    once: true
});
```
##### 3.console.log变量包装器
在 console.log() 中，将参数括在花括号中，以便您可以同时看到变量名和变量值。
```js
 const name = "Maxwell";

    console.log({ name });
```
##### 4.检查 Caps Lock 是否打开
使用 KeyboardEvent.getModifierState() 来检测 Caps Lock 是否打开。
```js
const passwordInput = document.getElementById('password');

passwordInput.addEventListener('keyup', function (event) {
    if (event.getModifierState('CapsLock')) {
        // CapsLock is open
    }
});
```
##### 5.从数组中获取最小值/最大值
您可以结合扩展运算符使用 Math.min() 或 Math.max() 来查找数组中的最小值或最大值。
```js
const numbers = [5, 7, 1, 4, 9];

console.log(Math.max(...numbers)); // 9
console.log(Math.min(...numbers)); // 1
```
##### 6.获取鼠标位置
您可以使用 MouseEvent 对象的 clientX 和 clientY 属性的值来获取有关当前鼠标位置坐标的信息。
```js
document.addEventListener('mousemove', (e) => {
    console.log(`Mouse X: ${e.clientX}, Mouse Y: ${e.clientY}`);
});
```
##### 7.复制到剪贴板
使用剪贴板 API 创建“复制到剪贴板”功能。
```js
function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
}
```
##### 8.简写条件判断语句
如果函数只在条件为真时才执行，可以使用&&简写。
```js
// Common writing method
if (condition) {
    doSomething();
}

// Abbreviations
condition && doSomething();
```
##### 9.console.table() 以特定格式打印表格
语法：

console.table(data [, columns]);
参数：
data 表示要显示的数据。它必须是数组或对象。
columns 表示包含列名称的数组。
```js
   function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    const p1 = new Person("Mark", "Smith");
    const p2 = new Person("Maxwell", "Siegrist");
    const p3 = new Person("Lucy", "Jones");

    console.table([p1, p2, p3], ["firstName"]);
```
##### 10.将字符串转换为数字
```js
const str = '508';

console.log(+str) // 508;
```
##### 11.阵列去重
```js
const numbers = [2, 3, 5, 5, 2];

console.log([...new Set(numbers)]); // [2, 3, 5]
```
##### 12.过滤数组中的所有虚拟值
```js
const myArray = [1, undefined, NaN, 2, null, '@maxwell', true, 5, false];

console.log(myArray.filter(Boolean)); // [1, 2, "@maxwell", true, 5]
```
##### 13.include的用途
```js
const myTech = 'JavaScript';
const techs = ['HTML', 'CSS', 'JavaScript'];

// Common writing method
if (myTech === 'HTML' || myTech === 'CSS' || myTech === 'JavaScript') {
    // do something
}

// includes writing method
if (techs.includes(myTech)) {
    // do something 
}
```
##### 14.大量使用 reduce 求和数组
```js
const myArray = [10, 20, 30, 40];
const reducer = (total, currentValue) => total + currentValue;

console.log(myArray.reduce(reducer)); // 100
```
##### 15.元素的数据集
使用数据集属性访问元素的自定义数据属性 (data-*)。dataset获取
```html
<div id="user" data-name="Maxwell" data-age="32" data-something="Some Data">
    Hello Maxwell
</div>

<script>
    const user = document.getElementById('user');

    console.log(user.dataset); 
    // { name: "Maxwell", age: "32", something: "Some Data" }

    console.log(user.dataset.name); // "Maxwell"
    console.log(user.dataset.age); // "32"
    console.log(user.dataset.something); // "Some Data"
</script>
```