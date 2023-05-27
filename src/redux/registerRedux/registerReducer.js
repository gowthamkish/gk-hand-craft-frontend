import {
  FETCH_REGISTER_REQUEST,
  FETCH_REGISTER_SUCCESS,
  FETCH_REGISTER_FAILURE,
} from "./registerActionTypes";

const initialState = {
  loading: false,
  registerResponse: [],
  error: "",
};

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        registerResponse: action.payload,
      };

    case FETCH_REGISTER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default registerReducer;
