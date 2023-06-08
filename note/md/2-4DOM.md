## DOM

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

## Document

### 概述
-   document节点是文档的根节点，每张网页都有自己的document节点。window.document属性就指向这个节点。
-   每个载入到浏览器中的HTML文档都会生成一个对应的Document对象，通过操作该Document对象，可以达到操作该HTML文档的目的；
-   Document对象是DOM的核心对象(基础对象);

### 常用属性

-   `body`

    -   提供`body`标签元素的访问（获取`body`标签对应的Element对象）。
    -   返回当前文档的body或frameset节点，如果不存在这样的节点，就返回null。

        ```
        document.body;
        ```

-   `title`

    -   提供`title`标签元素的访问（获取`title`标签对应的Element对象）。title属性返回当前文档的标题，该属性是可写的。

        ```
        document.title='新标题';
        ```

-   `URL`

    -   获取当前页面的URL。

        ```
        document.URL
        ```

-   `images`

    -   获取当前页面所有图片的访问。(获取所有`img`标签对应的Element对象数组)

        ```
        var imgElementArray=document.images;for(var imgEle of imgElementArray){    console.log(imgEle);}
        ```

-   `forms`

    -   获取当前页面所有表单的访问。(获取所有`form`标签对应的Element对象数组)

    ```js
    var formElementArray=document.forms;for(var formEle of formElementArray){    console.log(formEle);}

    var selectForm = document.forms[index];
    var selectFormElement = document.forms[index].elements[index];
    ```
### 其他属性

部分借鉴：https://blog.csdn.net/shania456/article/details/51455573

#### 指向文档内节点:

doctype，documentElement，defaultView，body，head，activeElement

- doctype：
    - document第一个子节点是document.doctype，document.firstChild通常就返回这个节点
    - HTML5文档中，该节点就代表<!DOCTYPE html>。如果网页没有声明DTD，该属性返回null，

- documentElement
    - 文档的根节点（root），document节点的第二个子节点，紧跟在document.doctype节点后面。<html lang="en">。

- defaultView
    - 在浏览器中返回document对象所在的window对象，否则返回null。var win = document.defaultView;


- head
    - 返回当前文档的head节点。如果当前文档有多个head，则返回第一个。
    ```js
    document.head === document.querySelector('head')
    ```

- activeElement
    - activeElement属性返回当前文档中获得焦点的那个元素。
    - 用户通常可以使用tab键移动焦点，使用空格键激活焦点，比如如果焦点在一个链接上，此时按一下空格键，就会跳转到该链接。

#### 返回文档信息:

documentURI，URL，domain，lastModified，location，referrer，title，characterSet

- documentURI，URL
  
- documentURI属性和URL属性都返回当前文档的网址。不同之处是documentURI属性是所有文档都具备的，URL属性则是HTML文档独有的。
  
- domain
    - domain属性返回当前文档的域名。比如，某张网页的网址是http://www.example.com/hello.html，domain属性就等于 www.example.com 。
    - 如果无法获取域名，该属性返回null。
    ```js
    var badDomain = "www.example.xxx";

    if (document.domain === badDomain){//等于指定域名或子域名时，sub.example.com，domain属性可以设置为example.com
        window.close();
    }
    ```
- lastModified
  
- document.lastModified，返回当前文档最后修改的时间戳，格式为字符串（不能直接比较，需要用Date.parse方法转成时间戳格式，才能进行比较。）
  
- location
    - 只读对象，提供了当前文档的URL信息
    - 但是可以将URL赋值给这个属性，网页就会自动跳转到指定网址
    - document.location属性与window.location属性等价，历史上，IE曾经不允许对document.location赋值，为了保险起见，建议优先使用window.location。（但现在IE淘汰，没有影响）
    - 如果只是单纯地获取当前网址，建议使用document.URL。
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

- referrer
  
- referrer属性返回一个字符串，表示前文档的访问来源，如果是无法获取来源或是用户直接键入网址，而不是从其他网页点击，则返回一个空字符串。
  
- characterSet
  
    - characterSet属性返回渲染当前文档的字符集，比如UTF-8、ISO-8859-1。

#### 文档行为：

readyState，designModed

