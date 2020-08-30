import { authTypes } from "../../actions/vendor/Auth.vendor.action";
const initialState = {
  auth: false,
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case authTypes.FETCH_LOGIN_START:
      return { ...state, isFetching: true, err: undefined, auth: false };

    case authTypes.FETCH_REGISTRATION_START:
      return {
        ...state,
        isFetching: true,
        regerr: {},
        auth: false,
        registrationSuccess: false,
      };

    case authTypes.FETCH_LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        auth: true,
        data: action.payload,
        err: undefined,
      };

    case authTypes.FETCH_REGISTRATION_SUCCESS:
      return {
        ...state,
        isFetching: false,
        registrationSuccess: true,
        regdata: action.payload,
        regerr: {},
        err: undefined,
      };

    case authTypes.FETCH_LOGIN_FAILURE:
      return {
        isFetching: false,
        auth: false,
        err: action.payload.response.data.message,
      };

    case authTypes.FETCH_REGISTRATION_FAILURE:
      let regerr = {
        code: action.payload.response.data.Error.code,
        details: action.payload.response.data.Error.details,
      };
      return {
        ...state,
        isFetching: false,
        regerr,
        registrationSuccess: false,
      };

    case authTypes.LOGOUT:
      return {
        isFetching: false,
        auth: false,
        data: null,
        err: undefined,
        registrationSuccess: false,
      };
    default:
      return state;
  }
};

export default AuthReducer;
