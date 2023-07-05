

## uniapp01-环境搭建

uniapp是一个跨端开发框架。

一套代码可以在多端运行：编译为小程序、直接小程序中运行。还可以编译App\ 还可以直接在H5端运行

很多时候会使用uniapp这个框架来开发小程序。

### 一、基本介绍

地址：https://uniapp.dcloud.io/

uniapp特点：

1. uniapp这个框架核心的语法是vuejs的语法。里面还包含了跟小程序相同很多组件。
2. uniapp底层用到weex框架，这个框架早期是vue推出的移动端框架。
3. 一套代码可以运行到很多端（微信小程序、APP、H5端）
4. 生态比较完善，有很多完善的UI组件库支持我们做移动端开发

使用uniapp来开发移动端或者小程序比较方便。尤其vue工程师可以无缝切换过来

微信小程序原生开发，目前在企业中也有，还有很大一部分企业选中用uniapp来开发小程序

uniapp也是小程序的框架。最后将uniapp代码自动编译为小程序代码结构

hBuilderX工具也是前端主流的开发者工具。这个工具已经将各种编译环境配置完善。

写好代码，立即可以将代码编译到小程序中运行。也可以直接连接android手机、模拟器进行运行

### 二、项目创建

借助于HBuilderX工具创建一个uniapp项目

创建项目选中uniapp项目，选中vue2的版本

![image-20230705205825320](C:\Users\LENOVO\AppData\Roaming\Typora\typora-user-images\image-20230705205825320.png)

项目结构：

pages存放页面

static：存放项目静态资源文件

App.vue项目跟组件

main.js项目入口文件

pages.json这个项目的配置项，全局配置

uni.scss全局样式文件

项目中采用vuejs的语法，但是组件和api都是移动端（移动端都是view text代表组件）的这种语法。

创建完成项目后，你可以可以进行编译，运行到指定的平台

![image-20230705205838332](C:\Users\LENOVO\AppData\Roaming\Typora\typora-user-images\image-20230705205838332.png)

运行到浏览器端，就代表我们要将uniapp的代码编译到H5端（手机web端）显示

### 三、编译到各个平台

uniapp是跨端开发框架，一套代码可以运行到各个平台

H5：手机浏览器，目前我们默认用chrome的模拟器来演示代码。

小程序端：可以直接运行到小程序开发者工具模拟器。

APP端：可以android模拟器，真机。IOS系统

#### H5端

![image-20230705205849690](C:\Users\LENOVO\AppData\Roaming\Typora\typora-user-images\image-20230705205849690.png)

默认启动项目，打包后打开chrome(默认浏览器)

#### 小程序端

(1)打开项目中的manifest文件，找到微信小程序配置

manifest文件专门配置打包的配置项。里面有各个平台配置

![image-20230705205903582](C:\Users\LENOVO\AppData\Roaming\Typora\typora-user-images\image-20230705205903582.png)

配置了后，我们在小程序开发工具里面才不会是测试账号。

(2)需要打开微信开发者工具，设置我们代理模式

![image-20230705205918074](C:\Users\LENOVO\AppData\Roaming\Typora\typora-user-images\image-20230705205918074.png)

配置服务
![image-20230705205934499](C:\Users\LENOVO\AppData\Roaming\Typora\typora-user-images\image-20230705205934499.png)

等会你们在hbuilderx工具里面打包到小程序运行，自动启动小程序开发者工具。

项目打包运行的时候，要选中微信小程序开发者工具

![image-20230705205946980](C:\Users\LENOVO\AppData\Roaming\Typora\typora-user-images\image-20230705205946980.png)

接下来hbuilder工具就会将我们代码打包为小程序的代码，放在小程序模拟器里面运行

#### APP端

要将代码打包成app安装包，有两种，一种android的安装，ios的安装包。

上课更多还是android为准。

开发过程中测试你的代码是否能够正常运行，

