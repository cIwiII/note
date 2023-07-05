### render相关性能

常用的React.memo(组件)

let unm=useMemo():计算属性缓存

写memo()之前

以下组件存在严重的性能问题，每次color变化，都会导致ExpensiveTree组件重新渲染
```jsx
import { useState } from 'react';

export default function App() {
  let [color, setColor] = useState('red');
  return (
    <div>
      <input value={color} onChange={(e) => setColor(e.target.value)} />
      <p style={{ color }}>Hello, world!</p>
      <ExpensiveTree />
    </div>
  );
}

function ExpensiveTree() {
  let now = performance.now();
  while (performance.now() - now < 100) {
    // Artificial delay -- do nothing for 100ms
  }
  return <p>I am a very slow component tree.</p>;
}
```
解决
- 一种是memo，
- 另一种使用State下移
```jsx
export default function App() {
  return (
    <>
      <Form />
      <ExpensiveTree />
    </>
  );
}

function Form() {
  let [color, setColor] = useState('red');//color变化了，只有Form会重新渲染
  return (
    <>
      <input value={color} onChange={(e) => setColor(e.target.value)} />
      <p style={{ color }}>Hello, world!</p>
    </>
  );
}
```
- 解法 3：内容提升

将color放到父元素div中
```jsx
export default function App() {
  let [color, setColor] = useState('red');
  return (
    <div style={{ color }}>
      <input value={color} onChange={(e) => setColor(e.target.value)} />
      <p>Hello, world!</p>
      <ExpensiveTree />
    </div>
  );
}
```

12
```jsx
export default function App() {
  return (
    <ColorPicker>
      <p>Hello, world!</p>
      <ExpensiveTree />
    </ColorPicker>
  );
}

function ColorPicker({ children }) {
  let [color, setColor] = useState("red");
  return (
    <div style={{ color }}>
      <input value={color} onChange={(e) => setColor(e.target.value)} />
      {children}
    </div>
  );
}

```

依赖color的代码就和color state变量一起放入ColorPicker组件里。不关心color的部分就依然放在App组件中，

然后以JSX内容的形式传递给ColorPicker，也被称为children属性。

当color变化时，ColorPicker会重新渲染。但是它仍然保存着上一次从App中拿到的相同的children属性，

所以React并不会访问那棵子树。因此，ExpensiveTree不会重新渲染

- 扩展 4

使用Profiler然后用memo来写







```js
函数组件;
    // 组件第一次加载的会运行，后续不会再执行
    useEffect(() => {
        console.log('模拟：componentDidUpdate');
    }, [])


// 每次渲染执行
useEffect(()=>{
    console.log(345);
})
//使用React.memo()包裹
export default React.memo(Children)
// useCallback返回一个函数,依赖数据未变化函数仍未之前缓存的函数


类组件;
    //Component时
    shouldComponentUpdate(nextprops,nextstate){
        // 判断是否是否发生变化，如果props的数据发生变化，返回true，否则返回false
        if(nextprops.xxx == this.props.xxx){
            return false //没有发生变化,不更新
        }
        return true
    }
    //PureComponent时
    PureComponent内部已经实现了 shouldComponentUpdate逻辑
```

### react组件封装需要注意什么？

 * 1. 考虑组件的复用性，组件数据来源，在封装的组件中接收外部数据，渲染。外部数据的格式数据类型
 * 2. 组件内部结构的扩展性，你可能会使用插槽的方式来接受外部的布局结构，形成不一样的渲染



### 一、函数组件的更新

在父子组件中，React默认父组件更新后，子组件也会更新

某些情况父组件更新，子组件没有数据更新，子组件还是会刷新一次，造成性能浪费，可以考虑在子组件使用React.memo来进行组件的包装。

```javascript
import React, { useEffect } from 'react'
import Children2 from './Children2';
function Children(props) {
    // 组件第一次加载的会运行，当你组件加载完毕，不会再执行
    useEffect(() => {
        console.log(123);
    }, [])
    useEffect(()=>{
        console.log(345);
    })
    return (
        <div>
            <h3>Children</h3>
            <p>{props.username}</p>
            <button onClick={()=>props.changeUsername("xiaofeifei")}>修改父组件username</button>
            <Children2></Children2>
        </div>
    )
}
export default React.memo(Children)
```

子组件props没有接受到新的值就不会更新子组件，props的值发生变化，子组件一定更新一次。

如果父组件传递了一个函数给子组件，不管父组件那边更新的是哪个数据，子组件依然会跟着跟新。

`原因`：父组件更新一次，函数会被重新定义，函数重新创建一次地址会发生变化，子组件检测数据变化。更新一次。

解决方案：父组件使用useCallback定义函数，useCallback默认有缓存功能，当监控的数据没有发生变化的时候，函数不会重新创建一次。

```javascript
import React, { useState,useCallback } from 'react'
import Children from './Children'
export default function ParentComp() {
    const [count,setCount] = useState(10)
    const [username,setUsername] = useState("xiaowang")
    const changeCount = ()=>{
        setCount(30)
    }
    // const changeUsername = (val)=>{
    //     setUsername(val)
    // }
    // useCallback返回一个函数
    // 如果检测到你监控的数据没有发生变化，不会产生一个新的函数。返回之前缓存的函数
    const changeUsername = useCallback((val)=>{
        setUsername(val)
    },[username])
    return (
        <div>
            <h3>ParentComp</h3>
            <p>{count}</p>
            <button onClick={changeCount}>点击修改</button>
            <Children changeUsername={changeUsername} username={username}></Children>
        </div>
    )
}
```

### 二、类组件的更新

类组件中可以使用`shouldComponentUpdate`进行数据判断

当props数据没有发生变化的时候，默认返回false，当发生变化的时候，默认返回ture。

目前官方已经提供PureComponent组件，这个组件可以满足页面在没有更新props的情况下，默认不会更新页面。

注意：PureComponent内部已经实现`shouldComponentUpdate`逻辑。但是只能浅对比。

如果传递过来的是一个对象，检测对象地址是否发生变化，地址没有变化，检测数据没有变化。地址里面的内容检测不到。

### 【完】

### 生产模式优化

CDN单文件构建

 [`terser-brunch`](https://github.com/brunch/terser-brunch) 插件

Browserify

Rollup

webpack