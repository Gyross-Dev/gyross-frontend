import { nameLocationType } from "../../actions/vendor/Name-Location.action";
const initialState = {
  data: null,
  isFetching: false,
  err: undefined,
};

const NameLocationReducer = (state = initialState, action) => {
  switch (action.type) {
    case nameLocationType.FETCH_NAME_LOCATION_START:
      return Object.assign({}, state, { isFetching: true });
    case nameLocationType.FETCH_NAME_LOCATION_SUCCESS:
      return Object.assign({}, state, {
        data: action.payload,
      });
    case nameLocationType.FETCH_NAME_LOCATION_FAILURE:
      return Object.assign({}, state, {
        err: action.payload.response.data.message,
      });
    default:
      return state;
  }
};

export default NameLocationReducer;
