##### 1、小程序之间页面如何传递参数，如何接收

###### 小程序页面之间

1. 跳转前页面

   ```js
   <navigator url="/pages/goods_list/index?cid=123&name=xiaowang" open-type="navigate">
   </navigator>
   
   ```

2. 跳转后页面

   ```js
   //接收，在goods_list页面中获取参数
   onLoad(options){
       console.log(options) //{cid:123,name:"xiaownag"}
   }
   每个页面onLoad生命周期默认可以接受一个参数对象
   ```

###### 小程序父传子组件

1. 在父组件中传递，

   ```js
   <search mydata="{{mydata}}"></search>
   ```

2. 子组件使用properties接收

   ```js
   propertise:{
       mydata:{type:Array,value:[]}
   }
   ```

###### 小程序子传父组件

1. 父组件自定义事件，传给子组件

   ```js
   <search bind事件名="{{父组件事件}}"></search>
   ```

2. 子组件触发事件

   ```js
   this.triggerEvent("父组件传递的事件名"，参数，是否冒泡)
   ```

3. 父组件事件接收，默认得到event对象，event.detail.属性

##### 2、你说一下小程序大概有哪些生命周期？

###### 应用的生命周期

```js
App({
  // 在生命周期过程中执行一次。
  onLaunch() {
    console.log("小程序初始化");
  },
  // 每次从后台切换进来
  onShow(){
    console.log("监听小程序启动");
  },
  // 每次切换到后台就执行一次
  onHide(){
    console.log("监听小程序切换到后台");
  },
  // 全局对象，每个页面都共享，类似于Vuex
  globalData: {
    userInfo: null
  }
})
```

###### 页面生命周期wxml

| 生命周期          | 参数 | 描述                                                         | 最低版本 |
| ----------------- | ---- | ------------------------------------------------------------ | -------- |
| data              | 无   | ⻚⾯的初始数据                                               | 1.6.3    |
| onLoad            | 无   | ⽣命周期回调—监听⻚⾯加载，在你程序没有重新启动的时候，不会重复执行 | 1.6.3    |
| onShow            | 无   | ⽣命周期回调—只要页面切换回来显示就会执行，至于这个页面挂载完毕没有。这个生命周期无法控制 | 1.6.3    |
| onReady           | 无   | ⽣命周期回调—监听⻚⾯初次渲染完成，可以操作节点              | 1.6.3    |
| onHide            | 无   | ⽣命周期回调—监听⻚⾯隐藏，代表离开了这个页面，tabbar切换，默认是不会销毁页面 | 1.6.3    |
| onUnload          |      | ⽣命周期回调—监听⻚⾯卸载销毁                                |          |
| onPullDownRefresh |      | 监听⽤⼾下拉动作                                             |          |
| onReachBottom     |      | ⻚⾯上拉触底事件的处理函数                                   |          |
| onShareAppMessage |      | ⽤⼾点击右上⻆转发                                           |          |
| onResize          |      | ⻚⾯尺⼨改变时触发，详⻅ 响应显⽰区域变化                    |          |
| onTabItemTap      |      | 当前是 tab ⻚时，点击 tab 时触发                             |          |

```js
goto(){
    console.log(123);
    // 路由跳转,redirectTo代表重定向
    wx.redirectTo({
      url: '/pages/logs/logs',
    });
  },
```

###### 组件生命周期

组件生命周期函数

| 生命周期 | 参数         | 描述                                     | 最低版本 |
| -------- | ------------ | ---------------------------------------- | -------- |
| created  | 无           | 在组件实例刚刚被创建时执行               | 1.6.3    |
| attached | 无           | 在组件实例进入页面节点树时执行           | 1.6.3    |
| ready    | 无           | 在组件在视图层布局完成后执行             | 1.6.3    |
| moved    | 无           | 在组件实例被移动到节点树另一个位置时执行 | 1.6.3    |
| detached | 无           | 在组件实例被从页面节点树移除时执行       | 1.6.3    |
| error    | Object Error | 每当组件方法抛出错误时执行               | 2.4.1    |

