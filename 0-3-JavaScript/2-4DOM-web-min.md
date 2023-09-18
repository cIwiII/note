DOM：

-   Document Object Model 文档对象模型。
-   提供操作HTML文档内容的接口。
-   在页面加载时，根据页面元素创建对应的文档对象，通过操作文档对象，达到操作页面元素的目的。
-   历史
    1.  DOM 0级：在96年之前ie浏览器和网景浏览器为了抢夺市场，都分别实现了一套JavaScript用于操作HTML的api。因为是分别实现的，没有标准，在正式dom标准出来之前，统称它们的相关api为dom0级
    2.  DOM 1级：98年w3c出台了第一版domapi的标准，基本ie8就使用了该标准。dom1级只能简单的操作HTML标签，比如提供`document.images`来获取页面上所有的``标签等。
    3.  DOM 2级：目前所有浏览器都支持的版本。增强了对页面的控制，以及添加了对css的支持，以及事件的支持。ie9+
    4.  DOM 3级：目前所有浏览器都支持的版本，将api进行模块化，更方便管理和更新。
-   兼容性
    -   DOM1级，IE8及以下
    -   DOM2、3级，IE9+，现代浏览器都支持。

## Document 对象属性和方法

Document对象是DOM的核心对象(基础对象);

HTML文档中可以使用以下属性和方法:

