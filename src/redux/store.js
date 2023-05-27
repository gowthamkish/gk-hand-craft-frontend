import { legacy_createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";

const store = legacy_createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
