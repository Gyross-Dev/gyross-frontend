import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { auth, googleProvider } from "../../../firebase/firebase";
import FormField from "../../../utils/form/Formfield";
import FormButton from "../../../utils/buttons/FormButtons";
import "./Vendor.login.page.scss";
import { update, isFormValid } from "../../../utils/form/FormActions";
import { connect } from "react-redux";

class Login extends Component {
  state = {
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

    if (formIsValid) {
      try {
        let apiUrl = `${process.env.REACT_APP_Heroku_Api}/vendors/signin`;
        let username = this.state.formdata.username.value;
        let password = this.state.formdata.password.value;
        let body = { username, password };
        let data = await axios.post(apiUrl, body).then((res) => res.data);
        console.log(data);
        localStorage.setItem("token", data.token);
        if (data) {
          this.props.history.push("/vendor-dashboard");
        }
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
        console.log("login successful");
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
          <h1 className="vendor-title"> Vendor Login </h1>{" "}
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
              Log in
            </FormButton>{" "}
          </form>{" "}
        </div>{" "}
      </div>
    );
  }
}

export default connect()(withRouter(Login));
