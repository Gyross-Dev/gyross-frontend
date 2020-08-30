import React, { Component } from "react";
import FormField from "../../../utils/form/Formfield";
import FormButton from "../../../utils/buttons/FormButtons";
import {
  update,
  isFormValid,
  generateData,
} from "../../../utils/form/FormActions";
import Dialog from "@material-ui/core/Dialog";
import { registrationAsync } from "../../../redux/actions/vendor/Auth.vendor.action";
import "./Vendor.signup.page.scss";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class Signup extends Component {
  state = {
    auth: {
      auth: false,
      isFetching: null,
      regdata: {},
      regerr: undefined,
    },
    formError: false,
    formSuccess: false,
    formdata: {
      firstname: {
        element: "input",
        value: "",
        showlabel: true,
        config: {
          name: "firstname_input",
          type: "text",
          label: "First Name",
          placeholder: "Enter your first name",
        },
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
        validationMessage: "",
      },
      lastname: {
        element: "input",
        value: "",
        showlabel: true,
        config: {
          name: "lastname_input",
          type: "text",
          label: "Last Name",
          placeholder: "Enter your last name",
        },
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
        validationMessage: "",
      },
      email: {
        element: "input",
        value: "",
        showlabel: true,
        config: {
          name: "email_input",
          type: "email",
          label: "Email",
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
      username: {
        element: "input",
        value: "",
        showlabel: true,
        config: {
          name: "username",
          type: "text",
          label: "Username",
          placeholder: "Enter your username",
        },
        validation: {
          required: true,
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
          label: "Password",
          placeholder: "Enter your password",
        },
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
        validationMessage: "",
      },
      confirmPassword: {
        element: "input",
        value: "",
        showlabel: true,
        config: {
          name: "confirm_password_input",
          type: "password",
          label: "Confirm Password",
          placeholder: "Confirm your password",
        },
        validation: {
          required: true,
          confirm: "password",
        },
        valid: false,
        touched: false,
        validationMessage: "",
      },
    },
  };

  componentDidMount() {
    this.setState({ auth: { ...this.state.auth, ...this.props.vendorAuth } });
  }
  componentDidUpdate(prevProps) {
    if (prevProps.vendorAuth !== this.props.vendorAuth) {
      this.setState({
        auth: { ...this.state.auth, ...this.props.vendorAuth },
        formSuccess: this.props.vendorAuth.registrationSuccess,
      });
    }
    if (this.state.formSuccess) {
      setTimeout(() => {
        this.props.history.push("/vendor-login");
      }, 2000);
    }
  }

  updateForm = (element) => {
    const newFormdata = update(element, this.state.formdata, "signup");
    this.setState({
      formError: false,
      formdata: newFormdata,
    });
  };

  submitForm = (event) => {
    event.preventDefault();
    let formIsValid = isFormValid(this.state.formdata, "signup");
    let dataToSubmit = generateData(this.state.formdata, "signup");
    if (formIsValid) {
      try {
        this.props.registration(dataToSubmit);
      } catch (err) {
        this.setState({ formError: true, formSuccess: false });
      }
    } else {
      this.setState({
        formError: true,
        formSuccess: false,
      });
    }
  };

  render() {
    return (
      <div className="signup-vendor-container">
        <div className="container-fields">
          <h1 className="vendor-title">Vendor Registration</h1>
          <form>
            <h2>Personal information</h2>
            <div className="form_items">
              <FormField
                id={"firstname"}
                formdata={this.state.formdata.firstname}
                change={(element) => this.updateForm(element)}
              />
              <FormField
                id={"lastname"}
                formdata={this.state.formdata.lastname}
                change={(element) => this.updateForm(element)}
              />
              <FormField
                id={"email"}
                formdata={this.state.formdata.email}
                change={(element) => this.updateForm(element)}
              />
            </div>

            <div className="form_items">
              <FormField
                id={"username"}
                formdata={this.state.formdata.username}
                change={(element) => this.updateForm(element)}
              />
              <h2>Verify password</h2>
              <FormField
                id={"password"}
                formdata={this.state.formdata.password}
                change={(element) => this.updateForm(element)}
              />
              <FormField
                id={"confirmPassword"}
                formdata={this.state.formdata.confirmPassword}
                change={(element) => this.updateForm(element)}
              />
            </div>
            <div>
              {this.state.formError ? (
                <div className="submit_error_label">Please check your data</div>
              ) : null}
              <FormButton onClick={(event) => this.submitForm(event)}>
                Create an account
              </FormButton>
            </div>
          </form>
          {this.state.auth.regerr ? (
            this.state.auth.regerr.code === 6 ? (
              <div style={{ marginTop: "10px" }} className="submit_error_label">
                Username not available, try with a different one.
              </div>
            ) : null
          ) : null}
        </div>
        {this.state.formSuccess ? (
          <Dialog open={this.state.formSuccess}>
            <div className="dialog_alert">
              <h1>Congratulations !!</h1>
              <h1>{this.state.auth.regdata.Message}</h1>
              <div>
                You will be redirected to the LOGIN Page in a couple seconds...
              </div>
            </div>
          </Dialog>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  vendorAuth: state.vendorAuth,
  auth: state.authentication.auth,
});

const mapDispatchToProps = (dispatch) => ({
  registration: (data) => dispatch(registrationAsync(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Signup));