- readyState
    - readyState属性返回当前文档的状态，共有三种可能的值：
        - loading：加载HTML代码阶段（尚未完成解析），
        - interactive：加载外部资源阶段是，
        - complete：全部加载完成
    ```js
    // 基本检查
    if (document.readyState === 'complete') {
      // ...
    }
 
    // 轮询检查
    var interval = setInterval(function() {
      if (document.readyState === 'complete') {
        clearInterval(interval);
        // ...
      }
    }, 100);
    ```

- designModed
    - designMode属性控制当前document是否可编辑。通常会打开iframe的designMode属性，将其变为一个所见即所得的编辑器。
    ```js
    iframe_node.contentDocument.designMode = "on";
    ```
#### 文档环境信息:

implementation，compatMode

- implementation
    - 返回一个对象，用来甄别当前环境部署了哪些DOM相关接口。implementation属性的hasFeature方法，可以判断当前环境是否部署了特定版本的特定接口。
    ```js
    document.implementation.hasFeature( 'HTML, 2.0 ')
    // true
 
    document.implementation.hasFeature('MutationEvents','2.0')
    // true

    //表示当前环境部署了DOM HTML 2.0版和MutationEvents的2.0版。
    ```

- compatMode
  
    - compatMode属性返回浏览器处理文档的模式，可能的值为BackCompat（向后兼容模式）和 CSS1Compat（严格模式）。

#### 文档内部元素集合。
这些集合都是动态的，原节点有任何变化，立刻会反映在集合中:

anchors，embeds，forms，images，links，scripts，styleSheets

- anchors
  
- anchors属性返回网页中所有的a节点元素。注意，只有指定了name属性的a元素，才会包含在anchors属性之中。
  
- embeds
  
- embeds属性返回网页中所有嵌入对象，即embed标签，返回的格式为类似数组的对象（nodeList）。
  
- forms
    -   获取当前页面所有表单的访问。(获取所有`form`标签对应的Element对象数组)

    ```js
    var formElementArray=document.forms;for(var formEle of formElementArray){    console.log(formEle);}

    //获取指定表单的指定元素。
    var selectForm = document.forms[index];
    var selectFormElement = document.forms[index].elements[index];
    ```

- images
    - images属性返回页面所有图片元素（即img标签）
    ```js
    var ilist = document.images;
 
    for(var i = 0; i < ilist.length; i++) {
      if(ilist[i].src == "banner.gif") {//在所有img标签中，寻找特定图片。
        // ...
      }
    }
    ```

- links
  
- links属性返回当前文档所有的链接元素（即a标签，或者说具有href属性的元素）
  
- scripts
    - scripts属性返回当前文档的所有脚本（即script标签）
    ```js
    var scripts = document.scripts;
    if (scripts.length !== 0 ) {
      console.log("当前网页有脚本");
    }
    ```

- styleSheets
    - styleSheets属性返回一个类似数组的对象，包含了当前网页的所有样式表。
    - 该属性提供了样式表操作的接口。然后，每张样式表对象的cssRules属性，返回该样式表的所有CSS规则。这又方便了操作具体的CSS规则。
    ```js
    //使用slice方法将document.styleSheets转为数组
    var allSheets = [].slice.call(document.styleSheets);
    ```

### 常用方法

部分借鉴：https://blog.csdn.net/shania456/article/details/51455573

#### document对象方法:

open()，close()，write()，writeln()，hasFocus()

- document.open()方法
    - 用于新建一个文档，供write方法写入内容。它实际上等于清除当前文档，重新写入内容。不要将此方法与window.open()混淆，后者用来打开一个新窗口，与当前文档无关。

- document.close方法
    - 用于关闭open方法所新建的文档。一旦关闭，write方法就无法写入内容了。如果再调用write方法，就等同于又调用open方法，新建一个文档，再写入内容。

- document.write方法
    - 用于向当前文档写入内容。只要当前文档还没有用close方法关闭，它所写入的内容就会追加在已有内容的后面。
    - 如果直接调用write方法，它会隐式先调用open方法，擦除当前文档所有内容，然后再写入。
    - 如果在页面渲染过程中调用write方法，只是单纯的最加写入，不会清除之前内容。
    - 除了某些特殊情况，应该尽量避免使用document.write这个方法。
    