- 安装android模拟器，夜神模拟器
- 真机测试

(1)模拟器环境：

你们先要在电脑上面安装模拟器。目前我的电脑支持夜神模拟器

在电脑上面启动android模拟器

(2)打包运行代码

![image-20230705205956340](C:\Users\LENOVO\AppData\Roaming\Typora\typora-user-images\image-20230705205956340.png)

运行android系统：

运行到ios系统

基座：相当于在android或ios系统中创建一个壳子，这个壳子里面可以运行你们的前端代码。手机里面的应用程序安装后有图标，这就称为基座/

![image-20230705210009004](C:\Users\LENOVO\AppData\Roaming\Typora\typora-user-images\image-20230705210009004.png)

打开ADB配置，将模拟器端口号配置进去（如果能默认找到62001，可以不用配置）

![image-20230705210020828](C:\Users\LENOVO\AppData\Roaming\Typora\typora-user-images\image-20230705210020828.png)

夜神模拟器，默认就是62001端口。等会自己找62001这个夜神程序

<img src="C:\Users\LENOVO\AppData\Roaming\Typora\typora-user-images\image-20230705210028561.png" alt="image-20230705210028561" style="zoom:200%;" />

你们直接运行，代码就会打包到夜神模拟器运行。

> 不是所有同学的电脑都能用夜神模拟器。如果你用不了这个模拟器。换一个模拟器

#### 真机环境

android调试

1. 手机要用数据线连接电脑。驱动要安装成功。推荐要用原配的数据线
2. 在手机上开启调试模式，之前以华为为例子，找到版本号：连续点击多次 ，至少5次，提示你已经打开了开发者模式
3. 在设置页面中，搜索“开发人员选项”
4. 打开开发者选项，USB调试必须打开
5. 手机连接电脑的时候，提示你连接方式
    选中传输文件。（仅充电）
ios环境
有些通过是苹果手机
我们需要在电脑上面下载iTunes工具，手机接入数据线连接itunes。
你们在hbuilder工具里面。
运行代码的时候，寻找一下设备



## uniapp02-基础语法

### 一、uniapp中我们基础语法

uniapp底层是基于vue的很多内容来开发的，所以我们基础语法全是vue的语法

目前模板语法和vue是一样的用法

```js
<script>
    export default {
        data() {
            return {
                title: 'Hello',
                username:"小王"
            }
        },
        onLoad() {
        },
        methods: {
            check(){
                console.log(123)
            }
        }
    }
</script>
```

页面获取

```js
<template>
    <text>{{username}}</text>
</template>
```

vue中我们能够使用的语法，目前在uniapp中基本上都可以直接照搬过来

### 二、uniapp样式

(1)rpx单位

尺寸范围：提供了rpx这个相对单位

比iphone6为例子。1px = 2rpx

按照屏幕宽度750px来作为参考

App 端，在 pages.json 里的 titleNView 或页面里写的 plus api 中涉及的单位，只支持 px。**注意此时不支持 rpx**

App端还是可以用rpx，但是在某些环境下他不支持rpx，在配置文件下面pages.json

(2)在uniapp中要使用scss

```js
<style lang="scss" scoped>
</style>
```

要在uniapp中能够使用scss来开发，我们需要在工具中安装费scss插件

<img src="C:\Users\LENOVO\AppData\Roaming\Typora\typora-user-images\image-20230705210156828.png" alt="image-20230705210156828" style="zoom:100%;" />

![image-20230705210230019](C:\Users\LENOVO\AppData\Roaming\Typora\typora-user-images\image-20230705210230019.png)

![image-20230705210248601](C:\Users\LENOVO\AppData\Roaming\Typora\typora-user-images\image-20230705210248601.png)

<img src="C:\Users\LENOVO\AppData\Roaming\Typora\typora-user-images\image-20230705210300901.png" alt="image-20230705210300901" style="zoom:200%;" />

(3)引入外部样式

