import React, { Component } from "react";
import { connect } from "react-redux";
import { authenticateAsync } from "../redux/auth/auth.action";
// import Spinner from "../components/spinner/Spinner.component";

export default function (ComposedClass, role) {
  class AuthenticationCheck extends Component {
    state = {
      loading: true,
      auth: false,
      role: {
        vendor: "vendor-login",
      },
    };

    componentDidMount() {
      this.setState({
        auth: this.props.auth ? this.props.auth : this.props.vendorAuth.auth,
      });
      if (role === "vendor") {
        let { auth, vendorAuth } = this.props;

        let token = localStorage.getItem("token");

        if (auth || vendorAuth) {
          this.setState({ auth: true });
        } else if (token) {
          this.props.authenticate(token);
        } else if (!vendorAuth && !auth) {
          this.props.history.push("/vendor-login");
        }
      }
    }
    componentDidUpdate(prevProps) {
      if (prevProps.auth !== this.props.auth) {
        this.setState({
          auth: this.props.auth,
        });
      }
    }

    render() {
      if (!this.state.auth) {
        return (
          <div style={style["unauthorizedmsg"]}>
            <div style={style["h1"]}>
              You are not Authorized to access this page.
              <h3 style={style["msgLogin"]}>Please Login first</h3>
            </div>
          </div>
        );
      }
      return <ComposedClass {...this.props} />;
    }
  }

  const mapStateToProps = (state) => ({
    auth: state.authentication.auth,
    vendorAuth: state.vendorAuth.auth,
  });
  const maDispatchToProps = (dispatch) => ({
    authenticate: (token) => dispatch(authenticateAsync(token)),
  });

  return connect(mapStateToProps, maDispatchToProps)(AuthenticationCheck);
}

const style = {
  unauthorizedmsg: {
    height: "80vh",
    weight: "80vw",
    textAlign: "center",
  },
  h1: {
    fontWeight: 600,
    fontSize: 20,
    color: "blue",
    margin: 30,
  },
  msgLogin: {
    fontSize: 30,
    marginTop: 20,
  },
};
