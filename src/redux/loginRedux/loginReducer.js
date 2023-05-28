import { FETCH_LOGIN_SUCCESS, FETCH_LOGIN_FAILURE } from "./loginActionTypes";

const initialState = {
  loginResponse: [],
  error: "",
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOGIN_SUCCESS:
      return {
        ...state,
        loginResponse: action.payload,
      };

    case FETCH_LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default loginReducer;
