import { combineReducers } from "redux";
import loginReducer from "./loginRedux/loginReducer";
import registerReducer from "./registerRedux/registerReducer";

const rootReducer = combineReducers({
  loginReducer,
  registerReducer,
});

export default rootReducer;
