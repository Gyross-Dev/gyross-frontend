import { authTypes } from "../../actions/vendor/Auth.vendor.action";
const initialState = {
  auth: false,
  isFetching: false,
  err: undefined,
  data: null,
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case authTypes.FETCH_LOGIN_START:
      return { ...state, isFetching: true };

    case authTypes.FETCH_REGISTRATION_START:
      return { ...state, isFetching: true };

    case authTypes.FETCH_LOGIN_SUCCESS:
      return { ...state, isFetching: false, auth: true, data: action.payload };

    case authTypes.FETCH_REGISTRATION_SUCCESS:
      return {
        ...state,
        isFetching: false,
        registrationSuccess: true,
        regdata: action.payload,
      };

    case authTypes.FETCH_LOGIN_FAILURE:
      return {
        ...state,
        isFetching: false,
        auth: false,
        err: action.payload.response.data.message,
      };

    case authTypes.FETCH_REGISTRATION_FAILURE:
      let err = {
        code: action.payload.response.data.code,
        details: action.payload.response.data.details,
      };
      return {
        ...state,
        isFetching: false,
        err: err,
      };

    case authTypes.LOGOUT:
      return {
        ...state,
        isFetching: false,
        auth: false,
        data: null,
        err: undefined,
      };
    default:
      return state;
  }
};

export default AuthReducer;
