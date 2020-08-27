import { profileType } from "../../actions/vendor/Profile.vendor.action";
const initialState = {
  data: null,
  isFetching: false,
  err: undefined,
};

const ProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case profileType.FETCH_PROFILE_START:
      return Object.assign({}, state, { isFetching: true });
    case profileType.FETCH_PROFILE_SUCCESS:
      return Object.assign({}, state, {
        data: action.payload,
      });
    case profileType.FETCH_PROFILE_FAILURE:
      return Object.assign({}, state, {
        err: action.payload.response.data.message,
      });
    default:
      return state;
  }
};

export default ProfileReducer;
