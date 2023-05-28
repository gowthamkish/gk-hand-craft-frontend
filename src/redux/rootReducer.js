import { combineReducers } from "redux";
import loginReducer from "./loginRedux/loginReducer";
import registerReducer from "./registerRedux/registerReducer";
import globalLoaderReducer from "./global/loader/loaderReducer";

const rootReducer = combineReducers({
  loginReducer,
  registerReducer,
  globalLoaderReducer,
});

export default rootReducer;
