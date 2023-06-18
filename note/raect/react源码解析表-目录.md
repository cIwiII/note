
raect 源码

- 组件构造、获取调用栈（包文件位置：react/cjs/reactdevelopment.js）   
- 源码博客主页 https://blog.csdn.net/xiaohulidashabi
- 当前文档内容https://blog.csdn.net/xiaohulidashabi/article/details/106896357

1. 组件构造： component和PureComponent定义
    - 定义了组件的构造函数Component,然后定义了一系列IDE原型方法，比如setState、forceUpdate等等，然后针对一些已经废弃的api,给Component的原型添加get方法，以便在用户调用的时候抛错。接下来定义了一个过渡组件ComponentDummy,其原型为Component的原型，其实例为PureComponent的原型

2. createRet和组件调用堆栈
    - 定义了createRef的实现，其次定义了ReactCurrentDispatcher，react16.8.3版本后新增的hooks系列api,其机制类似于redux中的dispatcher，这里的ReactCurrentDispatcher在后续hooks api的定义中也会用到。接下来是 describeComponentFrame方法，其核心是获得文件源的出处（主要是文件名和代码行数），接下来定义了获得组件父组件的组件名的方法getWrappedName
    - describeComponentFrame  描述组件的引用位置 18.0已删除
    - refineResolvedLazyComponent 细化解析惰性组件 18.0已删除
    - getWrappedName：return的逻辑被拆分，易于理解

3. 获取调用栈：获取组件名称与react debug模式下当前组件调用堆栈详情
    - getComponentName根据传入的react 元素（Element）的类型来获得组件的名称，通过判断type和type上的$$typeof的值来判断返回的结果。$$typeof是react Element内部定义的一个变量，负责记录元素的类型，后续的代码中会有提及。setCurrentlyValidatingElement将在后续的一些validate的方法中被反复调用，设置当前正在校验的元素，以便后续输出抛错时的调用栈。
    - getContextName为新增。
    - getComponentName 更名为 getComponentNameFromType
    - warningWithoutStack$1 警告更新为error（）方法


4.内部控制构件的定义、react元素属性保留字与hasValidXXX方法
    - react内部定义了一个对象ReactSharedInternals，其内部包含了一些方法获取全局公用的一些方法，比如ReactCurrentDispatcher（hooks相关功能）等，接下来又定义了带有堆栈信息的warning方法，其实就是getStackAddendum的结果拼装warningWithoutStack$1（目前改为error）。接下来通过一个常量定义了react Element（元素）属性的保留字：key,ref,__self和__source。接下来定义了验证是否有可用key或ref的方法。（文档line-740）





