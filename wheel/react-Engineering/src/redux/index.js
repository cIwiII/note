import { legacy_createStore } from "redux"
import reducer from "./reducer"
// import {changeUsername, action, action2} from "./actions"; //页面上使用
// 创建一个仓库。里面存放我们的数据
const store = legacy_createStore(reducer)

export default store