```js
<style>
@import "../../assets/styles/demo.css";    
</style>
```

(4)uniapp里面能够支持的选择器

| 选择器           | 样例           | 样例描述                                       |
| :--------------- | :------------- | :--------------------------------------------- |
| .class           | .intro         | 选择所有拥有 class=”intro” 的组件              |
| #id              | #firstname     | 选择拥有 id=”firstname” 的组件                 |
| element          | view           | 选择所有 view 组件                             |
| element, element | view, checkbox | 选择所有文档的 view 组件和所有的 checkbox 组件 |
| ::after          | view::after    | 在 view 组件后边插入内容，**仅 vue 页面生效**  |
| ::before         | view::before   | 在 view 组件前边插入内容，**仅 vue 页面生效**  |

uniapp也不支持*通配符。也不能！important

以后你要给页面设置样式

```js
page{
    backgroud-color:"red"
}
```

(5)全局样式和局部样式

uni.scss这是一个全局的scss文件，任何一个页面都可以直接使用里面的css代码

局部样式就每个页面自己的style标签

uniapp03-组件的使用

## uniapp03-组件的使用

uniapp中组件分为两类

- 官方定义好的组件，直接用于布局
- 自定义组件。用户自己封装的组件

### 一、官方组件

：文本标签，可以存放项目中文字

: 布局标签，可以用于布局我们页面

:轮播图标签

：滑动模块标签

：文本框标签

： 复选框标签

：单选框标签

<video>：视频标签，封装了很多的功能，进度条、声音控制、弹幕

### 二、自定义组件

#### 自定义组件规则

(1)需要项目中创建components文件夹

在里面创建对应的组件。

(2)再指定的页面中，可以直接使用我们组件

项目中无需引入，也无需注册可以直接使用components目录下面的组件

```js
<template>
    <view>
        <text>这是我们页面</text>
        <Header></Header>
    </view>
</template>
<script>
    // import Header from "../../components/Header/Header"
    export default {
        // components:{
        //     Header
        // },
        data() {
            return {
            };
        }
    }
</script>
<style lang="scss">
</style>
```

uniapp内部已经全局引入的components文件夹里面的内容，无需再自己引入

elementUI这个框架，全局引入。任何一个页面el-table直接使用

#### 自定义组件通信

父组件传递值给组件

```js
<Header total="12" :username="username" @changeUserNameByParent="changeUserNameByParent"></Header>
```

子组件接受内容并调用自定义事件

```js
<template>
    <view>
        Header--{{username}}---{{total}}
        <button @click="changeUsername">修改username</button>
    </view>
</template>
<script>
    export default {
        name:"Header",
        props:["username","total"],
        data() {
            return {
            };
        },
        methods:{
            changeUsername(){
                this.$emit("changeUserNameByParent","xiaofeifei")
            }
        }
    }
</script>
<style lang="scss">
</style>
```

uniapp04-全局配置和局部配置

## uniapp04-全局配置和局部配置

只要是移动端开发，我们都会涉及到全局的样式配置、全局的公共代码配置

### 全局配置

#### 基础配置

项目目录下面page.json文件。这个文件就是全局配置文件

```js
{
    "pages": [ //pages数组中第一项表示应用启动页，参考：https://uniapp.dcloud.io/collocation/pages
        {
            "path" : "pages/home/home",
            "style" :                                                                                    
            {
                "navigationBarTitleText": "",
                "enablePullDownRefresh": false
            }
        },
        {
            "path": "pages/index/index",
            "style": {
                "navigationBarTitleText": "uni-app"
            }
        }
    ],
    "globalStyle": {
        "navigationBarTextStyle": "black",
        "navigationBarTitleText": "uni-app",
        "navigationBarBackgroundColor": "#F8F8F8",
        "backgroundColor": "#F8F8F8"
    },
    "uniIdRouter": {}
}
```

pages就是路由：路由地址都需要注册到这里面才能跳转

globalStyle：全局的样式配置

