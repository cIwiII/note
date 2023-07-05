

## 29.Element-UI

由饿了么团队研发开源出来的。可以快速的搭建前端项目。一般UI组件库适合于中后台系统。

官方地址：https://element.eleme.cn/#/zh-CN/component/installation

### 搭建环境

(1)vue脚手架提供了安装elementui的命令

```js
vue add element
```

(2)安装过程中提示采用什么方式来安装：

```js
✔  Successfully installed plugin: vue-cli-plugin-element
? How do you want to import Element? (Use arrow keys)
❯ Fully import 
  Import on demand
```

`Fully import`: 代表完整引入一次，任何组件中都可以直接使用

`Import on demand`:代表按需引入，后续开发过程中，用哪个组件，需要手动引入一次。

(3)配置scss，默认elementui底层采用scss来编程，输入Y即可

```js
? Do you wish to overwrite Element's SCSS variables? (y/N)
```

(4)选择区域，语言，默认选择zh-CN

```js
? Choose the locale you want to load (Use arrow keys)
❯ zh-CN 
  zh-TW 
  af-ZA 
  ar 
  bg 
  ca 
  cs-CZ
```

node-sass镜像配置

```js
npm i node-sass --sass_binary_site=https://npm.taobao.org/mirrors/node-sass/
```

(5)启动项目sass报错

启动项目过程中日志里面抛出sass的

```js
margin-bottom:#{$--tooltip-arrow-size/3}
```

sass版本的问题。默认项目中sass版本 1.2x，需要升级以下sass的版本

```js
npm i sass@1.32.13
```

重新启动

### 表单组件

表单验证规则，rule里面写的变量就是双向绑定的变量。

```js
rules: {
    name: [
        {pattern:/[a-zA-Z0-9]{6,}/,message:"必须输入6位字母数字"}
    ],
    password:[
            {
                required: true,
                message: "必须输入密码",
                trigger: "blur",
            },
            {
                min: 6,
                max: 10,
                message: "长度在 6 到 10 个字符",
                trigger: "blur",
            },
     ]
},
```

规则定义

```js
// 官方常用验证规范
min: 6,max: 10,required: true,
    
// 自定义正则表达式来验证
{pattern:/[a-zA-Z0-9]{6,}/,message:"必须输入6位字母数字"}
```

## 30.Vuex状态机

状态机：公共集中数据管理仓库，存放数据的仓库，状态指的就是数据

vuex：vue提供的一种状态机, 专门提供给vuejs来进行状态管理的方案

![image-20230705204927328](C:\Users\LENOVO\AppData\Roaming\Typora\typora-user-images\image-20230705204927328.png)



### 状态机环境

创建项目时, 添加了vuex选项,创建src/store/index.js 文件

(1)index.js中的代码就是仓库中的业务

```js
// src/store/index.js
import Vue from 'vue'
import Vuex from 'vuex'
// 挂载插件
Vue.use(Vuex)
export default new Vuex.Store({
  state: { },
  getters:{ },
  mutations: { },
  actions: { },
  modules: { }
})
```

(2) main.js 全局挂载，this调用仓库

```js
// main.js 全局挂载
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
Vue.config.productionTip = false
Vue.prototype.$http = $http
// store仓库注入到Vue中，以后任何一个组件都可以直接调用仓库
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
```



### 核心对象(5)

`state`:存放仓库数据

`getters`:相当于组件中计算属性

`mutations`: 存放的函数,相当于组件中methods,修改仓库数据的唯一方案

`actions`: 存放的基本都是异步函数,所有请求都可以交给actions来管理

`modules`:模块化, index.js称为主仓库，拆分后的子仓库模块放这里



**一.state对象** ：存放各种数据类型，state相互之间的数据不能访问，需要依赖数据使用 getters 来执行计算

```js
state: {
    username:"xiaowang",
    newName:username //错误的案列，不能相互访问
    users:[
      {id:1,name:"xiaowang"},
    ],
  },
```

**二.getters计算属性** ：所有计算属性，默认会接受state，不能使用this

```js
export default new Vuex.Store({
  getters:{
    fullName(state){
      return state.username + "8"
    }
  }
})
```

**三. mutations存放函数** ：

mutations中每个函数默认接受state仓库数据，存放同步函数，一般不写异步函数。修改仓库数据，修改state数据的唯一方案就是通过mutations的commit()来修改, mutations里面函数,只能接受外部`一个参数`. 

```js
export default new Vuex.Store({
  mutations: {
    increment(state){ state.count++ },
    decrement(state){ state.count-- }
  }
})
```

