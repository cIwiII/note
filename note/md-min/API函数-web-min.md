



-   原生对象/本地对象

native object：独立于宿主环境的 ECMAScript实现提供的对象”。ES自带基本对象，不含浏览器等宿主提供的对象。包含：`String、Boolean、Number、Object、Function、Array、Date、RegExp、Error、EvalError、RangeError、ReferenceError、SyntaxError、TypeError、URIError`。

-   内置对象(属于原生对象，JS引擎初始化时，系统自动创建的)，Global、Math。



## Array 数组属性

| 属性                                                         | 描述                             |
| :----------------------------------------------------------- | :------------------------------- |
| [constructor](https://www.runoob.com/jsref/jsref-constructor-array.html) | 返回创建数组对象的原型函数。     |
| length                                                       | 设置或返回数组元素的个数。       |
| [prototype](https://www.runoob.com/jsref/jsref-prototype-array.html) | 允许你向数组对象添加属性或方法。 |

## Array API方法

| 方法                                                         | 描述                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| unshift()                                                    | 将新元素添加到数组的开头，            并返回新的长度。       |
| shift()                                                      | 删除数组的第一个元素，                   并返回该元素。      |
| push()                                                       | 将新元素添加到数组的末尾，            并返回新的长度。       |
| pop()                                                        | 删除数组的最后一个元素，               并返回该元素。        |
| indexOf()                                                    | 在数组中搜索元素                              并返回其位置。 |
| lastIndexOf()                                                | 在数组中搜索元素，从末尾开始，     并返回其位置。            |
| splice()                                                     | 从数组中添加/删除元素。返回被删元素组成的数组                |
| join()                                                       | 将数组的所有元素连接成一个字符串。                           |
| reverse()                                                    | 反转数组中元素的顺序。                                       |
| concat()                                                     | 连接两个或多个数组，                       并返回已连接新数组（新数组的副本）。 |
| slice()                                                      | 选择数组的一部分，                          并返回新数组。   |
| forEach()                                                    | callback为每个数组元素调用函数。                             |
| filter()                                                     | callback使用数组中通过测试的每个元素             创建新数组。 |
| filter(Boolean)                                              | 去除虚值，固定写法                                           |
| map()                                                        | callback使用为每个数组元素调用函数的结果，没有返回值为undefined，不可中断(抛出异常除外)       创建新数组。 |
| sort()                                                       | callback对数组的元素进行排序。，return>0,ba,return<0,ab返回操作后的数组 |
| some()                                                       | callback检查数组中的任何元素是否通过测试。    任意一个通过返回true |
| every()                                                      | callback检查数组中的每个元素是否通过测试。    所有通过返回true |
| reduce()                                                     | callback将数组的值减为单个值（从左到右）。    接收结果进行处理，返回callback最终处理值 |
| includes()                                                   | 检查数组是否包含指定的元素。                                 |
| isArray()                                                    | 检查对象是否为数组。                                         |
| [keys()](https://www.w3school.com.cn/jsref/jsref_keys.asp)   | 返回 Array Iteration 对象，包含原始数组的键.                 |
| find()                                                       | 返回数组中第一个通过测试的元素的值。                         |
| findIndex()                                                  | 返回数组中通过测试的第一个元素的索引。                       |
| [reduceRight()](https://www.w3school.com.cn/jsref/jsref_reduceright.asp) | 将数组的值减为单个值（从右到左）。                           |
| [copyWithin()](https://www.w3school.com.cn/jsref/jsref_copywithin.asp) | 将数组中的数组元素复制到指定位置或从指定位置复制。           |
| [from()](https://www.w3school.com.cn/jsref/jsref_from.asp)   | 从对象创建数组。                                             |
| fill()                                                       | 用静态值填充数组中的元素。                                   |
| toString()                                                   | 将数组转换为字符串，并返回结果。                             |
| [entries()](https://www.w3school.com.cn/jsref/jsref_entries.asp) | 返回键/值对数组迭代对象。                                    |
| valueOf()                                                    | 返回数组的原始值。                                           |



## Math 对象属性

| 属性                                                       | 描述                                                    |
| :--------------------------------------------------------- | :------------------------------------------------------ |
| [E](https://www.runoob.com/jsref/jsref-e.html)             | 返回算术常量 e，即自然对数的底数（约等于2.718）。       |
| [LN2](https://www.runoob.com/jsref/jsref-ln2.html)         | 返回 2 的自然对数（约等于0.693）。                      |
| [LN10](https://www.runoob.com/jsref/jsref-ln10.html)       | 返回 10 的自然对数（约等于2.302）。                     |
| [LOG2E](https://www.runoob.com/jsref/jsref-log2e.html)     | 返回以 2 为底的 e 的对数（约等于 1.4426950408889634）。 |
| [LOG10E](https://www.runoob.com/jsref/jsref-log10e.html)   | 返回以 10 为底的 e 的对数（约等于0.434）。              |
| [PI](https://www.runoob.com/jsref/jsref-pi.html)           | 返回圆周率（约等于3.14159）。                           |
| [SQRT1_2](https://www.runoob.com/jsref/jsref-sqrt1-2.html) | 返回 2 的平方根的倒数（约等于 0.707）。                 |
| [SQRT2](https://www.runoob.com/jsref/jsref-sqrt2.html)     | 返回 2 的平方根（约等于 1.414）。                       |

## Math 对象方法

| 方法                                                        | 描述                                                         |
| :---------------------------------------------------------- | :----------------------------------------------------------- |
| abs(x)                                                      | 返回 x 的绝对值。                                            |
| max(x,y,z,...,n)                                            | 返回 x,y,z,...,n 中的最高值。                                |
| min(x,y,z,...,n)                                            | 返回 x,y,z,...,n中的最低值。                                 |
| round(x)                                                    | 四舍五入。                                                   |
| ceil(x)                                                     | 对数进行上舍入。                                             |
| floor(x)                                                    | 对 x 进行下舍入。                                            |
| pow(x,y)                                                    | 返回 x 的 y 次幂（次方）。底数x，指数y                       |
| sqrt(x)                                                     | 返回数的平方根。                                             |
| random()                                                    | 返回 0 ~ 1 之间的随机数。wei（低层有规律）乘10取整，         |
| [acos(x)](https://www.runoob.com/jsref/jsref-acos.html)     | 返回 x 的反余弦值。                                          |
| [asin(x)](https://www.runoob.com/jsref/jsref-asin.html)     | 返回 x 的反正弦值。                                          |
| [atan(x)](https://www.runoob.com/jsref/jsref-atan.html)     | 以介于 -PI/2 与 PI/2 弧度之间的数值来返回 x 的反正切值。     |
| [atan2(y,x)](https://www.runoob.com/jsref/jsref-atan2.html) | 返回从 x 轴到点 (x,y) 的角度（介于 -PI/2 与 PI/2 弧度之间）。 |
| [cos(x)](https://www.runoob.com/jsref/jsref-cos.html)       | 返回数的余弦。                                               |
| [exp(x)](https://www.runoob.com/jsref/jsref-exp.html)       | 返回 Ex 的指数。                                             |
| [log(x)](https://www.runoob.com/jsref/jsref-log.html)       | 返回数的自然对数（底为e）。                                  |
| [sin(x)](https://www.runoob.com/jsref/jsref-sin.html)       | 返回数的正弦。                                               |
| [tan(x)](https://www.runoob.com/jsref/jsref-tan.html)       | 返回角的正切。                                               |



## String 对象属性

| 属性                                                         | 描述                       |
| :----------------------------------------------------------- | :------------------------- |
| [constructor](https://www.runoob.com/jsref/jsref-constructor-string.html) | 对创建该对象的函数的引用   |
| length                                                       | 字符串的长度               |
| [prototype](https://www.runoob.com/jsref/jsref-prototype-string.html) | 允许您向对象添加属性和方法 |

## String 对象方法

| 方法                                                         | 描述                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| charAt()                                                     | 返回在指定位置的字符。s.charAt(index):string                 |
| charCodeAt()                                                 | 返回在指定的位置的字符的 Unicode 编码。s.charCodeAt(index):Unicode码 |
| concat()                                                     | 连接两个或更多字符串，并返回新的字符串。（+号链接）s.concat(str2,str3):newStr |
| indexOf()                                                    | 返回某个指定的字符串值在字符串中首次出现的位置索引。str.indexOf(string):index \|-1 |
| lastIndexOf()                                                | 从后向前搜索字符串，并从起始位置（0）开始计算返回字符串最后出现的位置。str.lastIndexOf(string):index \|-1 |
| slice()                                                      | 提取字符串的片断，并在新的字符串中返回被提取的部分。str.slice(startIndex,endIndex):newString |
| replace()                                                    | 在字符串中查找匹配的子串，并替换与正则表达式匹配的子串  str.replace('oldString','newString'):string |
| replaceAll()                                                 | 在字符串中查找匹配的子串，并替换与正则表达式匹配的所有子串。replaceAll('oldString','newString'):string |
| split()                                                      | 把字符串分割为字符串数组。split('abc'):arr：‘aabcde’.split('abc)=['a','de'] |
| toUpperCase()                                                | 把字符串转换为大写。str.toUpperCase():string                 |
| toLowerCase()                                                | 把字符串转换为小写。str.toLowerCase():srting                 |
| startsWith()                                                 | 查看字符串是否以指定的子字符串开头。str.startsWith(指定开头目标子串):boolean |
| endsWith()                                                   | 判断当前字符串是否是以指定的子字符串结尾的（区分大小写）。str.endsWith(指定结尾目标子串):boolean |
| trim()                                                       | 去除字符串两边的空白。  str.trim()                           |
| substr()                                                     | 从起始索引号提取字符串中指定数目的字符。  str.substr(startIndex,number):newString |
| substring()                                                  | 提取字符串中两个指定的索引号之间的字符。  str.substring(startIndex,endIndex):newString |
| [fromCharCode()](https://www.runoob.com/jsref/jsref-fromcharcode.html) | 将 Unicode 编码转为字符。                                    |
| includes()                                                   | 查找字符串中是否包含指定的子字符串。                         |
| [match()](https://www.runoob.com/jsref/jsref-match.html)     | 查找找到一个或多个正则表达式的匹配。                         |
| repeat()                                                     | 复制字符串指定次数，并将它们连接在一起返回。                 |
| [search()](https://www.runoob.com/jsref/jsref-search.html)   | 查找与正则表达式相匹配的值。                                 |
| [toLocaleLowerCase()](https://www.runoob.com/jsref/jsref-tolocalelowercase.html) | 根据本地主机的语言环境把字符串转换为小写。                   |
| [toLocaleUpperCase()](https://www.runoob.com/jsref/jsref-tolocaleuppercase.html) | 根据本地主机的语言环境把字符串转换为大写。                   |
| [valueOf()](https://www.runoob.com/jsref/jsref-valueof-string.html) | 返回某个字符串对象的原始值。                                 |
| toString()                                                   | 返回一个字符串。                                             |

## String HTML 包装方法

HTML 返回包含在相对应的 HTML 标签中的内容。

以下方法并非标准方法，所以可能在某些浏览器下不支持。

| 方法                                                         | 描述                         |
| :----------------------------------------------------------- | :--------------------------- |
| [anchor()](https://www.runoob.com/jsref/jsref-anchor.html)   | 创建 HTML 锚。               |
| [big()](https://www.runoob.com/jsref/jsref-big.html)         | 用大号字体显示字符串。       |
| [blink()](https://www.runoob.com/jsref/jsref-blink.html)     | 显示闪动字符串。             |
| [bold()](https://www.runoob.com/jsref/jsref-bold.html)       | 使用粗体显示字符串。         |
| [fixed()](https://www.runoob.com/jsref/jsref-fixed.html)     | 以打字机文本显示字符串。     |
| [fontcolor()](https://www.runoob.com/jsref/jsref-fontcolor.html) | 使用指定的颜色来显示字符串。 |
| [fontsize()](https://www.runoob.com/jsref/jsref-fontsize.html) | 使用指定的尺寸来显示字符串。 |
| [italics()](https://www.runoob.com/jsref/jsref-italics.html) | 使用斜体显示字符串。         |
| [link()](https://www.runoob.com/jsref/jsref-link.html)       | 将字符串显示为链接。         |
| [small()](https://www.runoob.com/jsref/jsref-small.html)     | 使用小字号来显示字符串。     |
| [strike()](https://www.runoob.com/jsref/jsref-strike.html)   | 用于显示加删除线的字符串。   |
| [sub()](https://www.runoob.com/jsref/jsref-sub.html)         | 把字符串显示为下标。         |
| [sup()](https://www.runoob.com/jsref/jsref-sup.html)         | 把字符串显示为上标。         |



## Date 对象属性



| 属性                                                         | 描述                                 |
| :----------------------------------------------------------- | :----------------------------------- |
| [constructor](https://www.runoob.com/jsref/jsref-constructor-date.html) | 返回对创建此对象的 Date 函数的引用。 |
| [prototype](https://www.runoob.com/jsref/jsref-prototype-date.html) | 使您有能力向对象添加属性和方法。     |

## Date 对象方法

| 方法--new Date();                                            | 描述                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| getFullYear()                                                | 四位数字返回年份。                                           |
| getMonth()                                                   | 返回月份 (0 ~ 11)。加1                                       |
| getDate()                                                    | 返回一个月中的某一天 (1 ~ 31)。                              |
| getHours()                                                   | 返回 小时 (0 ~ 23)。                                         |
| getMinutes()                                                 | 返回 分钟 (0 ~ 59)。                                         |
| getSeconds()                                                 | 返回 秒数 (0 ~ 59)。                                         |
| getMilliseconds()                                            | 返回 毫秒(0 ~ 999)。                                         |
| getDay()                                                     | 返回一周中的某一天 (0 ~ 6)。                                 |
| getTime()                                                    | 返回 1970 年 1 月 1 日至今的毫秒数(戳)。                     |
| setFullYear()                                                | 设置年份（四位数字）。set类都是返回时间戳                    |
| setMonth()                                                   | 设置月份 (0 ~ 11)。                                          |
| setDate()                                                    | 设置某一天 (1 ~ 31)。                                        |
| setHours()                                                   | 设置小时 (0 ~ 23)。                                          |
| setMinutes()                                                 | 设置分钟 (0 ~ 59)。                                          |
| setSeconds()                                                 | 设置秒钟 (0 ~ 59)。                                          |
| setMilliseconds()                                            | 设置毫秒 (0 ~ 999)。                                         |
| setTime()                                                    | setTime() 方法以毫秒设置 Date 对象。 距离1970年1月1日0时0分0秒的毫秒值。(不以1970为准)。 |
| [getTimezoneOffset()](https://www.runoob.com/jsref/jsref-gettimezoneoffset.html) | 返回本地时间与格林威治标准时间 (GMT) 的分钟差。              |
| [getUTCDate()](https://www.runoob.com/jsref/jsref-getutcdate.html) | 根据世界时从 Date 对象返回月中的一天 (1 ~ 31)。              |
| [getUTCDay()](https://www.runoob.com/jsref/jsref-getutcday.html) | 根据世界时从 Date 对象返回周中的一天 (0 ~ 6)。               |
| [getUTCFullYear()](https://www.runoob.com/jsref/jsref-getutcfullyear.html) | 根据世界时从 Date 对象返回四位数的年份。                     |
| [getUTCHours()](https://www.runoob.com/jsref/jsref-getutchours.html) | 根据世界时返回 Date 对象的小时 (0 ~ 23)。                    |
| [getUTCMilliseconds()](https://www.runoob.com/jsref/jsref-getutcmilliseconds.html) | 根据世界时返回 Date 对象的毫秒(0 ~ 999)。                    |
| [getUTCMinutes()](https://www.runoob.com/jsref/jsref-getutcminutes.html) | 根据世界时返回 Date 对象的分钟 (0 ~ 59)。                    |
| [getUTCMonth()](https://www.runoob.com/jsref/jsref-getutcmonth.html) | 根据世界时从 Date 对象返回月份 (0 ~ 11)。                    |
| [getUTCSeconds()](https://www.runoob.com/jsref/jsref-getutcseconds.html) | 根据世界时返回 Date 对象的秒钟 (0 ~ 59)。                    |
| getYear()                                                    | 已废弃。 请使用 getFullYear() 方法代替。                     |
| [parse()](https://www.runoob.com/jsref/jsref-parse.html)     | 返回1970年1月1日午夜到指定日期（字符串）的毫秒数。           |
| [setUTCDate()](https://www.runoob.com/jsref/jsref-setutcdate.html) | 根据世界时设置 Date 对象中月份的一天 (1 ~ 31)。              |
| [setUTCFullYear()](https://www.runoob.com/jsref/jsref-setutcfullyear.html) | 根据世界时设置 Date 对象中的年份（四位数字）。               |
| [setUTCHours()](https://www.runoob.com/jsref/jsref-setutchours.html) | 根据世界时设置 Date 对象中的小时 (0 ~ 23)。                  |
| [setUTCMilliseconds()](https://www.runoob.com/jsref/jsref-setutcmilliseconds.html) | 根据世界时设置 Date 对象中的毫秒 (0 ~ 999)。                 |
| [setUTCMinutes()](https://www.runoob.com/jsref/jsref-setutcminutes.html) | 根据世界时设置 Date 对象中的分钟 (0 ~ 59)。                  |
| [setUTCMonth()](https://www.runoob.com/jsref/jsref-setutcmonth.html) | 根据世界时设置 Date 对象中的月份 (0 ~ 11)。                  |
| [setUTCSeconds()](https://www.runoob.com/jsref/jsref-setutcseconds.html) | setUTCSeconds() 方法用于根据世界时 (UTC) 设置指定时间的秒字段。 |
| setYear()                                                    | 已废弃。请使用 setFullYear() 方法代替。                      |
| [toDateString()](https://www.runoob.com/jsref/jsref-todatestring.html) | 把 Date 对象的日期部分转换为字符串。Fri Feb 24 2023          |
| toGMTString()                                                | 已废弃。请使用 toUTCString() 方法代替。                      |
| toUTCString()                                                | 根据世界时，把 Date 对象转换为字符串。实例：`var today = new Date(); var UTCstring = today.toUTCString();` |
| [toISOString()](https://www.runoob.com/jsref/jsref-toisostring.html) | 使用 ISO 标准返回字符串的日期格式。                          |
| [toJSON()](https://www.runoob.com/jsref/jsref-tojson.html)   | 以 JSON 数据格式返回日期字符串。2021-02-24T09:00:49.952Z     |
| [toLocaleString()](https://www.runoob.com/jsref/jsref-tolocalestring.html) | 根据本地时间格式，把 Date 对象转换为字符串。2023/2/24 17:00:49 |
| toLocaleDateString()                                         | 根据本地时间格式，把 Date 对象的日期部分转换为字符串。2021/2/24 |
| toLocaleTimeString()                                         | 根据本地时间格式，把 Date 对象的时间部分转换为字符串。17:00:49 |
| toString()                                                   | 把 Date 对象转换为字符串。Fri Feb 24 2021 17:00:49 GMT+0800 (中国标准时间) |
| toTimeString()                                               | 把 Date 对象的时间部分转换为字符串。                         |
| [UTC()](https://www.runoob.com/jsref/jsref-utc.html)         | 根据世界时返回 1970 年 1 月 1 日 到指定日期的毫秒数。        |
| [valueOf()](https://www.runoob.com/jsref/jsref-valueof-date.html) | 返回 Date 对象的原始值。                                     |



## RegExp 方括号

正则表达式(Regular Expression)是描述字符模式的对象,用于匹配特定字符串(验证、查找、替换),本质是一个规则字符串，用指定的符号来编写，制定规则。

正则表达式用于对字符串模式匹配及检索替换，是对字符串执行模式匹配的强大工具。方括号用于查找某个范围内的字符：

创建;方式一：new RegExp('^1[3-9]\\\d{9}$'); 转义符`\`使用要用两个`\\ `

方式二：var telReg=/^1[3-9]\d{9}$/;  转义符`\`使用只需要一个`\`  





| 表达式             | 描述                               | 表达式     | 描述                                   |
| :----------------- | :--------------------------------- | ---------- | -------------------------------------- |
| [abc\]             | 查找方括号之间的任何字符。         | []（自加） | 匹配中括号中个的任意一个字符/^[sdfa]$/ |
| [^abc]             | 查找任何不在方括号之间的字符。     | -（自加）  | 减号表示范围                           |
| [0-9]              | 查找任何从 0 至 9 的数字。         | [A-z]      | 查找任何从大写 A 到小写 z 的字符。     |
| [A-Z]              | 查找任何从大写 A 到大写 Z 的字符。 | [a-z]      | 查找任何从小写 a 到小写 z 的字符。     |
| [adgk]             | 查找给定集合内的任何字符。         | [^adgk]    | 查找给定集合外的任何字符。             |
| (red\|blue\|green) | 查找任何指定的选项。               |            |                                        |



## RegExp 限定符

量词-数量限定符，位置限定符

| 量词                                                         | 描述                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| n+                                                           | 匹配至少1个 n 的字符串。                                     |
| n*                                                           | 匹配任意个 n 的字符串。                                      |
| n?                                                           | 匹配0个或1个 n 的字符串。                                    |
| n{X}                                                         | 匹配 X 个 n 的序列的字符串。                                 |
| n{X,}                                                        | X 是正整数。前面的模式 n 连续至少 X 次时匹配。               |
| n{X,Y}                                                       | X 和 Y 为正整数。前面的模式 n 连续至少 X 次，至多 Y 次时匹配。 |
| [n$](https://www.runoob.com/jsref/jsref-regexp-ndollar.html) | 匹配任何结尾为 n 的字符串。                                  |
| [^n](https://www.runoob.com/jsref/jsref-regexp-ncaret.html)  | 匹配任何开头为 n 的字符串。      /^[]$/为精确匹配            |
| [?=n](https://www.runoob.com/jsref/jsref-regexp-nfollow.html) | 匹配其后紧接指定字符串 n 的字符串。                          |
| [?!n](https://www.runoob.com/jsref/jsref-regexp-nfollow-not.html) | 匹配任何其后没有紧接指定字符串 n 的字符串。                  |



## RegExp元字符(预定义符号)

元字符（Metacharacter）是拥有特殊含义的字符：

特殊符号：()、|、\

| 元字符                                                       | 描述                                           | 元字符                                                     | 描述                               |
| :----------------------------------------------------------- | :--------------------------------------------- | ---------------------------------------------------------- | ---------------------------------- |
| .                                                            | 查找单个字符，除了换行和行结束符以外任意字符。 | []                                                         | 匹配中括号中任意一个字符。         |
| \w                                                           | 查找数字、字母及下划线。                       | \W                                                         | 查找非单词字符。                   |
| \d                                                           | 查找数字。                                     | \D                                                         | 查找非数字字符                     |
| \s                                                           | 查找空白字符/换行。                            | \S                                                         | 查找非空白字符。                   |
| \b                                                           | 匹配单词边界。                                 | \B                                                         | 匹配非单词边界。                   |
| \0                                                           | 查找 NULL 字符。                               | \n                                                         | 查找换行符。                       |
| \f                                                           | 查找换页符。                                   | \r                                                         | 查找回车符。                       |
| \t                                                           | 查找制表符。                                   | \v                                                         | 查找垂直制表符。                   |
| [\xxx](https://www.runoob.com/jsref/jsref-regexp-octal.html) | 查找以八进制数 xxx 规定的字符。                | [\xdd](https://www.runoob.com/jsref/jsref-regexp-hex.html) | 查找以十六进制数 dd 规定的字符。   |
| [\uxxxx](https://www.runoob.com/jsref/jsref-regexp-unicode-hex.html) | 查找以十六进制数 xxxx 规定的 Unicode 字符。    | ()                                                         | 作为一个整体                       |
| \|                                                           | （asd\|asd\|sad）表示或                        | \                                                          | 转义符，将特殊符号作为普通符号输出 |





## RegExp 修饰符(匹配模式)

修饰符用于执行区分大小写和全局匹配:

| 修饰符 | 描述  <br>一： var telReg=new RegExp('[a-z]','ig');<br>二： var telReg=/[a-z]/ig; |
| :----- | :----------------------------------------------------------- |
| u      | 默认值匹配一次                                               |
| i      | 忽略大小写                                                   |
| g      | 执行全局匹配                                                 |
| m      | 执行多行匹配。                                               |

## RegExp 对象方法

| 方法                                                         | 描述                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| test                                                         | 检索字符串中指定的值。输入要匹配的字符串，返回 true 或 false。（常用判定） |
| [compile](https://www.runoob.com/jsref/jsref-regexp-compile.html) | 在 1.5 版本中已废弃。 编译正则表达式。                       |
| [exec](https://www.runoob.com/jsref/jsref-exec-regexp.html)  | 检索字符串中指定的值。返回找到的值，并确定其位置。           |
| [toString](https://www.runoob.com/jsref/jsref-regexp-tostring.html) | 返回正则表达式的字符串。                                     |

```js
var reg=/^\.(com|cn|org)$/;
var str=prompt('请输入:');
console.log(reg.test(str));
```



## RegExp--String 对象的方法

| 方法                                                  | 描述                                                         | FF   | IE   |
| :---------------------------------------------------- | :----------------------------------------------------------- | :--- | :--- |
| [search](https://www.runoob.com/js/jsref-search.html) | 检索与正则表达式相匹配的值。                                 | 1    | 4    |
| replace                                               | 替换与正则表达式匹配的子串。                                 | 1    | 4    |
| match                                                 | 找到一个或多个正则表达式的匹配。，但是默认是第一个子串。返回仅含正则中字符的数组，string[] \|null， | 1    | 4    |
| split                                                 | 把字符串分割为字符串数组。返回绝对不含正则中的字符数组，返回string[], | 1    | 4    |

```js
var str='12ab34cd56ef78gh999';
var reg=/[0-9]+/g;
console.log(str.match(reg));
//['12','34','56','78','999']

var str='123abc456efg789';
var reg=/[0-9]/g;
console.log(str.replace(reg,'*'));//***abc***efg***

var str='123abc456efg';
var reg=/[0-9]+/;
console.log(str.split(reg));//['','abc','efg']

let str = "A drop of ink may make a million think";
console.log( str.search( /ink/i ) ); // 10（第一个匹配位置）
```



## RegExp 对象属性

| 属性                                                         | 描述                                               |
| :----------------------------------------------------------- | :------------------------------------------------- |
| [constructor](https://www.runoob.com/jsref/jsref-regexp-constructor.html) | 返回一个函数，该函数是一个创建 RegExp 对象的原型。 |
| [global](https://www.runoob.com/jsref/jsref-regexp-global.html) | 判断是否设置了 "g" 修饰符                          |
| [ignoreCase](https://www.runoob.com/jsref/jsref-regexp-ignorecase.html) | 判断是否设置了 "i" 修饰符                          |
| [lastIndex](https://www.runoob.com/jsref/jsref-lastindex-regexp.html) | 用于规定下次匹配的起始位置                         |
| [multiline](https://www.runoob.com/jsref/jsref-multiline-regexp.html) | 判断是否设置了 "m" 修饰符                          |
| [source](https://www.runoob.com/jsref/jsref-source-regexp.html) | 返回正则表达式的匹配模式                           |



## Boolean 对象属性

| 属性                                                         | 描述                                  |
| :----------------------------------------------------------- | :------------------------------------ |
| [constructor](https://www.runoob.com/jsref/jsref-constructor-boolean.html) | 返回对创建此对象的 Boolean 函数的引用 |
| [prototype](https://www.runoob.com/jsref/jsref-prototype-boolean.html) | 使您有能力向对象添加属性和方法。      |

## Boolean 对象方法

| 方法                                                         | 描述                               |
| :----------------------------------------------------------- | :--------------------------------- |
| [toString()](https://www.runoob.com/jsref/jsref-tostring-boolean.html) | 把布尔值转换为字符串，并返回结果。 |
| [valueOf()](https://www.runoob.com/jsref/jsref-valueof-boolean.html) | 返回 Boolean 对象的原始值。        |



## Number 对象属性

| 属性                                                         | 描述                                   |
| :----------------------------------------------------------- | :------------------------------------- |
| [constructor](https://www.runoob.com/jsref/jsref-constructor-number.html) | 返回对创建此对象的 Number 函数的引用。 |
| [MAX_VALUE](https://www.runoob.com/jsref/jsref-max-value.html) | 可表示的最大的数。                     |
| [MIN_VALUE](https://www.runoob.com/jsref/jsref-min-value.html) | 可表示的最小的数。                     |
| [NEGATIVE_INFINITY](https://www.runoob.com/jsref/jsref-negative-infinity.html) | 负无穷大，溢出时返回该值。             |
| [NaN](https://www.runoob.com/jsref/jsref-number-nan.html)    | 非数字值。                             |
| [POSITIVE_INFINITY](https://www.runoob.com/jsref/jsref-positive-infinity.html) | 正无穷大，溢出时返回该值。             |
| [prototype](https://www.runoob.com/jsref/jsref-prototype-num.html) | 允许您可以向对象添加属性和方法。       |

## Number 对象方法

| 方法                                                         | 描述                                                 |
| :----------------------------------------------------------- | :--------------------------------------------------- |
| [isFinite](https://www.runoob.com/jsref/jsref-isfinite-number.html) | 检测指定参数是否为无穷大。                           |
| [toLocaleString](https://www.w3school.com.cn/jsref/jsref_tolocalestring_number.asp) | 把数字转换为字符串，使用本地数字格式顺序。           |
| [toExponential(x)](https://www.runoob.com/jsref/jsref-toexponential.html) | 把对象的值转换为指数计数法。                         |
| toFixed(x)                                                   | 把数字转换为字符串，结果的小数点后有指定位数的数字。 |
| [toPrecision(x)](https://www.runoob.com/jsref/jsref-toprecision.html) | 把数字格式化为指定的长度。                           |
| [toString()](https://www.runoob.com/jsref/jsref-tostring-number.html) | 把数字转换为字符串，使用指定的基数。                 |
| [valueOf()](https://www.runoob.com/jsref/jsref-valueof-number.html) | 返回一个 Number 对象的基本数字值。                   |

## ES6 新增 Number 属性

ES 6 增加了以下三个 Number 对象的属性：

-   EPSILON: 表示 1 和比最接近 1 且大于 1 的最小 Number 之间的差别
-   MIN_SAFE_INTEGER: 表示在 JavaScript中最小的安全的 integer 型数字 (`-(253 - 1)`)。
-   MAX_SAFE_INTEGER: 表示在 JavaScript 中最大的安全整数（`253 - 1`）。

实例

var x = Number.EPSILON;  

var y = Number.MIN_SAFE_INTEGER; 

var z = Number.MAX_SAFE_INTEGER;

------

## ES6 新增 Number 方法

ES 6 增加了以下两个 Number 对象的方法：

-   Number.isInteger(): 用来判断给定的参数是否为整数。
-   Number.isSafeInteger(): 判断传入的参数值是否是一个"安全整数"。

Number.isInteger() 在参数是整数时返回 true。

JavaScript global全局：JavaScript 全局属性和方法可用于创建Javascript对象。如Array,Date,。。。

## JavaScript global全局属性

| 属性                                                         | 描述                     |
| :----------------------------------------------------------- | :----------------------- |
| [Infinity](https://www.runoob.com/jsref/jsref-infinity.html) | 代表正的无穷大的数值。   |
| [NaN](https://www.runoob.com/jsref/jsref-nan.html)           | 指示某个值是不是数字值。 |
| [undefined](https://www.runoob.com/jsref/jsref-undefined.html) | 指示未定义的值。         |

## JavaScript global全局函数

| 函数                                                         | 描述                                               |
| :----------------------------------------------------------- | :------------------------------------------------- |
| decodeURI()                                                  | 解码某个编码的 URI。@不能解码                      |
| decodeURIComponent()                                         | 解码一个编码的 URI 组件。@能解码                   |
| [encodeURI()](https://www.runoob.com/jsref/jsref-encodeuri.html) | 把字符串编码为 URI。                               |
| [encodeURIComponent()](https://www.runoob.com/jsref/jsref-encodeuricomponent.html) | 把字符串编码为 URI 组件。                          |
| [escape()](https://www.runoob.com/jsref/jsref-escape.html)   | 对字符串进行编码。                                 |
| eval()                                                       | 计算 JavaScript 字符串，并把它作为脚本代码来执行。 |
| [isFinite()](https://www.runoob.com/jsref/jsref-isfinite.html) | 检查某个值是否为有穷大的数。                       |
| [isNaN()](https://www.runoob.com/jsref/jsref-isnan.html)     | 检查某个值是否是数字。                             |
| [Number()](https://www.runoob.com/jsref/jsref-number.html)   | 把对象的值转换为数字。                             |
| parseFloat()                                                 | 解析一个字符串并返回一个浮点数。                   |
| parseInt()                                                   | 解析一个字符串并返回一个整数。                     |
| String()                                                     | 把对象的值转换为字符串。                           |
| [unescape()](https://www.runoob.com/jsref/jsref-unescape.html) | 对由 escape() 编码的字符串进行解码。               |