- writeln方法
    - document.writeln方法与write方法完全一致，除了会在输出内容的尾部添加换行符。
    - 添加的是ASCII码的换行符，渲染成HTML网页时不起作用。

- hasFocus()
    - 返回一个布尔值，表示当前文档之中是否有元素被激活或获得焦点。focused = document.hasFocus();
    - 需要注意的是，有焦点的文档必定被激活（active），反之不成立，激活的文档未必有焦点。比如如果用户点击按钮，从当前窗口跳出一个新窗口，该新窗口就是激活的，但是不拥有焦点。

#### 文档元素选中：

querySelector()，getElementById()，querySelectorAll()，getElementsByTagName()，getElementsByClassName()，getElementsByName()，elementFromPoint()

- querySelector()
  
- CSS选择器指定第一个元素，没有返回null，无法选中伪元素
  
- getElementById()
  
- 指定id元素，没有返回null，大小写敏感（区分），getElementById()比querySelector()效率高得多。
  
- querySelectorAll()
    - NodeList对象是静态对象，只是获取时的值，HTMLCollection类型是动态对象实时反应值的变化
    - 返回所有匹配的NodeList类型的节点集合对象。NodeList对象不是动态集合，所以元素节点的变化无法实时反映在返回结果中。只能时获取时的节点NodeList列表
    - querySelectorAll方法的参数，可以是逗号分隔的多个CSS选择器，返回所有匹配其中一个选择器的元素。
    - querySelectorAll方法和getElementsByTagName方法的参数是字符串“*”(通配符)，则会返回文档中的所有HTML元素节点。
    - 与querySelector方法一样，querySelectorAll方法无法选中CSS伪元素。
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

- getElementsByClassName()
    - 返回一个类似数组的对象（HTMLCollection类型的对象），包括了所有class名字符合指定条件的元素（搜索范围包括本身），
    - 查找到的Element元素对象集合。如果不存在指定元素，则返回空集合(长度为0)。
    - 元素的变化实时反映在返回结果中。这个方法不仅可以在document对象上调用，也可以在任何元素节点上调用。

    ```js
    // document对象上调用
    var elements = document.getElementsByClassName('names');
    // 非document对象上调用
    var elements = rootElement.getElementsByClassName('names');

    for(var clEle of elements ){    console.log(clEle);}

    //参数可以是多个空格分隔的class名字，返回同时具有这些节点的元素。
    document.getElementsByClassName('red test');

    ```

- getElementsByTagName()

    - 指定标签的元素（搜索范围包括本身）。返回值是一个HTMLCollection对象，传入参数自动转为小写
    ```js
    var divElementArray=document.getElementsByTagName('div');
    for(var divEle of divElementArray){     console.log(divEle); }
    ```

- getElementsByName()

    - 根据元素name属性，返回一个NodeList格式的对象
    - 以前在IE浏览器使用这个方法，会将没有name属性、但有同名id属性的元素也返回，所以name和id属性最好设为不一样的值。
    - 查找到的Element元素对象集合。如果不存在指定元素，则返回空集合(长度为0)。
    ```js
    var testNameElementArray=document.getElementsByName('test');
    for(var nameEle of testNameElementArray){    console.log(nameEle);}
    ```

- elementFromPoint()
    - 返回位于页面指定位置的元素。var element = document.elementFromPoint(x, y); 单位是CSS像素。
    - 如果该元素不可返回（比如文本框的滚动条），则返回它的父元素（比如文本框）。如果坐标值无意义（比如负值），则返回null。


#### 生成元素:
createElement()，createTextNode()，createAttribute()，createDocumentFragment()

- createElement()
    - createElement方法用来生成HTML元素节点。参数自动转小写，如果参数带有尖括号（即<和>）或者是null，会报错。
    ```js
    //语法
    var element = document.createElement(tagName);

    // 实例
    var newDiv = document.createElement("div");
    ```

- createTextNode()
    - createTextNode方法用来生成文本节点，参数为所要生成的文本节点的内容。
    ```js
    //新建一个div节点和一个文本节点，然后将文本节点插入div节点

    var newDiv = document.createElement("div");
    var newContent = document.createTextNode("Hello");
    newDiv.appendChild(newContent);
    ```