组件常用的三个生命周期created(),  ready(),  detached()

##### 3、uniapp中如何自定头部导航

“style”:{ "navigationStyle": "custom" }

##### 4、返回按钮如何设计

返回上级：uni.navigateBack({  (delta:1/2/3) })  (表示返回层数)

##### 5、Vue的生命周期有哪几个阶段（4分），分别有哪些钩子函数（6分）

---初始化阶段  挂载阶段 更新阶段 销毁阶段 
beforeCreate created
beforeMount mounted
beforeUpdate updated
beforeDestory destoryed

##### 6、vue如何定义过滤器

局部过滤器（组件内部）filters:{ 过滤器名:函数业务代码/直接写函数}
全局过滤器（main.js中）

##### 7、在vue中mvvm是什么？

一种设计模式/思想。主要目的是分离视图（View）和(数据)模型（Model）。
VM ViewModel驱动程序
优点：低耦合、可重用性、独立开发、可测试。

##### 8、v-model如何实现呢（10分）

  (1)动态value渲染data中的数据到指定标签位置

  (2)标签绑定input/change事件，将value值传递给data中的数据

```js
<input type="text" :value="user" @input="fun">
data(){
    return {user:''}
}
methods:{
    fun(event){this.user=evnet.target.value}
}
```

##### 9、vue中要实现页面主动销毁API

$destory

##### 10、vue如何实现路由懒加载

路由配置文件中：{path:``,component:()=>import(`./xxx/`)}

##### 11、菜单权限的实现思路或伪代码

(1)定义菜单的数据结构（树形结构。以及菜单没有children，二级菜单children）
(2)通过遍历菜单数据，判断是否有children，如果没有渲染el-menu（一级菜单）组件。如果有children，渲染el-submenu二级菜单。
(3)如果渲染二级菜单，里面还要继续遍历二级菜单里面一级菜单
(4)判断用户的userInfo的auth是否=跟菜单auth能够匹配，匹配就计算返回这个菜单。没有匹配不返回这个菜单。页面渲染计算结果

```js
list:[
	{id:,path,title,icon,auth:[1,2]}
]
<template v-for="item in list">
	<el-menu v-if="!item.children"></el-menu>
	<el-submenu v-else>
		<el-menu v-for="item2 in item.children"></el-menu>
	</el-submenu>
</template>
```

computed:{
	获取用户本地的权限信息。userInfo.auth
	通过遍历list:进行匹配userInfo的auth，返回新的菜单。
	list---auth和userInfo里面的auth是否包含 includes
}

##### 12、如何实现按钮级别的权限

(1)需要自定义一个指令，这个指令接受一个数组（哪些角色可以渲染这个按钮）
在自定义指令中，获取用户自己userInfo.auth,和指令绑定的数组进行匹配，匹配成功渲染按钮，匹配失败删除按钮

(2)<button v-auth="[1,2]">1和2这个两个角色可以拥有这个按钮

(3)

```js
auth:{
	inserted(el,val){
		if(!val.value.includes(userInfo.auth)){
			el.remove()
		}
	}
}
```

##### 13、vue如何自定义指令（5分/个）

全局：Vue.directives:(`指令名`,{ 

​			bind(){},inserted(){ }

})

局部：directives:{ `指令名`：}

##### 14、vue组件进行通信的方案有哪些？（2.5分/个）

1. 回调函数和props
2. $emit和props
3. $parent和 $children
4. $attrs$listeners

##### 15、vue开发过程中守卫，有哪些类型（2分）写出三个导航守卫

---全局导航守卫：
---路由独享守卫
---组件内路由守卫：

beforeEach：全局前置守卫  afterEach全局后置
beforeResolve：全局解析守卫
beforeEnter：路由前置守卫

##### 16、v-for和v-if能一起使用吗？为什么（面试题）

