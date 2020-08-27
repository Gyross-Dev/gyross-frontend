import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { auth, googleProvider } from "../../../firebase/firebase";

import { SmallSpinner } from "../../../components/spinner/Spinner.component";
import FormField from "../../../utils/form/Formfield";
import FormButton from "../../../utils/buttons/FormButtons";
import "./Vendor.login.page.scss";
import {
  update,
  isFormValid,
  generateData,
} from "../../../utils/form/FormActions";

//Redux action
import { loginAsync } from "../../../redux/actions/vendor/Auth.vendor.action";
import { connect } from "react-redux";

class Login extends Component {
  state = {
    auth: {
      auth: false,
      isFetching: null,
      err: undefined,
      data: {},
    },
    formError: false,
    formSuccess: "",
    formdata: {
      username: {
        element: "input",
        value: "",
        showlabel: true,
        config: {
          name: "username_input",
          type: "username",
          label: "username",
          placeholder: "Enter your username",
        },
        validation: {
          required: true,
          username: true,
        },
        valid: false,
        touched: false,
        validationMessage: "",
      },
      password: {
        element: "input",
        value: "",
        showlabel: true,
        config: {
          name: "password_input",
          type: "password",
          label: "password",
          placeholder: "Enter your password",
        },
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
        validationMessage: "",
      },
    },
  };

  componentDidMount() {
    this.setState({ auth: this.props.vendorAuth });
  }
  componentDidUpdate(prevProps) {
    if (prevProps.vendorAuth !== this.props.vendorAuth) {
      this.setState({
        auth: { ...this.state.auth, ...this.props.vendorAuth },
      });
      if (this.props.vendorAuth.data) {
        let id = this.props.vendorAuth.data.Message.split(" ")[1];
        let token = this.props.vendorAuth.data.token;
        localStorage.setItem("token", token);
        localStorage.setItem("id", id);
        this.props.history.push("/vendor-dashboard");
      }
    }
  }

  updateForm = (element) => {
    const newFormdata = update(element, this.state.formdata, "login");
    this.setState({
      formError: false,
      formdata: newFormdata,
    });
  };

  submitForm = async (event) => {
    event.preventDefault();
    let formIsValid = isFormValid(this.state.formdata, "login");
    let dataToSubmit = generateData(this.state.formdata, "login");
    if (formIsValid) {
      try {
        this.props.login(dataToSubmit);
      } catch (err) {
        console.log(err);
      }
    } else {
      this.setState({
        formError: true,
      });
    }
  };

  googleLogin = async (e) => {
    e.preventDefault();
    await auth
      .signInWithPopup(googleProvider)
      .then((data) => {
        this.props.history.push("/vendor-dashboard");
      })
      .catch((err) => {
        console.log("Login unsuccessful", err);
        this.loading = false;
      });
  };

  render() {
    return (
      <div className="login-vendor-container">
        <div className="container-fields">
          <h1 className="vendor-title">Vendor Login</h1>{" "}
          <form>
            <FormField
              id={"username"}
              formdata={this.state.formdata.username}
              change={(element) => this.updateForm(element)}
            />
            <FormField
              id={"password"}
              formdata={this.state.formdata.password}
              change={(element) => this.updateForm(element)}
            />
            {this.state.formError ? (
              <div className="submit_error_label"> Please check your data </div>
            ) : null}{" "}
            <FormButton onClick={(event) => this.submitForm(event)}>
              {this.state.auth.isFetching ? (
                <div
                  style={{ width: "30px", height: "30px", marginRight: "10px" }}
                >
                  <SmallSpinner />{" "}
                </div>
              ) : null}
              Log in
            </FormButton>{" "}
          </form>{" "}
          {this.state.auth.err ? (
            <div style={{ marginTop: "10px" }} className="submit_error_label">
              {this.state.auth.err}
            </div>
          ) : null}{" "}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  vendorAuth: state.vendorAuth,
  auth: state.authentication.auth,
});

const mapDispatchToProps = (dispatch) => ({
  login: (data) => dispatch(loginAsync(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));
