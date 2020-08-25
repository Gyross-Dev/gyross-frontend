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
      return Object.assign({}, state, { isFetching: true, auth: false });
    case authTypes.FETCH_LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        auth: true,
        data: action.payload,
      });
    case authTypes.FETCH_LOGIN_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        auth: false,
        err: action.payload.response.data.message,
      });
    case authTypes.LOGOUT:
      return Object.assign({}, state, {
        isFetching: false,
        auth: false,
        data: null,
      });
    default:
      return state;
  }
};

export default AuthReducer;
