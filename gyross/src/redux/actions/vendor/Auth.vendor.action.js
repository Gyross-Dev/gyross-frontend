import axios from "axios";

export const authTypes = {
  FETCH_LOGIN_START: "FETCH_LOGIN_START",
  FETCH_LOGIN_SUCCESS: "FETCH_LOGIN_SUCCESS",
  FETCH_LOGIN_FAILURE: "FETCH_LOGIN_FAILURE",
  LOGOUT: "LOGOUT",
};

export const fetchLoginStart = () => ({
  type: authTypes.FETCH_LOGIN_START,
});

export const fetchLoginSuccess = (success) => ({
  type: authTypes.FETCH_LOGIN_SUCCESS,
  payload: success,
});

export const fetchLoginFailure = (err) => ({
  type: authTypes.FETCH_LOGIN_FAILURE,
  payload: err,
});

export const loginAsync = (dataToSubmit) => async (dispatch) => {
  dispatch(fetchLoginStart());
  try {
    let apiUrl = `${process.env.REACT_APP_Heroku_Api}/vendors/signin`;
    const data = await axios.post(apiUrl, dataToSubmit).then((res) => res.data);
    if (data) {
      dispatch(fetchLoginSuccess(data));
    }
  } catch (err) {
    dispatch(fetchLoginFailure(err));
  }
};

export const logout = (history) => (dispatch) => {
  let token = localStorage.getItem("token");
  let id = localStorage.getItem("id");
  if (token || id) {
    localStorage.setItem("token", "");
    localStorage.setItem("id", "");
  }
  dispatch(LogoutStart());
  history.push("/");
};

export const LogoutStart = () => ({
  type: authTypes.LOGOUT,
});