不能：同时使用，存在性能问题，底层解析代码时，v-for优先级更高，每次遍历都会执行判断，浪费资源。
解决：将v-if写在虚拟标签template上，且:key属性不能写在虚拟标签上

##### 17、v-show和v-if的区别

（1）v-if如果不满足条件，页面不会加载这个节点。v-show不满足条件，通过控制css样式display:none控制元素的显示和隐藏
一般如果某个元素频繁切换状态使用v-show
如果某个值状态切换很少推荐使用v-if

##### 18、vue响应式原理是什么？

Vue 的响应式是通过 Object.defineProperty 对数据进行劫持，并结合发布订阅者模式实现。 Vue 利用 Object.defineProperty 创建一个 observe 来劫持监听所有的属性，把这些属性全部转为 getter 和 setter。Vue 中每个组件实例都会对应一个 watcher 实例，它会在组件渲染的过程中把使用过的数据属性通过 getter 收集为依赖。之后当依赖项的 setter 触发时，会通知 watcher，从而使它关联的组件重新渲染。

##### 19、为什么循环的时候需要key值

key是虚拟DOM对象的标识，在更新显示时唯一的key值起着及其重要的作用。

当数据发生变化时，框架会根据新数据生成新的虚拟DOM，然后将新的虚拟DOM与旧的虚拟DOM的diff进行比较：

\1. 找到相同的key：若内容没变，直接使用之前的真实DOM；若内容变了，则生成新的真实DOM，并替换掉页面中旧的真实DOM

\2. 旧虚拟DOM中未找到与新虚拟DOM相同的key：创建新的真实DOM并渲染到页面

##### 20、computed和watch的区别？（3分/个，写出三个就10分）

（1）computed依赖于原数据，返回一个新的结果，拿到页面使用。watch依赖原数据，得到一个新的结果赋值给data的变量才能使用
（2）都有缓存，但机制不同。
（3）计算属性的值，默认情况下不能修改的，要修改值需要提供get和set方式。watch每次都可以得到修改之前的结果和修改之后的结果。
（4）计算属性一般不适合于复杂的业务，比如本地存储操作，异步请求。watch适合做这个工作。

```js
computed:{
	newData(){
		异步代码。
		return xxx
        }
    }
```

##### 21、什么SPA

single page application,单页面应用

##### 22、组件跳转后不销毁

keep-alive

##### 23、vuex五大核心对象和作用，（2分/个）

state--存放仓库数据的对象
getters---仓库里计算属性，只能支持简单的语法，不能用set和get
mutations--存放函数的模块，修改state的函数，唯一方案
actions---存放异步函数的模块。请求会放在里面统一处理
modules--存放子仓库的模块，模块化

##### 24、页面中如何状态机数据，有哪些方案？（5分/个）

--- 通过 $store.state来获取仓库的数据
---通过辅助函数来获取数据 import {mapState} from "vuex
computed:{
	...mapState(["变量"])
}

##### 25、vue防止样式穿透的理解？（原理和需要穿透）

（1）样式穿透问题为什么添加scoped就不会穿透？
原理:添加scoped后，在组件标签上新增data-v随机字符，css选择器在选中的时候，使用data-v-随机字符串来作为选择器的一部分

（2）指定某个属性穿透到子元素？
样式选择器前面加一个/deep/，，使用无效？？？

##### 26、Vue中路由跳转方式（3分/个）

router-link超链接来进行跳转
this.$router.push({path:""}) 按照路径来进行跳转
this.$router.push({name:"组件名字"}) 按照组件名字来进行跳转
this.$router.replace({path:""}) 按照路径来进行跳转

##### 27、插槽如何使用，分别有什么用（3分/个）？

匿名插槽（后备插槽）：<slot><slot> 没有给slot插槽增加名字。 没有给插槽标签增加名字
具名插槽：<slot name="slot名字"><slot>  <tempate v-slot:slot名字>  给插槽定义了name名字
作用域插槽：<slot :student="子组件数据">  <template v-slot="slotProps">  slotProps.student获取数据  给插槽增加了子组件动态数据

