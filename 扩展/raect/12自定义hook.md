
原地址：https://mp.weixin.qq.com/s/tYnizAYuKyOCKZjLoNdwmg

- usePow、
- useLatest：可以随时确保获取的是最新值，并且也可以解决闭包问题、
- useCreation：是 useMemo 或 useRef的替代品、可以保证拿到的值一定是最新的值
- useMount：简化了使用useEffect的第二个参数、
- useUnmount：使用useRef来确保所传入的函数为最新的状态、
- useUpdate：强制更新、
- useReactive：备响应式的useState、使用了强制更新
- useEventListener：监听各种事件、
- useHover：监听 DOM 元素是否有鼠标悬停、
- useTimeout：一段时间内，执行一次、
- useInterval：每过一段时间内一直执行、
- useCountDown：简单控制倒计时的钩子

Hooks的由来是什么？
- react-hooks是React16.8以后新增的钩子API，目的是增加代码的可复用性、逻辑性，
解决了函数式组件无状态问题，
既保留了函数式的简单，又解决了数据管理状态的缺陷。

useRef的高级用法是什么？
useMemo 和 useCallback 是怎么做优化的？
一个好的自定义Hooks该如何设计？
如何做一个不需要useState就可以直接修改属性并刷新视图的自定义Hooks？
如何做一个可以监听任何事件的自定义Hooks？

封装hooks,useRef刷新视图并更新， useLatest 可以随时确保获取的是最新值，并且也可以解决闭包问题
```jsx
import { useRef } from 'react';

const useLatest = <T>(value: T) => {
    const ref = useRef(value)
    ref.current = value

    return ref
};

export default useLatest;
```
useCreation:结合useMemo和useRef封装

- useMemo的值不一定是最新的值，但useCreation可以保证拿到的值一定是最新的值
- 对于复杂常量的创建，useRef容易出现潜在的的性能隐患，但useCreation可以避免
```jsx
   // 每次重渲染，都会执行实例化 Subject 的过程，即便这个实例立刻就被扔掉了
   const a = useRef(new Subject()) 
   
   // 通过 factory 函数，可以避免性能隐患
   const b = useCreation(() => new Subject(), []) 
```

编写useCreation
- 第一点：先确定参数，useCreation 的参数与useMemo的一致，第一个参数是函数，第二个参数参数是可变的数组
- 第二点：我们的值要保存在 useRef中，这样可以将值缓存，从而减少无关的刷新
- 第三点：更新值的判断，怎么通过第二个参数来判断是否更新 useRef里的值。
```jsx
import { useRef } from 'react';
import type { DependencyList } from 'react';

const depsAreSame = (oldDeps: DependencyList, deps: DependencyList):boolean => {
  if(oldDeps === deps) return true
  
  for(let i = 0; i < oldDeps.length; i++) {
    // 判断两个值是否是同一个值
    if(!Object.is(oldDeps[i], deps[i])) return false
  }

  return true
}

const useCreation = <T>(fn:() => T, deps: DependencyList)=> {

  const { current } = useRef({ 
    deps,
    obj:  undefined as undefined | T ,
    initialized: false
  })

  if(current.initialized === false || !depsAreSame(current.deps, deps)) {
    current.deps = deps;
    current.obj = fn();
    current.initialized = true;
  }

  return current.obj as T
} 

export default useCreation;

```

验证

```jsx
import React, { useState } from 'react';
import { Button } from 'antd-mobile';
import { useCreation } from '@/components';

const Index: React.FC<any> = () => {
    const [_, setFlag] = useState<boolean>(false)

    const getNowData = () => {
    return Math.random()
    }

    const nowData = useCreation(() => getNowData(), []);

    return (
    <div style={{padding: 50}}>
        <div>正常的函数：{getNowData()}</div>
        <div>useCreation包裹后的：{nowData}</div>
        <Button color='primary' onClick={() => {setFlag(v => !v)}}> 渲染</Button>
    </div>
    )
}

export default Index;

```