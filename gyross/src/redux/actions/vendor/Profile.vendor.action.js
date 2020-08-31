import axios from "axios";

export const profileType = {
  FETCH_PROFILE_START: "FETCH_PROFILE_START",
  FETCH_PROFILE_SUCCESS: "FETCH_PROFILE_SUCCESS",
  FETCH_PROFILE_FAILURE: "FETCH_PROFILE_FAILURE",
  FETCH_MENUS: "FETCH_MENUS",
};

export const fetchProfileStart = () => ({
  type: profileType.FETCH_PROFILE_START,
});

export const fetchProfileSuccess = (success) => ({
  type: profileType.FETCH_PROFILE_SUCCESS,
  payload: success,
});

export const fetchMenuSuccess = (success) => ({
  type: profileType.FETCH_MENUS,
  payload: success,
});

export const fetchProfileFailure = (err) => ({
  type: profileType.FETCH_PROFILE_FAILURE,
  payload: err,
});

export const fetchProfileAsync = () => async (dispatch) => {
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

export const getMenus = (id) => async (dispatch) => {
  try {
    const url = `${process.env.REACT_APP_Heroku_Api}/vendors/${id}/menu`;
    const data = await axios.get(url).then((res) => res.data);
    if (data) {
      dispatch(fetchMenuSuccess(data));
    }
  } catch (err) {
    return { payload: err };
  }
};