##### 28、Vue中父组件传递参数给子组件

父组件在组件标签上传数据，子组件props数组接收

##### 29、Vue中data为什么是一个函数，而不是对象（10分）

vue中的组件会被重复加载和使用。data是一个对象，对象地址同一个，造成在多个地方使用这个组件，data引用指向同一个对象， （5分）
一个组件里面data变化，使用到这个组件的data都会发生变化，造成性能浪费。数据混乱
每个组件在使用data都是函数。产生一个新的对象  5分

##### 30、Vue路由参数传递如何实现，Vue中父组件传递参数给子组件（3分/个

--- <router-link to="/home?id=1&name=xiaownag"></router-link>
--- <router-link :to="{path:'/home',query:{id:1}}"></router-link>
---this.$router.push({
	path:"",
	query:""
})
动态路由参数传递
{
path:"/home/:id",
}
path=/home/1
path=/home/2

##### 31、一般发送请求在哪个地方发送，哪个地方不适合发请求？（10分）

（1）created适合发请求

（2）beforeCreate  不适合发请求

beforeCreate代表组件初始化之前执行的钩子函数。
这个阶段Vue内部data都还没有初始化，内存里面还不存在data的内容。
这个时候发送异步请求，拿到结果，无法赋值给data。

##### 32、keep-alive的理解（属性和作用）（2分/个）

--- keepalive对组件进行缓存，被keepalive这个组件包裹的组件能够保存组件的状态（数据），切换离开这个组件，组件不会被销毁。
include：设置白名单，设置的组件的名字，定义了指定组件，组件就会被默认缓存。接受组件的名字、字符串、数组、正则
exclude：设置黑名单，指定组件的名字，定义指定组件，组件默认不会被缓存
max：设置最大缓存数量，超过这个数量，默认提出最不常用的组件。174、git代码提交发生了冲突如何解决

可以选择冲突部分，是保留现有还是之前，或者都保留下来

##### 33、Vue常用的指令指令有哪些？请写出来10个（1分/个）

--- v-text  v-html  v-show  v-if v-else v-else-if  v-model  v-bind v-on   v-for  v-pre  

##### 34、如何定义过滤器？

局部过滤器

在data同级的filter中定义，定义时类似于函数定义，函数名就是过滤器的名字

全局过滤器

directive中vue.filter（“过滤器名字”）

##### 35、vue中修饰符有哪些？

（1）v-model指令修饰符

lazy将默认input事件转化为change事件。

.trim去掉前后空格，

.number将文本框内容转化为数字类型

（2）事件修饰符

sotp,阻止事件传播，默认阻止冒泡。 也可以阻止捕获传播。

prevent阻止默认行为，

once执行一次

captrue冒泡改为捕获执行

.self只能是自身调用。

（3）按键修饰符

enter，tab、space、delete、esc、up、down、left、top

##### 35、登录授权拦截过程？？

```js
newAxios.interceptors.request.use((req) => {
    // console.log('请求返回:',req);
    //请求对象req
    //统一增加请求头Authorization或者token
    req.headers.Authorization = sessionStorage.getItem('token')
    //需要有返回值
    return req
}, (error) => { alert('请求失败，账户异常') })
```

##### 36、请求拦截器和响应拦截器

请求拦截器:newAxios.interceptors.request.use(参数一请求头箭头函数，参数二，异常函数)

响应拦截器:newAxios.interceptors.response.use(参数一请求头箭头函数，参数二，异常函数)

