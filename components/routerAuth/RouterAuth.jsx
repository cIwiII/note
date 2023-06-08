//  进行路由的权限匹配
import React, { Component } from 'react'
import {Redirect,Route} from "react-router-dom"
/*
 RouterConfig 路由信息
 { path: "/home", component: Home, auth: true },
 { path: '/home/product/add', component: Home, auth: true},
  */
import RouterConfig from "../config/routerConfig"

export default class RouterAuth extends Component {
  render() {
    //(1)默认当前获取到访问路由地址
    const {pathname} = this.props.location
    //(2)判断token是否存在
    const token = localStorage.getItem("token")
    // (3)你访问路由地址是否在我们映射文件中
    const targerRouterConfig = RouterConfig.find(item=>{
        return item.path.replace(/\s+/g,"") === pathname
    })
    // (4)判断你访问地址在配置文件中，进入下一步
    if(targerRouterConfig){
        if(targerRouterConfig.auth){
            if(token){
                return <Route path={targerRouterConfig.path} component={targerRouterConfig.component}></Route>
            }else{
                return <Redirect to="/login"></Redirect>
            }
        }else{
            return <Route path={targerRouterConfig.path} component={targerRouterConfig.component}></Route>
        }
    }else{
        return <Redirect to="/404"></Redirect>
    }
  }
}

