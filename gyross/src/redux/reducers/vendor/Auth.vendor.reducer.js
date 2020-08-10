import { authTypes } from "../../actions/vendor/Auth.vendor.action";
const initialState = {
  auth: false,
  isFetching: false,
  err: undefined,
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case authTypes.FETCH_AUTH_START:
      return Object.assign({}, state, { isFetching: true, auth: false });
    default:
      return state;
  }
};

export default AuthReducer;