- createAttribute()
    - createAttribute方法生成一个新的属性对象节点，并返回它。参数属性名
    ```js
    var node = document.getElementById("div1");
    var a = document.createAttribute("my_attrib");
    a.value = "newVal";
    node.setAttributeNode(a);
 
    // 等同于
 
    var node = document.getElementById("div1");
    node.setAttribute("my_attrib", "newVal");
    ```

- createDocumentFragment()方法
    - 生成一个DocumentFragment对象。存在于内存，不属于当前文档，改动不会重新渲染页面
    - 比直接修改当前文档的DOM有更好的性能表现。
    ```js
    var docfrag = document.createDocumentFragment();

    [1, 2, 3, 4].forEach(function(e) {
      var li = document.createElement("li");
      li.textContent = e;
      docfrag.appendChild(li);
    });
 
    document.body.appendChild(docfrag);
    ```

- createEvent()方法
    - 生成一个事件对象，该对象可以被element.dispatchEvent方法使用，触发指定事件。
    - 参数是事件类型，比如UIEvents、MouseEvents、MutationEvents、HTMLEvents。

    ```js
    //语法
    var event = document.createEvent(type);

    //实例
    var event = document.createEvent('Event');
    event.initEvent('build', true, true);
    document.addEventListener('build', function (e) {
      // ...
    }, false);
    document.dispatchEvent(event);
    ```

#### 遍历元素节点：
createNodeIterator()，createTreeWalker()

参数二类型遍历相关：https://segmentfault.com/a/1190000004225657?utm_source=sf-related

- createNodeIterator()
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
- createTreeWalker()
    - createTreeWalker方法返回一个DOM的子树遍历器。它与createNodeIterator方法的区别在于，后者只遍历子节点，而它遍历整个子树（子子孙孙）。
    ```js
    var treeWalker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_ELEMENT
    );
 
    var nodeList = [];
 
    while(treeWalker.nextNode()) nodeList.push(treeWalker.currentNode);
    ```

#### 获取外部文档节点
adoptNode()，importNode()

- adoptNode()
    - adoptNode方法将某个节点，从其原来所在的文档移除，插入当前文档，并返回插入后的新节点。
    ```js
    node = document.adoptNode(externalNode);

    importNode方法从外部文档拷贝指定节点，插入当前文档。

    var node = document.importNode(externalNode, deep);
    ```


- importNode()方法
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

#### getElementsBayTagName不可遍历

getElementsBayTagName获取的是HTMLCollection DOM元素集合，forEach报错

它是及时更新的，当文档中的DOM变化是，它是会随之变化的。

属性：HTMLCollection.length，返回集合当中子元素的数目。

方法：1.HTMLCollection.item(index)，参数为下标，返回具体的节点。
	      2.HTMLCollection.namedItem(value),参数为字符串，返回具体的节点。

document.querySelectAll('video');获取的才是数组

## Element

-   Element对象用于表示一个HTML标签元素，元素节点。

#### 操作元素内容

**表单元素** 

-   赋值：`element.value='值'`

    ```
var accElement=document.querySelector('[name="acc"]');//对表单元素赋值accElement.value='666';
    ```
    
-   取值：`var 变量名称=element.value`

    ```
var accElement=document.querySelector('[name="acc"]');//获取表单值var val=accElement.value;
    ```

**普通元素** 

**HTML内容** ：

-   赋值：`element.innerHTML='值'` ，如果值中包含HTML元素，该元素会被作为HTML解析执行

    ```
var divElement=document.querySelector('div');//赋值divElement.innerHTML='<a href="">内容</a>';
    ```
    
-   取值：`var 变量名称=element.innerHTML`  (文本和HTML内容都会获取)

    ```
var divElement=document.querySelector('div');var divContent=divElement.innerHTML;console.log(divContent);
    ```

**Text内容** 

-   赋值：`element.innerText='值'` (如果值中包含HTML元素，会被作为文本字符串添加)

    ```
var divElement=document.querySelector('div');divElement.innerText='<a href="">内容</a>';
    ```
    
-   取值：`var 变量名称=element.innerText` (只取文本内容，HTML内容会被忽略)

    ```
var divElement=document.querySelector('div');var divContent=divElement.innerText;console.log(divContent);
    ```

#### 操作元素属性

- 设置属性：`element.setAttribute('属性名称','值'):viod`