| 属性 / 方法                                                  | 描述                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| window.document                                              | 控制整个文档                                                 |
| [all](https://www.w3school.com.cn/jsref/coll_doc_all.asp)    | 提供对文档中所有 HTML 元素的访问。                           |
| [activeElement](https://www.runoob.com/jsref/prop-document-activeelement.html) | activeElement属性返回当前文档中获得焦点的那个元素，通常tab键移动焦点，空格键激活焦点跳转 |
| [addEventListener()](https://www.runoob.com/jsref/met-document-addeventlistener.html) | 向文档添加句柄                                               |
| [adoptNode(node)](https://www.runoob.com/jsref/met-document-adoptnode.html) | 从另外一个文档返回 adapded 节点到当前文档。将某个节点，从其原来所在的文档移除，插入当前文档，并返回插入后的新节点。 |
| [anchors](https://www.runoob.com/jsref/coll-doc-anchors.html) | 返回对文档中所有 Anchor 对象的引用。返回网页中所有指定了name属性的a元素。 |
| applets                                                      | 返回对文档中所有 Applet 对象的引用。**注意:** HTML5 已不支持 <applet> 元素 |
| [baseURI](https://www.runoob.com/jsref/prop-doc-baseuri.html) | 返回文档的绝对基础 URI                                       |
| body                                                         | 返回文档的body元素，或null                                   |
| createElement(‘标签名自动转小写’)                            | 创建元素节点并返回。参数带有尖括号（即<和>）或者是null，会报错。 |
| [createTextNode()](https://www.runoob.com/jsref/met-document-createtextnode.html) | 创建文本节点。                                               |
| [createAttribute()](https://www.runoob.com/jsref/met-document-createattribute.html) | 创建一个属性节点，var a = document.createAttribute("my_attrib");<br/>a.value = "newVal";  等同于setAttribute |
| [createDocumentFragment()](https://www.runoob.com/jsref/met-document-createdocumentfragment.html) | 创建空的 DocumentFragment 对象，并返回此对象。存在于内存，不属于当前文档，改动不会重新渲染页面比直接修改当前文档的DOM有更好的性能表现。 |
| createEvent()                                                | 生成一个事件对象，该对象可以被element.dispatchEvent方法使用，触发指定事件。参数是事件类型，比如UIEvents、MouseEvents、MutationEvents、HTMLEvents。<br><br>var event = document.createEvent('Event');<br/>event.initEvent('build', true, true);<br/>document.addEventListener('build', function (e) {<br/>  // ...<br/>}, false);<br/>document.dispatchEvent(event); |
| createNodeIterator()                                         | 返回一个DOM的子节点遍历器                                    |
| createTreeWalker()                                           | 遍历整个子树                                                 |
| compatMode                                                   | 返回浏览器处理文档的模式，可能的值为BackCompat（向后兼容模式）和 CSS1Compat（严格模式） |
| characterSet                                                 | characterSet属性返回渲染当前文档的字符集，比如UTF-8、ISO-8859-1。 |
| [close()](https://www.runoob.com/jsref/met-doc-close.html)   | 关闭用 document.open() 方法打开的输出流，并显示选定的数据。  |
| [cookie](https://www.runoob.com/jsref/prop-doc-cookie.html)  | 设置或返回与当前文档有关的所有 cookie。                      |
| [createComment()](https://www.runoob.com/jsref/met-document-createcomment.html) | createComment() 方法可创建注释节点。                         |
| defaultView                                                  | 返回document对象所在的window对象，或null                     |
| designModed                                                  | 控制当前document是否可编辑。通常会打开iframe的designMode属性，将其变为一个所见即所得的编辑器。<br>iframe_node.contentDocument.designMode = "on"; |
| [doctype](https://www.runoob.com/jsref/prop-document-doctype.html) | 返回与文档相关的文档类型声明 (DTD), 或null。<br/>document第一子节点，document.firstChild通常就返回这个节点，<br/>HTML5文档中，该节点就代表<!DOCTYPE html>。如果网页没有声明DTD，该属性返回null， |
| [documentElement](https://www.runoob.com/jsref/prop-document-documentelement.html) | 返回文档的根节点(root),文档第二子节点，紧跟在document.doctype节点后面。<html lang="en">。 |
| [documentMode](https://www.runoob.com/jsref/prop-doc-documentmode.html) | 返回用于通过浏览器渲染文档的模式                             |
| documentURI = URL                                            | 设置或返回文档的位置(网址)，前者所有文档都有，后者html文档独有 |
| domain                                                       | 返回当前文档的域名 或null。                                  |
| domConfig                                                    | **已废弃**。返回 normalizeDocument() 被调用时所使用的配置。  |
| [embeds](https://www.runoob.com/jsref/coll-doc-embeds.html)  | 返回文档中所有嵌入的内容（embed）集合，返回网页中所有嵌入对象，即embed标签，返回的格式为类似数组的对象（nodeList）。 |
| elementFromPoint(x, y)                                       | 返回位于页面指定位置的元素，单位px，若元素不可返回则返回父元素，无意义的坐标返回null，如负值 |
| forms                                                        | 返回对文档中所有 Form(标签)对象引用(数组)，获取当前页面所有表单的访问。(获取所有`form`标签对应的Element对象数组) |
| getElementById(‘id‘)                                         | 返回第一个指定id元素，没有返回null，大小写敏感（区分）       |
| getElementsByTagName(‘标签名’)                               | 返回带有指定标签名的HTMLCollection对象。for of 遍历   “*”(通配符)，则会返回文档中的所有HTML元素节点。传入参数自动转小写 |
| getElementsByClassName(’类的值‘)                             | 返回文档中所有指定类名的元素集合，HTMLCollection类型的对象,  //参数可以是多个空格分隔的class名字，返回同时具有这些节点的元素。<br/>document.getElementsByClassName('red test');  可以在其他元素上调用 |
| getElementsByName(’name的值‘)                                | 返回一个NodeList格式的对象，for of 遍历                      |
| head                                                         | 返回当前文档的第一个head节点。document.head === document.querySelector('head') |
| hasFocus()                                                   | 返回一个布尔值，表示当前文档之中是否有元素被激活或获得焦点。focused = document.hasFocus();  需要注意的是，有焦点的文档必定被激活（active），反之不成立，激活的文档未必有焦点。比如如果用户点击按钮，从当前窗口跳出一个新窗口，该新窗口就是激活的，但是不拥有焦点。 |
| images                                                       | 返回文档中所有 img 元素数组。                                |
| implementation                                               | 返回处理该文档的 DOMImplementation 对象。用来甄别当前环境部署了哪些DOM相关接口。implementation属性的hasFeature方法，可以判断当前环境是否部署了特定版本的特定接口<br>document.implementation.hasFeature( 'HTML, 2.0 ') === true<br/> <br/>document.implementation.hasFeature('MutationEvents','2.0') === true<br/>//表示当前环境部署了DOM HTML 2.0版和MutationEvents的2.0版。 |
| [importNode()](https://www.runoob.com/jsref/met-document-importnode.html) | 把一个节点从另一个文档复制到该文档以便应用。                 |
| [inputEncoding](https://www.runoob.com/jsref/prop-document-inputencoding.html) | 返回用于文档的编码方式（在解析时）。                         |
| lastModified                                                 | 返回当前文档最后修改的时间戳，格式为字符串（不能直接比较，需要用Date.parse方法转成时间戳格式，才能进行比较。） |
| [links](https://www.runoob.com/jsref/coll-doc-links.html)    | 返回对文档中所有 Area 和 Link 对象引用。所有的链接元素，具有href属性的元素 |
| location                                                     | 只读对象，提供了当前文档的URL信息，推荐使用window.location，历史上，IE曾经不允许对document.location赋值，为了保险起见，建议优先使用window.location。（但现在IE淘汰，没有影响） |
| [normalize()](https://www.runoob.com/jsref/met-document-normalize.html) | 删除空文本节点，并连接相邻节点                               |
| [normalizeDocument()](https://www.runoob.com/jsref/met-document-normalizedocument.html) | 删除空文本节点，并连接相邻节点的                             |
| [open()](https://www.runoob.com/jsref/met-doc-open.html)     | 打开一个流，以收集来自任何 document.write() 或 document.writeln() 方法的输出。它实际上等于清除当前文档，重新写入内容。不要将此方法与window.open()混淆，后者用来打开一个新窗口，与当前文档无关。 |
| querySelector()                                              | CSS选择器指定第一个元素，没有返回null，无法选中伪元素        |
| querySelectorAll()                                           | HTML5中引入的新方法，返回数组，可 forEach                    |
| readyState                                                   | 返回文档状态 <br>loading  HTML加载解析中<br/>interactive 外部资源加载<br/>complete 全部加载完成<br/>轮询检查页面加载，可以使用onload监听替换， |
| referrer                                                     | 返回字符串，表示前文档的访问来源，如果是无法获取来源或是用户直接键入网址，而不是从其他网页点击，则返回一个空字符串。。 |
| [removeEventListener()](https://www.runoob.com/jsref/met-document-removeeventlistener.html) | 移除文档中的事件句柄(由 addEventListener() 方法添加)         |
| [renameNode()](https://www.runoob.com/jsref/met-document-renamenode.html) | 重命名元素或者属性节点。                                     |
| [scripts](https://www.runoob.com/jsref/coll-doc-scripts.html) | 返回页面中所有脚本的集合。                                   |
| styleSheets                                                  | styleSheets属性返回一个类似数组的对象，包含了当前网页的所有样式表，转为数组 var allSheets = [].slice.call(document.styleSheets); |
| [strictErrorChecking](https://www.runoob.com/jsref/prop-document-stricterrorchecking.html) | 设置或返回是否强制进行错误检查。                             |
| title                                                        | 返回当前文档的标题。                                         |
| URL                                                          | 返回文档完整的URL                                            |
| writeln()                                                    | 等同于 write() 方法，不同的是在每个表达式之后写一个换行符\n。添加的是ASCII码的换行符，渲染成HTML网页时不起作用，md,看不出什么效果，有个空格以外，根本就没有换行符 |
| write('字符串')                                              | 向文档写 HTML 表达式 或 JavaScript 代码。只要当前文档还没有用close方法关闭，它所写入的内容就会追加在已有内容的后面，，如果直接调用write方法，它会隐式先调用open方法，擦除当前文档所有内容，然后再写入，尽量避免使用 |



非正式参考：https://blog.csdn.net/shania456/article/details/51455573

### location

document.location: 如果只是单纯地获取当前网址，建议使用document.URL。

```js
// 假定当前网址为http://user:passwd@www.example.com:4097/path/a.html?x=111#part1
 
document.location.href // "http://user:passwd@www.example.com:4097/path/a.html?x=111#part1"
document.location.protocol // "http:"
document.location.host // "www.example.com:4097"
document.location.hostname // "www.example.com"
document.location.port // "4097"
document.location.pathname // "/path/a.html"
document.location.search // "?x=111"
document.location.hash // "#part1"
document.location.user // "user"
document.location.password // "passed"
 
// 跳转到另一个网址
document.location.assign('http://www.google.com')

// 优先从服务器重新加载
document.location.reload(true)

// 优先从本地缓存重新加载（默认值）
document.location.reload(false)

// 跳转到另一个网址，但当前文档不保留在history对象中，
// 即无法用后退按钮，回到当前文档
document.location.assign('http://www.google.com')

// 将location对象转为字符串，等价于document.location.href
document.location.toString()

//赋值跳转
document.location = 'http://www.example.com';
// 等价于
document.location.href = 'http://www.example.com';
```

### querySelectorAll

- 返回文档中匹配的CSS选择器的所有元素节点列表，可以是逗号分隔的多个CSS选择器，返回所有匹配其中一个选择器的元素。
- 无法选中伪元素，
- NodeList对象是静态对象，只是获取时的值，HTMLCollection类型是动态对象实时反应值的变化，
- “*”(通配符)，则会返回文档中的所有HTML元素节点。

```js
var matches = document.querySelectorAll('div.note, div.alert');

// 选中data-foo-bar属性等于someval的元素
document.querySelectorAll('[data-foo-bar="someval"]');
 
// 选中myForm表单中所有不通过验证的元素
document.querySelectorAll('#myForm :invalid');
 
// 选中div元素，那些class含ignore的除外
document.querySelectorAll('DIV:not(.ignore)');
 
// 同时选中div，a，script三类元素
document.querySelectorAll('DIV, A, SCRIPT');
```



参数二类型遍历相关：https://segmentfault.com/a/1190000004225657?utm_source=sf-related

### createNodeIterator()

- 返回一个DOM的子节点遍历器。
- 返回：参数1根节点的(子元素)遍历器
- 参数1：遍历器根节点，
- 参数2：遍历节点类型（所有节点（NodeFilter.SHOW_ALL）、元素节点（NodeFilter.SHOW_ELEMENT）、文本节点（NodeFilter.SHOW_TEXT）、评论节点（NodeFilter.SHOW_COMMENT））
- 参数3：一个对象挥着函数(如下filter ，重写acceptNode方法)，返回指定条件时是否可遍历，ACCEPT接受，SKIP跳过

```js
// 例子地址：https://developer.mozilla.org/en-US/docs/Web/API/NodeIterator/pointerBeforeReferenceNode
var filter = {
    acceptNode: function(node) {
        return node.nodeName.toLowerCase() == "p" ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
};
```

```js
//body`元素`的遍历器
var nodeIterator = document.createNodeIterator(
  document.body,
  NodeFilter.SHOW_ELEMENT
);
```

所谓“遍历器”，在这里指可以用nextNode方法和previousNode方法依次遍历根节点的所有子节点。遍历器返回的第一个节点，总是根节点。
    ```js
    var nodeIterator = document.createNodeIterator(document.body);
    var pars = [];
    var currentNode;

~~~js
while (currentNode = nodeIterator.nextNode()) {//所有成员遍历完成后，返回null
  pars.push(currentNode);
}

/* 
如：默认首位(1,2,3)
nextNode方法:先返回遍历器的内部指针所在的节点，然后会将指针移向下一个节点。//此时1，先返回1，再移到2

previousNode方法:先将指针移向上一个节点，然后返回该节点。//此时是2，先移到1，再返回 1

currentNode === previousNode // true，连续调用返回同一个

 */

var nodeIterator = document.createNodeIterator(
  document.body,
  NodeFilter.SHOW_ELEMENT
);
 
var currentNode = nodeIterator.nextNode();
var previousNode = nodeIterator.previousNode();
 
currentNode === previousNode // true
```
~~~

### createTreeWalker()

- createTreeWalker方法返回一个DOM的子树遍历器。它与createNodeIterator方法的区别在于，后者只遍历子节点，而它遍历整个子树（子子孙孙）。

```js
var treeWalker = document.createTreeWalker(
  document.body,
  NodeFilter.SHOW_ELEMENT
);
 
var nodeList = [];
 
while(treeWalker.nextNode()) nodeList.push(treeWalker.currentNode);
```



### adoptNode()

- adoptNode方法将某个节点，从其原来所在的文档移除，插入当前文档，并返回插入后的新节点。

```js
node = document.adoptNode(externalNode);

importNode方法从外部文档拷贝指定节点，插入当前文档。

var node = document.importNode(externalNode, deep);
```

### importNode()

- 用于创造一个外部节点的拷贝，然后插入当前文档。
- 第一个参数是外部节点，
- 第二个参数是一个布尔值，表示对外部节点是深拷贝还是浅拷贝，默认是浅拷贝（false）。虽然第二个参数是可选的，但是建议总是保留这个参数，并设为true。
- 注意：importNode方法只是拷贝外部节点，这时该节点的父节点是null。下一步还必须将这个节点插入当前文档的DOM树。

```js
//从iframe窗口，拷贝一个指定节点myNode，插入当前文档。

var iframe = document.getElementsByTagName("iframe")[0];
var oldNode = iframe.contentWindow.document.getElementById("myNode");
var newNode = document.importNode(oldNode, true);
document.getElementById("container").appendChild(newNode);

```



### HTMLCollection 对象

- forEach报错，使用 for of 遍历
- 及时更新的，当文档中的DOM变化是，它是会随之变化的。

下表列出了 HTMLCollection (伪数组)对象中的属性和方法：

| 属性 / 方法                                                  | 描述                                             |
| :----------------------------------------------------------- | :----------------------------------------------- |
| [item(index)](https://www.runoob.com/jsref/met-htmlcollection-item.html) | 参数为下标，返回具体的节点                       |
| [length](https://www.runoob.com/jsref/prop-htmlcollection-length.html) | 返回集合当中子元素的数目。                       |
| [namedItem(value)](https://www.runoob.com/jsref/met-htmlcollection-nameditem.html) | 参数为字符串，返回指定 ID 或 name 属性的具体节点 |



### 避免使用的对象和属性



| 属性 / 方法              | 避免的原因                  |
| :----------------------- | :-------------------------- |
| document.attributes      | 文档没有该属性              |
| document.hasAttributes() | 文档没有该属性              |
| document.nextSibling     | 文档没有下一节点            |
| document.nodeName        | 这个通常是 #document        |
| document.nodeType        | 这个通常是 9(DOCUMENT_NODE) |
| document.nodeValue       | 文档没有一个节点值          |
| document.ownerDocument   | 文档没有主文档              |
| document.ownerElement    | 文档没有自己的节点          |
| document.parentNode      | 文档没有父节点              |
| document.previousSibling | 文档没有兄弟节点            |
| document.textContent     | 文档没有文本节点            |



## Element对象-属性和方法

Element对象用于表示一个HTML标签元素，元素节点。

以下属性和方法可适用于所有 HTML 元素：element指通过document获取的元素对象

| 属性 / 方法                                                  | 描述                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| [*element*.attributes](https://www.runoob.com/jsref/prop-node-attributes.html) | 返回一个元素的属性数组                                       |
| [*element*.accessKey](https://www.runoob.com/jsref/prop-html-accesskey.html) | 设置或返回accesskey一个元素                                  |
| [*element*.addEventListener()](https://www.runoob.com/jsref/met-element-addeventlistener.html) | 向指定元素添加事件句柄                                       |
| [*element*.insertBefore(添加的节点，参照节点)](https://www.runoob.com/jsref/met-node-insertbefore.html) | 参照节点之前插入一个新元素                                   |
| [*element*.appendChild(子节点元素)](https://www.runoob.com/jsref/met-node-appendchild.html) | 添加一个新的子元素到末尾                                     |
| [*element*.removeChild()](https://www.runoob.com/jsref/met-node-removechild.html) | 删除一个子元素                                               |
| element.className                                            | 设置或返回元素的class属性                                    |
| [*element*.classList](https://www.runoob.com/jsref/prop-element-classList.html) | 返回元素的类名，作为 DOMTokenList 对象。<br>add(c1, c2,): <br>remove(c1, c2): <br>toggle(c1, force): 操作后，返回是否存在,force为true仅添加不被删除，false仅删除，不被添加 <br>replace(c1, c1_1): <br>contains('foo'): 是否包含foo<br> |
| element.children                                             | 返回元素的子元素的数组集合                                   |
| *element*.offsetWidth                                        | 获取盒子的宽(内容+内边距padding+边框border)                  |
| [*element*.offsetHeight](https://www.runoob.com/jsref/prop-element-offsetheight.html) | 获取盒子的高(内容+内边距padding+边框border)                  |
| *element*.offsetLeft                                         | 当前盒子距离父盒子(非默认static定位)的左外边距               |
| *element*.offsetTop                                          | 当前盒子距离父盒子(非默认static定位)的上外边距               |
| [*element*.offsetParent](https://www.runoob.com/jsref/prop-element-offsetparent.html) | 返回元素的最近的非静态的祖先元素（偏移容器）                 |
| [*element*.clientWidth](https://www.runoob.com/jsref/prop-element-clientwidth.html) | 当前盒子的宽(内容+内边距padding)。                           |
| [*element*.clientHeight](https://www.runoob.com/jsref/prop-element-clientheight.html) | 当前盒子的高(内容+内边距padding)。                           |
| [*element*.clientLeft](https://www.runoob.com/jsref/prop-element-clientleft.html) | 元素的左边框的宽度，以像素表示。                             |
| [*element*.clientTop](https://www.runoob.com/jsref/prop-element-clienttop.html) | 元素的顶部边框的宽度，以像素表示。                           |
| element.checked                                              | 设置或获取单选多选选中状态                                   |
| element.selected                                             | 设置或获取下拉列表选中状态                                   |
| [*element*.childNodes](https://www.runoob.com/jsref/prop-node-childnodes.html) | 返回元素的一个子节点的数组                                   |
| [*element*.contentEditable](https://www.runoob.com/jsref/prop-html-contenteditable.html) | 设置或返回元素的内容是否可编辑                               |
| [*element*.cloneNode()](https://www.runoob.com/jsref/met-node-clonenode.html) | 克隆某个元素                                                 |
| [*element*.compareDocumentPosition()](https://www.runoob.com/jsref/met-node-comparedocumentposition.html) | 比较两个元素的文档位置。                                     |
| [*element*.dir](https://www.runoob.com/jsref/prop-html-dir.html) | 设置或返回一个元素中的文本方向                               |
| element.dataset.属性值                                       | 获取自定义属性                                               |
| [*element*.firstChild](https://www.runoob.com/jsref/prop-node-firstchild.html) | 返回元素的第一个子节点                                       |
| [*element*.firstElementChild](https://www.runoob.com/jsref/prop-element-firstelementchild.html) | 返回元素的第一个子元素                                       |
| [*element*.focus()](https://www.runoob.com/jsref/met-html-focus.html) | 设置文档或元素获取焦点                                       |
| [*element*.setAttribute()](https://www.runoob.com/jsref/met-element-setattribute.html) | 设置或者改变指定属性并指定值。                               |
| [*element*.getAttribute()](https://www.runoob.com/jsref/met-element-getattribute.html) | 返回(获取)指定元素的属性值                                   |
| [*element*.removeAttribute()](https://www.runoob.com/jsref/met-element-removeattribute.html) | 从元素中删除指定的属性                                       |
| [*element*.hasAttribute()](https://www.runoob.com/jsref/met-element-hasattribute.html) | 如果元素中存在指定的属性返回 true，否则返回false。           |
| [*element*.hasAttributes()](https://www.runoob.com/jsref/met-node-hasattributes.html) | 如果元素有任何属性返回true，否则返回false。                  |
| *element*.getUserData()                                      | 返回一个元素中关联键值的对象。                               |
| *element*.getFeature()                                       | 返回指定特征的执行APIs对象。                                 |
| [*element*.getElementsByTagName()](https://www.runoob.com/jsref/met-element-getelementsbytagname.html) | 返回指定标签名的所有子元素集合。                             |
| [*element*. getElementsByClassName()](https://www.runoob.com/jsref/met-element-getelementsbyclassname.html) | 返回文档中所有指定类名的元素集合，作为 NodeList 对象。       |
| [*element*.getAttributeNode()](https://www.runoob.com/jsref/met-element-getattributenode.html) | 返回指定属性节点                                             |
| [*element*.hasFocus()](https://www.runoob.com/jsref/met-document-hasfocus.html) | 返回布尔值，检测文档或元素是否获取焦点                       |
| [*element*.hasChildNodes()](https://www.runoob.com/jsref/met-node-haschildnodes.html) | 返回一个元素是否具有任何子元素                               |
| innerHTML                                                    | 设置或者返回元素的内容。操作标签和文本，标签会被解析         |
| innerText                                                    | 设置或者返回元素的内容。只操作文本对象，不会解析标签         |
| [*element*.id](https://www.runoob.com/jsref/prop-html-id.html) | 设置或者返回元素的 id。                                      |
| [*element*.isContentEditable](https://www.runoob.com/jsref/prop-html-iscontenteditable.html) | 如果元素内容可编辑返回 true，否则返回false                   |
| [*element*.isDefaultNamespace()](https://www.runoob.com/jsref/met-node-isdefaultnamespace.html) | 如果指定了namespaceURI 返回 true，否则返回 false。           |
| [*element*.isEqualNode()](https://www.runoob.com/jsref/met-node-isequalnode.html) | 检查两个元素是否相等                                         |
| [*element*.isSupported()](https://www.runoob.com/jsref/met-node-issupported.html) | 如果在元素中支持指定特征返回 true。                          |
| [*nodelist*.item()](https://www.runoob.com/jsref/met-nodelist-item.html) | 返回某个元素基于文档树的索引                                 |
| [*element*.isSameNode()](https://www.runoob.com/jsref/met-node-issamenode.html) | 检查两个元素所有有相同节点。                                 |
| [*element*.lastElementChild](https://www.runoob.com/jsref/prop-element-lastelementchild.html) | 返回指定元素的最后一个子元素                                 |
| [*element*.lastChild](https://www.runoob.com/jsref/prop-node-lastchild.html) | 返回最后一个子节点                                           |
| [*element*.lang](https://www.runoob.com/jsref/prop-html-lang.html) | 设置或者返回一个元素的语言。                                 |
| [*nodelist*.length](https://www.runoob.com/jsref/prop-nodelist-length.html) | 返回节点列表的节点数目。                                     |
| [*element*.matches()](https://www.runoob.com/jsref/met-element-matches.html) | 如果元素匹配指定的 CSS 选择器，matches() 方法就返回 true，否则返回 false。 |
| [*element*.previousElementSibling](https://www.runoob.com/jsref/prop-element-previouselementsibling.html) | 获取当前节点的前一个元素节点                                 |
| [*element*.nextElementSibling](https://www.runoob.com/jsref/prop-element-nextelementsibling.html) | 获取当前节点的后一个元素节点。                               |
| [*element*.previousSibling](https://www.runoob.com/jsref/prop-node-previoussibling.html) | 返回某个元素紧接之前元素                                     |
| [*element*.nextSibling](https://www.runoob.com/jsref/prop-node-nextsibling.html) | 返回该元素紧跟的一个节点                                     |
| [*element*.nodeValue](https://www.runoob.com/jsref/prop-node-nodevalue.html) | 返回元素的节点值                                             |
| [*element*.namespaceURI](https://www.runoob.com/jsref/prop-node-namespaceuri.html) | 返回命名空间的 URI。                                         |
| [*element*.nodeType](https://www.runoob.com/jsref/prop-node-nodetype.html) | 返回元素的节点类型                                           |
| nodeName                                                     | 返回元素的标记名（大写）                                     |
| [*element*.normalize()](https://www.runoob.com/jsref/met-node-normalize.html) | 使得此成为一个"normal"的形式，其中只有结构（如元素，注释，处理指令，CDATA节和实体引用）隔开Text节点，即元素（包括属性）下面的所有文本节点，既没有相邻的文本节点也没有空的文本节点 |
| [*element*.ownerDocument](https://www.runoob.com/jsref/prop-node-ownerdocument.html) | 返回元素的根元素（文档对象）                                 |
| element.parentElement                                        | html元素的父节点                                             |
| element.parentNode                                           | 返回节点的的父节点                                           |
| document.querySelectorAll()                                  | 返回匹配指定 CSS 选择器元素的所有子元素节点列表              |
| *element*.querySelector()                                    | 返回匹配指定 CSS 选择器元素的第一个子元素                    |
| element.remove()                                             | 删除指定节点无返回值                                         |
| *element*.removeAttributeNode()                              | 删除指定属性节点并返回移除后的节点。                         |
| [*element*.removeEventListener()](https://www.runoob.com/jsref/met-element-removeeventlistener.html) | 移除由 addEventListener() 方法添加的事件句柄                 |
| [*element*.replaceChild()](https://www.runoob.com/jsref/met-node-replacechild.html) | 替换一个子元素                                               |
| *element*.style                                              | 设置或返回元素的样式属性,ele.style='color: red;font-size: 64px;';    ele.style.color='red'; |
| [*element*.scrollHeight](https://www.runoob.com/jsref/prop-element-scrollheight.html) | 返回整个元素的高度（包括带滚动条的隐蔽的地方）               |
| *element*.scrollLeft                                         | 返回当前视图中的实际元素的左边缘和左边缘之间的距离           |
| *element*.scrollTop                                          | 返回当前视图中的实际元素的顶部边缘和顶部边缘之间的距离       |
| *element*.scrollWidth                                        | 返回元素的整个宽度（包括带滚动条的隐蔽的地方）               |
| [*element*.setAttributeNode()](https://www.runoob.com/jsref/met-element-setattributenode.html) | 设置或者改变指定属性节点。                                   |
| *element*.setIdAttribute()                                   |                                                              |
| *element*.setIdAttributeNode()                               |                                                              |
| *element*.setUserData()                                      | 在元素中为指定键值关联对象。                                 |
| [*element*.tabIndex](https://www.runoob.com/jsref/prop-html-tabindex.html) | 设置或返回元素的标签顺序。                                   |
| [*element*.tagName](https://www.runoob.com/jsref/prop-element-tagname.html) | 作为一个字符串返回某个元素的标记名（大写）                   |
| [*element*.textContent](https://www.runoob.com/jsref/prop-node-textcontent.html) | 设置或返回一个节点和它的文本内容                             |
| [*element*.title](https://www.runoob.com/jsref/prop-html-title.html) | 设置或返回元素的title属性                                    |
| *element*.toString()                                         | 一个元素转换成字符串                                         |
| value                                                        | 对document获取的对象进行赋值或者取值                         |



## Attribute属性-对象-属性和方法

| 属性 / 方法                                                  | 描述                                              |
| :----------------------------------------------------------- | :------------------------------------------------ |
| [attr.isId](https://www.w3school.com.cn/jsref/prop_attr_isid.asp) | 如果属性是 id 类型，则返回 true，否则返回 false。 |
| [attr.name](https://www.w3school.com.cn/jsref/prop_attr_name.asp) | 返回属性的名称。                                  |
| [attr.value](https://www.w3school.com.cn/jsref/prop_attr_value.asp) | 设置或返回属性的值。                              |
| [attr.specified](https://www.w3school.com.cn/jsref/prop_attr_specified.asp) | 如果已指定属性，则返回 true，否则返回 false。     |
| [nodemap.getNamedItem()](https://www.w3school.com.cn/jsref/met_namednodemap_getnameditem.asp) | 从 NamedNodeMap 返回指定的属性节点。              |
| [nodemap.item()](https://www.w3school.com.cn/jsref/met_namednodemap_item.asp) | 返回 NamedNodeMap 中位于指定下标的节点。          |
| [nodemap.length](https://www.w3school.com.cn/jsref/prop_namednodemap_length.asp) | 返回 NamedNodeMap 中的节点数。                    |
| [nodemap.removeNamedItem()](https://www.w3school.com.cn/jsref/met_namednodemap_removenameditem.asp) | 移除指定的属性节点。                              |
| [nodemap.setNamedItem()](https://www.w3school.com.cn/jsref/met_namednodemap_setnameditem.asp) | 设置指定的属性节点（通过名称）。                  |



### Attr 对象-避免使用的属性和方法：

| 属性 / 方法          | 避免的理由                         |      |      |
| :------------------- | :--------------------------------- | ---- | ---- |
| attr.appendChild()   | 属性没有子节点。                   |      |      |
| attr.attributes      | 属性没有属性。                     |      |      |
| attr.baseURI         | 使用 document.baseURI 代替。       |      |      |
| attr.childNodes      | 属性没有子节点。                   |      |      |
| attr.cloneNode()     | 使用 attr.value 代替。             |      |      |
| attr.firstChild      | 属性没有子节点。                   |      |      |
| attr.hasAttributes() | 属性没有属性。                     |      |      |
| attr.hasChildNodes   | 属性没有子节点。                   |      |      |
| attr.insertBefore()  | 属性没有子节点。                   |      |      |
| attr.isEqualNode()   | 没有意义。                         |      |      |
| attr.isSameNode()    | 没有意义。                         |      |      |
| attr.isSupported()   | 始终为 true。                      |      |      |
| attr.lastChild       | 属性没有子节点。                   |      |      |
| attr.nextSibling     | 属性没有同级节点。                 |      |      |
| attr.nodeName        | 使用 attr.name 代替。              |      |      |
| attr.nodeType        | 始终为 2 (ATTRIBUTE_NODE)。        |      |      |
| attr.nodeValue       | 使用 attr.value 代替。             |      |      |
| attr.normalize()     | 属性无法被正常化。                 |      |      |
| attr.ownerDocument   | 始终是您的 HTML 文档。             |      |      |
| attr.ownerElement    | 这是您用来访问该属性的 HTML 元素。 |      |      |
| attr.parentNode      | 这是您用来访问该属性的 HTML 元素。 |      |      |
| attr.previousSibling | 属性没有同级节点。                 |      |      |
| attr.removeChild     | 属性没有子节点。                   |      |      |
| attr.replaceChild    | 属性没有子节点。                   |      |      |
| attr.textContent     | 使用 attr.value 代替。             |      |      |



## Event 事件on

### 鼠标事件 MouseEvent

- 针对鼠标交互

| 属性                                                         | 描述                                                         | DOM  |
| :----------------------------------------------------------- | :----------------------------------------------------------- | :--- |
### 键盘事件KeyboardEvent

- 针对键盘交互

| 属性       | 描述                                                        | DOM  |
| :--------- | :---------------------------------------------------------- | :--- |
| onkeydown  | 键盘键被按下，不分大小写，先触发，捕获功能键                | 2    |
| onkeypress | 键盘键被按下（？松开触发）， 分大小写，后触发，不捕获功能键 | 2    |
| onkeyup    | 键盘键被松开                                                | 2    |

### 框架/对象（Frame/Object）事件/UiEvent-Event

- 针对用户界面交互

| 属性                                                         | 描述                                                         | DOM                                                          |
| :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| [onabort](https://www.runoob.com/jsref/event-onabort.html)   | 图像的加载被中断。 ( object)                                 | 2                                                            |
| [onbeforeunload](https://www.runoob.com/jsref/event-onbeforeunload.html) | 该事件在即将离开页面（刷新或关闭）时触发，在文档即将被卸载之前发生此事件。 | 2                                                            |
| [onerror](https://www.runoob.com/jsref/event-onerror.html)   | 在加载文档或图像时发生错误。 ( object, body和 frameset)      |                                                              |
| [onhashchange](https://www.runoob.com/jsref/event-onhashchange.html) | 该事件在当前 URL 的锚部分发生修改时触发。                    | 也称HashChangeEvent事件                                      |
| onload                                                       | 当资源(页面、图片)加载完成时。针对window、body或img。        | 2                                                            |
| [onpageshow](https://www.runoob.com/jsref/event-onpageshow.html) | 该事件在用户访问页面时触发，在用户导航到某张网页时，发生此事件。 | [PageTransitionEvent](https://www.w3school.com.cn/jsref/obj_pagetransitionevent.asp) |
| [onpagehide](https://www.runoob.com/jsref/event-onpagehide.html) | 该事件在用户离开当前网页跳转到另外一个页面时触发，当用户离开某张网页进行导航时，发生此事件。 | [PageTransitionEvent](https://www.w3school.com.cn/jsref/obj_pagetransitionevent.asp) |
| onresize                                                     | 窗口被调整尺寸。针对window、document.body                    | 2                                                            |
| [onscroll](https://www.runoob.com/jsref/event-onscroll.html) | 当文档被滚动时发生的事件。                                   | 2                                                            |
| [onunload](https://www.runoob.com/jsref/event-onunload.html) | 用户退出页面。 ( body 和 frameset)页面卸载后（对于 body），发生此事件。 | 2                                                            |
| [onselect](https://www.w3school.com.cn/jsref/event_onselect.asp) | 用户选择文本后（对于input和textarea）发生此事件              | 表单事件和UiEventEvent]                                      |

### 表单事件（焦点事件FocusEvent）

- 针对与焦点有关的事件

| 属性                                                         | 描述                                                         | DOM  |
| :----------------------------------------------------------- | :----------------------------------------------------------- | :--- |
| onfocus                                                      | 事件源元素获取焦点                                           | 2    |
| onblur                                                       | 事件源元素失去焦点                                           | 2    |
| onchange                                                     | 事件源元素内容发生变化且失焦( input, keygen, select, 和 textarea) | 2    |
|                                                              | **表单事件form**                                             |      |
| onreset                                                      | 表单被重置                                                   | 2    |
| onsubmit                                                     | 表单被提交                                                   | 2    |
| [onfocusin](https://www.runoob.com/jsref/event-onfocusin.html) | 元素即将获取焦点时触发                                       | 2    |
| [onfocusout](https://www.runoob.com/jsref/event-onfocusout.html) | 元素即将失去焦点时触发                                       | 2    |
| [oninput](https://www.runoob.com/jsref/event-oninput.html)   | 元素获取用户输入时触发                                       | 3    |
|                                                              |                                                              |      |
| [onsearch](https://www.runoob.com/jsref/event-onsearch.html) | 用户向搜索域输入文本时触发 ( <input="search">)               |      |
| [onselect](https://www.runoob.com/jsref/event-onselect.html) | 用户选取文本时触发  input 和 textarea 标签                   | 2    |
|                                                              |                                                              |      |

### 剪贴板事件ClipboardEvent

- 针对剪贴板的修改

| 属性                                                       | 描述                                                         | DOM  |
| :--------------------------------------------------------- | :----------------------------------------------------------- | :--- |
| [oncopy](https://www.runoob.com/jsref/event-oncopy.html)   | 该事件在用户拷贝元素内容时触发                               |      |
| [oncut](https://www.runoob.com/jsref/event-oncut.html)     | 该事件在用户剪切元素内容时触发                               |      |
| [onpaste](https://www.runoob.com/jsref/event-onpaste.html) | 该事件在用户粘贴元素内容时触发,--用户将一些内容粘贴到元素中时，发生此事件 |      |

### 打印事件-print

| 属性                                                         | 描述                                                 | DOM  |
| :----------------------------------------------------------- | :--------------------------------------------------- | :--- |
| [onafterprint](https://www.runoob.com/jsref/event-onafterprint.html) | 该事件在页面已经开始打印，或者打印窗口已经关闭时触发 |      |
| [onbeforeprint](https://www.runoob.com/jsref/event-onbeforeprint.html) | 该事件在页面即将开始打印时触发                       |      |

### 拖动事件-DragEvent

- 针对拖放交互

| 事件                                                         | 描述                                 | DOM  |
| :----------------------------------------------------------- | :----------------------------------- | :--- |
| [ondrag](https://www.runoob.com/jsref/event-ondrag.html)     | 该事件在元素正在拖动时触发           |      |
| [ondragend](https://www.runoob.com/jsref/event-ondragend.html) | 该事件在用户完成元素的拖动时触发     |      |
| [ondragenter](https://www.runoob.com/jsref/event-ondragenter.html) | 该事件在拖动的元素进入放置目标时触发 |      |
| [ondragleave](https://www.runoob.com/jsref/event-ondragleave.html) | 该事件在拖动元素离开放置目标时触发   |      |
| [ondragover](https://www.runoob.com/jsref/event-ondragover.html) | 该事件在拖动元素在放置目标上时触发   |      |
| [ondragstart](https://www.runoob.com/jsref/event-ondragstart.html) | 该事件在用户开始拖动元素时触发       |      |
| [ondrop](https://www.runoob.com/jsref/event-ondrop.html)     | 该事件在拖动元素放置在目标区域时触发 |      |

### 多媒体（Media）事件

| 事件                                                         | 描述                                                         | DOM  |
| :----------------------------------------------------------- | :----------------------------------------------------------- | :--- |
| [onabort](https://www.runoob.com/jsref/event-onabort-media.html) | 事件在视频/音频（audio/video）终止加载时触发。               | 媒体 |
| [oncanplay](https://www.runoob.com/jsref/event-oncanplay.html) | 事件在用户可以开始播放视频/音频（audio/video）时触发。       |      |
| [oncanplaythrough](https://www.runoob.com/jsref/event-oncanplaythrough.html) | 事件在视频/音频（audio/video）可以正常播放且无需停顿和缓冲时触发。 |      |
| [ondurationchange](https://www.runoob.com/jsref/event-ondurationchange.html) | 事件在视频/音频（audio/video）的时长发生变化时触发。         |      |
| onemptied                                                    | 当期播放列表为空时触发                                       |      |
| [onended](https://www.runoob.com/jsref/event-onended.html)   | 事件在视频/音频（audio/video）播放结束时触发。               |      |
| [onerror](https://www.runoob.com/jsref/event-onerror-media.html) | 事件在视频/音频（audio/video）数据加载期间发生错误时触发。当加载外部文件时发生错误后，发生此事件。 |      |
| [onloadeddata](https://www.runoob.com/jsref/event-onloadeddata.html) | 事件在浏览器加载视频/音频（audio/video）当前帧时触发触发。     媒体数据加载后，发生此事件。 |      |
| [onloadedmetadata](https://www.runoob.com/jsref/event-onloadedmetadata.html) | 事件在指定视频/音频（audio/video）的元数据加载后触发。   加载元数据（比如尺寸和持续时间）时，发生此事件 |      |
| [onloadstart](https://www.runoob.com/jsref/event-onloadstart.html) | 事件在浏览器开始寻找指定视频/音频（audio/video）触发。       |      |
| [onpause](https://www.runoob.com/jsref/event-onpause.html)   | 事件在视频/音频（audio/video）暂停时触发。                   |      |
| [onplay](https://www.runoob.com/jsref/event-onplay.html)     | 事件在视频/音频（audio/video）开始播放时触发。               |      |
| [onplaying](https://www.runoob.com/jsref/event-onplaying.html) | 事件在视频/音频（audio/video）暂停或者在缓冲后准备重新开始播放时触发。 |      |
| [onprogress](https://www.runoob.com/jsref/event-onprogress.html) | 事件在浏览器下载指定的视频/音频（audio/video）时触发。        当浏览器正处于获得媒体数据的过程中时，发生此事件。 |      |
| [onratechange](https://www.runoob.com/jsref/event-onratechange.html) | 事件在视频/音频（audio/video）的播放速度发送改变时触发。     |      |
| [onseeked](https://www.runoob.com/jsref/event-onseeked.html) | 事件在用户重新定位视频/音频（audio/video）的播放位置后触发。       当用户完成移动/跳到媒体中的新位置时，发生该事件 |      |
| [onseeking](https://www.runoob.com/jsref/event-onseeking.html) | 事件在用户开始重新定位视频/音频（audio/video）时触发。     当用户开始移动/跳到媒体中的新位置时，发生该事件。 |      |
| [onstalled](https://www.runoob.com/jsref/event-onstalled.html) | 事件在浏览器获取媒体数据，但媒体数据不可用时触发。           |      |
| [onsuspend](https://www.runoob.com/jsref/event-onsuspend.html) | 事件在浏览器读取媒体数据中止时触发。      当浏览器有意不获取媒体数据时，发生此事件。 |      |
| [ontimeupdate](https://www.runoob.com/jsref/event-ontimeupdate.html) | 事件在当前的播放位置发送改变时触发。                         |      |
| [onvolumechange](https://www.runoob.com/jsref/event-onvolumechange.html) | 事件在音量发生改变时触发。                                   |      |
| [onwaiting](https://www.runoob.com/jsref/event-onwaiting.html) | 事件在视频由于要播放下一帧而需要缓冲时触发。     当媒体已暂停但预期会恢复时，发生此事件。 |      |

### 动画事件-AnimationEvent

- 针对 CSS 动画

| 事件                                                         | 描述                            | DOM  |
| :----------------------------------------------------------- | :------------------------------ | :--- |
| [animationend](https://www.runoob.com/jsref/event-animationend.html) | 该事件在 CSS 动画结束播放时触发 |      |
| [animationiteration](https://www.runoob.com/jsref/event-animationiteration.html) | 该事件在 CSS 动画重复播放时触发 |      |
| [animationstart](https://www.runoob.com/jsref/event-animationstart.html) | 该事件在 CSS 动画开始播放时触发 |      |

### 移动触摸屏事件-TouchEvent

- 针对触摸交互

|                                                              |                                |      |
| ------------------------------------------------------------ | ------------------------------ | ---- |
| [touchcancel](https://www.w3school.com.cn/jsref/event_touchcancel.asp) | 在触摸被中断时，发生此事件。   |      |
| touchend                                                     | 单个手指从触摸屏上离开。移动端 |      |
| touchmove                                                    | 单指移动                       |      |
| touchstart                                                   | 单个手指触摸。移动端           |      |



### 过渡事件-TransitionEvent

- 针对 CSS 过渡

| 事件                                                         | 描述                          | DOM  |
| :----------------------------------------------------------- | :---------------------------- | :--- |
| [transitionend](https://www.runoob.com/jsref/event-transitionend.html) | 该事件在 CSS 完成过渡后触发。 |      |

### 其他事件对象

所有事件对象均基于 Event 对象，并继承其所有属性和方法。

| Event 对象                                                   | 描述                       |
| :----------------------------------------------------------- | :------------------------- |
| [Event](https://www.w3school.com.cn/jsref/obj_event.asp)     | 所有事件对象的父对象。     |
| [HashChangeEvent](https://www.w3school.com.cn/jsref/obj_hashchangeevent.asp) | 针对 URL 锚点部分的更改    |
| [InputEvent](https://www.w3school.com.cn/jsref/obj_inputevent.asp) | 针对用户输入               |
| [PageTransitionEvent](https://www.w3school.com.cn/jsref/obj_pagetransitionevent.asp) | 针对导航到网页或离开网页   |
| [PopStateEvent](https://www.w3school.com.cn/jsref/obj_popstateevent.asp) | 针对历史记录条目中的更改   |
| [ProgressEvent](https://www.w3school.com.cn/jsref/obj_progressevent.asp) | 针对加载外部资源的进度     |
| [StorageEvent](https://www.w3school.com.cn/jsref/obj_storageevent.asp) | 针对窗口的存储区域中的更改 |
| [WheelEvent](https://www.w3school.com.cn/jsref/obj_wheelevent.asp) | 针对鼠标滚轮交互           |



| 事件                                                         | 描述                                                         | DOM                                                          |
| :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| [open](https://www.w3school.com.cn/jsref/event_onopen_sse.asp) | 当打开与事件源的连接时，发生此事件                           |                                                              |
| [loadstart](https://www.w3school.com.cn/jsref/event_onloadstart.asp) | 当浏览器开始查找指定的媒体时，发生此事件。                   | [ProgressEvent](https://www.w3school.com.cn/jsref/obj_progressevent.asp) |
| [invalid](https://www.w3school.com.cn/jsref/event_oninvalid.asp) | 当元素无效时，发生此事件。                                   | [Event](https://www.w3school.com.cn/jsref/obj_event.asp)     |
| [input](https://www.w3school.com.cn/jsref/event_oninput.asp) | 当元素获得用户输入时，发生此事件。                           | [InputEvent](https://www.w3school.com.cn/jsref/obj_inputevent.asp)[Event](https://www.w3school.com.cn/jsref/obj_event.asp) |
| [fullscreenerror](https://www.w3school.com.cn/jsref/event_fullscreenerror.asp) | 当元素无法在全屏模式下显示时，发生此事件。                   | [Event](https://www.w3school.com.cn/jsref/obj_event.asp)     |
| [fullscreenchange](https://www.w3school.com.cn/jsref/event_fullscreenchange.asp) | 当元素以全屏模式显示时，发生此事件。                         | [Event](https://www.w3school.com.cn/jsref/obj_event.asp)     |
| [error](https://www.w3school.com.cn/jsref/event_onerror.asp) | 当加载外部文件时发生错误后，发生此事件。                     | [ProgressEvent](https://www.w3school.com.cn/jsref/obj_progressevent.asp) |
|                                                              |                                                              |                                                              |
| onmessage                                                    | 该事件通过或者从对象(WebSocket, Web Worker, Event Source 或者子 frame 或父窗口)接收到消息时触发        ///在通过此事件源接收消息时，发生此事件。该事件通过或者从对象(WebSocket, Web Worker, Event Source 或者子 frame 或父窗口)接收到消息时触发 |                                                              |
| onmousewheel                                                 | 已废弃。 使用 [onwheel](https://www.runoob.com/jsref/event-onwheel.html) 事件替代 | WheelEvent                                                   |
| [ononline](https://www.runoob.com/jsref/event-ononline.html) | 该事件在浏览器开始在线工作时触发。                           |                                                              |
| [onoffline](https://www.runoob.com/jsref/event-onoffline.html) | 该事件在浏览器开始离线工作时触发。                           |                                                              |
| onpopstate                                                   | 该事件在窗口的浏览历史（history 对象）发生改变时触发。       | PopStateEvent                                                |
| [onshow](https://www.runoob.com/jsref/event-onshow.html)     | 该事件当 menu 元素在上下文菜单显示时触发                     |                                                              |
| onstorage                                                    | 该事件在 Web Storage(HTML 5 Web 存储)更新时触发     ///Web 存储区域更新时发生此事件 | StorageEvent                                                 |
| [ontoggle](https://www.runoob.com/jsref/event-ontoggle.html) | 该事件在用户打开或关闭 details 元素时触发                    |                                                              |
| [onwheel](https://www.runoob.com/jsref/event-onwheel.html)   | 该事件在鼠标滚轮在元素上下滚动时触发                         | WheelEvent                                                   |

## 事件对象

#### 常量

| 静态变量        | 描述                                 | DOM  |
| :-------------- | :----------------------------------- | :--- |
| CAPTURING-PHASE | 当前事件阶段为捕获阶段(1)            | 1    |
| AT-TARGET       | 当前事件是目标阶段,在评估目标事件(1) | 2    |
| BUBBLING-PHASE  | 当前的事件为冒泡阶段 (3)             | 3    |

#### 属性

| 属性                                                         | 描述                                           | DOM  |
| :----------------------------------------------------------- | :--------------------------------------------- | :--- |
| [bubbles](https://www.runoob.com/jsref/event-bubbles.html)   | 返回布尔值，指示事件是否是起泡事件类型。       | 2    |
| [cancelable](https://www.runoob.com/jsref/event-cancelable.html) | 返回布尔值，指示事件是否可拥可取消的默认动作。 | 2    |
| [currentTarget](https://www.runoob.com/jsref/event-currenttarget.html) | 返回绑定(处理)事件的节点                       | 2    |
| eventPhase                                                   | 返回事件传播的当前阶段。                       | 2    |
| [target](https://www.runoob.com/jsref/event-target.html)     | 返回事件源                                     | 2    |
| [timeStamp](https://www.runoob.com/jsref/event-timestamp.html) | 返回事件生成的日期和时间。                     | 2    |
| [type](https://www.runoob.com/jsref/event-type.html)         | 返回当前 Event 对象表示的事件的名称。          | 2    |

#### 方法

| 方法              | 描述                                     | DOM  |
| :---------------- | :--------------------------------------- | :--- |
| initEvent()       | 初始化新创建的 Event 对象的属性。        | 2    |
| preventDefault()  | 通知浏览器不要执行与事件关联的默认动作。 | 2    |
| stopPropagation() | 不再派发事件。                           | 2    |

#### 注册解除监听(绑定事件)

-   事件：某些操作，比如:鼠标单击、鼠标双击、键盘按下、选中等
-   事件源：发生事件的组件。比如:按钮、输入框、图片等
-   监听器：一些JS代码。函数
-   注册监听：将事件、事件源、监听器进行绑定，触发时执行
-   event对象：
    -   JavaScript在事件被触发时，会采集事件相关信息(数据)，并创建一个`event`对象，用于存储事件的数据，将该`event`对象作为监听器代码实参传入。

方式一(DOM0)：html标签自带属性绑定和解除

```js
function demo(event){    
    console.log('被单击');    
console.log(event.type);
}
<input type="button" value="按钮" onclick="demo(event)">
    
// 解除绑定 element.removeAttribute('on事件名称')
document.querySelector('input').removeAttribute('onclick');

```

 方式二(DOM0)：ele.属性绑定事件

```js
<input type="button" value="按钮">
        
function demo(event){   
    console.log('被单击');    
console.log(event.type);
}
//获取事件源的Element对象
document.querySelector('input').onclick=demo;

//解除绑定
element.on事件名称=null
document.querySelector('input').onclick=null;
```

方式三(DOM2)：ele.事件方法`addEventListener('事件名','监听器','是否捕获')`函数实现事件绑定。默认false，冒泡处理

```js
<input type="button" value="按钮">
function demo(event){    
    console.log('被单击');  
    console.log(event.type);
}

document.querySelector('input').addEventListener('click', demo);
document.querySelector('input').removeAttribute('click',demo)
```



| 方法                  | 描述                                                    | DOM  |
| :-------------------- | :------------------------------------------------------ | :--- |
| addEventListener()    | 允许在目标事件中注册监听事件(IE8 = attachEvent())       | 2    |
| dispatchEvent()       | 允许发送事件到监听器上 (IE8 = fireEvent())              | 2    |
| removeEventListener() | 运行一次注册在事件目标上的监听事件(IE8 = detachEvent()) | 2    |



区别：

DOM0：同一事件源相同事件只能绑定一个监听器，后续覆盖，只能冒泡。

DOM2：多次绑定，按绑定顺序调用，

#### 事件流阻止与取消

- 指事件的流向，针对标签嵌套时，事件触发的先后顺序。分为捕获流和冒泡流
  - 捕获流(父->子)：`window->html->body->outer的DIV->inner的DIV`
  - 冒泡流(子->父)：`inner的DIV->outer的DIV->body->html->window`
- 分为三部分

  1.  捕获阶段：`window->html->body->outer的DIV`
  2.  目标阶段：`inner的DIV`
  3.  冒泡阶段：`outer的DIV->body->html->window`

- 阻止与取消

 event.stopPropagation();  阻止后续节点相同事件执行

 event.stopImmediatePropagation(); 阻止当前及后续节点相同事件执行

 event.preventDefault(); 取消(阻止)默认行为,如：:表单提交内容需要验证、 超链接跳转阻止

```js

<form action="">
<input type="text" name="acc">
    <input type="submit">
</form>
<!-- 阻止表单继续提交 -->
<script>
    document.querySelector('form').onsubmit = function (event) {
    console.log('触发');
        //编写代码判断用户输入的数据是否都合法
        var accVal = document.querySelector('[name="acc"]').value;
        var telReg = /^1[3-9]\d{9}$/;
        if (!telReg.test(accVal)) {
            //不合法时要执行的代码
            alert('必须所有输入都合法才能登录哦!');
            //阻止默认行为
            event.preventDefault();
        }
    }
</script>


// 阻止超链接跳转
< a href="https://www.woniuxy.com">点一点</a>
< script>
    document.querySelector('a').onclick = function (event) {
        console.log('执行');
        event.preventDefault();
    }
</script>
```



#### 鼠标键盘事件属性方法

| 属性/方法                                                    | 描述                                                         | 属于                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| this \| currentTarget                                        | 绑定(处理)事件的节点                                         |                                                              |
| target                                                       | 获取事件源                                                   | [Event](https://www.w3school.com.cn/jsref/obj_event.asp)属性 |
| type                                                         | 返回事件名称(事件类型)。                                     | [Event](https://www.w3school.com.cn/jsref/obj_event.asp)属性 |
| clientX                                                      | 触发时，鼠标指针相对于当前窗口的水平坐标。                   | MouseEvent-TouchEvent                                        |
| clientY                                                      | 触发时，鼠标指针相对于当前窗口的垂直坐标。                   | [MouseEvent](https://www.w3school.com.cn/jsref/obj_mouseevent.asp)[TouchEvent](https://www.w3school.com.cn/jsref/obj_touchevent.asp) |
| pageX                                                        | 触发时，鼠标指针相对于当前页面的水平坐标。                   | [MouseEvent](https://www.w3school.com.cn/jsref/obj_mouseevent.asp) |
| pageY                                                        | 触发时，鼠标指针相对于当前页面的垂直坐标。                   | [MouseEvent](https://www.w3school.com.cn/jsref/obj_mouseevent.asp) |
| [offsetX](https://www.w3school.com.cn/jsref/event_offsetx.asp) | 触发时，鼠标指针相对于当前事件源的水平坐标。                 | [MouseEvent](https://www.w3school.com.cn/jsref/obj_mouseevent.asp) |
| [offsetY](https://www.w3school.com.cn/jsref/event_offsety.asp) | 触发时，鼠标指针相对于当前事件源的垂直坐标。                 | [MouseEvent](https://www.w3school.com.cn/jsref/obj_mouseevent.asp) |
| keyCode                                                      | 键盘事件对应的Unicode码。///只识别键，大小写无关             | [KeyboardEvent](https://www.w3school.com.cn/jsref/obj_keyboardevent.asp) |
| [altKey](https://www.w3school.com.cn/jsref/event_altkey.asp) | 返回触发鼠标事件时是否按下了 "ALT" 键。                      | [MouseEvent](https://www.w3school.com.cn/jsref/obj_mouseevent.asp) |
| [altKey](https://www.w3school.com.cn/jsref/event_key_altkey.asp) | 返回触发按键事件时是否按下了 "ALT" 键。                      | [KeyboardEvent](https://www.w3school.com.cn/jsref/obj_keyboardevent.asp)[TouchEvent](https://www.w3school.com.cn/jsref/obj_touchevent.asp) |
| [animationName](https://www.w3school.com.cn/jsref/event_animation_animationName.asp) | 返回动画的名称。                                             | [AnimationEvent](https://www.w3school.com.cn/jsref/obj_animationevent.asp) |
| [bubbles](https://www.w3school.com.cn/jsref/event_bubbles.asp) | 返回特定事件是否为冒泡事件。                                 | [Event](https://www.w3school.com.cn/jsref/obj_event.asp)     |
| [button](https://www.w3school.com.cn/jsref/event_button.asp) | 返回触发鼠标事件时按下的鼠标按钮。                           | [MouseEvent](https://www.w3school.com.cn/jsref/obj_mouseevent.asp) |
| [buttons](https://www.w3school.com.cn/jsref/event_buttons.asp) | 返回触发鼠标事件时按下的鼠标按钮。                           | [MouseEvent](https://www.w3school.com.cn/jsref/obj_mouseevent.asp) |
| [bubbles](https://www.runoob.com/jsref/event-bubbles.html)   | 返回布尔值，指示事件是否是起泡事件类型。                     | 属性                                                         |
| [cancelBubble](https://www.w3school.com.cn/jsref/event_cancelbubble.asp) | 设置或返回事件是否应该向上层级进行传播。                     |                                                              |
| [cancelable](https://www.w3school.com.cn/jsref/event_cancelable.asp) | 返回事件是否可以阻止其默认操作。                             | [Event](https://www.w3school.com.cn/jsref/obj_event.asp)属性 |
| changeTouches                                                | 返回在上一触摸与该触摸之间其状态已更改的所有触摸对象的列表   | [TouchEvent](https://www.w3school.com.cn/jsref/obj_touchevent.asp) |
| [charCode](https://www.w3school.com.cn/jsref/event_key_charcode.asp) | 返回触发 onkeypress 事件的键的 Unicode 字符代码。            | [KeyboardEvent](https://www.w3school.com.cn/jsref/obj_keyboardevent.asp) |
| clipboardData                                                | 返回对象，其中包含受剪贴板操作影响的数据。                   | [ClipboardData](https://www.w3school.com.cn/jsref/obj_clipboardevent.asp) |
| [code](https://www.w3school.com.cn/jsref/event_key_code.asp) | 返回触发事件的键的代码。                                     | [KeyboardEvent](https://www.w3school.com.cn/jsref/obj_keyboardevent.asp) |
| composed                                                     | 指示该事件是否可以从 Shadow DOM 传递到一般的 DOM。           | [Event](https://www.w3school.com.cn/jsref/obj_event.asp)     |
| [composedPath()](https://www.w3school.com.cn/jsref/event_composedpath.asp) | 返回事件的路径。                                             |                                                              |
| [ctrlKey](https://www.w3school.com.cn/jsref/event_ctrlkey.asp) | 返回触发鼠标事件时是否按下了 "CTRL" 键。                     | [MouseEvent](https://www.w3school.com.cn/jsref/obj_mouseevent.asp) |
| [ctrlKey](https://www.w3school.com.cn/jsref/event_key_ctrlkey.asp) | 返回按键鼠标事件时是否按下了 "CTRL" 键。                     | [KeyboardEvent](https://www.w3school.com.cn/jsref/obj_keyboardevent.asp)[TouchEvent](https://www.w3school.com.cn/jsref/obj_touchevent.asp) |
| [currentTarget](https://www.w3school.com.cn/jsref/event_currenttarget.asp) | 返回其事件侦听器触发事件的元素。                             | [Event](https://www.w3school.com.cn/jsref/obj_event.asp)属性 |
| [data](https://www.w3school.com.cn/jsref/event_inputevent_data.asp) | 返回插入的字符。                                             | [InputEvent](https://www.w3school.com.cn/jsref/obj_inputevent.asp) |
| dataTransfer                                                 | 返回一个对象，其中包含被拖放或插入/删除的数据。              | [DragEvent](https://www.w3school.com.cn/jsref/obj_dragevent.asp)[InputEvent](https://www.w3school.com.cn/jsref/obj_inputevent.asp) |
| [defaultPrevented](https://www.w3school.com.cn/jsref/event_defaultprevented.asp) | 返回是否为事件调用 preventDefault() 方法。                   | [Event](https://www.w3school.com.cn/jsref/obj_event.asp)     |
| [deltaX](https://www.w3school.com.cn/jsref/event_wheel_deltax.asp) | 返回鼠标滚轮的水平滚动量（x 轴）。                           | [WheelEvent](https://www.w3school.com.cn/jsref/obj_wheelevent.asp) |
| [deltaY](https://www.w3school.com.cn/jsref/event_wheel_deltay.asp) | 返回鼠标滚轮的垂直滚动量（y 轴）。                           | [WheelEvent](https://www.w3school.com.cn/jsref/obj_wheelevent.asp) |
| [deltaZ](https://www.w3school.com.cn/jsref/event_wheel_deltaz.asp) | 返回鼠标滚轮的 Z 轴滚动量。                                  | [WheelEvent](https://www.w3school.com.cn/jsref/obj_wheelevent.asp) |
| [deltaMode](https://www.w3school.com.cn/jsref/event_wheel_deltamode.asp) | 返回数字，代表增量值（像素、线或页面）的度量单位。           | [WheelEvent](https://www.w3school.com.cn/jsref/obj_wheelevent.asp) |
| [detail](https://www.w3school.com.cn/jsref/event_detail.asp) | 返回数字，指示鼠标被单击了多少次。                           | [UiEvent](https://www.w3school.com.cn/jsref/obj_uievent.asp) |
| [elapsedTime](https://www.w3school.com.cn/jsref/event_animation_elapsedtime.asp) | 返回动画已运行的秒数。                                       | [AnimationEvent](https://www.w3school.com.cn/jsref/obj_animationevent.asp) |
| [elapsedTime](https://www.w3school.com.cn/jsref/event_transition_elapsedtime.asp) | 返回过渡已运行的秒数。                                       |                                                              |
| [eventPhase](https://www.w3school.com.cn/jsref/event_eventphase.asp) | 返回当前正在评估事件流处于哪个阶段。                         | [Event](https://www.w3school.com.cn/jsref/obj_event.asp)属性 |
| [getModifierState()](https://www.w3school.com.cn/jsref/event_mouse_getmodifierstate.asp) | 返回包含目标范围的数组，此范围将受到插入/删除的影响。        | [MouseEvent](https://www.w3school.com.cn/jsref/obj_mouseevent.asp) |
| getTargetRanges()                                            | 返回包含目标范围的数组，此范围将受到插入/删除的影响。        | [InputEvent](https://www.w3school.com.cn/jsref/obj_inputevent.asp) |
| [inputType](https://www.w3school.com.cn/jsref/event_inputevent_inputtype.asp) | 返回更改的类型（即 "inserting" 或 "deleting"）。             | [InputEvent](https://www.w3school.com.cn/jsref/obj_inputevent.asp) |
| initEvent()                                                  | 初始化新创建的 Event 对象的属性。                            | 方法                                                         |
| isComposing                                                  | 返回事件的状态是否正在构成。                                 | [InputEvent](https://www.w3school.com.cn/jsref/obj_inputevent.asp)[KeyboardEvent](https://www.w3school.com.cn/jsref/obj_keyboardevent.asp) |
| [isTrusted](https://www.w3school.com.cn/jsref/event_istrusted.asp) | 返回事件是否受信任。                                         | [Event](https://www.w3school.com.cn/jsref/obj_event.asp)     |
| [key](https://www.w3school.com.cn/jsref/event_key_key.asp)   | 返回事件表示的键的键值。///在按下按键时返回按键的标识符。    | [KeyboardEvent](https://www.w3school.com.cn/jsref/obj_keyboardevent.asp) |
| key                                                          | 返回更改后的存储项的键。                                     | [StorageEvent](https://www.w3school.com.cn/jsref/obj_storageevent.asp) |
| [location](https://www.w3school.com.cn/jsref/event_key_location.asp) | 返回键盘或设备上按键的位置。                                 | [KeyboardEvent](https://www.w3school.com.cn/jsref/obj_keyboardevent.asp) |
| lengthComputable                                             | 返回进度的长度是否可计算。                                   | [ProgressEvent](https://www.w3school.com.cn/jsref/obj_progressevent.asp) |
| loaded                                                       | 返回已加载的工作量。                                         | [ProgressEvent](https://www.w3school.com.cn/jsref/obj_progressevent.asp) |
| [metaKey](https://www.w3school.com.cn/jsref/event_metakey.asp) | 返回事件触发时是否按下了 "META" 键。                         | [MouseEvent](https://www.w3school.com.cn/jsref/obj_mouseevent.asp) |
| [metaKey](https://www.w3school.com.cn/jsref/event_key_metakey.asp) | 返回按键事件触发时是否按下了 "META" 键。                     | [KeyboardEvent](https://www.w3school.com.cn/jsref/obj_keyboardevent.asp)[TouchEvent](https://www.w3school.com.cn/jsref/obj_touchevent.asp) |
| MovementX                                                    | 返回相对于上一 mousemove 事件的位置的鼠标指针的水平坐标      | [MouseEvent](https://www.w3school.com.cn/jsref/obj_mouseevent.asp) |
| MovementY                                                    | 返回相对于上一 mousemove 事件的位置的鼠标指针的垂直坐标      | [MouseEvent](https://www.w3school.com.cn/jsref/obj_mouseevent.asp) |
| [newURL](https://www.w3school.com.cn/jsref/event_hashchange_newurl.asp) | 返回更改 hash 后的文档 URL。                                 | [HasChangeEvent](https://www.w3school.com.cn/jsref/obj_hashchangeevent.asp) |
| newValue                                                     | 返回更改后的存储项目的新值。                                 | [StorageEvent](https://www.w3school.com.cn/jsref/obj_storageevent.asp) |
| [oldURL](https://www.w3school.com.cn/jsref/event_hashchange_oldurl.asp) | 返回更改 hash 前的文档 URL。                                 | [HasChangeEvent](https://www.w3school.com.cn/jsref/obj_hashchangeevent.asp) |
| oldValue                                                     | 返回更改后的存储项目的旧值。                                 | [StorageEvent](https://www.w3school.com.cn/jsref/obj_storageevent.asp) |
| onemptied                                                    | 当发生不良情况且媒体文件突然不可用时，发生此事件。           |                                                              |
| [persisted](https://www.w3school.com.cn/jsref/event_pagetransition_persisted.asp) | 返回网页是否被浏览器缓存。                                   | [PageTransitionEvent](https://www.w3school.com.cn/jsref/obj_pagetransitionevent.asp) |
| [preventDefault()](https://www.w3school.com.cn/jsref/event_preventdefault.asp) | 如果可以取消事件，则将其取消，不执行属于该事件的默认操作。   | [Event](https://www.w3school.com.cn/jsref/obj_event.asp)方法 |
| [propertyName](https://www.w3school.com.cn/jsref/event_transition_propertyName.asp) | 返回与动画或过渡相关联的 CSS 属性的名称。                    | [AnimationEvent](https://www.w3school.com.cn/jsref/obj_animationevent.asp)[TransitionEvent](https://www.w3school.com.cn/jsref/obj_transitionevent.asp) |
| pseudoElement                                                | 返回动画或过渡的伪元素的名称。                               | [AnimationEvent](https://www.w3school.com.cn/jsref/obj_animationevent.asp)[TransitionEvent](https://www.w3school.com.cn/jsref/obj_transitionevent.asp) |
| region                                                       |                                                              | [MouseEvent](https://www.w3school.com.cn/jsref/obj_mouseevent.asp) |
| [relatedTarget](https://www.w3school.com.cn/jsref/event_relatedtarget.asp) | 返回与触发鼠标事件的元素相关的元素。                         | [MouseEvent](https://www.w3school.com.cn/jsref/obj_mouseevent.asp) |
| [relatedTarget](https://www.w3school.com.cn/jsref/event_focus_relatedtarget.asp) | 返回与触发事件的元素相关的元素(元素)。                       | [FocusEvent](https://www.w3school.com.cn/jsref/obj_focusevent.asp) |
| repeat                                                       | 返回是否重复按住某个键。                                     | [KeyboardEvent](https://www.w3school.com.cn/jsref/obj_keyboardevent.asp) |
| [screenX](https://www.w3school.com.cn/jsref/event_screenx.asp) | 返回窗口/鼠标指针相对于屏幕的水平坐标。                      | [MouseEvent](https://www.w3school.com.cn/jsref/obj_mouseevent.asp) |
| [screenY](https://www.w3school.com.cn/jsref/event_screeny.asp) | 返回窗口/鼠标指针相对于屏幕的垂直坐标。                      | [MouseEvent](https://www.w3school.com.cn/jsref/obj_mouseevent.asp) |
| [shiftKey](https://www.w3school.com.cn/jsref/event_shiftkey.asp) | 返回事件触发时是否按下了 "SHIFT" 键。                        | [MouseEvent](https://www.w3school.com.cn/jsref/obj_mouseevent.asp) |
| [shiftKey](https://www.w3school.com.cn/jsref/event_key_shiftkey.asp) | 返回按键事件触发时是否按下了 "SHIFT" 键。                    | [KeyboardEvent](https://www.w3school.com.cn/jsref/obj_keyboardevent.asp)[TouchEvent](https://www.w3school.com.cn/jsref/obj_touchevent.asp) |
| state                                                        | 返回包含历史记录条目副本的对象。                             | [PopStateEvent](https://www.w3school.com.cn/jsref/obj_popstateevent.asp) |
| [stopImme...()](https://www.w3school.com.cn/jsref/event_stopimmediatepropagation.asp) | 防止同一事件的其他侦听器被调用。                             | [Event](https://www.w3school.com.cn/jsref/obj_event.asp)     |
| [stopPropagation()](https://www.w3school.com.cn/jsref/event_stoppropagation.asp) | 防止事件在事件流中进一步传播。                               | [Event](https://www.w3school.com.cn/jsref/obj_event.asp)方法 |
| storageArea                                                  | 返回代表受影响的存储对象的对象。                             | [StorageEvent](https://www.w3school.com.cn/jsref/obj_storageevent.asp) |
|                                                              |                                                              |                                                              |
| [targetTouches](https://www.w3school.com.cn/jsref/event_touch_targettouches.asp) | 返回包含仍与触摸面接触的所有触摸点的Touch对象的TouchList列表 | [TouchEvent](https://www.w3school.com.cn/jsref/obj_touchevent.asp) |
| [timeStamp](https://www.w3school.com.cn/jsref/event_timestamp.asp) | 返回创建事件的时间（相对于纪元的毫秒数）。                   | [Event](https://www.w3school.com.cn/jsref/obj_event.asp)属性 |
| total                                                        | 返回将要加载的工作总量。                                     | [ProgressEvent](https://www.w3school.com.cn/jsref/obj_progressevent.asp) |
| [touches](https://www.w3school.com.cn/jsref/event_touch_touches.asp) | 返回当前与表面接触的所有 touch 对象的列表。                  | [TouchEvent](https://www.w3school.com.cn/jsref/obj_touchevent.asp) |
| url                                                          | 返回已更改项目的所在文档的 URL。                             | [StorageEvent](https://www.w3school.com.cn/jsref/obj_storageevent.asp) |
| [which](https://www.w3school.com.cn/jsref/event_which.asp)   | 返回触发鼠标事件时按下的鼠标按钮。                           | [MouseEvent](https://www.w3school.com.cn/jsref/obj_mouseevent.asp) |
| [which](https://www.w3school.com.cn/jsref/event_key_which.asp) | 返回触发 onkeypress 事件的键的 Unicode 字符码，或触发 onkeydown 或 onkeyup 事件的键的 Unicode 键码 | [KeyboardEvent](https://www.w3school.com.cn/jsref/obj_keyboardevent.asp) |
| [view](https://www.w3school.com.cn/jsref/event_view.asp)     | 返回对发生事件的 Window 对象的引用。                         | [UiEvent](https://www.w3school.com.cn/jsref/obj_uievent.asp) |
|                                                              |                                                              |                                                              |
| initMouseEvent()                                             | 初始化鼠标事件对象的值                                       | W3C - 2                                                      |
| initKeyboardEvent()                                          | 初始化键盘事件对象的值                                       | W3C - 3                                                      |

#### 事件监听对象方法

| 方法          | 描述                         | DOM  |
| :------------ | :--------------------------- | :--- |
| handleEvent() | 把任意对象注册为事件处理程序 | 2    |

#### 文档事件对象方法

| 方法          | 描述         | DOM                                                          |
| :------------ | :----------- | :----------------------------------------------------------- |
| createEvent() | 创建新事件。 | [Event](https://www.w3school.com.cn/jsref/obj_event.asp)文档事件对象方法 |



## Style 对象

### Background 背景属性

| 属性                                                         | 描述                              |
| :----------------------------------------------------------- | :-------------------------------- |
| [background](https://www.w3school.com.cn/jsref/prop_style_background.asp) | 在一行中设置所有的背景属性        |
| [backgroundAttachment](https://www.w3school.com.cn/jsref/prop_style_backgroundattachment.asp) | 设置背景图像是否固定或随页面滚动  |
| [backgroundColor](https://www.w3school.com.cn/jsref/prop_style_backgroundcolor.asp) | 设置元素的背景颜色                |
| [backgroundImage](https://www.w3school.com.cn/jsref/prop_style_backgroundimage.asp) | 设置元素的背景图像                |
| [backgroundPosition](https://www.w3school.com.cn/jsref/prop_style_backgroundposition.asp) | 设置背景图像的起始位置            |
| [backgroundPositionX](https://www.w3school.com.cn/jsref/prop_style_backgroundpositionx.asp) | 设置backgroundPosition属性的X坐标 |
| [backgroundPositionY](https://www.w3school.com.cn/jsref/prop_style_backgroundpositiony.asp) | 设置backgroundPosition属性的Y坐标 |
| [backgroundRepeat](https://www.w3school.com.cn/jsref/prop_style_backgroundrepeat.asp) | 设置是否及如何重复背景图像        |

### Border 边框和 Margin 边距属性

| 属性                                                         | 描述                                    |
| :----------------------------------------------------------- | :-------------------------------------- |
| [border](https://www.w3school.com.cn/jsref/prop_style_border.asp) | 在一行设置四个边框的所有属性            |
| [borderBottom](https://www.w3school.com.cn/jsref/prop_style_borderbottom.asp) | 在一行设置底边框的所有属性              |
| [borderBottomColor](https://www.w3school.com.cn/jsref/prop_style_borderbottomcolor.asp) | 设置底边框的颜色                        |
| [borderBottomStyle](https://www.w3school.com.cn/jsref/prop_style_borderbottomstyle.asp) | 设置底边框的样式                        |
| [borderBottomWidth](https://www.w3school.com.cn/jsref/prop_style_borderbottomwidth.asp) | 设置底边框的宽度                        |
| [borderColor](https://www.w3school.com.cn/jsref/prop_style_bordercolor.asp) | 设置所有四个边框的颜色 (可设置四种颜色) |
| [borderLeft](https://www.w3school.com.cn/jsref/prop_style_borderleft.asp) | 在一行设置左边框的所有属性              |
| [borderLeftColor](https://www.w3school.com.cn/jsref/prop_style_borderleftcolor.asp) | 设置左边框的颜色                        |
| [borderLeftStyle](https://www.w3school.com.cn/jsref/prop_style_borderleftstyle.asp) | 设置左边框的样式                        |
| [borderLeftWidth](https://www.w3school.com.cn/jsref/prop_style_borderleftwidth.asp) | 设置左边框的宽度                        |
| [borderRight](https://www.w3school.com.cn/jsref/prop_style_borderright.asp) | 在一行设置右边框的所有属性              |
| [borderRightColor](https://www.w3school.com.cn/jsref/prop_style_borderrightcolor.asp) | 设置右边框的颜色                        |
| [borderRightStyle](https://www.w3school.com.cn/jsref/prop_style_borderrightstyle.asp) | 设置右边框的样式                        |
| [borderRightWidth](https://www.w3school.com.cn/jsref/prop_style_borderrightwidth.asp) | 设置右边框的宽度                        |
| [borderStyle](https://www.w3school.com.cn/jsref/prop_style_borderstyle.asp) | 设置所有四个边框的样式 (可设置四种样式) |
| [borderTop](https://www.w3school.com.cn/jsref/prop_style_bordertop.asp) | 在一行设置顶边框的所有属性              |
| [borderTopColor](https://www.w3school.com.cn/jsref/prop_style_bordertopcolor.asp) | 设置顶边框的颜色                        |
| [borderTopStyle](https://www.w3school.com.cn/jsref/prop_style_bordertopstyle.asp) | 设置顶边框的样式                        |
| [borderTopWidth](https://www.w3school.com.cn/jsref/prop_style_bordertopwidth.asp) | 设置顶边框的宽度                        |
| [borderWidth](https://www.w3school.com.cn/jsref/prop_style_borderwidth.asp) | 设置所有四条边框的宽度 (可设置四种宽度) |
| [margin](https://www.w3school.com.cn/jsref/prop_style_margin.asp) | 设置元素的边距 (可设置四个值)           |
| [marginBottom](https://www.w3school.com.cn/jsref/prop_style_marginbottom.asp) | 设置元素的底边距                        |
| [marginLeft](https://www.w3school.com.cn/jsref/prop_style_marginleft.asp) | 设置元素的左边距                        |
| [marginRight](https://www.w3school.com.cn/jsref/prop_style_marginright.asp) | 设置元素的右边据                        |
| [marginTop](https://www.w3school.com.cn/jsref/prop_style_margintop.asp) | 设置元素的顶边距                        |
| [outline](https://www.w3school.com.cn/jsref/prop_style_outline.asp) | 在一行设置所有的outline属性             |
| [outlineColor](https://www.w3school.com.cn/jsref/prop_style_outlinecolor.asp) | 设置围绕元素的轮廓颜色                  |
| [outlineStyle](https://www.w3school.com.cn/jsref/prop_style_outlinestyle.asp) | 设置围绕元素的轮廓样式                  |
| [outlineWidth](https://www.w3school.com.cn/jsref/prop_style_outlinewidth.asp) | 设置围绕元素的轮廓宽度                  |
| [padding](https://www.w3school.com.cn/jsref/prop_style_padding.asp) | 设置元素的填充 (可设置四个值)           |
| [paddingBottom](https://www.w3school.com.cn/jsref/prop_style_paddingbottom.asp) | 设置元素的下填充                        |
| [paddingLeft](https://www.w3school.com.cn/jsref/prop_style_paddingleft.asp) | 设置元素的左填充                        |
| [paddingRight](https://www.w3school.com.cn/jsref/prop_style_paddingright.asp) | 设置元素的右填充                        |
| [paddingTop](https://www.w3school.com.cn/jsref/prop_style_paddingtop.asp) | 设置元素的顶填充                        |

### Layout 布局属性

| 属性                                                         | 描述                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| [clear](https://www.w3school.com.cn/jsref/prop_style_clear.asp) | 设置在元素的哪边不允许其他的浮动元素                         |
| [clip](https://www.w3school.com.cn/jsref/prop_style_clip.asp) | 设置元素的形状                                               |
| [content](https://www.w3school.com.cn/jsref/prop_style_content.asp) | 设置元信息                                                   |
| counterIncrement                                             | 设置其后是正数的计数器名称的列表。其中整数指示每当元素出现时计数器的增量。默认是1。 |
| counterReset                                                 | 设置其后是正数的计数器名称的列表。其中整数指示每当元素出现时计数器被设置的值。默认是0。 |
| [cssFloat](https://www.w3school.com.cn/jsref/prop_style_cssfloat.asp) | 设置图像或文本将出现（浮动）在另一元素中的何处。             |
| [cursor](https://www.w3school.com.cn/jsref/prop_style_cursor.asp) | 设置显示的指针类型                                           |
| [direction](https://www.w3school.com.cn/jsref/prop_style_direction.asp) | 设置元素的文本方向                                           |
| [display](https://www.w3school.com.cn/jsref/prop_style_display.asp) | 设置元素如何被显示                                           |
| [height](https://www.w3school.com.cn/jsref/prop_style_height.asp) | 设置元素的高度                                               |
| markerOffset                                                 | 设置marker box的principal box距离其最近的边框边缘的距离      |
| marks                                                        | 设置是否cross marks或crop marks应仅仅被呈现于page box边缘之外 |
| [maxHeight](https://www.w3school.com.cn/jsref/prop_style_maxheight.asp) | 设置元素的最大高度                                           |
| [maxWidth](https://www.w3school.com.cn/jsref/prop_style_maxwidth.asp) | 设置元素的最大宽度                                           |
| [minHeight](https://www.w3school.com.cn/jsref/prop_style_minheight.asp) | 设置元素的最小高度                                           |
| [minWidth](https://www.w3school.com.cn/jsref/prop_style_minwidth.asp) | 设置元素的最小宽度                                           |
| [overflow](https://www.w3school.com.cn/jsref/prop_style_overflow.asp) | 规定如何处理不适合元素盒的内容                               |
| [verticalAlign](https://www.w3school.com.cn/jsref/prop_style_verticalalign.asp) | 设置对元素中的内容进行垂直排列                               |
| [visibility](https://www.w3school.com.cn/jsref/prop_style_visibility.asp) | 设置元素是否可见                                             |
| [width](https://www.w3school.com.cn/jsref/prop_style_width.asp) | 设置元素的宽度                                               |

### List 列表属性

| 属性                                                         | 描述                     |
| :----------------------------------------------------------- | :----------------------- |
| [listStyle](https://www.w3school.com.cn/jsref/prop_style_liststyle.asp) | 在一行设置列表的所有属性 |
| [listStyleImage](https://www.w3school.com.cn/jsref/prop_style_liststyleimage.asp) | 把图像设置为列表项标记   |
| [listStylePosition](https://www.w3school.com.cn/jsref/prop_style_liststyleposition.asp) | 改变列表项标记的位置     |
| [listStyleType](https://www.w3school.com.cn/jsref/prop_style_liststyletype.asp) | 设置列表项标记的类型     |

### Positioning 定位属性

| 属性                                                         | 描述                                                   |
| :----------------------------------------------------------- | :----------------------------------------------------- |
| [bottom](https://www.w3school.com.cn/jsref/prop_style_bottom.asp) | 设置元素的底边缘距离父元素底边缘的之上或之下的距离     |
| [left](https://www.w3school.com.cn/jsref/prop_style_left.asp) | 置元素的左边缘距离父元素左边缘的左边或右边的距离       |
| [position](https://www.w3school.com.cn/jsref/prop_style_position.asp) | 把元素放置在static, relative, absolute 或 fixed 的位置 |
| [right](https://www.w3school.com.cn/jsref/prop_style_right.asp) | 置元素的右边缘距离父元素右边缘的左边或右边的距离       |
| [top](https://www.w3school.com.cn/jsref/prop_style_top.asp)  | 设置元素的顶边缘距离父元素顶边缘的之上或之下的距离     |
| [zIndex](https://www.w3school.com.cn/jsref/prop_style_zindex.asp) | 设置元素的堆叠次序                                     |

### Printing 打印属性

| 属性                                                         | 描述                               |
| :----------------------------------------------------------- | :--------------------------------- |
| orphans                                                      | 设置段落留到页面底部的最小行数     |
| page                                                         | 设置显示某元素时使用的页面类型     |
| [pageBreakAfter](https://www.w3school.com.cn/jsref/prop_style_pagebreakafter.asp) | 设置某元素之后的分页行为           |
| [pageBreakBefore](https://www.w3school.com.cn/jsref/prop_style_pagebreakbefore.asp) | 设置某元素之前的分页行为           |
| [pageBreakInside](https://www.w3school.com.cn/jsref/prop_style_pagebreakinside.asp) | 设置某元素内部的分页行为           |
| size                                                         | 设置页面的方向和尺寸               |
| widows                                                       | 设置段落必须留到页面顶部的最小行数 |

### Scrollbar 滚动条属性 (IE-only)

| 属性                                                         | 描述                                               |
| :----------------------------------------------------------- | :------------------------------------------------- |
| [scrollbar3dLightColor](https://www.w3school.com.cn/jsref/prop_style_scrollbar3dlightcolor.asp) | 设置箭头和滚动条左侧和顶边的颜色                   |
| [scrollbarArrowColor](https://www.w3school.com.cn/jsref/prop_style_scrollbararrowcolor.asp) | 设置滚动条上的箭头颜色                             |
| [scrollbarBaseColor](https://www.w3school.com.cn/jsref/prop_style_scrollbarbasecolor.asp) | 设置滚动条的底色                                   |
| [scrollbarDarkShadowColor](https://www.w3school.com.cn/jsref/prop_style_scrollbardarkshadowcolor.asp) | 设置箭头和滚动条右侧和底边的颜色                   |
| [scrollbarFaceColor](https://www.w3school.com.cn/jsref/prop_style_scrollbarfacecolor.asp) | 设置滚动条的表色                                   |
| [scrollbarHighlightColor](https://www.w3school.com.cn/jsref/prop_style_scrollbarhighlightcolor.asp) | 设置箭头和滚动条左侧和顶边的颜色，以及滚动条的背景 |
| [scrollbarShadowColor](https://www.w3school.com.cn/jsref/prop_style_scrollbarshadowcolor.asp) | 设置箭头和滚动条右侧和底边的颜色                   |
| [scrollbarTrackColor](https://www.w3school.com.cn/jsref/prop_style_scrollbartrackcolor.asp) | 设置滚动条的背景色                                 |

### Table 表格属性

| 属性                                                         | 描述                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| [borderCollapse](https://www.w3school.com.cn/jsref/prop_style_bordercollapse.asp) | 设置表格边框是否合并为单边框，或者像在标准的HTML中那样分离。 |
| [borderSpacing](https://www.w3school.com.cn/jsref/prop_style_borderspacing.asp) | 设置分隔单元格边框的距离                                     |
| [captionSide](https://www.w3school.com.cn/jsref/prop_style_captionside.asp) | 设置表格标题的位置                                           |
| [emptyCells](https://www.w3school.com.cn/jsref/prop_style_emptycells.asp) | 设置是否显示表格中的空单元格                                 |
| [tableLayout](https://www.w3school.com.cn/jsref/prop_style_tablelayout.asp) | 设置用来显示表格单元格、行以及列的算法                       |

### Text 文本属性

| 属性                                                         | 描述                             |
| :----------------------------------------------------------- | :------------------------------- |
| [color](https://www.w3school.com.cn/jsref/prop_style_color.asp) | 设置文本的颜色                   |
| [font](https://www.w3school.com.cn/jsref/prop_style_font.asp) | 在一行设置所有的字体属性         |
| [fontFamily](https://www.w3school.com.cn/jsref/prop_style_fontfamily.asp) | 设置元素的字体系列。             |
| [fontSize](https://www.w3school.com.cn/jsref/prop_style_fontsize.asp) | 设置元素的字体大小。             |
| [fontSizeAdjust](https://www.w3school.com.cn/jsref/prop_style_fontsizeadjust.asp) | 设置/调整文本的尺寸              |
| [fontStretch](https://www.w3school.com.cn/jsref/prop_style_fontstretch.asp) | 设置如何紧缩或伸展字体           |
| [fontStyle](https://www.w3school.com.cn/jsref/prop_style_fontstyle.asp) | 设置元素的字体样式               |
| [fontVariant](https://www.w3school.com.cn/jsref/prop_style_fontvariant.asp) | 用小型大写字母字体来显示文本     |
| [fontWeight](https://www.w3school.com.cn/jsref/prop_style_fontweight.asp) | 设置字体的粗细                   |
| [letterSpacing](https://www.w3school.com.cn/jsref/prop_style_letterspacing.asp) | 设置字符间距                     |
| [lineHeight](https://www.w3school.com.cn/jsref/prop_style_lineheight.asp) | 设置行间距                       |
| [quotes](https://www.w3school.com.cn/jsref/prop_style_quotes.asp) | 设置在文本中使用哪种引号         |
| [textAlign](https://www.w3school.com.cn/jsref/prop_style_textalign.asp) | 排列文本                         |
| [textDecoration](https://www.w3school.com.cn/jsref/prop_style_textdecoration.asp) | 设置文本的修饰                   |
| [textIndent](https://www.w3school.com.cn/jsref/prop_style_textindent.asp) | 缩紧首行的文本                   |
| textShadow                                                   | 设置文本的阴影效果               |
| [textTransform](https://www.w3school.com.cn/jsref/prop_style_texttransform.asp) | 对文本设置大写效果               |
| unicodeBidi                                                  |                                  |
| [whiteSpace](https://www.w3school.com.cn/jsref/prop_style_whitespace.asp) | 设置如何设置文本中的折行和空白符 |
| [wordSpacing](https://www.w3school.com.cn/jsref/prop_style_wordspacing.asp) | 设置文本中的词间距               |

### 标准属性

| 属性                                                      | 描述                         |
| :-------------------------------------------------------- | :--------------------------- |
| [dir](https://www.w3school.com.cn/jsref/prop_dir.asp)     | 设置或返回文本的方向         |
| [lang](https://www.w3school.com.cn/jsref/prop_lang.asp)   | 设置或返回元素的语言代码     |
| [title](https://www.w3school.com.cn/jsref/prop_title.asp) | 设置或返回元素的咨询性的标题 |

## CSSStyleDeclaration 对象属性

| 属性                                                         | 描述                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| [cssText](https://www.runoob.com/jsref/prop-cssstyle-csstext.html) | 设置或返回样式声明文本，cssText 对应的是 HTML 元素的 style 属性。 |
| [length](https://www.runoob.com/jsref/prop-cssstyle-length.html) | 返回样式中包含多少条声明。                                   |
| [parentRule](https://www.runoob.com/jsref/prop-cssstyle-parentrule.html) | 返回包含当前规则的规则。                                     |

------

## CSSStyleDeclaration 对象方法

| 方法                                                         | 描述                                              |
| :----------------------------------------------------------- | :------------------------------------------------ |
| [getPropertyPriority()](https://www.runoob.com/jsref/met-cssstyle-getpropertypriority.html) | 返回指定的 CSS 属性是否设置了 "important!" 属性。 |
| [getPropertyValue()](https://www.runoob.com/jsref/met-cssstyle-getpropertyvalue.html) | 返回指定的 CSS 属性值。                           |
| [item()](https://www.runoob.com/jsref/met-cssstyle-item.html) | 通过索引方式返回 CSS 声明中的 CSS 属性名。        |
| [removeProperty()](https://www.runoob.com/jsref/met-cssstyle-removeproperty.html) | 移除 CSS 声明中的 CSS 属性。                      |
| [setProperty()](https://www.runoob.com/jsref/met-cssstyle-setproperty.html) | 在 CSS 声明块中新建或者修改 CSS 属性。            |