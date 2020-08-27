// import axios from "axios";

import { authTypes } from "./auth.action";

const initialState = {
  auth: false,
  currentUser: {},
  isFetching: false,
  err: undefined,
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case authTypes.FETCH_AUTH_START:
      return { ...state, isFetching: true, auth: false };
    case authTypes.FETCH_AUTH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        auth: true,
        currentUser: action.payload,
      };
    case authTypes.FETCH_AUTH_FAILURE:
      return {
        ...state,
        isFetching: false,
        auth: false,
        err: action.payload,
      };
    case authTypes.LOGOUT:
      return Object.assign({}, state, {
        isFetching: false,
        auth: false,
        data: null,
        err: undefined,
      });
    default:
      return state;
  }
};

export default AuthReducer;
