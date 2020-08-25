import axios from "axios";

export const nameLocationType = {
  FETCH_NAME_LOCATION_START: "FETCH_NAME_LOCATION_START",
  FETCH_NAME_LOCATION_SUCCESS: "FETCH_NAME_LOCATION_SUCCESS",
  FETCH_NAME_LOCATION_FAILURE: "FETCH_NAME_LOCATION_FAILURE",
};

export const fetchNameLocationStart = () => ({
  type: nameLocationType.FETCH_NAME_LOCATION_START,
});

export const fetchNameLocationSuccess = (success) => ({
  type: nameLocationType.FETCH_NAME_LOCATION_SUCCESS,
  payload: success,
});

export const fetchNameLocationFailure = (err) => ({
  type: nameLocationType.FETCH_NAME_LOCATION_FAILURE,
  payload: err,
});

export const fetchNameLocationAsync = () => async (dispatch) => {
  dispatch(fetchNameLocationStart());
  try {
    let apiUrl = `${process.env.REACT_APP_Heroku_Api}/vendors/info/location`;
    const data = await axios.get(apiUrl).then((res) => res.data);
    if (data) {
      dispatch(fetchNameLocationSuccess(data));
    }
  } catch (err) {
    dispatch(fetchNameLocationFailure(err));
  }
};