- 获取属性值：`var 变量名称=element.getAttribute('属性名称'):属性值`

- 获取自定义属性：`var 变量名称=element.dataset.属性值`

- 移除属性：`element.removeAttribute('属性名称')void`

- 判断是否存在属性：`var 变量名= element.hasAttribute('属性名称'):boolean`

  ```js
  //获取目标Element对象
  var aEle=document.querySelector('a');
  
  //设置属性// 
  aEle.href='https://www.baidu.com';
  aEle.setAttribute('href','https://www.baidu.com');
  
  //获取属性//
  var href=aEle.href;
  var href=aEle.getAttribute('href');
  
  //移除指定属性
  aEle.removeAttribute('href');
  
  //判断有没有指定属性
  console.log(aEle.hasAttribute('href'));
  ```



##### 特殊属性class

-   `class`属性1,className以空格分隔字符串

    - 赋值：`element.className='值'`
- 取值： `var 变量名称=element.className`
  
```js
    var ele=document.querySelector('img');
    //赋值
    ele.className='two';
    //取值
    console.log(ele.className);
```

- `calss`属性2 js原生classList 数组 (浏览器进步不再使用jq)，比className更方便，classList 是⼀个只读属性，返回⼀个元素的类属性的实时 DOMTokenList  （类列表）集合

  - classList，添加（classList.add）
- 删除(classList.remove)。若列表中不存，不会出错也没有任何变化
  - 修改(classList.toggle)
  - 替换（classList.replace）
  - 是否包含(存在)（classList.contains）
  
  ```js
  const classes =div.classList
  const div = document.createElement('div');
  div.className = 'foo';
  
  //添加类add：--------------
  tokenList.add（token1 [，token2 [，... tokenN ]]）;
  div.classList.add("anotherclass");
  div.classList.add("foo", "bar", "baz");
  const cls = ["foo", "bar"];// 使⽤展开语法添加多个类值
  div.classList.add(...cls); 
  
  //移除类 remove:------------
  tokenList.remove(token1[, token2[, ...]]);
  div.classList.remove("foo");
  div.classList.remove("foo", "bar", "baz");
  const cls = ["foo", "bar"];// 使⽤展开语法移除多个类值
  div.classList.remove(...cls);
  
  //切换修改类 toggle:-------------
  tokenList.toggle(token, force);//操作后，返回是否存在的布尔值
  div.classList.toggle("visible");
  参数列表：
  token ：标记列表中你想探查并切换的 DOMString (类的字符串)。
  force? ：设置为 false , 只有删除标记，且不会再度添加。
                设置为 true， 添加标记，且不会再度删除。
  
  //替换类 replace:----------------
  div.classList.replace("foo", "bar"); // 将类值 "foo" 替换成 "bar"
  
  //判断类是否存在 contains:-----------------
  tokenList.contains(token);
  div.classList.contains("foo")
  ```
  

#### 操作元素样式

-   方式一

    -   提前写好CSS样式，控制元素`id`、`class`控制样式。

        ```js
        //获取目标元素的Element对象
        var ele=document.querySelector('span');
//设置元素的class属性值
        ele.className='demo';
        //设置元素的id属性值
        ele.id='test';
        ```
    
-   方式二

    -   通过操作元素的`style`属性实现样式控制。

    -   语法：`element.style='css样式'`、`element.style.css属性名称='css属性值'`

        ```js
var ele=document.querySelector('span');
        //操作style
        ele.style='color: red;font-size: 64px;';
        // 具体样式
    ele.style.color='red';
        ele.style.fontSize='64px';
        ```
```

#### 操作元素节点

- 添加末尾子节点：`ele.appendChild(子节点元素): 新添节点`

- 指定子元素前添加节点`ele.insertBefore(添加的节点，参照节点): 新添的节点`

- 移除指定子元素节点`removeChild(子元素): 被删子元素`

- 删除当前元素节点：`remove():void`

  ```js
  var divEle=document.querySelector('.Div');
  var aEle=document.createElement('a');//创建目标节点对象
  aEle.setAttribute('href','https://www.baidu.com');//添加属性
  aEle.innerText='点击一下';//设置内容
  
  //添加末位子节点
  var re=divEle.appendChild(aEle);
  
  //添加到指定节点前
  var span2Ele=ele.children[1];
  divEle.insertBefore(aEle,span2Ele);
  
  //获取要删除的元素Element
  var span2Ele=divEle.children[1];
  //删除子元素
  var re=divEle.removeChild(span2Ele);
  
  //节点操作
  divEle.remove();
