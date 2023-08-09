7.11. react使用ant input组件，onChange事件获取输入框值

```js
e.persist();
```

6..react操作dom元素
6.1.使用选择器：
```jsx
import ReactDom from 'react-dom'
...
<span id='tip'></span>
...
var span = document.getElementById('tip')
...
ReactDom.findDOMNode(span).style.color = 'red'
```
6.2.使用ref属性
```jsx
<span ref='tip'></span>
...
this.refs.tip.style.color = "red"
```
6.3.hook函数组件中
```jsx
import {useRef} from 'react'
const a = useRef()
<span ref={a}></span>
console.log(a)
```
5.阻止默认事件
```js
//在react中，阻止事件冒泡有两种形式：
//1、e.stopPropagation() 在没有涉及到原生事件注册只有react事件时使用。
//2、e.nativeEvent.stopImmediatePropagation() 用document.addEventListener注册了原生的事件后使用。
<div onClick={(e)=>clickFunction(e)}></div>
...
function clickFunction (e) {
  e.stopPropagation()
}
```

4.react div滚动条滚动到到最底部
```js
import { useState,useRef } from 'react';
...
const scrollEle = useRef()
...
<div ref={scrollEle}></div>
...
//元素滚动条滚动到底部
function scrollToBottom (ele) {
        if (ele && ele.current) {
            const scrollHeight = ele.current.scrollHeight;//里面div的实际高度
            const height = ele.current.clientHeight;  //网页可见高度
            const maxScrollTop = scrollHeight - height; 
            ele.current.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
        }
}
scrollToBottom(scrollEle)
```

3.全局Header组件中使用withRouter可在每次路由跳转获取页面路由信息

可用来控制Header组件的显示和隐藏
```js
import {withRouter } from 'react-router-dom'
function Header () {
    return (
      <div></div>
    )
}
export default withRouter(Header);
```

2.父组件数据改变，子组件会重新渲染,使用memo包裹子组件函数
```js
import {memo} from 'react'
const AComponent = memo(()=> {
})
```

1.函数组件中ref使用方法
```js
import {useRef } from 'react';
...
const editContentInput = useRef()
...
<div ref={editContentInput} />
...
console.log(editContentInput)
```





