import React, { Component } from "react";
import FormField from "../../../utils/form/Formfield";
import FormButton from "../../../utils/buttons/FormButtons";
import "./Customer.login.page.scss";

import { auth, googleProvider } from "../../../firebase/firebase";
import { update, isFormValid } from "../../../utils/form/FormActions";
import { withRouter } from "react-router-dom";

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

  handleLogin = async (e) => {
    e.preventDefault();
    console.log("Hello");
    const cred = await auth.signInWithEmailAndPassword(
      "test@gmail.com",
      "test1234"
    );
    console.log("Login", cred);
  };
  googleLogin = async (e) => {
    e.preventDefault();
    await auth
      .signInWithPopup(googleProvider)
      .then((data) => {
        console.log("login successful");
        this.props.history.push("/");
      })
      .catch((err) => {
        this.errors.push(err.message);
        this.loading = false;
      });
  };
  render() {
    return (
      <div className="login-vendor-container">
        <div className="container-fields">
          <h1 className="vendor-title">Buyer Login</h1>
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
            <FormButton onClick={(e) => this.handleLogin(e)}>Log in</FormButton>
            <FormButton onClick={(e) => this.googleLogin(e)} isGoogleSignIn>
              Sign in with Google
            </FormButton>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