#### tabbar配置

```js
{
    "pages": [ //pages数组中第一项表示应用启动页，参考：https://uniapp.dcloud.io/collocation/pages
        {
            "path" : "pages/home/home",
            "style" :                                                                                    
            {
                "navigationBarTitleText": "首页",
                "navigationBarBackgroundColor": "#F7F7F7",
                "navigationBarTextStyle": "black",
                "enablePullDownRefresh": false
            }
        },
        {
            "path": "pages/index/index",
            "style": {
                "navigationBarTitleText": "日志"
            }
        }
    ],
    "globalStyle": {
        "navigationBarTextStyle": "white",
        "navigationBarTitleText": "uni-app",
        "navigationBarBackgroundColor": "#000",
        "backgroundColor": "#F8F8F8"
    },
    "tabBar":{
        "list":[
            {
                "pagePath":"pages/home/home",
                 "text":"首页",
                 "iconPath":"./static/home.png",
                 "selectedIconPath":"./static/home-o.png"
            },
            {
                "pagePath":"pages/index/index",
                 "text":"日志",
                 "iconPath":"./static/logo.png",
                 "selectedIconPath":"./static/logo.png"
            }
        ]
    },
    "uniIdRouter": {}
}
```

#### 分包加载

关于小程序开发的时候，我们对开发项目打包过后的文件大小有限制

小程序：每个包开发完成打包压缩，不能超过2M,超过2M无法上线

小程序提供和uniapp提供了分包机制。可以将你们代码分为10个包，每个包最多2M

整个小程序项目可以支持20M大小。

一般都要求，项目中静态资源文件，尽量不要放在本地，尤其图片

app端无需分包，app端对项目大小没有限制，你们写多少打包多少。

分包流程：

(1)在项目中创建pagesA代表第一个分包，pagesB代表第二个分包

默认pages目录代表主包，一般我们tabbar对应的页面必须放在主包中。

其他页面可以放在对应子包

```js
┌─pages
│  ├─index
│  │  └─index.vue
│  └─login
│     └─login.vue
├─pagesA
│  ├─static
│  └─list
│     └─list.vue
├─pagesB
│  ├─static
│  └─detail
│     └─detail.vue
├─static
├─main.js
├─App.vue
├─manifest.json
└─pages.json
```

每个子包都可以由自己的静态资源。

保证最外面static存放的主包要用资源

分包的好处：
以后我们小程序初始化的时候，默认只加载主包。跟tabbar相关的页面。子包默认不会加载。

以后如果你跳转到子包的页面。加载这个子包。子包加载过一次，下次就直接使用

子包的路由

```js
"subPackages": [{
        "root": "pagesA",
        "pages": [{
            "path": "list/list",
            "style": {
                "navigationBarTitleText": "产品"
            }
        }]
    }, {
        "root": "pagesB",
        "pages": [{
            "path": "detail/detail",
            "style": {
                "navigationBarTitleText": "详情"
            }
        }]
    }],
```

分包过后，子包加载问题

分包后，小程序默认加载主包的内容，子包内容需要访问的时候才会加载

子包预加载：主包加载完毕后，子包可以先加载（不影响我们主包的速度）

```js
"preloadRule": {
        "pagesA/list/list": {
            "network": "all",
            "packages": ["__APP__"]
        },
        "pagesB/detail/detail": {
            "network": "wifi",
            "packages": ["pagesA"]
        }
    },
```

network：代表网络，指定当前这个包在那种网络环境下进行加载

packages：当前这个包在哪个时机进行加载。一般我们可以配置`root` 或 `name`。`__APP__` 表示主包。

`__APP__`代表主包加载完毕

pagesA：代表pagesA这个包加载完毕后再加载当前这个包

uniapp05-生命周期函数

## uniapp05-生命周期函数

### 应用的生命周期

我们主要常用的就三个

onLaunch：小程序应用启动的时候我们就可以执行的生命周期函数

