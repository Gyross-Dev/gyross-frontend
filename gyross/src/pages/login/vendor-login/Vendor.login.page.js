import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { GoogleLogin } from "../../../firebase/firebase";
import FormField from "../../../utils/form/Formfield";
import FormButton from "../../../utils/buttons/FormButtons";
import "./Vendor.login.page.scss";
import { update, isFormValid } from "../../../utils/form/FormActions";

class Login extends Component {
  state = {
    formError: false,
    formSuccess: "",
    formdata: {
      email: {
        element: "input",
        value: "",
        showlabel: true,
        config: {
          name: "email_input",
          type: "email",
          label: "email",
          placeholder: "Enter your email",
        },
        validation: {
          required: true,
          email: true,
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

  updateForm = (element) => {
    const newFormdata = update(element, this.state.formdata, "login");
    this.setState({
      formError: false,
      formdata: newFormdata,
    });
  };

  submitForm = (event) => {
    event.preventDefault();
    let formIsValid = isFormValid(this.state.formdata, "login");

    if (formIsValid) {
      console.log("Login Succeess");
    } else {
      this.setState({
        formError: true,
      });
    }
  };

  render() {
    return (
      <div className="login-vendor-container">
        <div className="container-fields">
          <h1 className="vendor-title">Vendor Login</h1>
          <form>
            <FormField
              id={"email"}
              formdata={this.state.formdata.email}
              change={(element) => this.updateForm(element)}
            />

            <FormField
              id={"password"}
              formdata={this.state.formdata.password}
              change={(element) => this.updateForm(element)}
            />

            {this.state.formError ? (
              <div className="submit_error_label">Please check your data</div>
            ) : null}
            <FormButton onClick={(event) => this.submitForm(event)}>
              Log in
            </FormButton>
            <FormButton onClick={GoogleLogin} isGoogleSignIn>
              Sign in with Google
            </FormButton>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
