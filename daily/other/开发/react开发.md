##### 1.React生命周期及作用？

（1）创建阶段：

- constructor，通过super获取props，初始化state，或者在this上挂载方法。
- getDerivedStateFromProps，静态方法，因此不能访问到组件的实例
- render
- componentDidMount，挂载完成

（2） 更新阶段

- getDerivedStateFromProps
- shouldComponentUpdate，内部数据或外部数据发生变化
- render
- getSnapshotBeforeUpdate，render后执行，执行render时,DOM元素还没有被更新
- componentDidUpdate

 （3）卸载阶段

- componentWillUnmount，组件即将销毁,



新版的生命周期减少了以下三种方法：

- componentWillMount
- componentWillReceiveProps
- componentWillUpdate

新增两个生命周期函数：

- getDerivedStateFromProps
- getSnapshotBeforeUpdate



##### 2、React事件机制是什么

HTML代码中

```js
<div onclick="事件函数"></div>
```

直接将事件绑定在节点上面。

React使用JSX来进行开发

```js
<div onClick={this.add}></div>
```

事件流程：

![image-20220621142347923](https://woniumd.oss-cn-hangzhou.aliyuncs.com/web/xuchaobo/20220621142348.png)

核心点：

1. HTML页面如果绑定事件，是直接在DOM原始身上绑定你的事件。
2. JSX并没有将事件直接绑定真实DOM节点身上。通过事件代理的方式，将事件传播document文档
3. document对象也不会处理事件，JSX提供了合成事件层，所有的事件统计在交给React合成事件层来处理
4. 判断你当前这个事件要执行的函数是哪一个，去栈（内存）寻找要执行事件函数event传递给当前这个函数

优点：

1. 合成事件抹平了你们浏览器之间的差异。解决了浏览器兼容问题，所有事件都是合成事件，不用太考虑某些历览器的兼容问题。

2. 统一处理事件，能够解决性能问题。传统的代码来实现事件绑定，会出现很多事件函数，或者绑定很多事件监听器。

3. React这种实现事件机制，统一管理了所有事件，当你组件销毁的时候，我们可以统一处理当前这个组件中所有的事件。

   ```js
    <div id="odiv"></div>
    <script>
        const odiv = document.getElementById("odiv")
        odiv.onclick = function(){
        }
        odiv.onclick = null
    </script>
   ```

##### 3、什么是HOC，常用HOC？

HOC:高阶组件。

高阶组件实际上就是一种高阶函数，一般用于对组件进行包装，内部处理你传递进来组件，返回一个功能加强的组件

withRouter：非路由组件能够实现路由跳转。

connect：适用于在类组件中获取状态机的数据

Memo:用于函数组件，对其进行包装，包裹组件内容没有发生变化的时候，不要重复执行渲染动作

AuthRouter：对用户访问路径进行鉴权。

##### 3、类组件和函数组件区别？

- 类组件基于面向对象开发，函数组件基于函数式编程开发。函数组件使用更加方便，没有类定义，没有继承，组件更加干净
- 类组件中this的方式来进行相互数据调用，函数调用，函数组件没有this，不存在引用混乱
- 类组件提供了完整的内部状态、声明周期等等，函数组件并没有，需要结束React16.8这个版本后更新hook来完成这些功能
- 通过类组件的方式来进行开发，每一次在使用的过程中暴露的类。需要实例化这个类，调用里面render方法，函数组件，直接返回了JSX节点，引用了这个函数，直接可以获取JSX内容

##### 4、React统一处理请求异常？统一处理页面异常信息？

请求异常：发送axios请求的会遇到的问题。404、500 401等，封装了`请求拦截器`和`响应拦截器`处理后端异步的状态码，

页面异常：封装了CatchComp组件，包裹App.jsx组件，在Catch组件中使用ComponentDidCatch来得到异步的信息。统一在这个组件来决定页面加载哪个信息。

##### 5、React中获取表单数据？

- 受控组件
- 非受控组件  React.forwardRef

##### 6、如何减少不必要的render渲染

7、useMemo、useCallback区别？React.forwardRef有什么用

8、React函数组件和类组件中，如何立即得到更新后state数据

9、React中封装一个表格，给表格每行添加一个颜色，如何实现表格的每隔三行，表格颜色一样。