onShow：进入小程序的默认执行一次

onHide：退出小程序，开启后台运行

### 页面生命周期

```js
  onLoad(){
            console.log("onLoad");
        },
        onShow(){
            console.log("page onShow");
        },
        onReady(){
            console.log("onReady");
        },
        onHide(){
            console.log("page onHide");
        },
        onUnload(){
        },
```

生命周期函数再uniapp中和原生小城一模一样

onLoad页面加载

onShow页面显示，每次进来都会执行一次

onReady代表页面初次加载，如果页面没有销毁，这个方法只会执行一次

onHide：页面隐藏，离开这个页面，去到其他页面

onUnload页面卸载的收会执行

### 组件生命周期

组件生命周期就是采用vue的生命周期函数

created：初始化完毕

mouted：挂载完毕

updated：更新完毕

destoryed：卸载完毕等

uniapp06-网络请求

## uniapp06-网络请求

### 一、基础请求

网络请求需要通过uni来进行发送

基本代码如下

```js
methods: {
    sendMessage(){
        console.log(13);
        uni.request({
            url:"https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata",
            method:"GET",
            success(res){
                console.log("succes",res);
            },
            fail(error){
                console.log("error",error);
            }
        })
    }
}
```

### 二、请求封装

(1)再项目下面创建apis文件夹，里面创建http.js 文件

```js
const BASEURL = "https://api-hmugo-web.itheima.net/api/public/v1/"
export default function fetchData(url,data={},method="GET"){
    return new Promise((resolve,reject)=>{
        uni.request({
            url:BASEURL + url,
            method,
            data,
            success(res){
                resolve(res)
            },
            fail(error){
                reject(error)
            }
        })
    })
}
```

fetchData函数就是我们发送请求的公共方法

(2)在apis文件夹下面创建对应js文件来管理不同请求

比如个人中。userApi.js文件

```js
import fecthData from "./http"
// 发送请求获取个人信息
// 微信登录的请求 /user/login
const wxLogin = ()=>{
    return fecthData("/home/swiperdata")
}
// 获取用户信息 getUserInfo
const getUserInfo = ()=>{
    retrn fecthData("/home/swiperdata")
}
export default {
    wxLogin,getUserInfo
}
```

定义多个函数，多个函数可以放在一个对象中，统一暴露出去。

以后可以引入这个文件，得到一个对象，对象里面包含所有的请求方法

(3)将每个模块的请求，合并为一个文件

我们项目会用很多模块，每个模块都有自己请求文件，比如userApi.js\productApi.js等等

在apis文件夹下面创建apis.js文件

```js
import user from "./userApi"
import product from "./productApi"
export default {
    user,product
}
```

暴露一个统一的对象，这个对象user就代表user模块，product代表productApi模块

(4)在main.js中引入你们请求，全局挂载

```js
import App from './App'
// 条件编译：uniapp可以支持多端运行，有可能某一端无法运行这段代码。针对不同的端、不同版本，提供不同的代码
// #ifndef VUE3
import Vue from 'vue'
import $apis from "./apis/apis"
Vue.config.productionTip = false
// 将$apis挂载到Vue的原型上面，以后任何一个页面都可以使用
Vue.prototype.$api = $apis
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif
```

(5)页面使用这个全局挂载的请求

```js
<script>
    export default {
        data() {
            return {
            }
        },
        methods: {
            async sendMessage(){
                console.log(this.$api);
                const res = await this.$api.user.getUserInfo()
                console.log(res)
            }
        }
    }
</script>
```

以后任何页面、任何组件无需引入$api.可以通过this直接调用

> 思考：每次新增了模块，创建api文件。每个api文件都需要合并在同一暴露，能否自动合并

uniapp07-vuex搭建

## uniapp07-vuex搭建

在原生小程序开发过程中，我们没有提供状态机。但是默认提供glabalData，全局对象

