import axios from "axios";

export const profileType = {
  FETCH_PROFILE_START: "FETCH_PROFILE_START",
  FETCH_PROFILE_SUCCESS: "FETCH_PROFILE_SUCCESS",
  FETCH_PROFILE_FAILURE: "FETCH_PROFILE_FAILURE",
};

export const fetchProfileStart = () => ({
  type: profileType.FETCH_PROFILE_START,
});

export const fetchProfileSuccess = (success) => ({
  type: profileType.FETCH_PROFILE_SUCCESS,
  payload: success,
});

export const fetchProfileFailure = (err) => ({
  type: profileType.FETCH_PROFILE_FAILURE,
  payload: err,
});

export const fetchProfileAsync = (token) => async (dispatch) => {
  dispatch(fetchProfileStart());
  try {
    let token = localStorage.getItem("token");
    let username = localStorage.getItem("id");
    let apiUrl = `${process.env.REACT_APP_Heroku_Api}/vendors/${username}`;
    const data = await axios
      .get(apiUrl, { headers: { Authorization: token } })
      .then((res) => res.data);
    if (data) {
      dispatch(fetchProfileSuccess(data));
    }
  } catch (err) {
    dispatch(fetchProfileFailure(err));
  }
};
