import React from "react";
import "./Navigation.component.scss";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { authenticateAsync } from "../../redux/auth/auth.action";
import { logout } from "../../redux/auth/auth.action";

class Navigation extends React.Component {
  state = {
    auth: false,
  };
  componentDidMount() {
    let token = localStorage.getItem("token");
    if (token) {
      this.props.authenticateAsync(token);
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.auth !== this.props.auth) {
      this.setState({ auth: this.props.auth });
    }
    if (prevProps.authenticate !== this.props.authenticate) {
      this.setState({ auth: this.props.authenticate });
    }
  }
  render() {
    const { auth } = this.state;
    const { history } = this.props;

    return (
      <div className="navigation-container">
        <nav>
          <div className="nav-item">
            <Link to="/">Home</Link>
          </div>
          {!auth ? (
            <>
              <div className="dropdown show">
                <div
                  to="/"
                  className="nav-item dropdown-toggle"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Sign in
                </div>

                <div
                  className="dropdown-menu dropdown-menu-right"
                  aria-labelledby="dropdownMenuLink"
                >
                  <Link className="dropdown-item" to="/vendor-login">
                    Vendor
                  </Link>
                  <Link className="dropdown-item" to="/buyer-login">
                    Buyer
                  </Link>
                </div>
              </div>
              <div className="dropdown show">
                <div
                  to="/"
                  className="nav-item dropdown-toggle"
                  role="button"
                  id="dropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Sign up
                </div>

                <div
                  className="dropdown-menu dropdown-menu-right"
                  aria-labelledby="dropdownMenuLink"
                >
                  <Link className="dropdown-item" to="/vendor-signup">
                    Vendor
                  </Link>
                  <Link className="dropdown-item" to="/buyer-signup">
                    Buyer
                  </Link>
                </div>
              </div>
            </>
          ) : null}
          {auth ? (
            <>
              <div className="nav-item">
                <Link to="/vendor-dashboard">Profile</Link>
              </div>
              <div className="nav-item">
                <div
                  className="link_div"
                  onClick={() => this.props.logout(history)}
                >
                  Logout
                </div>
              </div>
            </>
          ) : null}
        </nav>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  auth: state.vendorAuth.auth,
  authenticate: state.authentication.auth,
});

const mapDispatchToProps = (dispatch) => ({
  logout: (history) => dispatch(logout(history)),
  authenticateAsync: (token) => dispatch(authenticateAsync(token)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Navigation));
