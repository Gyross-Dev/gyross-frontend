import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import axios from "axios";
import ErrorBoundary from "./components/errorBoundary/Error-Boundary.component";
import ContainerVendor from "./pages/dashboard/vendor/container/Container.vendor";
import Layout from "./layout/Layout";
import Spinner from "./components/spinner/Spinner.component";
const LoginSignup = lazy(() =>
  import("./pages/login-signup/vendor/Login_Signup.vendor")
);
const VendorLogin = lazy(() =>
  import("./pages/login/vendor-login/Vendor.login.page")
);
const BuyerLogin = lazy(() =>
  import("./pages/login/customer-login/Customer.login.page")
);
const VendorSignup = lazy(() =>
  import("./pages/signup/vendor-signup/Vendor.signup.page")
);
const BuyerSignup = lazy(() =>
  import("./pages/signup/customer-signup/Customer.signup.page")
);

const Container = lazy(() => import("./container/Container"));

class App extends React.Component {
  componentDidMount() {
    axios.get(process.env.REACT_APP_Heroku).then((res) => res);
  }
  render() {
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
              <Route
                exact
                path="/vendor-dashboard"
                component={ContainerVendor}
              />
            </Suspense>
          </ErrorBoundary>
        </Switch>
      </Layout>
    );
  }
}

export default App;
