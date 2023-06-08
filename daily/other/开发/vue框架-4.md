

# axios 处理 res

我们在 `api` 接口中，接收远程返回的数据，需要通过 `res.data` 来获取：

```
import axios from "axios";export default {  // 用来获取学生列表数据  get: ({ curPage = 1, eachPage = 10 } = {}) =>    axios      .get("/api/students", {        params: {          curPage,          eachPage,        },      })      .then((res) => res.data),  getOne: (id) => {    return axios.get(`/api/students/${id}`).then((res) => res.data);  },  updateOne(id, student) {    return axios.put(`/api/students/${id}`, student).then((res) => res.data);  },  insert(student) {    return axios.post("/api/students", student).then((res) => res.data);  },};
```

我们可以利用 `axios.interceptors` 来处理这个情况：

在 `@/utils/index.js` 的 `axiosInit` 方法中，第 25 行直接返回 `response.data`。

```
export const axiosInit = () => {  // axios 每次请求之前触发的回调函数  axios.interceptors.request.use(    function (config) {      // Do something before request is sent      const token = localStorage.getItem("t");      if (token) {        config.headers = {          Authorization: `Bearer ${localStorage.getItem("t")}`,        };      }      return config;    },    function (error) {      // Do something with request error      return Promise.reject(error);    }  );  // axios 每次响应之后触发的回调函数  axios.interceptors.response.use(    function (response) {      // Any status code that lie within the range of 2xx cause this function to trigger      // Do something with response data      return response.data;    },    function (error) {      // Any status codes that falls outside the range of 2xx cause this function to trigger      // Do something with response error      return Promise.reject(error);    }  );};
```

这时，在我们的 api 接口函数中，就不用每个都去 `.then` 返回数据了：

```
import axios from "axios";export default {  // 用来获取学生列表数据  get: ({ curPage = 1, eachPage = 10 } = {}) =>    axios.get("/api/students", {      params: {        curPage,        eachPage,      },    }),  getOne: (id) => {    return axios.get(`/api/students/${id}`);  },  updateOne(id, student) {    return axios.put(`/api/students/${id}`, student);  },  insert(student) {    return axios.post("/api/students", student);  },};
```

20220510-04-元数据

# 元数据

每个路由配置项上，还可以添加一些额外的数据，我们把这些数据称之为元数据，元数据会在每次路由导航的时候，添加在路由对象中：

第 79 行，给 `/info/students` 路径添加了一个元数据： `meta.title`：

```
import Vue from "vue";import VueRouter from "vue-router";// 页面级组件import HomeView from "../views/HomeView.vue";import Login from "../views/Login.vue";import Reg from "../views/Reg.vue";import Info from "../views/Info.vue";import Counter from "../components/counter/index.vue";import Todos from "../components/todos/index.vue";import StudentsIndex from "../components/students/table.vue";import StudentsAdd from "../components/students/add.vue";import StudentsUpdate from "../components/students/update.vue";Vue.use(VueRouter);// 当前应用的路由列表const routes = [  {    // 视图的 url 路径    path: "/",    // 路由的名称    name: "home",    // 当前 path 对应的 组件    component: HomeView,    // 重定向    redirect: "/login",  },  {    path: "/login",    name: "Login",    component: Login,  },  // 单个的动态参数  {    path: "/login/:username",    name: "LoginWithUsername",    component: Login,  },  // 多个动态参数  {    path: "/login/:username/password/:password",    name: "LoginWithUsername&Password",    component: Login,  },  {    path: "/reg",    name: "Reg",    component: Reg,  },  {    path: "/info",    name: "Info",    component: Info,    children: [      {        path: "counter",        name: "InfoCounter",        component: Counter,      },      {        path: "students/update/:id",        name: "InfoStudentsUpdate",        component: StudentsUpdate,      },      {        path: "todos",        name: "InfoTodos",        component: Todos,      },      {        // /info/students        // /info/students/add        path: "students",        name: "InfoStudentsIndex",        component: StudentsIndex,        // 路由的元数据 路由的额外的数据        meta: {          title: "学生列表",        },      },      {        path: "students/add",        name: "InfoStudentsAdd",        component: StudentsAdd,        meta: {          title: "新增学生",        },      },    ],  },  {    path: "/about",    name: "about",    // route level code-splitting    // this generates a separate chunk (about.[hash].js) for this route    // which is lazy-loaded when the route is visited.    component: () =>      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),  },  {    path: "/*",    name: "NotFound",    component: () =>      import(/* webpackChunkName: "about" */ "../views/NotFound.vue"),  },];const router = new VueRouter({  mode: "history",  base: process.env.BASE_URL,  routes,});export default router;// 全局守卫 路由独享守卫 组件内守卫// 全局守卫 beforeEach afterEach// 独享： beforeEnter afterEnter// 组件内 beforeRouteEnter beforeRouteUpdate beforeRouteLeave
```

在 `info` 页面中，第25行，我们可以使用 `$route.meta.title` 来获取元数据

```
<template>  <div>    <SlotsILayout>      <template #left>        <ul>          <router-link tag="li" to="/info/counter">计数器</router-link>          <li>            <router-link to="/info/todos">待办列表</router-link>          </li>          <li>            <dl>              <dt>学生信息</dt>              <dd>                <router-link exact to="/info/students">学生列表</router-link>              </dd>              <dd>                <router-link to="/info/students/add">新增学生</router-link>              </dd>            </dl>          </li>          <li>TestIndex</li>        </ul>      </template>      <template #right>        <h1>{{ $route.meta.title }}</h1>        <router-view></router-view>      </template>    </SlotsILayout>  </div></template><script>import { mapState, mapMutations } from "vuex";export default {  name: "InfoView",  computed: mapState(["name"]),  methods: mapMutations(["updateName"]),  mounted() {    console.log(this);  },};</script><style>.router-link-active {  color: red;}</style>
```

20220510-05-导航守卫

# 导航守卫

导航，即路由正在发生改变。导航守卫，就是在路由发生改变的过程所执行的那些函数。vue-router 给我们提供了3种类型的守卫：**全局的, 单个路由独享的, 或者组件级的**。

## 一、全局守卫

全局守卫指的是，每一个路由发生改变，都会触发的函数。它有2个钩子：

### 1、`beforeEach`

`beforeEach` 是全局前置守卫，也就是当路由发生改变之前调用。

```
router.beforeEach((to, from, next) => {    console.log('beforeEach');    next();});
```

- `to`：即将要进入的目标对象，也就是去哪儿。

- `from`：即将离开的对象，也就是从哪儿。第一次访问的时候，为 `/` 根路径。

- ```
  next
  ```

  ：这个函数必须要调用，用来标志去不去。

  - `next()`：进行管道中的下一个钩子。
  - `next(false)`：中断当前导航，路由停止。
  - `next("/login")`：进入指定的 `path`，这样也可以 `next({ path: "/login" })`。
  - `next(error)`：导航会被终止且该错误会被传递给注册过的回调。

### 2、`afterEach`

`afterEach` 全局守卫，当路由改变之后调用。

```
router.afterEach((to, from) => {    console.log('afterEach to ', to);    console.log('afterEach from ', from);});
```

## 二、路由独享守卫

和全局守卫相比，路由独享守卫针对的是指定的一些路由。使用 `beforeEnter` 来给路由绑定独享守卫。

```
{    path: '/info',    component: Info,    meta: {        crumb: '首页'    },    beforeEnter: (to, from, next) => {        // 路由独享守卫        console.log('beforeEnter');        next();    },    children: ...}
```

路由独享守卫的参数和全局守卫完全一样。

## 三、组件内守卫

最后，你可以在路由组件内直接定义以下路由导航守卫：

- `beforeRouteEnter`：组件渲染之前调用。不能访问组件实例，也就是不能使用 `this`，因为这时的组件还没被创建出来。

- `beforeRouteUpdate`：在当前路由改变，但是该组件被复用时调用。

  当路由路径从 `/info/students/details/624c502b887ce4fd2a3d91a0` 改变成 `/info/students/details/624c502b887ce4fd2a3d919f` 的时候，组件会被复用，所以 `beforeRouteUpdate` 被触发。

- `beforeRouteLeave`：导航离开该组件的对应路由时调用。

```
import studentsApi from '../api/students.js';export default {    beforeRouteEnter(to, from, next) {        console.log('beforeRouteEnter');        next();    },    beforeRouteUpdate(to, from, next) {        console.log('beforeRouteUpdate');        next();    },    beforeRouteLeave(to, from, next) {        console.log('beforeRouteLeave');        next();    },    created() {        console.log(this.$route);    },};
```

## 四、完整的导航解析流程

1、当导航被触发的时候。

2、在失活组件里调用 `beforeRouteLeave` 守卫。

3、调用全局的 `beforeEach` 守卫。

4、调用路由 `beforeEnter` 独享守卫 。

5、解析异步路由组件。

6、调用组件内 `beforeRouteEnter` 守卫。

7、调用全局的 `beforeResolve` 守卫。

8、调用全局的 `afterEach` 守卫。

9、触发 DOM 更新。

