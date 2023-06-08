
文档地址： https://www.jianshu.com/p/d909cd3c67ca

## 1、问题
哈希路由跳转时参数拼在哪里？
```js
https://xxx.com/xxx/#/home?a=1&b=2

https://xxx.com/xxx/?a=1&b=2#/home
```
区别和优缺点在哪里？
- 完整的URL由这几个部分构成：scheme://host:port/path?query#hash

    - scheme：通信协议，常用的有http、https、ftp、mailto等。
    - host：主机域名或IP地址。
    - port：端口号，可选。省略时使用协议的默认端口，如http默认端口为80。
    - path：路径由零或多个"/"符号隔开的字符串组成，一般用来表示主机上的一个目录或文件地址。
    - query：查询，可选。用于传递参数，可有多个参数，用"&“符号隔开，每个参数的名和值用”="符号隔开。
    - hash：信息片断字符串，也称为锚点。用于指定网络资源中的片断。

## 2、react-router是怎么跳转的
2.1.react-router的一般用法
```jsx
import { HashRouter, Route, Switch } from 'react-router-dom';
<HashRouter>
  <Switch>
    <Route path='/' component={Home}/>
    <Route path='/list' render={() => <List />}/>
<Route path='/detail'><Detail /><Route>
  </Switch>
</HashRouter>
```
2.2 react-router-dom和react-router什么关系

react-router目录:
```jsx
export { default as MemoryRouter } from "./MemoryRouter.js";
export { default as Prompt } from "./Prompt.js";
export { default as Redirect } from "./Redirect.js";
export { default as Route } from "./Route.js";
export { default as Router } from "./Router.js";
export { default as StaticRouter } from "./StaticRouter.js";
export { default as Switch } from "./Switch.js";
export { default as generatePath } from "./generatePath.js";
export { default as matchPath } from "./matchPath.js";
export { default as withRouter } from "./withRouter.js";

export { default as __HistoryContext } from "./HistoryContext.js";
export { default as __RouterContext } from "./RouterContext.js";

export { useHistory, useLocation, useParams, useRouteMatch } from "./hooks.js";
```
react-router-dom目录:
```jsx
export {
  MemoryRouter,
  Prompt,
  Redirect,
  Route,
  Router,
  StaticRouter,
  Switch,
  generatePath,
  matchPath,
  withRouter,
  useHistory,
  useLocation,
  useParams,
  useRouteMatch
} from "react-router";

export { default as BrowserRouter } from "./BrowserRouter.js";
export { default as HashRouter } from "./HashRouter.js";
export { default as Link } from "./Link.js";
export { default as NavLink } from "./NavLink.js";
```

- react-router: 实现了路由的核心功能

- react-router-dom: 基于react-router，加入了在浏览器运行环境下的一些功能

例如：
    - Link组件，会渲染一个a标签，Link组件源码a标签行;
    - BrowserRouter和HashRouter组件，前者使用pushState和popState事件构建路由，后者使用 window.location.hash和hashchange事件构建路由。

- React-router组件结构
    - 路由器组件
        - BrowserRouter
        - HashRouter
    - 路由匹配组件
        - Router
        - Switch
    - 导航组件
        - Link
        - NavLink

2.2.1 BrowserRouter和HashRouter
```jsx
import { Router } from "react-router";
import { createHashHistory as createHistory } from "history";
class HashRouter extends React.Component {
  history = createHistory(this.props);

  render() {
    return <Router history={this.history} children={this.props.children} />;
  }
}
```
- createBrowserHistory 和 createHashHistory
- setState、PopStateEvent、HashChangeEvent、replaceHashPath（为什么hash后面的参数不被保留）

