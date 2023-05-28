import {
  fetchLoginSuccess,
  fetchLoginFailure,
} from "../loginRedux/loginAction";
import {
  fetchRegisterRequest,
  fetchRegisterSuccess,
  fetchRegisterFailure,
} from "../registerRedux/registerAction";

import axios from "axios";
import { baseUrl } from "../../utilities/baseUrl";
import { startLoader, stopLoader } from "../global/loader/loaderAction";

export const fetchLogin = (payload) => {
  return (dispatch) => {
    dispatch(startLoader());

    let url = baseUrl + `/auth/login`;

    axios
      .post(url, payload)
      .then((response) => {
        const data = response.data;
        dispatch(fetchLoginSuccess(data));
        dispatch(stopLoader());
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchLoginFailure(errorMsg));
        dispatch(stopLoader());
      });
  };
};

export const fetchRegister = (payload) => {
  return (dispatch) => {
    dispatch(fetchRegisterRequest());

    let url = baseUrl + `/auth/register`;

    axios
      .post(url, payload)
      .then((response) => {
        const data = response.data;
        dispatch(fetchRegisterSuccess(data));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchRegisterFailure(errorMsg));
      });
  };
};