![image-20220510121245534](https://woniumd.oss-cn-hangzhou.aliyuncs.com/web/tangzhenhua/202205101212866.png)

20220510-06-用户权限

# 用户身份权限

在很多项目中，对用户的访问权限都会有所控制：不同的用户可以访问不同类型的资源。首先同学们一定要分清楚，用户的身份认证和用户的权限这是两个问题：

1、用户身份认证：指的是用户的注册和登录。当用户访问某个应用的时候，对于服务本身来说，我们需要知道是谁在访问我，这就需要用户进行登录。

2、用户权限：指的是，登录成功之后的用户具备的资源访问权限。

## 什么是权限？

首先，同学们应该搞清楚，权限系统到底是干嘛用的：

你可以把系统看成是一个资源的容器，里面存放着各种各样类型的资源：它可以是一段数据，一张图片，一个文件，一个页面，甚至，它还可以是一个页面上的一个按钮，这些统一的都称之为叫资源。而用户，则是这些资源的使用者。但是，在这个系统中，并不是所有资源都对用户进行开放的，特定的用户才能访问指定的资源。所以，在这种需求下面，就有了用户权限这个概念。这也是我这里需要和大家讨论的问题。

## 如何控制？

如下图所示：

![image-20220417143615061](https://woniumd.oss-cn-hangzhou.aliyuncs.com/web/tangzhenhua/202205101447586.png)

在这个系统中，一共包含 9 个功能模块：学员模块、教师模块、班级模块、辅导员模块、考试模块、资源模块、角色模块、试卷模块和试题模块。每个模块都对应两个页面：新增 xx 页面和 xx 列表页面。例如：学员模块中包含 ***新增学员页面\*** 和 ***学员列表页面\***，以此类推。

现在我们就要来控制这些页面的访问：

在前端页面中，信息管理页一般都是以左右布局：左边显示菜单树，或者说是导航栏，系统通过它们来引导用户进行页面的访问；右边则是显示当前用户访问的页面。

菜单实际上就是资源访问的入口，那我们对页面的访问控制，实际上就是从这些菜单开始。再说得直观一点，针对不同的用户来说，它们看到的这些菜单有可能是不一样的。

这里我们抽象一个集合叫 角色，或者 用户组，它的功能就是用来说明当前用户的类别。比如：张叁用户 -> 学生，那这里的 学生 就是一个角色或者叫用户组，以下描述我们统一称之为 角色，也就是说，当前 张叁 这个用户它是一个 学生。

在 角色 的背后，实际上就是关联了很多的 资源，在这个系统中，指的就是所有的页面。我们可以建立一个 角色 - 资源 的一种映射关系，这是一个 一对多 的关系，也就意味着同一个角色，有可能会对应多个页面，比如：超级管理员 这个角色，他可以访问所有的页面。然后，我们再把这些 角色 分配给不同的用户，那么就等价于 用户 掌握了哪些资源。例如：张叁 角色是 超级管理员，那么 张叁这个用户，就可以访问所有的页面。

以上就是整个权限系统的如何控制资源的访问的控制思路。任何权限系统都是基于这种思想来设计的，区别在于，当 资源 + 角色 + 业务 之后，这就会变成是一个很复杂的系统，但是对于我们来说，理解他们的本质，就可以了。

### resources

资源集合

```
{  "text": String, // 所属功能模块名称  "component": String, // 页面路径  "path": String, // 页面访问路径  "title": String, // 页面名称  "name": String, // 页面图标,  "meta": Object, // 相关元数据}
```

![image-20220417163812678](https://woniumd.oss-cn-hangzhou.aliyuncs.com/web/tangzhenhua/202205101447556.png)

### roles

角色集合（用户组）

```
{  "name": String,}
```

![image-20220417163952901](https://woniumd.oss-cn-hangzhou.aliyuncs.com/web/tangzhenhua/202204171641455.png)

### roles2Resources

资源角色映射集合

```
{  "roleId": {    "type": mongoose.Types.ObjectId,    "ref": 'roles',  },  "resourceId": {    "type": mongoose.Types.ObjectId,    "ref": 'resources',  },}
```

![image-20220417172547558](https://woniumd.oss-cn-hangzhou.aliyuncs.com/web/tangzhenhua/202205101447237.png)

### users

用户集合

```
{  "username": String,  "password": String,}
```

![image-20220417172735384](https://woniumd.oss-cn-hangzhou.aliyuncs.com/web/tangzhenhua/202205101447691.png)

### 前端处理权限需要做的事情

用户 - 角色 - 资源 这 3 个方面的映射关系，逻辑层面全靠服务端来完成的，对于前端开发人员来说，关联关系的实现和维护我们不用考虑太多，对于我们来说，更多的是业务层面的学习。除此以外，页面端的渲染，完全依赖后台提供：

当用户登录成功之后，我们需要获取用户登录态信息，同时，和这个用户相关的资源信息也需要后端人员提供，还有一点需要注意的是，后端人员在某种程度上，对于页面端需要的数据，他们是不太了解的，所以，需要前端开发人员，把你关于页面的需求一定要和后台人员沟通清楚，以避免不必要的麻烦。

这里我给大家提供了一个登录接口，5 种不同类型的用户登录，会返回不同类型的登录态数据，其数据结构如下：

```
// /users/login{    "code": "200",    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InpoYW5nc2FuIiwiaWF0IjoxNjUwMTg4NjUyLCJleHAiOjE2NTEwNTI2NTJ9.3wZJPlZAYHGPO7Lu3Avlch9j-f3O4f6Dbe7elj1rQY0",    "data": {        "_id": "6252d6f6b713f7cded9106f5",        "username": "zhangsan",        "resource": [            {                "_id": "625a299e814d8fcb1e606583",                "roleId": "62580af6020758aa79e331bc",                "resourceId": {                    "_id": "625a26297ec6fd2928c9a073",                    "text": "学员模块",                    "component": "views/students/index.vue",                    "path": "students/index",                    "title": "学员列表",                    "name": "StudentsIndex",                    "meta": {                        "crumb": "学员列表"                    },                    "__v": 0                },                "__v": 0            },            {                "_id": "625a299e814d8fcb1e606584",                "roleId": "62580af6020758aa79e331bc",                "resourceId": {                    "_id": "625a26297ec6fd2928c9a074",                    "text": "学员模块",                    "component": "views/students/add.vue",                    "path": "students/add",                    "title": "新增学员",                    "name": "AddStudent",                    "meta": {                        "crumb": "新增学员"                    },                    "__v": 0                },                "__v": 0            },            {                "_id": "625a299e814d8fcb1e606585",                "roleId": "62580af6020758aa79e331bc",                "resourceId": {                    "_id": "625a26297ec6fd2928c9a07b",                    "text": "考试模块",                    "component": "views/tests/index.vue",                    "path": "tests/index",                    "title": "考试列表",                    "name": "TestsIndex",                    "meta": {                        "crumb": "考试列表"                    },                    "__v": 0                },                "__v": 0            },            {                "_id": "625a299e814d8fcb1e606586",                "roleId": "62580af6020758aa79e331bc",                "resourceId": {                    "_id": "625a26297ec6fd2928c9a07c",                    "text": "考试模块",                    "component": "views/tests/add.vue",                    "path": "tests/add",                    "title": "新增考试",                    "name": "AddTest",                    "meta": {                        "crumb": "新增考试"                    },                    "__v": 0                },                "__v": 0            },            {                "_id": "625a299e814d8fcb1e606587",                "roleId": "62580af6020758aa79e331bc",                "resourceId": {                    "_id": "625a26297ec6fd2928c9a080",                    "text": "考题模块",                    "component": "views/questions/add.vue",                    "path": "questions/add",                    "title": "新增考题",                    "name": "AddQuestion",                    "meta": {                        "crumb": "新增考题"                    },                    "__v": 0                },                "__v": 0            },            {                "_id": "625a299e814d8fcb1e606588",                "roleId": "62580af6020758aa79e331bc",                "resourceId": {                    "_id": "625a26297ec6fd2928c9a07f",                    "text": "考题模块",                    "component": "views/questions/index.vue",                    "title": "考题列表",                    "name": "QuestionsIndex",                    "meta": {                        "crumb": "考题列表"                    },                    "__v": 0,                    "path": "questions/index"                },                "__v": 0            }        ]    }}
```

接口地址：

- `POST``
- `https://www.tangzhenh.com/app/users/login`
- admin 111111

20220510-07-动态添加路由

# 动态添加路由

不同的用户登录，需要获取不同的路由，在登录接口中，除了当前用户的 `token` 信息以外，还包含当前用户的路由信息。

```
import axios from "axios";export default {  login({ username, password }) {    return axios.post(`https://www.tangzhenh.com/app/users/login`, {      username,      password,    });  },  reg({ username, password }) {    return axios.post("/api/users/reg", { username, password });  },  sToken: (token) => (localStorage["t"] = token),  gToken: () => localStorage["t"],};
```

首先把登录接口地址改成 `https://www.tangzhenh.com/app/users/login`。

在登录页面，进一步处理数据：

```
<template>  <div>    <h1>登录页面</h1>    <div>账户：<input :value="username" type="text" /></div>    <div>密码：<input :value="password" type="text" /></div>    <div>      <button @click="login">登录</button><button @click="reg">注册</button>    </div>  </div></template><script>import RoutesUitl from "@/utils/routes";export default {  name: "LoginView",  data() {    return {      username: "admin",      password: "111111",    };  },  methods: {    async login() {      const { username, password } = this;      const {        data: { resource },      } = await this.$api.users.login({        username,        password,      });      // 前端开发拿到的数据结构，并不是我们想要得的结构      // 1、解析原始数据      let routes = RoutesUitl.parse(resource);      // 2、在 routes 对象上，compoent 不能够直接使用，需要我们进一步处理      routes = RoutesUitl.getRoutes(routes);      // 3、获取 info 路由      const infoRoute = RoutesUitl.getInfoRoute(routes);      // 4、动态的添加路由      this.$router.addRoute(infoRoute);      // 5、页面跳转              this.$router.push("/info");    },    reg() {      this.$router.push("/reg");    },  },  mounted() {    console.log(this.$route.query);  },};</script>
export default {  // 将原始数据，解析成我们想要得结构  parse(resource) {    return resource.map((item) => item.resourceId);  },  // 因为 component 是个字符串，所以需要额外的处理  getRoutes(routes) {    return routes.map((item) => {      return {        ...item,        component: () => import(`@/${item.component}`),      };    });  },  // 生成 info route  getInfoRoute(children) {    return {      path: "/info",      name: "InfoView",      component: () => import(`@/views/Info.vue`),      children,    };  },};
```

同时，在 `router/index.js` 中，把有关 `info` 的路由删除掉。

```
const routes = [  {    // 视图的 url 路径    path: "/",    // 路由的名称    name: "home",    // 当前 path 对应的 组件    component: HomeView,    // 重定向    redirect: "/login",  },  {    path: "/login",    name: "Login",    component: Login,  },  // 单个的动态参数  {    path: "/login/:username",    name: "LoginWithUsername",    component: Login,  },  // 多个动态参数  {    path: "/login/:username/password/:password",    name: "LoginWithUsername&Password",    component: Login,  },  {    path: "/reg",    name: "Reg",    component: Reg,  },  {    path: "/about",    name: "about",    component: () => import("../views/AboutView.vue"),  },];
```

20220510-08-解决跳转 info 页面不显示的问题

## 解决跳转 info 页面不显示的问题

1、我们在 `router/index.js` 中添加了通配路由，这会导致动态添加的路由并不会命中到，所以，首先删除默认配置中的通配路径。

```
const routes = [  {    // 视图的 url 路径    path: "/",    // 路由的名称    name: "home",    // 当前 path 对应的 组件    component: HomeView,    // 重定向    redirect: "/login",  },  {    path: "/login",    name: "Login",    component: Login,  },  // 单个的动态参数  {    path: "/login/:username",    name: "LoginWithUsername",    component: Login,  },  // 多个动态参数  {    path: "/login/:username/password/:password",    name: "LoginWithUsername&Password",    component: Login,  },  {    path: "/reg",    name: "Reg",    component: Reg,  },  {    path: "/about",    name: "about",    component: () => import("../views/AboutView.vue"),  },];
```

2、使用 `router.addRoute` 来动态的添加路由配置：

```
this.$router.addRoute(infoRoute);this.$router.addRoute({    path: "/*",    name: "NotFound",    component: () => import("@/views/NotFound.vue"),});
```

20220510-09-info页面刷新

# info 页面刷新

在前面的应用中，登录成功之后跳转信息管理页面，刷新页面，会导致整个页面白屏，原因是，动态获取的学生资源数据被丢失了，所以，为了能够在刷新之后正常显示页面内容，我们需要将开始登录之后获取的数据做本地存储。

```
<!-- 登录页面 --><template>  <div>    <h1>登录页面</h1>    <div>账户：<input v-model="username" type="text" /></div>    <div>密码：<input v-model="password" type="text" /></div>    <div>      <button @click="login">登录</button><button @click="reg">注册</button>    </div>  </div></template><script>import RoutesUitl from "@/utils/routes";export default {  name: "LoginView",  data() {    return {      username: "zhangsan",      password: "111111",    };  },  methods: {    async login() {      const { username, password } = this;      const {        data: { resource },      } = await this.$api.users.login({        username,        password,      });      // 1、将当前用户的路由数据持久化到本地存储      RoutesUitl.localRoutes(resource);      // 2、获取最新的 info 数据      const infoRoute = RoutesUitl.getInfoRoute();      // 3、动态添加路由      this.$router.addRoute(infoRoute);      this.$router.addRoute({        path: "/*",        name: "NotFound",        component: () => import("@/views/NotFound.vue"),      });      this.$router.push("/info");    },    reg() {      this.$router.push("/reg");    },  },  mounted() {    console.log(this.$route.query);  },};</script>
// /utils/routes.jsexport default {  // 将原始数据转化成我们需要的结构，并持久化到本地  localRoutes(resource) {    const routes = resource.map((item) => item.resourceId);    return (localStorage["routes"] = JSON.stringify(routes));  },  // 获取本地存储的路由，转换成对象结构  localRoutesParse() {    return JSON.parse(localStorage["routes"]);  },  // 将我们需要的路由结构化数据中的 component 属性转换成异步组件加载方法  getRoutes() {    const routes = this.localRoutesParse();    return routes.map((item) => {      return {        ...item,        component: () => import(`@/${item.component}`),      };    });  },  // 获取 info 路由数据  getInfoRoute() {    return {      path: "/info",      name: "InfoView",      component: () => import(`@/views/Info.vue`),      children: this.getRoutes(),    };  },};
```

在路由`router/index.js`中，实现页面刷新，动态加载路由。

第 62 行代码，

```
// router/index.jsimport Vue from "vue";import VueRouter from "vue-router";// 页面级组件import HomeView from "../views/HomeView.vue";import routeUtil from "@/utils/routes";import Login from "../views/Login.vue";import Reg from "../views/Reg.vue";Vue.use(VueRouter);// 当前应用的路由列表// 原始的路由配置const routes = [  {    // 视图的 url 路径    path: "/",    // 路由的名称    name: "home",    // 当前 path 对应的 组件    component: HomeView,    // 重定向    redirect: "/login",  },  {    path: "/login",    name: "Login",    component: Login,  },  // 单个的动态参数  {    path: "/login/:username",    name: "LoginWithUsername",    component: Login,  },  // 多个动态参数  {    path: "/login/:username/password/:password",    name: "LoginWithUsername&Password",    component: Login,  },  {    path: "/reg",    name: "Reg",    component: Reg,  },  {    path: "/about",    name: "about",    component: () => import("../views/AboutView.vue"),  },];const router = new VueRouter({  mode: "history",  base: process.env.BASE_URL,  routes,});(function () {  // 1、判断当前缓存中是否存在 routes 的数据  if (!localStorage["routes"]) {    return;  }  // 2、获取 info 对象  const infoRoute = routeUtil.getInfoRoute();  // 3、添加路由  router.addRoute(infoRoute);  router.addRoute({    path: "/*",    name: "NotFound",    component: () => import("@/views/NotFound.vue"),  });})();export default router;
```

20220510-10-info导航的处理

# info 导航的处理

现在我们已经实现了动态添加路由，接下来，在 info 页面中，左侧的导航栏也需要动态生成。

```
<template>  <div>    <SlotsILayout>      <template #left>        <ul v-for="(v, k, index) in navs" :key="index">          <li>            <dl>              <dt>{{ k }}</dt>              <dd v-for="(item, i) in v" :key="i">                <router-link :to="{ name: item.name }">{{                  item.title                }}</router-link>              </dd>            </dl>          </li>        </ul>      </template>      <template #right>        <h1>{{ $route.meta.title }}</h1>        <router-view></router-view>      </template>    </SlotsILayout>  </div></template><script>import { mapState, mapMutations } from "vuex";import routesUtil from "@/utils/routes";export default {  name: "InfoView",  computed: mapState(["name"]),  methods: {    ...mapMutations(["updateName"]),    // 生成左边导航栏的数据    getNavs() {      const map = {};      // 1、获取本地的资源数据      const routes = routesUtil.localRoutesParse();      // 2、解析数据，生成导航对象      routes.forEach((item) => {        const { text } = item;        map[text] ? map[text].push(item) : (map[text] = [item]);      });      return map;    },  },  data() {    return {      // 导航的对象      navs: {},    };  },  mounted() {    this.navs = this.getNavs();  },};</script><style>.router-link-active {  color: red;}</style>
```

20220511-00-退出登录

# 退出登录

当我们重新登录的时候，会获取当新的用户对应的用户信息，在这之前，我们应该把老用户产生的路由信息清除掉：

页面上提供了一个退出登录的按钮，当点击退出登录，我们需要删除掉当前用户的信息。

在 vue-router 中并没有提供删除 `routes` 的方法，我们可以重新创建一个新的 router，来替换掉老的。

第 57 行代码：

```
<template>  <div>    <SlotsILayout>      <template #header>        <button @click="go">go</button>        <button @click="logout">退出登录</button>      </template>      <template #left>        <ul v-for="(v, k, index) in navs" :key="index">          <li>            <dl>              <dt>{{ k }}</dt>              <dd v-for="(item, i) in v" :key="i">                <router-link :to="{ name: item.name }">{{                  item.title                }}</router-link>              </dd>            </dl>          </li>        </ul>      </template>      <template #right>        <h1>{{ $route.meta.title }}</h1>        <router-view></router-view>      </template>    </SlotsILayout>  </div></template><script>import { mapState, mapMutations } from "vuex";import routesUtil from "@/utils/routes";import VueRouter from "vue-router";export default {  name: "InfoView",  computed: mapState(["name"]),  methods: {    ...mapMutations(["updateName"]),    getNavs() {      const map = {};      // 1、获取本地的资源数据      const routes = routesUtil.localRoutesParse();      routes.forEach((item) => {        const { text } = item;        map[text] ? map[text].push(item) : (map[text] = [item]);      });      return map;    },    go() {      console.log("go");      this.$router.push("/info/teachers/add");    },    // 退出登录    logout() {      // 获取到我们的原始配置信息      const { options } = this.$router;      // 通过 VueRouter 重新创建一个 新的 router 对象      const newRouter = new VueRouter(options);      // 将新的 matcher 替换掉当前的 matcher，等价于删除了老的路由配置      this.$router.matcher = newRouter.matcher;      // 删除缓存中的路由数据      localStorage.removeItem("routes");      this.$router.push("/");    },  },  data() {    return {      // 导航的对象      navs: {},    };  },  mounted() {    this.navs = this.getNavs();  },};</script><style>.router-link-active {  color: red;}</style>
```

删除完成之后，跳转到登录页。通过其他账户登录，你可以看到开始一直提示的重复定义的警告就消除了。

20220511-01-查漏补缺

# 查漏补缺

## 路由中 props 的使用

在路由中使用 `props` 进行参数的传递：

路由中进行值的传递的方式： `params` 和 `query`。

目的：在组件内部减少对 `$route` 的依赖，降低耦合度。

```
<template>  <div>    <h1>{{ a }}</h1>    <h1>{{ b }}</h1>  </div></template><script>export default {  name: "TestView",  // 通过 props 来接收 路由中携带的参数  props: ["a", "b"],  mounted() {    console.log(this.$route);  },};</script>
```

第 54 行打开 `props: true`：

```
import Vue from "vue";import VueRouter from "vue-router";// 页面级组件import HomeView from "../views/HomeView.vue";import routeUtil from "@/utils/routes";import Login from "../views/Login.vue";import Reg from "../views/Reg.vue";Vue.use(VueRouter);// 当前应用的路由列表// 原始的路由配置const routes = [  {    // 视图的 url 路径    path: "/",    // 路由的名称    name: "home",    // 当前 path 对应的 组件    component: HomeView,    // 重定向    redirect: "/login",  },  {    path: "/login",    name: "Login",    component: Login,  },  // 单个的动态参数  {    path: "/login/:username",    name: "LoginWithUsername",    component: Login,  },  // 多个动态参数  {    path: "/login/:username/password/:password",    name: "LoginWithUsername&Password",    component: Login,  },  {    path: "/reg",    name: "Reg",    component: Reg,  },  {    path: "/about",    name: "about",    component: () => import("../views/AboutView.vue"),  },  {    path: "/test/:a/:b",    name: "TestView",    props: true,    component: () => import("@/views/test.vue"),  },];const router = new VueRouter({  mode: "history",  base: process.env.BASE_URL,  routes,});(function () {  // 判断当前缓存中是否存在 routes 的数据  if (!localStorage["routes"]) {    return;  }  const infoRoute = routeUtil.getInfoRoute();  router.addRoute(infoRoute);  router.addRoute({    path: "/*",    name: "NotFound",    component: () => import("@/views/NotFound.vue"),  });})();export default router;
```

## 属性穿透

在 `style` 属性中，有一个 `scoped` 属性，它可以让我们组件中定义的样式变成局部的。

```
<!-- 父组件 --><template>  <div>    <TestSub />  </div></template><script>export default {  name: "TestView",};</script><style scoped>h1 {  color: red;}</style>
<!-- TestSub 组件 --><template>  <h1>world</h1></template><script>export default {  name: "TestSub",};</script>
```

在父组件中添加了 `h1` 样式表，对作用域组件的根元素，但是，对组件中的内部元素就不会生效了。

我们将 `TestSub` 组件，嵌套一个 `div`:

```
<template>  <div>    <h1>world</h1>  </div></template><script>export default {  name: "TestSub",};</script>
```

如果我们想让父级组件中的样式表也同样命中子组件中的元素的话，可以使用 `::deep`：

```
<!-- 父组件 --><template>  <div>    <TestSub />  </div></template><script>export default {  name: "TestView",};</script><style scoped>::v-deep h1 {  color: red;}</style>
```

使用 `::v-deep` 可以让样式表作用域子元素中的内部元素。

## mixin

`mixin` 是一种代码复用的方式，我们可以通过这种方式来定义 `data`、`computed`、`methods`、`watch` 和 生命周期函数。

```
<template>  <div>    <h1>{{ count }}</h1>    <h1>{{ double }}</h1>    <button @click="add">+</button>  </div></template><script>import count from "@/mixins/count";import count1 from "@/mixins/count1";export default {  name: "TestView",  mixins: [count, count1],};</script><style scoped>::v-deep h1 {  color: red;}</style>
export default {  data() {    return {      count: 1,    };  },  methods: {    add() {      this.count++;    },  },  computed: {    double() {      return this.count * 2;    },  },  watch: {    count() {      console.log("in watch count");    },  },  mounted() {    console.log("in count.js");  },};
export default {  data() {    return {      count: 10,    };  },  methods: {    add() {      this.count--;    },  },  computed: {    double() {      return this.count * 3;    },  },  watch: {    count() {      console.log("in watch count");    },  },  mounted() {    console.log("in count.js");  },};
```

mixin 针对 `state`、`methods`、`computed` ，合并过程中，如果出现相同的名称，以后面的为准。

`watch` 和 生命周期函数则是合并，也就是每一个 `mixin` 中定义的都会被执行。

20220511-02-引入elementUI

# 引入elementUI

## 安装

安装命令：

```
npm i element-ui -S
```

## 引入 Element

在 `main.js` 中添加 `elementUI`：

第 8、10、13行就是在引入 `elementUI`

```
import Vue from "vue";import App from "./App.vue";// 引入路由器import router from "./router";// vuex 全局状态仓库import store from "./store";// 引入 elementUIimport ElementUI from "element-ui";// 引入 elementUI 样式import "element-ui/lib/theme-chalk/index.css";Vue.config.productionTip = false;// 引入 elementUI 组件Vue.use(ElementUI);import api from "./api";// 全局的自动化注册import "./utils/register.js";import { axiosInit } from "./utils/index.js";axiosInit();// 全局定义指令 v-html v-i-html// 第一个参数是指令的名称 第二个参数就是指令的描述Vue.prototype.$api = api;new Vue({  router,  store,  render: (h) => h(App),}).$mount("#app");
```

## 登录页面

```
<template>  <el-card class="box-card">    <div slot="header" class="clearfix">      <span>登录页面</span>    </div>    <div>      <el-form ref="form" :model="form" label-width="80px">        <el-form-item label="账户">          <el-input v-model="username"></el-input>        </el-form-item>        <el-form-item label="密码">          <el-input v-model="password"></el-input>        </el-form-item>        <el-form-item>          <el-button type="primary" @click="login">登录</el-button>          <el-button>取消</el-button>        </el-form-item>      </el-form>    </div>  </el-card></template><script>import RoutesUitl from "@/utils/routes";export default {  name: "LoginView",  data() {    return {      username: "zhangsan",      password: "111111",      form: {        name: "",        region: "",        date1: "",        date2: "",        delivery: false,        type: [],        resource: "",        desc: "",      },    };  },  methods: {    async login() {      const { username, password } = this;      const {        data: { resource },      } = await this.$api.users.login({        username,        password,      });      // 1、将当前用户的路由数据持久化到本地存储      RoutesUitl.localRoutes(resource);      // 2、获取最新的 info 数据      const infoRoute = RoutesUitl.getInfoRoute();      // 3、动态添加路由      this.$router.addRoute(infoRoute);      this.$router.addRoute({        path: "/*",        name: "NotFound",        component: () => import("@/views/NotFound.vue"),      });      this.$router.push("/info");    },    reg() {      this.$router.push("/reg");    },  },  mounted() {    console.log(this.$route.query);  },};</script><style>.text {  font-size: 14px;}.item {  margin-bottom: 18px;}.clearfix:before,.clearfix:after {  display: table;  content: "";}.clearfix:after {  clear: both;}.box-card {  width: 480px;}</style>
```

20220511-03-侧边栏

# 侧边栏

第 63 行，点击用户登录，弹出信息框，当消息提示结束后，进入到信息管理页面。

```
<template>  <el-card class="box-card">    <div slot="header" class="clearfix">      <span>登录页面</span>    </div>    <div>      <el-form ref="form" :model="form" label-width="80px">        <el-form-item label="账户">          <el-input v-model="username"></el-input>        </el-form-item>        <el-form-item label="密码">          <el-input v-model="password"></el-input>        </el-form-item>        <el-form-item>          <el-button type="primary" @click="login">登录</el-button>          <el-button>取消</el-button>        </el-form-item>      </el-form>    </div>  </el-card></template><script>import RoutesUitl from "@/utils/routes";export default {  name: "LoginView",  data() {    return {      username: "zhangsan",      password: "111111",      form: {        name: "",        region: "",        date1: "",        date2: "",        delivery: false,        type: [],        resource: "",        desc: "",      },    };  },  methods: {    async login() {      const { username, password } = this;      const {        data: { resource },      } = await this.$api.users.login({        username,        password,      });      // 1、将当前用户的路由数据持久化到本地存储      RoutesUitl.localRoutes(resource);      // 2、获取最新的 info 数据      const infoRoute = RoutesUitl.getInfoRoute();      // 3、动态添加路由      this.$router.addRoute(infoRoute);      this.$router.addRoute({        path: "/*",        name: "NotFound",        component: () => import("@/views/NotFound.vue"),      });      this.$message({        message: "登录成功",        type: "success",        duration: 500,        onClose: () => {          this.$router.push("/info");        },      });    },    reg() {      this.$router.push("/reg");    },  },  mounted() {    console.log(this.$route.query);  },};</script><style>.text {  font-size: 14px;}.item {  margin-bottom: 18px;}.clearfix:before,.clearfix:after {  display: table;  content: "";}.clearfix:after {  clear: both;}.box-card {  width: 480px;}</style>
```

## 信息管理页面

```
<template>  <el-container>    <el-header>Header</el-header>    <el-container>      <el-aside width="300px">        <el-menu          router          default-active="0"          class="el-menu-vertical-demo"          @open="handleOpen"          @close="handleClose"        >          <el-submenu            :index="index + ''"            v-for="(v, k, index) in navs"            :key="index"          >            <template slot="title">              <i class="el-icon-orange"></i>              <span>{{ k }}</span>            </template>            <el-menu-item              :index="'/info/' + item.path"              v-for="item in v"              :key="item._id"              >{{ item.title }}</el-menu-item            >          </el-submenu>        </el-menu>      </el-aside>      <el-main>        <router-view></router-view>      </el-main>    </el-container>  </el-container></template><script>import { mapState, mapMutations } from "vuex";import routesUtil from "@/utils/routes";import VueRouter from "vue-router";export default {  name: "InfoView",  computed: mapState(["name"]),  methods: {    ...mapMutations(["updateName"]),    getNavs() {      const map = {};      // 1、获取本地的资源数据      const routes = routesUtil.localRoutesParse();      routes.forEach((item) => {        const { text } = item;        map[text] ? map[text].push(item) : (map[text] = [item]);      });      return map;    },    go() {      console.log("go");      this.$router.push("/info/teachers/add");    },    // 退出登录    logout() {      // 获取到我们的原始配置信息      const { options } = this.$router;      // 通过 VueRouter 重新创建一个 新的 router 对象      const newRouter = new VueRouter(options);      // 将新的 matcher 替换掉当前的 matcher，等价于删除了老的路由配置      this.$router.matcher = newRouter.matcher;      localStorage.removeItem("routes");      this.$router.push("/");    },    handleOpen(key, keyPath) {      console.log(key, keyPath);    },    handleClose(key, keyPath) {      console.log(key, keyPath);    },  },  data() {    return {      // 导航的对象      navs: {},    };  },  mounted() {    this.navs = this.getNavs();    console.log(this.navs);    console.log(this);  },};</script><style>.router-link-active {  color: red;}</style>
```

20220511-04-学生列表页面

# 学生列表

```
<!-- info 页面 --><template>  <el-container style="height: 100vh; border: 1px solid #eee">    <el-aside width="300px" style="overflow-y: hidden">      <el-menu        unique-opened        router        default-active="0"        class="el-menu-vertical-demo"        @open="handleOpen"        @close="handleClose"      >        <el-submenu          :index="index + ''"          v-for="(v, k, index) in navs"          :key="index"        >          <template slot="title">            <i class="el-icon-orange"></i>            <span>{{ k }}</span>          </template>          <el-menu-item            :index="'/info/' + item.path"            v-for="item in v"            :key="item._id"            >{{ item.title }}</el-menu-item          >        </el-submenu>      </el-menu>    </el-aside>    <el-container>      <el-header style="text-align: right; font-size: 12px">        <el-dropdown>          <i class="el-icon-setting" style="margin-right: 15px"></i>          <el-dropdown-menu slot="dropdown">            <el-dropdown-item>查看</el-dropdown-item>            <el-dropdown-item>新增</el-dropdown-item>            <el-dropdown-item>删除</el-dropdown-item>          </el-dropdown-menu>        </el-dropdown>        <span>王小虎</span>      </el-header>      <el-main>        <!-- 面包屑 -->        <el-breadcrumb separator="/">          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>          <el-breadcrumb-item>{{ $route.meta.crumb }}</el-breadcrumb-item>        </el-breadcrumb>        <div style="height: 30px"></div>        <router-view></router-view>      </el-main>    </el-container>  </el-container></template><script>import { mapState, mapMutations } from "vuex";import routesUtil from "@/utils/routes";import VueRouter from "vue-router";export default {  name: "InfoView",  computed: mapState(["name"]),  methods: {    ...mapMutations(["updateName"]),    getNavs() {      const map = {};      // 1、获取本地的资源数据      const routes = routesUtil.localRoutesParse();      routes.forEach((item) => {        const { text } = item;        map[text] ? map[text].push(item) : (map[text] = [item]);      });      return map;    },    go() {      console.log("go");      this.$router.push("/info/teachers/add");    },    // 退出登录    logout() {      // 获取到我们的原始配置信息      const { options } = this.$router;      // 通过 VueRouter 重新创建一个 新的 router 对象      const newRouter = new VueRouter(options);      // 将新的 matcher 替换掉当前的 matcher，等价于删除了老的路由配置      this.$router.matcher = newRouter.matcher;      localStorage.removeItem("routes");      this.$router.push("/");    },    handleOpen(key, keyPath) {      console.log(key, keyPath);    },    handleClose(key, keyPath) {      console.log(key, keyPath);    },  },  data() {    return {      // 导航的对象      navs: {},    };  },  mounted() {    this.navs = this.getNavs();    console.log(this.navs);    console.log(this);  },};</script><style>.el-header {  background-color: #b3c0d1;  color: #333;  line-height: 60px;}.el-aside {  color: #333;}</style>
```

学生列表页面

```
<!-- * @Description:  * @Version: 2.0 * @Author: tangzhenhua * @Date: 2022-05-09 21:08:30 * @LastEditors: tangzhenhua * @LastEditTime: 2022-05-09 21:09:11--><template>  <div>    <el-card>      <el-form :inline="true" :model="formInline" class="demo-form-inline">        <el-form-item label="学生姓名">          <el-input v-model="formInline.user" placeholder="学生姓名"></el-input>        </el-form-item>        <el-form-item label="联系方式">          <el-select v-model="formInline.region" placeholder="联系方式">            <el-option label="区域一" value="shanghai"></el-option>            <el-option label="区域二" value="beijing"></el-option>          </el-select>        </el-form-item>        <el-form-item>          <el-button type="primary">查询</el-button>        </el-form-item>      </el-form>    </el-card>    <div style="height: 20px"></div>    <el-card>      <el-table :data="rows" style="width: 100%">        <el-table-column prop="_id" label="学生编号" width="300">        </el-table-column>        <el-table-column prop="name" label="姓名" width="180">        </el-table-column>        <el-table-column prop="age" label="年龄" width="180"> </el-table-column>        <el-table-column prop="gender" label="性别" width="180">        </el-table-column>        <el-table-column prop="phone" label="联系方式" width="180">        </el-table-column>        <el-table-column prop="address" label="地址"> </el-table-column>        <el-table-column fixed="right" label="操作" width="100">          <template slot-scope="scope">            <el-button type="text" size="small">查看</el-button>            <el-button @click="handleClick(scope.row)" type="text" size="small"              >编辑</el-button            >          </template>        </el-table-column>      </el-table>      <div style="height: 30px"></div>      <el-pagination        @size-change="handleSizeChange"        @current-change="handleCurrentChange"        :current-page="curPage"        :page-sizes="[10, 20, 30, 40]"        :page-size="eachPage"        layout="total, sizes, prev, pager, next, jumper"        :total="total"      >      </el-pagination>    </el-card>  </div></template><script>import { createNamespacedHelpers } from "vuex";const { mapState, mapActions } = createNamespacedHelpers("students");import _ from "lodash";export default {  name: "StudentsTable",  data() {    return {      formInline: {        user: "",        region: "",      },    };  },  computed: {    ...mapState(["rows", "maxPage", "total"]),    curPage: {      get() {        return this.$store.state.students.curPage;      },      set(newVal) {        this.$store.commit("students/updateCurPage", newVal);      },    },    eachPage: {      get() {        return this.$store.state.students.eachPage;      },      set(newVal) {        this.$store.commit("students/updateEachPage", newVal);      },    },  },  watch: {    curPage: _.debounce(function () {      this.getStudents();    }, 500),    eachPage: _.debounce(function () {      this.getStudents();    }, 500),  },  beforeCreate() {},  created() {    this.getStudents();  },  methods: {    ...mapActions(["getStudents"]),    handleSizeChange(val) {      this.eachPage = ~~val;    },    handleCurrentChange(val) {      this.curPage = ~~val;    },    handleClick(row) {      console.log(row);      this.$router.push({        name: "InfoStudentsUpdate",        params: { id: row._id },      });    },  },};</script>
```

20220512-00-微信小程序安装和注册

# 微信小程序注册和安装

1、访问微信公众平台 https://mp.weixin.qq.com/

2、右上角点击立即注册；

3、选择小程序；

![image-20220512100222082](https://woniumd.oss-cn-hangzhou.aliyuncs.com/web/tangzhenhua/202205121002314.png)

4、点击注册，激活小程序账户；

![image-20220512100439308](https://woniumd.oss-cn-hangzhou.aliyuncs.com/web/tangzhenhua/202205121004440.png)

5、点击验证链接

![image-20220512100544779](https://woniumd.oss-cn-hangzhou.aliyuncs.com/web/tangzhenhua/202205121005874.png)

6、跳转到信息登记；

![image-20220512100608778](https://woniumd.oss-cn-hangzhou.aliyuncs.com/web/tangzhenhua/202205121006897.png)

7、填写相关信息

![image-20220512100953088](https://woniumd.oss-cn-hangzhou.aliyuncs.com/web/tangzhenhua/202205121009150.png)

8、下载微信开发者工具 https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html

20220512-01-创建项目

# 创建项目

1、扫码登录

2、创建项目页面

![image-20220512103631292](https://woniumd.oss-cn-hangzhou.aliyuncs.com/web/tangzhenhua/202205121036369.png)

3、填写项目相关信息：appid、不使用云开发、选择基础模板

4、开发工具介绍

![image-20220512104209203](https://woniumd.oss-cn-hangzhou.aliyuncs.com/web/tangzhenhua/202205121042364.png)

5、项目结构

![image-20220512104431201](https://woniumd.oss-cn-hangzhou.aliyuncs.com/web/tangzhenhua/202205121044273.png)

6、创建第一个页面，小程序一个完整的页面是由4种类型的资源组成：

- `wxml`：用来描述小程序页面的结构，等价于 `html`；
- `wxss`：用来描述小程序页面的样式，等价于 `css`；
- `js`：用来描述小程序页面交互的文件；
- `json`：用来描述小程序页面的配置；

7、显示我们自己的页面：

打开 `app.json` 文件，这个文件是小程序的全局配置文件：

- `pages`：在当前小程序中注册了哪些页面，需要显示的页面，放在 `pages` 的第一个位置。

8、小程序的页面，是以 750 作为标准的，也就是说，在 750 下的尺寸，是多少，我们就可以写多少，但是单位得用 `rpx`；`rpx` 是一个响应式的单位，它会根据设备的大小自动的转换，对于开发者来说，只需要按照 750 做就行了。

20220512-02-导航栏配置

## 页面导航栏

全局配置

在 `app.json` 文件中，有一个 `window` 的属性，在这里可以配置全局导航栏的样式：

网址：https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#window

```
{  "pages": [    "pages/hello/index",    "pages/movies/index",    "pages/index/index",    "pages/logs/logs",    "pages/test/test"  ],  "window": {    "backgroundTextStyle": "light",    "navigationBarBackgroundColor": "#42BD56", // 导航栏背景颜色    "navigationBarTitleText": "Weixin", // 导航栏标题文字内容    "navigationBarTextStyle": "white"  // 导航栏标题颜色  },  "style": "v2",  "sitemapLocation": "sitemap.json",  "usingComponents": {    "movieList": "/components/movieList/index",    "stars": "/components/stars/index"  }}
```

同样的：我们还可以在某个页面中去配置，这样的话，页面以自己的配置为主：

```
// /pages/hello/index.json{  "backgroundTextStyle": "light",  "navigationBarBackgroundColor": "#fff",  "navigationBarTitleText": "",  "navigationBarTextStyle": "white",  "usingComponents": {}}
```

页面中配置的话，不用 `window` 属性，直接把响应的配置放在 配置对象中就可以了。

同学要分别尝试一下全局的配置和局部配置两种方式哈。

20220512-03-绑定事件

首先是在页面中绑定事件：在 `hello.js` 中，添加事件：

```
// pages/hello/index.jsPage({  /**   * 页面的初始数据   */  data: {  },  onTap() {    console.log("in tap")  },  test() {    console.log("in test");  },})
```

直接把方法定义在 `page` 的描述对象上就可以了。

接下来是绑定事件：

```
<!-- 欢迎页面 --><view class="container" bindtap="test">  <image style="width: 154rpx; height: 154rpx; margin-top: 208rpx;" src="/static/avatar/4.png"></image>  <text style="color: #42BD56; font-size: 40rpx; font-weight: bold; margin-top: 108rpx; margin-bottom: 204rpx;">佛也要生活</text>  <view catchtap="onTap" style="border: 2rpx solid #42BD56; width: 204rpx; height: 88rpx; display: flex; justify-content: center; align-items: center; border-radius: 10rpx;">    <text style="color: #42BD56; font-size: 28rpx; font-weight: bold;">进入豆瓣电影</text>  </view></view>
```

第 5 行代码，通过 `bindtap` 或者 `catchtap` 就可以直接绑定事件了。他们的区别是 `bindtap` 不会阻止冒泡，而`catchtap` 会阻止冒泡。

20220512-04-跳转

微信小程序给我们提供了跳转页面的方法：

网址：https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.navigateTo.html

在微信小程序中，有一个 `wx` 对象，它是一个全局对象，这就意味着你可以在任何页面中，不需要引入，就可以直接使用：

```
// pages/hello/index.jsPage({  /**   * 页面的初始数据   */  data: {  },  onTap() {    console.log("in tap")    wx.navigateTo({      url: '/pages/movies/index',    })  },  test() {    console.log("in test");  },})
```

`wx.navigateTo` 方法会保留当前页面，跳转到新的页面中来。同时你还可以在新页面中返回。

20220512-05-自定义组件

我们也可以定义自己的组件：

1、在 根目录中，添加 `components` 目录，用来保存组件。

2、在 `components` 中创建目录 `search`，在 `searc` 目录上点右键 创建 `component`。

3、组件创建成功之后，要需要进行注册：

- 全局注册，在 `app.json` 文件中注册组件

  ```
  {  "pages": [    "pages/hello/index",    "pages/movies/index",    "pages/index/index",    "pages/logs/logs",    "pages/test/test"  ],  "window": {    "backgroundTextStyle": "light",    "navigationBarBackgroundColor": "#42BD56",    "navigationBarTitleText": "Weixin",    "navigationBarTextStyle": "white"  },  "style": "v2",  "sitemapLocation": "sitemap.json",  // 全局注册组件  "usingComponents": {    "movieList": "/components/movieList/index",    "stars": "/components/stars/index"  }}
  ```

- 局部注册：在你需要使用组件的页面或者组件中局部注册

  ```
  // 局部注册{  "usingComponents": {    "search": "/components/search/index"  }}
  ```

20220512-06-轮播

# 轮播

文档地址：https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html

创建轮播组件：

```
<!--components/movieSwiper/index.wxml--><swiper circular interval="1500" autoplay indicator-dots indicator-active-color="red" indicator-color='white' style="height: 400rpx;">  <swiper-item wx:for="{{imgs}}" wx:key="item">    <image style="width: 750rpx; height: 400rpx;" src="{{item}}"></image>  </swiper-item></swiper>
// components/movieSwiper/index.jsComponent({  data: {        imgs: [            "https://p1.meituan.net/movie/5a035ca22863af8aee60c2484696333464598.jpg",            "https://p1.meituan.net/movie/f76027b7577ba724c3238b3034ccdd7b146065.jpg",            "https://p1.meituan.net/movie/94169dca15586b5a85c23ebd14e926a689681.jpg",            "https://p1.meituan.net/movie/0c1f5ca92e003751a7c1ecb55371261674334.jpg",        ]    },})
```

知识点：

1、在微信小程序中，通过 `wx:for` 的指令用来迭代元素，注意要加 `{{}}`；

2、添加 `wx:key` 的指令，用来指定元素的 `key`；

3、`wx:key` 不用使用 `{{}}`；

20220512-07-滑动容器

# 滑动容器

```
<!--components/movieList/index.wxml--><view style="padding: 34rpx; height: 470rpx;">  <view style="display: flex; justify-content: space-between; font-size: 28rpx; color: #00084E">    <text>正在热映</text>    <view bindtap="onMore" style="display: flex; align-items: center; justify-content: space-between;">      <text>更多</text>      <image style="width: 20rpx; height: 20rpx;" src="/static/icon/arrow-right.png"></image>    </view>  </view>  <scroll-view scroll-x>    <view style="display: flex; justify-content: space-between;">      <movieItem />      <movieItem />      <movieItem />      <movieItem />      <movieItem />      <movieItem />      <movieItem />      <movieItem />      <movieItem />    </view>  </scroll-view></view>
```

`scroll-view` 可以用来做滚动容器，我们可以在需要滚动的元素外添加这个容器，就可以实现滚动了。但是要记住，横向滚动需要添加元素的宽度，纵向滚动需要添加元素的高度。

- `scroll-x`：横向滚动
- `scroll-y`：纵向滚动

20220512-08-tabbar

# 底部导航

在全局配置中添加 `tabBar` 属性，用来配置应用的底部导航：

```
{  "pages": [    "pages/hello/index",    "pages/movies/index",    "pages/index/index",    "pages/logs/logs",    "pages/test/test",    "pages/studios/index",    "pages/mine/index"  ],  "window": {    "backgroundTextStyle": "light",    "navigationBarBackgroundColor": "#42BD56",    "navigationBarTitleText": "Weixin",    "navigationBarTextStyle": "white"  },  "style": "v2",  "sitemapLocation": "sitemap.json",  "usingComponents": {    "movieList": "/components/movieList/index",    "stars": "/components/stars/index"  },  "tabBar": {      // 边框颜色    "borderStyle": "white",      // 选中颜色    "selectedColor": "#42BD56",      // 配置底部的按钮    "list": [      {        "pagePath": "pages/movies/index",        "text": "电影",        "iconPath": "/static/tab/_movie.png",        "selectedIconPath": "/static/tab/movie.png"      },      {        "pagePath": "pages/studios/index",        "text": "影院",        "iconPath": "/static/tab/_studio.png",        "selectedIconPath": "/static/tab/studio.png"      },      {        "pagePath": "pages/mine/index",        "text": "我的",        "iconPath": "/static/tab/_mine.png",        "selectedIconPath": "/static/tab/mine.png"      }    ]  }}
```

底部导航最少2个，最多5个；

需要注意的是：

- 跳转 tab 中配置的页面，不能使用 `wx.navigateTo` 方法，需要使用 `wx.switchTab`；
- 显示 `tab` 页面，请把该页面放到 `pages` 数组的第一位；

20220513-00-组件间的数据传递

# 组件间的数据传递

## MovieList

在微信小程序中，组件接收外部数据，需要通过 `properties` 来定义：

```
// components/movieList/index.jsComponent({  /**   * 组件的属性列表   */  properties: {    title: {      type: String,      value: "正在热映"    },    rows: {      type: Array,      value: []    }  },})
<!--components/movieList/index.wxml--><view style="padding: 34rpx; height: 470rpx;">  <view style="display: flex; justify-content: space-between; font-size: 28rpx; color: #00084E">    <text>{{title}}</text>    <view bindtap="onMore" style="display: flex; align-items: center; justify-content: space-between;">      <text>更多</text>      <image style="width: 20rpx; height: 20rpx;" src="/static/icon/arrow-right.png"></image>    </view>  </view>  <scroll-view scroll-x>    <view style="display: flex; justify-content: space-between;">      <block wx:for="{{rows}}" wx:key="id">        <movieItem movie="{{item}}" />        <view style="min-width: 10rpx;"></view>      </block>    </view>  </scroll-view></view>
```

我们在定义 `properties` 的时候，`type` 用来描述接口的类型，`value` 用来描述默认值；当组件没有外部数据的时候，默认值被启用。

```
<!--pages/movies/index.wxml--><!-- Search --><search /><!-- Swiper 组件 --><movieSwiper /><!-- MovieList --><movieList title="{{hot.title}}" rows="{{hot.rows}}" /><view style="height: 30rpx; background-color: #f2f2f2;"></view><movieList title="{{coming.title}}" rows="{{coming.rows}}" />
```

第 9 行代码：在给组件传递数据的时候，直接以 `title="{{hot.title}}"` 这样的形式设置，需要注意的是，动态的绑定必须要使用 `{{}}` 将其包裹；

```
// components/movieItem/index.jsComponent({  /**   * 组件的属性列表   */  properties: {    movie: {      type: Object,      value: {}    }  },  /**   * 组件的初始数据   */  data: {  },  /**   * 组件的方法列表   */  methods: {  }})
```

## MovieItem

```
// components/movieItem/index.jsComponent({  /**   * 组件的属性列表   */  properties: {    movie: {      type: Object,      value: {}    }  },})
<!--components/movieItem/index.wxml--><view style="display: flex; flex-direction: column; margin-top: 34rpx; ">  <image src="{{movie.movieImg}}" style="width: 200rpx; height: 270rpx;"></image>  <text style="overflow: hidden;text-overflow: ellipsis;white-space: nowrap; width: 180rpx;font-size: 28rpx; color: #090b1f; margin-top: 24rpx; margin-bottom: 24rpx;">{{movie.title}}</text>  <stars average="{{movie.average}}" stars="{{movie.stars}}" /></view>
```

## Stars

```
// components/stars/index.jsComponent({  /**   * 组件的属性列表   */  properties: {    average: {      type: String,      value: "10.0"    },    stars: {      type: String,      value: "45"    }  },})
<!--components/stars/index.wxml--><view style="display: flex; align-items: center;">  <image wx:key="index" style="width: 16rpx; height: 16rpx;" src="/static/icon/star_1.png">  </image>  <image wx:key="index" style="width: 16rpx; height: 16rpx;" src="/static/icon/star_1.png">  </image>  <image wx:key="index" style="width: 16rpx; height: 16rpx;" src="/static/icon/star_1.png">  </image>  <image wx:key="index" style="width: 16rpx; height: 16rpx;" src="/static/icon/star_1.png">  </image>  <image wx:key="index" style="width: 16rpx; height: 16rpx;" src="/static/icon/star_1.png">  </image>  <text style="font-size: 22rpx; margin-left: 10rpx;">{{average}}</text></view>
```

20220513-01-wxs模块

# wxs

WXS（WeiXin Script）是小程序的一套脚本语言，结合 `WXML`，可以构建出页面的结构。

在星星组件中，我们需要根据外部的评分数据，动态的显示星星的渲染，所以需要动态的来计算需要渲染的数据：

```
<!--components/stars/index.wxml--><wxs module="util">  function renderToStars(stars) {    var full = ~~stars[0], half = ~~stars[1];    var starsArr = [];    // 渲染满的星    for (var i = 0; i < full; i++) {      starsArr.push(1);    }    starsArr.push(half);    for (var i = starsArr.length; i < 5; i++) {      starsArr.push(0);    }    return starsArr;  }  module.exports = {    renderToStars: renderToStars  }</wxs><view style="display: flex; align-items: center;">  <image wx:for="{{util.renderToStars(stars)}}" wx:key="index" style="width: 16rpx; height: 16rpx;" src="/static/icon/star_{{item}}.png">  </image>  <text style="font-size: 22rpx; margin-left: 10rpx;">{{average}}</text></view>
```

第 24 行：`wx:for="{{util.renderToStars(stars)}}"` 当页面渲染的列表的时候，会首先去执行 `util.renderToStars(stars)` 这个函数；

在 `wxml` 结构中出现方法调用，方法如果定义在 组件的 `methods` 中，是不会执行的，所以需要使用 `wxs`；

`es6` 的语法是不能出现在 `wxs` 中；

当然我们也可以吧`wxs`文件单独创建，然后在 组件中引入就可以了：

```
<!--components/stars/index.wxml--><wxs src="./index.wxs" module="util"></wxs><view style="display: flex; align-items: center;">  <image wx:for="{{util.renderToStars(stars)}}" wx:key="index" style="width: 16rpx; height: 16rpx;" src="/static/icon/star_{{item}}.png">  </image>  <text style="font-size: 22rpx; margin-left: 10rpx;">{{average}}</text></view>
function renderToStars(stars) {  var full = ~~stars[0], half = ~~stars[1];  var starsArr = [];  // 渲染满的星  for (var i = 0; i < full; i++) {    starsArr.push(1);  }  starsArr.push(half);  for (var i = starsArr.length; i < 5; i++) {    starsArr.push(0);  }  return starsArr;}module.exports = {  renderToStars: renderToStars}
```

20220513-02-页面间的数据传递

# 页面间的数据传递

在电影列表页面中，点击 更多 按钮，跳转 更多页面；

我们需要在更多页面中标题栏显示不同类型的标题，可以在点击更多按钮时，将电影的类型传递给更多页面：

```
// components/movieList/index.jsComponent({  /**   * 组件的属性列表   */  properties: {    title: {      type: String,      value: "正在热映"    },    rows: {      type: Array,      value: []    }  },  /**   * 组件的方法列表   */  methods: {    onMore() {      // 跳转时携带参数      wx.navigateTo({        url: `/pages/more/index?title=${this.data.title}`,      })    }  }})
```

第 23 行代码，页面跳转的时候，可以在 `url` 路径中添加一些额外的参数；

在目标页面中，可以在 `onLoad` 方法中获取：

```
// pages/more/index.jsPage({  /**   * 页面的初始数据   */  data: {    rows: []  },  /**   * 生命周期函数--监听页面加载   */  onLoad({    title  }) {    // 页面的初始化    wx.setNavigationBarTitle({      title    });  },})
```

第 18 行代码，动态的修改页面的导航标题；

20220513-03-数据缓存

# 数据缓存

在多个页面之间进行数据的传递，可以使用本地数据缓存：

[数据存储](https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.setStorage.html)

第 30 行：将数据保存到本地

```
// components/movieList/index.jsComponent({  /**   * 组件的属性列表   */  properties: {    title: {      type: String,      value: "正在热映"    },    rows: {      type: Array,      value: []    }  },  /**   * 组件的初始数据   */  data: {  },  /**   * 组件的方法列表   */  methods: {    onMore() {      // 将 rows 数据保存到本地      wx.setStorageSync("more", this.data.rows);      // 跳转时携带参数      wx.navigateTo({        url: `/pages/more/index?title=${this.data.title}`,      })    }  }})
```

在 `more.js` 中，获取电影的列表数据，并缓存；

```
// pages/more/index.jsPage({  /**   * 页面的初始数据   */  data: {    rows: []  },  /**   * 生命周期函数--监听页面加载   */  onLoad({    title  }) {    // 页面的初始化    this.init(title);  },  init(title) {    // 1、 初始化标题栏    wx.setNavigationBarTitle({      title    });    // 2、获取更多的电影数据    const data = wx.getStorageSync("more");    // 3、渲染到页面    this.data.rows = data;    // 4、触发页面渲染    this.setData(this.data)  },})
<!--pages/more/index.wxml--><movieItem wx:for="{{rows}}" wx:key="id" movie="{{item}}" />
```

20220513-04-vantui安装

# vantui

# 安装

1、在项目中初始化 `package.json`

```
npm init -f
```

2、安装 `vantui`：

```
npm i @vant/weapp -S --production
```

3、修改 `app.json`

将 `app.json` 中的 `"style": "v2"` 去除

4、修改 project.config.json

添加以下配置：

```
{  "setting": {    "packNpmManually": true,    "packNpmRelationList": [      {        "packageJsonPath": "./package.json",        "miniprogramNpmDistDir": "./"      }    ]  }}
```

5、构建 npm

点击 工具栏 - 工具按钮 - 构建 npm

## 使用

在`app.json`或`index.json`中引入组件：

```
"usingComponents": {  "van-grid": "@vant/weapp/grid/index",  "van-grid-item": "@vant/weapp/grid-item/index"}
```

在更多页面中：

```
<!--pages/more/index.wxml--><van-grid column-num="3" border="{{ false }}">  <van-grid-item use-slot wx:for="{{rows}}" wx:key="id" >    <movieItem movie="{{item}}" />  </van-grid-item></van-grid>
```

20220513-05-behaviors

# behaviors

`behaviors` 是用于组件间代码共享的特性，类似于一些编程语言中的 “mixins” 或 “traits”。

每个 `behavior` 可以包含一组属性、数据、生命周期函数和方法。**组件引用它时，它的属性、数据和方法会被合并到组件中，生命周期函数也会在对应时机被调用。** 每个组件可以引用多个 `behavior` ，`behavior` 也可以引用其它 `behavior` 。

在项目的根目录下，创建 `behaviors` 目录，创建 `hot.js` 和 `coming.js`：

```
// /behaviors/hot.jsmodule.exports = Behavior({  data: {    hot: {            start: 10,            count: 10,            state: "hot",            title: "正在热映",            total: 43,            rows: [                ...            ],    },  },})
// /behaviors/coming.jsmodule.exports = Behavior({  data: {    hot: {            start: 10,            count: 10,            state: "coming",            title: "即将上映",            total: 100,            rows: [                ...            ],    },  },})
```

在 `movieList` 中，可以直接引入使用：

```
// pages/movies/index.jsimport hot from "../../behaviors/hot"import coming from "../../behaviors/coming"Page({    behaviors:[hot, coming],    /**     * 页面的初始数据     */    data: {    },})
```

20220513-06-获取正在热映更多的数据

# 加载更多

## 接口路径

- 正在热映：`https://www.tangzhenh.com/movies/hot?start=0&count=10`
- 即将上映：`https://www.tangzhenh.com/movies/coming?start=0&count=10`

## 分离方法

在更多页面中，我们首先把当前页面中的数据和方法分离到 `behaviors` 中：

```
import MoviesApi from "../api/movies"module.exports = Behavior({  data: {    start: 10,    count: 10,    state: "",    title: "",    total: 0,    rows: []  },  methods: {    init(title) {      this.data.state = title === "正在热映" ? "Hot" : "Coming"      // 1、 初始化标题栏      wx.setNavigationBarTitle({        title      });      // 2、获取更多的电影数据      const data = wx.getStorageSync("more");      // 3、渲染到页面      this.data.rows = data;      // 4、触发页面渲染      this.setData(this.data)    },  }})
```

## 配置下拉刷新和上拉触底

在页面的配置文件中添加 第 8 行代码：

```
{  "usingComponents": {    "movieItem": "/components/movieItem/index",    "van-button": "@vant/weapp/button/index",    "van-grid": "@vant/weapp/grid/index",    "van-grid-item": "@vant/weapp/grid-item/index"  },  "enablePullDownRefresh": true}
```

这时在 更多页面 中，已经开启下拉刷新，回到页面：

```
// pages/more/index.jsimport more from "../../behaviors/more"Page({  behaviors: [more],  /**   * 页面的初始数据   */  data: {  },  /**   * 生命周期函数--监听页面加载   */  onLoad({    title  }) {    // 页面的初始化    this.init(title);  },  /**   * 页面相关事件处理函数--监听用户下拉动作   */  onPullDownRefresh() {    console.log("in refresh")  },  /**   * 页面上拉触底事件的处理函数   */  onReachBottom() {    // 获取更多的电影数据    wx.showLoading({      title: '加载中',    })    this.getMore()  },})
```

第 24 行就是当用户下拉时候的回调函数。

第 31 行是当用户上拉触底时候的回调函数。

## 上拉加载更多数据

### 设置当前电影的类型

在 `more` 的 `behavior` 中，通过一个状态 `state` 来描述当前更多页面显示的是 即将上映 的电影还是 正在热映 的电影：

第 13 行代码，页面初始化的时候，根据用户点击的电影类型，设置 `state` 的值为 `Hot` 或 `Coming`：

```
import MoviesApi from "../api/movies"module.exports = Behavior({  data: {    start: 10,    count: 10,    state: "",    title: "",    total: 0,    rows: []  },  methods: {    init(title) {      this.data.state = title === "正在热映" ? "Hot" : "Coming"      // 1、 初始化标题栏      wx.setNavigationBarTitle({        title      });      // 2、获取更多的电影数据      const data = wx.getStorageSync("more");      // 3、渲染到页面      this.data.rows = data;      // 4、触发页面渲染      this.setData(this.data)    },  }})
```

### 当用户上拉时，开始获取数据

第 35 行代码，用户上拉时，开始获取电影数据：

```
// pages/more/index.jsimport more from "../../behaviors/more"Page({  behaviors: [more],  /**   * 页面的初始数据   */  data: {  },  /**   * 生命周期函数--监听页面加载   */  onLoad({    title  }) {    // 页面的初始化    this.init(title);  },  /**   * 页面相关事件处理函数--监听用户下拉动作   */  onPullDownRefresh() {    console.log("in refresh")  },  /**   * 页面上拉触底事件的处理函数   */  onReachBottom() {    // 获取更多的电影数据    wx.showLoading({      title: '加载中',    })    this.getMore()  },})
```

在 `behaviors` 中，添加 `getMore` 方法：

第 25 行代码，根据当前的显示条件，调用全程方法接口：

```
import MoviesApi from "../api/movies"module.exports = Behavior({  data: {    start: 10,    count: 10,    state: "",    title: "",    total: 0,    rows: []  },  methods: {    init(title) {      this.data.state = title === "正在热映" ? "Hot" : "Coming"      // 1、 初始化标题栏      wx.setNavigationBarTitle({        title      });      // 2、获取更多的电影数据      const data = wx.getStorageSync("more");      // 3、渲染到页面      this.data.rows = data;      // 4、触发页面渲染      this.setData(this.data)    },    getMore() {      const {        start,        count      } = this.data      MoviesApi[`get${this.data.state}Movies`]({        start,        count,        cb: (data) => {          this.data.start = this.data.start + this.data.count;          this.data.total = data.total;          this.data.rows = [...this.data.rows, ...data.rows];          wx.hideLoading()          this.setData(this.data);        }      });    }  }})
```

在 `/api/movie.js` 中，涉及到一个接口服务器地址，由于这个接口地址是一个全局共享的状态，所以，我们也可以把他添加到 `app` 的全局数据中去，当我们需要使用的时候，通过 `getApp()` 这个全局函数引入就可以了。

第 16 行代码中，添加 `globalData.baseUrl` 来设置全局状态。

```
// app.jsApp({  onLaunch() {    // 展示本地存储能力    const logs = wx.getStorageSync('logs') || []    logs.unshift(Date.now())    wx.setStorageSync('logs', logs)    // 登录    wx.login({      success: res => {        // 发送 res.code 到后台换取 openId, sessionKey, unionId      }    })  },  globalData: {    userInfo: null,    baseUrl: "https://www.tangzhenh.com"  }})
```

在 `api` 中，使用 `getApp()` 来获取在 `app.js` 中定义的状态值：

```
// /api/movies.jsconst app = getApp();const {  baseUrl} = app.globalData;export default {  getHotMovies({    start,    count,    cb  }) {    wx.request({      url: `${baseUrl}/movies/hot`,      data: {        start,        count      },      header: {        'content-type': 'application/json'      },      success: (res) => {        cb(res.data)      }    })  },  getComingMovies() {    wx.request({      url: `${baseUrl}/movies/coming`,      data: {        start: 10,        count: 10      },      header: {        'content-type': 'application/json'      },      success(res) {        console.log(res.data)      }    })  }}
```

### 网络请求：

微信小程序提供了一个 `wx.request` 方法，用来做远程的数据请求，因为 `wx.request` 方法是异步回调函数，而且本身就不支持 `promise`，所以，我们只能用 回调的方式，来接收异步回调的返回值。

20220514-00-封装请求方法

# 封装 request 方法

微信小程序提供的网络请求方法是一个异步回调的方式，在使用的时候必须以回调函数来接收异步的返回值，这里我们通过 `promise` 来封装 请求 函数；

第 24 行代码：定义 `request` 函数，内部通过 `promise` 函数来封装 `wx.request` 方法，这样在我们使用时，就可以通过 `async/await` 的方式来调用了。

```
// /utils/utils.jsconst app = getApp();const {  baseUrl} = app.globalData;const formatTime = date => {  const year = date.getFullYear()  const month = date.getMonth() + 1  const day = date.getDate()  const hour = date.getHours()  const minute = date.getMinutes()  const second = date.getSeconds()  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`}const formatNumber = n => {  n = n.toString()  return n[1] ? n : `0${n}`}const request = ({  url, data, method = "GET"} = {}) => {  return new Promise((resolve) => {    wx.request({      url: `${baseUrl}${url}`,      method,      data,      header: {        'content-type': 'application/json'      },      success: (res) => {        resolve(res.data)      }    })  })}module.exports = {  formatTime,  request}
```

在 `api` 中，就不再是调用 `wx.request` ，而是通过 我们自己定义的 `request` 方法来做远程请求了；

```
// /api/movies.jsimport {  request} from "../utils/util"export default {  getHotMovies({    start,    count,  }) {    return request({      url: "/movies/hot",      data: {        start,        count      }    });  },  getComingMovies({    start,    count,  }) {    return request({      url: "/movies/hot",      data: {        start,        count      }    });  }}
```

在页面中，使用 `async` 函数 `await` `request` 的返回值：

第 25 行，通过 `async` 修饰 `getMore` 函数；

第 30 行，`await` 远程方法返回数据；

```
import MoviesApi from "../api/movies"module.exports = Behavior({  data: {    start: 10,    count: 10,    state: "",    title: "",    total: 0,    rows: []  },  methods: {    init(title) {      this.data.state = title === "正在热映" ? "Hot" : "Coming"      // 1、 初始化标题栏      wx.setNavigationBarTitle({        title      });      // 2、获取更多的电影数据      const data = wx.getStorageSync("more");      // 3、渲染到页面      this.data.rows = data;      // 4、触发页面渲染      this.setData(this.data)    },    async getMore() {      const {        start,        count      } = this.data      const data = await MoviesApi[`get${this.data.state}Movies`]({        start,        count,      });      this.data.start = this.data.start + this.data.count;      this.data.total = data.total;      this.data.rows = [...this.data.rows, ...data.rows];      wx.hideLoading()      this.setData(this.data);    }  }})
```

20220514-01-店铺列表tab栏的实现

# 门店列表页面实现

项目结构说明：

```
├─components│  ├─favourite        # 收藏门店组件│  ├─nearby            # 附近门店组件│  ├─stores-header    # 门店列表顶部 tab 组件│  └─stores-main    # 门店列表 内容区域 包含 附近门店 和 收藏门店 页面切换├─pages│  ├─index│  ├─logs│  └─stores   # 门店列表页面
```

## stores-header 组件

```
<!--components/stores-header/index.wxml--><view style="display: flex; justify-content: space-between; padding: 0 20rpx;">  <van-tabs color="#001767" title-active-color="#001767" active="{{ active }}" bind:change="onChange">    <van-tab title="附近门店"></van-tab>    <van-tab title="收藏门店"></van-tab>  </van-tabs>  <van-search style="width: 200rpx;" shape="round" value="{{ value }}" placeholder="搜索" /></view>
// components/stores-header/index.jsComponent({  /**   * 组件的初始数据   */  data: {    active: 0,  },  /**   * 组件的方法列表   */  methods: {    onChange(event) {      // 这里可以获取到用户点击的是哪一个 tab      const {index} = event.detail      // 触发自定义事件，将选中的 tab 状态返回出去      this.triggerEvent("toggle", !index)    },  }})
```

这个组件用来控制顶部 `tab` 的切换：

1、第7行：`active` 是 `van-tabs` 默认加载的参数；

2、第14行：当用户点击 tab 选项的时候，`onChange` 方法被触发；

3、第16行，微信小程序中触发组件自定义事件 `this.triggerEvent`，第一个参数是触发的事件类型，第二个参数是 需要传回给 父组件的值；

## stores-main 组件

这个组件是用来切换显示 附近门店 和 收藏门店 的容器组件，切换逻辑就在这里；

这个组件依赖外部的 `isNearby` 参数：

```
<!--components/stores-main/index.wxml--><nearby wx:if="{{isNearby}}" /><favourite wx:else />
// components/stores-main/index.jsComponent({  /**   * 组件的属性列表   */  properties: {    isNearby: {      type: Boolean,      value: true    }  },})
```

## stores 页面

这个页面就是门店的列表页，里面包含顶部到 tab 导航和展示对应的内容页；

```
<!--pages/stores/index.wxml--><!-- 顶部 Tab --><stores-header bind:toggle="toggle" /><!-- 内容区域 --><stores-main isNearby="{{isNearby}}" />
// pages/stores/index.jsPage({  /**   * 页面的初始数据   */  data: {    // 是否显示 附近门店，false 显示 收藏门店    isNearby: true  },  // 交给 stores-header 组件调用的方法，用来切换当前 isNearby 状态  toggle(e) {    this.data.isNearby = e.detail;    this.setData(this.data)  }})
```

## 自己定义 `nearby` 组件和 `favourite` 组件

添加 `nearby` 和 `favourite` 组件；

20220514-02-打开和关闭地图

# 打开和关闭地图

我们封装一个 `stores-map` 组件，来显示我们的地图：

```
<!--components/stores-map/index.wxml--><view>  <map class="map {{activeClass}}"></map>  <view bind:tap="onTap" style="display: flex; justify-content: center; height: 70rpx; align-items: center; background-color: white;">    <text style="font-size: 24rpx;">{{btn.text}}</text>    <view style="min-width: 10rpx;"></view>    <van-icon name="{{btn.name}}" />  </view></view>
```

地图组件的实现思路：

1、第 3 行 `btns` 是地图按钮的所有显示状态；

2、第 11 行是 `map` 的切换动画‘

3、第 20 行 `index` 是记录当前用户的点击状态，0 -> 收起地图 1 -> 打开地图；我们就可以直接通过 `index` 映射当前是 收起状态 还是 打开状态；

```
// components/stores-map/index.jsconst btns = [{  text: "收起地图",  name: "arrow-up"},{  text: "展开地图",  name: "arrow-down"}]const activeClasses = ["open", "close"]Component({  /**   * 组件的初始数据   */  data: {    // 当前按钮的状态    btn: btns[0],    index: 0,    activeClass: "open"  },  /**   * 组件的方法列表   */  methods: {    onTap() {      // 获取当前 index      const { index } = this.data;      // 0 切换 1，1 切换 0      this.data.index = !!index ? 0 : 1;      // 当 index  值发生变化，更新 btn 和 activeClass      this.data.btn = btns[this.data.index];      this.data.activeClass = activeClasses[this.data.index];      this.setData(this.data);    }  }})
/* components/stores-map/index.wxss */.map {  width: 100%; height: 400rpx;}.open {  height: 400rpx;  transition: all .4s linear;}.close {  height: 0;  transition: all .4s linear;}
```

20220514-03-获取当前位置

# 获取当前位置

当页面加载的时候，需要获取当前用户的地理坐标，我们创建一个 `/behaviors/map.js` 专门用来封装和地图相关的数据和方法：

```
import StoresApi from "../api/stores"module.exports = Behavior({  data: {    // 初始化经纬度    latitude: 0,    longitude: 0  },  attached: function () {    // 在这个生命周期函数中，进行初始化操作    this.init();  },  methods: {    async init() {      // 1、获取当前用户的地理坐标      const {        latitude,        longitude      } = await this.getLocation();      this.data.latitude = latitude;      this.data.longitude = longitude;      this.setData(this.data);    },    // 用来获取地理位置    getLocation() {      return wx.getLocation({        type: 'gcj02',      })    }  }})
```

第 23 行代码，`wx.getLocation` 是微信提供的获取用户地理位置的 `api`，`type` 需要使用 `gcj02` 类型；

```
<!--components/stores-map/index.wxml--><view>  <map show-location longitude="{{longitude}}" latitude="{{latitude}}" class="map {{activeClass}}"></map>  <view bind:tap="onTap" style="display: flex; justify-content: center; height: 70rpx; align-items: center; background-color: white;">    <text style="font-size: 24rpx;">{{btn.text}}</text>    <view style="min-width: 10rpx;"></view>    <van-icon name="{{btn.name}}" />  </view></view>
```

第 3 行，在 `map` 组件上添加 `longitude` 和 `latitude` 属性，并设置 `show-location` 来打开坐标位置；

20220514-04-注册腾讯地图

# 注册腾讯地图

1、登录 https://lbs.qq.com/product/miniapp/home/

![image-20220514153239014](https://woniumd.oss-cn-hangzhou.aliyuncs.com/web/tangzhenhua/202205141532475.png)

![image-20220514153826770](https://woniumd.oss-cn-hangzhou.aliyuncs.com/web/tangzhenhua/202205141538026.png)

![image-20220514153911079](https://woniumd.oss-cn-hangzhou.aliyuncs.com/web/tangzhenhua/202205141539546.png)

在添加 key 的时候，同时开通 webserviceAPI 服务

![image-20220514153954158](https://woniumd.oss-cn-hangzhou.aliyuncs.com/web/tangzhenhua/202205141539433.png)

20220514-05-使用腾讯地图

# 使用腾讯地图

文档地址：https://lbs.qq.com/miniProgram/jsSdk/jsSdkGuide/jsSdkOverview

1、注册key

2、下载 微信地图的 sdk [JavaScriptSDK v1.2](https://mapapi.qq.com/web/miniprogram/JSSDK/qqmap-wx-jssdk1.2.zip)

3、将文件引入到微信小程序工程 `/libs` 下；

4、安全域名设置，在[小程序管理后台](https://mp.weixin.qq.com/wxamp/home/guide) -> 开发 -> 开发管理 -> 开发设置 -> “服务器域名” 中设置request合法域名，添加[https://apis.map.qq.com](https://apis.map.qq.com/)

![image-20220514154906261](https://woniumd.oss-cn-hangzhou.aliyuncs.com/web/tangzhenhua/202205141549512.png)

20220514-06-获取周边商铺信息

# 获取周边商铺信息

在项目中添加 `/api/stores.js` 模块，用于获取商铺相关数据：

第 17 行：搜索关键字；

第 18 行：坐标

`getStores` 方法以 `promise` 的方式返回商铺信息

```
// 引入SDK核心类var QQMapWX = require('../libs/qqmap-wx-jssdk.min');// 实例化API核心类var qqmapsdk = new QQMapWX({  key: 'PWHBZ-CSQ6Q-MMO5U-GUAPB-QAXPH-E2FIM' // 必填});export default {  // 获取商铺的信息  getStores({    latitude,    longitude  }) {    return new Promise(resolve => {      qqmapsdk.search({        keyword: '茶百道', //搜索关键词        location: {latitude, longitude}, //设置周边搜索中心点        success: function (res) { //搜索成功后的回调          resolve(res.data)        },        fail: function (res) {          console.log(res);        },      });    })  }}
```

在 `/behaviors/map` 的方法中，就可以获取到搜索到的商铺数据了：

```
import StoresApi from "../api/stores"module.exports = Behavior({  data: {    // 初始化经纬度    latitude: 0,    longitude: 0  },  attached: function () {    // 在这个生命周期函数中，进行初始化操作    this.init();  },  methods: {    async init() {      // 1、获取当前用户的地理坐标      const {        latitude,        longitude      } = await this.getLocation();      this.data.latitude = latitude;      this.data.longitude = longitude;      // 2、根据当前的坐标，获取周边的商铺信息      const stores = await StoresApi.getStores({        latitude,        longitude      });      console.log(stores)      this.setData(this.data)    },    // 用来获取地理位置    getLocation() {      return wx.getLocation({        type: 'gcj02',      })    }  }})
```

20220514-07-地理位置获取权限配置

# 地理位置获取权限配置

https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#permission

![image-20220514163842437](https://woniumd.oss-cn-hangzhou.aliyuncs.com/web/tangzhenhua/202205141638582.png)

在 `app.json` 中，添加以下配置：

```
{    "permission": {        "scope.userLocation": {            "desc": "你的位置信息将用于小程序位置接口的效果展示" // 高速公路行驶持续后台定位        }    }}
```

![image-20220514164029774](https://woniumd.oss-cn-hangzhou.aliyuncs.com/web/tangzhenhua/202205141640898.png)

点击允许就可以了；

20220514-08-更新商铺数据

# 更新商铺数据

在 `stores-map` 中获取到腾讯地图查询的 商铺数据之后，可以更新到 `nearby` 组件中，同时渲染商铺卡片信息：

第 3 行，将更新商铺的方法以自定义事件的方式，交给 `stores-map` 组件来更新数据；

```
<!--components/nearby/index.wxml--><view style="padding: 20rpx; background-color: #f5f8f8;">  <stores-map bind:getStores="getStores" />  <!--渲染商铺卡片-->  <block wx:for="{{stores}}" wx:key="id">      <view style="height: 20rpx"></view>    <!--商品卡片-->    <stores-card title="{{item.title}}" address="{{item.address}}" distance="{{item._distance}}" tel="{{item.tel}}" lat="{{item.location.lat}}" lng="{{item.location.lng}}"  />  </block></view>
// components/nearby/index.jsComponent({  /**   * 组件的初始数据   */  data: {    // 商铺数据    stores: []  },  /**   * 组件的方法列表   */  methods: {    // 这个方法用来更新商铺数据    getStores({detail}) {      this.data.stores = detail;      this.setData(this.data)    }  }})
```

在 `stores-map` 组件中，当获取到商铺数据之后，触发 `getStores` 事件来渲染页面：

第 44 行：在获取到商铺数据之后，触发 `getStores` 商品卡片就渲染出来了；

```
import StoresApi from "../api/stores"module.exports = Behavior({  data: {    // 初始化经纬度    latitude: 0,    longitude: 0,    markers: []  },  attached: function () {    // 在这个生命周期函数中，进行初始化操作    this.init();  },  methods: {    async init() {      // 1、获取当前用户的地理坐标      const {        latitude,        longitude      } = await this.getLocation();      this.data.latitude = latitude;      this.data.longitude = longitude;      // 2、根据当前的坐标，获取周边的商铺信息      const stores = await StoresApi.getStores({        latitude,        longitude      });      // 3、添加标记点 markers      this.data.markers = stores.map((item, index) => {        return {          id: index,          latitude: item.location.lat,          longitude: item.location.lng,          title: item.title,          width: 25,          height: 35,          // 开启点聚合功能          joinCluster: true        }      });      // 4、添加点聚合      this.joinCluster();      // 5、更新商铺数据，触发商品卡片渲染      this.triggerEvent("getStores", stores)      this.setData(this.data)    },    // 用来获取地理位置    getLocation() {      return wx.getLocation({        type: 'gcj02',      })    },    joinCluster() {      // 1、获取到哪个地图需要进行点聚合      this.ctxMap = wx.createMapContext("stores-map");      // 2、让 ctxMap 这个地图实现点聚合      this.ctxMap.addMarkers({        markers: this.data.markers      })    }  }})
```

20220514-09-点聚合

# 点聚合

在地图应用中，点聚合也是比较常见的一种地图应用形式，在用户缩小地图的时候，地图上的很多标记点会挤笼到一堆层叠的显示在一起，这时，就可以使通过点聚合的方式来让这些 markers 聚合成一个点：

第 38 行：首先在生成 marker 的时候，需要对每一个 marker 设置 `joinCluster: true` 属性；

第 42 行：开始进行点聚合配置；

第 53 行：点聚合实现方式；

```
import StoresApi from "../api/stores"module.exports = Behavior({  data: {    // 初始化经纬度    latitude: 0,    longitude: 0,    markers: []  },  attached: function () {    // 在这个生命周期函数中，进行初始化操作    this.init();  },  methods: {    async init() {      // 1、获取当前用户的地理坐标      const {        latitude,        longitude      } = await this.getLocation();      this.data.latitude = latitude;      this.data.longitude = longitude;      // 2、根据当前的坐标，获取周边的商铺信息      const stores = await StoresApi.getStores({        latitude,        longitude      });      // 3、添加标记点 markers      this.data.markers = stores.map((item, index) => {        return {          id: index,          latitude: item.location.lat,          longitude: item.location.lng,          title: item.title,          width: 25,          height: 35,          // 开启点聚合功能          joinCluster: true        }      });      // 4、添加点聚合      this.joinCluster();      // 5、更新商铺数据，触发商品卡片渲染      this.triggerEvent("getStores", stores)      this.setData(this.data)    },    // 用来获取地理位置    getLocation() {      return wx.getLocation({        type: 'gcj02',      })    },    joinCluster() {      // 1、获取到哪个地图需要进行点聚合      this.ctxMap = wx.createMapContext("stores-map");      // 2、让 ctxMap 这个地图实现点聚合      this.ctxMap.addMarkers({        markers: this.data.markers      })    }  }})
```

20220516-00-腾讯地图插件的使用

# 腾讯地图插件的使用

1、微信小程序官方后台-设置-第三方服务-插件管理 （或者直接从第二步开始）

搜索插件： `腾讯位置服务路线规划` 和 `腾讯位置服务地图选点`

2、复制以下内容到 `app.json` 中；

```
"plugins": {    "routePlan": {        "version": "1.0.18",        "provider": "wx50b5593e81dd937a"    }}
```

3、添加完插件之后，小程序提示：插件未授权使用，点击添加插件

![image-20220516095542835](https://woniumd.oss-cn-hangzhou.aliyuncs.com/web/tangzhenhua/202205160955975.png)

4、点击添加插件按钮：

![image-20220516095605803](https://woniumd.oss-cn-hangzhou.aliyuncs.com/web/tangzhenhua/202205160956862.png)

就可以了。

5、在页面中：

第 2 行，引入 导航插件；

第 3 行，设置 key；

第 4 行，小程序名称；

```
// components/store/index.jslet plugin = requirePlugin('routePlan');let key = ''; //使用在腾讯位置服务申请的keylet referer = '茶百道'; //调用插件的app的名称Component({  /**   * 组件的属性列表   */  properties: {    title: {      type: String    },    address: {      type: String    },    distance: {      type: String    },    tel: {      type: String    },    lat: {      type: String    },    lng: {      type: String    }  },  /**   * 组件的初始数据   */  data: {  },  /**   * 组件的方法列表   */  methods: {    onCall() {      wx.makePhoneCall({        phoneNumber: this.data.tel      })    },    onNavigate() {      // 设置终点      let endPoint = JSON.stringify({ //终点        'name': this.data.title,        'latitude': this.data.lat,        'longitude': this.data.lng      });      // 跳转路径      wx.navigateTo({          url: 'plugin://routePlan/index?key=' + key + '&referer=' + referer + '&endPoint=' + endPoint      });    },    onDetail() {      wx.navigateTo({        url: '/pages/store/index',      })    }  }})
```

20220516-01-商品列表页面-左侧种类控制右侧列表显示

# 商品列表页面-左侧种类控制右侧列表显示

商品列表页面：左侧显示商品种类，右侧显示每个种类的商品列表；

## 相关组件

### side-bar-item 组件

```
<!--components/side-bar-item/index.wxml--><view catchtap="onTap" class="container {{activeKey === _id ? 'active' : ''}}">    <image mode="heightFix" style="height: 42rpx;" src="{{url}}"></image>    <text style="font-size: 22rpx; margin-top: 20rpx; ">{{name}}</text></view><view style="height: 2px; background-color: #f8f8f8;"></view>
// components/side-bar-item/index.jsComponent({    /**     * 组件的属性列表     */    properties: {        url: {            type: String,            value: "https://www.tangzhenh.com/assets/chabaidao/cup1.png"        },        name: {            type: String,            value: "双皮奶"        },        _id: {            type: Number,            value: 1        },        activeKey: {            type: Number,            value: 1        }    },    /**     * 组件的初始数据     */    data: {    },    /**     * 组件的方法列表     */    methods: {        onTap() {            this.triggerEvent('toView', {                id: this.data._id            }, {})        }    }})
```

### comm-card 组件

```
<!--components/comm-card/index.wxml--><view>    <text class="name">{{name}}</text>    <comm-item bind:open="onOpen" url="{{item.img}}" wx:key="index" wx:for="{{rows}}" name="{{item.name}}" desc="{{item.desc}}" price="{{item.price}}" /></view>
// components/comm-card/index.jsComponent({    /**     * 组件的属性列表     */    properties: {        name: {            type: String,            value: "生打椰"        },        rows: {            type: Array,            value: []        }    },    /**     * 组件的初始数据     */    data: {    },    /**     * 组件的方法列表     */    methods: {        onOpen(data) {            this.triggerEvent("open", data.detail)        }    }})
```

### comm-item 组件

```
<!--components/comm-item/index.wxml--><wxs module="comm">    var split = function(str) {    return str.slice(0, 30) + "..."    }    module.exports = {    split: split    }</wxs><view class="container">    <image style="width: 180rpx; height: 180rpx;" src="{{url}}"></image>    <view class="right">        <text class="name">{{name}}</text>        <text class="desc">{{comm.split(desc)}}</text>        <view class="bottom">            <text>￥{{price}}</text>            <van-button bind:click="onOpen" color="#1d2a74;" size="mini" round type="info">选规格</van-button>        </view>    </view></view>
// components/comm-item/index.jsComponent({    /**     * 组件的属性列表     */    properties: {        url: {            type: String,            value: "https://www.tangzhenh.com/assets/chabaidao/%E7%94%9F%E6%A4%B0%E5%A4%A7%E6%BB%A1%E8%B4%AF.jpg"        },        name: {            type: String,            value: "桂花龙眼冰"        },        price: {            type: Number,            value: 20        },        desc: {            type: String,            value: "新鲜椰肉与椰汁制成灵魂生打椰，融合冷萃金桂花制成的爽滑冻冻、香软有嚼劲的血糯米以及Q弹椰果，给你一口大满足。"        }    },    /**     * 组件的初始数据     */    data: {    },    /**     * 组件的方法列表     */    methods: {        onOpen() {            this.triggerEvent("open", this.data)        },    }})
```

## store 页面

```
<!--pages/store/index.wxml--><view style="display: flex;">  <!-- 左侧的商品类型 -->  <view>    <side-bar-item bind:toView="toView" _id="{{item.id}}" activeKey="{{activeKey}}" url="{{item.imgUrl}}" name="{{item.name}}" wx:for="{{commodities}}" wx:key="id" />  </view>  <!-- 右侧的商品列表 -->  <!-- scroll-into-view 是当前需要 scoll-view 显示的 card id  -->  <scroll-view scroll-with-animation scroll-y style="height: 100vh" scroll-into-view="{{toViewIndex}}">    <!-- 给 comm-card 添加 id 用作 锚点跳转 -->    <comm-card id="{{'toView' + item.id}}" wx:for="{{commodities}}" wx:key="id" name="{{item.name}}" rows="{{item.rows}}" />  </scroll-view></view>
// pages/store/index.jsimport comm from "../../behaviors/commodities"Page({  behaviors: [comm],  /**   * 页面的初始数据   */  data: {    // 当前所在哪个类型    activeKey: 1,    // 当前锚点值    toViewIndex: ""  },  toView({    detail  }) {    this.data.activeKey = detail.id;    this.data.toViewIndex = 'toView' + detail.id;    this.setData(this.data);  }})
```

通过 `activeKey` 控制左侧商品种类的显示；

当用户点击某个种类的时候，设置 锚点 ，让 `scroll-view` 显示锚点对应的 `card`；

## 相关数据

```
module.exports = Behavior({  data: {        commodities: [{            "id": 1,            "name": "生打椰",            "imgUrl": "https://www.tangzhenh.com/assets/chabaidao/cup1.png",            "rows": [{                "name": "桂花龙眼冰",                "price": 20,                "img": "https://www.tangzhenh.com/assets/chabaidao/%E6%A1%82%E8%8A%B1%E9%BE%99%E7%9C%BC%E5%86%B0.jpg",                "desc": "新鲜龙眼手剥取肉，冷萃金桂花制成爽滑冻冻，与新鲜生打椰灵魂碰撞，带来清、香、甜、润的沁爽体验。"            }, {                "name": "生椰大满贯",                "price": 16,                "img": "https://www.tangzhenh.com/assets/chabaidao/%E7%94%9F%E6%A4%B0%E5%A4%A7%E6%BB%A1%E8%B4%AF.jpg",                "desc": "新鲜椰肉与椰汁制成灵魂生打椰，融合冷萃金桂花制成的爽滑冻冻、香软有嚼劲的血糯米以及Q弹椰果，给你一口大满足。"            }]        }, {            "id": 2,            "name": "麻薯",            "imgUrl": "https://www.tangzhenh.com/assets/chabaidao/cup2.png",            "rows": [{                "name": "豆乳米麻薯",                "price": 15,                "img": "https://www.tangzhenh.com/assets/chabaidao/%E8%B1%86%E4%B9%B3%E7%B1%B3%E9%BA%BB%E8%96%AF.jpg",                "desc": "精选玉麒麟奶茶底加入芝士奶盖，搭配嫩滑麻薯和Q软血糯米，再撒上一层豆香味十足的黄豆粉，丰富的口感层次值得细细品味。推荐喝法：先打开盖子尝一尝豆乳奶盖，再搅一搅糯米麻薯，让豆香、茶味伴随Q软底料，同时感受多重滋味。"            }, {                "name": "红豆麻薯双拼",                "price": 15,                "img": "https://www.tangzhenh.com/assets/chabaidao/%E7%BA%A2%E8%B1%86%E9%BA%BB%E8%96%AF%E5%8F%8C%E6%8B%BC.jpg",                "desc": "优选红豆久煮后甘香起沙，糯米麻薯奶香浓郁，与Q弹的芋圆一同铺于杯底，配合清新龙芽茉绿奶茶，口感层层递进，缤纷的香甜感受在口中层层展现。"            }]        }, {            "id": 3,            "name": "双皮奶",            "imgUrl": "https://www.tangzhenh.com/assets/chabaidao/cup3.png",            "rows": [{                "name": "双皮奶奶茶",                "price": 13,                "img": "https://www.tangzhenh.com/assets/chabaidao/%E5%8F%8C%E7%9A%AE%E5%A5%B6%E5%A5%B6%E8%8C%B6.jpg",                "desc": "白嫩滑溜的双皮奶，融入甘香顺滑的滇南大叶红茶奶茶底，口感细腻、香气宜人，赋予传统甜品新的趣味。"            }, {                "name": "红豆双皮奶",                "price": 16,                "img": "https://www.tangzhenh.com/assets/chabaidao/%E7%BA%A2%E8%B1%86%E5%8F%8C%E7%9A%AE%E5%A5%B6.jpg",                "desc": "严选优质红豆久煮后起沙，加入嫩滑双皮奶，再与冰醇厚乳融合，成就经典CP绵密清甜新滋味。"            }]        }, {            "id": 4,            "name": "四季水果茶",            "imgUrl": "https://www.tangzhenh.com/assets/chabaidao/cup4.png",            "rows": [{                "name": "杨枝甘露",                "price": 17,                "img": "https://www.tangzhenh.com/assets/chabaidao/%E6%9D%A8%E6%9E%9D%E7%94%98%E9%9C%B2.jpg",                "desc": "精选台农芒果、红西柚果粒、泰国小西米铺于杯底，搭配浓香椰浆，酸甜清爽丝毫不腻。开创杯装杨枝甘露酸甜鲜爽新喝法。"            }, {                "name": "西瓜波波",                "price": 13,                "img": "https://www.tangzhenh.com/assets/chabaidao/%E8%A5%BF%E7%93%9C%E6%B3%A2%E6%B3%A2.jpg",                "desc": "Q弹脆啵啵与爽口西瓜的组合，一嘬一口，口腔里回荡着清新的西瓜味道，冰爽的感觉由口到心。"            }, {                "name": "百香凤梨",                "price": 15,                "img": "https://www.tangzhenh.com/assets/chabaidao/%E7%99%BE%E9%A6%99%E5%87%A4%E6%A2%A8.jpg",                "desc": "严选都乐金菠萝香甜可口，香水柠檬清香扑鼻，与百香果融合后带来浓郁热带气息，注入鲜萃龙芽茉绿茶底及芒果汁水，入口酸甜鲜爽，果香味四溢。"            }, {                "name": "手捣芒果绿",                "price": 14,                "img": "https://www.tangzhenh.com/assets/chabaidao/%E6%89%8B%E6%8D%A3%E8%8A%92%E6%9E%9C%E7%BB%BF.jpg",                "desc": "精选台农芒果手捣后渗出香甜，融合香水柠檬的清香，注入龙芽茉绿茶底，每一口都蕴含充盈的果味。"            }, {                "name": "超级杯水果茶",                "price": 22,                "img": "https://www.tangzhenh.com/assets/chabaidao/%E8%B6%85%E7%BA%A7%E6%9D%AF%E6%B0%B4%E6%9E%9C%E8%8C%B6.jpg",                "desc": "1L装超大杯水果茶，加入多种新鲜水果，饱满果肉搭配清香龙芽茉绿茶底，每一口都暗藏惊喜。"            }]        }, {            "id": 5,            "name": "蛋糕",            "imgUrl": "https://www.tangzhenh.com/assets/chabaidao/cake.png",            "rows": [{                "name": "奥利奥蛋糕",                "price": 18,                "img": "https://www.tangzhenh.com/assets/chabaidao/%E5%A5%A5%E5%88%A9%E5%A5%A5%E8%9B%8B%E7%B3%95.jpg",                "desc": "以滇南大叶红茶为底制成的奶茶甘香顺滑，搭配醇厚香甜蛋糕酱，混入香脆奥利奥碎，展现富有层次的奇妙滋味。"            }, {                "name": "抹茶红豆蛋糕",                "price": 18,                "img": "https://www.tangzhenh.com/assets/chabaidao/%E6%8A%B9%E8%8C%B6%E7%BA%A2%E8%B1%86%E8%9B%8B%E7%B3%95.jpg",                "desc": "细腻回甘的抹茶沙冰与醇厚蛋糕酱、绵密起沙的优质红豆、雪白滑嫩的双皮奶交织融合，口感富有层次，是一杯兼具清爽与香甜的创意蛋糕奶茶。"            }]        }, {            "id": 6,            "name": "超人气奶茶",            "imgUrl": "https://www.tangzhenh.com/assets/chabaidao/tea.png",            "rows": [{                "name": "招牌芋圆奶茶",                "price": 13,                "img": "https://www.tangzhenh.com/assets/chabaidao/%E6%8B%9B%E7%89%8C%E8%8A%8B%E5%9C%86%E5%A5%B6%E8%8C%B6.jpg",                "desc": "精选荔浦芋头制成的软萌小芋圆，沙糯香甜，搭配香气馥郁的滇南大叶红茶奶茶底，顺滑香甜，吮吸一口，玩味无穷。"            }, {                "name": "豆乳玉麒麟",                "price": 14,                "img": "https://www.tangzhenh.com/assets/chabaidao/%E8%B1%86%E4%B9%B3%E7%8E%89%E9%BA%92%E9%BA%9F.jpg",                "desc": "精选武夷山名丛玉麒麟奶茶底与特磨黄豆粉迸发出加倍的豆香，咸甜芝士甜而不腻的口感将香醇无限延伸，香气悠远绵长。"            }, {                "name": "茉莉奶绿",                "price": 10,                "img": "https://www.tangzhenh.com/assets/chabaidao/%E8%8C%89%E8%8E%89%E5%A5%B6%E7%BB%BF.jpg",                "desc": "龙芽茉绿香气馥郁端正，制成奶茶清甜宜人，小嘬一口，浓郁的奶茶和茉莉花经唇入喉，淡雅香气经久留存。"            }, {                "name": "黄金椰椰乌龙",                "price": 12,                "img": "https://www.tangzhenh.com/assets/chabaidao/%E9%BB%84%E9%87%91%E6%A4%B0%E6%A4%B0%E4%B9%8C%E9%BE%99.jpg",                "desc": "武夷山名丛玉麒麟奶茶底蕴含绵远花香与豆香，入喉茶味香醇，加入Q弹椰果为茶香添加了无限玩味。"            }, {                "name": "血糯米奶茶",                "price": 14,                "img": "https://www.tangzhenh.com/assets/chabaidao/%E8%A1%80%E7%B3%AF%E7%B1%B3%E5%A5%B6%E8%8C%B6.jpg",                "desc": "每日新鲜蒸煮的血糯米加入咸甜芝士和阿萨姆奶茶，充分摇匀后，层次丰富，糯香四溢。"            }, {                "name": "桂花酒酿",                "price": 13,                "img": "https://www.tangzhenh.com/assets/chabaidao/%E6%A1%82%E8%8A%B1%E9%85%92%E9%85%BF.jpg",                "desc": "将桂花酒酿和奶茶充分手摇融合，入口是奶茶与桂花的清甜香气，回味是酒酿的醇厚就位，花香、酒香与奶香相互萦绕，回味无穷。"            }, {                "name": "奥利奥奶茶",                "price": 14,                "img": "https://www.tangzhenh.com/assets/chabaidao/%E5%A5%A5%E5%88%A9%E5%A5%A5%E5%A5%B6%E8%8C%B6.jpg",                "desc": "选用滇南大叶红茶为底制成的奶茶甘香顺滑，覆盖咸香丝滑的芝士奶盖，撒上香脆奥利奥碎，滋味浓郁，风味十足。"            }, {                "name": "海盐抹茶芝士",                "price": 18,                "img": "https://www.tangzhenh.com/assets/chabaidao/%E6%B5%B7%E7%9B%90%E6%8A%B9%E8%8C%B6%E8%8A%9D%E5%A3%AB.jpg",                "desc": "咸香芝士奶盖将细腻清爽的抹茶封于杯中，将奶味与茶香尽情碰撞，呈现出清苦回甘的奇妙滋味。"            }]        }, {            "id": 7,            "name": "冷萃茶",            "imgUrl": "https://www.tangzhenh.com/assets/chabaidao/cup5.png",            "rows": [{                "name": "茉莉绿茶",                "price": 8,                "img": "https://www.tangzhenh.com/assets/chabaidao/%E8%8C%89%E8%8E%89%E7%BB%BF%E8%8C%B6.jpg",                "desc": "取早春嫩芽为胚，采伏天上好的茉莉花，让茶叶充分吸收茉莉花香，香气浓郁，回味甘甜，明亮清冽。"            }, {                "name": "冰乌龙",                "price": 8,                "img": "https://www.tangzhenh.com/assets/chabaidao/%E5%86%B0%E4%B9%8C%E9%BE%99.jpg",                "desc": "精选武夷山名丛玉麒麟，果香为底，花香缥缈，入口豆香绵长，滋味甘柔甜醇。"            }]        }, {            "id": 8,            "name": "加料区",            "imgUrl": "https://www.tangzhenh.com/assets/chabaidao/cup6.png",            "rows": [{                "name": "小西米",                "price": 1,                "img": "https://www.tangzhenh.com/assets/chabaidao/%E5%B0%8F%E8%A5%BF%E7%B1%B3.jpg",                "desc": "泰国进口小西米，色泽白净颗颗均匀饱满，口感Q弹软糯。"            }, {                "name": "冻冻",                "price": 1,                "img": "https://www.tangzhenh.com/assets/chabaidao/%E5%86%BB%E5%86%BB.jpg",                "desc": "弹冻冻，口感爽滑，味道轻。"            }, {                "name": "椰果",                "price": 1,                "img": "https://www.tangzhenh.com/assets/chabaidao/%E6%A4%B0%E6%9E%9C.jpg",                "desc": "饱满大颗椰果粒，晶莹剔透口感顺滑。"            }, {                "name": "红豆",                "price": 2,                "img": "https://www.tangzhenh.com/assets/chabaidao/%E7%BA%A2%E8%B1%86.jpg",                "desc": "严选优质红豆，久煮起沙、口感绵密。"            }, {                "name": "脆啵啵",                "price": 2,                "img": "https://www.tangzhenh.com/assets/chabaidao/%E8%84%86%E6%B3%A2%E6%B3%A2.jpg",                "desc": "透明状脆啵啵，口感饱满，Q弹有嚼劲。"            }, {                "name": "桂花冻冻",                "price": 2,                "img": "https://www.tangzhenh.com/assets/chabaidao/%E6%A1%82%E8%8A%B1%E5%86%BB%E5%86%BB.jpg",                "desc": "冷萃金桂花制成Q弹冻冻，香气馥郁。"            }, {                "name": "双皮奶",                "price": 2,                "img": "https://www.tangzhenh.com/assets/chabaidao/%E5%8F%8C%E7%9A%AE%E5%A5%B6.jpg",                "desc": "嫩滑双皮奶，入口即化。清甜细腻。"            }, {                "name": "芋圆啵啵",                "price": 2,                "img": "https://www.tangzhenh.com/assets/chabaidao/%E8%8A%8B%E5%9C%86%E6%B3%A2%E6%B3%A2.jpg",                "desc": "精选广西荔浦芋头，全手工制作的芋圆，口感沙糯带着浓浓芋香味。"            }, {                "name": "奥利奥",                "price": 2,                "img": "https://www.tangzhenh.com/assets/chabaidao/%E5%A5%A5%E5%88%A9%E5%A5%A5.jpg",                "desc": "原味奥利奥饼干碎，经典酥脆。"            }, {                "name": "糯米麻薯",                "price": 2,                "img": "https://www.tangzhenh.com/assets/chabaidao/%E7%B3%AF%E7%B1%B3%E9%BA%BB%E8%96%AF.jpg",                "desc": "能吸的糯米麻薯，米香伴随着奶香，口感软糯富有弹性。"            }, {                "name": "蛋糕",                "price": 2,                "img": "https://www.tangzhenh.com/assets/chabaidao/%E8%9B%8B%E7%B3%95.jpg",                "desc": "口感丝滑绵密，香甜满足。（此蛋糕为蛋糕酱非固体蛋糕哟）"            }]        }],        advs: [            "https://www.tangzhenh.com/assets/chabaidao/advs/1.jpeg",            "https://www.tangzhenh.com/assets/chabaidao/advs/2.jpeg",            "https://www.tangzhenh.com/assets/chabaidao/advs/3.jpeg",            "https://www.tangzhenh.com/assets/chabaidao/advs/4.jpeg"        ]  },  methods: {  }})
```

20220516-02-商品列表右侧滚动

# 商品列表页面右侧滚动

当用户在商品列表滚动时，需要修改滚动位置所对应的商品种类：

第 33 行：在页面 `onLoad` 生命周期中，去查找我们需要的节点；微信小程序提供了一组查询节点的方法，我们可以在这些方法中获取到所查节点的相关信息，比如节点的宽度和高度；

第 38 行，获取到节点元素之后，给 `this` 上添加一个 `getActiveKey` 方法；在这个方法中，我们接收滚动时的滚动条的偏移量，并判断这个偏移量在这些节点中的位置；从而找出对应的 `activeKey`；

```
// pages/store/index.jsimport comm from "../../behaviors/commodities"Page({  behaviors: [comm],  /**   * 页面的初始数据   */  data: {    // 当前所在哪个类型    activeKey: 1,    toViewIndex: ""  },  toView({    detail  }) {    this.data.activeKey = detail.id;    this.data.toViewIndex = 'toView' + detail.id;    this.setData(this.data);  },  onScroll(e) {    const {      scrollTop    } = e.detail;    // 获取滚动时的 activeKey    this.data.activeKey = this.getActiveKey(scrollTop)    // 需要初始化锚点    this.data.toViewIndex = "";    this.setData(this.data)  },  onLoad() {    // 获取页面中的节点元素    const query = wx.createSelectorQuery()    // 根据选择器查询节点    query.selectAll('.comm-card').boundingClientRect((res) => {      this.getActiveKey = (top) => {        let start = 0, end = 0, activeKey = 1;        // 判断 top 所在哪个区间范围，并返回响应的 index        res.some((node, index) => {          start = end;          end = start + node.height;          const isStop = top > start && top < end;          isStop && (activeKey = index + 1)          return isStop;        });        return activeKey;      }    })    query.exec()  }})
```

20220516-03-左侧种类debug

# 商品页面 debug

到目前为止，用户点击左侧商品种类的时候，会出现点击第 2 个种类，由回到第一个 种类的情况：这个BUG 是因为，当点击种类列表的时候，同时会触发 `onScroll` 事件，`onScroll` 会重新给 `activeKey` 赋值：

解决方案：

1、追加 `isTap` 状态值，用于判断点击导航是否触发 `onScroll`；

2、第 25 行，点用户点击左侧种类按钮时，修改 `this.data.isTap = true`；

3、第 32 行，当 `this.data.isTap` 为 `true` 时，退出；搞定

```
// pages/store/index.jsimport comm from "../../behaviors/commodities"Page({  behaviors: [comm],  /**   * 页面的初始数据   */  data: {    // 当前所在哪个类型    activeKey: 1,    toViewIndex: "",    // 是否点击左侧的导航    isTap: false  },  onTap() {    wx.navigateTo({      url: '/packageA/pages/cat/index',    })  },  toView({    detail  }) {    this.data.isTap = true    this.data.activeKey = detail.id;    this.data.toViewIndex = 'toView' + detail.id;    this.setData(this.data);  },  onScroll(e) {    if(this.data.isTap) {      return this.data.isTap = false;    }    const {      scrollTop    } = e.detail;    // 获取滚动时的 activeKey    this.data.activeKey = this.getActiveKey(scrollTop)    // 需要初始化锚点    this.data.toViewIndex = "";    this.setData(this.data);  },  onLoad() {    // 获取页面中的节点元素    const query = wx.createSelectorQuery()    // 根据选择器查询节点    query.selectAll('.comm-card').boundingClientRect((res) => {      this.getActiveKey = (top) => {        let start = 0, end = 0, activeKey = 1;        // 判断 top 所在哪个区间范围，并返回响应的 index        res.some((node, index) => {          start = end;          end = start + node.height;          const isStop = top > start && top < end;          isStop && (activeKey = index + 1)          return isStop;        });        return activeKey;      }    })    query.exec()  },  onTap() {    wx.navigateTo({      url: '/packageA/pages/cat/index',    })  }})
```

20220516-04-小程序分包

# 分包

目前小程序分包大小有以下限制：

- 整个小程序所有分包大小不超过 20M
- 单个分包/主包大小不能超过 2M

对小程序进行分包，可以优化小程序首次启动的下载时间，以及在多团队共同开发时可以更好的解耦协作。

开发者通过在 app.json `subpackages` 字段声明项目分包结构：

```
"subpackages": [    {        "root": "packageA",        "pages": [            "pages/cat/index",            "pages/dog/index"        ]    }, {        "root": "packageB",        "name": "pack2",        "pages": [            "pages/apple/index",            "pages/banana/index"        ]    }]
```

## 打包原则

- 声明 `subpackages` 后，将按 `subpackages` 配置路径进行打包，`subpackages` 配置路径外的目录将被打包到主包中
- 主包也可以有自己的 pages，即最外层的 pages 字段。
- `subpackage` 的根目录不能是另外一个 `subpackage` 内的子目录
- `tabBar` 页面必须在主包内

## 引用原则

- `packageA` 无法 require `packageB` JS 文件，但可以 require 主包、`packageA` 内的 JS 文件；使用 [分包异步化](https://developers.weixin.qq.com/miniprogram/dev/framework/subpackages/async.html) 时不受此条限制
- `packageA` 无法 import `packageB` 的 template，但可以 require 主包、`packageA` 内的 template
- `packageA` 无法使用 `packageB` 的资源，但可以使用主包、`packageA` 内的资源

## 删除未依赖的文件

我们在上传之前，一定要把没有依赖的包删除点，这样做可以优化小程序的启动；

点击 右上角 详情 - 基本信息 - 代码依赖分析 - 选中未依赖的文件 - 删除

20220516-05-小程序支付

# 微信小程序支付流程

## 1、用户登录

在用户进行商品购买之前，首先需要用户进行登录。

小程序端：

第一步：当小程序运行时，使用 `wx.login` 方法获取当前用户临时凭证 `code`。

```
// 小程序端// app.jsimport UsersApi from "./api/users"App({    async onLaunch() {        // 小程序运行时自动登录        UsersApi.code()    },    globalData: {        userInfo: null,        baseUri: "http://localhost:3000"    }})
```

第二步：获取到用户 code 之后，发送给商户业务系统用户登录态 `token`，并本地保存。

```
// /api/usersimport {    request,    baseUrl} from "../utils/util"export default {    // 业务系统的登录接口，换取用户登录态信息 token    login: (code) => request({        url: `${baseUrl}/users/login`,        method: "POST",        data: {            code        }    }),    // 微信接口服务器，用于获取微信用户信息 `code`    async code() {        // 1、使用 wx.login 获取用户临时凭证        const {            code        } = await wx.login()        // 2、发送 code 到后台交换 token        const {            data        } = await this.login(code)        // 3、将 token 保存到 storage        wx.setStorage({            key: "token",            data: data.token        })    }}
```

服务端处理登录请求：

第一步：根据用户临时凭证 `code`，调用微信接口服务校验接口，换取 `openid` 和 `session_key`。

- `openid`：当前微信用户在这个小程序中的唯一标识。
- `session_key`：当前会话秘钥。

```
// 业务系统 Server// /users/loginrouter.post('/login', async function (req, res, next) {  try {    // 1、获取用户临时凭证 code    const { code } = req.body;    // 2、通过 code 获取用户信息 openid(用户唯一标识) 和 session_key(会话秘钥)    const { data } = await UsersApi.login(code);    // 3、自定义登录态    const token = UsersApi.token(data);    // 4、成功    res.send({ msg: '200', data: { token } });  } catch (error) {    // 返回异常    res.send({ msg: error });  }});
```

第二步：调用 校验接口 时，需要提供 `appid` 和 `secret`，登录你们的微信公众平台，在开发设置里面去找。

- `appid`：小程序 ID；
- `secret`：小程序密钥；
- `jscode`：小程序端传递过来的 `code`;

```
const login = (js_code) =>axios.get(url, {    params: {        appid, //        secret,        // 登录临时凭证        js_code,        grant_type,    },});
```

第三步：`openid` 和 `session_key` 属于敏感数据，不会直接将这两个状态返回给小程序端。我们可以将他们保存到 `token` 中，在返回给小程序端保存。

```
// 用于生成 token，这里的 data 就是 openid 和 session_keyconst token = (data) => createToken(data);
```

## 2、购物车页面

用户在购物车页面 cart，选中需要购买商品，点击 ***去结算\*** 按钮：

![image-20220503131222675](https://woniumd.oss-cn-hangzhou.aliyuncs.com/web/tangzhenhua/202205031312935.png)

第一步：获取当前购物车中已选中的商品。

第二步：将选中的商品本地缓存。

第三步：跳转到订单页。

```
/* 点击 去结算时，触发的事件 */// 1、获取用户选中的待支付商品const toBuy = this.data.carts.filter(item => item.isSelected === "1")// 2、将商品数据保存到本地存储await wx.setStorage({    data: toBuy,    key: 'toBuy',})// 3、跳转订单页wx.navigateTo({    url: '/pages/order/index',})
```

## 3、订单页面

进入订单页 order，用户可以在该页面确定商品信息。

![image-20220503131941923](https://woniumd.oss-cn-hangzhou.aliyuncs.com/web/tangzhenhua/202205031320009.png)

第一步：当页面加载完成时，从本地存储获取用户需要购买的商品数据，渲染到页面。

第二步：生成 预支付订单。

```
const order = require("../../behaviors/order");// pages/cart/cart.jsPage({    behaviors: [order],    /**     * 页面的初始数据     */    data: {        carts: [], // 商品列表        total_fee: 0, // 订单金额(分)        out_trade_no: "", // 商品内部订单号    },    onTap() {        wx.navigateTo({            url: '"pages/success/success"'        });    },    onSubmit() {        this.orderSubmit()    },    /**     * 生命周期函数--监听页面加载     */    onLoad: async function (options) {        // 1、从本地存储获取商品数据        const {            data        } = await wx.getStorage({            key: 'toBuy',        });        // 2、将数据更新到 data，渲染页面        this.setData({            carts: data,            total_fee: data.reduce(function (accumulator, currentValue) {                return currentValue.num * currentValue.price * 100 + accumulator            }, 0)        })        // 3、生成预支付订单        this.generate()    },});
```

### 预支付订单

预支付订单：在用户真正支付之前，微信支付系统会产生一个预支付订单，用于用户确定商品购买的相关信息。

小程序端需要准备以下数据：

- 用户的网络 ip 地址（微信支付系统参数）；
- 商品的总价，单位分（微信支付系统参数）；
- 商品的 id 集合（业务系统参数）；
- 用户 `openid`：`token` 中保存的，已经封装在 `request` 方法中，每次请求会自动携带。

当以上参数准备完成之后，可以直接调用预支付订单接口，换取支付信息。

```
// 小程序端// 生成预支付订单async generate() {    // 当前用户 ip    const cip = await IP.get();    // 商品 id    const cartIds = this.data.carts.map(item => item.id);    // 交易总金额    const {        total_fee    } = this.data    // 调用统一下单 Api，获取预支付订单    // 预支付订单保存到 data，等待确用户确认支付。    this.data.payment = await OrderApi.unifiedorder({        cip,        total_fee,        cartIds    });},
// 小程序端import {    request, baseUrl} from "../utils/util";export default {    // 统一下单    // 商户在小程序中先调用该接口在微信支付服务后台生成预支付交易单，返回正确的预支付交易后调起支付。    unifiedorder: ({        cip,        total_fee,        cartIds    }) => request({        url: `${baseUrl}/orders`,        method: "POST",        data: {            cip,            total_fee,            cartIds        }    })}
```

业务系统接收到小程序发送的统一下单请求，开始处理：

1、获取支付相关信息：`ip` 地址、订单总金额、商品数据。

2、解析 `token`，获取用户 `openid`。

3、业务系统中，根据 `openid` 和 商品数据，创建业务订单。

4、调用 微信支付系统 的统一下单接口，生成预支付订单。

```
// 业务系统 Serverrouter.post('/', async function (req, res, next) {  // 1、获取支付相关信息  const { cip, total_fee, cartIds } = req.body;  // 2、获取用户信息  const token = req.headers['authorization'];  // 从 token 中获取 openid  const { openid } = verToken(token);  // 3、创建订单，返回当前订单号，这个订单号是属于商家业务系统中的订单号  const { _id } = await OrderApi.create(openid, cartIds, total_fee);  // 4、生成预支付交易单，返回给前端，等待用户确认并支付  const advance = await OrderApi.unifiedorder({    cip,    openid,    out_trade_no: _id.toString(),    total_fee,  });  // 5、返回预支付订单信息  res.send(advance);});
```

在调用 统一下单接口 的时候，需要使用到 商户号 和 微信支付安全秘钥，这两个数据都需要去 微信支付 平台上去申请，或者直接通知你的公司，让他们给你提供。

这里我用了一个叫 `tenpay` 的第三方类库，来挂起预支付，就省去了手动生成随机字符串和签名的过程，比较方便。

- `tenpay` 初始化：提供 小程序ID、商户号、微信支付安全秘钥、异步通知地址和 客户端IP。
- `api.getPayParams`：获取预支付订单。

```
// 业务系统 Serverconst unifiedorder = async ({ cip, openid, out_trade_no, total_fee }) => {  /**   *  统一下单接口文档：https://pay.weixin.qq.com/wiki/doc/api/wxa/wxa_api.php?chapter=9_1&index=1   *  使用统一下单接口需要手动去生成字符串和签名信息：https://api.mch.weixin.qq.com/pay/unifiedorder   *  这里我使用 tenpay 第三方类库生成签名信息，就不用自己手动去生成了。   */  // 1、初始化配置  const api = tenpay.init({    appid, // 小程序ID    mchid, // 商户号    partnerKey, // 微信支付安全密钥    notify_url, // 异步通知地址    spbill_create_ip: cip, // 客户端IP  });  // 2、获取支付参数  /**   * 参数：   * out_trade_no 业务系统中的订单号   * total_fee 订单总金额，单位为分   * body 订单标题   * openid 小程序ID   * 返回值示例   * 这个就是预支付交易单    {      appId: 'wxb34b8fa5a82bb1c6',  // 小程序ID      timeStamp: '1651547120',    // 时间戳 时间戳从1970年1月1日00:00:00至今的秒数,即当前的时间      nonceStr: 'WYQEUuHrOJ6jhrbq', // 随机字符串      package: 'prepay_id=wx0311052050596823a48884d57f30130000', // 统一下单接口返回的 prepay_id 参数值      signType: 'MD5',  // MD5    签名类型，默认为MD5      paySign: 'B74A928A68E7CD5A09C1E983081A3146',  // 支付签名      timestamp: '1651547120'    }   */  return await api.getPayParams({    out_trade_no,    body: '老汤杂货店',    total_fee,    openid,  });};
```

### 提交订单

提交订单，就是用户确认支付的时候。

将预支付订单的相关数据，通过 `wx.requestPayment` 方法提交给 微信支付系统。这时，小程序会弹出用户密码框，当用户输入密码之后，意味着订单就提交成功。

- 触发 异步通知地址 `notify_url`;
- 前端可以在提交订单成功之后，往业务系统中发送订单提交成功的请求，修改当前订单的状态；
- 页面跳转至成功页面或者订单列表页；

```
async orderSubmit() {    await OrderApi.wxPay(this.data.payment)    wx.navigateTo({        url: '/pages/success/index',    })}
wxPay: (payment) => wx.requestPayment({    timeStamp: payment.timeStamp,    nonceStr: payment.nonceStr,    package: payment.package,    signType: payment.signType,    paySign: payment.paySign,})
```

这时，支付流程就结束了。

## 流程图

![image-20220503143348858](https://woniumd.oss-cn-hangzhou.aliyuncs.com/web/tangzhenhua/202205161709349.png)

20220516-00-uni的基本使用

# uniapp

`uni-app` 是一个使用 [Vue.js (opens new window)](https://vuejs.org/)开发所有前端应用的框架，开发者编写一套代码，可发布到iOS、Android、Web（响应式）、以及各种小程序（微信/支付宝/百度/头条/飞书/QQ/快手/钉钉/淘宝）、快应用等多个平台。

官网：https://uniapp.dcloud.net.cn/

开发工具：https://www.dcloud.io/hbuilderx.html

## 全局配置

在 uniapp 中，关于全局配置是放在 `pages.json` 文件，这个文件就等价于微信小程序中的 `app.json`：

- pages：全局中页面注册的位置；
- globalStyle：全局的样式配置，会作用于所有页面；
- tabBar：底部导航设置；

```
{    "pages": [ //pages数组中第一项表示应用启动页，参考：https://uniapp.dcloud.io/collocation/pages        {            "path": "pages/index/index",            "style": {                "navigationBarTitleText": "uni-app"            }        }        ,{            "path" : "pages/movies/movies",            "style" :                                                                                                {                "navigationBarTitleText": "",                "enablePullDownRefresh": false            }        }        ,{            "path" : "pages/studios/studios",            "style" :                                                                                                {                "navigationBarTitleText": "",                "enablePullDownRefresh": false            }        }        ,{            "path" : "pages/mine/mine",            "style" :                                                                                                {                "navigationBarTitleText": "",                "enablePullDownRefresh": false            }        }    ],    "globalStyle": {        "navigationBarTextStyle": "black",        "navigationBarTitleText": "uni-app",        "navigationBarBackgroundColor": "#F8F8F8",        "backgroundColor": "#F8F8F8"    },    "tabBar": {        "borderStyle": "white",        "selectedColor": "#42BD56",        "list": [            {                "pagePath": "pages/movies/movies",                "text": "电影",                "iconPath": "/static/tab/_movie.png",                "selectedIconPath": "/static/tab/movie.png"            },            {                "pagePath": "pages/studios/studios",                "text": "影院",                "iconPath": "/static/tab/_studio.png",                "selectedIconPath": "/static/tab/studio.png"            },            {                "pagePath": "pages/mine/mine",                "text": "我的",                "iconPath": "/static/tab/_mine.png",                "selectedIconPath": "/static/tab/mine.png"            }        ]    }}
```

## 创建组件

传统 vue 组件，需要安装、引用、注册，三个步骤后才能使用组件。`easycom`将其精简为一步。

只要组件安装在项目的components目录下或`uni_modules`目录下，并符合`components/组件名称/组件名称.vue`目录结构。就可以不用引用、注册，直接在页面中使用。

[组件说明](https://uniapp.dcloud.net.cn/component/#easycom组件规范)

我的代码：

https://gitee.com/tangzhenh/wn-18-uni-douban

20220516-01-更多页面引入vantui

# 在 uniapp 中引入 vantui

## 在更多页面中获取不同的电影数据

更多页面的做法：

在全局状态中，添加 `key` 的属性，用来标志当前用户点击的电影类型：

第 14 行，定义 `key` 的状态，第 18 行，添加 `rows` 计算属性，这个属性依赖 `state.key`；

```
import Vue from "vue";import Vuex from "vuex";import hot from "@/store/modules/hot.js"import coming from "@/store/modules/coming.js"Vue.use(Vuex);export default new Vuex.Store({    plugins: [Vuex.createLogger()],    // 用来描述全局的状态    state: {        count: 10,        // 标志更多页面当前显示的电影类型        key: ""    },    // 全局的计算属性    getters: {        rows(state) {            const {                key            } = state            return state[key].rows        }    },    // 用来描述修改全局状态的方法    mutations: {        setKey(state, key) {            state.key = key        }    },    actions: {},    // 引入（注册）其他的状态模块    modules: {        hot,        coming    },});
```

当用户点击更多按钮的时候：

第 43 行：引入 `mutations`；

第 46 行：根据用户点击的不同类型的按钮，设置 `key`

```
<template>    <view style="padding: 34rpx; height: 470rpx;">        <view style="display: flex; justify-content: space-between; font-size: 28rpx; color: #00084E">            <text>{{title}}</text>            <view @click="onMore" style="display: flex; align-items: center; justify-content: space-between;">                <text>更多</text>                <image style="width: 20rpx; height: 20rpx;" src="/static/icon/arrow-right.png"></image>            </view>        </view>        <scroll-view scroll-x>            <view style="display: flex; justify-content: space-between;">                <template v-for="(item, index) in rows">                    <movieItem :movie="item" :key="index" />                    <view style="min-width: 10rpx;" :key="'v' + index"></view>                </template>            </view>        </scroll-view>    </view></template><script>    import {        mapMutations    } from "vuex"    export default {        name: "movieList",        props: {            title: {                type: String,                default: "正在热映"            },            rows: {                type: Array,                default: () => []            }        },        data() {            return {            };        },        methods: {            ...mapMutations(["setKey"]),            onMore() {                const key = this.title === "正在热映" ? "hot" : "coming";                this.setKey(key);                uni.navigateTo({                    url: "/pages/more/more"                })            }        }    }</script>
```

在更多组件中：

第 23 行直接获取状态机中的 `rows` 就可以了；

```
<template>    <van-grid column-num="3" :border="true">        <van-grid-item use-slot v-for="(item, index) in rows" :key="index" >            <movieItem :movie="item" />        </van-grid-item>    </van-grid></template><script>    import {        mapGetters    } from "vuex"    export default {        data() {            return {            }        },        methods: {        },        computed: {            ...mapGetters(["rows"])        }    }</script>
```

## 引入 vantui

1、首先把 vantui 的库引入到 uniapp 的项目；

2、在 `pages.json` 中注册你需要的组件：注册的时候，路径必须是你刚刚安装的 unapp 的路径；

```
"globalStyle": {    "navigationBarTextStyle": "black",    "navigationBarTitleText": "uni-app",    "navigationBarBackgroundColor": "#F8F8F8",    "backgroundColor": "#F8F8F8",    "usingComponents": {        "van-button": "/wxcomponents/vant/button/index",        "van-grid": "/wxcomponents/vant/grid/index",        "van-grid-item": "/wxcomponents/vant/grid-item/index"    }},
```

3、使用组件：就按照在原生小程序中使用 vantui 的方式使用就行了。

```
<template>    <van-grid column-num="3" :border="true">        <van-grid-item use-slot v-for="(item, index) in rows" :key="index" >            <movieItem :movie="item" />        </van-grid-item>    </van-grid></template>
```

20220516-02-uni 中触底加载更多

# uni 中触底加载更多

在更多页面的触底事件中，我们需要通过触发 `actions` 去获取更多的电影数据，同时更新 `state`；

第 26 行就是触底事件：在 vue 中，直接把 `onReachBottom` 添加到组件的描述对象就可以了；

```
<template>    <van-grid column-num="3" :border="true">        <van-grid-item use-slot v-for="(item, index) in rows" :key="index" >            <movieItem :movie="item" />        </van-grid-item>    </van-grid></template><script>    import {        mapGetters,        mapActions    } from "vuex"    export default {        data() {            return {            }        },        methods: {            ...mapActions(["getMovies"])        },        computed: {            ...mapGetters(["rows"])        },        onReachBottom() {            // 获取电影数据            this.getMovies();        },        mounted() {            console.log(this)        }    }</script>
```

当前电影有两种电影类型，所以当触底的时候，首先要知道当前是哪种类型的电影，我把这一块的处理逻辑封装在 `actions` 中：

第 32 行：在 `stores/index.js` 中，定义一个 `getMovies`，当这个 `action` 被触发的时候，根据当前的电影类型，去触发对应的 `actions`：

```
import Vue from "vue";import Vuex from "vuex";import hot from "@/store/modules/hot.js"import coming from "@/store/modules/coming.js"Vue.use(Vuex);export default new Vuex.Store({    plugins: [Vuex.createLogger()],    // 用来描述全局的状态    state: {        count: 10,        // 标志更多页面当前显示的电影类型        key: ""    },    // 全局的计算属性    getters: {        rows(state) {            const {                key            } = state            return state[key].rows        }    },    // 用来描述修改全局状态的方法    mutations: {        setKey(state, key) {            state.key = key        }    },    actions: {        getMovies({            state,            dispatch        }) {            const {                key            } = state;            dispatch(`${key}/getMovies`)        }    },    // 引入（注册）其他的状态模块    modules: {        hot,        coming    },});
```

## hot 状态模块

```
import MoviesApi from "../../api/movies.js"export default {    namespaced: true,    state: {        start: 10,        count: 10,        state: "hot",        title: "正在热映",        total: 43,        rows: [],    },    mutations: {        getMovies(state, data) {            state.start = state.start + state.count;            state.rows = [...state.rows, ...data.rows];        }    },    actions: {        async getMovies({state, commit}) {            const {start, count} = state            const data = await MoviesApi.getHotMovies({start, count})            commit("getMovies", data)        }    }}
```

## coming 模块

```
import MoviesApi from "../../api/movies.js"export default {    namespaced: true,    state: {        start: 10,        count: 10,        state: "hot",        title: "正在热映",        total: 43,        rows: [],    },    mutations: {        getMovies(state, data) {            state.start = state.start + state.count;            state.rows = [...state.rows, ...data.rows];        }    },    actions: {        async getMovies({state, commit}) {            const {start, count} = state            const data = await MoviesApi.getHotMovies({start, count})            commit("getMovies", data)        }    }}
```

## Api

这里是封装的 `movies` 的远程数据接口：

```
import {  request} from "../utils/util"export default {  getHotMovies({    start,    count,  }) {    return request({      url: "/movies/hot",      data: {        start,        count      }    });  },  getComingMovies({    start,    count,  }) {    return request({      url: "/movies/coming",      data: {        start,        count      }    });  }}
```

## utils

这里是封装的 `request` 方法，在 uni 中，远程数据接口使用 `uni.request`：

第 24 行是使用全局定义的数据：

```
const formatTime = date => {    const year = date.getFullYear()    const month = date.getMonth() + 1    const day = date.getDate()    const hour = date.getHours()    const minute = date.getMinutes()    const second = date.getSeconds()    return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`}const formatNumber = n => {    n = n.toString()    return n[1] ? n : `0${n}`}const request = ({    url,    data,    method = "GET"} = {}) => {    const app = getApp();    const {        baseUrl    } = app.globalData;    return new Promise((resolve) => {        uni.request({            url: `${baseUrl}${url}`,            method,            data,            header: {                'content-type': 'application/json',            },            success: (res) => {                resolve(res.data)            }        })    })}module.exports = {    formatTime,    request}
```

## 全局数据的定义

在微信小程序中，我们可以把全局的数据定义在 `app.js` 中，在通过 `getApp` 方法去获取；在 uni 中也有类似的用法：

在项目的根目录中有一个 `App.vue` 的文件，我们就可以把一些全局需要的数据放在这里：

```
<script>    export default {        onLaunch: function() {            console.log('App Launch')        },        onShow: function() {            console.log('App Show')        },        onHide: function() {            console.log('App Hide')        },        globalData: {            userInfo: null,            baseUrl: "https://www.tangzhenh.com"        }    }</script><style>    /*每个页面公共css */</style>
```

版权