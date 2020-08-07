import React from "react";
import { Switch, Route } from "react-router-dom";
import LoginSignup from "./pages/login-signup/vendor/Login_Signup.vendor";
import VendorLogin from "./pages/login/vendor-login/Vendor.login.page";
import VendorSignup from "./pages/signup/vendor-signup/Vendor.signup.page";
import "./App.css";

import Layout from "./layout/Layout";
import Container from "./container/Container";
function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Container} />
        <Route path="/login" exact component={VendorLogin} />
        <Route path="/signup" exact component={VendorSignup} />
        <Route path="/login_Signup" exact component={LoginSignup} />
      </Switch>
    </Layout>
  );
}

export default App;