**四.actions异步函数** ：用于管理异步请求，接收context整个仓库， context.state 才能获取到仓库数据。第二个参数：用户自定义参数。

页面执行actions里面函数需要调用dispatch。

```js
actions: {
    asyncChangeCount(context,val){
      // context表示整个仓库 context.state
      console.log(val);
      setTimeout(() => {
        context.state.count+=val
      }, 2000);
    }
  },
      
// 页面使用
this.$store.dispatch("asyncChangeCount",10)
```

**五.modules子仓库** 

(1)创建 src/store/modules/**.js 文件模块，如user.js子仓库模块，子仓库不需要 new Vuex.Store(),子仓库只是将主仓库拆分出来了.不能重复创建

```js
// src/store/modules/user.js
export default {
    // 开启命名空间，默认会将文件名字作为仓库名字, 
    // 命名空间作用就是隔离数据
    namespaced:true,
    state:{
        tableData:[
            {
                id: 1,
                name: "小王",
                age: 40,
                dept: "研发部",
                bir: "2000-09-08",
                time: "2019-01-09",
                edit:false
            },
        ]
    },
    mutations:{
    },
    actions:{
    }
}
```

(2)在主仓库index.js文件: 

主仓库可以有自己的state数据,也可以不用声明仓库数据

```js
// src/store/index.js
import userModule from "./modules/user"
import classesModule from "./modules/classes"
export default new Vuex.Store({
  modules: {
    user,
    classes
  }
})
```

(3)页面中使用子仓库数据

`createNamespacedHelpers(storeName)`：使用哪一个子仓库

```js
<script>
import {createNamespacedHelpers} from "vuex"
const {mapState} = createNamespacedHelpers("user")
export default {
    computed:{
       ...mapUserState(["tableData"]),
    }
}
</script>
```



(4)页面引入多个模块化子仓库：需要 mapState 函数设置别名

```js
<script>
import {createNamespacedHelpers} from "vuex"
const {mapState:mapUserState,mapMutations:mapUserMutations} = createNamespacedHelpers("user")
const {mapState:mapClassesState,mapMutations:mapClassesMutations} = createNamespacedHelpers("classes")
export default {
    methods:{
        ...mapUserMutations(["changeTableData"]),
    },
    computed:{
        ...mapUserState(["tableData"]),
        ...mapClassesState(["classesData"])
    }
};
</script>
```



### $store来操作仓库

#### 获取仓库数据

main.js中store仓库注入到Vue对象上, 再组件this中默认多一个$store仓库对象

可以获取仓库数据, 也可以修改仓库

```js
// src/store/index.js
state: {
    username:"xiaowang",
    count:10
  },
  getters:{
    // 所有计算属性，都默认会接受state
    fullName(state){
      return state.username + "8"
    }
  },
```

组件中使用：获取state通过`$store.state.属性`

```js
<template>
<div>// html中，不需要this
    <p>{{$store.state.count}}</p>
    <p>{{$store.getters.fullName}}</p>
</div>
</template>
<script>
export default {
  created(){
    console.log(this.$store.state.count);
    console.log(this.$store.getters.fullName);
  }
}
</script>
```

#### 修改仓库数据

修改仓库数据的唯一方案,通过commit('名字', 参数)调用mutations里面函数,

```js
import Vue from 'vue'
import Vuex from 'vuex'
// 挂载插件
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    username:"xiaowang",
    count:10
  },
  getters:{
    // 所有计算属性，都默认会接受state
    fullName(state){
      return state.username + "8"
    }
  },
  mutations: {
    // mutations里面每个函数都可以默认接受state仓库数据
    /*increment(state){
      state.count++
    },
    decrement(state){
      state.count--
    },*/
    increment(state,val){
      console.log(val2);
      state.count+=val
    },
    decrement(state,val){
      state.count-=val
    }
  }
})
```

页面通过commit来调用mutations函数

```js
 methods:{
    incrementData(){
     this.$store.commit("increment",8);// 传递参数
    },
    decrmentData(){
      this.$store.commit("decrement")
    }
  }
```

actions里面发送异步请求获取数据

```js
import $http from "../apis/http"
actions: {
    async asyncFindClasses(context){
      // 发送异步请求
      const res = await $http.classes.findAllClasses()
      // context.state.classesData = res.data.rows//不是记录日志，不规范
      context.commit("changeClassesData",res.data.rows)
    }
  },