在globalData定义数据，在任何一个页面或者组件中要使用globalData

```js
const app = getApp()
```

getApp是小程序内置的方法，可以得到app.js里面所有的内容包括global

```js
app.globalData
```

在uniapp中我们不会globalData，vuex也是默认支持的

uniapp数据管理会更加完善

uniapp中vuex无需下载，默认已经内置了vuex

需要搭建vuex的运行环境

开发步骤：

(1)在项目中创建store文件夹，里面index.js文件，这个就是vuex仓库

```js
import Vue from "vue"
import Vuex from "vuex"
// 挂载vuex
Vue.use(Vuex)
import userModule from "./modules/userModule"
export default new Vuex.Store({
    state:{
        count:10
    },
    modules:{
        userModule
    }
})
```

你需要自己在store文件夹里面创建modules文件夹，里面涉及userModule文件

```js
export default {
    namespaced:true,
    state:{
        user:{
            id:1,name:"xiaowang"
        }
    },
    mutations:{
        changeUsername(state,newName){
            state.user.name = newName
        }
    },
    actions:{
        asyncChangeusername(context,newName){
            setTimeout(()=>{
                // context.state.user.name = newName
                // 修改数据的唯一方案，mutations函数来修改
                context.commit("changeUsername",newName)
            },1000)
        }
    }
}
```

(2)我们就需要在main.js文件中加载store仓库

```js
import App from './App'
// 条件编译：uniapp可以支持多端运行，有可能某一端无法运行这段代码。针对不同的端、不同版本，提供不同的代码
// #ifndef VUE3
import Vue from 'vue'
import $apis from "./apis/apis"
import store from "./store/index.js"
Vue.config.productionTip = false
// 将$apis挂载到Vue的原型上面，以后任何一个页面都可以使用
Vue.prototype.$api = $apis
App.mpType = 'app'
const app = new Vue({
    ...App,
    store
})
app.$mount()
// #endif
```

(3)页面中使用仓库

```js
<script>
    // import {mapState} from "vuex"
    import {createNamespacedHelpers} from "vuex"
    const {mapState,mapMutations} = createNamespacedHelpers("userModule")
    export default {
        data() {
            return {
            }
        },
        computed:{
            ...mapState(["user"])
        },
        methods: {
            ...mapMutations(["changeUsername"]),
        }
    }
</script>
```

主仓库的数据引入vuex，们获取mapState

createNamespacedHelpers获取子仓库

uniapp 中授权，是哪个api ?

> wx.getUserProfile()
>
> uni.getUserProfile()

uniapp08-UI组件库

## uniapp08-UI组件库

在开发uniapp的时候，可以使用官方提供的组件，包括文本框、轮播图等等。

但是如果需要一些特殊的组件，我们可以选中去插件实现下载对应的组件。

Vue+ElementUI进行页面

uniapp也可以结合其他的UI组件库来帮助我们。vantui、uview

目前在我们uniapp中使用比较多的组件库uview

### 一、uview使用加载步骤

在插件市场里面找到uview这个ui组件库

找到uview的插件地址

绿色按钮，代表可以直接uview插件导入到目前存在的项目中。

蓝色按钮，将官方的demo代码在本地创建一份。你可以参考官方的代码

安装成功你们项目中会多出来uni_modules文件夹，uview-ui这样一个插件

> 如果通过插件市场，无法将uview下载安装到项目中。手动将umi_modules到项目中

### 二、配置入口文件

在项目main.js文件中引入对应的组件，启动项目就加载这uview

```js
// main.js
import uView from '@/uni_modules/uview-ui'
Vue.use(uView)
```

### 三、配置样式

在uni.scss文件中引入我们全局样式

```js
/* uni.scss */
@import '@/uni_modules/uview-ui/theme.scss';
```

#### 四、在App.vue文件中引入样式

```js
<style lang="scss">
    /* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
    @import "@/uni_modules/uview-ui/index.scss";
</style>
```

【完】