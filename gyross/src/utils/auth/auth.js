export function logout(history) {
  let token = localStorage.getItem("token");
  if (token) {
    localStorage.setItem("token", "");
  }
  history.push("/");
}