```js
const newAxios = axios.create({
    //属性自动拼接路由
    baseURL: 'http://47.98.128.191:3000',
    //超过指定时间主动断开请求
    timeout: 3000
})
// //拦截器，请求，响应
newAxios.interceptors.request.use((req) => {
    // console.log('请求返回:',req);
    //请求对象req
    //统一增加请求头Authorization或者token
    req.headers.Authorization = sessionStorage.getItem('token')
    //需要有返回值
    return req
}, (error) => { alert('请求失败，账户异常') })

//响应
newAxios.interceptors.response.use((resp) => {
    // console.log('响应返回:',resp)
    //结果返回页面（指定返回需要的内容，进行筛选）
    return resp.data
}, (error) => {
    //响应失败
    const response=error.response
    if (response) {
        // console.log(response.status)
        switch (response.status) {
            case 500:
                Message.error('网络异常')
                break;
            case 401://身份过期，404路劲不对
                //移除token回到登录
                Message.success('返回登录')
                sessionStorage.removeItem('token')
                location.href = '/login'
                break;
            case 404:
                alert('访问错误')
                break;
        }
    }
})
```





##### 1、Vuex五大核心对象有哪些？分别有什么作用

---- state--存放仓库数据的对象
---- getters---仓库里计算属性，只能支持简单的语法，不能用set和get
---- mutations--存放函数的模块，修改state的函数，唯一方案
---- actions---存放异步函数的模块。请求会放在里面统一处理
---- modules--存放子仓库的模块，模块化

##### 2、在页面上要获取状态机的数据，有哪些方案？

--- 通过 $store.state来获取仓库的数据
---通过辅助函数来获取数据 import {mapState} from "vuex
computed:{
	...mapState(["变量"])
}

##### 3、如何自定义指令，请说一下全局指令和局部指令的定义方式？

--- 全局指令：Vue.directive("指令名字",{
	bind(){}
	inserted(){}
})

---局部指令：
在组件内部
directives:{
	"指令名字":{
		bind(){}
		inserted(){}
	}
}

##### 4、ElementUI常用的组件有哪些？

----el-table\el-menu(el-submenu)\el-form(el-input\el-button)\

##### 5、前端菜单权限如何实现？按钮权限如何实现？说一下思路或者写伪代码？

##### 6、微信小程序rpx单位是如何换算的

小程序中rpx是相对单位，这个rpx换算跟屏幕大小没有关系，默认参考的750px作为换算标准
屏幕375px  换算过后 1px = 2rpx
iphone6 plus = 1px = 1.81rpx
750px / 屏幕宽度 得到的就是 1px = xrpx

##### 7、小程序全局样式如何设计？局部样式如何设计？遵循什么原则

在项目的app.wxss 中定义的样式都是全局样式  （4）
在pages中页面.wxss中定义的样式都是页面局部样式。（4）

就近原则。页面优先（2）





#####    8、说一下keepalive的作用？keepalive有哪些常用的属性，作用是什么

--- keepalive对组件进行缓存，被keepalive这个组件包裹的组件能够保存组件的状态（数据），切换离开这个组件，组件不会被销毁。
include：设置白名单，设置的组件的名字，定义了指定组件，组件就会被默认缓存。接受组件的名字、字符串、数组、正则
exclude：设置黑名单，指定组件的名字，定义指定组件，组件默认不会被缓存
max：设置最大缓存数量，超过这个数量，默认提出最不常用的组件。



##### 9、vue中进行路由跳转的方案有哪些？

--- router-link超链接来进行跳转
--- this.$router.push({path:""}) 按照路径来进行跳转
--- this.$router.push({name:"组件名字"}) 按照组件名字来进行跳转
--- this.$router.replace({path:""}) 按照路径来进行跳转

##### 10、vue中有哪些插槽，分别有什么用？

匿名插槽（后备插槽）：<slot><slot> 没有给slot插槽增加名字。 没有给插槽标签增加名字
具名插槽：<slot name="slot名字"><slot>  <tempate v-slot:slot名字>  给插槽定义了name名字
作用域插槽：<slot :student="子组件数据">  <template v-slot="slotProps">  slotProps.student获取数据  给插槽增加了子组件动态数据

##### 11、守卫有哪些分类？写出三个导航守卫。

---全局导航守卫：
---路由独享守卫
---组件内路由守卫：

