import axios from "axios";
export const authTypes = {
  FETCH_AUTH_START: "FETCH_AUTH_START",
  FETCH_AUTH_SUCCESS: "FETCH_AUTH_SUCCESS",
  FETCH_AUTH_FAILURE: "FETCH_AUTH_FAILURE",
  LOGOUT: "LOGOUT",
};

export const fetchAuthStart = () => ({
  type: authTypes.FETCH_AUTH_START,
});

export const fetchAuthSuccess = (success) => ({
  type: authTypes.FETCH_AUTH_SUCCESS,
  payload: success,
});

export const fetchAuthFailure = (err) => ({
  type: authTypes.FETCH_AUTH_FAILURE,
  payload: err,
});

export const authenticateAsync = (token) => async (dispatch) => {
  dispatch(fetchAuthStart());
  try {
    let apiUrl = `${process.env.REACT_APP_Heroku_Api}/authenticate`;
    const data = await axios
      .get(apiUrl, { headers: { Authorization: token } })
      .then((res) => res.data);
    if (data) {
      dispatch(fetchAuthSuccess(data));
    }
  } catch (err) {
    dispatch(fetchAuthFailure(err));
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
