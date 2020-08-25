import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import LoginSignup from "./pages/login-signup/vendor/Login_Signup.vendor";
import VendorLogin from "./pages/login/vendor-login/Vendor.login.page";
import BuyerLogin from "./pages/login/customer-login/Customer.login.page";
import VendorSignup from "./pages/signup/vendor-signup/Vendor.signup.page";
import BuyerSignup from "./pages/signup/customer-signup/Customer.signup.page";
import ContainerVendor from "./pages/dashboard/vendor/container/Container.vendor";
import ErrorBoundary from "./components/errorBoundary/Error-Boundary.component";
import Spinner from "./components/spinner/Spinner.component";
import Layout from "./layout/Layout";
import Container from "./container/Container";
import "./App.css";
function App() {
  return (
    <Layout>
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route path="/" exact component={Container} />
            <Route path="/vendor-login" exact component={VendorLogin} />
            <Route path="/vendor-signup" exact component={VendorSignup} />
            <Route path="/buyer-login" exact component={BuyerLogin} />
            <Route path="/buyer-Signup" exact component={BuyerSignup} />
            <Route path="/login-Signup" exact component={LoginSignup} />
            <Route exact path="/vendor-dashboard" component={ContainerVendor} />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </Layout>
  );
}

export default App;