beforeEach：全局前置守卫  afterEach全局后置
beforeResolve：全局解析守卫
beforeEnter：路由前置守卫

##### 12、路由如何传递参数，请写出三个方案

--- <router-link to="/home?id=1&name=xiaownag"></router-link>
--- <router-link :to="{path:'/home',query:{id:1}}"></router-link>
---this.$router.push({
	path:"",
	query:""
})
动态路由参数传递
{
path:"/home/:id",
}
path=/home/1
path=/home/2

##### 13、vue中哪个生命周期函数不适合发送异步请求？说一下原因。

beforeCreate

beforeCreate代表组件初始化之前执行的钩子函数。
这个阶段Vue内部data都还没有初始化，内存里面还不存在data的内容。
这个时候发送异步请求，拿到结果，无法赋值给data。

##### 14、vue组件中，data为什么是函数，而不是对象？

vue中的组件会被重复加载和使用。data是一个对象，对象地址同一个，造成在多个地方使用这个组件，data引用指向同一个对象
一个组件里面data变化，使用到这个组件的data都会发生变化，造成性能浪费。数据混乱
每个组件在使用data都是函数。产生一个新的对象 





##### 15、Vue常用的指令指令有哪些？

--- v-text  v-html  v-show  v-if v-else v-else-if  v-model  v-bind v-on   v-for  v-pre  

##### 16、Vue的生命周期有哪几个阶段，分别有哪些钩子函数

---初始化阶段  挂载阶段 更新阶段 销毁阶段 
beforeCreate created
beforeMount mounted
beforeUpdate updated
beforeDestory destoryed

##### 17、父子组件进行通信的方案有几种。

1. 回调函数和props
2. $emit和props
3. $parent和 $children
4. $attrs$listeners

##### 18、计算属性和watch有什么区别？

-- 计算属性依赖于原数据，返回一个新的结果，拿到页面使用。watch依赖原数据，得到一个新的结果赋值给data的变量才能使用
-- 计算属性有缓存，watch也可以缓存。机制优点不一致
-- 计算属性的值，默认情况下不能修改的，要修改值需要提供get和set方式。watch每次都可以得到修改之前的结果和修改之后的结果。
-- 计算属性一般不适合于复杂的业务，比如本地存储操作，异步请求。watch适合做这个工作。

```js
computed:{
	newData(){
		异步代码。
		return xxx
		}
}
```

##### 19、v-model底层实现

```js
<input type="text" :value="username" @input="getValue">  @change
data(){
	return {
		username:""
	}
}
methods:{
	getValue(event){
		this.username  = event.target.value
	}
}
```





##### 20、vue是怎么通过改变数据而更新页面的？

加载组件时：将组件放到内存中，vue会读取template里的所有内容，查找标签中是否有mustache（通过正则表达式来匹配），将模板进行字符串替换。
数据变更时：检测数据变化更新，vue启动数据劫持程序，调用执行render方法，data最新的数据拿到页面上去渲染。

##### 21、props特性？

（1）语法：export default｛ props：[ ] ｝接收以后就和data一样的方法调用。
（2）外部传递数据：
（3）props验证：传递数据为空或者有误，报错，优化，数组改对象，指定数据类型，类型大写，同变量允许接受多个类型，用数组。，没有传入参数改为对象，type为类型，default默认数据

##### 22、a标签和router-link的区别？

a标签有刷新，router-link底层是被取消刷新（默认行为）的链接，必须加to属性，否则报错，跳转的地址是配置好的路由地址，被webpack打包后生成的也是a标签



69、想要把data中的数据 渲染到页面。除了mastache语法，还用什么方案？

71、created生命周期函数中能不能获取到节点

不能，在monut之后可以

93、vue:组件的调用顺序都是先父后子,渲染完成的顺序是先子后父。 组件的销毁操作是先父后子，销毁完成的顺序是先子后父。加载渲染过程 子组件在父组件的beforeMount和Mounted之间渲染