```

**子节点** 

-   `firstElementChild`： 获取当前节点的第一个子节点。
-   `lastElementChild`：获取当前节点的最后一个子节点。
-   `children`：获取当前节点的所有子节点。返回节点数组

**兄弟节点** 

-   `previousElementSibling`：获取当前节点的前一个元素节点。
-   `nextElementSibling`：获取当前节点的后一个元素节点。

**父节点** 

-   `parentElement`：获取当前节点的父元素节点。

```js
var divEle=document.querySelector('#myDiv');

//获取第一个子元素
var feChild=divEle.firstElementChild;
//获取最后一个子元素
var leChild=divEle.lastElementChild;
//获取当前节点的所有子节点
var eleArray=divEle.children;

//获取前一个节点
var preEle=divEle.previousElementSibling;
//获取后一个节点
var nextEle=divEle.nextElementSibling;

//获取父节点
var parentEle=divEle.parentElement;
```

#### 操作盒模型

-   `offsetWidth`、`offsetHeight`、`offsetLeft`、`offsetTop`、`clientWidth`、`clientHeight`

    ```js
//获取inner的Element对象
    var innerElement=document.querySelector('.inner');
    
    //获取盒子的宽(内容+内边距+边框)
    console.log(innerElement.offsetWidth);
    //获取盒子的高(内容+内边距+边框)
    console.log(innerElement.offsetHeight);
    //当前盒子距离父盒子(非默认static定位)的左外边距。
    console.log(innerElement.offsetLeft);
    //当前盒子距离父盒子(非默认static定位)的上外边距
    console.log(innerElement.offsetTop);
    //当前盒子的宽(内容+内边距)。
    console.log(innerElement.clientWidth);
    //当前盒子的高(内容+内边距)。
    console.log(innerElement.clientHeight);
    ```

## 选中状态

#### 单选和多选的选中状态

-   设置选中状态

    -   选中：`element.checked=true`
    -   未选中：`element.checked=false`
    
-   获取选中状态：var 变量名称=element.checked

    -   选中为true
    -   未选中为false

#### 下拉列表的选中状态

-   设置选中状态

    -   选中：`element.selected=true`
    -   未选中：`element.selected=false`
    
-   获取选中状态：var 变量名称=element.selected

    -   选中为true
    -   未选中为false



实例：

```js
//全选
function selectAll() {
    var op = document.querySelectorAll('[name="language"]');
    for (var o of op) {o.checked = true;}
}
//全不选
function notSelect() {
    var op = document.querySelectorAll('[name="language"]');
    for (var o of op) {o.checked = false;}
}
//反选
function reverseSelect() {
    var op = document.querySelectorAll('[name="language"]');
    for (var o of op) {
        if (o.checked) {o.checked = false;}
        else {o.checked = true;}
    }
}
//获取值
function getSelectValue() {
    var op = document.querySelectorAll('option');
    for (var o of op) {
        if (o.selected) {console.log(o.value)}
    }
}
```



## 事件

-   事件：某些操作，比如:鼠标单击、鼠标双击、键盘按下、选中等
-   事件源：发生事件的组件。比如:按钮、输入框、图片等
-   监听器：一些JS代码。函数
-   注册监听：将事件、事件源、监听器进行绑定，触发时执行
-   event对象：
    -   JavaScript在事件被触发时，会采集事件相关信息(数据)，并创建一个`event`对象，用于存储事件的数据，将该`event`对象作为监听器代码实参传入。

### 注册解除监听(绑定事件)

-   方式一(DOM0)：html标签自带属性绑定

    ```js
function demo(event){    
        console.log('被单击');    
    console.log(event.type);
    }
<input type="button" value="按钮" onclick="demo(event)">
    // 解除绑定
    element.removeAttribute('on事件名称')
    document.querySelector('input').removeAttribute('onclick');
    ```
```
    
-   方式二(DOM0)：ele.属性绑定事件

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

