export function logout({ auth }) {
  auth = auth === true ? false : false;
  let token = localStorage.getItem("token");
  if (token) {
    localStorage.setItem("token", "");
  }
  return auth;
}