```

修改state的数据,可以通过context.state来进行修改,这样直接操作state并不会记录日志,不规范的数据流.

```js
context.commit("mutations函数",参数)
```

实现修改数据,记录日志,完善数据流

### 辅助函数来操作仓库

简化对仓库的操作，Vuex底层封装辅助函数可以更快获取数据.

Vuex提供了以下几个辅助函数.

1. mapState()用于获取仓库state数据，computed中使用
2. mapGetters() 用于获取仓库getters属性，computed中使用
3. mapMutations()获取仓库中mutations的函数，methods中使用
4. mapActions()获取仓库中actions的函数，methods中使用,都是函数

(1)如何在你的页面中获取辅助函数

```
import {mapState,mapMutations,mapActions,mapGetters} from "vuex"
```

#### mapState

```js
<template>
    <div>
        <p>{{count}}</p>
        <p>{{newCount}}</p>
    </div>
</template>
<script>
import {mapState} from "vuex"
export default {
    computed:{
      ...mapState(["logs","count"]),
      newCount(){
        return this.count+10
      }
    }
};
</script>
```

vuex会将mapState里面传递数组变量,变成计算属性的语法来使用.

```js
computed:{    ...mapState(["logs"])}
// 底层转化过后的结果为
computed:{    logs(){        return $store.state.logs    }}
```

#### mapGetters

获取仓库中getters数据.在页面中引入这个辅助函数

```js
<template>// 页面中可以直接使用
    <p>{{fullName}}</p>
</template>

import {mapGetters} from "vuex"
computed:{
      ...mapState(["logs","count"]),
      ...mapGetters(["fullName"]),
      newCount(){
        return this.count+10
      }
},
```

#### mapMutations

用于获取mutations里面的函数

```js
import {mapMutations} from "vuex"
methods: {
        ...mapMutations(["deleteLogs"]),
        // deleteLogs(){}
        deleteLog() {
          this.deleteLogs(123)
        },
    },
```

#### mapActions

获取异步函数,执行异步任务

```js
<template>
<button @click="asyncChangeCount(12)">点击异步修改count</button>
</template>

import {mapActions} from "vuex"
methods: {
        ...mapMutations(["deleteLogs"]),
        ...mapActions(["asyncChangeCount"]),
        deleteLog() {
          this.deleteLogs(123)
        },
    },
```



## Vue扩展

### 一、响应式原理

概念：当数据发生变化，页面会自动进行更新

- 通过 `Object.definedProperty` 来将数据转化成以 `get/set` 的方式进行取值。

- 主要通过数据劫持 Object.definedProperty 观察者模式（设计模式） diff算法 虚拟dom
- 2、响应式数据背后对应了哪些元素？

建立 状态 - 元素 之间的关联关系。在 Vue 中，它把以上提到的这个映射关系的处理，称之为 解析过程。

Vue 实际上是将我们的视图当成一个 字符串 在进行分析：

2.1 抽象语法树 mustache.js

2.2 创建渲染函数：渲染产生 节点

2.3 通过渲染函数 创建 虚拟节点 ：虚拟节点就是对真实节点的一个描述对象，它就是一个普通的 JavaScript 对象。

snabbdom.js 创建和维护 虚拟节点

3、真正的更新：通过 虚拟节点 将 状态更新到真实节点

异步更新队列：

在一个方法里面（一次事务，做一件事情的先后顺序）会多次修改 状态 值。对页面来说，状态的修改过程是完全没有必要体现在页面上。页面只关心最终的状态值。

vue 将页面更新的过程，放到一个 异步方法里面，当修改状态的事务完成之后，进入到更新页面的方法。



### 二、检测数据变化

问题：修改数据，页面没有发生变化

#### 对象

**现象一：在定义数据的时候，没有进行初始化操作。** 

```js
data() {    
    return {  // 没有对 obj 进行初始化操作    
        obj: {},    
    };
},    
methods: {        
     onTap() { // 当点击的时候，给 obj 赋值 ，页面并没有触发更新
          this.obj.a = 10;            
          this.obj.b = 20;       
      },    
},
```

**解决方案：** 

```js
data() {    // 1、常见方法，显性定义所有属性
    return { obj: {a: '',b: '',},    };  
},
onTap() {   // 2、借助与 `Object.assign` 方法来做数据的合并
    this.obj = Object.assign({}, this.obj, { a: 1, b: 2 });
},