-   方式三(DOM2)：ele.事件方法`addEventListener('事件名','监听器','是否捕获')`函数实现事件绑定。默认false，冒泡处理

    ```js
<input type="button" value="按钮">
    function demo(event){    
    console.log('被单击');  
        console.log(event.type);
}
    
    document.querySelector('input').addEventListener('click', demo);
    
    // element.removeEventListener('事件名称',JS监听器函数对象)
    document.querySelector('input').removeAttribute('click',demo)
    ```

-   DOM0与DOM2区别

    1. DOM0 同一事件源相同事件只能绑定`一`个JS监听器函数对象，后续覆盖；
    
       DOM2 同一事件源相同事件可以绑定`多`个JS监听器函数对象，调用执行顺序按绑定时间决定;
    
    2. DOM0 只能是冒泡阶段处理事件，
    
       DOM2 可以是冒泡阶段，也可以是捕获阶段处理事件
    
        event.stopPropagation();  阻止事件传播，后续节点不执行
    
        event.stopImmediatePropagation();当前节后不执行
    
       

- `event`对象，event.type为事件类型，即名字。

- `this` | `currentTarget` ：绑定(处理)事件的节点

-   `target`:获取事件源。
    
    -   `type`:获取事件类型。
    -   `clientX`:获取发生事件时，鼠标指针相对当前窗口的水平距离。
    -   `clientY`:获取发生事件时，鼠标指针相对当前窗口的垂直距离。
    -   `pageX`:获取发生事件时，鼠标指针相对当前页面的水平距离。
    -   `pageY`:获取发生事件时，鼠标指针相对当前页面的垂直距离。
    -   `offsetX`:获取发生事件时，鼠标指针相对当前事件源的水平距离。
    -   `offsetY`:获取发生事件时，鼠标指针相对当前事件源的垂直距离。
    -   `keyCode`:获取触发键盘事件的键对应的Unicode码。

### 常用事件

-   `load`：当资源(页面、图片)加载完成时，触发执行监听器代码。
    -   针对window、body或img。

-   `resize`：窗口被调整尺寸
    -   针对window、document.body。

-   `click`：鼠标单击
-   `dblclick`：鼠标双击
-   `mousedown`：鼠标被按下
-   `mouseup`：鼠标在事件源上被释放
-   `mousemove`：鼠标在事件源上移动
-   `mouseenter`：鼠标进入事件源区域
-   `mouseleave`：鼠标离开事件源区域
-   `keyup`：键盘键被松开
-   `keydown`：键盘键被按下，不分大小写，先触发，捕获功能键
-   `keypress`：键盘键被按下， 分大小写，后触发，不捕获功能键
-   `focus`：事件源元素获取焦点
-   `blur`：事件源元素失去焦点
-   `change`：事件源元素内容发生变化且失焦
-   表单(`form`) document.querySelector('form').onreset

    -   `reset`：表单被重置

    -   `submit`：表单被提交
-   触摸屏：document.body.

    -   `touchstart`：单个手指触摸

    -   `touchend`：单个手指从触摸屏上离开

    -   `touchmove`：单指移动

### 事件流

-   是指事件的流向，针对标签嵌套时，事件触发的顺序，谁先触发，谁后触发。
-   根据流向不同，分为捕获流和冒泡流
    -   捕获流(父->子)
        -   `window->html->body->outer的DIV->inner的DIV`
    -   冒泡流(子->父)
        -   `inner的DIV->outer的DIV->body->html->window`

### 执行过程(事件传播)

-   分为三部分

    1.  捕获阶段：`window->html->body->outer的DIV`
    2.  目标阶段：`inner的DIV`
    3.  冒泡阶段：`outer的DIV->body->html->window`
    
-   默认冒泡，DOM2提供设置处理事件的方式

    -   ```
        element.addEventListener('事件名称',JS监听器函数,是否捕获阶段处理事件)
        ```


### 事件阻止与取消

**事件阻止** 

-   `event.stopPropagation()`：阻止后续节点相同事件执行

-   `event.stopImmediatePropagation()`：阻止当前节点及后续节点相同事件执行

**取消(阻止)默认行为** 

- `event.preventDefault()`

  **主要场景** :1、表单提交事件，内容需要验证，2、 超链接跳转阻止

-   ```html

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



