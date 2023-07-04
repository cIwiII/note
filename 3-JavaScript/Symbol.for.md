
地址： https://www.jianshu.com/p/ad351cb4a5ff

## Symbol.for(key);

Symbol.for(key) 和Symbol(desc)类似，都是为了产生一个唯一标识，返回的是Symbol类型的数据

var REACT_ELEMENT_TYPE = Symbol.for('react.element');

不同的是：
- Symbol.for的key相同，就代表是同一个值;
- Symbol()的desc相同，也不是同一个值；

规则：
Symbol.for(key)通过key来判断其唯一性，key必须是字符串，

不是字符串的，调用toString()转换为字符串，如果无法转换成字符串的，会报错。

undefined和null 没有toString(),但是不会报错，当做字符串'undefined'和'null'处理。

注意事项:

```js
//- 1 key不是必须的，默认为字符串undefined
Symbol.for() === Symbol.for(undefined);
//输出：true

Symbol.for() === Symbol.for('undefined');
//输出：true

var obj={};
Symbol.for() === Symbol.for(obj.dddd);
//输出：true

console.log(Symbol.for())
//输出：Symbol(undefined)

//- 2 key为null，则结果和传入字符串null相同-null
console.log(Symbol.for(null));
//输出：Symbol(null)

//- 3 key为""，则转换的Symbol的key为空白，和key为空数组相同
Symbol.for("");
//输出：Symbol()
Symbol.for([]);//[].toString()===""
//输出：Symbol()

//- 4 key为undefined，则结果和传入字符串undefined相同-undefined
Symbol.for(undefined);
//输出：Symbol(undefined)

//- 5 key为function，则转换的Symbol的key为代码本身
var fun=function bb(){console.log('hello')};
//输出：Symbol(function bb(){console.log('hello')})

//- 6 key为Array，则转换的Symbol的key为调用Array.toString()
Symbol.for([1,'a',{attr:'attr'}]);
//输出：Symbol(1,a,[object Object])

[1,'a',{attr:'attr'}].toString()
//输出："1,a,[object Object]"


//- 7 key为对象，则调用toString()转换，如果没有toSting(),则key为[object Object]
//有toSting()
Symbol.for({a:1,toString(){return 'hello'}});
//输出：Symbol(hello)

//toSting()返回数字
Symbol.for({a:1,toString(){return 111}});
//输出：Symbol(111)

//没有toString()
Symbol.for({a:1});
//输出：Symbol([object Object])

//空对象
Symbol.for({});
//输出：Symbol([object Object])

//- 8 key为NaN或Infinity，则转换的Symbol的key为调用Array.toString() - NaN Infinity
Symbol.for(Infinity);
//输出：Symbol(Infinity)

Symbol.for(NaN);
//输出：Symbol(NaN)

//- 9 key为Symbol，报错
Symbol.for(Symbol.for());
//输出： Uncaught TypeError: Cannot convert a Symbol value to a string
```

## 拓展 

-JavaScript内置对象Symbol  https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol

属性

Symbol.asyncIterator

Symbol.prototype.description

Symbol.hasInstance

Symbol.isConcatSpreadable

Symbol.iterator

Symbol.match

Symbol.matchAll

Symbol.replace

Symbol.search

Symbol.species

Symbol.split

Symbol.toPrimitive

Symbol.toStringTag

Symbol.unscopables

方法

Symbol.prototype[@@toPrimitive]

Symbol.for()

Symbol.keyFor()

Symbol.prototype.toString()

Symbol.prototype.valueOf()