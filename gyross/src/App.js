import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import axios from "axios";
import Quickmenu from "./pages/learn-more/learnmore";
import ErrorBoundary from "./components/errorBoundary/Error-Boundary.component";
import VendorDashboard from "./pages/dashboard/vendor/container/Container.vendor";
import Layout from "./layout/Layout";
import Spinner from "./components/spinner/Spinner.component";
import Auth from "./hoc/Auth";
const Menu = lazy(() => import("./components/menus/Menus.component.js"));
const MenuForm = lazy(() =>
  import("./pages/dashboard/vendor/menu/Menu-form.vendor.js")
);

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

const BodyContainer = lazy(() => import("./body-container/BodyContainer.js"));

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
              <Route path="/" exact component={BodyContainer} />
              <Route path="/vendor-login" exact component={VendorLogin} />
              <Route path="/vendor-signup" exact component={VendorSignup} />
              <Route path="/buyer-login" exact component={BuyerLogin} />
              <Route path="/buyer-Signup" exact component={BuyerSignup} />
              <Route path="/learnmore" exact component={Quickmenu} />
              <Route path="/login-Signup" exact component={LoginSignup} />
              <Route path="/menu/:name/:id" exact component={Menu} />
              <Route
                path="/menu/form"
                exact
                component={Auth(MenuForm, "vendor")}
              />
              <Route
                exact
                path="/vendor-dashboard"
                component={Auth(VendorDashboard, "vendor")}
              />
            </Suspense>
          </ErrorBoundary>
        </Switch>
      </Layout>
    );
  }
}

export default App;