// 3、通过 `...` 运算符
this.obj = {    ...this.obj,    a: 1,    b: 2,};
```

以下操作不会触发响应式：

```js
onTap() {    // this.obj 引用地址未发生改变
    this.obj = Object.assign(this.obj, { a: 1, b: 2 });   
    console.log(this.obj);
},
```

现象二：删除某个对象的属性：

```js
data() {    
    return {      obj: {        a: 10,        b: 20,      },    };
}, 
methods: {    
    onTap() {     
        console.log('in');      this.obj.a = 10;      this.obj.b = 20;    
    },    
    onDelete() {      
        delete this.obj.a;   delete this.obj.b;  console.log(this.obj);    
    },  
},
this.$set(this.obj, 'a', 1);
this.$set(this.obj, 'b', 2);
```

#### 数组

现象一：通过 length 操作数据，页面不会更新

```js
data() {    
    return {        arr: [1, 2, 3, 4],    };
},
empty() {    // 直接操作 Length 页面是不会更新的。    
    this.arr.length = 0;
},
```

解决方案：

```js
// 方案一：直接将一个新的空数组赋值给 响应式 
arrthis.arr = [];
// 方案二：可以使用 数组提供的一些方法来进行控制
this.arr.splice(0);
```

现象二：通过数组的索引修改数据：

```js
empty() {    // 通过数组的索引操作，页面不会更新    
    this.arr[0] = 'hello ';
},
empty() {    // 修改索引对应对象的属性值，会触发响应式。
    this.arr[1].name = '李四';
},
// 响应式
this.arr[1].name = '李四';
// 非响应式
this.arr[1] = {    id: 1,    name: '李四',};
```

解决方案：使用 `$set` 方法来更新数据

```js
this.$set(this.arr, 1, {    id: 1,    name: '李四',});
this.arr.splice(1, 1, {    id: 1,    name: '李四',});
```

### 二、分析Vue对象结构

代码结构

```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="./node_modules/vue/dist/vue.min.js"></script>
</head>
<body>
    <div id="app">{{message}}</div>
    <script>
        // 组件必须是函数式。Vue对象里面两者都可以
        const app = new Vue({
            el: '#app',
            data(){
                return {
                    message:"woniu"
                }
            },
            methods:{
                show(){
                    console.log();
                }
            }
        })
        console.log(app);
    </script>
</body>
</html>
```

注意：

data中定义的数据默认会放在app对象身上。相当于this变量引用的对象身上

$data:表现当前data中的数据

$el: 挂载的节点

$listeners:自定义的事件

### 三、数据劫持

```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        const user = {
            username:"xiaowang",
            password:"123"
        }
        let username = user.username;
        //  Object对象是所有JS对象的父类（基类）。
        Object.defineProperty(user,"username",{
            // 存取器
            get(){
                console.log("get");
                return username
            },
            set(val){
                console.log("set",val);
                username = val
            }
        })
        console.log(user.username);
    </script>
</body>
</html>
```

Object.defineProperty这个函数需要接受三个参数

第一个参数：监控的对象

第二个参数：监控的属性

第三个参数：提供一个对象，getters和setters方法

Vue中就说采用这个API来实现对data数据的响应式变化

针对所有的属性完成数据劫持

```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        const user = {
            username: "xiaowang",
            password: "123"
        }
        // 封装一个函数，可以持续的对属性进行劫持
        function defineReactive(data,key,value) {
            Object.defineProperty(data, key, {
                // 存取器
                get() {
                    console.log("get");
                    return value
                },
                set(val) {
                    console.log("set", val);
                    value = val
                }
            })
        }
        // 获取到对象所有的key
        Object.keys(user).forEach(key=>{
            defineReactive(user,key,user[key])
        })
        console.log(user.username);
    </script>
