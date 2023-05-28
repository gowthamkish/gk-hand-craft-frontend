import { FETCH_LOGIN_SUCCESS, FETCH_LOGIN_FAILURE } from "./loginActionTypes";

export const fetchLoginSuccess = (data) => {
  return {
    type: FETCH_LOGIN_SUCCESS,
    payload: data,
  };
};

export const fetchLoginFailure = (error) => {
  return {
    type: FETCH_LOGIN_FAILURE,
    payload: error,
  };
};
