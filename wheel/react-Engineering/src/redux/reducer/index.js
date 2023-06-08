import { combineReducers } from "redux";
import UserReducer from "./UserReducer";
import CountReducer from "./CountReducer";
/** 将多个reducer合并在一起 */
export default combineReducers({
  UserRD: UserReducer,
  CountRD: CountReducer
});