</body>
</html>
```

### 四、简化版本的Vue框架

```js
// Vue提供提供了一个class，专门做数据劫持
class Observe {
    constructor(data) {
        this.data = data
        this.walk()
    }
    // 封装一个函数，可以持续的对属性进行劫持
    defineReactive(data, key, value) {
        Object.defineProperty(data, key, {
            // 存取器
            get() {
                console.log("get");
                return value
            },
            set(val) {
                console.log("set", val);
                value = val
            }
        })
    }
    walk() {
        Object.keys(this.data).forEach(key => {
            this.defineReactive(this.data, key, this.data[key])
        })
    }
}
// 创建Vue实例
class Vue{
    constructor(options){
        this.$options = options
        this.$data = options.data
        this.$el = options.el
        // 对$data中的数据劫持
        new Observe(this.$data)
        // 将$data里数据挂载this身上
        this.proxy()
    }
    // 提供了一个proxy代理方法，将data中的数据放在Vue实例上面
    // Object.keys(this.$data).forEach(key=>{ this[key] = this.$data[key] })
    proxy(){
        Object.keys(this.$data).forEach(key=>{
            Object.defineProperty(this,key,{
                get(){
                    return this.$data[key]
                },
                set(val){
                    this.$data[key] = val
                }
            })
        })
    }
}
```

可以完成创建Vue对象，传递数据进行劫持

```js
const app = new Vue({
    el:"app",
    data:{
        username:"xiaowang"
    }
})
app.username = "xiaofeifei"
```

### 五、渲染模板

我们需要在页面上设计一个div有一个属性id=app

```js
<div id="app"></div>
```

创建Compiler类来完成页面渲染

```js
// Vue提供提供了一个class，专门做数据劫持
class Observe {
    constructor(data) {
        this.data = data
        this.walk()
    }
    // 封装一个函数，可以持续的对属性进行劫持
    defineReactive(data, key, value) {
        Object.defineProperty(data, key, {
            // 存取器
            get() {
                console.log("get");
                return value
            },
            set(val) {
                console.log("set", val);
                value = val
            }
        })
    }
    walk() {
        Object.keys(this.data).forEach(key => {
            this.defineReactive(this.data, key, this.data[key])
        })
    }
}
// 创建Vue实例
class Vue{
    constructor(options){
        this.$options = options
        this.$data = options.data
        this.$el = options.el
        // 对$data中的数据劫持
        new Observe(this.$data)
        // 将$data里数据挂载this身上
        this.proxy()
        // 将data的数据渲染到页面
        new Compiler(this.$el,this.$data)
    }
    // 提供了一个proxy代理方法，将data中的数据放在Vue实例上面
    // Object.keys(this.$data).forEach(key=>{ this[key] = this.$data[key] })
    proxy(){
        Object.keys(this.$data).forEach(key=>{
            Object.defineProperty(this,key,{
                get(){
                    return this.$data[key]
                },
                set(val){
                    this.$data[key] = val
                }
            })
        })
    }
}
// 编译模板
class Compiler{
    constructor(el,data){
        // 操作具体的节点，我们document.querySelector获取节点
        this.$el = document.querySelector(el)
        this.$data = data
        this.compiler()
    }
    // 将data的数据渲染到el指定的节点身上
    compiler(){
        [...this.$el.children].forEach(item=>{
            if(/\{\{([a-zA-Z]+)\}\}/.test(item.innerText)){
                // 将匹配到的内容替换为data中的数据
                const key = RegExp.$1.trim()
                console.log(this.$data[key]);
                item.innerText = this.$data[key]
            }
        })
    }
}
```

### 六、观察者模式

设计模式：前人开发过程中总结出的一些经验（一些代码结构），按照这个代码结构来写代码，就可以实现你们想要的效果。具体的某个设计模式。代码结构上的理念

观察者模式（发布订阅模式）：订阅者、发布者

Vue中就引入这种设计模式来实现响应式通知

Watcher、Dep

```js
// 订阅者
class Watcher{
    constructor(callback){
        Dep.target = this
        this.callback = callback
        this.update()
        Dep.target = null
    }
    update(){
        this.callback()
    }
}
// 发布时
class Dep{
    constructor(){
        this.subs = []
    }
    add(watcher){
        this.subs.push(watcher)
    }
    notify(){
        this.subs.forEach(watcher=>{
            watcher.update()
        })
    }
}
```

依赖收集

```js
// Vue提供提供了一个class，专门做数据劫持
class Observe {
    constructor(data) {
        this.data = data
        this.walk()
    }
    // 封装一个函数，可以持续的对属性进行劫持
    defineReactive(data, key, value) {
        const dep = new Dep()
        Object.defineProperty(data, key, {
            // 存取器
            get() {
                console.log("get");
                // 得到Watcher
                // 依赖收集：在get方法里判断属性是页面在使用还是console.log
                // 页面使用，将Wacther放在dep里面
                if(Dep.target){
                    dep.add(Dep.target)
                }
                return value
            },
            set(val) {
                console.log("set", val);
                value = val
                // 让dep通过所有wacther更新页面
                dep.notify()
            }
        })
    }
    walk() {
        Object.keys(this.data).forEach(key => {
            this.defineReactive(this.data, key, this.data[key])
        })
    }
}
```

流程图：

![image-20230705204950234](C:\Users\LENOVO\AppData\Roaming\Typora\typora-user-images\image-20230705204950234.png)





## 【完】

